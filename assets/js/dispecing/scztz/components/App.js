import React from 'react'
import { Row, Col } from 'reactstrap'
import Kriteria from './Kriteria'
import ZapadVykon from './ZapadVykon'
import ZapadZdrojeLine from './ZapadZdrojeLine'
import ZapadZdrojeColumn from './ZapadZdrojeColumn'
import ZapadZariadenia from './ZapadZariadenia'
//import VychodOST from './VychodOST'

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
            <ZapadVykon/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <ZapadZdrojeLine/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <ZapadZdrojeColumn/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <ZapadZariadenia/>
          </Col>
        </Row>
        <br/>
      </div>
    )
  }
}

export default App
