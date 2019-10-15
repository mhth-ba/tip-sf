import React from 'react'
import {connect} from 'react-redux'

import ReactHtmlParser from 'react-html-parser'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText,
  Input, Label, UncontrolledTooltip
} from 'reactstrap'
import NumberFormat from 'react-number-format'

import Jednotka from '../../../../components/Jednotka'
import ZlomkovaCiara from '../../../../components/ZlomkovaCiara'

import DecimalScale from '../helpers/DecimalScale'

import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'

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

class NormativneMnozstvoPKSPrimarom extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const nm = this.props.nm
    const sp = nm.pk_s_primarom

    const decimal = this.props.nastroje.decimal_pbnmzppksp

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">
          Normatívne množstvo zemného plynu - Plynové kotolne (s primárnym rozvodom)
        </CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th></th>
              <th colSpan={2}>Primárna sieť</th>
              <th colSpan={2}>Výstup z kotolne</th>
              <th colSpan={4}></th>
            </tr>
            <tr className="text-center">
              <th>Kotolňa</th>
              <th>Teplo na výstupe</th>
              <th>Účinnosť</th>
              <th>Teplo na výstupe</th>
              <th>Účinnosť</th>
              <th>Výhrevnosť zemného plynu</th>
              <th>Pomer spaľovacieho tepla a výhrevnosti</th>
              <th colSpan={2}>Normatívne množstvo zemného plynu</th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            {
              sp.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['kotolna']}</td>
                  <td className="text-nowrap"><NumberFormat {...numFormat} value={d.p_teplo} /> MWh</td>
                  <td><NumberFormat {...numFormat} value={d.p_ucinnost} decimalScale={3} /></td>
                  <td className="text-nowrap"><NumberFormat {...numFormat} value={d.z_teplo} /> MWh</td>
                  <td><NumberFormat {...numFormat} value={d.z_ucinnost} decimalScale={3} /></td>
                  <td className="text-nowrap"><NumberFormat {...numFormat} value={d.vzp} decimalScale={4} /> GJ/tis. m<sup>3</sup></td>
                  <td className="text-nowrap"><NumberFormat {...numFormat} value={d.pstv} decimalScale={6} /> GJ/GJ</td>
                  <td className="text-nowrap"><NumberFormat {...numFormat} value={d.nmzp_mwh} /> MWh</td>
                  <td className="text-nowrap"><NumberFormat {...numFormat} value={d.nmzp_m3} /> m<sup>3</sup></td>
                </tr>
              ))
            }
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'pbnmzppksp'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  nm: state.normativnemnozstvo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NormativneMnozstvoPKSPrimarom)