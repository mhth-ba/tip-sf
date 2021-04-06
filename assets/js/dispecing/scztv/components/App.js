import React from 'react'
import { Row, Col } from 'reactstrap'
import Kriteria from './Kriteria'
import VychodVykon from './VychodVykon'
import VychodZdrojeLine from './VychodZdrojeLine'
import VychodZariadenia from './VychodZariadenia'
import VychodZdrojeColumn from './VychodZdrojeColumn'
import VychodZdrojeTeplota from './VychodZdrojeTeplota'
import VychodZdrojeDiferencny from './VychodZdrojeDiferencny'
import VychodZdrojePrietok from './VychodZdrojePrietok'
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
            <VychodZdrojeLine/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VychodZariadenia/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VychodZdrojeColumn/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VychodZdrojeTeplota/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VychodZdrojePrietok/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VychodZdrojeDiferencny/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VychodOST/>
          </Col>
        </Row>
        <br/>
        <br/>
      </div>
    )
  }
}

export default App
