import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Row, Col, FormText } from 'reactstrap'
import moment from 'moment'
import debounce from '../../../utils/debounce'
import {
  createPraceNaOSTPrevadzkaRequest,
  updatePraceNaOSTPrevadzkaRequest,
  fetchPraceNaOSTPrevadzkaRequest
} from '../actions'

class PraceNaOSTPrevadzka extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ostFilter: '',
      // Store local entry values for optimistic updates
      localEntries: {},
      // Store debounced update functions for each entry by ID
      debouncedUpdates: {}
    }

    this.handleOstFilterChange = this.handleOstFilterChange.bind(this)
    this.handleAddForm = this.handleAddForm.bind(this)
  }

  componentDidUpdate(prevProps) {
    // When entries are loaded or updated from the server, update our local state
    if (prevProps.prace.entries !== this.props.prace.entries) {
      const localEntries = {}
      this.props.prace.entries.forEach(entry => {
        localEntries[entry.id] = { ...entry }
      })
      this.setState({ localEntries })
    }

    // If there's an error, we need to check which update caused it
    if (!prevProps.prace.error && this.props.prace.error) {
      // Error handling could be implemented here if needed
      console.error('Operation failed:', this.props.prace.error)
    }
  }

  handleOstFilterChange(e) {
    this.setState({ ostFilter: e.target.value })
  }

  handleAddForm() {
    const { hlavny, createPraceNaOSTPrevadzkaRequest, fetchPraceNaOSTPrevadzka } = this.props
    if (!hlavny || !hlavny.id) {
      alert('Hlavný záznam nie je načítaný.')
      return
    }
    // Dispatch create action
    createPraceNaOSTPrevadzkaRequest(hlavny.id)
      .then(() => {
        // Re-fetch all entries after creation, so the new entry appears
        fetchPraceNaOSTPrevadzka(hlavny.id)
      })
      .catch(err => {
        console.error(err)
      })
  }

  // Get or create a debounced update function for a specific entry
  getDebouncedUpdate(entryId, fieldName) {
    const key = `${entryId}-${fieldName}`

    if (!this.state.debouncedUpdates[key]) {
      const debouncedFn = debounce(value => {
        // Save the previous value before sending the update
        const entry = this.props.prace.entries.find(e => e.id === entryId)
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
        this.props.updatePraceNaOSTPrevadzkaRequest(
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

  // Modify the handleChangeField method
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

      this.props.updatePraceNaOSTPrevadzkaRequest(
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
      this.props.updatePraceNaOSTPrevadzkaRequest(
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
      this.props.updatePraceNaOSTPrevadzkaRequest(
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

    // For the OST filter
    const allOstOptions = [
      { value: 'OST 750', label: 'OST 750' },
      { value: 'OST 770', label: 'OST 770' },
      { value: 'OST 850', label: 'OST 850' }
    ]
    const { ostFilter } = this.state
    const filteredOstOptions = allOstOptions.filter(opt => opt.label.toLowerCase().includes(ostFilter.toLowerCase()))

    // Convert the DB/stored date/time into the format needed by <input type="datetime-local">
    // Use local entry data for display to implement optimistic updates
    const startDateDisplay = this.getDisplayDate(localEntry.datum_cas_zaciatok)
    const endDateDisplay = this.getDisplayDate(localEntry.datum_cas_ukoncenie)

    return (
      <Form key={entry.id} className="mt-4">
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
                {filteredOstOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Input>
              <FormText color="muted">Filtrujte názvy OST podľa poľa "Filter OST" hore.</FormText>
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
        <hr />
      </Form>
    )
  }

  render() {
    const { ostFilter } = this.state
    const persistedEntries = this.props.prace && this.props.prace.entries ? this.props.prace.entries : []

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Práce na OST - prevádzka</CardHeader>
        <CardBody>
          <Button color="success" onClick={this.handleAddForm}>
            Pridať
          </Button>
          <FormGroup className="mt-2">
            <Label for="ostFilter">Filter OST</Label>
            <Input
              type="text"
              id="ostFilter"
              value={ostFilter}
              onChange={this.handleOstFilterChange}
              placeholder="Zadajte filter pre OST..."
            />
          </FormGroup>

          {persistedEntries.map(entry => this.renderEntry(entry))}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  prace: state.pracenaostprevadzka
})

const mapDispatchToProps = dispatch => ({
  createPraceNaOSTPrevadzkaRequest: hlavnyId => dispatch(createPraceNaOSTPrevadzkaRequest(hlavnyId)),
  updatePraceNaOSTPrevadzkaRequest: (data, rollbackCallback) =>
    dispatch(updatePraceNaOSTPrevadzkaRequest(data, rollbackCallback)),
  fetchPraceNaOSTPrevadzka: hlavnyId => dispatch(fetchPraceNaOSTPrevadzkaRequest(hlavnyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PraceNaOSTPrevadzka)
