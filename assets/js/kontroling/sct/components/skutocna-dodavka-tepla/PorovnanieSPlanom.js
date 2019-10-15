import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Row, Col, Input, Label, UncontrolledTooltip,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Alert
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import NumberFormat from 'react-number-format'

import Jednotka from '../../../../components/Jednotka'

import Vypocet from '../helpers/Vypocet'
import DecimalScale from '../helpers/DecimalScale'

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
  decimalScale: 10
}

class PorovnanieSPlanom extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const vypocet = this.props.vypocet
    const hlavny = this.props.hlavny
    const psp = this.props.psp
    const k = this.props.konstanty

    const decimal = this.props.nastroje.decimal_pp

    numFormat = { // format cisla v bunke
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = { // format cisla v bubline vypoctu
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      udt_v,     // sczt vychod | uzitocna dodavka tepla
      str_v,     // sczt vychod | straty
      cdt_v,     // sczt vychod | celkova dodavka tepla
      udt_z,     // sczt zapad | uzitocna dodavka tepla
      str_z,     // sczt zapad | straty
      cdt_z,     // sczt zapad | celkova dodavka tepla
      udt_b,     // bat spolu | uzitocna dodavka tepla
      str_b,     // bat spolu | straty
      cdt_b      // bat spolu | celkova dodavka tepla
    } = psp

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      pp_v_udt_p,
      pp_v_udt_s,
      pp_v_udt_r,
      pp_v_s_p,
      pp_v_s_s,
      pp_v_s_r,
      pp_v_cdt_p,
      pp_v_cdt_s,
      pp_v_cdt_r,

      pp_z_udt_s
    } = vypocet

    return (
      hlavny.nct_dodavka ?
      <Card>
        <CardHeader className="bg-primary text-white">Porovnanie s plánom</CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th colSpan={2}>{''}</th>
              <th>Plán</th>
              <th>Skutočnosť</th>
              <th>Rozdiel</th>
              <th>Plnenie v %</th>
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
            </tr>
            <tr>
              <th rowSpan={3} className="text-center align-middle">SCZT<br/>Východ</th>
              <td className="text-left">Užitočná dodávka tepla</td>
              {/*<Vypocet value={ p_svk.v_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={pdt.zdroj.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pdt.primar.v_kwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pdt.ost.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pdt.sekundar.v_kwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pdt.pk.v_kwh} />
                       </div> }
                       popis={ <div>
                         <span>Zdroj + Primár + OST + Sekundár + Plynové kotolne</span>
                       </div> }
                       popoverId={'pp_v_udt_p_pop'}
                       cellsId={[]}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={pp_v_udt_p}
              />
              <Vypocet value={ svk.v_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={svk.v_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Skutočná dodávka tepla (vrátane kotolní)</span>
                       </div> }
                       popoverId={'pp_v_udt_s_pop'}
                       cellsId={['udt_spk_v_kwh']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={pp_v_udt_s}
              />
              <Vypocet value={ r_svk.v_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={svk.v_kwh} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={p_svk.v_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Skutočná dodávka tepla</span>
                         &nbsp;-&nbsp;
                         <span className="polozka-2">Plánovaná dodávka tepla</span>
                       </div> }
                       popoverId={'pp_v_udt_r_pop'}
                       cellsId={['pp_v_udt_s', 'pp_v_udt_p']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={pp_v_udt_r}
              />*/}
              <td><NumberFormat {...numFormat} value={udt_v.plan}/> kWh</td>
              <td><NumberFormat {...numFormat} value={udt_v.skut}/> kWh</td>
              <td><NumberFormat {...numFormat} value={udt_v.roz}/> kWh</td>
              <td><NumberFormat {...numFormat} value={udt_v.per}/> %</td>
            </tr>
            <tr>
              <td className="text-left">Straty</td>
              <td><NumberFormat {...numFormat} value={str_v.plan}/> kWh</td>
              <td><NumberFormat {...numFormat} value={str_v.skut}/> kWh</td>
              <td><NumberFormat {...numFormat} value={str_v.roz}/> kWh</td>
              <td><NumberFormat {...numFormat} value={str_v.per}/> %</td>
            </tr>
            <tr>
              <th className="text-left">Celková dodávka tepla</th>
              <td><NumberFormat {...numFormat} value={cdt_v.plan}/> kWh</td>
              <td><NumberFormat {...numFormat} value={cdt_v.skut}/> kWh</td>
              <td><NumberFormat {...numFormat} value={cdt_v.roz}/> kWh</td>
              <td><NumberFormat {...numFormat} value={cdt_v.per}/> %</td>
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th rowSpan={3} className="text-center align-middle">SCZT<br/>Západ</th>
              <td className="text-left">Užitočná dodávka tepla</td>
              <td><NumberFormat {...numFormat} value={udt_z.plan}/> kWh</td>
              <td><NumberFormat {...numFormat} value={udt_z.skut}/> kWh</td>
              <td><NumberFormat {...numFormat} value={udt_z.roz}/> kWh</td>
              <td><NumberFormat {...numFormat} value={udt_z.per}/> %</td>
            </tr>
            <tr>
              <td className="text-left">Straty</td>
              <td><NumberFormat {...numFormat} value={str_z.plan}/> kWh</td>
              <td><NumberFormat {...numFormat} value={str_z.skut}/> kWh</td>
              <td><NumberFormat {...numFormat} value={str_z.roz}/> kWh</td>
              <td><NumberFormat {...numFormat} value={str_z.per}/> %</td>
            </tr>
            <tr>
              <th className="text-left">Celková dodávka tepla</th>
              <td><NumberFormat {...numFormat} value={cdt_z.plan}/> kWh</td>
              <td><NumberFormat {...numFormat} value={cdt_z.skut}/> kWh</td>
              <td><NumberFormat {...numFormat} value={cdt_z.roz}/> kWh</td>
              <td><NumberFormat {...numFormat} value={cdt_z.per}/> %</td>
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th rowSpan={3} className="text-center align-middle">BAT<br/>Spolu</th>
              <td className="text-left">Užitočná dodávka tepla</td>
              <td><NumberFormat {...numFormat} value={udt_b.plan}/> kWh</td>
              <td><NumberFormat {...numFormat} value={udt_b.skut}/> kWh</td>
              <td><NumberFormat {...numFormat} value={udt_b.roz}/> kWh</td>
              <td><NumberFormat {...numFormat} value={udt_b.per}/> %</td>
            </tr>
            <tr>
              <td className="text-left">Straty</td>
              <td><NumberFormat {...numFormat} value={str_b.plan}/> kWh</td>
              <td><NumberFormat {...numFormat} value={str_b.skut}/> kWh</td>
              <td><NumberFormat {...numFormat} value={str_b.roz}/> kWh</td>
              <td><NumberFormat {...numFormat} value={str_b.per}/> %</td>
            </tr>
            <tr>
              <th className="text-left">Celková dodávka tepla</th>
              <td><NumberFormat {...numFormat} value={cdt_b.plan}/> kWh</td>
              <td><NumberFormat {...numFormat} value={cdt_b.skut}/> kWh</td>
              <td><NumberFormat {...numFormat} value={cdt_b.roz}/> kWh</td>
              <td><NumberFormat {...numFormat} value={cdt_b.per}/> %</td>
            </tr>
            </tbody>
          </Table>
          {/*<CardTitle>Title</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
          <br/>*/}
        </CardBody>
        <CardFooter>
          <DecimalScale id={'pp'} />
        </CardFooter>
      </Card>
      :
      <Card>
        <CardHeader className="bg-primary text-white">Porovnanie s plánom</CardHeader>
        <CardBody>
          <Alert color={'primary'}>
            <FontAwesome name={'info-circle'} />&nbsp;
            Toto zobrazenie vyžaduje <strong>prepojenie s návrhom ceny tepla</strong>&nbsp;<em>(dodávka)</em>.
          </Alert>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    nastroje: state.nastroje,
    vypocet: state.vypocet,
    hlavny: state.hlavny,
    psp: state.porovnaniesplanom,
    konstanty: state.konstanty
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PorovnanieSPlanom)