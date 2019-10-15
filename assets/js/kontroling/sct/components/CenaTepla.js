import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap'

import VariabilnaZlozka from './cena-tepla/VariabilnaZlozka'
import FixnaZlozka from './cena-tepla/FixnaZlozka'
import ZhrnutiePorovnanie from './cena-tepla/ZhrnutiePorovnanie'
import VyvojCenyGraf from './cena-tepla/VyvojCenyGraf'
import ExportFormularov from './cena-tepla/ExportFormularov'

import Poznamky from './helpers/Poznamky'

import { updatePoznamkyRequest } from '../actions'

class CenaTepla extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const note = this.props.poznamky.ct

    return (
      <div>
        <Row>
          <Col lg={12} xl={6}>
            <VariabilnaZlozka/>
          </Col>
          <Col lg={12} xl={6}>
            <FixnaZlozka/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg={12} xl={5}>
            <ZhrnutiePorovnanie/>
          </Col>
          <Col lg={12} xl={7}>
            <VyvojCenyGraf/>
            <br/>
            <ExportFormularov/>
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
  // load: (e) => dispatch(loadMainEntry(e))
  update: (e) => dispatch(updatePoznamkyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenaTepla)