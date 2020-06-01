import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap'

import OcakavaneNakladyNakupTepla from './nakupovane-teplo/OcakavaneNakladyNakupTepla'

import Poznamky from './helpers/Poznamky'

import { updatePoznamkyRequest } from '../actions'

class NakupovaneTeplo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const opravnenia = this.props.opravnenia
    const note = this.props.poznamky.nt

    return (
      <div>
        <Row>
          <Col xl={7}>
            <OcakavaneNakladyNakupTepla/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            { opravnenia.mng &&
            <Poznamky id={note.id} val={note.poznamka} row={'nt'} col={'poznamka'} update={this.props.update} />
            }
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  opravnenia: state.opravnenia,
  poznamky: state.poznamky
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e) => dispatch(updatePoznamkyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NakupovaneTeplo)