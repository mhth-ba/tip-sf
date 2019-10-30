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

import { updateKonstantyRequest } from '../../actions'

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

class OpravneneNaklady extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const hlavny = this.props.hlavny
    const konstanty = this.props.konstanty
    const on = this.props.on
    const pk = on.pk

    const vypocet = this.props.vypocet

    const decimal = this.props.nastroje.decimal_pbeonnzp

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      kpb  // koeficient palivoveho bonusu
    } = konstanty

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      pb_eonnzp_v_nm, pb_eonnzp_v_jc, pb_eonnzp_v_nn,
      pb_eonnzp_v_sfn, pb_eonnzp_v_pb, pb_eonnzp_v,

      pb_eonnzp_j_nm, pb_eonnzp_j_jc, pb_eonnzp_j_nn,
      pb_eonnzp_j_sfn, pb_eonnzp_j_pb, pb_eonnzp_j,

      pb_eonnzp_z_nm, pb_eonnzp_z_jc, pb_eonnzp_z_nn,
      pb_eonnzp_z_sfn, pb_eonnzp_z_pb, pb_eonnzp_z,

      pb_kpb
    } = vypocet

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Ekonomicky oprávnené náklady na nákup zemného plynu</CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th></th>
              <th colSpan={4}>Zemný plyn</th>
              <th></th>
              <th></th>
            </tr>
            <tr className="text-center">
              <th></th>
              <th>Normatívne množstvo</th>
              <th>Jednotková cena</th>
              <th>Normatívne náklady</th>
              <th>Skutočné fakturované náklady</th>
              <th>Palivový bonus</th>
              <th>Ekonomicky oprávnené náklady na zemný plyn</th>
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
            <tr className="text-muted small">
              <td className="text-left">Výrobňa</td>
              <td>(A) [MWh]</td>
              <td>(B) [€/MWh]</td>
              <td>(C) = A × B [€]</td>
              <td>(D) (dotiahnuté z FZP, kľúčované) [€]</td>
              <td>(E) = C - D [€]</td>
              <td>(F) = D + E × k (koeficient bonusu) [€]</td>
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
            <tr className="text-nowrap">
              <td className="text-left">Tepláreň Východ</td>
              <td className={pb_eonnzp_v_nm}><NumberFormat {...numFormat} value={on.tpv.nm} /> MWh</td>
              <td className={pb_eonnzp_v_jc}><NumberFormat {...numFormat} value={on.tpv.jc} decimalScale={4} /> €/MWh</td>
              <Vypocet value={ on.tpv.nn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={on.tpv.nm} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={on.tpv.jc} decimalScale={3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Normatívne množstvo</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena</span>
                       </div> }
                       cellsId={['pb_eonnzp_v_nm', 'pb_eonnzp_v_jc']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={pb_eonnzp_v_nn}
              />
              <td className={pb_eonnzp_v_sfn}><NumberFormat {...numFormat} value={on.tpv.sfn} /> €</td>
              <Vypocet value={ on.tpv.pb }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={on.tpv.nn} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={on.tpv.sfn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Normatívne náklady</span>
                         &nbsp;-&nbsp;
                         <span className="polozka-2">Skutočné fakturované náklady</span>
                       </div> }
                       cellsId={['pb_eonnzp_v_nn', 'pb_eonnzp_v_sfn']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={pb_eonnzp_v_pb}
              />
              <Vypocet value={ on.tpv.eonzp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={on.tpv.sfn} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={on.tpv.pb} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={kpb.hodnota} decimalScale={3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Skutočné fakturované náklady</span>
                         <br/>+&nbsp;
                         <span className="polozka-2">Palivový bonus</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-3">Koeficient palivového bonusu</span>
                       </div> }
                       cellsId={['pb_eonnzp_v_sfn', 'pb_eonnzp_v_pb', 'pb_kpb']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={pb_eonnzp_v}
              />
            </tr>
            <tr>
              <td className="text-left">Výhrevňa Juh</td>
              <td className={pb_eonnzp_j_nm}><NumberFormat {...numFormat} value={on.vhj.nm} /> MWh</td>
              <td className={pb_eonnzp_j_jc}><NumberFormat {...numFormat} value={on.vhj.jc} decimalScale={4} /> €/MWh</td>
              <Vypocet value={ on.vhj.nn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={on.vhj.nm} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={on.vhj.jc} decimalScale={3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Normatívne množstvo</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena</span>
                       </div> }
                       cellsId={['pb_eonnzp_j_nm', 'pb_eonnzp_j_jc']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={pb_eonnzp_j_nn}
              />
              <td className={pb_eonnzp_j_sfn}><NumberFormat {...numFormat} value={on.vhj.sfn} /> €</td>
              <Vypocet value={ on.vhj.pb }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={on.vhj.nn} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={on.vhj.sfn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Normatívne náklady</span>
                         &nbsp;-&nbsp;
                         <span className="polozka-2">Skutočné fakturované náklady</span>
                       </div> }
                       cellsId={['pb_eonnzp_j_nn', 'pb_eonnzp_j_sfn']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={pb_eonnzp_j_pb}
              />
              <Vypocet value={ on.vhj.eonzp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={on.vhj.sfn} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={on.vhj.pb} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={kpb.hodnota} decimalScale={3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Skutočné fakturované náklady</span>
                         <br/>+&nbsp;
                         <span className="polozka-2">Palivový bonus</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-3">Koeficient palivového bonusu</span>
                       </div> }
                       cellsId={['pb_eonnzp_j_sfn', 'pb_eonnzp_j_pb', 'pb_kpb']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={pb_eonnzp_j}
              />
            </tr>
            <tr>
              <td className="text-left">Tepláreň Západ</td>
              <td className={pb_eonnzp_z_nm}><NumberFormat {...numFormat} value={on.tpz.nm} /> MWh</td>
              <td className={pb_eonnzp_z_jc}><NumberFormat {...numFormat} value={on.tpz.jc} decimalScale={4} /> €/MWh</td>
              <Vypocet value={ on.tpz.nn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={on.tpz.nm} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={on.tpz.jc} decimalScale={3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Normatívne množstvo</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-2">Jednotková cena</span>
                       </div> }
                       cellsId={['pb_eonnzp_z_nm', 'pb_eonnzp_z_jc']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={pb_eonnzp_z_nn}
              />
              <td className={pb_eonnzp_z_sfn}><NumberFormat {...numFormat} value={on.tpz.sfn} /> €</td>
              <Vypocet value={ on.tpz.pb }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={on.tpz.nn} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...vypocetFormat} value={on.tpz.sfn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Normatívne náklady</span>
                         &nbsp;-&nbsp;
                         <span className="polozka-2">Skutočné fakturované náklady</span>
                       </div> }
                       cellsId={['pb_eonnzp_z_nn', 'pb_eonnzp_z_sfn']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={pb_eonnzp_z_pb}
              />
              <Vypocet value={ on.tpz.eonzp }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={on.tpz.sfn} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={on.tpz.pb} />
                         &nbsp;×&nbsp;
                         <NumberFormat {...vypocetFormat} value={kpb.hodnota} decimalScale={3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Skutočné fakturované náklady</span>
                         <br/>+&nbsp;
                         <span className="polozka-2">Palivový bonus</span>
                         &nbsp;×&nbsp;
                         <span className="polozka-3">Koeficient palivového bonusu</span>
                       </div> }
                       cellsId={['pb_eonnzp_z_sfn', 'pb_eonnzp_z_pb', 'pb_kpb']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'€'}
                       class={pb_eonnzp_z}
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
            {
              pk.map( (d, x) => (
                <tr key={x}>
                  <td className="text-nowrap text-left">{d['kotolna']}</td>
                  <td className={''}><NumberFormat {...numFormat} value={d.nmzp_mwh} /> MWh</td>
                  <td className={''}><NumberFormat {...numFormat} value={d.jczp} decimalScale={4} /> €/MWh</td>
                  <td className={''}><NumberFormat {...numFormat} value={d.nn} /> €</td>
                  <td className={''}><NumberFormat {...numFormat} value={d.sfn} /> €</td>
                  <td className={''}><NumberFormat {...numFormat} value={d.pb} /> €</td>
                  <td className={''}><NumberFormat {...numFormat} value={d.eon} /> €</td>
                </tr>
              ))
            }
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr className="text-nowrap">
              <th className="text-left">Spolu</th>
              <th><NumberFormat {...numFormat} value={on.sumar.nm} /> MWh</th>
              <th></th>
              <th><NumberFormat {...numFormat} value={on.sumar.nn} /> €</th>
              <th><NumberFormat {...numFormat} value={on.sumar.sfn} /> €</th>
              <th><NumberFormat {...numFormat} value={on.sumar.pb} /> €</th>
              <th><NumberFormat {...numFormat} value={on.sumar.eonzp} /> €</th>
            </tr>
            </tbody>
          </Table>

          <br/>

          <Table style={{width: '280px'}}>
            <tbody>
            <tr>
              <th>Koeficient palivového bonusu</th>
              <Vstup id={kpb.id} val={kpb.hodnota} row={'kpb'} col={'hodnota'} dec={3} sqlt={'SCT_Konstanty'}
                     hlavny={hlavny.id} update={this.props.update} class={pb_kpb} />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'pbeonnzp'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  konstanty: state.konstanty,

  on: state.opravnenenaklady
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e, table, hlavny) => dispatch(updateKonstantyRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpravneneNaklady)