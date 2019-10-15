import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap'

import Konstanty from './zemny-plyn/Konstanty'
import SpravaKotolni from './zemny-plyn/SpravaKotolni'
import TeplarenVychod from './zemny-plyn/TeplarenVychod'
import TeplarenZapad from './zemny-plyn/TeplarenZapad'
import VyhrevnaJuh from './zemny-plyn/VyhrevnaJuh'
import SumarVyrobne from './zemny-plyn/SumarVyrobne'
import PlynoveKotolne from './zemny-plyn/PlynoveKotolne'
import KlucovaneNaklady from './zemny-plyn/KlucovaneNaklady'
import SumarBAT from './zemny-plyn/SumarBAT'

import VyrobneGraf from './zemny-plyn/VyrobneGraf'
import KotolneGraf from './zemny-plyn/KotolneGraf'
import SumarGraf from './zemny-plyn/SumarGraf'

import Poznamky from './helpers/Poznamky'

import { updatePoznamkyRequest } from '../actions'

class FakturovanyZemnyPlyn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const note = this.props.poznamky.fzp

    return (
      <div>
        <Row>
          <Col md={12} lg={5} xl={4}>
            <Konstanty/>
          </Col>
          <Col md={12} lg={7} xl={5}>
            <SpravaKotolni/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <TeplarenVychod/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <TeplarenZapad/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <VyhrevnaJuh/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <SumarVyrobne/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg={12} xl={6}>
            <PlynoveKotolne/>
            <br/>
            <KlucovaneNaklady/>
            <br/>
            <SumarBAT/>
          </Col>
          <Col lg={12} xl={6}>
            <VyrobneGraf/>
            <br/>
            <Row>
              <Col lg={12} xl={6}>
                <KotolneGraf/>
              </Col>
              <Col lg={12} xl={6}>
                <SumarGraf/>
              </Col>
            </Row>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Poznamky id={note.id} val={note.poznamka} row={'ct'} col={'poznamka'} update={this.props.update} />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny

  poznamky: state.poznamky
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e) => dispatch(updatePoznamkyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FakturovanyZemnyPlyn)