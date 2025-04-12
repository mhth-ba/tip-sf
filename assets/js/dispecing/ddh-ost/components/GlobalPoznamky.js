import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Button, Row, Col } from 'reactstrap'
import { createPoznamkaRequest, fetchPoznamkyRequest } from '../actions'
import moment from 'moment'
import debounce from '../../../utils/debounce'
import { diacriticFilter, diacriticMatch } from '../../../utils/diacritic'
import { updatePoznamkaRequest, deletePoznamkaRequest } from '../actions'

class GlobalPoznamky extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Store per-entry OST filters
      entryOstFilters: {},
      // Store local entry values for optimistic updates
      localEntries: {},
      // Store debounced update functions for each entry by ID
      debouncedUpdates: {}
    }
  }

  componentDidMount() {
    // Fetch all poznamky when component mounts
    this.props.fetchPoznamky()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // When entries are loaded or updated from the server, update our local state
    if (prevProps.poznamky.entries !== this.props.poznamky.entries) {
      const localEntries = {}
      this.props.poznamky.entries.forEach(entry => {
        localEntries[entry.id] = { ...entry }
      })
      this.setState({ localEntries })
    }
  }

  handleAddForm = () => {
    this.props.createPoznamka()
  }

  // Handle OST filter change for a specific entry
  handleOstFilterChange = (entryId, value) => {
    this.setState(prevState => ({
      entryOstFilters: {
        ...prevState.entryOstFilters,
        [entryId]: value
      }
    }))
  }

  // Handle the delete button click
  handleDeleteEntry = entryId => {
    if (window.confirm('Naozaj chcete odstrániť túto položku?')) {
      // First remove from local state for immediate UI update
      this.setState(prevState => {
        const newLocalEntries = { ...prevState.localEntries }
        delete newLocalEntries[entryId]
        return { localEntries: newLocalEntries }
      })

      // Then send the delete request to the server
      this.props.deletePoznamka(entryId)
    }
  }

  // Get or create a debounced update function for a specific entry
  getDebouncedUpdate(entryId, fieldName) {
    const key = `${entryId}-${fieldName}`

    if (!this.state.debouncedUpdates[key]) {
      const debouncedFn = debounce(value => {
        // Save the previous value before sending the update
        const entry = this.props.poznamky.entries.find(e => e.id === entryId)
        const previousValue = entry ? entry[fieldName] : undefined

        // Create rollback function for sagas
        const rollbackCallback = () => {
          this.setState(prevState => ({
            localEntries: {
              ...prevState.localEntries,
              [entryId]: {
                ...prevState.localEntries[entryId],
                [fieldName]: previousValue
              }
            }
          }))
        }

        // Send the update request
        this.props.updatePoznamka(
          {
            id: entryId,
            [fieldName]: value
          },
          rollbackCallback
        )
      }, 2000)

      // Store the debounced function
      this.setState(prevState => ({
        debouncedUpdates: {
          ...prevState.debouncedUpdates,
          [key]: debouncedFn
        }
      }))

      return debouncedFn
    }

    return this.state.debouncedUpdates[key]
  }

  // Handle field changes
  handleChangeField = (entry, fieldName, value) => {
    // First, update local state for immediate visual feedback
    this.setState(prevState => ({
      localEntries: {
        ...prevState.localEntries,
        [entry.id]: {
          ...prevState.localEntries[entry.id],
          [fieldName]: value
        }
      }
    }))

    // Handle dates specially
    if (fieldName === 'datum_cas') {
      this.handleDateChange(entry, fieldName, value)
      return
    }

    const inputType = fieldName === 'poznamka' ? 'textarea' : fieldName === 'ost' ? 'select' : 'text'

    // For select fields, update immediately
    if (inputType === 'select') {
      // Save the previous value for possible rollback
      const previousValue = entry[fieldName]

      // Create rollback function for sagas
      const rollbackCallback = () => {
        this.setState(prevState => ({
          localEntries: {
            ...prevState.localEntries,
            [entry.id]: {
              ...prevState.localEntries[entry.id],
              [fieldName]: previousValue
            }
          }
        }))
      }

      this.props.updatePoznamka(
        {
          id: entry.id,
          [fieldName]: value
        },
        rollbackCallback
      )
    }
    // For text fields and textareas, use debounce
    else {
      // Get the debounced function for this entry and field
      const debouncedUpdate = this.getDebouncedUpdate(entry.id, fieldName)
      debouncedUpdate(value)
    }
  }

  handleDateChange = (entry, fieldName, newValue) => {
    // First, update local state for immediate visual feedback
    this.setState(prevState => ({
      localEntries: {
        ...prevState.localEntries,
        [entry.id]: {
          ...prevState.localEntries[entry.id],
          [fieldName]: newValue // For date fields, store the date string locally
        }
      }
    }))

    // Store previous value for possible rollback
    const previousValue = entry[fieldName]

    // Create rollback function for sagas
    const rollbackCallback = () => {
      this.setState(prevState => ({
        localEntries: {
          ...prevState.localEntries,
          [entry.id]: {
            ...prevState.localEntries[entry.id],
            [fieldName]: previousValue
          }
        }
      }))
    }

    // If user clears the field, send null
    if (!newValue) {
      this.props.updatePoznamka(
        {
          id: entry.id,
          [fieldName]: null
        },
        rollbackCallback
      )
      return
    }

    try {
      // Create a date object from the input
      const dateObj = new Date(newValue)

      // Use timestamp for consistency across all date fields
      const timestamp = Math.floor(dateObj.getTime() / 1000) // Convert to seconds

      // Only send the ID and the changed field
      this.props.updatePoznamka(
        {
          id: entry.id,
          [fieldName]: timestamp
        },
        rollbackCallback
      )
    } catch (err) {
      console.error(`Error converting date: ${newValue}`, err)
    }
  }

  // Convert timestamps to date format for inputs
  getDisplayDate = value => {
    if (!value) return ''
    // If value is numeric (a Unix timestamp), convert it.
    if (typeof value === 'number') {
      return moment.unix(value).format('YYYY-MM-DDTHH:mm')
    }
    // Otherwise, assume it's a string that can be parsed.
    // Try to parse known formats and output in the proper format.
    return moment(value, ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DDTHH:mm']).format('YYYY-MM-DDTHH:mm')
  }

  renderEntryForm(entry) {
    // Get the local entry data for optimistic updates
    const localEntry = this.state.localEntries[entry.id] || entry

    // Get the OST filter for this specific entry
    const ostFilter = this.state.entryOstFilters[entry.id] || ''

    // Group OST options by type
    const ostByType = {}

    if (this.props.ost && this.props.ost.length > 0) {
      this.props.ost.forEach(ost => {
        if (!ostByType[ost.typ]) {
          ostByType[ost.typ] = []
        }

        // Create the option with the format "cislo + space + adresa"
        const ostOption = {
          value: `${ost.cislo} ${ost.adresa}`,
          label: `${ost.cislo} ${ost.adresa}`,
          cislo: ost.cislo,
          adresa: ost.adresa
        }

        ostByType[ost.typ].push(ostOption)
      })
    }

    // Filter OST options based on the entry-specific filter using diacritic-insensitive filtering
    const filteredOstOptions = {}
    Object.keys(ostByType).forEach(typ => {
      // Use diacriticFilter function for each type group
      if (ostFilter) {
        const filtered = ostByType[typ].filter(
          ost =>
            diacriticMatch(ost.label, ostFilter) ||
            diacriticMatch(ost.cislo, ostFilter) ||
            diacriticMatch(ost.adresa, ostFilter)
        )
        if (filtered.length > 0) {
          filteredOstOptions[typ] = filtered
        }
      } else {
        filteredOstOptions[typ] = ostByType[typ]
      }
    })

    // Custom sort order for option groups: PK, OST, OOST, OŠ, then others alphabetically
    const customSortOrder = {
      PK: 1,
      OST: 2,
      OOST: 3,
      OŠ: 4
    }

    // Sort the keys (typ) according to custom order
    const sortedTypes = Object.keys(filteredOstOptions).sort((a, b) => {
      const orderA = customSortOrder[a] || 100 // Default high value for types not in the custom order
      const orderB = customSortOrder[b] || 100

      if (orderA === orderB) {
        // If both are in the "others" category (or the same category), sort alphabetically
        return a.localeCompare(b)
      }

      return orderA - orderB
    })

    // Convert the DB/stored date/time into the format needed by <input type="datetime-local">
    const dateDisplay = this.getDisplayDate(localEntry.datum_cas)

    return (
      <div style={{ padding: '10px' }}>
        <div className="form-group mb-2">
          <label>Filter OST pre tento záznam</label>
          <input
            type="text"
            className="form-control"
            value={ostFilter}
            onChange={e => this.handleOstFilterChange(entry.id, e.target.value)}
            placeholder="Zadajte filter pre OST..."
          />
        </div>

        <div className="form-group mb-2">
          <label>Dátum a čas</label>
          <input
            type="datetime-local"
            className="form-control"
            value={dateDisplay}
            onChange={e => this.handleChangeField(entry, 'datum_cas', e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>Objekt OST/PK</label>
          <select
            className="form-control"
            value={localEntry.ost || ''}
            onChange={e => this.handleChangeField(entry, 'ost', e.target.value)}
          >
            <option value="">-- Vyberte --</option>

            {/* Render grouped OST options in custom sort order */}
            {sortedTypes.map(typ => (
              <optgroup key={typ} label={typ}>
                {filteredOstOptions[typ].map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="form-group mb-3">
          <label>Poznámka</label>
          <textarea
            className="form-control"
            value={localEntry.poznamka || ''}
            onChange={e => this.handleChangeField(entry, 'poznamka', e.target.value)}
            rows="3"
          />
        </div>

        <div className="text-center">
          <Button color="danger" size="sm" onClick={() => this.handleDeleteEntry(entry.id)}>
            Odstrániť
          </Button>
        </div>
      </div>
    )
  }

  renderReadOnlyEntry(entry) {
    const formatDate = timestamp => {
      if (!timestamp) return '-'
      return moment.unix(timestamp).format('DD.MM.YYYY HH:mm')
    }

    return (
      <div style={{ padding: '10px' }}>
        <div className="mb-2">
          <strong>Dátum a čas:</strong>
          <div>{formatDate(entry.datum_cas)}</div>
        </div>
        <div className="mb-2">
          <strong>Objekt OST/PK:</strong>
          <div>{entry.ost || '-'}</div>
        </div>
        <div className="mb-2">
          <strong>Poznámka:</strong>
          <div style={{ whiteSpace: 'pre-line' }}>{entry.poznamka || '-'}</div>
        </div>
      </div>
    )
  }

  render() {
    const { opravnenia, poznamky } = this.props
    const canEdit = opravnenia && opravnenia.editor
    const validEntries = poznamky && poznamky.entries ? poznamky.entries.filter(entry => entry.valid !== false) : []

    return (
      <Card className="mb-4">
        <CardHeader className="bg-primary text-white">Poznámky</CardHeader>
        <CardBody>
          {canEdit && (
            <div className="mb-3">
              <Button color="success" onClick={this.handleAddForm}>
                Pridať
              </Button>
            </div>
          )}

          <div
            style={{
              overflowX: 'auto',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: '15px'
            }}
            className="horizontal-scroll-container"
          >
            {validEntries.length === 0 ? (
              <div className="text-center p-3" style={{ width: '100%' }}>
                <p className="text-muted mb-0">Žiadne záznamy na zobrazenie.</p>
              </div>
            ) : (
              validEntries.map(entry => (
                <Card
                  key={entry.id}
                  style={{ minWidth: '300px', maxWidth: '350px', flex: '0 0 auto', marginBottom: 0 }}
                >
                  <CardBody style={{ padding: '0.75rem' }}>
                    {canEdit ? this.renderEntryForm(entry) : this.renderReadOnlyEntry(entry)}
                  </CardBody>
                </Card>
              ))
            )}
          </div>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  opravnenia: state.opravnenia,
  poznamky: state.poznamky,
  ost: (state.ost && state.ost.entries) || []
})

const mapDispatchToProps = dispatch => ({
  fetchPoznamky: () => dispatch(fetchPoznamkyRequest()),
  createPoznamka: () => dispatch(createPoznamkaRequest()),
  updatePoznamka: (data, rollbackCallback) => dispatch(updatePoznamkaRequest(data, rollbackCallback)),
  deletePoznamka: id => dispatch(deletePoznamkaRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalPoznamky)
