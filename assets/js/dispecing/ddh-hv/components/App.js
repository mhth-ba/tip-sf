import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'

import Hlavicka from './Hlavicka'

import { hot } from 'react-hot-loader'
import ZmenaNaZdrojoch from "./ZmenaNaZdrojoch";
import ZmenaNaHV from "./ZmenaNaHV";
import StavZariadeni from "./StavZariadeni";

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
            <ZmenaNaZdrojoch/>
          </Col>
          <Col>
            <ZmenaNaHV/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <StavZariadeni/>
          </Col>
        </Row>
        <br/>
        <br/>
      </div>
    )
  }
}

export default hot(module)(App)