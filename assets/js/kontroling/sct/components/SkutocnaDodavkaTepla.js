import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import UzitocnaDodavkaTepla from './skutocna-dodavka-tepla/UzitocnaDodavkaTepla'
import PorovnanieSPlanom from './skutocna-dodavka-tepla/PorovnanieSPlanom'
import VyrobaTepla from './skutocna-dodavka-tepla/VyrobaTepla'
import VyrobaKotolne from './skutocna-dodavka-tepla/VyrobaKotolne'
import VyrobaElektriny from './skutocna-dodavka-tepla/VyrobaElektriny'
import DelenieNakladov from './skutocna-dodavka-tepla/DelenieNakladov'

import UzitocnaDodavkaGraf from './skutocna-dodavka-tepla/UzitocnaDodavkaGraf'
import PorovnanieSPlanomGraf from './skutocna-dodavka-tepla/PorovnanieSPlanomGraf'
import VyrobaTeplaGraf from './skutocna-dodavka-tepla/VyrobaTeplaGraf'

import Poznamky from './helpers/Poznamky'

import { updatePoznamkyRequest } from '../actions'

// Number format component
const numFormat = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 0,
  displayType: 'text',
  value: 0
}

const vypocetFormat = {
  ...numFormat,
  decimalScale: 10
}

class SkutocnaDodavkaTepla extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const note = this.props.poznamky.sdt

    return (
      <div>
        {/*<Table size="sm">
            <tbody className="text-right">
            {this.props.polozky.map(
                polozka => <Polozka key={polozka.id} {...polozka} />
            )}
            </tbody>
          </Table>
          <br/>*/}
        <Row>
          <Col lg={12} xl={7}>
            <UzitocnaDodavkaTepla/>
          </Col>
          <Col lg={12} xl={5}>
            <UzitocnaDodavkaGraf/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg={12} xl={6}>
            <PorovnanieSPlanom/>
          </Col>
          <Col lg={12} xl={6}>
            <PorovnanieSPlanomGraf/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg={12} xl={6}>
            <VyrobaTepla/>
          </Col>
          <Col lg={12} xl={6}>
            <VyrobaTeplaGraf/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg={5} xl={3}>
            <VyrobaKotolne/>
          </Col>
          <Col lg={7} xl={5}>
            <VyrobaElektriny/>
          </Col>
          <Col xl={4}>
            <DelenieNakladov/>
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

const mapStateToProps = ( state, ownProps ) => ({
  poznamky: state.poznamky
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  update: (e) => dispatch(updatePoznamkyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkutocnaDodavkaTepla)
