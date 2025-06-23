import React from 'react'
import { connect } from 'react-redux'
import NoDataAlert from './NoDataAlert'
import { Col, Row } from 'reactstrap'
import moment from 'moment'
import { Alert } from 'reactstrap'
import Calendar from './Calendar'
import AuditLog from './AuditLog'
import HlavickaWrapper from './HlavickaWrapper'
import PraceNaOSTPrevadzkaWrapper from './PraceNaOSTPrevadzkaWrapper'
import PraceNaOSTDispecingWrapper from './PraceNaOSTDispecingWrapper'
import PlanovanePraceOdstavkyOSTWrapper from './PlanovanePraceOdstavkyOSTWrapper'
import OdstavkyOSTNad24HodWrapper from './OdstavkyOSTNad24HodWrapper'
import Poznamky from './Poznamky'
import ViewModeToggle from './ViewModeToggle'
import FilterControls from './FilterControls'
import FilterResults from './FilterResults'

const MainContent = ({ hlavny, viewMode }) => {
  const renderMiddleContent = () => {
    // Only render middle content if initialized
    if (!hlavny.initialized) {
      return null
    }

    if (hlavny.id === null) {
      return <NoDataAlert />
    }

    // Check if the entry date is in the past
    const isHistoricalData =
      hlavny.datum && moment.unix(hlavny.datum).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')

    // Calculate how many days old the data is
    const daysDifference = isHistoricalData
      ? moment()
          .startOf('day')
          .diff(moment.unix(hlavny.datum).startOf('day'), 'days')
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
                Zobrazujete historické údaje z {moment.unix(hlavny.datum).format('DD.MM.YYYY')}.
                {isTooOldToEdit
                  ? ' Zmeny nie sú povolené pre záznamy staršie ako 3 dni.'
                  : ' Záznamy do 3 dní je možné upravovať.'}
              </Alert>
            </Col>
          </Row>
        )}
        <Row>
          <Col md={6} sm={12}>
            <PraceNaOSTPrevadzkaWrapper />
          </Col>
          <Col md={6} sm={12}>
            <PraceNaOSTDispecingWrapper />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={6} sm={12}>
            <PlanovanePraceOdstavkyOSTWrapper />
          </Col>
          <Col md={6} sm={12}>
            <OdstavkyOSTNad24HodWrapper />
          </Col>
        </Row>
      </div>
    )
  }

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
            <Col lg={6} md={12}>
              <Calendar />
            </Col>
            <Col lg={6} md={12}>
              {hlavny.initialized && hlavny.id !== null ? <HlavickaWrapper /> : <div />}
            </Col>
          </Row>

          {/* Middle content - Only visible when initialized */}
          {renderMiddleContent()}

          {/* Bottom row with Poznamky - Always visible */}
          <Row className="mt-3">
            <Col>
              <Poznamky />
            </Col>
          </Row>
          <Row>
            <Col lg={9} sm={12}>
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

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  viewMode: state.filterView.mode
})

export default connect(mapStateToProps)(MainContent)
