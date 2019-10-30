import React from 'react'
import { connect } from 'react-redux'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText,
  Input
} from 'reactstrap'
import NumberFormat from 'react-number-format'

import Jednotka from '../../../../components/Jednotka'

import DecimalScale from '../helpers/DecimalScale'

import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'

import { updateVyrobaElektrinyRequest } from '../../actions'

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

class VyrobaElektriny extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const elektrina = this.props.elektrina
    const vypocet = this.props.vypocet

    const decimal = this.props.nastroje.decimal_vee

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const {
      veez,  // vyroba elektrickej energie na zdroji
      dszse, // dodavka do siete ZSE
      dree,  // dodavka regulacnej elektrickej energie
      vsee   // vlastna spotreba elektrickej energie
    } = elektrina

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      vee_veez_tpv,
      vee_veez_tpz,
      vee_veez_bat,
      vee_dszse_tpv,
      vee_dszse_tpz,
      vee_dszse_bat,
      vee_dree_tpv,
      vee_dree_tpz,
      vee_dree_bat,
      vee_vsee_tpv,
      vee_vsee_tpz,
      vee_vsee_bat
    } = vypocet

    const vstup = {
      //table: 've',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Výroba elektrickej energie</CardHeader>
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
              <th>BAT Spolu <Jednotka unit={'MWh'} /></th>
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
              <th className="text-left">Výroba elektrickej energie na zdroji</th>
              <Vstup {...vstup} id={veez.id} val={veez.tpv} row={'veez'} col={'tpv'} unit={'MWh'} class={vee_veez_tpv} />
              <Vstup {...vstup} id={veez.id} val={veez.tpz} row={'veez'} col={'tpz'} unit={'MWh'} class={vee_veez_tpz} />
              <Vypocet value={ veez.bat }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={veez.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={veez.tpz} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Elektrina na zdroji TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Elektrina na zdroji TpZ</span>
                       </div> }
                       cellsId={['vee_veez_tpv', 'vee_veez_tpz']}
                       placement={'top'}
                       unit={'MWh'}
                       decimal={decimal}
              />
            </tr>
            <tr>
              <th className="text-left">Dodávka do siete ZSE</th>
              <Vstup {...vstup} id={dszse.id} val={dszse.tpv} row={'dszse'} col={'tpv'} unit={'MWh'} class={vee_dszse_tpv} />
              <Vstup {...vstup} id={dszse.id} val={dszse.tpz} row={'dszse'} col={'tpz'} unit={'MWh'} class={vee_dszse_tpz} />
              <Vypocet value={ dszse.bat }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={dszse.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={dszse.tpz} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Dodávka do siete TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Dodávka do siete TpZ</span>
                       </div> }
                       cellsId={['vee_dszse_tpv', 'vee_dszse_tpz']}
                       placement={'top'}
                       unit={'MWh'}
                       decimal={decimal}
              />
            </tr>
            <tr>
              <th className="text-left">Dodávka regulačnej elektrickej energie</th>
              <Vstup {...vstup} id={dree.id} val={dree.tpv} row={'dree'} col={'tpv'} unit={'MWh'} class={vee_dree_tpv} />
              <Vstup {...vstup} id={dree.id} val={dree.tpz} row={'dree'} col={'tpz'} unit={'MWh'} class={vee_dree_tpz} />
              <Vypocet value={ dree.bat }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={dree.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={dree.tpz} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Regulačná elektrina TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Regulačná elektrina TpZ</span>
                       </div> }
                       cellsId={['vee_dree_tpv', 'vee_dree_tpz']}
                       placement={'top'}
                       unit={'MWh'}
                       decimal={decimal}
              />
            </tr>
            <tr>
              <th className="text-left">Vlastná spotreba elektrickej energie</th>
              <Vstup {...vstup} id={vsee.id} val={vsee.tpv} row={'vsee'} col={'tpv'} unit={'MWh'} class={vee_vsee_tpv} />
              <Vstup {...vstup} id={vsee.id} val={vsee.tpz} row={'vsee'} col={'tpz'} unit={'MWh'} class={vee_vsee_tpz} />
              <Vypocet value={ vsee.bat }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vsee.tpv} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vsee.tpz} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1 text-nowrap">Vlastná spotreba TpV</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2 text-nowrap">Vlastná spotreba TpZ</span>
                       </div> }
                       cellsId={['vee_vsee_tpv', 'vee_vsee_tpz']}
                       placement={'top'}
                       unit={'MWh'}
                       decimal={decimal}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'vee'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet,
  hlavny: state.hlavny,
  elektrina: state.vyrobaelektriny
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  update: (e, table, hlavny) => dispatch(updateVyrobaElektrinyRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VyrobaElektriny)
