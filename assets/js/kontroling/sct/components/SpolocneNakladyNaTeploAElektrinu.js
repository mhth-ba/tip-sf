import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap'

import SkutocneNaklady from './teplo-a-elektrina/SkutocneNaklady'
import RegulovanaZlozka from './teplo-a-elektrina/RegulovanaZlozka'

import Poznamky from './helpers/Poznamky'

import { updatePoznamkyRequest } from '../actions'

class SpolocneNakladyNaTeploAElektrinu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const note = this.props.poznamky.snte

    return (
      <div>
        <Row>
          <Col md={12} lg={12} xl={12}>
            <SkutocneNaklady/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={12} lg={4} xl={4}>
            <RegulovanaZlozka/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Poznamky id={note.id} val={note.poznamka} row={'snte'} col={'poznamka'} update={this.props.update} />
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
  // load: (e) => dispatch(loadMainEntry(e))
  update: (e) => dispatch(updatePoznamkyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpolocneNakladyNaTeploAElektrinu)