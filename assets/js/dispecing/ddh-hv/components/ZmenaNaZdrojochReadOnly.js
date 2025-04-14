import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Table, Badge, Alert, Row, Col } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'
import { fetchZmenaNaZdrojRequest } from '../actions'
import ReadOnlyBadge from '../../../components/ReadOnlyBadge'

class ZmenaNaZdrojochReadOnly extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedSourceType: 'TpV', // Default selected source
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
      }
    }

    this.handleSourceTypeChange = this.handleSourceTypeChange.bind(this)
    this.fetchCurrentSourceData = this.fetchCurrentSourceData.bind(this)
  }

  componentDidMount() {
    this.fetchCurrentSourceData()
  }

  componentDidUpdate(prevProps, prevState) {
    // Fetch data when selectedSourceType changes
    if (prevState.selectedSourceType !== this.state.selectedSourceType) {
      this.fetchCurrentSourceData()
    }

    // Fetch data when hlavny_id changes
    if (this.props.hlavny && prevProps.hlavny && this.props.hlavny.id !== prevProps.hlavny.id) {
      this.fetchCurrentSourceData()
    }
  }

  fetchCurrentSourceData() {
    if (this.props.hlavny && this.props.hlavny.id) {
      this.props.fetchZmenaNaZdroj(this.state.selectedSourceType, this.props.hlavny.id)
    }
  }

  handleSourceTypeChange(e) {
    this.setState({ selectedSourceType: e.target.value })
  }

  renderSourceTypeOptions() {
    return Object.entries(this.state.sourcesDisplayNames).map(([key, value]) => (
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
        <Row className="mb-2">
          <Col xs="4" className="text-muted">
            Zariadenie:
          </Col>
          <Col xs="8">{entry.zariadenie || '-'}</Col>
        </Row>
        <Row className="mb-2">
          <Col xs="4" className="text-muted">
            Poznámka:
          </Col>
          <Col xs="8" style={{ whiteSpace: 'pre-line' }}>
            {entry.poznamka || '-'}
          </Col>
        </Row>
        <Row>
          <Col xs="4" className="text-muted">
            Stav:
          </Col>
          <Col xs="8">
            {entry.stav ? (
              <Badge
                color={
                  entry.stav === 'V prevádzke'
                    ? 'success'
                    : entry.stav === 'V odstávke'
                    ? 'warning'
                    : entry.stav === 'V poruche'
                    ? 'danger'
                    : entry.stav === 'Havária'
                    ? 'danger'
                    : 'info'
                }
              >
                {entry.stav}
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
    const { entries = [], loading } = this.props
    const { selectedSourceType, sourcesDisplayNames } = this.state

    // Sort entries by datetime (oldest to newest)
    const sortedEntries = [...entries].sort((a, b) => {
      const dateA = a.datum_cas || 0
      const dateB = b.datum_cas || 0
      return dateA - dateB
    })

    return (
      <Card>
        <CardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
          <span>Zmeny na zdrojoch</span>
          <ReadOnlyBadge datum={this.props.hlavny.datum} />
        </CardHeader>
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

          {/* Loading state */}
          {loading && (
            <div className="text-center p-3">
              <p className="mt-2">Načítavam údaje...</p>
            </div>
          )}

          {/* No Data message */}
          {!loading && sortedEntries.length === 0 && (
            <Alert color="info">
              <FontAwesome name="info-circle" /> Žiadne záznamy pre {sourcesDisplayNames[selectedSourceType]}
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
  // Get the entries for the current source type
  const sourceTypeKey = state.zmenaZdroje.currentSourceType || 'TpV'

  return {
    hlavny: state.hlavny,
    entries: state.zmenaZdroje.entries[sourceTypeKey] || [],
    loading: state.zmenaZdroje.loading || false
  }
}

const mapDispatchToProps = dispatch => ({
  fetchZmenaNaZdroj: (sourceType, hlavnyId) => dispatch(fetchZmenaNaZdrojRequest(sourceType, hlavnyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ZmenaNaZdrojochReadOnly)
