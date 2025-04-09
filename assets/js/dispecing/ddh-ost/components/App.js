import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'

import Calendar from './Calendar'
import Hlavicka from './Hlavicka'
import PraceNaOSTPrevadzka from './PraceNaOSTPrevadzka'
import PraceNaOSTDispecing from './PraceNaOSTDispecing'
import PlanovanePraceAOdstavkyNaOST from './PlanovanePraceAOdstavkyNaOST'
import OdstavkyOSTNad24Hod from './OdstavkyOSTNad24Hod'
import Poznamky from './Poznamky'
import UlozitButton from './Ulozit'

import { hot } from 'react-hot-loader'
import MainContent from './MainContent'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification />
        <Row>
          <Col>
            <Calendar />
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
