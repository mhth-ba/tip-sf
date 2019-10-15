import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText,
  Input, Button,
  UncontrolledTooltip
} from 'reactstrap'
import NumberFormat from 'react-number-format'

import FontAwesome from 'react-fontawesome'

import Highcharts from 'highcharts'
require('highcharts/highcharts-more')(Highcharts)
import ReactHighcharts from 'react-highcharts'
import * as CONFIGS from '../../../../configs'
Highcharts.setOptions({...CONFIGS.REACT_HIGHCHART_OPTIONS})

import Jednotka from '../../../../components/Jednotka'
import DecimalScale from '../helpers/DecimalScale'
import Vypocet from '../helpers/Vypocet'
import ZlomkovaCiara from '../../../../components/ZlomkovaCiara'

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

// chart
const ch = {
  cfg: { // init global config
    chart: { width: 200, height: 110, type: 'pie', margin: [0, 0, 0, 0] },
    credits: { enabled: false },
    title: { text: null },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
    plotOptions: {
      pie: {
        center: [35, 40],
        dataLabels: { enabled: false },
        showInLegend: true
      }
    },
    legend: { align: 'right', layout: 'vertical' },
  },
  n: { // serie name
    m3: 'Zemný plyn',
    sopo: 'Služby obchodníka',
    sopp: 'Služby prepravy',
    sopd: 'Služby distribúcie',
    dan: 'Spotrebná daň',
    pdm: 'Prekročenie množstiev',
    ns: 'Náklady spolu'
  },
  t: { // name of data (teplaren)
    v: 'TpV',
    z: 'TpZ',
    j: 'VhJ'
  },
  c: { // colors
    v: '#c7000a',
    z: '#362dbb',
    j: '#2ea61f'
  }
}

class SumarVyrobne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    //const zp = this.props.plyn
    const zp = this.props.zp
    const vypocet = this.props.vypocet

    const decimal = this.props.nastroje.decimal_fzpvyr

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      januar,
      februar,
      marec,
      april,
      maj,
      jun,
      jul,
      august,
      september,
      oktober,
      november,
      december,
      spolu,
      cena
    } = zp.vyrobne

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      fzp_vyr_spo_m3, fzp_vyr_spo_mwh,
      fzp_vyr_spo_sopo, fzp_vyr_spo_fmso, fzp_vyr_spo_sopp, fzp_vyr_spo_fmsp, fzp_vyr_spo_sopd, fzp_vyr_spo_fmsd,
      fzp_vyr_spo_vsd, fzp_vyr_spo_dan_e, fzp_vyr_spo_pdm, fzp_vyr_spo_ns
    } = vypocet

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Výrobne (TpV + TpZ + VhJ)</CardHeader>
        <CardBody>
          <Table size={'sm'} bordered>
            <thead>
            <tr className="text-center">
              <th rowSpan={2}>Mesiac</th>
              <th rowSpan={2}><FontAwesome name={'pie-chart'} className={'text-secondary'} /> m<sup>3</sup></th>
              <th rowSpan={2}>MWh</th>
              <th colSpan={2}>Ceny za služby obchodníka</th>
              <th colSpan={2}>Ceny za služby prepravy</th>
              <th colSpan={3}>Ceny za služby distribúcie</th>
              <th colSpan={2}>Spotrebná daň</th>
              <th rowSpan={2} style={{ maxWidth: '80px' }} id={'vyr-pdm'}>
                <FontAwesome name={'pie-chart'} className={'text-secondary'} />{' '}
                PDM <Jednotka unit={'€'} />
              </th>
              <UncontrolledTooltip target={'vyr-pdm'}>Prekročenie dohodnutých množstiev</UncontrolledTooltip>
              <th rowSpan={2}>
                <FontAwesome name={'pie-chart'} className={'text-secondary'} />{' '}
                Náklady spolu <Jednotka unit={'€'} />
              </th>
            </tr>

            <tr className="text-center">
              <th id={'tpv-sopo'}>
                <FontAwesome name={'pie-chart'} className={'text-secondary'} />{' '}
                SOP<sub>o</sub> <Jednotka unit={'€'} />
              </th>
              <UncontrolledTooltip target={'tpv-sopo'}>Sadzba za odobratý plyn</UncontrolledTooltip>
              <th id={'tpv-fmso'}>FMS<sub>o</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'tpv-fmso'}>Fixná mesačná sadzba</UncontrolledTooltip>
              <th id={'tpv-sopp'}>
                <FontAwesome name={'pie-chart'} className={'text-secondary'} />{' '}
                SOP<sub>p</sub> <Jednotka unit={'€'} />
              </th>
              <UncontrolledTooltip target={'tpv-sopp'}>Sadzba za odobratý plyn</UncontrolledTooltip>
              <th id={'tpv-fmsp'}>FMS<sub>p</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'tpv-fmsp'}>Fixná mesačná sadzba</UncontrolledTooltip>
              <th id={'tpv-sopd'}>
                <FontAwesome name={'pie-chart'} className={'text-secondary'} />{' '}
                SOP<sub>d</sub> <Jednotka unit={'€'} />
              </th>
              <UncontrolledTooltip target={'tpv-sopd'}>Sadzba za odobratý plyn</UncontrolledTooltip>
              <th id={'tpv-fmsd'}>FMS<sub>d</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'tpv-fmsd'}>Fixná mesačná sadzba</UncontrolledTooltip>
              <th id={'tpv-vsd'}>VS<sub>d <Jednotka unit={'€'} /></sub></th>
              <UncontrolledTooltip target={'tpv-vsd'}>
                Ročná sadzba za výkon/kapacitu
              </UncontrolledTooltip>
              <th>MWh</th>
              <th><FontAwesome name={'pie-chart'} className={'text-secondary'} /> €</th>
            </tr>
            </thead>
            <tbody>
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
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            
            <tr className="text-right">
              <td className="text-left">Január</td>
              <Vypocet value={ januar.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.januar.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.januar.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.januar.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jan_m3_pop'}
                       cellsId={['fzp_v_jan_m3', 'fzp_z_jan_m3', 'fzp_j_jan_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_jan_mwh_pop'}
                       cellsId={['fzp_v_jan_mwh', 'fzp_z_jan_mwh', 'fzp_j_jan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.januar.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.januar.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.januar.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jan_sopo_pop'}
                       cellsId={['fzp_v_jan_sopo', 'fzp_z_jan_sopo', 'fzp_j_jan_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jan_fmso_pop'}
                       cellsId={['fzp_v_jan_fmso', 'fzp_z_jan_fmso', 'fzp_j_jan_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.januar.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.januar.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.januar.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jan_sopp_pop'}
                       cellsId={['fzp_v_jan_sopp', 'fzp_z_jan_sopp', 'fzp_j_jan_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jan_fmsp_pop'}
                       cellsId={['fzp_v_jan_fmsp', 'fzp_z_jan_fmsp', 'fzp_j_jan_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.januar.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.januar.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.januar.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jan_sopd_pop'}
                       cellsId={['fzp_v_jan_sopd', 'fzp_z_jan_sopd', 'fzp_j_jan_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jan_fmsd_pop'}
                       cellsId={['fzp_v_jan_fmsd', 'fzp_z_jan_fmsd', 'fzp_j_jan_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jan_vsd_pop'}
                       cellsId={['fzp_v_jan_vsd', 'fzp_z_jan_vsd', 'fzp_j_jan_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_jan_dan_mwh_pop'}
                       cellsId={['fzp_v_jan_dan_mwh', 'fzp_z_jan_dan_mwh', 'fzp_j_jan_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.januar.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.januar.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.januar.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jan_dan_eur_pop'}
                       cellsId={['fzp_v_jan_dan_eur', 'fzp_z_jan_dan_eur', 'fzp_j_jan_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.januar.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.januar.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.januar.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jan_pdm_pop'}
                       cellsId={['fzp_v_jan_pdm', 'fzp_z_jan_pdm', 'fzp_j_jan_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ januar.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.januar.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.januar.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.januar.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.januar.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.januar.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.januar.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jan_ns_pop'}
                       cellsId={['fzp_v_jan_ns', 'fzp_z_jan_ns', 'fzp_j_jan_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Február</td>
              <Vypocet value={ februar.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.februar.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.februar.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.februar.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_feb_m3_pop'}
                       cellsId={['fzp_v_feb_m3', 'fzp_z_feb_m3', 'fzp_j_feb_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_feb_mwh_pop'}
                       cellsId={['fzp_v_feb_mwh', 'fzp_z_feb_mwh', 'fzp_j_feb_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.februar.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.februar.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.februar.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_feb_sopo_pop'}
                       cellsId={['fzp_v_feb_sopo', 'fzp_z_feb_sopo', 'fzp_j_feb_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_feb_fmso_pop'}
                       cellsId={['fzp_v_feb_fmso', 'fzp_z_feb_fmso', 'fzp_j_feb_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.februar.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.februar.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.februar.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_feb_sopp_pop'}
                       cellsId={['fzp_v_feb_sopp', 'fzp_z_feb_sopp', 'fzp_j_feb_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_feb_fmsp_pop'}
                       cellsId={['fzp_v_feb_fmsp', 'fzp_z_feb_fmsp', 'fzp_j_feb_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.februar.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.februar.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.februar.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_feb_sopd_pop'}
                       cellsId={['fzp_v_feb_sopd', 'fzp_z_feb_sopd', 'fzp_j_feb_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_feb_fmsd_pop'}
                       cellsId={['fzp_v_feb_fmsd', 'fzp_z_feb_fmsd', 'fzp_j_feb_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_feb_vsd_pop'}
                       cellsId={['fzp_v_feb_vsd', 'fzp_z_feb_vsd', 'fzp_j_feb_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_feb_dan_mwh_pop'}
                       cellsId={['fzp_v_feb_dan_mwh', 'fzp_z_feb_dan_mwh', 'fzp_j_feb_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.februar.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.februar.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.februar.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_feb_dan_eur_pop'}
                       cellsId={['fzp_v_feb_dan_eur', 'fzp_z_feb_dan_eur', 'fzp_j_feb_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.februar.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.februar.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.februar.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_feb_pdm_pop'}
                       cellsId={['fzp_v_feb_pdm', 'fzp_z_feb_pdm', 'fzp_j_feb_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ februar.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.februar.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.februar.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.februar.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.februar.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.februar.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.februar.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_feb_ns_pop'}
                       cellsId={['fzp_v_feb_ns', 'fzp_z_feb_ns', 'fzp_j_feb_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Marec</td>
              <Vypocet value={ marec.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.marec.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.marec.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.marec.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_mar_m3_pop'}
                       cellsId={['fzp_v_mar_m3', 'fzp_z_mar_m3', 'fzp_j_mar_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_mar_mwh_pop'}
                       cellsId={['fzp_v_mar_mwh', 'fzp_z_mar_mwh', 'fzp_j_mar_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.marec.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.marec.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.marec.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_mar_sopo_pop'}
                       cellsId={['fzp_v_mar_sopo', 'fzp_z_mar_sopo', 'fzp_j_mar_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_mar_fmso_pop'}
                       cellsId={['fzp_v_mar_fmso', 'fzp_z_mar_fmso', 'fzp_j_mar_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.marec.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.marec.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.marec.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_mar_sopp_pop'}
                       cellsId={['fzp_v_mar_sopp', 'fzp_z_mar_sopp', 'fzp_j_mar_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_mar_fmsp_pop'}
                       cellsId={['fzp_v_mar_fmsp', 'fzp_z_mar_fmsp', 'fzp_j_mar_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.marec.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.marec.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.marec.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_mar_sopd_pop'}
                       cellsId={['fzp_v_mar_sopd', 'fzp_z_mar_sopd', 'fzp_j_mar_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_mar_fmsd_pop'}
                       cellsId={['fzp_v_mar_fmsd', 'fzp_z_mar_fmsd', 'fzp_j_mar_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_mar_vsd_pop'}
                       cellsId={['fzp_v_mar_vsd', 'fzp_z_mar_vsd', 'fzp_j_mar_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_mar_dan_mwh_pop'}
                       cellsId={['fzp_v_mar_dan_mwh', 'fzp_z_mar_dan_mwh', 'fzp_j_mar_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.marec.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.marec.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.marec.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_mar_dan_eur_pop'}
                       cellsId={['fzp_v_mar_dan_eur', 'fzp_z_mar_dan_eur', 'fzp_j_mar_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.marec.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.marec.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.marec.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_mar_pdm_pop'}
                       cellsId={['fzp_v_mar_pdm', 'fzp_z_mar_pdm', 'fzp_j_mar_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ marec.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.marec.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.marec.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.marec.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.marec.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.marec.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.marec.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_mar_ns_pop'}
                       cellsId={['fzp_v_mar_ns', 'fzp_z_mar_ns', 'fzp_j_mar_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Apríl</td>
              <Vypocet value={ april.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.april.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.april.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.april.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_apr_m3_pop'}
                       cellsId={['fzp_v_apr_m3', 'fzp_z_apr_m3', 'fzp_j_apr_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_apr_mwh_pop'}
                       cellsId={['fzp_v_apr_mwh', 'fzp_z_apr_mwh', 'fzp_j_apr_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.april.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.april.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.april.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_apr_sopo_pop'}
                       cellsId={['fzp_v_apr_sopo', 'fzp_z_apr_sopo', 'fzp_j_apr_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_apr_fmso_pop'}
                       cellsId={['fzp_v_apr_fmso', 'fzp_z_apr_fmso', 'fzp_j_apr_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.april.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.april.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.april.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_apr_sopp_pop'}
                       cellsId={['fzp_v_apr_sopp', 'fzp_z_apr_sopp', 'fzp_j_apr_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_apr_fmsp_pop'}
                       cellsId={['fzp_v_apr_fmsp', 'fzp_z_apr_fmsp', 'fzp_j_apr_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.april.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.april.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.april.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_apr_sopd_pop'}
                       cellsId={['fzp_v_apr_sopd', 'fzp_z_apr_sopd', 'fzp_j_apr_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_apr_fmsd_pop'}
                       cellsId={['fzp_v_apr_fmsd', 'fzp_z_apr_fmsd', 'fzp_j_apr_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_apr_vsd_pop'}
                       cellsId={['fzp_v_apr_vsd', 'fzp_z_apr_vsd', 'fzp_j_apr_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_apr_dan_mwh_pop'}
                       cellsId={['fzp_v_apr_dan_mwh', 'fzp_z_apr_dan_mwh', 'fzp_j_apr_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.april.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.april.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.april.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_apr_dan_eur_pop'}
                       cellsId={['fzp_v_apr_dan_eur', 'fzp_z_apr_dan_eur', 'fzp_j_apr_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.april.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.april.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.april.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_apr_pdm_pop'}
                       cellsId={['fzp_v_apr_pdm', 'fzp_z_apr_pdm', 'fzp_j_apr_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ april.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.april.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.april.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.april.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.april.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.april.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.april.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_apr_ns_pop'}
                       cellsId={['fzp_v_apr_ns', 'fzp_z_apr_ns', 'fzp_j_apr_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Máj</td>
              <Vypocet value={ maj.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.maj.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.maj.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.maj.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_maj_m3_pop'}
                       cellsId={['fzp_v_maj_m3', 'fzp_z_maj_m3', 'fzp_j_maj_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_maj_mwh_pop'}
                       cellsId={['fzp_v_maj_mwh', 'fzp_z_maj_mwh', 'fzp_j_maj_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.maj.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.maj.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.maj.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_maj_sopo_pop'}
                       cellsId={['fzp_v_maj_sopo', 'fzp_z_maj_sopo', 'fzp_j_maj_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_maj_fmso_pop'}
                       cellsId={['fzp_v_maj_fmso', 'fzp_z_maj_fmso', 'fzp_j_maj_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.maj.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.maj.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.maj.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_maj_sopp_pop'}
                       cellsId={['fzp_v_maj_sopp', 'fzp_z_maj_sopp', 'fzp_j_maj_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_maj_fmsp_pop'}
                       cellsId={['fzp_v_maj_fmsp', 'fzp_z_maj_fmsp', 'fzp_j_maj_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.maj.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.maj.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.maj.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_maj_sopd_pop'}
                       cellsId={['fzp_v_maj_sopd', 'fzp_z_maj_sopd', 'fzp_j_maj_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_maj_fmsd_pop'}
                       cellsId={['fzp_v_maj_fmsd', 'fzp_z_maj_fmsd', 'fzp_j_maj_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_maj_vsd_pop'}
                       cellsId={['fzp_v_maj_vsd', 'fzp_z_maj_vsd', 'fzp_j_maj_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_maj_dan_mwh_pop'}
                       cellsId={['fzp_v_maj_dan_mwh', 'fzp_z_maj_dan_mwh', 'fzp_j_maj_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.maj.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.maj.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.maj.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_maj_dan_eur_pop'}
                       cellsId={['fzp_v_maj_dan_eur', 'fzp_z_maj_dan_eur', 'fzp_j_maj_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.maj.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.maj.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.maj.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_maj_pdm_pop'}
                       cellsId={['fzp_v_maj_pdm', 'fzp_z_maj_pdm', 'fzp_j_maj_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ maj.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.maj.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.maj.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.maj.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.maj.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.maj.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.maj.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_maj_ns_pop'}
                       cellsId={['fzp_v_maj_ns', 'fzp_z_maj_ns', 'fzp_j_maj_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Jún</td>
              <Vypocet value={ jun.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jun.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jun.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jun.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jun_m3_pop'}
                       cellsId={['fzp_v_jun_m3', 'fzp_z_jun_m3', 'fzp_j_jun_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_jun_mwh_pop'}
                       cellsId={['fzp_v_jun_mwh', 'fzp_z_jun_mwh', 'fzp_j_jun_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jun.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jun.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jun.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jun_sopo_pop'}
                       cellsId={['fzp_v_jun_sopo', 'fzp_z_jun_sopo', 'fzp_j_jun_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jun_fmso_pop'}
                       cellsId={['fzp_v_jun_fmso', 'fzp_z_jun_fmso', 'fzp_j_jun_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jun.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jun.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jun.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jun_sopp_pop'}
                       cellsId={['fzp_v_jun_sopp', 'fzp_z_jun_sopp', 'fzp_j_jun_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jun_fmsp_pop'}
                       cellsId={['fzp_v_jun_fmsp', 'fzp_z_jun_fmsp', 'fzp_j_jun_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jun.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jun.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jun.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jun_sopd_pop'}
                       cellsId={['fzp_v_jun_sopd', 'fzp_z_jun_sopd', 'fzp_j_jun_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jun_fmsd_pop'}
                       cellsId={['fzp_v_jun_fmsd', 'fzp_z_jun_fmsd', 'fzp_j_jun_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jun_vsd_pop'}
                       cellsId={['fzp_v_jun_vsd', 'fzp_z_jun_vsd', 'fzp_j_jun_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_jun_dan_mwh_pop'}
                       cellsId={['fzp_v_jun_dan_mwh', 'fzp_z_jun_dan_mwh', 'fzp_j_jun_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jun.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jun.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jun.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jun_dan_eur_pop'}
                       cellsId={['fzp_v_jun_dan_eur', 'fzp_z_jun_dan_eur', 'fzp_j_jun_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jun.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jun.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jun.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jun_pdm_pop'}
                       cellsId={['fzp_v_jun_pdm', 'fzp_z_jun_pdm', 'fzp_j_jun_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jun.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jun.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jun.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jun.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jun.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jun.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jun.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jun_ns_pop'}
                       cellsId={['fzp_v_jun_ns', 'fzp_z_jun_ns', 'fzp_j_jun_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Júl</td>
              <Vypocet value={ jul.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jul.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jul.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jul.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jul_m3_pop'}
                       cellsId={['fzp_v_jul_m3', 'fzp_z_jul_m3', 'fzp_j_jul_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_jul_mwh_pop'}
                       cellsId={['fzp_v_jul_mwh', 'fzp_z_jul_mwh', 'fzp_j_jul_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jul.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jul.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jul.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jul_sopo_pop'}
                       cellsId={['fzp_v_jul_sopo', 'fzp_z_jul_sopo', 'fzp_j_jul_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jul_fmso_pop'}
                       cellsId={['fzp_v_jul_fmso', 'fzp_z_jul_fmso', 'fzp_j_jul_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jul.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jul.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jul.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jul_sopp_pop'}
                       cellsId={['fzp_v_jul_sopp', 'fzp_z_jul_sopp', 'fzp_j_jul_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jul_fmsp_pop'}
                       cellsId={['fzp_v_jul_fmsp', 'fzp_z_jul_fmsp', 'fzp_j_jul_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jul.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jul.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jul.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jul_sopd_pop'}
                       cellsId={['fzp_v_jul_sopd', 'fzp_z_jul_sopd', 'fzp_j_jul_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jul_fmsd_pop'}
                       cellsId={['fzp_v_jul_fmsd', 'fzp_z_jul_fmsd', 'fzp_j_jul_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_jul_vsd_pop'}
                       cellsId={['fzp_v_jul_vsd', 'fzp_z_jul_vsd', 'fzp_j_jul_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_jul_dan_mwh_pop'}
                       cellsId={['fzp_v_jul_dan_mwh', 'fzp_z_jul_dan_mwh', 'fzp_j_jul_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jul.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jul.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jul.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jul_dan_eur_pop'}
                       cellsId={['fzp_v_jul_dan_eur', 'fzp_z_jul_dan_eur', 'fzp_j_jul_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jul.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jul.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jul.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jul_pdm_pop'}
                       cellsId={['fzp_v_jul_pdm', 'fzp_z_jul_pdm', 'fzp_j_jul_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ jul.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.jul.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.jul.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.jul.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.jul.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.jul.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.jul.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_jul_ns_pop'}
                       cellsId={['fzp_v_jul_ns', 'fzp_z_jul_ns', 'fzp_j_jul_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">August</td>
              <Vypocet value={ august.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.august.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.august.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.august.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_aug_m3_pop'}
                       cellsId={['fzp_v_aug_m3', 'fzp_z_aug_m3', 'fzp_j_aug_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_aug_mwh_pop'}
                       cellsId={['fzp_v_aug_mwh', 'fzp_z_aug_mwh', 'fzp_j_aug_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.august.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.august.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.august.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_aug_sopo_pop'}
                       cellsId={['fzp_v_aug_sopo', 'fzp_z_aug_sopo', 'fzp_j_aug_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_aug_fmso_pop'}
                       cellsId={['fzp_v_aug_fmso', 'fzp_z_aug_fmso', 'fzp_j_aug_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.august.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.august.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.august.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_aug_sopp_pop'}
                       cellsId={['fzp_v_aug_sopp', 'fzp_z_aug_sopp', 'fzp_j_aug_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_aug_fmsp_pop'}
                       cellsId={['fzp_v_aug_fmsp', 'fzp_z_aug_fmsp', 'fzp_j_aug_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.august.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.august.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.august.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_aug_sopd_pop'}
                       cellsId={['fzp_v_aug_sopd', 'fzp_z_aug_sopd', 'fzp_j_aug_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_aug_fmsd_pop'}
                       cellsId={['fzp_v_aug_fmsd', 'fzp_z_aug_fmsd', 'fzp_j_aug_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_aug_vsd_pop'}
                       cellsId={['fzp_v_aug_vsd', 'fzp_z_aug_vsd', 'fzp_j_aug_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_aug_dan_mwh_pop'}
                       cellsId={['fzp_v_aug_dan_mwh', 'fzp_z_aug_dan_mwh', 'fzp_j_aug_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.august.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.august.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.august.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_aug_dan_eur_pop'}
                       cellsId={['fzp_v_aug_dan_eur', 'fzp_z_aug_dan_eur', 'fzp_j_aug_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.august.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.august.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.august.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_aug_pdm_pop'}
                       cellsId={['fzp_v_aug_pdm', 'fzp_z_aug_pdm', 'fzp_j_aug_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ august.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.august.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.august.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.august.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.august.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.august.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.august.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_aug_ns_pop'}
                       cellsId={['fzp_v_aug_ns', 'fzp_z_aug_ns', 'fzp_j_aug_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">September</td>
              <Vypocet value={ september.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.september.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.september.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.september.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_sep_m3_pop'}
                       cellsId={['fzp_v_sep_m3', 'fzp_z_sep_m3', 'fzp_j_sep_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_sep_mwh_pop'}
                       cellsId={['fzp_v_sep_mwh', 'fzp_z_sep_mwh', 'fzp_j_sep_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.september.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.september.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.september.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_sep_sopo_pop'}
                       cellsId={['fzp_v_sep_sopo', 'fzp_z_sep_sopo', 'fzp_j_sep_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_sep_fmso_pop'}
                       cellsId={['fzp_v_sep_fmso', 'fzp_z_sep_fmso', 'fzp_j_sep_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.september.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.september.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.september.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_sep_sopp_pop'}
                       cellsId={['fzp_v_sep_sopp', 'fzp_z_sep_sopp', 'fzp_j_sep_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_sep_fmsp_pop'}
                       cellsId={['fzp_v_sep_fmsp', 'fzp_z_sep_fmsp', 'fzp_j_sep_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.september.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.september.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.september.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_sep_sopd_pop'}
                       cellsId={['fzp_v_sep_sopd', 'fzp_z_sep_sopd', 'fzp_j_sep_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_sep_fmsd_pop'}
                       cellsId={['fzp_v_sep_fmsd', 'fzp_z_sep_fmsd', 'fzp_j_sep_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_sep_vsd_pop'}
                       cellsId={['fzp_v_sep_vsd', 'fzp_z_sep_vsd', 'fzp_j_sep_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_sep_dan_mwh_pop'}
                       cellsId={['fzp_v_sep_dan_mwh', 'fzp_z_sep_dan_mwh', 'fzp_j_sep_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.september.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.september.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.september.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_sep_dan_eur_pop'}
                       cellsId={['fzp_v_sep_dan_eur', 'fzp_z_sep_dan_eur', 'fzp_j_sep_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.september.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.september.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.september.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_sep_pdm_pop'}
                       cellsId={['fzp_v_sep_pdm', 'fzp_z_sep_pdm', 'fzp_j_sep_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ september.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.september.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.september.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.september.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.september.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.september.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.september.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_sep_ns_pop'}
                       cellsId={['fzp_v_sep_ns', 'fzp_z_sep_ns', 'fzp_j_sep_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Október</td>
              <Vypocet value={ oktober.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.oktober.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.oktober.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.oktober.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_okt_m3_pop'}
                       cellsId={['fzp_v_okt_m3', 'fzp_z_okt_m3', 'fzp_j_okt_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_okt_mwh_pop'}
                       cellsId={['fzp_v_okt_mwh', 'fzp_z_okt_mwh', 'fzp_j_okt_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.oktober.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.oktober.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.oktober.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_okt_sopo_pop'}
                       cellsId={['fzp_v_okt_sopo', 'fzp_z_okt_sopo', 'fzp_j_okt_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_okt_fmso_pop'}
                       cellsId={['fzp_v_okt_fmso', 'fzp_z_okt_fmso', 'fzp_j_okt_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.oktober.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.oktober.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.oktober.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_okt_sopp_pop'}
                       cellsId={['fzp_v_okt_sopp', 'fzp_z_okt_sopp', 'fzp_j_okt_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_okt_fmsp_pop'}
                       cellsId={['fzp_v_okt_fmsp', 'fzp_z_okt_fmsp', 'fzp_j_okt_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.oktober.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.oktober.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.oktober.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_okt_sopd_pop'}
                       cellsId={['fzp_v_okt_sopd', 'fzp_z_okt_sopd', 'fzp_j_okt_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_okt_fmsd_pop'}
                       cellsId={['fzp_v_okt_fmsd', 'fzp_z_okt_fmsd', 'fzp_j_okt_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_okt_vsd_pop'}
                       cellsId={['fzp_v_okt_vsd', 'fzp_z_okt_vsd', 'fzp_j_okt_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_okt_dan_mwh_pop'}
                       cellsId={['fzp_v_okt_dan_mwh', 'fzp_z_okt_dan_mwh', 'fzp_j_okt_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.oktober.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.oktober.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.oktober.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_okt_dan_eur_pop'}
                       cellsId={['fzp_v_okt_dan_eur', 'fzp_z_okt_dan_eur', 'fzp_j_okt_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.oktober.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.oktober.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.oktober.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_okt_pdm_pop'}
                       cellsId={['fzp_v_okt_pdm', 'fzp_z_okt_pdm', 'fzp_j_okt_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ oktober.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.oktober.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.oktober.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.oktober.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.oktober.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.oktober.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.oktober.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_okt_ns_pop'}
                       cellsId={['fzp_v_okt_ns', 'fzp_z_okt_ns', 'fzp_j_okt_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">November</td>
              <Vypocet value={ november.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.november.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.november.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.november.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_nov_m3_pop'}
                       cellsId={['fzp_v_nov_m3', 'fzp_z_nov_m3', 'fzp_j_nov_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_nov_mwh_pop'}
                       cellsId={['fzp_v_nov_mwh', 'fzp_z_nov_mwh', 'fzp_j_nov_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.november.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.november.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.november.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_nov_sopo_pop'}
                       cellsId={['fzp_v_nov_sopo', 'fzp_z_nov_sopo', 'fzp_j_nov_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_nov_fmso_pop'}
                       cellsId={['fzp_v_nov_fmso', 'fzp_z_nov_fmso', 'fzp_j_nov_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.november.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.november.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.november.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_nov_sopp_pop'}
                       cellsId={['fzp_v_nov_sopp', 'fzp_z_nov_sopp', 'fzp_j_nov_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_nov_fmsp_pop'}
                       cellsId={['fzp_v_nov_fmsp', 'fzp_z_nov_fmsp', 'fzp_j_nov_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.november.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.november.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.november.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_nov_sopd_pop'}
                       cellsId={['fzp_v_nov_sopd', 'fzp_z_nov_sopd', 'fzp_j_nov_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_nov_fmsd_pop'}
                       cellsId={['fzp_v_nov_fmsd', 'fzp_z_nov_fmsd', 'fzp_j_nov_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_nov_vsd_pop'}
                       cellsId={['fzp_v_nov_vsd', 'fzp_z_nov_vsd', 'fzp_j_nov_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_nov_dan_mwh_pop'}
                       cellsId={['fzp_v_nov_dan_mwh', 'fzp_z_nov_dan_mwh', 'fzp_j_nov_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.november.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.november.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.november.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_nov_dan_eur_pop'}
                       cellsId={['fzp_v_nov_dan_eur', 'fzp_z_nov_dan_eur', 'fzp_j_nov_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.november.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.november.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.november.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_nov_pdm_pop'}
                       cellsId={['fzp_v_nov_pdm', 'fzp_z_nov_pdm', 'fzp_j_nov_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ november.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.november.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.november.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.november.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.november.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.november.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.november.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_nov_ns_pop'}
                       cellsId={['fzp_v_nov_ns', 'fzp_z_nov_ns', 'fzp_j_nov_ns']}
                       placement={'top'}
                       decimal={decimal}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">December</td>
              <Vypocet value={ december.objem_m3 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.december.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.december.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.december.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_dec_m3_pop'}
                       cellsId={['fzp_v_dec_m3', 'fzp_z_dec_m3', 'fzp_j_dec_m3']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.objem_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_dec_mwh_pop'}
                       cellsId={['fzp_v_dec_mwh', 'fzp_z_dec_mwh', 'fzp_j_dec_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.december.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.december.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.december.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_dec_sopo_pop'}
                       cellsId={['fzp_v_dec_sopo', 'fzp_z_dec_sopo', 'fzp_j_dec_sopo']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.fmso }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_dec_fmso_pop'}
                       cellsId={['fzp_v_dec_fmso', 'fzp_z_dec_fmso', 'fzp_j_dec_fmso']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.december.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.december.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.december.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_dec_sopp_pop'}
                       cellsId={['fzp_v_dec_sopp', 'fzp_z_dec_sopp', 'fzp_j_dec_sopp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.fmsp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_dec_fmsp_pop'}
                       cellsId={['fzp_v_dec_fmsp', 'fzp_z_dec_fmsp', 'fzp_j_dec_fmsp']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.december.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.december.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.december.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_dec_sopd_pop'}
                       cellsId={['fzp_v_dec_sopd', 'fzp_z_dec_sopd', 'fzp_j_dec_sopd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.fmsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_dec_fmsd_pop'}
                       cellsId={['fzp_v_dec_fmsd', 'fzp_z_dec_fmsd', 'fzp_j_dec_fmsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.vsd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_dec_vsd_pop'}
                       cellsId={['fzp_v_dec_vsd', 'fzp_z_dec_vsd', 'fzp_j_dec_vsd']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.dan_mwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_dec_dan_mwh_pop'}
                       cellsId={['fzp_v_dec_dan_mwh', 'fzp_z_dec_dan_mwh', 'fzp_j_dec_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.dan_eur }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.december.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.december.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.december.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_dec_dan_eur_pop'}
                       cellsId={['fzp_v_dec_dan_eur', 'fzp_z_dec_dan_eur', 'fzp_j_dec_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.pdm }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.december.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.december.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.december.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_dec_pdm_pop'}
                       cellsId={['fzp_v_dec_pdm', 'fzp_z_dec_pdm', 'fzp_j_dec_pdm']}
                       placement={'top'}
                       decimal={decimal}
              />
              <Vypocet value={ december.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.december.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.december.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.december.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.december.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.december.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.december.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_dec_ns_pop'}
                       cellsId={['fzp_v_dec_ns', 'fzp_z_dec_ns', 'fzp_j_dec_ns']}
                       placement={'top'}
                       decimal={decimal}
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
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>

            <tr className="text-right">
              <th className="text-left">Spolu</th>
              <Vypocet value={ spolu.objem_m3 }
                       unit={ <span>m<sup>3</sup></span> }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ m<sup>3</sup></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.m3,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.spolu.objem_m3
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.spolu.objem_m3
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.spolu.objem_m3
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_spo_m3_pop'}
                       cellsId={['fzp_v_spo_m3', 'fzp_z_spo_m3', 'fzp_j_spo_m3']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_m3 + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.objem_mwh }
                       unit={ 'MWh' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_spo_mwh_pop'}
                       cellsId={['fzp_v_spo_mwh', 'fzp_z_spo_mwh', 'fzp_j_spo_mwh']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_mwh + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.sopo }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>o</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopo,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.spolu.sopo
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.spolu.sopo
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.spolu.sopo
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_spo_sopo_pop'}
                       cellsId={['fzp_v_spo_sopo', 'fzp_z_spo_sopo', 'fzp_j_spo_sopo']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_sopo + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.fmso }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_spo_fmso_pop'}
                       cellsId={['fzp_v_spo_fmso', 'fzp_z_spo_fmso', 'fzp_j_spo_fmso']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_fmso + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.sopp }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>p</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopp,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.spolu.sopp
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.spolu.sopp
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.spolu.sopp
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_spo_sopp_pop'}
                       cellsId={['fzp_v_spo_sopp', 'fzp_z_spo_sopp', 'fzp_j_spo_sopp']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_sopp + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.fmsp }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_spo_fmsp_pop'}
                       cellsId={['fzp_v_spo_fmsp', 'fzp_z_spo_fmsp', 'fzp_j_spo_fmsp']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_fmsp + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.sopd }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ SOP<sub>d</sub></span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.sopd,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.spolu.sopd
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.spolu.sopd
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.spolu.sopd
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_spo_sopd_pop'}
                       cellsId={['fzp_v_spo_sopd', 'fzp_z_spo_sopd', 'fzp_j_spo_sopd']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_sopd + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.fmsd }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_spo_fmsd_pop'}
                       cellsId={['fzp_v_spo_fmsd', 'fzp_z_spo_fmsd', 'fzp_j_spo_fmsd']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_fmsd + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.vsd }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_vyr_spo_vsd_pop'}
                       cellsId={['fzp_v_spo_vsd', 'fzp_z_spo_vsd', 'fzp_j_spo_vsd']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_vsd + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.dan_mwh }
                       unit={ 'MWh' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_spo_dan_mwh_pop'}
                       cellsId={['fzp_v_spo_dan_mwh', 'fzp_z_spo_dan_mwh', 'fzp_j_spo_dan_mwh']}
                       placement={'top'}
                       decimal={decimal}
                       class={'font-weight-bold'}
              />
              <Vypocet value={ spolu.dan_eur }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Daň €</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.dan,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.spolu.dan_eur
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.spolu.dan_eur
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.spolu.dan_eur
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_spo_dan_eur_pop'}
                       cellsId={['fzp_v_spo_dan_eur', 'fzp_z_spo_dan_eur', 'fzp_j_spo_dan_eur']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_dan_e + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.pdm }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ PDM</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.pdm,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.spolu.pdm
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.spolu.pdm
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.spolu.pdm
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_spo_pdm_pop'}
                       cellsId={['fzp_v_spo_pdm', 'fzp_z_spo_pdm', 'fzp_j_spo_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_pdm + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.naklady }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zp.tpv.spolu.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.tpz.spolu.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zp.vhj.spolu.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">TpV Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">TpZ Náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">VhJ Náklady</span>
                       </div> }
                       graf={ <ReactHighcharts config={{
                         ...ch.cfg,
                         series: [{
                           name: ch.n.ns,
                           data: [{
                             name: ch.t.v,
                             color: ch.c.v,
                             y: zp.tpv.spolu.naklady
                           }, {
                             name: ch.t.z,
                             color: ch.c.z,
                             y: zp.tpz.spolu.naklady
                           }, {
                             name: ch.t.j,
                             color: ch.c.j,
                             y: zp.vhj.spolu.naklady
                           }]
                         }]
                       }} /> }
                       popoverId={'fzp_vyr_spo_ns_pop'}
                       cellsId={['fzp_v_spo_ns', 'fzp_z_spo_ns', 'fzp_j_spo_ns']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_vyr_spo_ns + ' font-weight-bold'}
              />
            </tr>

            <tr className="text-right">
              <th id={'vyr-pc'} className="text-left">Priemerná cena <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vyr-pc'}>Bez PDM</UncontrolledTooltip>
              <Vypocet value={ cena.objem_m3 }
                       unit={ <span>€/m<sup>3</sup></span> }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={spolu.naklady} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={spolu.pdm} />
                         <ZlomkovaCiara/>
                         <NumberFormat {...vypocetFormat} value={spolu.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Celkové náklady</span>
                         &nbsp;-&nbsp;
                         <span className="polozka-2">PDM</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-3">Objem zemného plynu v m<sup>3</sup></span>
                       </div> }
                       popoverId={'fzp_vyr_pc_m3_pop'}
                       cellsId={['fzp_vyr_spo_ns', 'fzp_vyr_spo_pdm', 'fzp_vyr_spo_m3']}
                       placement={'bottom'}
                       decimal={3}
                       class={'font-weight-bold'}
              />
              <Vypocet value={ cena.objem_mwh }
                       unit={ '€/MWh' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={spolu.naklady} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={spolu.pdm} />
                         <ZlomkovaCiara/>
                         <NumberFormat {...vypocetFormat} value={spolu.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Celkové náklady</span>
                         &nbsp;-&nbsp;
                         <span className="polozka-2">PDM</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-3">Objem zemného plynu v MWh</span>
                       </div> }
                       popoverId={'fzp_vyr_pc_mwh_pop'}
                       cellsId={['fzp_vyr_spo_ns', 'fzp_vyr_spo_pdm', 'fzp_vyr_spo_mwh']}
                       placement={'bottom'}
                       decimal={3}
                       class={'font-weight-bold'}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'fzpvyr'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  zp: state.zemnyplyn
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SumarVyrobne)