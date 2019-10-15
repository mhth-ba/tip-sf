import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText,
  Input, Label, UncontrolledTooltip
} from 'reactstrap'
import NumberFormat from 'react-number-format'

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
  decimalScale: 0,
  className: 'text-nowrap'
}

class VyrobaTepla extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const vyrobatepla = this.props.vyrobatepla
    const vypocet = this.props.vypocet

    const decimal = this.props.nastroje.decimal_vtpz

    numFormat = { // format cisla v bunke
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = { // format cisla v bubline vypoctu
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      tpv,      // teplaren vychod
      vhj,      // vyhrevna juh
      tpz,      // teplaren zapad
      pk,       // plynove kotolne
      vlastne,  // vlastne zdroje (sum)
      ppc,      // paroplynovy cyklus
      slovnaft, // slovnaft
      cw,       // cogen west
      externe,  // externe zdroje (sum)
      spolu     // spolu: vlastne + externe (total)
    } = vyrobatepla

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      vtpz_tpv_kwh, // (v)yroba (t)epla (p)odla (z)drojov
      vtpz_tpv_gj,
      vtpz_vhj_kwh,
      vtpz_vhj_gj,
      vtpz_tpz_kwh,
      vtpz_tpz_gj,
      vtpz_pk_kwh,
      vtpz_pk_gj,
      vtpz_vz_kwh,
      vtpz_vz_gj,
      vtpz_ppc_kwh,
      vtpz_ppc_gj,
      vtpz_slo_kwh,
      vtpz_slo_gj,
      vtpz_cw_kwh,
      vtpz_cw_gj,
      vtpz_ez_kwh,
      vtpz_ez_gj,
      vtpz_s_kwh,
      vtpz_s_gj
    } = vypocet

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Výroba tepla podľa zdrojov</CardHeader>
        <CardBody>
          {/*<CardTitle>Title</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
          <br/>*/}
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th>{''}</th>
              <th>kWh</th>
              <th id={'vtpz-gj'}>GJ</th>
              <UncontrolledTooltip target={'vtpz-gj'}>Hodnota v kWh × 0,0036</UncontrolledTooltip>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <td className="text-left">Tepláreň Východ</td>
              <td className={vtpz_tpv_kwh}><NumberFormat {...numFormat} value={tpv.kwh} /> kWh</td>
              <td className={vtpz_tpv_gj}><NumberFormat {...numFormat} value={tpv.gj} /> GJ</td>
            </tr>
            <tr>
              <td className="text-left">Výhrevňa Juh</td>
              <td className={vtpz_vhj_kwh}><NumberFormat {...numFormat} value={vhj.kwh} /> kWh</td>
              <td className={vtpz_vhj_gj}><NumberFormat {...numFormat} value={vhj.gj} /> GJ</td>
            </tr>
            <tr>
              <td className="text-left">Tepláreň Západ</td>
              <td className={vtpz_tpz_kwh}><NumberFormat {...numFormat} value={tpz.kwh} /> kWh</td>
              <td className={vtpz_tpz_gj}><NumberFormat {...numFormat} value={tpz.gj} /> GJ</td>
            </tr>
            <tr>
              <td className="text-left">Plynové kotolne</td>
              <td className={vtpz_pk_kwh}><NumberFormat {...numFormat} value={pk.kwh} /> kWh</td>
              <td className={vtpz_pk_gj}><NumberFormat {...numFormat} value={pk.gj} /> GJ</td>
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-left">Vlastné zdroje</th>
              <Vypocet value={vlastne.kwh}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={tpv.kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vhj.kwh} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={tpz.kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">VhJ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3 text-nowrap">TpZ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Plynové kotolne</span>
                       </div> }
                       popoverId={'vtpz_vz_kwh_pop'}
                       cellsId={['vtpz_tpv_kwh', 'vtpz_vhj_kwh', 'vtpz_tpz_kwh', 'vtpz_pk_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={vtpz_vz_kwh + ' font-weight-bold'}
              />
              <Vypocet value={vlastne.gj}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={tpv.gj} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vhj.gj} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={tpz.gj} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={pk.b_gj} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">VhJ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3 text-nowrap">TpZ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Plynové kotolne</span>
                       </div> }
                       popoverId={'vtpz_vz_gj_pop'}
                       cellsId={['vtpz_tpv_gj', 'vtpz_vhj_gj', 'vtpz_tpz_gj', 'vtpz_pk_gj']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'GJ'}
                       class={vtpz_vz_gj + ' font-weight-bold'}
              />
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <td className="text-left">PPC</td>
              <td className={vtpz_ppc_kwh}><NumberFormat {...numFormat} value={ppc.kwh} /> kWh</td>
              <td className={vtpz_ppc_gj}><NumberFormat {...numFormat} value={ppc.gj} /> GJ</td>
            </tr>
            <tr>
              <td className="text-left">Slovnaft</td>
              <td className={vtpz_slo_kwh}><NumberFormat {...numFormat} value={slovnaft.kwh} /> kWh</td>
              <td className={vtpz_slo_gj}><NumberFormat {...numFormat} value={slovnaft.gj} /> GJ</td>
            </tr>
            <tr>
              <td className="text-left">Cogen West</td>
              <td className={vtpz_cw_kwh}><NumberFormat {...numFormat} value={cw.kwh} /> kWh</td>
              <td className={vtpz_cw_gj}><NumberFormat {...numFormat} value={cw.gj} /> GJ</td>
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-left">Externé zdroje</th>
              <Vypocet value={externe.kwh}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={ppc.kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={slovnaft.kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={cw.kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">PPC</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Slovnaft</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3 text-nowrap">Cogen West</span>
                       </div> }
                       popoverId={'vtpz_ez_kwh_pop'}
                       cellsId={['vtpz_ppc_kwh', 'vtpz_slo_kwh', 'vtpz_cw_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={vtpz_ez_kwh + ' font-weight-bold'}
              />
              <Vypocet value={externe.gj}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={ppc.gj} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={slovnaft.gj} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={cw.gj} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">PPC</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Slovnaft</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3 text-nowrap">Cogen West</span>
                       </div> }
                       popoverId={'vtpz_ez_gj_pop'}
                       cellsId={['vtpz_ppc_gj', 'vtpz_slo_gj', 'vtpz_cw_gj']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'GJ'}
                       class={vtpz_ez_gj + ' font-weight-bold'}
              />
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-left">Spolu (vlastné + externé)</th>
              <Vypocet value={spolu.kwh}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vlastne.kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={externe.kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Vlastné zdroje</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Externé zdroje</span>
                       </div> }
                       popoverId={'vtpz_s_kwh_pop'}
                       cellsId={['vtpz_vz_kwh', 'vtpz_ez_kwh']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={vtpz_s_kwh + ' font-weight-bold'}
              />
              <Vypocet value={spolu.gj}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vlastne.gj} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={externe.gj} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Vlastné zdroje</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Externé zdroje</span>
                       </div> }
                       popoverId={'vtpz_s_gj_pop'}
                       cellsId={['vtpz_vz_gj', 'vtpz_ez_gj']}
                       placement={'bottom'}
                       decimal={decimal}
                       unit={'GJ'}
                       class={vtpz_s_gj + ' font-weight-bold'}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'vtpz'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet,
  vyrobatepla: state.vyrobatepla
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VyrobaTepla)