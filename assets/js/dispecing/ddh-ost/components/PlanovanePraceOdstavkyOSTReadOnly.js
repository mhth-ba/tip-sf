import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Row, Col, Table, Badge } from 'reactstrap'
import moment from 'moment'
import ReadOnlyBadge from '../../../components/ReadOnlyBadge'

// Read-only view component for PlanovanePraceOdstavkyOST
class PlanovanePraceOdstavkyOSTReadOnly extends React.Component {
  // Helper function to format dates consistently
  formatDate = timestamp => {
    if (!timestamp) return '-'
    return moment.unix(timestamp).format('DD.MM.YYYY HH:mm')
  }

  // Helper function to format text with newlines
  formatText = text => {
    if (!text) return '-'
    // Replace newlines with <br> tags
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  // Render a single entry in read-only mode
  renderReadOnlyEntry(entry) {
    return (
      <Card key={entry.id} className="mb-4 shadow-sm">
        <CardBody>
          <h5 className="card-title mb-3">{entry.OST || 'OST neurčený'}</h5>

          <Row className="mb-3">
            <Col xs="6" md="3" className="text-muted">
              Dátum a čas:
            </Col>
            <Col xs="6" md="9" className="font-weight-bold">
              {this.formatDate(entry.datum_cas)}
            </Col>
          </Row>

          {entry.poznamka && (
            <Row className="mb-3">
              <Col xs="12" className="text-muted">
                Poznámka:
              </Col>
              <Col xs="12">
                <div className="p-2 bg-light rounded">{this.formatText(entry.poznamka)}</div>
              </Col>
            </Row>
          )}
        </CardBody>
      </Card>
    )
  }

  // Compact table view alternative
  renderTableView(entries) {
    return (
      <Table responsive striped hover className="mt-3">
        <thead>
          <tr>
            <th>Objekt OST/PK</th>
            <th>Dátum a čas</th>
            <th>Poznámka</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.OST || '-'}</td>
              <td>{this.formatDate(entry.datum_cas)}</td>
              <td className="text-wrap" style={{ maxWidth: '500px', whiteSpace: 'pre-line' }}>
                {entry.poznamka || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  render() {
    // Filter entries to show only those that are valid
    const validEntries =
      this.props.planovane && this.props.planovane.entries
        ? this.props.planovane.entries.filter(entry => entry.valid !== false)
        : []

    return (
      <Card>
        <CardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
          <span>Plánované práce a odstávky na OST</span>
          <ReadOnlyBadge datum={this.props.hlavny.datum} />
        </CardHeader>
        <CardBody>
          {validEntries.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted mb-0">Žiadne záznamy na zobrazenie.</p>
            </div>
          ) : (
            <div>
              {/* For small screens, show card view */}
              <div className="d-md-none">{validEntries.map(entry => this.renderReadOnlyEntry(entry))}</div>

              {/* For medium and larger screens, show table view */}
              <div className="d-none d-md-block">{this.renderTableView(validEntries)}</div>
            </div>
          )}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  planovane: state.planovanepraceodstavky,
  ost: (state.ost && state.ost.entries) || []
})

export default connect(mapStateToProps)(PlanovanePraceOdstavkyOSTReadOnly)
