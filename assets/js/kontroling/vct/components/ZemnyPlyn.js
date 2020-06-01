import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'reactstrap'

import TeplarenVychod from './zemny-plyn/TeplarenVychod'
import TeplarenZapad from './zemny-plyn/TeplarenZapad'

import Poznamky from './helpers/Poznamky'

import { updatePoznamkyRequest } from '../actions'

class FakturovanyZemnyPlyn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const opravnenia = this.props.opravnenia
    const note = this.props.poznamky.zp

    return (
      <div>
        <Row>
          <Col>
            <TeplarenVychod/>
          </Col>
          <Col>
            <TeplarenZapad/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            { opravnenia.mng &&
              <Poznamky id={note.id} val={note.poznamka} row={'zp'} col={'poznamka'} update={this.props.update} />
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
)(FakturovanyZemnyPlyn)