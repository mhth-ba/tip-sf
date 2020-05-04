import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'

import HlavneZaznamy from './HlavneZaznamy'

import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification/>
        <Row>
          <Col>
            <HlavneZaznamy/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default hot(module)(App)