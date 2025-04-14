import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'

import Calendar from './Calendar'
import AuditLog from './AuditLog'
import MainContent from './MainContent'

import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification />
        <Row>
          <Col md={6} sm={12}>
            <Calendar />
          </Col>
          <Col md={6} sm={12}>
            <AuditLog />
          </Col>
        </Row>
        <br />
        <MainContent />
        <br />
        <br />
      </div>
    )
  }
}

export default hot(module)(App)
