import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText,
  Input
} from 'reactstrap'
import NumberFormat from 'react-number-format'

import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'
import Jednotka from '../../../../components/Jednotka'
import DecimalScale from '../helpers/DecimalScale'

import { updateUdajKotolneRequest } from '../../actions'
import {kotolne} from "../../selectors/zemny-plyn/zemnyplyn";

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
  decimalScale: 10,
  className: 'text-nowrap'
}

class VyrobaKotolne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const decimal = this.props.nastroje.decimal_vtpk

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const vstup = {
      //table: 'pk',
      sqlt: 'SCT_KotolnaUdaje',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update
    }

    const kotolne = this.props.kotolne

    let bez_primaru = []
    let s_primarom = []

    kotolne.platnost
      .filter(x => x['plati'] === true && x['primar'] === false)
      .map(x => bez_primaru.push(x['kotolna'].id))

    kotolne.platnost
      .filter(x => x['plati'] === true && x['primar'] === true)
      .map(x => s_primarom.push(x['kotolna'].id))

    const udaje_bez_primaru = this.props.udaje
      .filter(x => bez_primaru.includes(x['kotolna'].id))

    const udaje_s_primarom = this.props.udaje
      .filter(x => s_primarom.includes(x['kotolna'].id))

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Výroba tepla plynovými kotolňami</CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th>{''}</th>
              <th>Zdroj <Jednotka unit={'kWh'} /></th>
              <th>Primár <Jednotka unit={'kWh'} /></th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            {
              udaje_bez_primaru.map(
                (u, ix) => (
                  <tr key={ix} className="text-right">
                    <th className="text-left">{ kotolne['kotolne'].find(k => k.id === u['kotolna']['id']).nazov }</th>
                    <Vstup {...vstup} id={ u.id } val={ u['z_kwh'] } col={ 'z_kwh' } unit={'kWh'} place={'right'} />
                    <td></td>
                  </tr>
                )
              )
            }
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            {
              udaje_s_primarom.map(
                (u, ix) => (
                  <tr key={ix} className="text-right">
                    <th className="text-left">{ kotolne['kotolne'].find(k => k.id === u['kotolna']['id']).nazov }</th>
                    <Vstup {...vstup} id={ u.id } val={ u['z_kwh'] } col={ 'z_kwh' } unit={'kWh'} place={'right'} />
                    <Vstup {...vstup} id={ u.id } val={ u['p_kwh'] } col={ 'p_kwh' } unit={'kWh'} place={'right'} />
                  </tr>
                )
              )
            }
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'vtpk'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  hlavny: state.hlavny,
  vypocet: state.vypocet,
  kotolne: state.kotolne,
  udaje: kotolne(state.kotolne.udaje),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e, table, hlavny) => dispatch(updateUdajKotolneRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VyrobaKotolne)