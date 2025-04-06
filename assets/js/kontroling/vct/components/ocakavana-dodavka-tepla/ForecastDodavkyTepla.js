import React from 'react'
import {connect} from 'react-redux'

import { Table, Card, CardHeader, CardBody, CardFooter, Button, UncontrolledTooltip, Alert } from 'reactstrap'
import NumberFormat from 'react-number-format'
//import { Context, Node } from 'react-mathjax2'

import FontAwesome from 'react-fontawesome'

import Vypocet from '../helpers/Vypocet'
import DecimalScale from '../helpers/DecimalScale'

import {createVariantRequest, deleteVariantRequest, updateVariantRequest} from '../../actions'
import Vstup from "../helpers/Vstup";

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
  className: 'text-nowrap'
}

class UzitocnaDodavkaTepla extends React.Component {
  constructor(props) {
    super(props)

    this.handleCreateVariant = this.handleCreateVariant.bind(this)
  }

  handleCreateVariant(e) {
    const data = {
      hlavny: this.props.hlavny.id
    }

    this.props.createVariant(data)
  }

  handleDeleteVariant(id, e) {
    const data = {
      id: id,
      hlavny: this.props.hlavny.id
    }

    console.log(data)

    this.props.deleteVariant(data)
  }

  render() {

    const hlavny = this.props.hlavny
    const ocakavanadodavka = this.props.ocakavanadodavka
    const vypocet = this.props.vypocet
    const varianty = ocakavanadodavka.varianty

    const upload_odt = hlavny.upload.odt !== null

    const variant = this.props.variant

    // ---------------------------- GUI
    const is_creating = this.props.variant.creating
    const is_updating = this.props.variant.updating
    const is_deleting = this.props.variant.deleting

    const decimal = this.props.nastroje.decimal_fdt

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    const vstup = {
      sqlt: 'VCT_Variant',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      class: 'bg-azure',
      unit: '%',
      update: this.props.updateVariant
    }

    const {
      vychod,
      zapad,
      bat
    } = ocakavanadodavka

    // class names for related cells' color bordering when formula for given cell is displayed
    const {
      fdt_v_p_kwh,   // (f)orecast (d)odavky (t)epla
      fdt_v_p_kw,
      fdt_v_s_kwh,
      fdt_v_s_kw,
      fdt_v_r_kwh,
      fdt_v_r_kw,
      fdt_v_f_kwh,
      fdt_v_f_kw,
      fdt_z_p_kwh,
      fdt_z_p_kw,
      fdt_z_s_kwh,
      fdt_z_s_kw,
      fdt_z_r_kwh,
      fdt_z_r_kw,
      fdt_z_f_kwh,
      fdt_z_f_kw,
      fdt_b_p_kwh,
      fdt_b_p_kw,
      fdt_b_s_kwh,
      fdt_b_s_kw,
      fdt_b_r_kwh,
      fdt_b_r_kw,
      fdt_b_f_kwh,
      fdt_b_f_kw
    } = vypocet

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Forecast dodávky tepla</CardHeader>
        <CardBody style={{ overflowX: 'scroll' }}>
          { !upload_odt &&
            <span>
              <Alert color={'danger'}>
                <FontAwesome name={'exclamation'} />
                &nbsp;
                Súbor s očakávanou dodávkou tepla zatiaľ nebol nahraný.
              </Alert>
            </span>
          }
          <Table size="sm" bordered>
            <thead>
            <tr className="text-center text-nowrap">
              <th rowSpan={2}>{''}</th>
              <th colSpan={2}>Plán 1-{hlavny.mesiac}</th>
              <th colSpan={2}>Skutočnosť 1-{hlavny.mesiac}</th>
              <th colSpan={2}>Plán 1-12</th>
              <th colSpan={3} className="bg-yellow">Forecast 1-12</th>
              { varianty.map((item, ix) => (
                <th key={ix} colSpan={3} className="bg-azure">
                  Forecast 1-12
                  <Button color={'danger'} size={'sm'} className="pull-right"
                          disabled={is_creating || is_updating || is_deleting}
                          onClick={this.handleDeleteVariant.bind(this, item.id)}
                  >
                    <FontAwesome name={'minus-circle'} />
                  </Button>
                  <br/>
                  <span className="text-muted font-weight-normal">(variant #{ix+1})</span>
                </th>
              )) }
            </tr>
            <tr className="text-center">
              <th>kWh</th>
              <th>kW</th>
              <th>kWh</th>
              <th>kW</th>
              <th>kWh</th>
              <th>kW</th>
              <th id={'percento-z-planu'} className="bg-yellow">%</th>
              <UncontrolledTooltip placement={'top'} target={'percento-z-planu'}>
                Percento z plánu na mesiace {hlavny.mesiac + 1}-12
              </UncontrolledTooltip>
              <th>kWh</th>
              <th>kW</th>
              { varianty.map((item, ix) => [
                <th key={ix+'a'} className="bg-azure" style={{ minWidth: '60px' }}>%</th>,
                <th key={ix+'b'}>kWh</th>,
                <th key={ix+'c'}>kW</th>
              ]) }
            </tr>
            </thead>
            <tbody className="text-right text-nowrap">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="bg-yellow"></td>
              <td></td>
              <td></td>
              { varianty.map((item, ix) => [
                <td key={ix+'a'} className="bg-azure"></td>,
                <td key={ix+'b'}></td>,
                <td key={ix+'c'}></td>
              ]) }
            </tr>
            <tr>
              <th className="text-left">SCZT Východ</th>
              <td className={fdt_v_p_kwh}><NumberFormat {...numFormat} value={vychod.p_kwh} /> kWh</td>
              <td className={fdt_v_p_kw}><NumberFormat {...numFormat} value={vychod.p_kw} /> kW</td>
              <td className={fdt_v_s_kwh}><NumberFormat {...numFormat} value={vychod.s_kwh} /> kWh</td>
              <td className={fdt_v_s_kw}><NumberFormat {...numFormat} value={vychod.s_kw} /> kW</td>
              <td className={fdt_v_r_kwh}><NumberFormat {...numFormat} value={vychod.r_kwh} /> kWh</td>
              <td className={fdt_v_r_kw}><NumberFormat {...numFormat} value={vychod.r_kw} /> kW</td>
              <td className="bg-yellow">100%</td>
              <td className={fdt_v_f_kwh}><NumberFormat {...numFormat} value={vychod.f_kwh} /> kWh</td>
              <td className={fdt_v_f_kw}><NumberFormat {...numFormat} value={vychod.f_kw} /> kW</td>
              { varianty.map((item, ix) => [
                <Vstup key={ix+'a'} {...vstup} id={item.id} col={'vychod'} val={item.vychod_percento} />,
                <td key={ix+'b'}><NumberFormat {...numFormat} value={item.vychod_kwh} /> kWh</td>,
                <td key={ix+'c'}><NumberFormat {...numFormat} value={item.vychod_kw} /> kW</td>
              ]) }
              {/*<Vypocet value={ zdroj.b_kwh }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={zdroj.v_kwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={zdroj.z_kwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Zdroj východ</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Zdroj západ</span>
                       </div> }
                       cellsId={['udt_zdr_v_kwh', 'udt_zdr_z_kwh']}
                       placement={'top'}
                       decimal={decimal}
                       unit={'kWh'}
                       class={udt_zdr_b_kwh}
              />*/}
            </tr>
            <tr>
              <th className="text-left">SCZT Západ</th>
              <td className={fdt_z_p_kwh}><NumberFormat {...numFormat} value={zapad.p_kwh} /> kWh</td>
              <td className={fdt_z_p_kw}><NumberFormat {...numFormat} value={zapad.p_kw} /> kW</td>
              <td className={fdt_z_s_kwh}><NumberFormat {...numFormat} value={zapad.s_kwh} /> kWh</td>
              <td className={fdt_z_s_kw}><NumberFormat {...numFormat} value={zapad.s_kw} /> kW</td>
              <td className={fdt_z_r_kwh}><NumberFormat {...numFormat} value={zapad.r_kwh} /> kWh</td>
              <td className={fdt_z_r_kw}><NumberFormat {...numFormat} value={zapad.r_kw} /> kW</td>
              <td className="bg-yellow">100%</td>
              <td className={fdt_z_f_kwh}><NumberFormat {...numFormat} value={zapad.f_kwh} /> kWh</td>
              <td className={fdt_z_f_kw}><NumberFormat {...numFormat} value={zapad.f_kw} /> kW</td>
              { varianty.map((item, ix) => [
                <Vstup key={ix+'a'} {...vstup} id={item.id} col={'zapad'} val={item.zapad_percento} />,
                <td key={ix+'b'}><NumberFormat {...numFormat} value={item.zapad_kwh} /> kWh</td>,
                <td key={ix+'c'}><NumberFormat {...numFormat} value={item.zapad_kw} /> kW</td>
              ]) }
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="bg-yellow"></td>
              <td></td>
              <td></td>
              { varianty.map((item, ix) => [
                <td key={ix+'a'} className="bg-azure"></td>,
                <td key={ix+'b'}></td>,
                <td key={ix+'c'}></td>
              ]) }
            </tr>
            <tr>
              <th className="text-left">BAT Spolu</th>
              <td className={fdt_b_p_kwh}><NumberFormat {...numFormat} value={bat.p_kwh} /> kWh</td>
              <td className={fdt_b_p_kw}><NumberFormat {...numFormat} value={bat.p_kw} /> kW</td>
              <td className={fdt_b_s_kwh}><NumberFormat {...numFormat} value={bat.s_kwh} /> kWh</td>
              <td className={fdt_b_s_kw}><NumberFormat {...numFormat} value={bat.s_kw} /> kW</td>
              <td className={fdt_b_r_kwh}><NumberFormat {...numFormat} value={bat.r_kwh} /> kWh</td>
              <td className={fdt_b_r_kw}><NumberFormat {...numFormat} value={bat.r_kw} /> kW</td>
              <td className="bg-yellow"></td>
              <td className={fdt_b_f_kwh}><NumberFormat {...numFormat} value={bat.f_kwh} /> kWh</td>
              <td className={fdt_b_f_kw}><NumberFormat {...numFormat} value={bat.f_kw} /> kW</td>
              { varianty.map((item, ix) => [
                <td key={ix+'a'} className="bg-azure"></td>,
                <td key={ix+'b'}><NumberFormat {...numFormat} value={item.spolu_kwh} /> kWh</td>,
                <td key={ix+'c'}><NumberFormat {...numFormat} value={item.spolu_kw} /> kW</td>
              ]) }
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter className="d-inline-flex">
          <Button color={'success'} onClick={this.handleCreateVariant}
                  disabled={is_creating || is_updating || is_deleting}
          >
            <FontAwesome name={'plus-circle'} />
            &nbsp;
            Variant
          </Button>
          &nbsp;&nbsp;
          <DecimalScale id={'fdt'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  hlavny: state.hlavny,
  variant: state.varianty,
  ocakavanadodavka: state.ocakavanadodavka
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  createVariant: (e) => dispatch(createVariantRequest(e)),
  updateVariant: (e, table, hlavny) => dispatch(updateVariantRequest(e, table, hlavny)),
  deleteVariant: (e) => dispatch(deleteVariantRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UzitocnaDodavkaTepla)