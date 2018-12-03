import React from 'react'
import { Row, Col } from 'reactstrap'
import Aktualne from './Aktualne'
import Planovane from './Planovane'
import Dokoncene from './Dokoncene'
import Projekty from './Projekty'

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={12} lg={6}>
            <Aktualne/>
            <br/>
            <Dokoncene/>
          </Col>
          <Col md={12} lg={6}>
            <Planovane/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Projekty/>
          </Col>
        </Row>
        <br/>
      </div>
    )
  }
}

export default App
