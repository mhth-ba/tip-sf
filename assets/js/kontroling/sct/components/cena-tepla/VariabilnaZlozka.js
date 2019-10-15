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

class VariabilnaZlozka extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const ct = this.props.ct
    const vypocet = this.props.vypocet
    const decimal = this.props.nastroje.decimal_ctvz

    numF = {
      ...numF,
      decimalScale: Number(decimal)
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Variabilná zložka ceny tepla</CardHeader>
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
              <td className="text-left">Zemný plyn</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.zp.nnv} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.zp.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Ťažký vykurovací olej</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.tvo.nnv} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.tvo.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Nakupované teplo (variabilná zložka)</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ntvz.nnv} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ntvz.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Elektrická energia</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ee.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ee.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ee.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ee.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.ee.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Voda</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.voda.nnv} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              {/*<td className="text-nowrap"><NumberFormat {...numF} value={ct.voda.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.voda.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.voda.sek} /> €</td>*/}
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.voda.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Technologické hmoty</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.th.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.th.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.th.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.th.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.th.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Nákup emisných kvót a poplatky za znečistenie</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.nekpz.nnv} /> €</td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.nekpz.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Variabilné náklady v cene tepla</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.vnct.nnv} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.vnct.pri} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.vnct.ost} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.vnct.sek} /> €</td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.vnct.spolu} /> €</td>
            </tr>
            <tr>
              <td className="text-left">Dodané množstvo tepla</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-nowrap"><NumberFormat {...numF} value={ct.omt} /> kWh</td>
            </tr>
            <tr>
              <th>{''}</th>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr className="bg-lightorange">
              <th className="text-nowrap text-left">Variabilná zložka ceny tepla bez DPH</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th className="text-nowrap"><NumberFormat {...numF} value={ct.vzct} decimalScale={4} /> €/kWh</th>
            </tr>
            </tbody>
          </Table>

          <Alert color={'warning'}>
            <FontAwesome name={'info-circle'} />&nbsp;
            Do variabilnej zložky ceny tepla <strong>nevstupujú</strong> réžijné náklady.
          </Alert>

          <Alert color={'warning'}>
            <FontAwesome name={'info-circle'} />&nbsp;
            Do variabilnej zložky ceny tepla <strong>nevstupujú</strong> náklady na vodu
            v rámci nákladov na distribúciu.
          </Alert>

        </CardBody>
        <CardFooter>
          <DecimalScale id={'ctvz'} />
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
)(VariabilnaZlozka)