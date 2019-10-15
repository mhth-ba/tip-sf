import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'
import Nastroje from './Nastroje'
import Sprava from './Sprava'
import Hlavny from './Hlavny'
import Karty from './Karty'

import SkutocnaDodavkaTepla from './SkutocnaDodavkaTepla'
import FakturovanyZemnyPlyn from './FakturovanyZemnyPlyn'
import PalivovyBonus from './PalivovyBonus'
import NakupovaneTeplo from './NakupovaneTeplo'
import SpolocneNakladyNaTeploAElektrinu from './SpolocneNakladyNaTeploAElektrinu'
import CenaTepla from './CenaTepla'

import Vstupy from './Vstupy'

import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification/>
        <Row>
          <Col md={12} lg={6}>
            <Nastroje/>
            <br/>
            <Sprava/>
            <br/>
          </Col>
          <Col md={12} lg={6}>
            <Hlavny/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Karty
              SkutocnaDodavkaTepla={<SkutocnaDodavkaTepla/>}
              FakturovanyZemnyPlyn={<FakturovanyZemnyPlyn/>}
              PalivovyBonus={<PalivovyBonus/>}
              NakupovaneTeplo={<NakupovaneTeplo/>}
              SpolocneNakladyNaTeploAElektrinu={<SpolocneNakladyNaTeploAElektrinu/>}
              CenaTepla={<CenaTepla/>}
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
