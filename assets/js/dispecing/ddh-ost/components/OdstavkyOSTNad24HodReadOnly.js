import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Row, Col, Badge } from 'reactstrap'
import moment from 'moment'
import ReadOnlyBadge from '../../../components/ReadOnlyBadge'
import { fetchOdstavkyOSTNad24HodRequest, fetchPrilohyRequest } from '../actions'
import FileAttachments from './FileAttachments'

class OdstavkyOSTNad24HodReadOnly extends React.Component {
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

  componentDidMount() {
    // Fetch odstavky when component mounts if hlavny_id is available
    if (this.props.hlavny && this.props.hlavny.id) {
      this.props.fetchOdstavkyOSTNad24Hod(this.props.hlavny.id)
    }

    // Don't fetch attachments here - wait for entries to be loaded
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Check if hlavny_id has changed and fetch data if needed
    if (prevProps.hlavny.id !== this.props.hlavny.id && this.props.hlavny.id) {
      this.props.fetchOdstavkyOSTNad24Hod(this.props.hlavny.id)
    }

    // Check if entries have been loaded or updated
    const prevEntries = prevProps.odstavky && prevProps.odstavky.entries ? prevProps.odstavky.entries : []
    const currentEntries = this.props.odstavky && this.props.odstavky.entries ? this.props.odstavky.entries : []

    // If entries have changed (different length or different content)
    if (
      prevEntries.length !== currentEntries.length ||
      JSON.stringify(prevEntries) !== JSON.stringify(currentEntries)
    ) {
      // Fetch attachments for all entries
      currentEntries.forEach(entry => {
        this.props.fetchPrilohy(entry.id, entry.source)
      })
    }
  }

  // Render a single entry in read-only mode
  renderReadOnlyEntry(entry) {
    // Determine badge color for source
    const sourceBadgeColor = 'primary'
    const sourceLabel = entry.source === 'prevadzka' ? 'Prevádzka' : 'Dispečing a poruchová služba'

    return (
      <div key={`${entry.id}-${entry.source}`} className="mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">
            # {entry.id} ({entry.source})
          </h5>
          <Badge color={sourceBadgeColor}>{sourceLabel}</Badge>
        </div>

        <Row className="mb-3">
          <Col md="3" className="text-muted">
            Objekt OST/PK:
          </Col>
          <Col md="9" className="font-weight-bold">
            {entry.ost || '-'}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="3" className="text-muted">
            Začiatok prác:
          </Col>
          <Col md="3" className="font-weight-bold">
            {this.formatDate(entry.datum_cas_zaciatok)}
          </Col>
          <Col md="3" className="text-muted">
            Ukončenie prác:
          </Col>
          <Col md="3" className="font-weight-bold">
            {this.formatDate(entry.datum_cas_ukoncenie)}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md="3" className="text-muted">
            Vplyv na dodávku:
          </Col>
          <Col md="3">
            {entry.vplyv_na_dodavku ? (
              <Badge color={entry.vplyv_na_dodavku === 'Prerušenie' ? 'danger' : 'warning'}>
                {entry.vplyv_na_dodavku}
              </Badge>
            ) : (
              '-'
            )}
          </Col>
          <Col md="3" className="text-muted">
            Vývod:
          </Col>
          <Col md="3">{entry.vyvod || '-'}</Col>
        </Row>

        {entry.poznamka && (
          <Row className="mb-3">
            <Col md="3" className="text-muted">
              Poznámka:
            </Col>
            <Col md="9">
              <div className="p-2 bg-light rounded">{this.formatText(entry.poznamka)}</div>
            </Col>
          </Row>
        )}

        <Row className="mb-3">
          <Col md="3" className="text-muted">
            Stav:
          </Col>
          <Col md="3">
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
          <Col md="3" className="text-muted">
            Vybavuje:
          </Col>
          <Col md="3">{entry.vybavuje || '-'}</Col>
        </Row>

        <Row className="mb-3">
          <Col md="3" className="text-muted">
            Prílohy:
          </Col>
          <Col md="9">
            <FileAttachments entryId={entry.id} source={entry.source} readOnly={true} />
          </Col>
        </Row>

        <hr style={{ marginTop: '20px' }} />
      </div>
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
        <CardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
          <span>Odstávky OST nad 24 hod.</span>
          <ReadOnlyBadge />
        </CardHeader>
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

          {validEntries.map(entry => this.renderReadOnlyEntry(entry))}
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
  fetchPrilohy: (entryId, source) => dispatch(fetchPrilohyRequest(entryId, source))
})

export default connect(mapStateToProps, mapDispatchToProps)(OdstavkyOSTNad24HodReadOnly)
