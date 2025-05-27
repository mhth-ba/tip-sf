import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Badge,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Alert
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'
import moment from 'moment'
import debounce from '../../../utils/debounce'
import {
  createZmenaNaZdrojRequest,
  updateZmenaNaZdrojRequest,
  fetchZmenaNaZdrojRequest,
  deleteZmenaNaZdrojRequest
} from '../actions'
import { canEditData } from '../../../utils/datePermissions'

class ZmenaNaZdrojoch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedSourceType: 'TpV', // Default selected source
      localEntries: {}, // Store local entry values for optimistic updates
      debouncedUpdates: {}, // Store debounced update functions for each entry by ID
      activeTab: null, // Active tab
      sourceMapping: {
        'Tepláreň Západ': 'TpZ',
        'Cogen West': 'CW',
        'Tepláreň Východ': 'TpV',
        'Výhrevňa Juh': 'VhJ',
        'VS Slovnaft': 'Slovnaft',
        OLO: 'OLO',
        PPC: 'PPC'
      },
      sourcesDisplayNames: {
        TpZ: 'Tepláreň Západ',
        CW: 'Cogen West',
        TpV: 'Tepláreň Východ',
        VhJ: 'Výhrevňa Juh',
        Slovnaft: 'VS Slovnaft',
        OLO: 'OLO',
        PPC: 'PPC'
      },
      sourceDeviceOptions: {
        TpZ: ['HK1', 'HK3', 'K6', 'TG1'],
        CW: ['MG1', 'MG2'],
        TpV: ['K5', 'K6', 'TG1'],
        VhJ: ['HK3', 'HK4'],
        Slovnaft: ['V1', 'V2', 'V3', 'V4', 'Para 0,4 MPa', 'Para 1,0 MPa'],
        OLO: ['VS'],
        PPC: ['TG3', 'Chladič']
      }
    }

    this.handleAddEntry = this.handleAddEntry.bind(this)
    this.handleRemoveEntry = this.handleRemoveEntry.bind(this)
    this.handleSourceTypeChange = this.handleSourceTypeChange.bind(this)
    this.fetchCurrentSourceData = this.fetchCurrentSourceData.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    this.fetchCurrentSourceData()

    // Set initial active tab if entries exist
    if (this.props.entries && this.props.entries.length > 0 && !this.state.activeTab) {
      const sortedEntries = [...this.props.entries].sort((a, b) => b.id - a.id)
      if (sortedEntries.length > 0) {
        this.setState({ activeTab: sortedEntries[0].id.toString() })
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Fetch data when selectedSourceType changes
    if (prevState.selectedSourceType !== this.state.selectedSourceType) {
      this.fetchCurrentSourceData()
      // Reset active tab when source type changes
      this.setState({ activeTab: null })
    }

    // Fetch data when hlavny_id changes
    if (this.props.hlavny && prevProps.hlavny && this.props.hlavny.id !== prevProps.hlavny.id) {
      this.fetchCurrentSourceData()
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

  fetchCurrentSourceData() {
    if (this.props.hlavny && this.props.hlavny.id) {
      this.props.fetchZmenaNaZdroj(this.state.selectedSourceType, this.props.hlavny.id)
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  handleSourceTypeChange(e) {
    this.setState({ selectedSourceType: e.target.value })
  }

  handleAddEntry() {
    const { hlavny, createZmenaNaZdroj } = this.props
    const { selectedSourceType } = this.state

    if (!hlavny || !hlavny.id) {
      alert('Hlavný záznam nie je načítaný.')
      return
    }

    createZmenaNaZdroj(selectedSourceType, hlavny.id)
  }

  handleRemoveEntry(id) {
    const { deleteZmenaNaZdroj } = this.props
    const { selectedSourceType } = this.state

    if (window.confirm('Naozaj chcete odstrániť túto položku?')) {
      deleteZmenaNaZdroj(selectedSourceType, id)
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
        this.props.updateZmenaNaZdroj(
          this.state.selectedSourceType,
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

    const inputType =
      fieldName === 'poznamka' ? 'textarea' : ['zariadenie', 'stav'].includes(fieldName) ? 'select' : 'text'

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

      this.props.updateZmenaNaZdroj(
        this.state.selectedSourceType,
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
      this.props.updateZmenaNaZdroj(
        this.state.selectedSourceType,
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
      this.props.updateZmenaNaZdroj(
        this.state.selectedSourceType,
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

  renderStavOptions() {
    return [
      <option key="idx-0" value="">
        -- Vyberte --
      </option>,
      <option key="idx-1" value="V prevádzke">
        V prevádzke
      </option>,
      <option key="idx-2" value="V odstávke">
        V odstávke
      </option>,
      <option key="idx-3" value="V poruche">
        V poruche
      </option>,
      <option key="idx-4" value="V teplej zálohe">
        V teplej zálohe
      </option>,
      <option key="idx-5" value="V teplej zálohe s povolením prác">
        V teplej zálohe s povolením prác
      </option>,
      <option key="idx-6" value="Havária">
        Havária
      </option>
    ]
  }

  renderSourceTypeOptions() {
    return Object.entries(this.state.sourcesDisplayNames).map(([key, value]) => (
      <option key={key} value={key}>
        {value}
      </option>
    ))
  }

  renderDeviceOptions(sourceType) {
    return this.state.sourceDeviceOptions[sourceType].map(device => (
      <option key={device} value={device}>
        {device}
      </option>
    ))
  }

  renderEntry(entry) {
    // Get the local entry data for optimistic updates
    const localEntry = this.state.localEntries[entry.id] || entry
    const { selectedSourceType } = this.state

    // Convert timestamp to local datetime format
    const dateDisplay = this.getDisplayDate(localEntry.datum_cas)

    return (
      <Form key={entry.id} className="mt-4">
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

        {/* Zariadenie */}
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Zariadenie</Label>
              <Input
                type="select"
                value={localEntry.zariadenie || ''}
                onChange={e => this.handleChangeField(entry, 'zariadenie', e.target.value)}
              >
                <option value="">-- Vyberte --</option>
                {this.renderDeviceOptions(selectedSourceType)}
              </Input>
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

        {/* Stav */}
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Stav</Label>
              <Input
                type="select"
                value={localEntry.stav || ''}
                onChange={e => this.handleChangeField(entry, 'stav', e.target.value)}
              >
                {this.renderStavOptions()}
              </Input>
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

  renderReadOnlyEntry(entry) {
    // Get the local entry data
    const localEntry = this.state.localEntries[entry.id] || entry

    // Format date for display
    const formattedDate = localEntry.datum_cas ? moment.unix(localEntry.datum_cas).format('DD.MM.YYYY HH:mm') : '-'

    return (
      <div key={entry.id} className="mb-3 p-3 border rounded">
        <Row className="mb-2">
          <Col xs="4" className="text-muted">
            Dátum a čas:
          </Col>
          <Col xs="8">{formattedDate}</Col>
        </Row>
        <Row className="mb-2">
          <Col xs="4" className="text-muted">
            Zariadenie:
          </Col>
          <Col xs="8">{localEntry.zariadenie || '-'}</Col>
        </Row>
        <Row className="mb-2">
          <Col xs="4" className="text-muted">
            Poznámka:
          </Col>
          <Col xs="8" style={{ whiteSpace: 'pre-line' }}>
            {localEntry.poznamka || '-'}
          </Col>
        </Row>
        <Row>
          <Col xs="4" className="text-muted">
            Stav:
          </Col>
          <Col xs="8">
            {localEntry.stav ? (
              <Badge
                color={
                  localEntry.stav === 'V prevádzke'
                    ? 'success'
                    : localEntry.stav === 'V odstávke'
                    ? 'warning'
                    : localEntry.stav === 'V poruche'
                    ? 'danger'
                    : localEntry.stav === 'Havária'
                    ? 'danger'
                    : 'info'
                }
              >
                {localEntry.stav}
              </Badge>
            ) : (
              '-'
            )}
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    const { hlavny, opravnenia, entries = [], loading } = this.props
    const { selectedSourceType, sourcesDisplayNames } = this.state

    // Sort entries by id DESC (newest entries first) and filter out invalid entries
    const sortedEntries = [...entries].filter(entry => entry && entry.id).sort((a, b) => b.id - a.id)

    // Check if user can edit based on permissions and date
    const canEdit = hlavny && opravnenia ? canEditData(hlavny, opravnenia) : false

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Zmeny na zdrojoch</CardHeader>
        <CardBody>
          {/* Source Type Selector */}
          <Row className="mb-3">
            <Col md="6">
              <FormGroup>
                <Label for="sourceTypeSelect">Zdroj</Label>
                <Input
                  type="select"
                  id="sourceTypeSelect"
                  value={selectedSourceType}
                  onChange={this.handleSourceTypeChange}
                >
                  {this.renderSourceTypeOptions()}
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
              <FontAwesome name="info-circle" /> Žiadne záznamy pre {sourcesDisplayNames[selectedSourceType]}
            </Alert>
          )}

          {/* Entries tabs and content */}
          {sortedEntries.length > 0 && [
            <Nav key="nav-tabs" pills>
              {sortedEntries.map(entry => {
                if (!entry || !entry.id) return null
                const tabLabel = entry.zariadenie
                  ? `${entry.zariadenie} ${entry.datum_cas ? moment.unix(entry.datum_cas).format('DD.MM.') : ''}`
                  : entry.datum_cas
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
                    {canEdit ? this.renderEntry(entry) : this.renderReadOnlyEntry(entry)}
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

const mapStateToProps = (state, ownProps) => {
  // Get the entries for the current source type
  const sourceTypeKey = state.zmenaZdroje.currentSourceType || 'TpV'

  return {
    hlavny: state.hlavny,
    opravnenia: state.opravnenia,
    entries: state.zmenaZdroje.entries[sourceTypeKey] || [],
    loading: state.zmenaZdroje.loading || false
  }
}

const mapDispatchToProps = dispatch => ({
  fetchZmenaNaZdroj: (sourceType, hlavnyId) => dispatch(fetchZmenaNaZdrojRequest(sourceType, hlavnyId)),
  createZmenaNaZdroj: (sourceType, hlavnyId) => dispatch(createZmenaNaZdrojRequest(sourceType, hlavnyId)),
  updateZmenaNaZdroj: (sourceType, data, rollbackCallback) =>
    dispatch(updateZmenaNaZdrojRequest(sourceType, data, rollbackCallback)),
  deleteZmenaNaZdroj: (sourceType, id) => dispatch(deleteZmenaNaZdrojRequest(sourceType, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ZmenaNaZdrojoch)
