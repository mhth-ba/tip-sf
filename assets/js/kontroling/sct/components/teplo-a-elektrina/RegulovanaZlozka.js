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

import { updateRegulovanaZlozkaRequest } from '../../actions'

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

class RegulovanaZlozka extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const sn = this.props.sn
    const rz = this.props.rz
    const vypocet = this.props.vypocet
    const decimal = this.props.nastroje.decimal_snterzfn

    numF = {
      ...numF,
      decimalScale: Number(decimal)
    }

    const {
      prikon,
      do_limitu,
      nad_limit,
      zaklad,
      priplatok,

      kdkwnl,
      rzfn,
      pz,

      rzfnapz,
      fnpz
    } = rz

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      snte_rzfn_rp, snte_rzfn_dl, snte_rzfn_nl, snte_rzfn_kdkwnl,
      snte_rzfn_rzfn, snte_rzfn_zaklad, snte_rzfn_priplatok, snte_rzfn_pz,
      snte_rzfn_rzfnapz, snte_rzfn_fnpz
    } = vypocet

    const vstup = {
      table: 'rz',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update,
      id: rz.id
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Regulovaná zložka fixných nákladov a primeraný zisk</CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th></th>
              <th>Suma</th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <th>{''}</th>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-nowrap text-left">Regulačný príkon</th>
              <Vstup {...vstup} val={prikon} col={'prikon'} unit={'kW'} dec={4} class={snte_rzfn_rp + ' font-weight-bold'} />
            </tr>
            <tr>
              <td className="text-nowrap text-left">RZFN do 21 000 kW</td>
              <Vstup {...vstup} val={do_limitu} col={'do_limitu'} dec={4} unit={'€'} class={snte_rzfn_dl} />
            </tr>
            <tr>
              <td className="text-nowrap text-left">RZFN nad 21 000 kW (konštanta)</td>
              <Vstup {...vstup} val={nad_limit} col={'nad_limit'} dec={4} unit={'€'} class={snte_rzfn_nl} />
            </tr>
            <tr>
              <td className="text-nowrap text-left">RZFN nad 21 000 kW</td>
              <Vypocet value={ kdkwnl }
                       cisla={ <div>
                         (<NumberFormat {...numF} value={prikon} />
                         &nbsp;-&nbsp;
                         <NumberFormat {...numF} value={21000} />)
                         &nbsp;×&nbsp;
                         <NumberFormat {...numF} value={nad_limit} />
                       </div> }
                       popis={ <div>
                         (<span className="polozka-1 text-nowrap">Regulačný príkon</span>
                         &nbsp;-&nbsp;
                         <span className="text-nowrap">21 000 kW</span>)
                         <br/>×<br/>
                         <span className="polozka-2 text-nowrap">RZFN nad 21 000 kW (konštanta)</span>
                       </div> }
                       cellsId={['snte_rzfn_rp', 'snte_rzfn_nl']}
                       placement={'right'}
                       decimal={decimal}
                       unit={'€'}
                       class={snte_rzfn_kdkwnl}
              />
            </tr>
            <tr>
              <th className="text-nowrap text-left">Regulovaná zložka fixných nákladov</th>
              <Vypocet value={ rzfn }
                       cisla={ <div>
                         <NumberFormat {...numF} value={do_limitu} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...numF} value={kdkwnl} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">RZFN do 21 000 kW</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">RZFN nad 21 000 kW</span>
                       </div> }
                       cellsId={['snte_rzfn_dl', 'snte_rzfn_kdkwnl']}
                       placement={'right'}
                       decimal={decimal}
                       unit={'€'}
                       class={snte_rzfn_rzfn + ' font-weight-bold'}
              />
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-nowrap text-left">Základná výška za 1 kW regulačného príkonu</td>
              <Vstup {...vstup} val={zaklad} col={'zaklad'} unit={'€'} dec={4} class={snte_rzfn_zaklad} />
            </tr>
            <tr>
              <td className="text-nowrap text-left">Príplatok</td>
              <Vstup {...vstup} val={priplatok} col={'priplatok'} unit={'€'} dec={4} class={snte_rzfn_priplatok} />
            </tr>
            <tr>
              <th className="text-nowrap text-left">Primeraný zisk</th>
              <Vypocet value={ pz }
                       cisla={ <div>
                         <NumberFormat {...numF} value={prikon} />
                         &nbsp;×&nbsp;
                         (<NumberFormat {...numF} value={zaklad} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...numF} value={priplatok} />)
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Regulačný príkon</span>
                         <br/>×<br/>
                         (<span className="polozka-2 text-nowrap">Základ za 1 kW príkonu</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3 text-nowrap">Príplatok</span>)
                       </div> }
                       cellsId={['snte_rzfn_rp', 'snte_rzfn_zaklad', 'snte_rzfn_priplatok']}
                       placement={'right'}
                       decimal={decimal}
                       unit={'€'}
                       class={snte_rzfn_pz + ' font-weight-bold'}
              />
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="text-nowrap text-left">Regulovaná zložka fixných nákladov a primeraný zisk spolu</th>
              <Vypocet value={ rzfnapz }
                       cisla={ <div>
                         <NumberFormat {...numF} value={rzfn} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...numF} value={pz} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Regulovaná zložka fixných nákladov</span>
                         <br/>+&nbsp;
                         <span className="polozka-2 text-nowrap">Primeraný zisk</span>
                       </div> }
                       cellsId={['snte_rzfn_rzfn', 'snte_rzfn_pz']}
                       placement={'right'}
                       decimal={decimal}
                       unit={'€'}
                       class={snte_rzfn_rzfnapz + ' font-weight-bold'}
              />
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="text-nowrap text-left">Fixné náklady a primeraný zisk spolu</th>
              <Vypocet value={ fnpz }
                       cisla={ <div>
                         <NumberFormat {...numF} value={sn.fn.spolu} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...numF} value={pz} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Fixné náklady</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Primeraný zisk</span>
                       </div> }
                       cellsId={['snte_sn_fn', 'snte_rzfn_pz']}
                       placement={'right'}
                       decimal={decimal}
                       unit={'€'}
                       class={snte_rzfn_fnpz + ' font-weight-bold'}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'snterzfn'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  sn: state.skutocnenaklady,
  rz: state.regulovanazlozka
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  update: (e, table, hlavny) => dispatch(updateRegulovanaZlozkaRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegulovanaZlozka)