import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import moment from 'moment'
import debounce from '../../../utils/debounce'
import { diacriticFilter, diacriticMatch } from '../../../utils/diacritic'
import { createPoznamkaRequest, updatePoznamkaRequest, fetchPoznamkyRequest, deletePoznamkaRequest } from '../actions'

class Poznamky extends React.Component {
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

    this.handleAddForm = this.handleAddForm.bind(this)
  }

  componentDidMount() {
    // If hlavny_id is available, fetch data
    if (this.props.hlavny && this.props.hlavny.id) {
      this.props.fetchPoznamky(this.props.hlavny.id)
    }
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

    // Check if hlavny_id has changed and fetch data if needed
    if (prevProps.hlavny.id !== this.props.hlavny.id && this.props.hlavny.id) {
      this.props.fetchPoznamky(this.props.hlavny.id)
    }

    // If there's an error, we need to check which update caused it
    if (!prevProps.poznamky.error && this.props.poznamky.error) {
      // Error handling could be implemented here if needed
      console.error('Operation failed:', this.props.poznamky.error)
    }
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

  handleAddForm() {
    const { hlavny, createPoznamkaRequest, fetchPoznamky } = this.props
    if (!hlavny || !hlavny.id) {
      alert('Hlavný záznam nie je načítaný.')
      return
    }

    // Dispatch create action
    createPoznamkaRequest(hlavny.id)

    // Re-fetch all entries after creation
    fetchPoznamky(hlavny.id)
  }

  // Handle the delete button click
  handleDeleteEntry = entryId => {
    const { hlavny, deletePoznamkaRequest, fetchPoznamky } = this.props

    if (window.confirm('Naozaj chcete odstrániť túto položku?')) {
      // First remove from local state for immediate UI update
      this.setState(prevState => {
        const newLocalEntries = { ...prevState.localEntries }
        delete newLocalEntries[entryId]
        return { localEntries: newLocalEntries }
      })

      // Then send the delete request to the server
      deletePoznamkaRequest(entryId)

      // After deletion, refresh the list
      if (hlavny && hlavny.id) {
        fetchPoznamky(hlavny.id)
      }
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
        this.props.updatePoznamkaRequest(
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

  // Modified handleChangeField method
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

      this.props.updatePoznamkaRequest(
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
      this.props.updatePoznamkaRequest(
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
      this.props.updatePoznamkaRequest(
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

  // Convert a numeric or string date from Redux to "YYYY-MM-DDTHH:mm" for <input type="datetime-local">
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

  renderEntry(entry) {
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
      <Form key={entry.id} className="mt-4">
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>Filter OST pre tento záznam</Label>
              <Input
                type="text"
                value={ostFilter}
                onChange={e => this.handleOstFilterChange(entry.id, e.target.value)}
                placeholder="Zadajte filter pre OST..."
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Dátum a čas</Label>
              <Input
                type="datetime-local"
                value={dateDisplay}
                onChange={e => this.handleChangeField(entry, 'datum_cas', e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Objekt OST/PK</Label>
              <Input
                type="select"
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
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <FormGroup>
              <Label>Poznámka</Label>
              <Input
                type="textarea"
                value={localEntry.poznamka || ''}
                onChange={e => this.handleChangeField(entry, 'poznamka', e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="mt-4 mb-3">
          <Col className="text-center">
            <Button color="danger" onClick={() => this.handleDeleteEntry(entry.id)} className="px-4">
              Odstrániť
            </Button>
          </Col>
        </Row>

        <hr style={{ marginTop: '20px' }} />
      </Form>
    )
  }

  render() {
    // Filter entries to show only those that are valid
    const validEntries =
      this.props.poznamky && this.props.poznamky.entries
        ? this.props.poznamky.entries.filter(entry => entry.valid !== false)
        : []

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Poznámky</CardHeader>
        <CardBody>
          <Button color="success" onClick={this.handleAddForm}>
            Pridať
          </Button>

          {validEntries.map(entry => this.renderEntry(entry))}

          {validEntries.length === 0 && (
            <div className="text-center mt-4">
              <p>Žiadne záznamy. Kliknite na "Pridať" pre vytvorenie nového záznamu.</p>
            </div>
          )}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  poznamky: state.poznamky,
  ost: (state.ost && state.ost.entries) || []
})

const mapDispatchToProps = dispatch => ({
  createPoznamkaRequest: hlavnyId => dispatch(createPoznamkaRequest(hlavnyId)),
  updatePoznamkaRequest: (data, rollbackCallback) => dispatch(updatePoznamkaRequest(data, rollbackCallback)),
  fetchPoznamky: hlavnyId => dispatch(fetchPoznamkyRequest(hlavnyId)),
  deletePoznamkaRequest: id => dispatch(deletePoznamkaRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Poznamky)
