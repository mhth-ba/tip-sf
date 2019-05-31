import React from 'react'
import { Row, Col } from 'reactstrap'

import Analyzy from './Analyzy'
import Vylucene from './Vylucene'
import Prehlad from './Prehlad'

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
        <Row>
          <Col>
            <Vylucene/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Prehlad/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
