import React from 'react'
import { connect } from 'react-redux'
import NoDataAlert from './NoDataAlert'
import { Col, Row } from 'reactstrap'
import moment from 'moment'
import { Alert } from 'reactstrap'
import HlavickaWrapper from './HlavickaWrapper'
import PraceNaOSTPrevadzkaWrapper from './PraceNaOSTPrevadzkaWrapper'
import PraceNaOSTDispecing from './PraceNaOSTDispecing'
import PlanovanePraceAOdstavkyNaOST from './PlanovanePraceAOdstavkyNaOST'
import OdstavkyOSTNad24Hod from './OdstavkyOSTNad24Hod'
import Poznamky from './Poznamky'

const MainContent = ({ hlavny }) => {
  if (!hlavny.initialized) {
    return <div></div>
  }

  if (hlavny.id === null) {
    return <NoDataAlert />
  }

  const isHistoricalData =
    hlavny.datum && moment.unix(hlavny.datum).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')

  return (
    <div>
      {isHistoricalData && (
        <Row>
          <Col>
            <Alert color="info" className="mb-3">
              <i className="fa fa-info-circle mr-2"></i>
              Zobrazujete historické údaje z {moment.unix(hlavny.datum).format('DD.MM.YYYY')}. Zmeny nie sú povolené pre
              minulé dni.
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
          <PraceNaOSTDispecing />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={6} sm={12}>
          <PlanovanePraceAOdstavkyNaOST />
        </Col>
        <Col md={6} sm={12}>
          <OdstavkyOSTNad24Hod />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={6}>
          <Poznamky />
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
