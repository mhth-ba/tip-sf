import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  FormText,
  Badge
} from 'reactstrap'
import moment from 'moment'
import debounce from '../../../utils/debounce'
import { diacriticFilter, diacriticMatch } from '../../../utils/diacritic'
import {
  fetchOdstavkyOSTNad24HodRequest,
  updatePraceNaOSTPrevadzkaRequest,
  updatePraceNaOSTDispecingRequest,
  fetchPrilohyRequest,
  uploadPrilohaRequest
} from '../actions'

import DropzoneComponent from 'react-dropzone-component'
import FileAttachments from './FileAttachments'

class OdstavkyOSTNad24Hod extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Store per-entry OST filters
      entryOstFilters: {},
      // Store local entry values for optimistic updates
      localEntries: {},
      // Store debounced update functions for each entry by ID
      debouncedUpdates: {},
      // File upload configuration
      componentConfig: {
        showFiletypeIcon: true,
        postUrl: $('#uploader').data('endpoint'),
        maxFilesize: 1000 // MB
      },
      djsConfig: {
        autoProcessQueue: true,
        dictDefaultMessage: 'Presuňte súbory sem, alebo kliknite pre nahratie',
        dictInvalidFileType: 'Neplatný typ súboru'
      }
    }

    this.handleAddedFile = this.handleAddedFile.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  componentDidMount() {
    // Fetch odstavky when component mounts if hlavny_id is available
    if (this.props.hlavny && this.props.hlavny.id) {
      this.props.fetchOdstavkyOSTNad24Hod(this.props.hlavny.id)
    }

    // Fetch attachments for all entries
    if (this.props.odstavky && this.props.odstavky.entries) {
      this.props.odstavky.entries.forEach(entry => {
        this.props.fetchPrilohy(entry.id)
      })
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // When entries are loaded or updated from the server, update our local state
    if (prevProps.odstavky.entries !== this.props.odstavky.entries) {
      const localEntries = {}
      this.props.odstavky.entries.forEach(entry => {
        localEntries[entry.id] = { ...entry }
      })
      this.setState({ localEntries })
    }

    // Check if hlavny_id has changed and fetch data if needed
    if (prevProps.hlavny.id !== this.props.hlavny.id && this.props.hlavny.id) {
      this.props.fetchOdstavkyOSTNad24Hod(this.props.hlavny.id)
    }

    // If there's an error, handle it
    if (!prevProps.odstavky.error && this.props.odstavky.error) {
      console.error('Operation failed:', this.props.odstavky.error)
    }
  }

  handleAddedFile(file) {
    // This method is called when a file is added to the dropzone
  }

  handleUpload(file, entry) {
    const { hlavny } = this.props

    if (!hlavny || !hlavny.id) {
      alert('Hlavný záznam nie je načítaný.')
      return
    }

    const original = file.name
    const filename = JSON.parse(file.xhr.response).filename

    const data = {
      hlavny_id: hlavny.id,
      entry_id: entry.id,
      original: original,
      subor: filename
    }

    this.props.uploadPriloha(data)
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

  // Get or create a debounced update function for a specific entry
  getDebouncedUpdate(entryId, fieldName, source) {
    const key = `${entryId}-${fieldName}-${source}`

    if (!this.state.debouncedUpdates[key]) {
      const debouncedFn = debounce(value => {
        // Find the entry in our local entries
        const entry = this.state.localEntries[entryId]
        if (!entry) return

        // Save the previous value for possible rollback
        const previousValue = entry[fieldName]

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

        // Choose the right update function based on the source
        if (source === 'prevadzka') {
          this.props.updatePraceNaOSTPrevadzkaRequest(
            {
              id: entryId,
              [fieldName]: value
            },
            rollbackCallback
          )
        } else if (source === 'dispecing') {
          this.props.updatePraceNaOSTDispecingRequest(
            {
              id: entryId,
              [fieldName]: value
            },
            rollbackCallback
          )
        }
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
    if (fieldName === 'datum_cas_zaciatok' || fieldName === 'datum_cas_ukoncenie') {
      this.handleDateChange(entry, fieldName, value)
      return
    }

    const inputType =
      fieldName === 'poznamka'
        ? 'textarea'
        : ['ost', 'vplyv_na_dodavku', 'vyvod', 'stav', 'vybavuje'].includes(fieldName)
        ? 'select'
        : 'text'

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

      // Choose the right update function based on the source
      if (entry.source === 'prevadzka') {
        this.props.updatePraceNaOSTPrevadzkaRequest(
          {
            id: entry.id,
            [fieldName]: value
          },
          rollbackCallback
        )
      } else if (entry.source === 'dispecing') {
        this.props.updatePraceNaOSTDispecingRequest(
          {
            id: entry.id,
            [fieldName]: value
          },
          rollbackCallback
        )
      }
    }
    // For text fields and textareas, use debounce
    else {
      // Get the debounced function for this entry and field
      const debouncedUpdate = this.getDebouncedUpdate(entry.id, fieldName, entry.source)
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
          [fieldName]: newValue
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
      if (entry.source === 'prevadzka') {
        this.props.updatePraceNaOSTPrevadzkaRequest(
          {
            id: entry.id,
            [fieldName]: null
          },
          rollbackCallback
        )
      } else if (entry.source === 'dispecing') {
        this.props.updatePraceNaOSTDispecingRequest(
          {
            id: entry.id,
            [fieldName]: null
          },
          rollbackCallback
        )
      }
      return
    }

    try {
      // Create a date object from the input
      const dateObj = new Date(newValue)

      // Use timestamp for consistency across all date fields
      const timestamp = Math.floor(dateObj.getTime() / 1000) // Convert to seconds

      // Choose the right update function based on the source
      if (entry.source === 'prevadzka') {
        this.props.updatePraceNaOSTPrevadzkaRequest(
          {
            id: entry.id,
            [fieldName]: timestamp
          },
          rollbackCallback
        )
      } else if (entry.source === 'dispecing') {
        this.props.updatePraceNaOSTDispecingRequest(
          {
            id: entry.id,
            [fieldName]: timestamp
          },
          rollbackCallback
        )
      }
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

  renderFileUpload(entry) {
    return (
      <Row>
        <Col md="12">
          <FormGroup>
            <Label>Prílohy</Label>
            <FileAttachments entryId={entry.id} />
            <DropzoneComponent
              config={this.state.componentConfig}
              djsConfig={this.state.djsConfig}
              eventHandlers={{
                addedfile: file => this.handleAddedFile(file),
                complete: file => this.handleUpload(file, entry)
              }}
            />
            <FormText color="muted">Nahrajte súbory súvisiace s touto prácou (max. 10MB na súbor)</FormText>
          </FormGroup>
        </Col>
      </Row>
    )
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
    // Use local entry data for display to implement optimistic updates
    const startDateDisplay = this.getDisplayDate(localEntry.datum_cas_zaciatok)
    const endDateDisplay = this.getDisplayDate(localEntry.datum_cas_ukoncenie)

    // Determine badge color for source
    // const sourceBadgeColor = localEntry.source === 'prevadzka' ? 'secondary' : 'secondary'
    const sourceBadgeColor = 'primary'
    const sourceLabel = localEntry.source === 'prevadzka' ? 'Prevádzka' : 'Dispečing a poruchová služba'

    return (
      <Form key={entry.id} className="mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0"># {entry.id}</h5>
          <Badge color={sourceBadgeColor}>{sourceLabel}</Badge>
        </div>

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
              <FormText color="muted">Filter funguje aj bez diakritiky a na veľkosti písmen nezáleží.</FormText>
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
              <FormText color="muted">Použite filter OST vyššie pre zúženie výberu.</FormText>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Začiatok prác</Label>
              <Input
                type="datetime-local"
                name="datum_cas_zaciatok"
                value={startDateDisplay}
                onChange={e => this.handleChangeField(entry, 'datum_cas_zaciatok', e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Ukončenie prác</Label>
              <Input
                type="datetime-local"
                name="datum_cas_koniec"
                value={endDateDisplay}
                onChange={e => this.handleChangeField(entry, 'datum_cas_ukoncenie', e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Vplyv na dodávku</Label>
              <Input
                type="select"
                value={localEntry.vplyv_na_dodavku || ''}
                onChange={e => this.handleChangeField(entry, 'vplyv_na_dodavku', e.target.value)}
              >
                <option value="">-- Vyberte --</option>
                <option value="Prerušenie">Prerušenie</option>
                <option value="Obmedzenie">Obmedzenie</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Vývod</Label>
              <Input
                type="select"
                value={localEntry.vyvod || ''}
                onChange={e => this.handleChangeField(entry, 'vyvod', e.target.value)}
              >
                <option value="">-- Vyberte --</option>
                <option value="TV">TV</option>
                <option value="ÚK">ÚK</option>
                <option value="VZT">VZT</option>
                <option value="TV + ÚK">TV + ÚK</option>
                <option value="TV + VZT">TV + VZT</option>
                <option value="ÚK + VZT">ÚK + VZT</option>
                <option value="TV + ÚK + VZT">TV + ÚK + VZT</option>
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

        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Stav</Label>
              <Input
                type="select"
                value={localEntry.stav || ''}
                onChange={e => this.handleChangeField(entry, 'stav', e.target.value)}
              >
                <option value="">-- Vyberte --</option>
                <option value="V riešení">V riešení</option>
                <option value="Provizórne vyriešené">Provizórne vyriešené</option>
                <option value="Vyriešené">Vyriešené</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Vybavuje</Label>
              <Input
                type="select"
                value={localEntry.vybavuje || ''}
                onChange={e => this.handleChangeField(entry, 'vybavuje', e.target.value)}
              >
                <option value="">-- Vyberte --</option>
                <option value="Dispečing">Dispečing</option>
                <option value="RIS">RIS</option>
                <option value="Obvod východ">Obvod východ</option>
                <option value="Obvod západ">Obvod západ</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {/* File upload section */}
        {this.renderFileUpload(entry)}

        <hr style={{ marginTop: '20px' }} />
      </Form>
    )
  }

  render() {
    // Filter entries to show only those that are valid
    const validEntries =
      this.props.odstavky && this.props.odstavky.entries
        ? this.props.odstavky.entries.filter(entry => entry.valid !== false)
        : []

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Odstávky OST nad 24 hod.</CardHeader>
        <CardBody>
          {validEntries.length === 0 && this.props.odstavky.loading && (
            <div className="text-center mt-4">
              <p>Načítavam údaje...</p>
            </div>
          )}

          {validEntries.length === 0 && !this.props.odstavky.loading && (
            <div className="text-center text-muted mb-0">
              <p>Žiadne odstávky OST nad 24 hodín.</p>
            </div>
          )}

          {validEntries.map(entry => this.renderEntry(entry))}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  odstavky: state.odstavkyostnad24hod,
  ost: (state.ost && state.ost.entries) || []
})

const mapDispatchToProps = dispatch => ({
  fetchOdstavkyOSTNad24Hod: hlavnyId => dispatch(fetchOdstavkyOSTNad24HodRequest(hlavnyId)),
  updatePraceNaOSTPrevadzkaRequest: (data, rollbackCallback) =>
    dispatch(updatePraceNaOSTPrevadzkaRequest(data, rollbackCallback)),
  updatePraceNaOSTDispecingRequest: (data, rollbackCallback) =>
    dispatch(updatePraceNaOSTDispecingRequest(data, rollbackCallback)),
  fetchPrilohy: entryId => dispatch(fetchPrilohyRequest(entryId)),
  uploadPriloha: data => dispatch(uploadPrilohaRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(OdstavkyOSTNad24Hod)
