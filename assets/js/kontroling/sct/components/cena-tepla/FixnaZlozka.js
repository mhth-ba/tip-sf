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

class FixnaZlozka extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const ct = this.props.ct
    const vypocet = this.props.vypocet
    const decimal = this.props.nastroje.decimal_ctfz

    numF = {
      ...numF,
      decimalScale: Number(decimal)
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Fixná zložka ceny tepla</CardHeader>
        <CardBody>
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th rowSpan={2}></th>
              <th rowSpan={2}>Náklady na výrobu</th>
              <th colSpan={3}>Náklady na distribúciu</th>
              <th rowSpan={2}>Spolu</th>
            </tr>
            <tr className="text-center">
              <th>Primárny rozvod</th>
              <th>OST</th>
              <th>Sekundárne rozvody</th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <th>{''}</th>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <td className="text-left">Nakupované teplo (fixná zložka)</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ntfz.nnv} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ntfz.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Poistenie majetku</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.pm.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.pm.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.pm.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.pm.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.pm.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Dane</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.dane.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.dane.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.dane.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.dane.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.dane.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Nájomné</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.najomne.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.najomne.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.najomne.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.najomne.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.najomne.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Revízie, zákonné prehliadky a zákonné poplatky</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.rzpp.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.rzpp.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.rzpp.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.rzpp.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.rzpp.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Náklady na overenie účtovnej závierky audítorom</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.nauz.nnv} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.nauz.spolu} /> €</td>
            </tr>
            <tr>
              <td id={'ctfz-maj'} className="text-left">Odpisy hmotného a nehmotného majetku</td>
              <UncontrolledTooltip target={'ctfz-maj'}>súvisiaceho s výrobou a rozvodom tepla</UncontrolledTooltip>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.odm.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.odm.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.odm.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.odm.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.odm.spolu} /> €</td>
            </tr>
            <tr>
              <td id={'ctfz-zar'} className="text-left">Odpisy a opravy spoločných zariadení</td>
              <UncontrolledTooltip target={'ctfz-zar'}>súvisiacich s výrobou a rozvodom tepla</UncontrolledTooltip>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.oosz.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.oosz.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.oosz.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.oosz.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.oosz.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Opravy a udržiavanie spolu</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ous.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ous.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ous.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ous.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ous.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Úroky z investičného úveru</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.uiu.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.uiu.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.uiu.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.uiu.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.uiu.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Regulovaná zložka fixných nákladov</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.rzfn.nnv} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.rzfn.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Primeraný zisk</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.pz.nnv} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.pz.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Fixné náklady a primeraný zisk v cene tepla</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.fnpz.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.fnpz.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.fnpz.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.fnpz.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.fnpz.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Regulačný príkon</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.rp} /> €</td>
            </tr>
            <tr>
              <th>{''}</th>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr className="bg-lightbluer">
              <th className="text-nowrap text-left">Fixná zložka ceny tepla bez DPH</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th className="text-nowrap"><NumberFormat {...numF} value={ct.fzct} decimalScale={4} /> €</th>
            </tr>
            </tbody>
          </Table>

          <Alert color={'primary'}>
            <FontAwesome name={'info-circle'} />&nbsp;
            Do fixnej zložky ceny tepla <strong>vstupujú</strong> réžijné náklady
            &mdash; sú zahrnuté v stĺpci <strong>náklady na výrobu</strong> a sú kľúčované.
          </Alert>

        </CardBody>
        <CardFooter>
          <DecimalScale id={'ctfz'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  ct: state.cenatepla
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FixnaZlozka)