import React from 'react'
import { connect } from 'react-redux'
import NoDataAlert from './NoDataAlert'
import { Col, Row } from 'reactstrap'
import moment from 'moment'
import { Alert } from 'reactstrap'
import Calendar from './Calendar'
import AuditLog from './AuditLog'
import HlavickaWrapper from './HlavickaWrapper'
import ZmenaNaZdrojochWrapper from './ZmenaNaZdrojochWrapper'
import ZmenaNaHVWrapper from './ZmenaNaHVWrapper'
import StavZariadeni from './StavZariadeni'
import ChronologicalTimeline from './ChronologicalTimeline'
import ViewModeToggle from './ViewModeToggle'
import FilterControls from './FilterControls'
import FilterResults from './FilterResults'

class MainContent extends React.Component {
  renderMiddleContent() {
    const { hlavny } = this.props

    // Only render middle content if initialized
    if (!hlavny.initialized) {
      return null
    }

    if (!hlavny.id) {
      return <NoDataAlert />
    }

    // Check if the entry date is in the past
    const isHistoricalData =
      hlavny.ost_data &&
      hlavny.ost_data.datum &&
      moment.unix(hlavny.ost_data.datum).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')

    // Calculate how many days old the data is
    const daysDifference = isHistoricalData
      ? moment()
        .startOf('day')
        .diff(moment.unix(hlavny.ost_data.datum).startOf('day'), 'days')
      : 0

    // Check if the data is older than the 3-day edit window
    const isTooOldToEdit = daysDifference > 2

    return (
      <div>
        {isHistoricalData && (
          <Row>
            <Col>
              <Alert color="info" className="mb-3">
                <i className="fa fa-info-circle mr-2"></i>
                Zobrazujete historické údaje z {moment.unix(hlavny.ost_data.datum).format('DD.MM.YYYY')}.
                {isTooOldToEdit
                  ? ' Zmeny nie sú povolené pre záznamy staršie ako 3 dni.'
                  : ' Záznamy do 3 dní je možné upravovať.'}
              </Alert>
            </Col>
          </Row>
        )}
        <Row>
          <Col md={6} sm={12}>
            <ZmenaNaZdrojochWrapper />
          </Col>
          <Col md={6} sm={12}>
            <ZmenaNaHVWrapper />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <StavZariadeni />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <ChronologicalTimeline />
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    const { hlavny, viewMode } = this.props

    return (
      <div>
        {/* View mode toggle */}
        <Row className="mb-3">
          <Col>
            <ViewModeToggle />
          </Col>
        </Row>

        {viewMode === 'calendar' ? (
          <div>
            {/* Calendar View */}
            <Row className="mb-3">
              <Col md={6} sm={12}>
                <Calendar />
              </Col>
              <Col md={6} sm={12}>
                {hlavny.initialized && hlavny.id ? <HlavickaWrapper /> : <div />}
              </Col>
            </Row>

            {/* Middle content - Only visible when initialized */}
            {this.renderMiddleContent()}

            {/* Bottom row with AuditLog (Aktivita) - Always visible */}
            <Row className="mt-3">
              <Col>
                <AuditLog />
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            {/* Filter View */}
            <Row className="mb-3">
              <Col>
                <FilterControls />
              </Col>
            </Row>
            <Row>
              <Col>
                <FilterResults />
              </Col>
            </Row>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  viewMode: state.filterView.mode
})

export default connect(mapStateToProps)(MainContent)