import React from 'react'
import { Row, Col } from 'reactstrap'
import VychodVykon from './VychodVykon'

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <VychodVykon/>
          </Col>
        </Row>
        <br/>
      </div>
    )
  }
}

export default App
