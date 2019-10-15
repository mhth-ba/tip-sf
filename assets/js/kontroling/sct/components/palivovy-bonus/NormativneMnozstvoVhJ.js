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

class NormativneMnostvoVhJ extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const nm = this.props.nm
    const dt = this.props.dt
    const vypocet = this.props.vypocet

    const decimal = this.props.nastroje.decimal_pbnmzpvhj

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      tvz,
      tvtvo,
      vzp,
      pstv,
      nmzp
    } = nm.vhj

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
      pb_nmzp_j_tvz_m, pb_nmzp_j_tvz_u,
      pb_nmzp_j_tvtvo_m,
      pb_nmzp_j_vzp,
      pb_nmzp_j_pstv,
      pb_nmzp_j_mwh, pb_nmzp_j_m3
    } = vypocet

    const vstup = {
      table: 'vhj',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update
    }

    const vstup_tvz = { id: tvz.id, row: 'tvz', ...vstup }
    const vstup_tvtvo = { id: tvtvo.id, row: 'tvtvo', ...vstup }
    const vstup_vzp = { id: vzp.id, row: 'vzp', ...vstup }
    const vstup_pstv = { id: pstv.id, row: 'pstv', ...vstup }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Normatívne množstvo zemného plynu - VhJ</CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th>Výhrevňa Juh</th>
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
              <td className="text-left">Teplo na výstupe zo zdroja</td>
              <td className={pb_nmzp_j_tvz_m}><NumberFormat {...numFormat} value={vhj / 1000} /> MWh</td>
              <Vstup {...vstup_tvz} val={tvz.ucinnost} col={'ucinnost'} dec={3} class={pb_nmzp_j_tvz_u} />
            </tr>
            <tr>
              <td className="text-left">Teplo vyrobené z ŤVO</td>
              <Vstup {...vstup_tvtvo} val={tvtvo.hodnota} col={'hodnota'} dec={3} class={pb_nmzp_j_tvtvo_m} />
            </tr>
            <tr>
              <td className="text-left">Výhrevnosť zemného plynu</td>
              <Vstup {...vstup_vzp} val={vzp.hodnota} col={'hodnota'}
                     unit={ ReactHtmlParser(vzp.polozka.jednotka) } dec={vzp.polozka.desatiny}
                     class={pb_nmzp_j_vzp}
              />
            </tr>
            <tr>
              <td className="text-left">Pomer spaľovacieho tepla a výhrevnosti</td>
              <Vstup {...vstup_pstv} val={pstv.hodnota} col={'hodnota'}
                     unit={pstv.polozka.jednotka} dec={pstv.polozka.desatiny}
                     class={pb_nmzp_j_pstv}
              />
            </tr>
            <tr>
              <td rowSpan={2} className="text-left align-middle">Normatívne množstvo zemného plynu VhJ</td>
              <Vypocet value={ nmzp.mwh }
                       cisla={ <div>
                         [(<NumberFormat {...vypocetFormat} value={tvz.mnozstvo} />
                         &nbsp;/&nbsp;
                         <NumberFormat {...vypocetFormat} value={tvz.ucinnost} decimalScale={3} />)
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={tvtvo.hodnota} />
                         ]
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={pstv.hodnota} decimalScale={pstv.polozka.desatiny} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Teplo na výstupe zo zdroja</span>
                         <ZlomkovaCiara width={90} />
                         <span className="polozka-2">Účinnosť zdroja</span>
                         <br/>-<br/>
                         <span className="polozka-3">Teplo vyrobené z mazutu</span>
                         <br/>×<br/>
                         <span className="polozka-4">Pomer spaľovacieho tepla a výhrevnosti</span>
                       </div> }
                       popoverId={'pb_nmzp_j_tpvz_pop'}
                       cellsId={['pb_nmzp_j_tvz_m', 'pb_nmzp_j_tvz_u', 'pb_nmzp_j_tvtvo_m', 'pb_nmzp_j_pstv']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'MWh'}
                       class={pb_nmzp_j_mwh}
              />
            </tr>
            <tr>
              <Vypocet value={ nmzp.m3 }
                       cisla={ <div>
                         [(<NumberFormat {...vypocetFormat} value={tvz.mnozstvo} />
                         &nbsp;/&nbsp;
                         <NumberFormat {...vypocetFormat} value={tvz.ucinnost} decimalScale={3} />)
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={tvtvo.hodnota} />
                         ]
                         &nbsp;×&nbsp;
                         3,6
                         <ZlomkovaCiara width={70} />
                         <NumberFormat {...vypocetFormat} value={vzp.hodnota} decimalScale={vzp.polozka.desatiny} />
                       </div> }
                       popis={ <div>
                         [(<span className="polozka-1">Teplo na výstupe zo zdroja</span>
                         &nbsp;/&nbsp;
                         <span className="polozka-2">Účinnosť zdroja</span>)
                         <br/>-&nbsp;
                         <span className="polozka-3">Teplo vyrobené z mazutu</span>
                         ]
                         &nbsp;×&nbsp;
                         3,6
                         <ZlomkovaCiara/>
                         <span className="polozka-3">Výhrevnosť zemného plynu</span>
                       </div> }
                       popoverId={'pb_nmzp_j_m3_pop'}
                       cellsId={['pb_nmzp_j_tvz_m', 'pb_nmzp_j_tvz_u', 'pb_nmzp_j_tvtvo_m', 'pb_nmzp_j_vzp']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={ ReactHtmlParser('tis. m<sup>3</sup>') }
                       class={pb_nmzp_j_m3}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'pbnmzpvhj'} />
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
)(NormativneMnostvoVhJ)