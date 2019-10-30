import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText,
  Input
} from 'reactstrap'
import NumberFormat from 'react-number-format'

import Jednotka from '../../../../components/Jednotka'
import ZlomkovaCiara from '../../../../components/ZlomkovaCiara'

import DecimalScale from '../helpers/DecimalScale'

import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'

import { updateDelenieNakladovRequest } from '../../actions'

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
  decimalScale: 10,
  className: 'text-nowrap'
}

class DelenieNakladov extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const delenie = this.props.delenie
    const vypocet = this.props.vypocet

    const decimal = this.props.nastroje.decimal_dnem

    numFormat = {
      ...numFormat,
      decimalScale: Number(this.props.nastroje.decimal_dnem)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      vtdt,    // vyuzitelne teplo na dodavku tepla
      tsve     // teplo spotrebovane na vyrobu elektriny
    } = delenie

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      dnem_vtdt_tpv,
      dnem_vtdt_tpz,
      dnem_vtdt_k,
      dnem_tsve_tpv,
      dnem_tsve_tpz,
      dnem_tsve_k
    } = vypocet

    const vstup = {
      //table: 'klucovanie',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Delenie nákladov podľa energetickej metódy</CardHeader>
        <CardBody>
          {/*<CardTitle>Title</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
          <br/>*/}
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center">
              <th>{''}</th>
              <th>TpV <Jednotka unit={'MWh'} /></th>
              <th>TpZ <Jednotka unit={'MWh'} /></th>
              <th>Kľúčovanie <Jednotka unit={'%'} /></th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr>
              <th className="text-left">Využiteľné teplo na dodávku tepla</th>
              <Vstup {...vstup} id={vtdt.id} val={vtdt.tpv} row={'vtdt'} col={'tpv'} unit={'MWh'} class={dnem_vtdt_tpv} />
              <Vstup {...vstup} id={vtdt.id} val={vtdt.tpz} row={'vtdt'} col={'tpz'} unit={'MWh'} class={dnem_vtdt_tpz} />
              <Vypocet value={ vtdt.klucovanie * 100 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vtdt.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vtdt.tpz} />
                         <ZlomkovaCiara width={76}/>
                         <NumberFormat {...vypocetFormat} value={vtdt.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vtdt.tpz} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={tsve.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={tsve.tpz} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Teplo TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Teplo TpZ</span>
                         <ZlomkovaCiara/>
                         &nbsp;<span className="polozka-1 text-nowrap">Teplo TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Teplo  TpZ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3 text-nowrap">Elektrina TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Elektrina TpZ</span>
                       </div> }
                       cellsId={['dnem_vtdt_tpv', 'dnem_vtdt_tpz', 'dnem_tsve_tpv', 'dnem_tsve_tpz']}
                       placement={'top'}
                       unit={'%'}
                       decimal={decimal}
                       class={dnem_vtdt_k}
              />
            </tr>
            <tr>
              <th className="text-left">Teplo spotrebované na výrobu elektriny</th>
              <Vstup  {...vstup} id={tsve.id} val={tsve.tpv} row={'tsve'} col={'tpv'} unit={'MWh'} class={dnem_tsve_tpv} />
              <Vstup  {...vstup} id={tsve.id} val={tsve.tpz} row={'tsve'} col={'tpz'} unit={'MWh'} class={dnem_tsve_tpz} />
              <Vypocet value={ tsve.klucovanie * 100 }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={tsve.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={tsve.tpz} />
                         <ZlomkovaCiara/>
                         <NumberFormat {...vypocetFormat} value={tsve.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={tsve.tpz} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vtdt.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vtdt.tpz} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Elektrina TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Elektrina TpZ</span>
                         <ZlomkovaCiara/>
                         <span className="polozka-1 text-nowrap">Elektrina TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Elektrina  TpZ</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">Teplo TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4 text-nowrap">Teplo TpZ</span>
                       </div> }
                       cellsId={['dnem_tsve_tpv', 'dnem_tsve_tpz', 'dnem_vtdt_tpv', 'dnem_vtdt_tpz']}
                       placement={'top'}
                       unit={'%'}
                       decimal={decimal}
                       class={dnem_tsve_k}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'dnem'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet,
  hlavny: state.hlavny,
  delenie: state.delenienakladov
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  update: (e, table, hlavny) => dispatch(updateDelenieNakladovRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DelenieNakladov)