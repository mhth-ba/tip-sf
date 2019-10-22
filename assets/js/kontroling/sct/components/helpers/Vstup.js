import React from 'react'
import {connect} from 'react-redux'

import { RIENumber } from 'riek2'
import NumberFormat from 'react-number-format'

// Number format component
let numFormat = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 0,
  displayType: 'text',
  value: 0
}

class Vstup extends React.Component {
  constructor(props) {
    super(props)

    this.formatNumber = this.formatNumber.bind(this)
  }

  handleChange(id, col, key, table, hlavny, data) {
    data[col] = data[col].replace(',', '.')

    data = {
      ...data,
      ...id,
      key
    }

    this.props.update(data, table, hlavny)
  }

  formatNumber(decimal, number) {
    decimal = Number(decimal)

    return <NumberFormat {...numFormat} value={number} decimalScale={decimal} />
  }

  render() {

    numFormat = {
      ...numFormat,
      decimalScale: Number(this.props['dec'])
    }

    const opravnenia = this.props.opravnenia
    const sprava = this.props.nastroje

    const editovatelne = opravnenia.kont && sprava.highlightEditable

    // React Inline Edit
    const RIEConfig = {
      classEditing: 'form-control',
      classInvalid: 'is-invalid',
      classLoading: 'form-control riek-loading',
      //format: this.formatNumber, // dynamicky pocet desatinnych miest
      className: sprava.highlightEditable ? "riek-base" : "",
      isDisabled: !opravnenia.kont || !sprava.highlightEditable
    }

    const decimal = this.props['dec']
    const className = this.props['class']

    let table                             // e.g.  tpv (fakturovany zemny plyn - teplaren vychod)

    if (this.props['table'] === typeof undefined) {
      table = ''
    } else {
      table = this.props['table']
    }

    const hlavny = this.props['hlavny']   // e.g.  10 (id hlavneho zaznamu)
    const row = this.props['row']         // e.g.  veez (vyroba elektrickej energie na zdroji)
    const col = this.props['col']         // e.g.  tpz (teplaren zapad)
    const id = this.props['id']           // e.g.  45 (id, int, pk, not null)
    const value = this.props['val']       // e.g.  714559.12

    return (
      <td className={className}>
        {
          editovatelne ?
          <RIENumber {...RIEConfig} propName={col} value={ value }
                     format={ this.formatNumber.bind( this, decimal ) }
                     change={ this.handleChange.bind( this, { id }, col, row, table, hlavny ) }
          />
            :
          <NumberFormat {...numFormat} value={ value } />
        }
        {' '}
        { this.props['unit'] }
      </td>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  opravnenia: state.opravnenia,
  nastroje: state.nastroje,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vstup)