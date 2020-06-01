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
      case 'fdt': // forecast dodavky tepla
        cache = CONSTANTS.CACHE_KONT_VCT_DECIMAL_FDT
        break
      case 'zpv': // zemny plyn - vychod
        cache = CONSTANTS.CACHE_KONT_VCT_DECIMAL_ZPV
        break
      case 'zpz': // zemny plyn - zapad
        cache = CONSTANTS.CACHE_KONT_VCT_DECIMAL_ZPZ
        break
      case 'nmv': // normativne mnozstvo - vychod
        cache = CONSTANTS.CACHE_KONT_VCT_DECIMAL_NMV
        break
      case 'nmz': // normativne mnozstvo - zapad
        cache = CONSTANTS.CACHE_KONT_VCT_DECIMAL_NMZ
        break
      case 'nt': // nakup tepla
        cache = CONSTANTS.CACHE_KONT_VCT_DECIMAL_NT
        break
      case 'onte': // ocakavane naklady na teplo a elektrinu
        cache = CONSTANTS.CACHE_KONT_VCT_DECIMAL_ONTE
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