import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'

import ForecastDodavkyTepla from './ocakavana-dodavka-tepla/ForecastDodavkyTepla'

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

class OcakavanaDodavkaTepla extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const opravnenia = this.props.opravnenia
    const note = this.props.poznamky.odt

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
          <Col lg={12} xl={12}>
            <ForecastDodavkyTepla/>
          </Col>
          {/*<Col lg={12} xl={5}>
            <UzitocnaDodavkaGraf/>
          </Col>*/}
        </Row>
        <br/>
        <Row>
          <Col>
            { opravnenia.mng &&
              <Poznamky id={note.id} val={note.poznamka} row={'odt'} col={'poznamka'} update={this.props.update} />
            }
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  opravnenia: state.opravnenia,
  poznamky: state.poznamky
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  update: (e) => dispatch(updatePoznamkyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OcakavanaDodavkaTepla)
