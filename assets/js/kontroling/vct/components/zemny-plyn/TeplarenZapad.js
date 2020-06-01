import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Alert,
  Input, Button,
  UncontrolledTooltip
} from 'reactstrap'
import NumberFormat from 'react-number-format'
import FontAwesome from 'react-fontawesome'

import Vstup from '../helpers/Vstup'
import Jednotka from '../../../../components/Jednotka'
import mesiac from '../../../../utils/mesiac'
import DecimalScale from '../helpers/DecimalScale'
import ZlomkovaCiara from '../../../../components/ZlomkovaCiara'

import { updateNormativneMnozstvoRequest } from '../../actions'

// Number format component
let nFormat = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 0,
  displayType: 'text',
  value: 0
}

let vFormat = {
  ...nFormat,
  decimalScale: 10,
  className: 'text-nowrap'
}

class TeplarenZapad extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const hlavny = this.props.hlavny
    const zp = this.props.zp
    const od = this.props.od
    const nt = this.props.nt
    const nm = this.props.nm

    const spotreba = zp.spotreba
    const cena = zp.cena
    
    const varianty_zp = zp.varianty // zp = zemny plyn
    const varianty_nm = nm.varianty // nm = normovane mnozstvo

    const {
      vychod,
      zapad
    } = od

    const {
      dnt
    } = nt

    const decimal_zpz = this.props.nastroje.decimal_zpz
    const decimal_nmz = this.props.nastroje.decimal_nmz

    const nFor_zpz = {
      ...nFormat,
      decimalScale: Number(decimal_zpz)
    }
    
    const nFor_nmz = {
      ...nFormat,
      decimalScale: Number(decimal_nmz)
    }

    const vstup = {
      table: 'zapad',
      sqlt: 'VCT_NormativneMnozstvo',
      hlavny: hlavny.id,
      dec: decimal_nmz,
      update: this.props.update,
    }

    return [
      <Card key={'zp-spotreba-zapad'}>
        <CardHeader className="bg-primary text-white">Tepláreň Západ | Spotreba zemného plynu</CardHeader>
        <CardBody>
          { hlavny.sct !== null ?
            <Table size={'sm'} bordered>
              <thead>
              <tr className="text-center">
                <th>Mesiac</th>
                <th>Množstvo <Jednotka unit={'MWh'} /></th>
                <th>Celkové náklady <Jednotka unit={'€'} /></th>
                <th>Priemerná cena <Jednotka unit={'€/MWh'} /></th>
              </tr>
              </thead>
              <tbody className="text-right">

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              { spotreba.skutocnost.filter(x => x.zdroj === 3)
                .map((item, ix) => (
                  <tr key={ix}>
                    <td className="text-left">{ mesiac(item.mesiac) }</td>
                    <td><NumberFormat {...nFor_zpz} value={item.mwh} /> MWh</td>
                    <td><NumberFormat {...nFor_zpz} value={item.celkove} /> €</td>
                    <td><NumberFormat {...nFor_zpz} value={item.cena} decimalScale={4} /> €/MWh</td>
                  </tr>
                )) }

              <tr className="bg-lime">
                <td className="text-left">Spolu za január - {mesiac(hlavny.mesiac).toLowerCase()}</td>
                <td><NumberFormat {...nFor_zpz} value={cena.skutocnost.find(x => x.zdroj === 3).mwh} /> MWh</td>
                <td><NumberFormat {...nFor_zpz} value={cena.skutocnost.find(x => x.zdroj === 3).celkove} /> €</td>
                <td></td>
              </tr>

              <tr className="font-weight-bold">
                <td colSpan={3} className="text-left">Skutočná priemerná cena za január - {mesiac(hlavny.mesiac).toLowerCase()}</td>
                <td><NumberFormat {...nFor_zpz} value={cena.skutocnost.find(x => x.zdroj === 3).cena} decimalScale={4} /> €/MWh</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              { spotreba.plan.filter(x => x.zdroj === 3)
                .map((item, ix) => (
                  <tr key={ix}>
                    <td className="text-left">{ mesiac(item.mesiac) }</td>
                    <td><NumberFormat {...nFor_zpz} value={item.mwh} /> MWh</td>
                    <td><NumberFormat {...nFor_zpz} value={item.celkove} /> €</td>
                    <td><NumberFormat {...nFor_zpz} value={item.cena} decimalScale={4} /> €/MWh</td>
                  </tr>
                )) }

              <tr className="bg-yellow">
                <td className="text-left">Spolu za celý rok</td>
                <td><NumberFormat {...nFor_zpz} value={cena.ocakavana.find(x => x.zdroj === 3).mwh} /> MWh</td>
                <td><NumberFormat {...nFor_zpz} value={cena.ocakavana.find(x => x.zdroj === 3).celkove} /> €</td>
                <td></td>
              </tr>

              <tr className="font-weight-bold">
                <td colSpan={3} className="text-left">Očakávaná priemerná cena za celý rok</td>
                <td><NumberFormat {...nFor_zpz} value={cena.ocakavana.find(x => x.zdroj === 3).cena} decimalScale={4} /> €/MWh</td>
              </tr>

              { varianty_zp.length > 0 &&
              [ <tr key={'v1'} className="bg-light">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>,
                <tr key={'v2'} className="text-center">
                  <td></td>
                  <th colSpan={3}>Očakávané hodnoty pre jednotlivé varianty</th>
                </tr> ]
              }

              { varianty_zp.map((item, ix) => [
                <tr key={ix+'a'} className="text-muted">
                  <td>
                    <span className="pull-left text-info">Variant #{ix+1} - {item.zapad_percento}%</span>
                    <span>do konca roka</span>
                  </td>
                  <td><NumberFormat {...nFor_zpz} value={item.zapad_mwh_kr} /> MWh</td>
                  <td><NumberFormat {...nFor_zpz} value={item.zapad_naklady_kr} /> €</td>
                  <td><NumberFormat {...nFor_zpz} value={item.zapad_cena_kr} decimalScale={4} /> €/MWh</td>
                </tr>,
                <tr key={ix+'b'} className="text-muted">
                  <td>
                    <span>za celý rok</span>
                  </td>
                  <td><NumberFormat {...nFor_zpz} value={item.zapad_mwh_cr} /> MWh</td>
                  <td><NumberFormat {...nFor_zpz} value={item.zapad_naklady_cr} /> €</td>
                  <td><NumberFormat {...nFor_zpz} value={item.zapad_cena_cr} decimalScale={4} /> €/MWh</td>
                </tr>
              ]) }

              </tbody>
            </Table>

            :

            <p><em>Je potrebné prepojiť vyhodnotenie ceny tepla so záznamom skutočnej ceny tepla</em></p>
          }
        </CardBody>
        <CardFooter>
          <DecimalScale id={'zpz'} />
        </CardFooter>
      </Card>,

      <br key={'zp-break-2'}/>,

      <Card key={'zp-normativne-zapad'}>
        <CardHeader className="bg-primary text-white">SCZT Západ | Normatívne množstvo</CardHeader>
        <CardBody>
          <Table size={'sm'} bordered>
            <thead>
            <tr className="text-center">
              <th>SCZT Západ</th>
              <th></th>
              <th>Účinnosť</th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Forecast dodávky tepla SCZT západ</td>
              <td><NumberFormat {...nFor_nmz} value={zapad.f_kwh / 1000} /> MWh</td>
            </tr>
            <tr>
              <td className="text-left">&nbsp;&nbsp;- nákup tepla Cogen West</td>
              <Vstup {...vstup} id={nm.zapad.ntcw.id} val={nm.zapad.ntcw.hodnota} row={'ntcw'} col={'hodnota'} dec={4} unit={'kWh'} />
              {/*<td>-&nbsp;<NumberFormat {...nFor_nmz} value={dnt.cw / 1000} /> MWh</td>*/}
            </tr>
            <tr>
              <td className="text-left">Teplo na výstupe zo zdroja</td>
              <td><NumberFormat {...nFor_nmz} value={nm.zapad.tvz.mnozstvo / 1000} /> MWh</td>
              <Vstup {...vstup} id={nm.zapad.tvz.id} val={nm.zapad.tvz.ucinnost} row={'tvz'} col={'ucinnost'} dec={4} />
            </tr>
            <tr>
              <td className="text-left">Pomer spaľovacieho tepla a výhrevnosti</td>
              <Vstup {...vstup} id={nm.zapad.pstv.id} val={nm.zapad.pstv.hodnota} row={'pstv'} col={'hodnota'} dec={4} unit={'GJ/GJ'} />
            </tr>
            <tr>
              <td className="text-left">Normatívne množstvo zemného plynu východ</td>
              <td><NumberFormat {...nFor_nmz} value={nm.zapad.nmzp.mwh} /> MWh</td>
            </tr>
            </tbody>
          </Table>

          <br/>
          <br/>

          { varianty_nm.filter(x => x.id === hlavny.id).map((item, ix) => [
            <Table key={ix} size={'sm'} bordered>
              <thead>
              <tr className="text-center">
                <th>Variant #{ix+1} - {item.zapad_percento}%</th>
                <th>Množstvo</th>
              </tr>
              </thead>
              <tbody className="text-right">
              <tr>
                <td className="text-left">Forecast SCZT Východ</td>
                <td><NumberFormat {...nFor_nmz} value={item.zapad_forecast} /> MWh</td>
              </tr>
              <tr>
                <td className="text-left">Teplo na výstupe zo zdroja</td>
                <td><NumberFormat {...nFor_nmz} value={item.zapad_vystup} /> MWh</td>
              </tr>
              <tr>
                <td className="text-left">Normatívne množstvo zemného plynu východ</td>
                <td><NumberFormat {...nFor_nmz} value={item.zapad_normativne} /> MWh</td>
              </tr>
              </tbody>
            </Table>,
            <br key={ix+'br'}/>
          ]) }
        </CardBody>
        <CardFooter>
          <DecimalScale id={'nmz'} />
        </CardFooter>
      </Card>
    ]
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  hlavny: state.hlavny,

  zp: state.zemnyplyn,
  od: state.ocakavanadodavka,
  nt: state.nakuptepla,
  nm: state.normativnemnozstvo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e, table, hlavny) => dispatch(updateNormativneMnozstvoRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeplarenZapad)