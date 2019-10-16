import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText,
  Input, Label, UncontrolledTooltip
} from 'reactstrap'
import NumberFormat from 'react-number-format'
//import { Context, Node } from 'react-mathjax2'

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
  className: 'text-nowrap'
}

class UzitocnaDodavkaTepla extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const dodavkatepla = this.props.dodavkatepla
    const vypocet = this.props.vypocet

    const decimal = this.props.nastroje.decimal_udt

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      tpv,      // (t)e(p)laren (v)ychod
      vhj,      // (v)y(h)revna (j)uh
      tpz,      // (t)e(p)laren (z)apad
      pk,       // (p)lynove (k)otolne
      ppc,      // (p)aro(p)lynovy (c)yklus
      slovnaft,
      cw,       // (c)ogen (w)est
      zdroj,
      primar,
      ost,      // (o)dovzdavacia (s)tanica (t)epla
      sekundar,
      bpk,      // spolu [ (b)ez (p)lynovych (k)otolni ]
      spk,      // spolu [ (s) (p)lynovymi (k)otolnami ]
      straty,
      cd        // (c)elkova (d)odavka
    } = dodavkatepla

    // class names for related cells' color bordering when formula for given cell is displayed
    const {
      udt_zdr_v_kwh, // (u)zitocna (d)odavka (t)epla
      udt_zdr_v_kw,
      udt_zdr_z_kwh,
      udt_zdr_z_kw,
      udt_zdr_b_kwh,
      udt_zdr_b_kw,

      udt_pri_v_kwh,
      udt_pri_v_kw,
      udt_pri_z_kwh,
      udt_pri_z_kw,
      udt_pri_b_kwh,
      udt_pri_b_kw,

      udt_ost_v_kwh,
      udt_ost_v_kw,
      udt_ost_z_kwh,
      udt_ost_z_kw,
      udt_ost_b_kwh,
      udt_ost_b_kw,

      udt_sek_v_kwh,
      udt_sek_v_kw,
      udt_sek_z_kwh,
      udt_sek_z_kw,
      udt_sek_b_kwh,
      udt_sek_b_kw,

      udt_bpk_v_kwh,
      udt_bpk_v_kw,
      udt_bpk_z_kwh,
      udt_bpk_z_kw,
      udt_bpk_b_kwh,
      udt_bpk_b_kw,

      udt_pk_v_kwh,
      udt_pk_v_kw,
      udt_pk_z_kwh,
      udt_pk_z_kw,
      udt_pk_b_kwh,
      udt_pk_b_kw,

      udt_spk_v_kwh,
      udt_spk_v_kw,
      udt_spk_z_kwh,
      udt_spk_z_kw,
      udt_spk_b_kwh,
      udt_spk_b_kw,

      udt_str_v_kwh,
      udt_str_z_kwh,
      udt_str_b_kwh,

      udt_cel_v_kwh,
      udt_cel_z_kwh,
      udt_cel_b_kwh
    } = vypocet

    const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Užitočná dodávka tepla</CardHeader>
        <CardBody>
          {/*<CardTitle>Title</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
          <br/>*/}
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th rowSpan={2}>{''}</th>
              <th colSpan={2}>SCZT Východ</th>
              <th colSpan={2}>SCZT Západ</th>
              <th colSpan={2}>BAT spolu</th>
            </tr>
            <tr className="text-center">
              <th>kWh</th>
              <th>kW</th>
              <th>kWh</th>
              <th>kW</th>
              <th>kWh</th>
              <th>kW</th>
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
            </tr>
            <tr>
              <td className="text-left">Zdroj</td>
              <td className={udt_zdr_v_kwh}><NumberFormat {...numFormat} value={zdroj.v_kwh} /> kWh</td>
              <td className={udt_zdr_v_kw}><NumberFormat {...numFormat} value={zdroj.v_kw} /> kW</td>
              <td className={udt_zdr_z_kwh}><NumberFormat {...numFormat} value={zdroj.z_kwh} /> kWh</td>
              <td className={udt_zdr_z_kw}><NumberFormat {...numFormat} value={zdroj.z_kw} /> kW</td>
              <Vypocet value={ zdroj.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zdroj.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zdroj.z_kwh} />
                       </div> }
                       /*cisla={ <p> <Context input={'ascii'}>
                           <Node inline>{ ascii }</Node>
                       </Context> </p> }*/
                       popis={ <div>
                         <span className="polozka-1">Zdroj východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Zdroj západ</span>
                       </div> }
                       popoverId={'udt_zdr_b_kwh_pop'}
                       cellsId={['udt_zdr_v_kwh', 'udt_zdr_z_kwh']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_zdr_b_kwh}
              />
              <Vypocet value={ zdroj.b_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zdroj.v_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zdroj.z_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Zdroj východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Zdroj západ</span>
                       </div> }
                       popoverId={'udt_zdr_b_kw_pop'}
                       cellsId={['udt_zdr_v_kw', 'udt_zdr_z_kw']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_zdr_b_kw}
              />
            </tr>
            <tr>
              <td className="text-left">Primárna sieť</td>
              <td className={udt_pri_v_kwh}><NumberFormat {...numFormat} value={primar.v_kwh} /> kWh</td>
              <td className={udt_pri_v_kw}><NumberFormat {...numFormat} value={primar.v_kw} /> kW</td>
              <td className={udt_pri_z_kwh}><NumberFormat {...numFormat} value={primar.z_kwh} /> kWh</td>
              <td className={udt_pri_z_kw}><NumberFormat {...numFormat} value={primar.z_kw} /> kW</td>
              <Vypocet value={ primar.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={primar.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={primar.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Primár východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Primár západ</span>
                       </div> }
                       popoverId={'udt_pri_b_kwh_pop'}
                       cellsId={['udt_pri_v_kwh', 'udt_pri_z_kwh']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_pri_b_kwh}
              />
              <Vypocet value={ primar.b_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={primar.v_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={primar.z_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Primár východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Primár západ</span>
                       </div> }
                       popoverId={'udt_pri_b_kw_pop'}
                       cellsId={['udt_pri_v_kw', 'udt_pri_z_kw']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_pri_b_kw}
              />
            </tr>
            <tr>
              <td className="text-left">OST</td>
              <td className={udt_ost_v_kwh}><NumberFormat {...numFormat} value={ost.v_kwh} /> kWh</td>
              <td className={udt_ost_v_kw}><NumberFormat {...numFormat} value={ost.v_kw} /> kW</td>
              <td className={udt_ost_z_kwh}><NumberFormat {...numFormat} value={ost.z_kwh} /> kWh</td>
              <td className={udt_ost_z_kw}><NumberFormat {...numFormat} value={ost.z_kw} /> kW</td>
              <Vypocet value={ ost.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={ost.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={ost.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">OST východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">OST západ</span>
                       </div> }
                       popoverId={'udt_ost_b_kwh_pop'}
                       cellsId={['udt_ost_v_kwh', 'udt_ost_z_kwh']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_ost_b_kwh}
              />
              <Vypocet value={ ost.b_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={ost.v_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={ost.z_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">OST východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">OST západ</span>
                       </div> }
                       popoverId={'udt_ost_b_kw_pop'}
                       cellsId={['udt_ost_v_kw', 'udt_ost_z_kw']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_ost_b_kw}
              />
            </tr>
            <tr>
              <td className="text-left">Sekundárna sieť</td>
              <td className={udt_sek_v_kwh}><NumberFormat {...numFormat} value={sekundar.v_kwh} /> kWh</td>
              <td className={udt_sek_v_kw}><NumberFormat {...numFormat} value={sekundar.v_kw} /> kW</td>
              <td className={udt_sek_z_kwh}><NumberFormat {...numFormat} value={sekundar.z_kwh} /> kWh</td>
              <td className={udt_sek_z_kw}><NumberFormat {...numFormat} value={sekundar.z_kw} /> kW</td>
              <Vypocet value={ sekundar.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={sekundar.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={sekundar.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Sekundár východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Sekundár západ</span>
                       </div> }
                       popoverId={'udt_sek_b_kwh_pop'}
                       cellsId={['udt_sek_v_kwh', 'udt_sek_z_kwh']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_sek_b_kwh}
              />
              <Vypocet value={ sekundar.b_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={sekundar.v_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={sekundar.z_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Sekundár východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Sekundár západ</span>
                       </div> }
                       popoverId={'udt_sek_b_kw_pop'}
                       cellsId={['udt_sek_v_kw', 'udt_sek_z_kw']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_sek_b_kw}
              />
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-left">Spolu (bez plynových kotolní)</th>
              <Vypocet value={ bpk.v_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zdroj.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={primar.v_kwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={ost.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={sekundar.v_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zdroj východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Primár východ</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">OST východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Sekundár východ</span>
                       </div> }
                       popoverId={'udt_spolu_bezpk_v_kwh_pop'}
                       cellsId={['udt_zdr_v_kwh', 'udt_pri_v_kwh', 'udt_ost_v_kwh', 'udt_sek_v_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_bpk_v_kwh}
              />
              <Vypocet value={ bpk.v_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zdroj.v_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={primar.v_kw} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={ost.v_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={sekundar.v_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zdroj východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Primár východ</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">OST východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Sekundár východ</span>
                       </div> }
                       popoverId={'udt_spolu_bezpk_v_kw_pop'}
                       cellsId={['udt_zdr_v_kw', 'udt_pri_v_kw', 'udt_ost_v_kw', 'udt_sek_v_kw']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_bpk_v_kw}
              />
              <Vypocet value={ bpk.z_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zdroj.z_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={primar.z_kwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={ost.z_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={sekundar.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zdroj západ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Primár západ</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">OST západ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Sekundár západ</span>
                       </div> }
                       popoverId={'udt_spolu_bezpk_z_kwh_pop'}
                       cellsId={['udt_zdr_z_kwh', 'udt_pri_z_kwh', 'udt_ost_z_kwh', 'udt_sek_z_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_bpk_z_kwh}
              />
              <Vypocet value={ bpk.z_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zdroj.z_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={primar.z_kw} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={ost.z_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={sekundar.z_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zdroj západ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Primár západ</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">OST západ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Sekundár západ</span>
                       </div> }
                       popoverId={'udt_spolu_bezpk_z_kw_pop'}
                       cellsId={['udt_zdr_z_kw', 'udt_pri_z_kw', 'udt_ost_z_kw', 'udt_sek_z_kw']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_bpk_z_kw}
              />
              <Vypocet value={ bpk.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zdroj.b_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={primar.b_kwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={ost.b_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={sekundar.b_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zdroj BAT</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Primár BAT</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">OST BAT</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Sekundár BAT</span>
                       </div> }
                       popoverId={'udt_spolu_bezpk_b_kwh_pop'}
                       cellsId={['udt_zdr_b_kwh', 'udt_pri_b_kwh', 'udt_ost_b_kwh', 'udt_sek_b_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_bpk_b_kwh}
              />
              <Vypocet value={ bpk.b_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zdroj.b_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={primar.b_kw} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={ost.b_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={sekundar.b_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zdroj BAT</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Primár BAT</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">OST BAT</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Sekundár BAT</span>
                       </div> }
                       popoverId={'udt_spolu_bezpk_b_kw_pop'}
                       cellsId={['udt_zdr_b_kw', 'udt_pri_b_kw', 'udt_ost_b_kw', 'udt_sek_b_kw']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_bpk_b_kw}
              />
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <td className="text-left">Plynové kotolne</td>
              <td className={udt_pk_v_kwh}><NumberFormat {...numFormat} value={pk.v_kwh} /> kWh</td>
              <td className={udt_pk_v_kw}><NumberFormat {...numFormat} value={pk.v_kw} /> kW</td>
              <td className={udt_pk_z_kwh}><NumberFormat {...numFormat} value={pk.z_kwh} /> kWh</td>
              <td className={udt_pk_z_kw}><NumberFormat {...numFormat} value={pk.z_kw} /> kW</td>
              <Vypocet value={ pk.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={pk.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Kotolne východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne západ</span>
                       </div> }
                       popoverId={'udt_pk_b_kwh_pop'}
                       cellsId={['udt_pk_v_kwh', 'udt_pk_z_kwh']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_pk_b_kwh}
              />
              <Vypocet value={ pk.b_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={pk.v_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.z_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Kotolne východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne západ</span>
                       </div> }
                       popoverId={'udt_pk_b_kw_pop'}
                       cellsId={['udt_pk_v_kw', 'udt_pk_z_kw']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_pk_b_kw}
              />
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-left">Spolu (vrátane plynových kotolní)</th>
              <Vypocet value={ spk.v_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={bpk.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.v_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Spolu (bez PK) východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne východ</span>
                       </div> }
                       popoverId={'udt_spk_v_kwh_pop'}
                       cellsId={['udt_bpk_v_kwh', 'udt_pk_v_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_spk_v_kwh + ' font-weight-bold'}
              />
              <Vypocet value={ spk.v_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={bpk.v_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.v_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Spolu (bez PK) východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne východ</span>
                       </div> }
                       popoverId={'udt_spk_v_kw_pop'}
                       cellsId={['udt_bpk_v_kw', 'udt_pk_v_kw']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_spk_v_kw}
              />
              <Vypocet value={ spk.z_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={bpk.z_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Spolu (bez PK) západ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne západ</span>
                       </div> }
                       popoverId={'udt_spk_z_kwh_pop'}
                       cellsId={['udt_bpk_z_kwh', 'udt_pk_z_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_spk_z_kwh + ' font-weight-bold'}
              />
              <Vypocet value={ spk.z_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={bpk.z_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.z_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Spolu (bez PK) západ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne západ</span>
                       </div> }
                       popoverId={'udt_spk_z_kw_pop'}
                       cellsId={['udt_bpk_z_kw', 'udt_pk_z_kw']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_spk_z_kw}
              />
              <Vypocet value={ spk.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={bpk.b_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.b_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Spolu (bez PK) BAT</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne BAT</span>
                       </div> }
                       popoverId={'udt_spk_b_kwh_pop'}
                       cellsId={['udt_bpk_b_kwh', 'udt_pk_b_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_spk_b_kwh + ' font-weight-bold'}
              />
              <Vypocet value={ spk.b_kw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={bpk.b_kw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.b_kw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Spolu (bez PK) BAT</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne BAT</span>
                       </div> }
                       popoverId={'udt_spk_b_kw_pop'}
                       cellsId={['udt_bpk_b_kw', 'udt_pk_b_kw']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kW'}
                       class={udt_spk_b_kw}
              />
            </tr>
            <tr>
              <th className="text-left">Straty</th>
              <Vypocet value={ straty.v_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={tpv.kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vhj.kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={ppc.kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={slovnaft.kwh} />
                         <br/>-&nbsp;
                         <NumberFormat {...vypocetFormat} value={bpk.v_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">VhJ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">PPC</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">Slovnaft</span>
                         <br/>-&nbsp;
                         <span className="polozka-5">Spolu (bez PK) východ</span>
                       </div> }
                       popoverId={'udt_str_v_kwh_pop'}
                       cellsId={['vtpz_tpv_kwh', 'vtpz_vhj_kwh', 'vtpz_ppc_kwh', 'vtpz_slo_kwh', 'udt_bpk_v_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_str_v_kwh}
              />
              <td>{''}</td>
              <Vypocet value={ straty.z_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={tpz.kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={cw.kwh} />
                         <br/>-&nbsp;
                         <NumberFormat {...vypocetFormat} value={bpk.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpZ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Cogen West</span>
                         <br/>-&nbsp;
                         <span className="polozka-3">Spolu (bez PK) západ</span>
                       </div> }
                       popoverId={'udt_str_z_kwh_pop'}
                       cellsId={['vtpz_tpz_kwh', 'vtpz_cw_kwh', 'udt_bpk_z_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_str_z_kwh}
              />
              <td>{''}</td>
              <Vypocet value={ straty.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={straty.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={straty.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Straty východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Straty západ</span>
                       </div> }
                       popoverId={'udt_str_b_kwh_pop'}
                       cellsId={['udt_str_v_kwh', 'udt_str_z_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_str_b_kwh}
              />
              <td>{''}</td>
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-left">Celková dodávka tepla</th>
              <Vypocet value={ cd.v_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={spk.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={straty.v_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Spolu (vrátane PK) východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Straty východ</span>
                       </div> }
                       popoverId={'udt_cel_v_kwh_pop'}
                       cellsId={['udt_spk_v_kwh', 'udt_str_v_kwh']}
                       placement={'bottom'}
                       unit={'kWh'}
                       decimal={decimal}
              />
              <td>{''}</td>
              <Vypocet value={ cd.z_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={spk.z_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={straty.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Spolu (vrátane PK) západ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Straty západ</span>
                       </div> }
                       popoverId={'udt_cel_z_kwh_pop'}
                       cellsId={['udt_spk_z_kwh', 'udt_str_z_kwh']}
                       placement={'bottom'}
                       unit={'kWh'}
                       decimal={decimal}
              />
              <td>{''}</td>
              <Vypocet value={ cd.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={spk.b_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={straty.b_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Spolu (vrátane PK) BAT</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Straty BAT</span>
                       </div> }
                       popoverId={'udt_cel_b_kwh_pop'}
                       cellsId={['udt_spk_b_kwh', 'udt_str_b_kwh']}
                       placement={'bottom'}
                       unit={'kWh'}
                       decimal={decimal}
              />
              <td>{''}</td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'udt'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  dodavkatepla: state.dodavkatepla
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UzitocnaDodavkaTepla)