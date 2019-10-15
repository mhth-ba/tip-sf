import React from 'react'
import {connect} from 'react-redux'

import ReactHtmlParser from 'react-html-parser'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText,
  Input, Label, UncontrolledTooltip,
  Alert
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import NumberFormat from 'react-number-format'

import Jednotka from '../../../../components/Jednotka'
import ZlomkovaCiara from '../../../../components/ZlomkovaCiara'

import DecimalScale from '../helpers/DecimalScale'

import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'

// Number format component
let numF = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 0,
  displayType: 'text',
  value: 0
}

let vypocetFormat = {
  ...numF,
  decimalScale: 0,
  className: 'text-nowrap'
}

class ZhrnutiePorovnanie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const hlavny = this.props.hlavny
    const ct = this.props.ct
    const vypocet = this.props.vypocet

    numF = {
      ...numF,
      decimalScale: Number(4)
    }

    return [
      <Card key={'sct'}>
        <CardHeader className="bg-info text-white">Celková cena tepla bez DPH na rok {hlavny.rok}</CardHeader>
        <CardBody>
          <Table hover>
            <thead>
            <tr className="text-right">
              <th></th>
              <th>Cena</th>
              <th></th>
            </tr>
            </thead>
            <tbody className="text-right text-nowrap">
            <tr>
              <td className="text-left">Variabilná zložka ceny tepla</td>
              <th><NumberFormat {...numF} value={ct.vzct} /></th>
              <td className="text-left">€/kWh</td>
            </tr>
            <tr>
              <td className="text-left">Fixná zložka ceny tepla</td>
              <th><NumberFormat {...numF} value={ct.fzct} /></th>
              <td className="text-left">€/kW</td>
            </tr>
            <tr id={'ctcpctkwh'}>
              <td className="text-left">Celková priemerná cena tepla</td>
              <th><NumberFormat {...numF} value={ct.cpctkwh} /></th>
              <td className="text-left">€/kWh</td>
            </tr>
            <UncontrolledTooltip target={'ctcpctkwh'}>Variabilná zložka<br/>+ ( Fixná zložka / 5300 )</UncontrolledTooltip>
            <tr id={'ctcpctgj'}>
              <td className="text-left">Celková priemerná cena tepla</td>
              <th><NumberFormat {...numF} value={ct.cpctgj} /></th>
              <td className="text-left">€/GJ</td>
            </tr>
            <UncontrolledTooltip target={'ctcpctgj'}>Priemerná cena v kWh / 0,0036</UncontrolledTooltip>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    ,
      <br key={'break-1'} />
    ,
      <Card key={'sct-rok'}>
        <CardHeader className="bg-secondary text-white">Medziročné porovnanie zložiek skutočnej ceny tepla na rok {hlavny.rok} a {hlavny.rok - 1}</CardHeader>
        <CardBody>
          <Table hover>
            <thead>
            <tr className="text-right">
              <th></th>
              <th>Rok {hlavny.rok - 1}</th>
              <th>Rok {hlavny.rok}</th>
              <th>Percento zmeny ceny</th>
              <th></th>
            </tr>
            </thead>
            <tbody className="text-right text-nowrap">
            <tr>
              <td className="text-left">Variabilná zložka ceny tepla</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td className="text-left">%</td>
            </tr>
            <tr>
              <td className="text-left">Fixná zložka ceny tepla</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td className="text-left">%</td>
            </tr>
            <tr>
              <td className="text-left">Celková priemerná cena tepla</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td className="text-left">%</td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      ,
      <br key={'break-2'} />
      ,
      <Card key={'sct-nct'}>
        <CardHeader className="bg-dark text-white">
          Porovnanie zložiek s ÚRSO schválenou cenou tepla na rok {hlavny.rok}
        </CardHeader>
        <CardBody>
          { hlavny.nct_cena ?
            <Table hover>
              <thead>
              <tr className="text-right">
                <th></th>
                <th colSpan={2} className="text-center">
                  <span className="text-muted font-weight-normal">{hlavny.nct_cena.nazov} {hlavny.nct_cena.rok}</span>
                  <br/>
                  ÚRSO cena {hlavny.rok}
                </th>
                <th colSpan={2} className="text-center">Skutočná cena tepla {hlavny.rok}</th>
                <th>Dobropis</th>
                <th></th>
              </tr>
              </thead>
              <tbody className="text-right text-nowrap">
              <tr>
                <td className="text-left">Variabilná zložka ceny tepla</td>
                <td><NumberFormat {...numF} value={ct.pzusct.vz.urso} /></td>
                <td className="text-left">€/kWh</td>
                <td><NumberFormat {...numF} value={ct.vzct} /></td>
                <td className="text-left">€/kWh</td>
                <th><NumberFormat {...numF} value={ct.pzusct.vz.dobropis} decimalScale={2} /></th>
                <td className="text-left">%</td>
              </tr>
              <tr>
                <td className="text-left">Fixná zložka ceny tepla</td>
                <td><NumberFormat {...numF} value={ct.pzusct.fz.urso} /></td>
                <td className="text-left">€/kW</td>
                <td><NumberFormat {...numF} value={ct.fzct} /></td>
                <td className="text-left">€/kW</td>
                <th><NumberFormat {...numF} value={ct.pzusct.fz.dobropis} decimalScale={2} /></th>
                <td className="text-left">%</td>
              </tr>
              <tr>
                <td className="text-left">Celková priemerná cena tepla</td>
                <td><NumberFormat {...numF} value={ct.pzusct.cp.urso} /></td>
                <td className="text-left">€/kWh</td>
                <td><NumberFormat {...numF} value={ct.cpctkwh} /></td>
                <td className="text-left">€/kWh</td>
                <th><NumberFormat {...numF} value={ct.pzusct.cp.dobropis} decimalScale={2} /></th>
                <td className="text-left">%</td>
              </tr>
              </tbody>
            </Table>

            :

            <Alert color={'dark'}>
              <FontAwesome name={'info-circle'} />&nbsp;
              Toto zobrazenie vyžaduje <strong>prepojenie s návrhom ceny tepla</strong>&nbsp;<em>(cena)</em>.
            </Alert>
          }
        </CardBody>
      </Card>
    ]
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  ct: state.cenatepla
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZhrnutiePorovnanie)