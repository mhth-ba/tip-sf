import React from 'react'
import {connect} from 'react-redux'
import { Form, FormGroup, Input, Label, UncontrolledTooltip } from 'reactstrap'

import { setDecimalScale } from '../../actions'

import * as CONSTANTS from '../../../../constants'


class DecimalScale extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cache: null
    }

    this.handleDecimalScale = this.handleDecimalScale.bind(this)
  }

  handleDecimalScale(e) {
    const id = this.props.id
    const cache = this.state.cache
    const value = e.target.value

    this.props.setDecimalScale({
      [`decimal_${id}`]: value
    })

    localStorage.setItem(cache, value)
  }

  componentDidMount() {
    const id = this.props.id
    let cache = null

    switch (id) {
      case 'udt':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_UDT
        break
      case 'pp':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_PP
        break
      case 'vtpz':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_VTPZ
        break
      case 'vtpk':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_VTPK
        break
      case 'vee':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_VEE
        break
      case 'dnem':
        cache = CONSTANTS.CACHE_KONT_SCT_DECUMAL_DNEM
        break
      case 'fzpk':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_FZPK
        break
      case 'fzptpv':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_FZPTPV
        break
      case 'fzptpz':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_FZPTPZ
        break
      case 'fzpvhj':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_FZPVHJ
        break
      case 'fzpvyr':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_FZPVYR
        break
      case 'fzppk':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_FZPPK
        break
      case 'fzpkn':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_FZPKN
        break;
      case 'fzpbat':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_FZPBAT
        break
      case 'pbnmzptpv':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_PBNMZPTPV
        break
      case 'pbnmzpvhj':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_PBNMZPVHJ
        break
      case 'pbnmzptpz':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_PBNMZPTPZ
        break
      case 'pbnmzppkbp':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_PBNMZPPKBP
        break
      case 'pbnmzppksp':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_PBNMZPPKSP
        break
      case 'pbeonnzp':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_PBEONNZP
        break
      case 'ntnnt':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_NTNNT
        break
      case 'sntesn':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_SNTESN
        break
      case 'snterzfn':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_SNTERZFN
        break
      case 'ctvz':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_CTVZ
        break
      case 'ctfz':
        cache = CONSTANTS.CACHE_KONT_SCT_DECIMAL_CTFZ
        break
    }

    this.setState({ cache })

    if ( localStorage.getItem(cache) !== null ) {
      this.props.setDecimalScale({
        [`decimal_${id}`]: localStorage.getItem(cache)
      })
    }
  }

  render() {

    const id = this.props.id // udt

    return (
      <Form inline>
        <FormGroup>
          <Input id={`nm-vypocty-${id}`} type={'number'} value={ this.props.nastroje[`decimal_${id}`] }
                 min={0} max={10} bsSize={'sm'} style={{ width: '50px' }}
                 onChange={ this.handleDecimalScale }
          />&nbsp;
          <Label for={`nm-vypocty-${id}`} id={`nm-vypocty-label-${id}`}>
            Desatinná čiarka
            <UncontrolledTooltip placement="bottom" target={`nm-vypocty-label-${id}`}>
              Zobrazenie hodnôt s presnosťou na zadaný počet číslic za desatinnou čiarkou
            </UncontrolledTooltip>
          </Label>
        </FormGroup>
      </Form>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setDecimalScale: (e) => dispatch(setDecimalScale(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecimalScale)