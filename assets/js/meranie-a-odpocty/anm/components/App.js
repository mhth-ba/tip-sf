import React from 'react'
import { Row, Col } from 'reactstrap'
import Analyzy from './Analyzy'

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Analyzy/>
          </Col>
        </Row>
        <br/><br/>
      </div>
    )
  }
}

export default App
