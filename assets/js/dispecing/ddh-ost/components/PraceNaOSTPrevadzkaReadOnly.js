import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Row, Col, Table, Badge } from 'reactstrap'
import moment from 'moment'
import ReadOnlyBadge from '../../../components/ReadOnlyBadge'
import FileAttachments from './FileAttachments'

// Read-only view component for PraceNaOSTPrevadzka
class PraceNaOSTPrevadzkaReadOnly extends React.Component {
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
          <h5 className="card-title mb-3">{entry.ost || 'OST neurčený'}</h5>

          <Row className="mb-3">
            <Col xs="6" md="3" className="text-muted">
              Začiatok prác:
            </Col>
            <Col xs="6" md="3" className="font-weight-bold">
              {this.formatDate(entry.datum_cas_zaciatok)}
            </Col>
            <Col xs="6" md="3" className="text-muted">
              Ukončenie prác:
            </Col>
            <Col xs="6" md="3" className="font-weight-bold">
              {this.formatDate(entry.datum_cas_ukoncenie)}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs="6" md="3" className="text-muted">
              Vplyv na dodávku:
            </Col>
            <Col xs="6" md="3">
              {entry.vplyv_na_dodavku ? (
                <Badge color={entry.vplyv_na_dodavku === 'Prerušenie' ? 'danger' : 'warning'}>
                  {entry.vplyv_na_dodavku}
                </Badge>
              ) : (
                '-'
              )}
            </Col>
            <Col xs="6" md="3" className="text-muted">
              Vývod:
            </Col>
            <Col xs="6" md="3">
              {entry.vyvod || '-'}
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

          <Row>
            <Col xs="6" md="3" className="text-muted">
              Stav:
            </Col>
            <Col xs="6" md="3">
              {entry.stav ? (
                <Badge
                  color={
                    entry.stav === 'Vyriešené' ? 'success' : entry.stav === 'Provizórne vyriešené' ? 'warning' : 'info'
                  }
                >
                  {entry.stav}
                </Badge>
              ) : (
                '-'
              )}
            </Col>
            <Col xs="6" md="3" className="text-muted">
              Vybavuje:
            </Col>
            <Col xs="6" md="3">
              {entry.vybavuje || '-'}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs="12" className="text-muted">
              Prílohy:
            </Col>
            <Col xs="12">
              <FileAttachments entryId={entry.id} source="prevadzka" readOnly={true} />
            </Col>
          </Row>
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
            <th>Začiatok</th>
            <th>Ukončenie</th>
            <th>Vplyv na dodávku</th>
            <th>Vývod</th>
            <th>Poznámka</th>
            <th>Stav</th>
            <th>Vybavuje</th>
            <th>Prílohy</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.ost || '-'}</td>
              <td>{this.formatDate(entry.datum_cas_zaciatok)}</td>
              <td>{this.formatDate(entry.datum_cas_ukoncenie)}</td>
              <td>
                {entry.vplyv_na_dodavku ? (
                  <Badge color={entry.vplyv_na_dodavku === 'Prerušenie' ? 'danger' : 'warning'}>
                    {entry.vplyv_na_dodavku}
                  </Badge>
                ) : (
                  '-'
                )}
              </td>
              <td>{entry.vyvod || '-'}</td>
              <td className="text-wrap" style={{ maxWidth: '300px', whiteSpace: 'pre-line' }}>
                {entry.poznamka || '-'}
              </td>
              <td>
                {entry.stav ? (
                  <Badge
                    color={
                      entry.stav === 'Vyriešené'
                        ? 'success'
                        : entry.stav === 'Provizórne vyriešené'
                        ? 'warning'
                        : 'info'
                    }
                  >
                    {entry.stav}
                  </Badge>
                ) : (
                  '-'
                )}
              </td>
              <td>{entry.vybavuje || '-'}</td>
              <td>
                <FileAttachments entryId={entry.id} source="prevadzka" readOnly={true} compact={true} />
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
      this.props.prace && this.props.prace.entries
        ? this.props.prace.entries.filter(entry => entry.valid !== false)
        : []

    return (
      <Card>
        <CardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
          <span>Práce na OST - prevádzka</span>
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
  prace: state.pracenaostprevadzka,
  ost: (state.ost && state.ost.entries) || []
})

export default connect(mapStateToProps)(PraceNaOSTPrevadzkaReadOnly)
