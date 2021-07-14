import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'

import Kriteria from './Kriteria'
import DoplnovanieOdpustanie from './DoplnovanieOdpustanie'

import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification/>
        <Row>
          <Col>
            <Kriteria/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <DoplnovanieOdpustanie/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default hot(module)(App)