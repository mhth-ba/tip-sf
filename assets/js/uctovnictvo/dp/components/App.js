import React from 'react'
import { Row, Col } from 'reactstrap'

import VyberPolozky from './VyberPolozky'

import Vstup from './Vstup'
import Vystup from './Vystup'

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <VyberPolozky/>
          </Col>
        </Row>
        <br/>
        {/*<Row>
          <Col>
            <Vstup/>
          </Col>
          <Col>
            <Vystup/>
          </Col>
        </Row>*/}
        <Row>
          <Col>
            <Vstup/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Vystup/>
          </Col>
        </Row>
        <br/>
      </div>
    )
  }
}

export default App