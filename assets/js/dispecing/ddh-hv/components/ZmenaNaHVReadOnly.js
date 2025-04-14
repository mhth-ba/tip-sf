import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Table, Badge, Alert, Row, Col } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'
import { fetchZmenaNaHVRequest } from '../actions'
import ReadOnlyBadge from '../../../components/ReadOnlyBadge'

class ZmenaNaHVReadOnly extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedHVType: 'Zapad', // Default selected HV type
      hvMapping: {
        'HV Západ': 'Zapad',
        'HV Východ': 'Vychod'
      },
      hvDisplayNames: {
        Zapad: 'HV Západ',
        Vychod: 'HV Východ'
      }
    }

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
  }

  fetchCurrentHVData() {
    if (this.props.hlavny && this.props.hlavny.id) {
      this.props.fetchZmenaNaHV(this.state.selectedHVType, this.props.hlavny.id)
    }
  }

  handleHVTypeChange(e) {
    this.setState({ selectedHVType: e.target.value })
  }

  renderHVTypeOptions() {
    return Object.entries(this.state.hvDisplayNames).map(([key, value]) => (
      <option key={key} value={key}>
        {value}
      </option>
    ))
  }

  renderReadOnlyEntry(entry) {
    // Format date for display
    const formattedDate = entry.datum_cas ? moment.unix(entry.datum_cas).format('DD.MM.YYYY HH:mm') : '-'

    return (
      <div key={entry.id} className="mb-3 p-3 border rounded">
        <Row className="mb-2">
          <Col xs="4" className="text-muted">
            Dátum a čas:
          </Col>
          <Col xs="8">{formattedDate}</Col>
        </Row>
        <Row>
          <Col xs="4" className="text-muted">
            Poznámka:
          </Col>
          <Col xs="8" style={{ whiteSpace: 'pre-line' }}>
            {entry.poznamka || '-'}
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    const { entries = [], loading } = this.props
    const { selectedHVType, hvDisplayNames } = this.state

    // Sort entries by datetime (oldest to newest)
    const sortedEntries = [...entries].sort((a, b) => {
      const dateA = a.datum_cas || 0
      const dateB = b.datum_cas || 0
      return dateA - dateB
    })

    return (
      <Card>
        <CardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
          <span>Zmeny na HV</span>
          <ReadOnlyBadge datum={this.props.hlavny.datum} />
        </CardHeader>
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

          {/* Loading state */}
          {loading && (
            <div className="text-center p-3">
              <p className="mt-2">Načítavam údaje...</p>
            </div>
          )}

          {/* No Data message */}
          {!loading && sortedEntries.length === 0 && (
            <Alert color="info">
              <FontAwesome name="info-circle" /> Žiadne záznamy pre {hvDisplayNames[selectedHVType]}
            </Alert>
          )}

          {/* Entries list */}
          {!loading && sortedEntries.length > 0 && (
            <div>{sortedEntries.map(entry => this.renderReadOnlyEntry(entry))}</div>
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
    entries: state.zmenaHV.entries[hvTypeKey] || [],
    loading: state.zmenaHV.loading || false
  }
}

const mapDispatchToProps = dispatch => ({
  fetchZmenaNaHV: (hvType, hlavnyId) => dispatch(fetchZmenaNaHVRequest(hvType, hlavnyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ZmenaNaHVReadOnly)
