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

import { updateNormativneMnozstvoRequest } from '../../actions'

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

class NormativneMnostvoTpV extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const nm = this.props.nm
    const dt = this.props.dt
    const vypocet = this.props.vypocet

    const decimal = this.props.nastroje.decimal_pbnmzptpv

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }
    
    const {
      vtsek,
      vtost,
      vtpri,
      tvtpv,
      tvz,
      vzp,
      pstv,
      nmzp
    } = nm.tpv

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
      bpk,      // spolu [ bez plynovych kotolni ]
      spk,      // spolu [ vratane plynovych kotolni ]
      straty,
      cd        // (c)elkova (d)odavka
    } = dt

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      pb_nmzp_v_vtsek_m, pb_nmzp_v_vtsek_u,
      pb_nmzp_v_vtost_m, pb_nmzp_v_vtost_u,
      pb_nmzp_v_vtpri_m, pb_nmzp_v_vtpri_u,
      pb_nmzp_v_tvtpv,
      pb_nmzp_v_tvvhj,
      pb_nmzp_v_ntppc,
      pb_nmzp_v_ntslo,
      pb_nmzp_v_tvz_m, pb_nmzp_v_tvz_u,
      pb_nmzp_v_vzp,
      pb_nmzp_v_pstv,
      pb_nmzp_v_mwh, pb_nmzp_v_m3
    } = vypocet

    const vstup = {
      table: 'tpv',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update
    }

    const vstup_vtsek = { id: vtsek.id, row: 'vtsek', ...vstup }
    const vstup_vtost = { id: vtost.id, row: 'vtost', ...vstup }
    const vstup_vtpri = { id: vtpri.id, row: 'vtpri', ...vstup }
    const vstup_tvz = { id: tvz.id, row: 'tvz', ...vstup }
    const vstup_vzp = { id: vzp.id, row: 'vzp', ...vstup }
    const vstup_pstv = { id: pstv.id, row: 'pstv', ...vstup }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Normatívne množstvo zemného plynu - TpV</CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th>Tepláreň Východ</th>
              <th>{''}</th>
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
              <td className="text-left">Výstup tepla zo sekundárnej siete</td>
              <td className={pb_nmzp_v_vtsek_m}><NumberFormat {...numFormat} value={sekundar.v_kwh / 1000} /> MWh</td>
              <Vstup {...vstup_vtsek} val={vtsek.ucinnost} col={'ucinnost'} dec={3} class={pb_nmzp_v_vtsek_u} />
            </tr>
            <tr>
              <td className="text-left">Výstup tepla z OST</td>
              <Vypocet value={ vtost.mnozstvo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={sekundar.v_kwh / 1000} />
                         <ZlomkovaCiara width={40} />
                         <NumberFormat {...vypocetFormat} value={vtsek.ucinnost} decimalScale={3} />
                         <br/>+<br/>
                         <NumberFormat {...vypocetFormat} value={ost.v_kwh / 1000} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Výstup tepla zo sekundárnej siete</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Účinnosť</span>
                         <br/>+<br/>
                         <span className="polozka-3">Užitočná dodávka z OST východ</span>
                       </div> }
                       popoverId={'pb_nmzp_v_vtost_m_pop'}
                       cellsId={['pb_nmzp_v_vtsek_m', 'pb_nmzp_v_vtsek_u']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'MWh'}
                       class={pb_nmzp_v_vtost_m}
              />
              <Vstup {...vstup_vtost} val={vtost.ucinnost} col={'ucinnost'} dec={3} class={pb_nmzp_v_vtost_u} />
            </tr>
            <tr>
              <td className="text-left">Výstup tepla z primárnej siete</td>
              <Vypocet value={ vtpri.mnozstvo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vtost.mnozstvo} />
                         <ZlomkovaCiara width={40} />
                         <NumberFormat {...vypocetFormat} value={vtost.ucinnost} decimalScale={3} />
                         <br/>+<br/>
                         <NumberFormat {...vypocetFormat} value={primar.v_kwh / 1000} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Výstup tepla z OST</span>
                         <ZlomkovaCiara width={50} />
                         <span className="polozka-2">Účinnosť</span>
                         <br/>+<br/>
                         <span className="polozka-3">Užitočná dodávka z primárnej siete východ</span>
                       </div> }
                       popoverId={'pb_nmzp_v_vtpri_m_pop'}
                       cellsId={['pb_nmzp_v_vtost_m', 'pb_nmzp_v_vtost_u']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'MWh'}
                       class={pb_nmzp_v_vtpri_m}
              />
              <Vstup {...vstup_vtpri} val={vtpri.ucinnost} col={'ucinnost'} dec={3} class={pb_nmzp_v_vtpri_u} />
            </tr>
            <tr>
              <td className="text-left">Teplo na výstupe z TpV</td>
              <Vypocet value={ tvtpv }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vtpri.mnozstvo} />
                         <ZlomkovaCiara width={50} />
                         <NumberFormat {...vypocetFormat} value={vtpri.ucinnost} decimalScale={3} />
                         <br/>+<br/>
                         <NumberFormat {...vypocetFormat} value={zdroj.v_kwh / 1000} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Výstup tepla z primárnej siete</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Účinnosť</span>
                         <br/>+<br/>
                         <span className="polozka-3">Užitočná dodávka zo zdroja východ</span>
                       </div> }
                       popoverId={'pb_nmzp_v_tvtpv_pop'}
                       cellsId={['pb_nmzp_v_vtpri_m', 'pb_nmzp_v_vtpri_u']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'MWh'}
                       class={pb_nmzp_v_tvtpv}
              />
            </tr>
            <tr>
              <td className="text-left">&nbsp;&nbsp;- teplo na výstupe z VhJ</td>
              <td className={pb_nmzp_v_tvvhj}>-&nbsp;<NumberFormat {...numFormat} value={vhj / 1000} /> MWh</td>
            </tr>
            <tr>
              <td className="text-left">&nbsp;&nbsp;- nákup tepla PPC</td>
              <td className={pb_nmzp_v_ntppc}>-&nbsp;<NumberFormat {...numFormat} value={ppc / 1000} /> MWh</td>
            </tr>
            <tr>
              <td className="text-left">&nbsp;&nbsp;- nákup tepla Slovnaft</td>
              <td className={pb_nmzp_v_ntslo}>-&nbsp;<NumberFormat {...numFormat} value={slovnaft / 1000} /> MWh</td>
            </tr>
            <tr>
              <td className="text-left">Teplo na výstupe zo zdroja</td>
              <Vypocet value={ tvz.mnozstvo }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={tvtpv} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={vhj / 1000} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={ppc / 1000} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={slovnaft / 1000} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Teplo na výstupe z TpV</span>
                         &nbsp;-&nbsp;
                         <span className="polozka-2">Teplo na výstupe z VhJ</span>
                         <br/>-&nbsp;
                         <span className="polozka-3">Nákup tepla PPC</span>
                         &nbsp;-&nbsp;
                         <span className="polozka-4">Nákup tepla Slovnaft</span>
                       </div> }
                       popoverId={'pb_nmzp_v_tvz_m_pop'}
                       cellsId={['pb_nmzp_v_tvtpv', 'pb_nmzp_v_tvvhj', 'pb_nmzp_v_ntppc', 'pb_nmzp_v_ntslo']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'MWh'}
                       class={pb_nmzp_v_tvz_m}
              />
              <Vstup {...vstup_tvz} val={tvz.ucinnost} col={'ucinnost'} dec={3} class={pb_nmzp_v_tvz_u} />
            </tr>
            <tr>
              <td className="text-left">Výhrevnosť zemného plynu</td>
              <Vstup {...vstup_vzp} val={vzp.hodnota} col={'hodnota'}
                     unit={ ReactHtmlParser(vzp.polozka.jednotka) } dec={vzp.polozka.desatiny}
                     class={pb_nmzp_v_vzp}
              />
            </tr>
            <tr>
              <td className="text-left">Pomer spaľovacieho tepla a výhrevnosti</td>
              <Vstup {...vstup_pstv} val={pstv.hodnota} col={'hodnota'}
                     unit={pstv.polozka.jednotka} dec={pstv.polozka.desatiny}
                     class={pb_nmzp_v_pstv}
              />
            </tr>
            <tr>
              <td rowSpan={2} className="text-left align-middle">Normatívne množstvo zemného plynu TpV</td>
              <Vypocet value={ nmzp.mwh }
                       cisla={ <div>
                         (<NumberFormat {...vypocetFormat} value={tvz.mnozstvo} />
                         &nbsp;/&nbsp;
                         <NumberFormat {...vypocetFormat} value={tvz.ucinnost} decimalScale={3} />)
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={pstv.hodnota} decimalScale={pstv.polozka.desatiny} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Teplo na výstupe zo zdroja</span>
                         <ZlomkovaCiara width={90} />
                         <span className="polozka-2">Účinnosť zdroja</span>
                         <br/>×<br/>
                         <span className="polozka-3">Pomer spaľovacieho tepla a výhrevnosti</span>
                       </div> }
                       popoverId={'pb_nmzp_v_tpvz_pop'}
                       cellsId={['pb_nmzp_v_tvz_m', 'pb_nmzp_v_tvz_u', 'pb_nmzp_v_pstv']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'MWh'}
                       class={pb_nmzp_v_mwh}
              />
            </tr>
            <tr>
              <Vypocet value={ nmzp.m3 }
                       cisla={ <div>
                         (<NumberFormat {...vypocetFormat} value={tvz.mnozstvo} />
                         &nbsp;/&nbsp;
                         <NumberFormat {...vypocetFormat} value={tvz.ucinnost} decimalScale={3} />)
                         &nbsp;×&nbsp;
                         3,6
                         <ZlomkovaCiara width={60} />
                         <NumberFormat {...vypocetFormat} value={vzp.hodnota} decimalScale={vzp.polozka.desatiny} />
                       </div> }
                       popis={ <div>
                         (<span className="polozka-1">Teplo na výstupe zo zdroja</span>
                         &nbsp;/&nbsp;
                         <span className="polozka-2">Účinnosť zdroja</span>)
                         &nbsp;×&nbsp;
                         3,6
                         <ZlomkovaCiara/>
                         <span className="polozka-3">Výhrevnosť zemného plynu</span>
                       </div> }
                       popoverId={'pb_nmzp_v_m3_pop'}
                       cellsId={['pb_nmzp_v_tvz_m', 'pb_nmzp_v_tvz_u', 'pb_nmzp_v_vzp']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={ ReactHtmlParser('tis. m<sup>3</sup>') }
                       class={pb_nmzp_v_m3}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'pbnmzptpv'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  dt: state.dodavkatepla,

  nm: state.normativnemnozstvo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e, table, hlavny) => dispatch(updateNormativneMnozstvoRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NormativneMnostvoTpV)