import React from 'react'
import { connect } from 'react-redux'
import Hlavicka from './Hlavicka'
import NoDataAlert from './NoDataAlert'
import { Col, Row } from 'reactstrap'
import PraceNaOSTPrevadzka from './PraceNaOSTPrevadzka'
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

  return (
    <div>
      <Row>
        <Col>
          <Hlavicka />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <PraceNaOSTPrevadzka />
        </Col>
        <Col>
          <PraceNaOSTDispecing />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <PlanovanePraceAOdstavkyNaOST />
        </Col>
        <Col>
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
