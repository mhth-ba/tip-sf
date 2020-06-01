import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'
import Nastroje from './Nastroje'
import Sprava from './Sprava'
import Hlavny from './Hlavny'
import Karty from './Karty'

import OcakavanaDodavkaTepla from './OcakavanaDodavkaTepla'
import ZemnyPlyn from './ZemnyPlyn'
import NakupovaneTeplo from './NakupovaneTeplo'
import SpolocneNaklady from './SpolocneNaklady'

import Vstupy from './Vstupy'

import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification/>
        <Row>
          <Col lg={6}>
            <Nastroje/>
            <br/>
            <Sprava/>
            <br/>
          </Col>
          <Col lg={6}>
            <Hlavny/>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col>
            <Karty
              OcakavanaDodavkaTepla={<OcakavanaDodavkaTepla/>}
              ZemnyPlyn={<ZemnyPlyn/>}
              NakupovaneTeplo={<NakupovaneTeplo/>}
              SpolocneNaklady={<SpolocneNaklady/>}
              Vstupy={<Vstupy/>}
            />
          </Col>
        </Row>

        <br/>

      </div>
    )
  }
}

export default hot(module)(App)