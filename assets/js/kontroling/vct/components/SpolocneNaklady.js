import React from 'react'
import {connect} from 'react-redux'
import { Row, Col, Alert } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import OcakavaneNaklady from './teplo-a-elektrina/OcakavaneNaklady'

import OcakavanaCenaGraf from './teplo-a-elektrina/OcakavanaCenaGraf'
import NakladyVCeneGraf from './teplo-a-elektrina/NakladyVCeneGraf'

import Poznamky from './helpers/Poznamky'

import { updatePoznamkyRequest } from '../actions'

class SpolocneNaklady extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const opravnenia = this.props.opravnenia
    const note = this.props.poznamky.sn

    return (
      <div>
        <Row>
          <Col>
            <OcakavaneNaklady/>
          </Col>
        </Row>
        <br/>
        { this.props.hlavny.sct !== null && this.props.hlavny.nct !== null
          ?
          <Row>
            <Col>
              <OcakavanaCenaGraf/>
            </Col>
            <Col>
              <NakladyVCeneGraf/>
            </Col>
          </Row>

          :

          <Row>
            <Col>
              <Alert color={'info'}>
                <FontAwesome name={'info-circle'} />
                &nbsp;
                Pre zobrazenie grafov je potrebné prepojiť vyhodnotenie ceny tepla
                so záznamom návrhu ceny tepla a záznamom skutočnej ceny tepla v karte hlavných údajov.
              </Alert>
            </Col>
          </Row>
        }
        <br/>
        <Row>
          <Col>
            { opravnenia.mng &&
            <Poznamky id={note.id} val={note.poznamka} row={'sn'} col={'poznamka'} update={this.props.update} />
            }
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  opravnenia: state.opravnenia,
  poznamky: state.poznamky,

  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpolocneNaklady)