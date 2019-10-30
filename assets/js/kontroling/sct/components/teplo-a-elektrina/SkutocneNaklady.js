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

import { updateSkutocneNakladyRequest } from '../../actions'

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

class SkutocneNaklady extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const sn = this.props.sn
    const vypocet = this.props.vypocet
    const decimal = this.props.nastroje.decimal_sntesn

    numF = {
      ...numF,
      decimalScale: Number(decimal)
    }

    const {
      nek,
      nauz
    } = sn

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      snte_sn_fn
    } = vypocet

    const vstup = {
      table: 'sn',
      sqlt: 'SCT_SkutocneNaklady',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update
    }

    const vstup_nek = { id: nek.id, row: 'nek', ...vstup }
    const vstup_nauz = { id: nauz.id, row: 'nauz', ...vstup }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Skutočné spoločné náklady na výrobu tepla a elektriny</CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th rowSpan={2}></th>
              <th colSpan={6}>Zdroj</th>
              <th colSpan={3}>Rozvod</th>
              <th rowSpan={2}>Réžijné náklady</th>
              <th rowSpan={2}>Spolu</th>
            </tr>
            <tr className="text-center">
              <th>TpV<br/><span className="text-muted">v plnej výške</span></th>
              <th>TpV<br/><span className="text-muted">kľúčované</span></th>
              <th>TpZ<br/><span className="text-muted">v plnej výške</span></th>
              <th>TpZ<br/><span className="text-muted">kľúčované</span></th>
              <th>VhJ</th>
              <th>Plynové kotolne</th>
              <th>Primár</th>
              <th>OST</th>
              <th>Sekundár</th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <th>{''}</th>
              <td>{''}</td>
              <td>{''}</td>
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
              sn.zp.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-yellow">
              <th className="text-left">Zemný plyn</th>
              <td><NumberFormat {...numF} value={sn.zp.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.zp.sumar.spolu} /> €</td>
            </tr>
            {
              sn.tvo.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-yellow">
              <th className="text-left">Ťažký vykurovací olej</th>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.tvo.sumar.spolu} /> €</td>
            </tr>
            {/* NAKUPOVANÉ TEPLO - PPC, SLOVNAFT, COGEN WEST */}
            <tr className="bg-yellow">
              <th className="text-left">Nakupované teplo - variabilná zložka</th>
              <td><NumberFormat {...numF} value={sn.ntvz.tpv_p} /> €</td>
              <td></td>
              <td><NumberFormat {...numF} value={sn.ntvz.tpz_p} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><NumberFormat {...numF} value={sn.ntvz.spolu} /> €</td>
            </tr>
            <tr className="bg-yellower">
              <th className="text-left">Variabilné náklady na priamy materál</th>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.tpv_p} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.tpv_k} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.tpz_p} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.tpz_k} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.vhj} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.pk} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.primar} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.ost} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.sekundar} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.rezijne} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.vnpm.spolu} /> €</td>
            </tr>
            {
              sn.ee.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-yellow">
              <th className="text-left">Elektrická energia</th>
              <td><NumberFormat {...numF} value={sn.ee.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.ee.sumar.spolu} /> €</td>
            </tr>
            {
              sn.voda.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-yellow">
              <th className="text-left">Voda</th>
              <td><NumberFormat {...numF} value={sn.voda.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.voda.sumar.spolu} /> €</td>
            </tr>
            {
              sn.th.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-yellow">
              <th className="text-left">Technologické hmoty</th>
              <td><NumberFormat {...numF} value={sn.th.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.th.sumar.spolu} /> €</td>
            </tr>
            {/* NÁKUP EMISNÝCH KVÓT A POPLATKY ZA ZNEČISTENIE */}
            <tr>
              <td className="text-nowrap text-left">Nakúpené emisné kvóty</td>
              <Vstup {...vstup_nek} val={nek.tpv_p} col={'tpv_p'} unit={'€'} />
              <Vstup {...vstup_nek} val={nek.tpv_k} col={'tpv_k'} unit={'€'} />
              <Vstup {...vstup_nek} val={nek.tpz_p} col={'tpz_p'} unit={'€'} />
              <Vstup {...vstup_nek} val={nek.tpz_k} col={'tpz_k'} unit={'€'} />
              <Vstup {...vstup_nek} val={nek.vhj} col={'vhj'} unit={'€'} />
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.nek.spolu} /> €</td>

              {/* BUG: suma sa nacita pri update, posledna existujuca, cize sme jeden krok pozadu za spravnym udajom */}

            </tr>
            {
              sn.nekpz.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-yellow">
              <th className="text-left">Nákup emisných kvót a poplatky za znečistenie</th>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.nekpz.sumar.spolu} /> €</td>
            </tr>
            <tr className="bg-yellower">
              <th className="text-left">Ostatné variabilné náklady</th>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.tpv_p} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.tpv_k} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.tpz_p} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.tpz_k} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.vhj} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.pk} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.primar} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.ost} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.sekundar} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.rezijne} /> €</td>
              <td className="font-italic"><NumberFormat {...numF} value={sn.ovn.spolu} /> €</td>
            </tr>
            <tr className="bg-lightorange">
              <th className="text-left">Variabilné náklady</th>
              <th><NumberFormat {...numF} value={sn.vn.tpv_p} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.tpv_k} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.tpz_p} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.tpz_k} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.vhj} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.pk} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.primar} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.ost} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.sekundar} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.rezijne} /> €</th>
              <th><NumberFormat {...numF} value={sn.vn.spolu} /> €</th>
            </tr>
            <tr>
              <th>{''}</th>
              <td>{''}</td>
              <td>{''}</td>
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
            <tr className="bg-lightblue">
              <th className="text-left">Nakupované teplo - fixná zložka</th>
              <td><NumberFormat {...numF} value={sn.ntfz.tpv_p} /> €</td>
              <td></td>
              <td><NumberFormat {...numF} value={sn.ntfz.tpz_p} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><NumberFormat {...numF} value={sn.ntfz.spolu} /> €</td>
            </tr>
            {
              sn.pm.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-lightblue">
              <th className="text-left">Poistenie majetku</th>
              <td><NumberFormat {...numF} value={sn.pm.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.pm.sumar.spolu} /> €</td>
            </tr>
            {
              sn.dane.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-lightblue">
              <th className="text-left">Dane</th>
              <td><NumberFormat {...numF} value={sn.dane.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.dane.sumar.spolu} /> €</td>
            </tr>
            {
              sn.najomne.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-lightblue">
              <th className="text-left">Nájomné</th>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.najomne.sumar.spolu} /> €</td>
            </tr>
            {
              sn.rzpp.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-lightblue">
              <th className="text-left">Revízie, zákonné prehliadky a poplatky</th>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.rzpp.sumar.spolu} /> €</td>
            </tr>
            <tr className="bg-lightblue">
              <th className="text-left">Náklady na audit účtovnej závierky</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <Vstup {...vstup_nauz} val={nauz.rezijne} col={'rezijne'} unit={'€'} />
              <td className="font-italic"><NumberFormat {...numF} value={sn.nauz.spolu} /> €</td>
            </tr>
            <tr className="bg-lightblue">
              <th className="text-left">Odpisy HaNM súvisiaceho s výrobou a rozvodom tepla</th>
              <td><NumberFormat {...numF} value={sn.odm.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.odm.spolu} /> €</td>
            </tr>
            <tr className="bg-lightblue">
              <th className="text-left">Odpisy a opravy spoločných zariadení, súvisiace s výrobou a rozvodom tepla</th>
              <td><NumberFormat {...numF} value={sn.oosz.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.oosz.spolu} /> €</td>
            </tr>
            {
              sn.ous.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-lightblue">
              <th className="text-left">Opravy a udržiavanie spolu</th>
              <td><NumberFormat {...numF} value={sn.ous.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.ous.sumar.spolu} /> €</td>
            </tr>
            {
              sn.uiu.polozky.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['polozka']}</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpv_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_p} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.tpz_k} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.vhj} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.pk} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.primar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.ost} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.sekundar} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.rezijne} /> €</td>
                  <td className={''}><NumberFormat {...numF} value={d.spolu} /> €</td>
                </tr>
              ))
            }
            <tr className="bg-lightblue">
              <th className="text-left">Úroky z investičného úveru</th>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.tpv_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.tpv_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.tpz_p} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.tpz_k} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.vhj} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.pk} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.primar} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.ost} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.sekundar} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.rezijne} /> €</td>
              <td><NumberFormat {...numF} value={sn.uiu.sumar.spolu} /> €</td>
            </tr>
            <tr className="bg-lightblue">
              <th className="text-left">Regulovaná zložka fixných nákladov</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th><NumberFormat {...numF} value={sn.rzfn.spolu} /> €</th>
            </tr>
            <tr className="bg-lightbluer">
              <th className="text-left">Fixné náklady</th>
              <th><NumberFormat {...numF} value={sn.fn.tpv_p} /> €</th>
              <th><NumberFormat {...numF} value={sn.fn.tpv_k} /> €</th>
              <th><NumberFormat {...numF} value={sn.fn.tpz_p} /> €</th>
              <th><NumberFormat {...numF} value={sn.fn.tpz_k} /> €</th>
              <th><NumberFormat {...numF} value={sn.fn.vhj} /> €</th>
              <th><NumberFormat {...numF} value={sn.fn.pk} /> €</th>
              <th><NumberFormat {...numF} value={sn.fn.primar} /> €</th>
              <th><NumberFormat {...numF} value={sn.fn.ost} /> €</th>
              <th><NumberFormat {...numF} value={sn.fn.sekundar} /> €</th>
              <th><NumberFormat {...numF} value={sn.fn.rezijne} /> €</th>
              <th className={snte_sn_fn}><NumberFormat {...numF} value={sn.fn.spolu} /> €</th>
            </tr>
            </tbody>
          </Table>

          <br/><br/>

          <Alert color={'warning'}>
            <FontAwesome name={'exclamation-circle'} />&nbsp;
            Uistite sa, že v skutočných spoločných nákladoch nie sú zahrnuté <strong>refakturované náklady</strong>.
          </Alert>

          <Alert color={'warning'}>
            <FontAwesome name={'exclamation-circle'} />&nbsp;
            Odrátajte <strong>nájomné</strong> presahujúce limit stanovený vyhláškou.
          </Alert>

        </CardBody>
        <CardFooter>
          <DecimalScale id={'sntesn'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  sn: state.skutocnenaklady
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  update: (e, table, hlavny) => dispatch(updateSkutocneNakladyRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkutocneNaklady)