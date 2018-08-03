import React from 'react'
import { Row, Col } from 'reactstrap'
import VyberPolozky from './VyberPolozky'
import Report from './Report'

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
        <Row>
          <Col>
            <Report/>
          </Col>
        </Row>
        <br/><br/>
      </div>
    )
  }
}

export default App
