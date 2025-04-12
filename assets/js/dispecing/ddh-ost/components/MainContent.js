import React from 'react'
import { connect } from 'react-redux'
import NoDataAlert from './NoDataAlert'
import { Col, Row } from 'reactstrap'
import moment from 'moment'
import { Alert } from 'reactstrap'
import HlavickaWrapper from './HlavickaWrapper'
import PraceNaOSTPrevadzkaWrapper from './PraceNaOSTPrevadzkaWrapper'
import PraceNaOSTDispecingWrapper from './PraceNaOSTDispecingWrapper'
import PlanovanePraceOdstavkyOSTWrapper from './PlanovanePraceOdstavkyOSTWrapper'
import OdstavkyOSTNad24Hod from './OdstavkyOSTNad24Hod'
import GlobalPoznamky from './GlobalPoznamky'

const MainContent = ({ hlavny }) => {
  if (!hlavny.initialized) {
    return <div></div>
  }

  if (hlavny.id === null) {
    return (
      <div>
        <Row>
          <Col>
            <GlobalPoznamky />
          </Col>
        </Row>
        <br />
        <NoDataAlert />
      </div>
    )
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
      <Row>
        <Col>
          <GlobalPoznamky />
        </Col>
      </Row>

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
        <Col>
          <HlavickaWrapper />
        </Col>
      </Row>
      <br />
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
          <OdstavkyOSTNad24Hod />
        </Col>
      </Row>
      <br />
    </div>
  )
}

const mapStateToProps = state => ({
  hlavny: state.hlavny
})

export default connect(mapStateToProps)(MainContent)
