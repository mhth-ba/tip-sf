import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Card, CardHeader, CardBody, CardFooter
} from 'reactstrap'

import FontAwesome from 'react-fontawesome'
import NumberFormat from 'react-number-format'
import DecimalScale from '../helpers/DecimalScale'
import Jednotka from '../../../../components/Jednotka'
import Vstup from '../helpers/Vstup'

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

class OcakavaneNakladyNakupTepla extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const nt = this.props.nt

    const decimal = this.props.nastroje.decimal_nt

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      dnt,      // dodavka nakupeneho tepla
      rp,       // regulacny prikon
      vzc,      // variabilna zlozka ceny
      fzc,      // fixna zlozka ceny
      pjc,      // priemerna jednotkova cena
      vn,       // variabilne naklady
      fn,       // fixne naklady
      nnts      // naklady na nakupovane teplo spolu
    } = nt

    const vstup = {
      table: 'nt',
      sqlt: 'VCT_NakupTepla',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update
    }

    const vstup_dnt = { id: dnt.id, row: 'dnt', ...vstup }
    const vstup_rp = { id: rp.id, row: 'rp', ...vstup }
    const vstup_vzc = { id: vzc.id, row: 'vzc', ...vstup }
    const vstup_fzc = { id: fzc.id, row: 'fzc', ...vstup }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Očakávané náklady na nákup tepla</CardHeader>
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
              <Vstup {...vstup_dnt} val={dnt.ppc} col={'ppc'} unit={'kWh'} />
              <Vstup {...vstup_dnt} val={dnt.slovnaft} col={'slovnaft'} unit={'kWh'} />
              <Vstup {...vstup_dnt} val={dnt.cw} col={'cw'} unit={'kWh'} />
              <td><NumberFormat {...numFormat} value={dnt.spolu} /> kWh</td>
            </tr>
            <tr>
              <td className="text-left">Regulačný príkon <Jednotka unit={'kW'} /></td>
              <Vstup {...vstup_rp} val={rp.ppc} col={'ppc'} unit={'kW'} />
              <Vstup {...vstup_rp} val={rp.slovnaft} col={'slovnaft'} unit={'kW'} />
              <Vstup {...vstup_rp} val={rp.cw} col={'cw'} unit={'kW'} />
              <td><NumberFormat {...numFormat} value={rp.spolu} /> kW</td>
            </tr>
            <tr>
              <td className="text-left">Variabilná zložka ceny <Jednotka unit={'€/kWh'} /></td>
              <Vstup {...vstup_vzc} val={vzc.ppc} col={'ppc'} dec={4} unit={'€/kWh'} />
              <Vstup {...vstup_vzc} val={vzc.slovnaft} col={'slovnaft'} dec={4} unit={'€/kWh'} />
              <Vstup {...vstup_vzc} val={vzc.cw} col={'cw'} dec={4} unit={'€/kWh'} />
              <td><NumberFormat {...numFormat} value={vzc.spolu} decimalScale={4} /> €/kWh</td>
            </tr>
            <tr>
              <td className="text-left">Fixná zložka ceny <Jednotka unit={'€/kW'} /></td>
              <Vstup {...vstup_fzc} val={fzc.ppc} col={'ppc'} dec={4} unit={'€/kW'} />
              <Vstup {...vstup_fzc} val={fzc.slovnaft} col={'slovnaft'} dec={4} unit={'€/kW'} />
              <Vstup {...vstup_fzc} val={fzc.cw} col={'cw'} dec={4} unit={'€/kW'} />
              <td><NumberFormat {...numFormat} value={fzc.spolu} decimalScale={4} /> €/kWh</td>
            </tr>
            <tr>
              <td className="text-left">Priemerná jednotková cena <Jednotka unit={'€/kWh'} /></td>
              <td><NumberFormat {...numFormat} value={pjc.ppc} decimalScale={4} /> €/kWh</td>
              <td><NumberFormat {...numFormat} value={pjc.slovnaft} decimalScale={4} /> €/kWh</td>
              <td><NumberFormat {...numFormat} value={pjc.cw} decimalScale={4} /> €/kWh</td>
              <td><NumberFormat {...numFormat} value={pjc.spolu} decimalScale={4} /> €/kWh</td>
            </tr>
            <tr>
              <td className="text-left">Variabilné náklady <Jednotka unit={'€'} /></td>
              <td><NumberFormat {...numFormat} value={vn.ppc} /> €</td>
              <td><NumberFormat {...numFormat} value={vn.slovnaft} /> €</td>
              <td><NumberFormat {...numFormat} value={vn.cw} /> €</td>
              <td><NumberFormat {...numFormat} value={vn.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Fixné náklady <Jednotka unit={'€'} /></td>
              <td><NumberFormat {...numFormat} value={fn.ppc} /> €</td>
              <td><NumberFormat {...numFormat} value={fn.slovnaft} /> €</td>
              <td><NumberFormat {...numFormat} value={fn.cw} /> €</td>
              <td><NumberFormat {...numFormat} value={fn.spolu} /> €</td>
            </tr>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <td className="text-left font-weight-bold">Náklady na nakupované teplo spolu <Jednotka unit={'€'} /></td>
              <td><NumberFormat {...numFormat} value={nnts.ppc} /> €</td>
              <td><NumberFormat {...numFormat} value={nnts.slovnaft} /> €</td>
              <td><NumberFormat {...numFormat} value={nnts.cw} /> €</td>
              <td><NumberFormat {...numFormat} value={nnts.spolu} /> €</td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'nt'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,

  nt: state.nakuptepla,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e, table, hlavny) => dispatch(updateNakupTeplaRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OcakavaneNakladyNakupTepla)