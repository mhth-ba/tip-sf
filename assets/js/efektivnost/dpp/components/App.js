import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'
import VyberPolozky from './VyberPolozky'
import Konstanty from './Konstanty'
import Objednavka from './Objednavka'
import Dodavka from './Dodavka'
import Elektrina from './Elektrina'
import Foot from './Foot'

import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification/>
        <VyberPolozky/>
        <br/>
        {/*<Row>
          <Col>
            <Konstanty/>
          </Col>
        </Row>
        <br/>*/}
        <Row>
          <Col>
            <Objednavka/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Dodavka/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Elektrina/>
          </Col>
        </Row>
        <br/>
        {/*<Foot/>
        <br/>*/}
      </div>
    )
  }
}

export default hot(module)(App)
