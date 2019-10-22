import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label,
  Input,
  UncontrolledTooltip
} from 'reactstrap'
import NumberFormat from 'react-number-format'

import DecimalScale from '../helpers/DecimalScale'

import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'

import { updateKonstantyRequest } from '../../actions'


// Number format component
let numFormat = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 0,
  displayType: 'text',
  value: 0
}

let vypocetFormat = {
  ...numFormat,
  decimalScale: 0,
  className: 'text-nowrap'
}

class Konstanty extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const konstanty = this.props.konstanty
    const vypocet = this.props.vypocet

    const decimal = this.props.nastroje.decimal_fzpk

    numFormat = { // format cisla v bunke
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = { // format cisla v bubline vypoctu
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      jczpsopov, // jednotkova cena zemneho plynu SOPo na MWh pre TpV
      jczpsoppv, // jednotkova cena zemneho plynu SOPp na MWh pre TpV
      jczpsopdv, // jednotkova cena zemneho plynu SOPd na MWh pre TpV

      jczpsopoz, // jednotkova cena zemneho plynu SOPo na MWh pre TpZ
      jczpsoppz, // jednotkova cena zemneho plynu SOPp na MWh pre TpZ
      jczpsopdz, // jednotkova cena zemneho plynu SOPd na MWh pre TpZ

      jczpsopoj, // jednotkova cena zemneho plynu SOPo na MWh pre VhJ
      jczpsoppj, // jednotkova cena zemneho plynu SOPp na MWh pre VhJ
      jczpsopdj  // jednotkova cena zemneho plynu SOPd na MWh pre VhJ
    } = konstanty

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      fzp_k_jczpsopov,
      fzp_k_jczpsoppv,
      fzp_k_jczpsopdv,
      fzp_k_jczpsopoz,
      fzp_k_jczpsoppz,
      fzp_k_jczpsopdz,
      fzp_k_jczpsopoj,
      fzp_k_jczpsoppj,
      fzp_k_jczpsopdj
    } = vypocet

    const vstup = {
      hlavny: this.props.hlavny.id,
      col: 'hodnota',
      dec: decimal,
      update: this.props.update
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Konštanty</CardHeader>
        <CardBody>
          <CardTitle>Jednotková cena zemného plynu</CardTitle>
          <br/>
          <Table style={{ maxWidth: '400px' }}>
            <thead>
            <tr className="text-center">
              <th>{''}</th>
              <th>SOP<sub>o</sub> na MWh</th>
              <th>SOP<sub>p</sub> na MWh</th>
              <th>SOP<sub>d</sub> na MWh</th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <th className="text-left">TpV</th>
              <Vstup {...vstup} id={jczpsopov.id} val={jczpsopov.hodnota} row={'jczpsopov'} class={fzp_k_jczpsopov} />
              <Vstup {...vstup} id={jczpsoppv.id} val={jczpsoppv.hodnota} row={'jczpsoppv'} class={fzp_k_jczpsoppv} />
              <Vstup {...vstup} id={jczpsopdv.id} val={jczpsopdv.hodnota} row={'jczpsopdv'} class={fzp_k_jczpsopdv} />
            </tr>
            <tr>
              <th className="text-left">TpZ</th>
              <Vstup {...vstup} id={jczpsopoz.id} val={jczpsopoz.hodnota} row={'jczpsopoz'} class={fzp_k_jczpsopoz} />
              <Vstup {...vstup} id={jczpsoppz.id} val={jczpsoppz.hodnota} row={'jczpsoppz'} class={fzp_k_jczpsoppz} />
              <Vstup {...vstup} id={jczpsopdz.id} val={jczpsopdz.hodnota} row={'jczpsopdz'} class={fzp_k_jczpsopdz} />
            </tr>
            <tr>
              <th className="text-left">VhJ</th>
              <Vstup {...vstup} id={jczpsopoj.id} val={jczpsopoj.hodnota} row={'jczpsopoj'} class={fzp_k_jczpsopoj} />
              <Vstup {...vstup} id={jczpsoppj.id} val={jczpsoppj.hodnota} row={'jczpsoppj'} class={fzp_k_jczpsoppj} />
              <Vstup {...vstup} id={jczpsopdj.id} val={jczpsopdj.hodnota} row={'jczpsopdj'} class={fzp_k_jczpsopdj} />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'fzpk'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  konstanty: state.konstanty
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e, table, hlavny) => dispatch(updateKonstantyRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Konstanty)