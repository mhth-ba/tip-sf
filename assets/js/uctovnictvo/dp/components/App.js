import React from 'react'
import { Row, Col } from 'reactstrap'
import Notification from '../../../components/Notification'

import VyberPolozky from './VyberPolozky'
import Nastroje from './Nastroje'

import VytvoritHlavny from './VytvoritHlavny'
import PridatDoklad from './PridatDoklad'
import Import from './Import'
import Prilohy from './Prilohy'
import Aktivita from './Aktivita'

import Hlavny from './Hlavny'

import Pohlad from './Pohlad'
import VstupZmenene from './VstupZmenene'
import VystupZmenene from './VystupZmenene'
import VstupPovodne from './VstupPovodne'
import VystupPovodne from './VystupPovodne'

import Znamienka from './Znamienka'
import Sumarizacia from './Sumarizacia'
import Export from './Export'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification/>
        <Row>
          <Col md={7}>
            <VyberPolozky/>
            <br/>
            <Nastroje
              vytvorit={<VytvoritHlavny/>}
              doklad={<PridatDoklad/>}
              import={<Import/>}
              prilohy={<Prilohy/>}
              aktivita={<Aktivita/>}
            />
          </Col>
          <Col md={5}>
            <Hlavny/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Pohlad
              vstup_zmenene={<VstupZmenene/>}
              vystup_zmenene={<VystupZmenene/>}
              vstup_povodne={<VstupPovodne/>}
              vystup_povodne={<VystupPovodne/>}
            />
          </Col>
        </Row>
        <br/>
        {/*<Row>
          <Col>
            <Vstup/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Vystup/>
          </Col>
        </Row>
        <br/>*/}
        <Row>
          <Col>
            <Znamienka/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Sumarizacia/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Export/>
          </Col>
        </Row>
        <br/>
      </div>
    )
  }
}

export default App