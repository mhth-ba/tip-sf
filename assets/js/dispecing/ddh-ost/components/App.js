import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'

import Hlavicka from './Hlavicka'

import { hot } from 'react-hot-loader'
import PraceNaOSTPrevadzka from "./PraceNaOSTPrevadzka";
import PraceNaOSTDispecing from "./PraceNaOSTDispecing";
import PlanovanePraceAOdstavkyNaOST from "./PlanovanePraceAOdstavkyNaOST";
import OdstavkyOSTNad24Hod from "./OdstavkyOSTNad24Hod";
import Poznamky from "./Poznamky";

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification/>
        <Row>
          <Col>
            <Hlavicka/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <PraceNaOSTPrevadzka/>
          </Col>
          <Col>
            <PraceNaOSTDispecing/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <PlanovanePraceAOdstavkyNaOST/>
          </Col>
          <Col>
            <OdstavkyOSTNad24Hod/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Poznamky/>
          </Col>
          <Col></Col>
        </Row>
        <br/>
        <br/>
      </div>
    )
  }
}

export default hot(module)(App)