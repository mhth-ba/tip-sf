import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap'

import NormativneMnozstvoTpV from './palivovy-bonus/NormativneMnozstvoTpV'
import NormativneMnozstvoVhJ from './palivovy-bonus/NormativneMnozstvoVhJ'
import NormativneMnozstvoTpZ from './palivovy-bonus/NormativneMnozstvoTpZ'
import NormativneMnozstvoPKBezPrimaru from './palivovy-bonus/NormativneMnozstvoPKBezPrimaru'
import NormativneMnozstvoPKSPrimarom from './palivovy-bonus/NormativneMnozstvoPKSPrimarom'
import OpravneneNaklady from './palivovy-bonus/OpravneneNaklady'

import Poznamky from './helpers/Poznamky'

import { updatePoznamkyRequest } from '../actions'

class PalivovyBonus extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const note = this.props.poznamky.pb

    return (
      <div>
        <Row>
          <Col md={12} lg={12} xl={4}>
            <NormativneMnozstvoTpV/>
          </Col>
          <Col md={12} lg={12} xl={4}>
            <NormativneMnozstvoVhJ/>
          </Col>
          <Col md={12} lg={12} xl={4}>
            <NormativneMnozstvoTpZ/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={12} lg={12} xl={6}>
            <Row>
              <Col xl={12}>
                <NormativneMnozstvoPKBezPrimaru/>
                <br/>
                <NormativneMnozstvoPKSPrimarom/>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={12} xl={6}>
            <OpravneneNaklady/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Poznamky id={note.id} val={note.poznamka} row={'pb'} col={'poznamka'} update={this.props.update} />
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
)(PalivovyBonus)