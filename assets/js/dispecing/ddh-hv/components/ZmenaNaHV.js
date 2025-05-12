import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Alert, Row, Col } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'
import debounce from '../../../utils/debounce'
import {
  createZmenaNaHVRequest,
  updateZmenaNaHVRequest,
  fetchZmenaNaHVRequest,
  deleteZmenaNaHVRequest
} from '../actions'
import { canEditData } from '../../../utils/datePermissions'

class ZmenaNaHV extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedHVType: 'Zapad', // Default selected HV type
      localEntries: {}, // Store local entry values for optimistic updates
      debouncedUpdates: {}, // Store debounced update functions for each entry by ID
      hvMapping: {
        'HV Západ': 'Zapad',
        'HV Východ': 'Vychod'
      },
      hvDisplayNames: {
        Zapad: 'HV Západ',
        Vychod: 'HV Východ'
      }
    }

    this.handleAddEntry = this.handleAddEntry.bind(this)
    this.handleRemoveEntry = this.handleRemoveEntry.bind(this)
    this.handleHVTypeChange = this.handleHVTypeChange.bind(this)
    this.fetchCurrentHVData = this.fetchCurrentHVData.bind(this)
  }

  componentDidMount() {
    this.fetchCurrentHVData()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Fetch data when selectedHVType changes
    if (prevState.selectedHVType !== this.state.selectedHVType) {
      this.fetchCurrentHVData()
    }

    // Fetch data when hlavny_id changes
    if (this.props.hlavny && prevProps.hlavny && this.props.hlavny.id !== prevProps.hlavny.id) {
      this.fetchCurrentHVData()
    }

    // Update local entries when entries change WITHOUT triggering a re-fetch
    if (this.props.entries !== prevProps.entries && !this.props.loading) {
      const localEntries = {}
      this.props.entries.forEach(entry => {
        localEntries[entry.id] = { ...entry }
      })
      this.setState({ localEntries })
    }
  }

  fetchCurrentHVData() {
    if (this.props.hlavny && this.props.hlavny.id) {
      this.props.fetchZmenaNaHV(this.state.selectedHVType, this.props.hlavny.id)
    }
  }

  handleHVTypeChange(e) {
    this.setState({ selectedHVType: e.target.value })
  }

  handleAddEntry() {
    const { hlavny, createZmenaNaHV } = this.props
    const { selectedHVType } = this.state

    if (!hlavny || !hlavny.id) {
      alert('Hlavný záznam nie je načítaný.')
      return
    }

    createZmenaNaHV(selectedHVType, hlavny.id)
  }

  handleRemoveEntry(id) {
    const { deleteZmenaNaHV } = this.props
    const { selectedHVType } = this.state

    if (window.confirm('Naozaj chcete odstrániť túto položku?')) {
      deleteZmenaNaHV(selectedHVType, id)
    }
  }

  // Get or create a debounced update function for a specific entry
  getDebouncedUpdate(entryId, fieldName) {
    const key = `${entryId}-${fieldName}`

    if (!this.state.debouncedUpdates[key]) {
      const debouncedFn = debounce(value => {
        // Save the previous value before sending the update
        const entry = this.props.entries.find(e => e.id === entryId)
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
        this.props.updateZmenaNaHV(
          this.state.selectedHVType,
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

    const inputType = fieldName === 'poznamka' ? 'textarea' : 'text'

    // For text fields and textareas, use debounce
    const debouncedUpdate = this.getDebouncedUpdate(entry.id, fieldName)
    debouncedUpdate(value)
  }

  handleDateChange = (entry, fieldName, newValue) => {
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
      this.props.updateZmenaNaHV(
        this.state.selectedHVType,
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
      this.props.updateZmenaNaHV(
        this.state.selectedHVType,
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

  // Convert a numeric timestamp to a format suitable for datetime-local input
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

  renderHVTypeOptions() {
    return Object.entries(this.state.hvDisplayNames).map(([key, value]) => (
      <option key={key} value={key}>
        {value}
      </option>
    ))
  }

  renderEntry(entry) {
    // Get the local entry data for optimistic updates
    const localEntry = this.state.localEntries[entry.id] || entry

    // Convert timestamp to local datetime format
    const dateDisplay = this.getDisplayDate(localEntry.datum_cas)

    return (
      <Form className="mt-4" style={{ border: '1px solid #dedede', padding: '1rem', marginBottom: '1rem' }}>
        {/* Dátum a čas */}
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

        {/* Poznámka */}
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

        {/* "Odstrániť" button to remove this entry */}
        <Button color="danger" className="mt-3" onClick={() => this.handleRemoveEntry(entry.id)}>
          Odstrániť
        </Button>
      </Form>
    )
  }

  render() {
    const { hlavny, opravnenia, entries = [], loading } = this.props
    const { selectedHVType, hvDisplayNames } = this.state

    // Sort entries by id DESC (newest entries first)
    const sortedEntries = [...entries].sort((a, b) => b.id - a.id)

    // Check if user can edit based on permissions and date
    const canEdit = hlavny && opravnenia ? canEditData(hlavny, opravnenia) : false

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Zmeny na HV</CardHeader>
        <CardBody>
          {/* HV Type Selector */}
          <Row className="mb-3">
            <Col md="6">
              <FormGroup>
                <Label for="hvTypeSelect">Horúcovod</Label>
                <Input type="select" id="hvTypeSelect" value={selectedHVType} onChange={this.handleHVTypeChange}>
                  {this.renderHVTypeOptions()}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          {/* Add Button - only for users with edit permissions */}
          {canEdit && (
            <Button color="success" onClick={this.handleAddEntry} className="mb-3">
              Pridať
            </Button>
          )}

          {/* Loading state only shown during initial load, not during CRUD operations */}
          {loading && sortedEntries.length === 0 && !this.state.localEntries[0] && (
            <div className="text-center p-3">
              <p className="mt-2">Načítavam údaje...</p>
            </div>
          )}

          {/* No Data message - only shown when not loading */}
          {!loading && sortedEntries.length === 0 && (
            <Alert color="info">
              <FontAwesome name="info-circle" /> Žiadne záznamy pre {hvDisplayNames[selectedHVType]}
            </Alert>
          )}

          {/* Entries list - always show during CRUD operations to maintain UI stability */}
          {(sortedEntries.length > 0 || Object.keys(this.state.localEntries).length > 0) && (
            <div>
              {sortedEntries.map((entry, index) => (
                <div key={`hv-entry-${entry.id}-${index}`}>{this.renderEntry(entry)}</div>
              ))}
            </div>
          )}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  // Get the entries for the current HV type
  const hvTypeKey = state.zmenaHV.currentHVType || 'Zapad'

  return {
    hlavny: state.hlavny,
    opravnenia: state.opravnenia,
    entries: state.zmenaHV.entries[hvTypeKey] || [],
    loading: state.zmenaHV.loading || false
  }
}

const mapDispatchToProps = dispatch => ({
  fetchZmenaNaHV: (hvType, hlavnyId) => dispatch(fetchZmenaNaHVRequest(hvType, hlavnyId)),
  createZmenaNaHV: (hvType, hlavnyId) => dispatch(createZmenaNaHVRequest(hvType, hlavnyId)),
  updateZmenaNaHV: (hvType, data, rollbackCallback) => dispatch(updateZmenaNaHVRequest(hvType, data, rollbackCallback)),
  deleteZmenaNaHV: (hvType, id) => dispatch(deleteZmenaNaHVRequest(hvType, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ZmenaNaHV)
