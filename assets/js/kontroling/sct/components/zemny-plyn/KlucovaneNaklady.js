import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Card, CardHeader, CardBody, CardFooter, UncontrolledTooltip, Alert
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import NumberFormat from 'react-number-format'

import Jednotka from '../../../../components/Jednotka'
import DecimalScale from '../helpers/DecimalScale'
import ZlomkovaCiara from '../../../../components/ZlomkovaCiara'
import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'

import { updateZemnyPlynKlucovanieRequest } from '../../actions'

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

class KlucovaneNaklady extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const zpk = this.props.zpk
    const vypocet = this.props.vypocet

    const dn = this.props.dn

    const decimal = this.props.nastroje.decimal_fzpkn

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      kvet_tpv,        // zemny plyn spotrebovany na KVET na TpV
      bez_kvet_tpv,    // zemny plyn spotrebovany bez KVET na TpV
      kvet_tpz,        // zemny plyn spotrebovany na KVET na TpZ
      bez_kvet_tpz,    // zemny plyn spotrebovany bez KVET na TpZ
      vhj,
      pk,
      kfn_spolu
    } = zpk

    const {
      vtdt
    } = dn

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      dnem_vtdt_k,    // klucovanie

      fzp_kfn_kvet_tpv_suma, fzp_kfn_kvet_tpv_kfn,
      fzp_kfn_bez_kvet_tpv_suma, fzp_kfn_bez_kvet_tpv_kfn,
      fzp_kfn_kvet_tpz_suma, fzp_kfn_kvet_tpz_kfn,
      fzp_kfn_bez_kvet_tpz_suma, fzp_kfn_bez_kvet_tpz_kfn,
      fzp_kfn_vhj_fn, fzp_kfn_vhj_kfn,
      fzp_kfn_pk_fn, fzp_kfn_pk_kfn,
      fzp_kfn_spolu_fn, fzp_kfn_spolu_kfn
    } = vypocet

    const vstup = {
      //table: 'zpk',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Kľúčované fakturované náklady na zemný plyn</CardHeader>
        <CardBody>
          <Table size={'sm'} bordered>
            <thead>
            <tr className="text-center">
              <th></th>
              <th>Fakturované náklady</th>
              <th>Kľúčované fakturované náklady</th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <td className="text-left">Zemný plyn spotrebovaný na KVET na TpV</td>
              <Vstup {...vstup} id={kvet_tpv.id} val={kvet_tpv.suma} row={'kvet_tpv'} col={'suma'} unit={'€'}
                     class={fzp_kfn_kvet_tpv_suma}
              />
              <Vypocet value={ kvet_tpv.kfn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vtdt.klucovanie * 100} decimalScale={2} />&nbsp;%
                         &nbsp;z&nbsp;
                         <NumberFormat {...vypocetFormat} value={kvet_tpv.suma} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zemný plyn TpV<br/>(kombinovaná výroba elektriny a tepla)</span>
                         <br/>
                         &nbsp;×&nbsp;
                         <br/>
                         <span className="polozka-2 text-nowrap">Kľúčovanie (využiteľné teplo na dodávku tepla)</span>
                       </div> }
                       cellsId={['fzp_kfn_kvet_tpv_suma', 'dnem_vtdt_k']}
                       placement={'right'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_kvet_tpv_kfn}
              />
            </tr>
            <tr>
              <td className="text-left">Zemný plyn spotrebovaný bez KVET na TpV</td>
              <Vstup {...vstup} id={bez_kvet_tpv.id} val={bez_kvet_tpv.suma} row={'bez_kvet_tpv'} col={'suma'} unit={'€'}
                     class={fzp_kfn_bez_kvet_tpv_suma}
              />
              <Vypocet value={ bez_kvet_tpv.kfn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={bez_kvet_tpv.suma} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zemný plyn TpV<br/>(bez kombinovanej výroby elektriny a tepla)</span>
                       </div> }
                       cellsId={['fzp_kfn_bez_kvet_tpv_suma']}
                       placement={'right'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_bez_kvet_tpv_kfn}
              />
            </tr>
            <tr>
              <td className="text-left">Zemný plyn spotrebovaný na KVET na TpZ</td>
              <Vstup {...vstup} id={kvet_tpz.id} val={kvet_tpz.suma} row={'kvet_tpz'} col={'suma'} unit={'€'}
                     class={fzp_kfn_kvet_tpz_suma}
              />
              <Vypocet value={ kvet_tpz.kfn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vtdt.klucovanie * 100} decimalScale={2} />&nbsp;%
                         &nbsp;z&nbsp;
                         <NumberFormat {...vypocetFormat} value={kvet_tpz.suma} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zemný plyn TpZ<br/>(kombinovaná výroba elektriny a tepla)</span>
                         <br/>
                         &nbsp;×&nbsp;
                         <br/>
                         <span className="polozka-2 text-nowrap">Kľúčovanie (využiteľné teplo na dodávku tepla)</span>
                       </div> }
                       cellsId={['fzp_kfn_kvet_tpz_suma', 'dnem_vtdt_k']}
                       placement={'right'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_kvet_tpz_kfn}
              />
            </tr>
            <tr>
              <td className="text-left">Zemný plyn spotrebovaný bez KVET na TpZ</td>
              <Vstup {...vstup} id={bez_kvet_tpz.id} val={bez_kvet_tpz.suma} row={'bez_kvet_tpz'} col={'suma'} unit={'€'}
                     class={fzp_kfn_bez_kvet_tpz_suma}
              />
              <Vypocet value={ bez_kvet_tpz.kfn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={bez_kvet_tpz.suma} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Zemný plyn TpZ<br/>(bez kombinovanej výroby elektriny a tepla)</span>
                       </div> }
                       cellsId={['fzp_kfn_bez_kvet_tpz_suma']}
                       placement={'right'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_bez_kvet_tpz_kfn}
              />
            </tr>
            <tr>
              <td className="text-left">Zemný plyn spotrebovaný vo VhJ</td>
              <Vypocet value={ vhj.fn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vhj.fn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Celkové náklady spolu na zemný plyn vo VhJ</span>
                       </div> }
                       cellsId={['fzp_j_spo_ns']}
                       placement={'top'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_vhj_fn}
              />
              <Vypocet value={ vhj.kfn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vhj.kfn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Fakturované náklady VhJ</span>
                         <br/>
                         <span className="text-muted text-nowrap">Vo VhJ sa nevyrába kombinovane</span>
                       </div> }
                       cellsId={['fzp_kfn_vhj_fn']}
                       placement={'right'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_vhj_kfn}
              />
            </tr>
            <tr>
              <td className="text-left">Zemný plyn spotrebovaný v PK</td>
              <Vypocet value={ pk.fn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={pk.fn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Celkové náklady spolu na zemný plyn kotolní</span>
                       </div> }
                       cellsId={['fzp_pk_spo_cnsd']}
                       placement={'top'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_pk_fn}
              />
              <Vypocet value={ pk.kfn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={pk.kfn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Fakturované náklady na plynových kotolniach</span>
                         <br/>
                         <span className="text-muted text-nowrap">V plynových kotolniach sa nevyrába kombinovane</span>
                       </div> }
                       cellsId={['fzp_kfn_pk_fn']}
                       placement={'right'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_pk_kfn}
              />
              {/* 118769.38 */}
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-left">Spolu</th>
              <Vypocet value={ kfn_spolu.fn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={kvet_tpv.suma} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={bez_kvet_tpv.suma} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={kvet_tpz.suma} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={bez_kvet_tpz.suma} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vhj.fn} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.fn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">TpV kombinovaná</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">TpV iba teplo</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">TpZ kombinovaná</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">TpZ iba teplo</span>
                         <br/>+&nbsp;
                         <span className="polozka-5 text-nowrap">VhJ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6 text-nowrap">Plynové kotolne</span>
                       </div> }
                       cellsId={[
                         'fzp_kfn_kvet_tpv_suma', 'fzp_kfn_bez_kvet_tpv_suma',
                         'fzp_kfn_kvet_tpz_suma', 'fzp_kfn_bez_kvet_tpz_suma',
                         'fzp_kfn_vhj_fn', 'fzp_kfn_pk_fn'
                       ]}
                       placement={'bottom'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_spolu_fn + ' font-weight-bold'}
              />
              <Vypocet value={ kfn_spolu.kfn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={kvet_tpv.kfn} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={bez_kvet_tpv.kfn} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={kvet_tpz.kfn} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={bez_kvet_tpz.kfn} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vhj.kfn} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.kfn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">TpV kľúčované</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">TpV iba teplo</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">TpZ kľúčované</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">TpZ iba teplo</span>
                         <br/>+&nbsp;
                         <span className="polozka-5 text-nowrap">VhJ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6 text-nowrap">Plynové kotolne</span>
                       </div> }
                       cellsId={[
                         'fzp_kfn_kvet_tpv_kfn', 'fzp_kfn_bez_kvet_tpv_kfn',
                         'fzp_kfn_kvet_tpz_kfn', 'fzp_kfn_bez_kvet_tpz_kfn',
                         'fzp_kfn_vhj_kfn', 'fzp_kfn_pk_kfn'
                       ]}
                       placement={'bottom'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_kfn_spolu_kfn + ' font-weight-bold'}
              />
              {/* 19 284 882,18 € */}
              {/* 16 296 359,99 € */}
            </tr>
            </tbody>
          </Table>

          <Alert color={'primary'}>
            <FontAwesome name={'info-circle'} />&nbsp;
            Skontrolovať refakturáciu.
          </Alert>

        </CardBody>
        <CardFooter>
          <DecimalScale id={'fzpkn'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet,
  hlavny: state.hlavny,

  dn: state.delenienakladov,
  zpk: state.zemnyplynklucovanie
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e, table, hlavny) => dispatch(updateZemnyPlynKlucovanieRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KlucovaneNaklady)