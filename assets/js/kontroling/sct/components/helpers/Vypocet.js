import React from 'react'
import {connect} from 'react-redux'

import NumberFormat from 'react-number-format'

import { highlightCells } from "../../actions"

import {
  Button, Popover, PopoverHeader, PopoverBody
} from 'reactstrap'

let numFormat = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  // decimalScale: 0,
  displayType: 'text',
  value: 0
}

class Vypocet extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  toggle() {

    if (!this.props.nastroje.vypocty) return;

    const colors = [
      'bunka-1', 'bunka-2', 'bunka-3', 'bunka-4', 'bunka-5', 'bunka-6',
      'bunka-7', 'bunka-8', 'bunka-9', 'bunka-10', 'bunka-11', 'bunka-12'
    ]

    // konvencia pre nazov popoverId:
    // prve pismena nazvu tabulky (bez predloziek a spojok)
    // _
    // prve pismena nazvu polozky v riadku (bez predloziek a spojok)
    // _
    // prve pismena nazvu polozky v stlpci (bez predloziek a spojok)
    // _
    // pop

    // konvencia pre nazov cellsId:
    // to isze ako popoverID ale bez _pop

    const popoverId = this.props['popoverId']
    const cellsId = this.props['cellsId']

    const cells = {}

    const popoverOpen = this.props.vypocet[popoverId]

    for (let [index, id] of cellsId.entries()) {
      cells[id] = popoverOpen ? '' : colors[index]
    }

    this.props.highlightCells({
      [popoverId]: !popoverOpen,
      ...cells
    })
  }

  render() {

    numFormat = {
      ...numFormat,
      decimalScale: Number(this.props['decimal'])
    }

    const popoverId = this.props['popoverId']
    const className =
      (this.props.nastroje.vypocty ? 'bg-yellow' : '')
      + ' '
      + this.props['class']

    return (
      <td id={ popoverId }
          onClick={ this.toggle }
          className={ className }
      >
        <Popover placement={ this.props.placement }
                 isOpen={ this.props.vypocet[popoverId] }
                 target={ popoverId }
                 toggle={ this.toggle } >
          <PopoverHeader className="vypocet-bublina">Výpočet</PopoverHeader>
          <PopoverBody className="text-center vypocet-bublina">
            { this.props['cisla'] }
            <br/>
            { this.props['popis'] }
            { this.props['graf'] }
          </PopoverBody>
        </Popover>
        <NumberFormat
          {...numFormat}
          value={ this.props['value'] }
        />
        {' '}
        { this.props['unit'] }
      </td>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  highlightCells: (e) => dispatch(highlightCells(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vypocet)