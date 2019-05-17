import React from 'react'
import { Row, Col } from 'reactstrap'
import Kriteria from './Kriteria'
import VychodOST from './VychodOST'
import ZapadOST from './ZapadOST'

// import VlastneOST from './VlastneOST'
// import CudzieOST from './CudzieOST'

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
            <VychodOST/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <ZapadOST/>
          </Col>
        </Row>
        <br/>
      </div>
    )
  }
}

export default App
