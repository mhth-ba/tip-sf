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

import Jednotka from '../../../../components/Jednotka'
import DecimalScale from '../helpers/DecimalScale'
import ZlomkovaCiara from "../../../../components/ZlomkovaCiara";

import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'
import Vyplnit from '../helpers/Vyplnit'

import { fetchVypocetBuniekRequest, updateZemnyPlynRequest } from '../../actions'

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

class VyhrevnaJuh extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const vypocet = this.props.vypocet

    const konstanty = this.props.konstanty
    const zp = this.props.zp

    const decimal = this.props.nastroje.decimal_fzpvhj

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
    } = zp

    const {
      jczpsopoj,
      jczpsoppj,
      jczpsopdj
    } = konstanty

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      fzp_j_jan_m3, fzp_j_jan_mwh, fzp_j_jan_sopo, fzp_j_jan_fmso, fzp_j_jan_sopp, fzp_j_jan_fmsp,
      fzp_j_jan_sopd, fzp_j_jan_fmsd, fzp_j_jan_vsd, fzp_j_jan_dan_mwh, fzp_j_jan_dan_e, fzp_j_jan_pdm, fzp_j_jan_ns,

      fzp_j_feb_m3, fzp_j_feb_mwh, fzp_j_feb_sopo, fzp_j_feb_fmso, fzp_j_feb_sopp, fzp_j_feb_fmsp,
      fzp_j_feb_sopd, fzp_j_feb_fmsd, fzp_j_feb_vsd, fzp_j_feb_dan_mwh, fzp_j_feb_dan_e, fzp_j_feb_pdm, fzp_j_feb_ns,

      fzp_j_mar_m3, fzp_j_mar_mwh, fzp_j_mar_sopo, fzp_j_mar_fmso, fzp_j_mar_sopp, fzp_j_mar_fmsp,
      fzp_j_mar_sopd, fzp_j_mar_fmsd, fzp_j_mar_vsd, fzp_j_mar_dan_mwh, fzp_j_mar_dan_e, fzp_j_mar_pdm, fzp_j_mar_ns,

      fzp_j_apr_m3, fzp_j_apr_mwh, fzp_j_apr_sopo, fzp_j_apr_fmso, fzp_j_apr_sopp, fzp_j_apr_fmsp,
      fzp_j_apr_sopd, fzp_j_apr_fmsd, fzp_j_apr_vsd, fzp_j_apr_dan_mwh, fzp_j_apr_dan_e, fzp_j_apr_pdm, fzp_j_apr_ns,

      fzp_j_maj_m3, fzp_j_maj_mwh, fzp_j_maj_sopo, fzp_j_maj_fmso, fzp_j_maj_sopp, fzp_j_maj_fmsp,
      fzp_j_maj_sopd, fzp_j_maj_fmsd, fzp_j_maj_vsd, fzp_j_maj_dan_mwh, fzp_j_maj_dan_e, fzp_j_maj_pdm, fzp_j_maj_ns,

      fzp_j_jun_m3, fzp_j_jun_mwh, fzp_j_jun_sopo, fzp_j_jun_fmso, fzp_j_jun_sopp, fzp_j_jun_fmsp,
      fzp_j_jun_sopd, fzp_j_jun_fmsd, fzp_j_jun_vsd, fzp_j_jun_dan_mwh, fzp_j_jun_dan_e, fzp_j_jun_pdm, fzp_j_jun_ns,

      fzp_j_jul_m3, fzp_j_jul_mwh, fzp_j_jul_sopo, fzp_j_jul_fmso, fzp_j_jul_sopp, fzp_j_jul_fmsp,
      fzp_j_jul_sopd, fzp_j_jul_fmsd, fzp_j_jul_vsd, fzp_j_jul_dan_mwh, fzp_j_jul_dan_e, fzp_j_jul_pdm, fzp_j_jul_ns,

      fzp_j_aug_m3, fzp_j_aug_mwh, fzp_j_aug_sopo, fzp_j_aug_fmso, fzp_j_aug_sopp, fzp_j_aug_fmsp,
      fzp_j_aug_sopd, fzp_j_aug_fmsd, fzp_j_aug_vsd, fzp_j_aug_dan_mwh, fzp_j_aug_dan_e, fzp_j_aug_pdm, fzp_j_aug_ns,

      fzp_j_sep_m3, fzp_j_sep_mwh, fzp_j_sep_sopo, fzp_j_sep_fmso, fzp_j_sep_sopp, fzp_j_sep_fmsp,
      fzp_j_sep_sopd, fzp_j_sep_fmsd, fzp_j_sep_vsd, fzp_j_sep_dan_mwh, fzp_j_sep_dan_e, fzp_j_sep_pdm, fzp_j_sep_ns,

      fzp_j_okt_m3, fzp_j_okt_mwh, fzp_j_okt_sopo, fzp_j_okt_fmso, fzp_j_okt_sopp, fzp_j_okt_fmsp,
      fzp_j_okt_sopd, fzp_j_okt_fmsd, fzp_j_okt_vsd, fzp_j_okt_dan_mwh, fzp_j_okt_dan_e, fzp_j_okt_pdm, fzp_j_okt_ns,

      fzp_j_nov_m3, fzp_j_nov_mwh, fzp_j_nov_sopo, fzp_j_nov_fmso, fzp_j_nov_sopp, fzp_j_nov_fmsp,
      fzp_j_nov_sopd, fzp_j_nov_fmsd, fzp_j_nov_vsd, fzp_j_nov_dan_mwh, fzp_j_nov_dan_e, fzp_j_nov_pdm, fzp_j_nov_ns,

      fzp_j_dec_m3, fzp_j_dec_mwh, fzp_j_dec_sopo, fzp_j_dec_fmso, fzp_j_dec_sopp, fzp_j_dec_fmsp,
      fzp_j_dec_sopd, fzp_j_dec_fmsd, fzp_j_dec_vsd, fzp_j_dec_dan_mwh, fzp_j_dec_dan_e, fzp_j_dec_pdm, fzp_j_dec_ns,

      fzp_j_spo_m3, fzp_j_spo_mwh, fzp_j_spo_sopo, fzp_j_spo_fmso, fzp_j_spo_sopp, fzp_j_spo_fmsp,
      fzp_j_spo_sopd, fzp_j_spo_fmsd, fzp_j_spo_vsd, fzp_j_spo_dan_mwh, fzp_j_spo_dan_e, fzp_j_spo_pdm, fzp_j_spo_ns,

      fzp_j_pc_m3, fzp_j_pc_mwh
    } = vypocet

    const vstup = {
      table: 'vhj',
      hlavny: this.props.hlavny.id,
      bulk: false,
      dec: decimal,
      update: this.props.update
    }

    const vstup_jan = { id: januar.id, row: 'januar', ...vstup }
    const vstup_feb = { id: februar.id, row: 'februar', ...vstup }
    const vstup_mar = { id: marec.id, row: 'marec', ...vstup }
    const vstup_apr = { id: april.id, row: 'april', ...vstup }
    const vstup_maj = { id: maj.id, row: 'maj', ...vstup }
    const vstup_jun = { id: jun.id, row: 'jun', ...vstup }
    const vstup_jul = { id: jul.id, row: 'jul', ...vstup }
    const vstup_aug = { id: august.id, row: 'august', ...vstup }
    const vstup_sep = { id: september.id, row: 'september', ...vstup }
    const vstup_okt = { id: oktober.id, row: 'oktober', ...vstup }
    const vstup_nov = { id: november.id, row: 'november', ...vstup }
    const vstup_dec = { id: december.id, row: 'december', ...vstup }

    const vyplnit = {
      table: 'vhj',
      hlavny: this.props.hlavny.id,
      bulk: true,
      data: [
        { id: januar.id, key: 'januar' },
        { id: februar.id, key: 'februar' },
        { id: marec.id, key: 'marec' },
        { id: april.id, key: 'april' },
        { id: maj.id, key: 'maj' },
        { id: jun.id, key: 'jun' },
        { id: jul.id, key: 'jul' },
        { id: august.id, key: 'august' },
        { id: september.id, key: 'september' },
        { id: oktober.id, key: 'oktober' },
        { id: november.id, key: 'november' },
        { id: december.id, key: 'december' }
      ],
      update: this.props.update,
      fetch: this.props.vypocet
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Výhrevňa Juh</CardHeader>
        <CardBody>
          <Table size={'sm'} bordered>
            <thead>
            <tr className="text-center">
              <th rowSpan={2}>Mesiac</th>
              <th rowSpan={2}>m<sup>3</sup></th>
              <th rowSpan={2}>MWh</th>
              <th colSpan={2}>Ceny za služby obchodníka</th>
              <th colSpan={2}>Ceny za služby prepravy</th>
              <th colSpan={3}>Ceny za služby distribúcie</th>
              <th colSpan={2}>Spotrebná daň</th>
              <th rowSpan={2} style={{ maxWidth: '80px' }} id={'vhj-pdm'}>PDM <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vhj-pdm'}>Prekročenie dohodnutých množstiev</UncontrolledTooltip>
              <th rowSpan={2}>Náklady spolu <Jednotka unit={'€'} /></th>
            </tr>
            <tr className="text-center">
              <th id={'vhj-sopo'}>SOP<sub>o</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vhj-sopo'}>Sadzba za odobratý plyn</UncontrolledTooltip>
              <th id={'vhj-fmso'}>FMS<sub>o</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vhj-fmso'}>Fixná mesačná sadzba</UncontrolledTooltip>
              <th id={'vhj-sopp'}>SOP<sub>p</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vhj-sopp'}>Sadzba za odobratý plyn</UncontrolledTooltip>
              <th id={'vhj-fmsp'}>FMS<sub>p</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vhj-fmsp'}>Fixná mesačná sadzba</UncontrolledTooltip>
              <th id={'vhj-sopd'}>SOP<sub>d</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vhj-sopd'}>Sadzba za odobratý plyn</UncontrolledTooltip>
              <th id={'vhj-fmsd'}>FMS<sub>d</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vhj-fmsd'}>Fixná mesačná sadzba</UncontrolledTooltip>
              <th id={'vhj-vsd'}>VS<sub>d</sub> <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vhj-vsd'}>
                Ročná sadzba za výkon/kapacitu
              </UncontrolledTooltip>
              <th>MWh</th>
              <th>€</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td><Vyplnit {...vyplnit} column={'fmso'} /></td>
              <td>{''}</td>
              <td><Vyplnit {...vyplnit} column={'fmsp'} /></td>
              <td>{''}</td>
              <td><Vyplnit {...vyplnit} column={'fmsd'} /></td>
              <td><Vyplnit {...vyplnit} column={'vsd'} /></td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>

            <tr className="text-right">
              <td className="text-left">Január</td>
              <Vstup {...vstup_jan} val={januar.objem_m3} col={'objem_m3'} class={fzp_j_jan_m3} />
              <Vstup {...vstup_jan} val={januar.objem_mwh} col={'objem_mwh'} class={fzp_j_jan_mwh} />
              <Vypocet value={ januar.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_jan_sopo_pop'}
                       cellsId={['fzp_j_jan_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jan_sopo}
              />
              <Vstup {...vstup_jan} val={januar.fmso} col={'fmso'} class={fzp_j_jan_fmso} />
              <Vypocet value={ januar.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_jan_sopp_pop'}
                       cellsId={['fzp_j_jan_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jan_sopp}
              />
              <Vstup {...vstup_jan} val={januar.fmsp} col={'fmsp'} class={fzp_j_jan_fmsp} />
              <Vypocet value={ januar.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_jan_sopd_pop'}
                       cellsId={['fzp_j_jan_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jan_sopd}
              />
              <Vstup {...vstup_jan} val={januar.fmsd} col={'fmsd'} class={fzp_j_jan_fmsd} />
              <Vstup {...vstup_jan} val={januar.vsd} col={'vsd'} class={fzp_j_jan_vsd} />
              <Vstup {...vstup_jan} val={januar.dan_mwh} col={'dan_mwh'} class={fzp_j_jan_dan_mwh} />
              <Vstup {...vstup_jan} val={januar.dan_eur} col={'dan_eur'} class={fzp_j_jan_dan_e} />
              <Vstup {...vstup_jan} val={januar.pdm} col={'pdm'} class={fzp_j_jan_pdm} />
              <Vypocet value={ januar.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={januar.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={januar.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={januar.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={januar.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={januar.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={januar.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={januar.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={januar.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_jan_ns_pop'}
                       cellsId={[
                         'fzp_j_jan_sopo', 'fzp_j_jan_fmso', 'fzp_j_jan_sopp', 'fzp_j_jan_fmsp',
                         'fzp_j_jan_sopd', 'fzp_j_jan_fmsd', 'fzp_j_jan_vsd', 'fzp_j_jan_dan_e', 'fzp_j_jan_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jan_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Február</td>
              <Vstup {...vstup_feb} val={februar.objem_m3} col={'objem_m3'} class={fzp_j_feb_m3} />
              <Vstup {...vstup_feb} val={februar.objem_mwh} col={'objem_mwh'} class={fzp_j_feb_mwh} />
              <Vypocet value={ februar.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={februar.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_feb_sopo_pop'}
                       cellsId={['fzp_j_feb_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_feb_sopo}
              />
              <Vstup {...vstup_feb} val={februar.fmso} col={'fmso'} class={fzp_j_feb_fmso} />
              <Vypocet value={ februar.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={februar.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_feb_sopp_pop'}
                       cellsId={['fzp_j_feb_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_feb_sopp}
              />
              <Vstup {...vstup_feb} val={februar.fmsp} col={'fmsp'} class={fzp_j_feb_fmsp} />
              <Vypocet value={ februar.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={februar.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_feb_sopd_pop'}
                       cellsId={['fzp_j_feb_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_feb_sopd}
              />
              <Vstup {...vstup_feb} val={februar.fmsd} col={'fmsd'} class={fzp_j_feb_fmsd} />
              <Vstup {...vstup_feb} val={februar.vsd} col={'vsd'} class={fzp_j_feb_vsd} />
              <Vstup {...vstup_feb} val={februar.dan_mwh} col={'dan_mwh'} class={fzp_j_feb_dan_mwh} />
              <Vstup {...vstup_feb} val={februar.dan_eur} col={'dan_eur'} class={fzp_j_feb_dan_e} />
              <Vstup {...vstup_feb} val={februar.pdm} col={'pdm'} class={fzp_j_feb_pdm} />
              <Vypocet value={ februar.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={februar.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_feb_ns_pop'}
                       cellsId={[
                         'fzp_j_feb_sopo', 'fzp_j_feb_fmso', 'fzp_j_feb_sopp', 'fzp_j_feb_fmsp',
                         'fzp_j_feb_sopd', 'fzp_j_feb_fmsd', 'fzp_j_feb_vsd', 'fzp_j_feb_dan_e', 'fzp_j_feb_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_feb_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Marec</td>
              <Vstup {...vstup_mar} val={marec.objem_m3} col={'objem_m3'} class={fzp_j_mar_m3} />
              <Vstup {...vstup_mar} val={marec.objem_mwh} col={'objem_mwh'} class={fzp_j_mar_mwh} />
              <Vypocet value={ marec.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={marec.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_mar_sopo_pop'}
                       cellsId={['fzp_j_mar_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_mar_sopo}
              />
              <Vstup {...vstup_mar} val={marec.fmso} col={'fmso'} class={fzp_j_mar_fmso} />
              <Vypocet value={ marec.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={marec.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_mar_sopp_pop'}
                       cellsId={['fzp_j_mar_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_mar_sopp}
              />
              <Vstup {...vstup_mar} val={marec.fmsp} col={'fmsp'} class={fzp_j_mar_fmsp} />
              <Vypocet value={ marec.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={marec.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_mar_sopd_pop'}
                       cellsId={['fzp_j_mar_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_mar_sopd}
              />
              <Vstup {...vstup_mar} val={marec.fmsd} col={'fmsd'} class={fzp_j_mar_fmsd} />
              <Vstup {...vstup_mar} val={marec.vsd} col={'vsd'} class={fzp_j_mar_vsd} />
              <Vstup {...vstup_mar} val={marec.dan_mwh} col={'dan_mwh'} class={fzp_j_mar_dan_mwh} />
              <Vstup {...vstup_mar} val={marec.dan_eur} col={'dan_eur'} class={fzp_j_mar_dan_e} />
              <Vstup {...vstup_mar} val={marec.pdm} col={'pdm'} class={fzp_j_mar_pdm} />
              <Vypocet value={ marec.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={marec.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_mar_ns_pop'}
                       cellsId={[
                         'fzp_j_mar_sopo', 'fzp_j_mar_fmso', 'fzp_j_mar_sopp', 'fzp_j_mar_fmsp',
                         'fzp_j_mar_sopd', 'fzp_j_mar_fmsd', 'fzp_j_mar_vsd', 'fzp_j_mar_dan_e', 'fzp_j_mar_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_mar_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Apríl</td>
              <Vstup {...vstup_apr} val={april.objem_m3} col={'objem_m3'} class={fzp_j_apr_m3} />
              <Vstup {...vstup_apr} val={april.objem_mwh} col={'objem_mwh'} class={fzp_j_apr_mwh} />
              <Vypocet value={ april.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={april.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_apr_sopo_pop'}
                       cellsId={['fzp_j_apr_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_apr_sopo}
              />
              <Vstup {...vstup_apr} val={april.fmso} col={'fmso'} class={fzp_j_apr_fmso} />
              <Vypocet value={ april.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={april.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_apr_sopp_pop'}
                       cellsId={['fzp_j_apr_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_apr_sopp}
              />
              <Vstup {...vstup_apr} val={april.fmsp} col={'fmsp'} class={fzp_j_apr_fmsp} />
              <Vypocet value={ april.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={april.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_apr_sopd_pop'}
                       cellsId={['fzp_j_apr_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_apr_sopd}
              />
              <Vstup {...vstup_apr} val={april.fmsd} col={'fmsd'} class={fzp_j_apr_fmsd} />
              <Vstup {...vstup_apr} val={april.vsd} col={'vsd'} class={fzp_j_apr_vsd} />
              <Vstup {...vstup_apr} val={april.dan_mwh} col={'dan_mwh'} class={fzp_j_apr_dan_mwh} />
              <Vstup {...vstup_apr} val={april.dan_eur} col={'dan_eur'} class={fzp_j_apr_dan_e} />
              <Vstup {...vstup_apr} val={april.pdm} col={'pdm'} class={fzp_j_apr_pdm} />
              <Vypocet value={ april.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={april.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_apr_ns_pop'}
                       cellsId={[
                         'fzp_j_apr_sopo', 'fzp_j_apr_fmso', 'fzp_j_apr_sopp', 'fzp_j_apr_fmsp',
                         'fzp_j_apr_sopd', 'fzp_j_apr_fmsd', 'fzp_j_apr_vsd', 'fzp_j_apr_dan_e', 'fzp_j_apr_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_apr_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Máj</td>
              <Vstup {...vstup_maj} val={maj.objem_m3} col={'objem_m3'} class={fzp_j_maj_m3} />
              <Vstup {...vstup_maj} val={maj.objem_mwh} col={'objem_mwh'} class={fzp_j_maj_mwh} />
              <Vypocet value={ maj.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={maj.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_maj_sopo_pop'}
                       cellsId={['fzp_j_maj_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_maj_sopo}
              />
              <Vstup {...vstup_maj} val={maj.fmso} col={'fmso'} class={fzp_j_maj_fmso} />
              <Vypocet value={ maj.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={maj.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_maj_sopp_pop'}
                       cellsId={['fzp_j_maj_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_maj_sopp}
              />
              <Vstup {...vstup_maj} val={maj.fmsp} col={'fmsp'} class={fzp_j_maj_fmsp} />
              <Vypocet value={ maj.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={maj.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_maj_sopd_pop'}
                       cellsId={['fzp_j_maj_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_maj_sopd}
              />
              <Vstup {...vstup_maj} val={maj.fmsd} col={'fmsd'} class={fzp_j_maj_fmsd} />
              <Vstup {...vstup_maj} val={maj.vsd} col={'vsd'} class={fzp_j_maj_vsd} />
              <Vstup {...vstup_maj} val={maj.dan_mwh} col={'dan_mwh'} class={fzp_j_maj_dan_mwh} />
              <Vstup {...vstup_maj} val={maj.dan_eur} col={'dan_eur'} class={fzp_j_maj_dan_e} />
              <Vstup {...vstup_maj} val={maj.pdm} col={'pdm'} class={fzp_j_maj_pdm} />
              <Vypocet value={ maj.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={maj.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_maj_ns_pop'}
                       cellsId={[
                         'fzp_j_maj_sopo', 'fzp_j_maj_fmso', 'fzp_j_maj_sopp', 'fzp_j_maj_fmsp',
                         'fzp_j_maj_sopd', 'fzp_j_maj_fmsd', 'fzp_j_maj_vsd', 'fzp_j_maj_dan_e', 'fzp_j_maj_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_maj_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Jún</td>
              <Vstup {...vstup_jun} val={jun.objem_m3} col={'objem_m3'} class={fzp_j_jun_m3} />
              <Vstup {...vstup_jun} val={jun.objem_mwh} col={'objem_mwh'} class={fzp_j_jun_mwh} />
              <Vypocet value={ jun.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={jun.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_jun_sopo_pop'}
                       cellsId={['fzp_j_jun_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jun_sopo}
              />
              <Vstup {...vstup_jun} val={jun.fmso} col={'fmso'} class={fzp_j_jun_fmso} />
              <Vypocet value={ jun.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={jun.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_jun_sopp_pop'}
                       cellsId={['fzp_j_jun_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jun_sopp}
              />
              <Vstup {...vstup_jun} val={jun.fmsp} col={'fmsp'} class={fzp_j_jun_fmsp} />
              <Vypocet value={ jun.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={jun.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_jun_sopd_pop'}
                       cellsId={['fzp_j_jun_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jun_sopd}
              />
              <Vstup {...vstup_jun} val={jun.fmsd} col={'fmsd'} class={fzp_j_jun_fmsd} />
              <Vstup {...vstup_jun} val={jun.vsd} col={'vsd'} class={fzp_j_jun_vsd} />
              <Vstup {...vstup_jun} val={jun.dan_mwh} col={'dan_mwh'} class={fzp_j_jun_dan_mwh} />
              <Vstup {...vstup_jun} val={jun.dan_eur} col={'dan_eur'} class={fzp_j_jun_dan_e} />
              <Vstup {...vstup_jun} val={jun.pdm} col={'pdm'} class={fzp_j_jun_pdm} />
              <Vypocet value={ jun.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={jun.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_jun_ns_pop'}
                       cellsId={[
                         'fzp_j_jun_sopo', 'fzp_j_jun_fmso', 'fzp_j_jun_sopp', 'fzp_j_jun_fmsp',
                         'fzp_j_jun_sopd', 'fzp_j_jun_fmsd', 'fzp_j_jun_vsd', 'fzp_j_jun_dan_e', 'fzp_j_jun_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jun_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Júl</td>
              <Vstup {...vstup_jul} val={jul.objem_m3} col={'objem_m3'} class={fzp_j_jul_m3} />
              <Vstup {...vstup_jul} val={jul.objem_mwh} col={'objem_mwh'} class={fzp_j_jul_mwh} />
              <Vypocet value={ jul.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={jul.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_jul_sopo_pop'}
                       cellsId={['fzp_j_jul_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jul_sopo}
              />
              <Vstup {...vstup_jul} val={jul.fmso} col={'fmso'} class={fzp_j_jul_fmso} />
              <Vypocet value={ jul.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={jul.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_jul_sopp_pop'}
                       cellsId={['fzp_j_jul_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jul_sopp}
              />
              <Vstup {...vstup_jul} val={jul.fmsp} col={'fmsp'} class={fzp_j_jul_fmsp} />
              <Vypocet value={ jul.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={jul.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_jul_sopd_pop'}
                       cellsId={['fzp_j_jul_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jul_sopd}
              />
              <Vstup {...vstup_jul} val={jul.fmsd} col={'fmsd'} class={fzp_j_jul_fmsd} />
              <Vstup {...vstup_jul} val={jul.vsd} col={'vsd'} class={fzp_j_jul_vsd} />
              <Vstup {...vstup_jul} val={jul.dan_mwh} col={'dan_mwh'} class={fzp_j_jul_dan_mwh} />
              <Vstup {...vstup_jul} val={jul.dan_eur} col={'dan_eur'} class={fzp_j_jul_dan_e} />
              <Vstup {...vstup_jul} val={jul.pdm} col={'pdm'} class={fzp_j_jul_pdm} />
              <Vypocet value={ jul.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={jul.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_jul_ns_pop'}
                       cellsId={[
                         'fzp_j_jul_sopo', 'fzp_j_jul_fmso', 'fzp_j_jul_sopp', 'fzp_j_jul_fmsp',
                         'fzp_j_jul_sopd', 'fzp_j_jul_fmsd', 'fzp_j_jul_vsd', 'fzp_j_jul_dan_e', 'fzp_j_jul_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_jul_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">August</td>
              <Vstup {...vstup_aug} val={august.objem_m3} col={'objem_m3'} class={fzp_j_aug_m3} />
              <Vstup {...vstup_aug} val={august.objem_mwh} col={'objem_mwh'} class={fzp_j_aug_mwh} />
              <Vypocet value={ august.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={august.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_aug_sopo_pop'}
                       cellsId={['fzp_j_aug_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_aug_sopo}
              />
              <Vstup {...vstup_aug} val={august.fmso} col={'fmso'} class={fzp_j_aug_fmso} />
              <Vypocet value={ august.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={august.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_aug_sopp_pop'}
                       cellsId={['fzp_j_aug_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_aug_sopp}
              />
              <Vstup {...vstup_aug} val={august.fmsp} col={'fmsp'} class={fzp_j_aug_fmsp} />
              <Vypocet value={ august.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={august.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_aug_sopd_pop'}
                       cellsId={['fzp_j_aug_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_aug_sopd}
              />
              <Vstup {...vstup_aug} val={august.fmsd} col={'fmsd'} class={fzp_j_aug_fmsd} />
              <Vstup {...vstup_aug} val={august.vsd} col={'vsd'} class={fzp_j_aug_vsd} />
              <Vstup {...vstup_aug} val={august.dan_mwh} col={'dan_mwh'} class={fzp_j_aug_dan_mwh} />
              <Vstup {...vstup_aug} val={august.dan_eur} col={'dan_eur'} class={fzp_j_aug_dan_e} />
              <Vstup {...vstup_aug} val={august.pdm} col={'pdm'} class={fzp_j_aug_pdm} />
              <Vypocet value={ august.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={august.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_aug_ns_pop'}
                       cellsId={[
                         'fzp_j_aug_sopo', 'fzp_j_aug_fmso', 'fzp_j_aug_sopp', 'fzp_j_aug_fmsp',
                         'fzp_j_aug_sopd', 'fzp_j_aug_fmsd', 'fzp_j_aug_vsd', 'fzp_j_aug_dan_e', 'fzp_j_aug_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_aug_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">September</td>
              <Vstup {...vstup_sep} val={september.objem_m3} col={'objem_m3'} class={fzp_j_sep_m3} />
              <Vstup {...vstup_sep} val={september.objem_mwh} col={'objem_mwh'} class={fzp_j_sep_mwh} />
              <Vypocet value={ september.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={september.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_sep_sopo_pop'}
                       cellsId={['fzp_j_sep_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_sep_sopo}
              />
              <Vstup {...vstup_sep} val={september.fmso} col={'fmso'} class={fzp_j_sep_fmso} />
              <Vypocet value={ september.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={september.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_sep_sopp_pop'}
                       cellsId={['fzp_j_sep_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_sep_sopp}
              />
              <Vstup {...vstup_sep} val={september.fmsp} col={'fmsp'} class={fzp_j_sep_fmsp} />
              <Vypocet value={ september.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={september.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_sep_sopd_pop'}
                       cellsId={['fzp_j_sep_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_sep_sopd}
              />
              <Vstup {...vstup_sep} val={september.fmsd} col={'fmsd'} class={fzp_j_sep_fmsd} />
              <Vstup {...vstup_sep} val={september.vsd} col={'vsd'} class={fzp_j_sep_vsd} />
              <Vstup {...vstup_sep} val={september.dan_mwh} col={'dan_mwh'} class={fzp_j_sep_dan_mwh} />
              <Vstup {...vstup_sep} val={september.dan_eur} col={'dan_eur'} class={fzp_j_sep_dan_e} />
              <Vstup {...vstup_sep} val={september.pdm} col={'pdm'} class={fzp_j_sep_pdm} />
              <Vypocet value={ september.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={september.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_sep_ns_pop'}
                       cellsId={[
                         'fzp_j_sep_sopo', 'fzp_j_sep_fmso', 'fzp_j_sep_sopp', 'fzp_j_sep_fmsp',
                         'fzp_j_sep_sopd', 'fzp_j_sep_fmsd', 'fzp_j_sep_vsd', 'fzp_j_sep_dan_e', 'fzp_j_sep_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_sep_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">Október</td>
              <Vstup {...vstup_okt} val={oktober.objem_m3} col={'objem_m3'} class={fzp_j_okt_m3} />
              <Vstup {...vstup_okt} val={oktober.objem_mwh} col={'objem_mwh'} class={fzp_j_okt_mwh} />
              <Vypocet value={ oktober.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={oktober.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_okt_sopo_pop'}
                       cellsId={['fzp_j_okt_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_okt_sopo}
              />
              <Vstup {...vstup_okt} val={oktober.fmso} col={'fmso'} class={fzp_j_okt_fmso} />
              <Vypocet value={ oktober.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={oktober.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_okt_sopp_pop'}
                       cellsId={['fzp_j_okt_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_okt_sopp}
              />
              <Vstup {...vstup_okt} val={oktober.fmsp} col={'fmsp'} class={fzp_j_okt_fmsp} />
              <Vypocet value={ oktober.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={oktober.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_okt_sopd_pop'}
                       cellsId={['fzp_j_okt_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_okt_sopd}
              />
              <Vstup {...vstup_okt} val={oktober.fmsd} col={'fmsd'} class={fzp_j_okt_fmsd} />
              <Vstup {...vstup_okt} val={oktober.vsd} col={'vsd'} class={fzp_j_okt_vsd} />
              <Vstup {...vstup_okt} val={oktober.dan_mwh} col={'dan_mwh'} class={fzp_j_okt_dan_mwh} />
              <Vstup {...vstup_okt} val={oktober.dan_eur} col={'dan_eur'} class={fzp_j_okt_dan_e} />
              <Vstup {...vstup_okt} val={oktober.pdm} col={'pdm'} class={fzp_j_okt_pdm} />
              <Vypocet value={ oktober.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={oktober.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_okt_ns_pop'}
                       cellsId={[
                         'fzp_j_okt_sopo', 'fzp_j_okt_fmso', 'fzp_j_okt_sopp', 'fzp_j_okt_fmsp',
                         'fzp_j_okt_sopd', 'fzp_j_okt_fmsd', 'fzp_j_okt_vsd', 'fzp_j_okt_dan_e', 'fzp_j_okt_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_okt_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">November</td>
              <Vstup {...vstup_nov} val={november.objem_m3} col={'objem_m3'} class={fzp_j_nov_m3} />
              <Vstup {...vstup_nov} val={november.objem_mwh} col={'objem_mwh'} class={fzp_j_nov_mwh} />
              <Vypocet value={ november.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={november.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_nov_sopo_pop'}
                       cellsId={['fzp_j_nov_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_nov_sopo}
              />
              <Vstup {...vstup_nov} val={november.fmso} col={'fmso'} class={fzp_j_nov_fmso} />
              <Vypocet value={ november.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={november.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_nov_sopp_pop'}
                       cellsId={['fzp_j_nov_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_nov_sopp}
              />
              <Vstup {...vstup_nov} val={november.fmsp} col={'fmsp'} class={fzp_j_nov_fmsp} />
              <Vypocet value={ november.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={november.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_nov_sopd_pop'}
                       cellsId={['fzp_j_nov_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_nov_sopd}
              />
              <Vstup {...vstup_nov} val={november.fmsd} col={'fmsd'} class={fzp_j_nov_fmsd} />
              <Vstup {...vstup_nov} val={november.vsd} col={'vsd'} class={fzp_j_nov_vsd} />
              <Vstup {...vstup_nov} val={november.dan_mwh} col={'dan_mwh'} class={fzp_j_nov_dan_mwh} />
              <Vstup {...vstup_nov} val={november.dan_eur} col={'dan_eur'} class={fzp_j_nov_dan_e} />
              <Vstup {...vstup_nov} val={november.pdm} col={'pdm'} class={fzp_j_nov_pdm} />
              <Vypocet value={ november.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={november.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_nov_ns_pop'}
                       cellsId={[
                         'fzp_j_nov_sopo', 'fzp_j_nov_fmso', 'fzp_j_nov_sopp', 'fzp_j_nov_fmsp',
                         'fzp_j_nov_sopd', 'fzp_j_nov_fmsd', 'fzp_j_nov_vsd', 'fzp_j_nov_dan_e', 'fzp_j_nov_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_nov_ns}
              />
            </tr>

            <tr className="text-right">
              <td className="text-left">December</td>
              <Vstup {...vstup_dec} val={december.objem_m3} col={'objem_m3'} class={fzp_j_dec_m3} />
              <Vstup {...vstup_dec} val={december.objem_mwh} col={'objem_mwh'} class={fzp_j_dec_mwh} />
              <Vypocet value={ december.sopo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={december.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopoj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_dec_sopo_pop'}
                       cellsId={['fzp_j_dec_mwh', 'fzp_k_jczpsopoj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_dec_sopo}
              />
              <Vstup {...vstup_dec} val={december.fmso} col={'fmso'} class={fzp_j_dec_fmso} />
              <Vypocet value={ december.sopp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={december.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsoppj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_dec_sopp_pop'}
                       cellsId={['fzp_j_dec_mwh', 'fzp_k_jczpsoppj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_dec_sopp}
              />
              <Vstup {...vstup_dec} val={december.fmsp} col={'fmsp'} class={fzp_j_dec_fmsp} />
              <Vypocet value={ december.sopd }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={december.objem_mwh} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={jczpsopdj.hodnota} decimalScale={5} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">MWh</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena zemného plynu pre SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_dec_sopd_pop'}
                       cellsId={['fzp_j_dec_mwh', 'fzp_k_jczpsopdj']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_dec_sopd}
              />
              <Vstup {...vstup_dec} val={december.fmsd} col={'fmsd'} class={fzp_j_dec_fmsd} />
              <Vstup {...vstup_dec} val={december.vsd} col={'vsd'} class={fzp_j_dec_vsd} />
              <Vstup {...vstup_dec} val={december.dan_mwh} col={'dan_mwh'} class={fzp_j_dec_dan_mwh} />
              <Vstup {...vstup_dec} val={december.dan_eur} col={'dan_eur'} class={fzp_j_dec_dan_e} />
              <Vstup {...vstup_dec} val={december.pdm} col={'pdm'} class={fzp_j_dec_pdm} />
              <Vypocet value={ december.naklady }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={december.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-8">Spotrebná daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">PDM</span>
                       </div> }
                       popoverId={'fzp_j_dec_ns_pop'}
                       cellsId={[
                         'fzp_j_dec_sopo', 'fzp_j_dec_fmso', 'fzp_j_dec_sopp', 'fzp_j_dec_fmsp',
                         'fzp_j_dec_sopd', 'fzp_j_dec_fmsd', 'fzp_j_dec_vsd', 'fzp_j_dec_dan_e', 'fzp_j_dec_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={fzp_j_dec_ns}
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
                         <NumberFormat {...vypocetFormat} value={januar.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.objem_m3} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.objem_m3} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.objem_m3} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.objem_m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec m<sup>3</sup></span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún m<sup>3</sup></span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September m<sup>3</sup></span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December m<sup>3</sup></span>
                       </div> }
                       popoverId={'fzp_j_spo_m3_pop'}
                       cellsId={[
                         'fzp_j_jan_m3', 'fzp_j_feb_m3', 'fzp_j_mar_m3', 'fzp_j_apr_m3',
                         'fzp_j_maj_m3', 'fzp_j_jun_m3', 'fzp_j_jul_m3', 'fzp_j_aug_m3',
                         'fzp_j_sep_m3', 'fzp_j_okt_m3', 'fzp_j_nov_m3', 'fzp_j_dec_m3']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_m3 + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.objem_mwh }
                       unit={ 'MWh' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.objem_mwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.objem_mwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.objem_mwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.objem_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec MWh</span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún MWh</span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September MWh</span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December MWh</span>
                       </div> }
                       popoverId={'fzp_j_spo_mwh_pop'}
                       cellsId={[
                         'fzp_j_jan_mwh', 'fzp_j_feb_mwh', 'fzp_j_mar_mwh', 'fzp_j_apr_mwh',
                         'fzp_j_maj_mwh', 'fzp_j_jun_mwh', 'fzp_j_jul_mwh', 'fzp_j_aug_mwh',
                         'fzp_j_sep_mwh', 'fzp_j_okt_mwh', 'fzp_j_nov_mwh', 'fzp_j_dec_mwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_mwh + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.sopo }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.sopo} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.sopo} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.sopo} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.sopo} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec SOP<sub>o</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún SOP<sub>o</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September SOP<sub>o</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December SOP<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_spo_sopo_pop'}
                       cellsId={[
                         'fzp_j_jan_sopo', 'fzp_j_feb_sopo', 'fzp_j_mar_sopo', 'fzp_j_apr_sopo',
                         'fzp_j_maj_sopo', 'fzp_j_jun_sopo', 'fzp_j_jul_sopo', 'fzp_j_aug_sopo',
                         'fzp_j_sep_sopo', 'fzp_j_okt_sopo', 'fzp_j_nov_sopo', 'fzp_j_dec_sopo']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_sopo + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.fmso }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.fmso} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.fmso} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.fmso} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.fmso} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec FMS<sub>o</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún FMS<sub>o</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September FMS<sub>o</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December FMS<sub>o</sub></span>
                       </div> }
                       popoverId={'fzp_j_spo_fmso_pop'}
                       cellsId={[
                         'fzp_j_jan_fmso', 'fzp_j_feb_fmso', 'fzp_j_mar_fmso', 'fzp_j_apr_fmso',
                         'fzp_j_maj_fmso', 'fzp_j_jun_fmso', 'fzp_j_jul_fmso', 'fzp_j_aug_fmso',
                         'fzp_j_sep_fmso', 'fzp_j_okt_fmso', 'fzp_j_nov_fmso', 'fzp_j_dec_fmso']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_fmso + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.sopp }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.sopp} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.sopp} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.sopp} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.sopp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec SOP<sub>p</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún SOP<sub>p</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September SOP<sub>p</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December SOP<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_spo_sopp_pop'}
                       cellsId={[
                         'fzp_j_jan_sopp', 'fzp_j_feb_sopp', 'fzp_j_mar_sopp', 'fzp_j_apr_sopp',
                         'fzp_j_maj_sopp', 'fzp_j_jun_sopp', 'fzp_j_jul_sopp', 'fzp_j_aug_sopp',
                         'fzp_j_sep_sopp', 'fzp_j_okt_sopp', 'fzp_j_nov_sopp', 'fzp_j_dec_sopp']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_sopp + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.fmsp }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.fmsp} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.fmsp} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.fmsp} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.fmsp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.fmsp} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec FMS<sub>p</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún FMS<sub>p</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September FMS<sub>p</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December FMS<sub>p</sub></span>
                       </div> }
                       popoverId={'fzp_j_spo_fmsp_pop'}
                       cellsId={[
                         'fzp_j_jan_fmsp', 'fzp_j_feb_fmsp', 'fzp_j_mar_fmsp', 'fzp_j_apr_fmsp',
                         'fzp_j_maj_fmsp', 'fzp_j_jun_fmsp', 'fzp_j_jul_fmsp', 'fzp_j_aug_fmsp',
                         'fzp_j_sep_fmsp', 'fzp_j_okt_fmsp', 'fzp_j_nov_fmsp', 'fzp_j_dec_fmsp']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_fmsp + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.sopd }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.sopd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.sopd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.sopd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.sopd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec SOP<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún SOP<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September SOP<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December SOP<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_spo_sopd_pop'}
                       cellsId={[
                         'fzp_j_jan_sopd', 'fzp_j_feb_sopd', 'fzp_j_mar_sopd', 'fzp_j_apr_sopd',
                         'fzp_j_maj_sopd', 'fzp_j_jun_sopd', 'fzp_j_jul_sopd', 'fzp_j_aug_sopd',
                         'fzp_j_sep_sopd', 'fzp_j_okt_sopd', 'fzp_j_nov_sopd', 'fzp_j_dec_sopd']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_sopd + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.fmsd }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.fmsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.fmsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.fmsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.fmsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec FMS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún FMS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September FMS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December FMS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_spo_fmsd_pop'}
                       cellsId={[
                         'fzp_j_jan_fmsd', 'fzp_j_feb_fmsd', 'fzp_j_mar_fmsd', 'fzp_j_apr_fmsd',
                         'fzp_j_maj_fmsd', 'fzp_j_jun_fmsd', 'fzp_j_jul_fmsd', 'fzp_j_aug_fmsd',
                         'fzp_j_sep_fmsd', 'fzp_j_okt_fmsd', 'fzp_j_nov_fmsd', 'fzp_j_dec_fmsd']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_fmsd + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.vsd }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.vsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.vsd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November VS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December VS<sub>d</sub></span>
                       </div> }
                       popoverId={'fzp_j_spo_vsd_pop'}
                       cellsId={[
                         'fzp_j_jan_vsd', 'fzp_j_feb_vsd', 'fzp_j_mar_vsd', 'fzp_j_apr_vsd',
                         'fzp_j_maj_vsd', 'fzp_j_jun_vsd', 'fzp_j_jul_vsd', 'fzp_j_aug_vsd',
                         'fzp_j_sep_vsd', 'fzp_j_okt_vsd', 'fzp_j_nov_vsd', 'fzp_j_dec_vsd']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_vsd + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.dan_mwh }
                       unit={ 'MWh' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.dan_mwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.dan_mwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.dan_mwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.dan_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.dan_mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec daň MWh</span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún daň MWh</span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September daň MWh</span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November daň MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December daň MWh</span>
                       </div> }
                       popoverId={'fzp_j_spo_dan_mwh_pop'}
                       cellsId={[
                         'fzp_j_jan_dan_mwh', 'fzp_j_feb_dan_mwh', 'fzp_j_mar_dan_mwh', 'fzp_j_apr_dan_mwh',
                         'fzp_j_maj_dan_mwh', 'fzp_j_jun_dan_mwh', 'fzp_j_jul_dan_mwh', 'fzp_j_aug_dan_mwh',
                         'fzp_j_sep_dan_mwh', 'fzp_j_okt_dan_mwh', 'fzp_j_nov_dan_mwh', 'fzp_j_dec_dan_mwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_dan_mwh + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.dan_eur }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.dan_eur} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.dan_eur} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.dan_eur} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.dan_eur} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec daň €</span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún daň €</span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September daň €</span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November daň €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December daň €</span>
                       </div> }
                       popoverId={'fzp_j_spo_dan_e_pop'}
                       cellsId={[
                         'fzp_j_jan_dan_e', 'fzp_j_feb_dan_e', 'fzp_j_mar_dan_e', 'fzp_j_apr_dan_e',
                         'fzp_j_maj_dan_e', 'fzp_j_jun_dan_e', 'fzp_j_jul_dan_e', 'fzp_j_aug_dan_e',
                         'fzp_j_sep_dan_e', 'fzp_j_okt_dan_e', 'fzp_j_nov_dan_e', 'fzp_j_dec_dan_e']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_dan_e + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.pdm }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.pdm} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.pdm} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.pdm} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec PDM</span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún PDM</span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September PDM</span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November PDM</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December PDM</span>
                       </div> }
                       popoverId={'fzp_j_spo_pdm_pop'}
                       cellsId={[
                         'fzp_j_jan_pdm', 'fzp_j_feb_pdm', 'fzp_j_mar_pdm', 'fzp_j_apr_pdm',
                         'fzp_j_maj_pdm', 'fzp_j_jun_pdm', 'fzp_j_jul_pdm', 'fzp_j_aug_pdm',
                         'fzp_j_sep_pdm', 'fzp_j_okt_pdm', 'fzp_j_nov_pdm', 'fzp_j_dec_pdm']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_pdm + ' font-weight-bold'}
              />

              <Vypocet value={ spolu.naklady }
                       unit={ '€' }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={januar.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={februar.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={marec.naklady} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={april.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={maj.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jun.naklady} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={jul.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={august.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={september.naklady} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={oktober.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={november.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={december.naklady} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Január náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Február náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Marec náklady</span>
                         <br/>+&nbsp;
                         <span className="polozka-4">Apríl náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">Máj náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">Jún náklady</span>
                         <br/>+&nbsp;
                         <span className="polozka-7">Júl náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-8">August náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-9">September náklady</span>
                         <br/>+&nbsp;
                         <span className="polozka-10">Október náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-11">November náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-12">December náklady</span>
                       </div> }
                       popoverId={'fzp_j_spo_ns_pop'}
                       cellsId={[
                         'fzp_j_jan_ns', 'fzp_j_feb_ns', 'fzp_j_mar_ns', 'fzp_j_apr_ns',
                         'fzp_j_maj_ns', 'fzp_j_jun_ns', 'fzp_j_jul_ns', 'fzp_j_aug_ns',
                         'fzp_j_sep_ns', 'fzp_j_okt_ns', 'fzp_j_nov_ns', 'fzp_j_dec_ns']}
                       placement={'bottom'}
                       decimal={decimal}
                       class={fzp_j_spo_ns + ' font-weight-bold'}
              />
            </tr>
            <tr className="text-right">
              <th id={'vhj-pc'} className="text-left">Priemerná cena <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'vhj-pc'}>Bez PDM</UncontrolledTooltip>
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
                       popoverId={'fzp_j_pc_m3_pop'}
                       cellsId={['fzp_j_spo_ns', 'fzp_j_spo_pdm', 'fzp_j_spo_m3']}
                       placement={'bottom'}
                       decimal={4}
                       class={fzp_j_pc_m3 + ' font-weight-bold'}
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
                       popoverId={'fzp_j_pc_mwh_pop'}
                       cellsId={['fzp_j_spo_ns', 'fzp_j_spo_pdm', 'fzp_j_spo_mwh']}
                       placement={'bottom'}
                       decimal={4}
                       class={fzp_j_pc_mwh + ' font-weight-bold'}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'fzpvhj'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet,
  hlavny: state.hlavny,

  konstanty: state.konstanty,
  zp: state.zemnyplyn.vhj
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  vypocet: (e) => dispatch(fetchVypocetBuniekRequest(e)),
  update: (e, table, hlavny, bulk) => dispatch(updateZemnyPlynRequest(e, table, hlavny, bulk))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VyhrevnaJuh)