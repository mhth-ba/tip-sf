import React from 'react'
import { Row, Col } from 'reactstrap'

import VyberPolozky from './VyberPolozky'
import Import from './Import'
import Hlavny from './Hlavny'

import Vstup from './Vstup'
import Vystup from './Vystup'
import Znamienka from './Znamienka'
import Sumarizacia from './Sumarizacia'
import Export from './Export'

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <VyberPolozky/>
            <br/>
            <Import/>
          </Col>
          <Col>
            <Hlavny/>
          </Col>
        </Row>
        <br/>
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
        <Row>
          <Col>
            <Znamienka/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Sumarizacia/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Export/>
          </Col>
        </Row>
        <br/>
      </div>
    )
  }
}

export default App