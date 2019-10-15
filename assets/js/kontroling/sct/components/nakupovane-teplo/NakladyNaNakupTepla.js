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

import { updateNakupTeplaRequest } from '../../actions'

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

class NakladyNaNakupTepla extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const nt = this.props.nt

    const vypocet = this.props.vypocet
    
    const decimal = this.props.nastroje.decimal_ntnnt

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      dnt,
      rp,
      vzc,
      fzc,
      pjc,
      vn,
      fn,
      nnts
    } = nt

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      nt_nnt_dnt_ppc, nt_nnt_dnt_slo, nt_nnt_dnt_cw, nt_nnt_dnt_spolu,
      nt_nnt_rp_ppc, nt_nnt_rp_slo, nt_nnt_rp_cw, nt_nnt_rp_spolu,
      nt_nnt_vzc_ppc, nt_nnt_vzc_slo, nt_nnt_vzc_cw, nt_nnt_vzc_spolu,
      nt_nnt_fzc_ppc, nt_nnt_fzc_slo, nt_nnt_fzc_cw, nt_nnt_fzc_spolu,
      nt_nnt_pjc_ppc, nt_nnt_pjc_slo, nt_nnt_pjc_cw, nt_nnt_pjc_spolu,
      nt_nnt_vn_ppc, nt_nnt_vn_slo, nt_nnt_vn_cw, nt_nnt_vn_spolu,
      nt_nnt_fn_ppc, nt_nnt_fn_slo, nt_nnt_fn_cw, nt_nnt_fn_spolu,
      
      nt_nnt_nnts_ppc, nt_nnt_nnts_slo, nt_nnt_nnts_cw, nt_nnt_nnts_spolu
    } = vypocet

    const vstup = {
      table: 'nt',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update
    }
    
    const vstup_rp = { id: rp.id, row: 'rp', ...vstup }
    const vstup_vn = { id: vn.id, row: 'vn', ...vstup }
    const vstup_fn = { id: fn.id, row: 'fn', ...vstup }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Náklady na nákup tepla</CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th></th>
              <th>PPC</th>
              <th>Slovnaft</th>
              <th>Cogen West</th>
              <th>Spolu</th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <td className="text-left">Dodávka nakúpeného tepla <Jednotka unit={'kWh'} /></td>
              <td className={nt_nnt_dnt_ppc}><NumberFormat {...numFormat} value={dnt.ppc} /> kWh</td>
              <td className={nt_nnt_dnt_slo}><NumberFormat {...numFormat} value={dnt.slovnaft} /> kWh</td>
              <td className={nt_nnt_dnt_cw}><NumberFormat {...numFormat} value={dnt.cw} /> kWh</td>
              <td className={nt_nnt_dnt_spolu}><NumberFormat {...numFormat} value={dnt.spolu} /> kWh</td>
            </tr>
            <tr>
              <td className="text-left">Regulačný príkon <Jednotka unit={'kW'} /></td>
              <Vstup {...vstup_rp} val={rp.ppc} col={'ppc'} class={nt_nnt_rp_ppc} unit={'kWh'} />
              <Vstup {...vstup_rp} val={rp.slovnaft} col={'slovnaft'} class={nt_nnt_rp_slo} unit={'kWh'} />
              <Vstup {...vstup_rp} val={rp.cw} col={'cw'} class={nt_nnt_rp_cw} unit={'kWh'} />
              <Vypocet value={ rp.spolu }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={rp.ppc} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={rp.slovnaft} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={rp.cw} />
                       </div> }
                       popis={ <div>
                         <span>Regulačný príkon</span>
                         <br/>
                         <span className="polozka-1">PPC</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Slovnaft</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Cogen West</span>
                       </div> }
                       popoverId={'nt_nnt_rp_spolu_pop'}
                       cellsId={['nt_nnt_rp_ppc', 'nt_nnt_rp_slo', 'nt_nnt_rp_cw']}
                       placement={'right'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={nt_nnt_rp_spolu}
              />
            </tr>
            <tr>
              <td className="text-left">Variabilná zložka ceny <Jednotka unit={'€/kWh'} /></td>
              <Vypocet value={ vzc.ppc }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vn.ppc} />
                         <ZlomkovaCiara width={65} />
                         <NumberFormat {...vypocetFormat} value={dnt.ppc} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Variabilné náklady PPC</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Dodávka nakúpeného tepla PPC</span>
                       </div> }
                       popoverId={'nt_nnt_vzc_ppc_pop'}
                       cellsId={['nt_nnt_vn_ppc', 'nt_nnt_dnt_ppc']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_vzc_ppc}
              />
              <Vypocet value={ vzc.slovnaft }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vn.slovnaft} />
                         <ZlomkovaCiara width={65} />
                         <NumberFormat {...vypocetFormat} value={dnt.slovnaft} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Variabilné náklady Slovnaft</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Dodávka nakúpeného tepla Slovnaft</span>
                       </div> }
                       popoverId={'nt_nnt_vzc_slo_pop'}
                       cellsId={['nt_nnt_vn_slo', 'nt_nnt_dnt_slo']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_vzc_slo}
              />
              <Vypocet value={ vzc.cw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vn.cw} />
                         <ZlomkovaCiara width={65} />
                         <NumberFormat {...vypocetFormat} value={dnt.cw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Variabilné náklady Cogen West</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Dodávka nakúpeného tepla Cogen West</span>
                       </div> }
                       popoverId={'nt_nnt_vzc_cw_pop'}
                       cellsId={['nt_nnt_vn_cw', 'nt_nnt_dnt_cw']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_vzc_cw}
              />
              <Vypocet value={ vzc.spolu }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vn.spolu} />
                         <ZlomkovaCiara width={65} />
                         <NumberFormat {...vypocetFormat} value={dnt.spolu} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Variabilné náklady spolu</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Dodávka nakúpeného tepla spolu</span>
                       </div> }
                       popoverId={'nt_nnt_vzc_spolu_pop'}
                       cellsId={['nt_nnt_vn_spolu', 'nt_nnt_dnt_spolu']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_vzc_spolu}
              />
            </tr>
            <tr>
              <td className="text-left">Fixná zložka ceny <Jednotka unit={'€/kW'} /></td>
              <Vypocet value={ fzc.ppc }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={fn.ppc} />
                         <ZlomkovaCiara width={80} />
                         <NumberFormat {...vypocetFormat} value={rp.ppc} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Fixné náklady PPC</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Regulačný príkon PPC</span>
                       </div> }
                       popoverId={'nt_nnt_fzc_ppc_pop'}
                       cellsId={['nt_nnt_fn_ppc', 'nt_nnt_rp_ppc']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_fzc_ppc}
              />
              <Vypocet value={ fzc.slovnaft }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={fn.slovnaft} />
                         <ZlomkovaCiara width={80} />
                         <NumberFormat {...vypocetFormat} value={rp.slovnaft} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Fixné náklady Slovnaft</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Regulačný príkon Slovnaft</span>
                       </div> }
                       popoverId={'nt_nnt_fzc_slo_pop'}
                       cellsId={['nt_nnt_fn_slo', 'nt_nnt_rp_slo']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_fzc_slo}
              />
              <Vypocet value={ fzc.cw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={fn.cw} />
                         <ZlomkovaCiara width={80} />
                         <NumberFormat {...vypocetFormat} value={rp.cw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Fixné náklady Cogen West</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Regulačný príkon Cogen West</span>
                       </div> }
                       popoverId={'nt_nnt_fzc_cw_pop'}
                       cellsId={['nt_nnt_fn_cw', 'nt_nnt_rp_cw']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_fzc_cw}
              />
              <Vypocet value={ fzc.spolu }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={fn.spolu} />
                         <ZlomkovaCiara width={65} />
                         <NumberFormat {...vypocetFormat} value={rp.spolu} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Fixné náklady spolu</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Regulačný príkon spolu</span>
                       </div> }
                       popoverId={'nt_nnt_fzc_spolu_pop'}
                       cellsId={['nt_nnt_fn_spolu', 'nt_nnt_rp_spolu']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_fzc_spolu}
              />
            </tr>
            <tr>
              <td className="text-left">Priemerná jednotková cena <Jednotka unit={'€/kWh'} /></td>
              <Vypocet value={ pjc.ppc }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={nnts.ppc} />
                         <ZlomkovaCiara width={60} />
                         <NumberFormat {...vypocetFormat} value={dnt.ppc} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Náklady na nakupované teplo PPC</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Dodávka nakúpeného tepla PPC</span>
                       </div> }
                       popoverId={'nt_nnt_pjc_ppc_pop'}
                       cellsId={['nt_nnt_nnts_ppc', 'nt_nnt_dnt_ppc']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_pjc_ppc}
              />
              <Vypocet value={ pjc.slovnaft }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={nnts.slovnaft} />
                         <ZlomkovaCiara width={60} />
                         <NumberFormat {...vypocetFormat} value={dnt.slovnaft} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Náklady na nakupované teplo Slovnaft</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Dodávka nakúpeného tepla Slovnaft</span>
                       </div> }
                       popoverId={'nt_nnt_pjc_slo_pop'}
                       cellsId={['nt_nnt_nnts_slo', 'nt_nnt_dnt_slo']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_pjc_slo}
              />
              <Vypocet value={ pjc.cw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={nnts.cw} />
                         <ZlomkovaCiara width={60} />
                         <NumberFormat {...vypocetFormat} value={dnt.cw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Náklady na nakupované teplo Cogen West</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Dodávka nakúpeného tepla Cogen West</span>
                       </div> }
                       popoverId={'nt_nnt_pjc_cw_pop'}
                       cellsId={['nt_nnt_nnts_cw', 'nt_nnt_dnt_cw']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_pjc_cw}
              />
              <Vypocet value={ pjc.spolu }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={nnts.spolu} />
                         <ZlomkovaCiara width={60} />
                         <NumberFormat {...vypocetFormat} value={dnt.spolu} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Náklady na nakupované teplo spolu</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-2">Dodávka nakúpeného tepla spolu</span>
                       </div> }
                       popoverId={'nt_nnt_pjc_spolu_pop'}
                       cellsId={['nt_nnt_nnts_spolu', 'nt_nnt_dnt_spolu']}
                       placement={'right'}
                       decimal={4}
                       unit={'€/kWh'}
                       class={nt_nnt_pjc_spolu}
              />
            </tr>
            <tr>
              <td className="text-left">Variabilné náklady <Jednotka unit={'€'} /></td>
              <Vstup {...vstup_vn} val={vn.ppc} col={'ppc'} class={nt_nnt_vn_ppc} unit={'€'} />
              <Vstup {...vstup_vn} val={vn.slovnaft} col={'slovnaft'} class={nt_nnt_vn_slo} unit={'€'} />
              <Vstup {...vstup_vn} val={vn.cw} col={'cw'} class={nt_nnt_vn_cw} unit={'€'} />
              <Vypocet value={ vn.spolu }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vn.ppc} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vn.slovnaft} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vn.cw} />
                       </div> }
                       popis={ <div>
                         <span>Variabilné náklady</span>
                         <br/>
                         <span className="polozka-1">PPC</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Slovnaft</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Cogen West</span>
                       </div> }
                       popoverId={'nt_nnt_vn_spolu_pop'}
                       cellsId={['nt_nnt_vn_ppc', 'nt_nnt_vn_slo', 'nt_nnt_vn_cw']}
                       placement={'right'}
                       decimal={decimal}
                       unit={'€'}
                       class={nt_nnt_vn_spolu}
              />
            </tr>
            <tr>
              <td className="text-left">Fixné náklady <Jednotka unit={'€'} /></td>
              <Vstup {...vstup_fn} val={fn.ppc} col={'ppc'} class={nt_nnt_fn_ppc} unit={'€'} />
              <Vstup {...vstup_fn} val={fn.slovnaft} col={'slovnaft'} class={nt_nnt_fn_slo} unit={'€'} />
              <Vstup {...vstup_fn} val={fn.cw} col={'cw'} class={nt_nnt_fn_cw} unit={'€'} />
              <Vypocet value={ fn.spolu }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={fn.ppc} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={fn.slovnaft} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={fn.cw} />
                       </div> }
                       popis={ <div>
                         <span>Fixné náklady</span>
                         <br/>
                         <span className="polozka-1">PPC</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Slovnaft</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">Cogen West</span>
                       </div> }
                       popoverId={'nt_nnt_fn_spolu_pop'}
                       cellsId={['nt_nnt_fn_ppc', 'nt_nnt_fn_slo', 'nt_nnt_fn_cw']}
                       placement={'right'}
                       decimal={decimal}
                       unit={'€'}
                       class={nt_nnt_fn_spolu}
              />
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-left">Náklady na nakupované teplo spolu <Jednotka unit={'€'} /></th>
              <Vypocet value={ nnts.ppc }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vn.ppc} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={fn.ppc} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Variabilné náklady PPC</span>
                         <br/>+<br/>
                         <span className="polozka-2">Fixné náklady PPC</span>
                       </div> }
                       popoverId={'nt_nnt_nnts_ppc_pop'}
                       cellsId={['nt_nnt_vn_ppc', 'nt_nnt_fn_ppc']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={nt_nnt_nnts_ppc}
              />
              <Vypocet value={ nnts.slovnaft }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vn.slovnaft} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={fn.slovnaft} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Variabilné náklady Slovnaft</span>
                         <br/>+<br/>
                         <span className="polozka-2">Fixné náklady Slovnaft</span>
                       </div> }
                       popoverId={'nt_nnt_nnts_slo_pop'}
                       cellsId={['nt_nnt_vn_slo', 'nt_nnt_fn_slo']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={nt_nnt_nnts_slo}
              />
              <Vypocet value={ nnts.cw }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vn.cw} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={fn.cw} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Variabilné náklady Cogen West</span>
                         <br/>+<br/>
                         <span className="polozka-2">Fixné náklady Cogen West</span>
                       </div> }
                       popoverId={'nt_nnt_nnts_cw_pop'}
                       cellsId={['nt_nnt_vn_cw', 'nt_nnt_fn_cw']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={nt_nnt_nnts_cw}
              />
              <Vypocet value={ nnts.spolu }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vn.spolu} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={fn.spolu} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Variabilné náklady spolu</span>
                         <br/>+<br/>
                         <span className="polozka-2">Fixné náklady spolu</span>
                       </div> }
                       popoverId={'nt_nnt_nnts_spolu_pop'}
                       cellsId={['nt_nnt_vn_spolu', 'nt_nnt_fn_spolu']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={nt_nnt_nnts_spolu}
              />
            </tr>
            </tbody>
          </Table>

          <Alert color={'primary'}>
            <FontAwesome name={'info-circle'} />&nbsp;
            Variabilné a fixné náklady je potrebné zadať z vyúčtovacej faktúry.
          </Alert>

        </CardBody>
        <CardFooter>
          <DecimalScale id={'ntnnt'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  nt: state.nakuptepla
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e, table, hlavny) => dispatch(updateNakupTeplaRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NakladyNaNakupTepla)