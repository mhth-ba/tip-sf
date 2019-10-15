import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap'

import NakladyNaNakupTepla from './nakupovane-teplo/NakladyNaNakupTepla'

import Poznamky from './helpers/Poznamky'

import { updatePoznamkyRequest } from '../actions'

class NakupovaneTeplo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const note = this.props.poznamky.nt

    return (
      <div>
        <Row>
          <Col md={12} lg={12} xl={7}>
            <NakladyNaNakupTepla/>
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
  update: (e) => dispatch(updatePoznamkyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NakupovaneTeplo)