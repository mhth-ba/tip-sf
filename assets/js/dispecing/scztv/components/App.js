import React from 'react'
import { Row, Col } from 'reactstrap'
import Kriteria from './Kriteria'
import VychodVykon from './VychodVykon'
import VychodZdroje from './VychodZdroje'
import VychodOST from './VychodOST'

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Kriteria/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VychodVykon/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VychodZdroje/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VychodOST/>
          </Col>
        </Row>
        <br/>
      </div>
    )
  }
}

export default App
