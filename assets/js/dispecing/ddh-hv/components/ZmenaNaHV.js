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
  Alert,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
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
      activeTab: null, // Active tab
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
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    this.fetchCurrentHVData()

    // Set initial active tab if entries exist
    if (this.props.entries && this.props.entries.length > 0 && !this.state.activeTab) {
      const sortedEntries = [...this.props.entries].sort((a, b) => b.id - a.id)
      if (sortedEntries.length > 0) {
        this.setState({ activeTab: sortedEntries[0].id.toString() })
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Fetch data when selectedHVType changes
    if (prevState.selectedHVType !== this.state.selectedHVType) {
      this.fetchCurrentHVData()
      // Reset active tab when HV type changes
      this.setState({ activeTab: null })
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

      // Handle tab switching after add/delete
      const prevCount = prevProps.entries ? prevProps.entries.length : 0
      const currentCount = this.props.entries ? this.props.entries.length : 0

      if (currentCount > prevCount && this.props.entries.length > 0) {
        // New entry added, switch to newest
        const sortedEntries = [...this.props.entries].sort((a, b) => b.id - a.id)
        this.setState({ activeTab: sortedEntries[0].id.toString() })
      } else if (currentCount < prevCount || (!this.state.activeTab && currentCount > 0)) {
        // Entry deleted or no active tab, switch to first
        const sortedEntries = [...this.props.entries].sort((a, b) => b.id - a.id)
        if (sortedEntries.length > 0) {
          this.setState({ activeTab: sortedEntries[0].id.toString() })
        }
      }
    }
  }

  fetchCurrentHVData() {
    if (this.props.hlavny && this.props.hlavny.id) {
      this.props.fetchZmenaNaHV(this.state.selectedHVType, this.props.hlavny.id)
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
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
      <Form className="mt-4">
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
        <Row className="mt-4 mb-3">
          <Col className="text-center">
            <Button color="danger" onClick={() => this.handleRemoveEntry(entry.id)} className="px-4">
              Odstrániť
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }

  render() {
    const { hlavny, opravnenia, entries = [], loading } = this.props
    const { selectedHVType, hvDisplayNames } = this.state

    // Sort entries by id DESC (newest entries first) and filter out invalid entries
    const sortedEntries = [...entries].filter(entry => entry && entry.id).sort((a, b) => b.id - a.id)

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

          {/* Entries tabs and content */}
          {sortedEntries.length > 0 && [
            <Nav key="nav-tabs" pills>
              {sortedEntries.map(entry => {
                if (!entry || !entry.id) return null
                const tabLabel = entry.datum_cas
                  ? moment.unix(entry.datum_cas).format('DD.MM.YYYY HH:mm')
                  : `#${entry.id}`
                return (
                  <NavItem key={entry.id}>
                    <NavLink
                      className={this.state.activeTab && this.state.activeTab === entry.id.toString() ? 'active' : ''}
                      onClick={() => this.toggle(entry.id.toString())}
                      style={{ cursor: 'pointer' }}
                    >
                      {tabLabel}
                    </NavLink>
                  </NavItem>
                )
              })}
            </Nav>,
            <TabContent
              key="tab-content"
              activeTab={
                this.state.activeTab || (sortedEntries[0] && sortedEntries[0].id && sortedEntries[0].id.toString())
              }
            >
              {sortedEntries.map(entry => {
                if (!entry || !entry.id) return null
                return (
                  <TabPane key={entry.id} tabId={entry.id.toString()}>
                    {this.renderEntry(entry)}
                  </TabPane>
                )
              })}
            </TabContent>
          ]}
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
