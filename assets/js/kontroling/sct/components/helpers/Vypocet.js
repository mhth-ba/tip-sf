import React from 'react'
import {connect} from 'react-redux'

import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import NumberFormat from 'react-number-format'

import { highlightCells } from '../../actions'


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

    this.state = {
      id: 'init',
      pop: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {

    if (!this.props.nastroje.vypocty) return;

    const colors = [
      'bunka-1', 'bunka-2', 'bunka-3', 'bunka-4', 'bunka-5', 'bunka-6',
      'bunka-7', 'bunka-8', 'bunka-9', 'bunka-10', 'bunka-11', 'bunka-12'
    ]

    // konvencia pre nazov cellsId:
    // prve pismena nazvu tabulky (bez predloziek a spojok)
    // _
    // prve pismena nazvu polozky v riadku (bez predloziek a spojok)
    // _
    // prve pismena nazvu polozky v stlpci (bez predloziek a spojok)

    const cellsId = this.props['cellsId']

    const cells = {}

    //const popoverOpen = this.props.vypocet[popId]
    const popoverOpen = this.state.pop

    for (let [index, id] of cellsId.entries()) {
      cells[id] = popoverOpen ? '' : colors[index]
    }

    this.setState({
      pop: !this.state.pop
    })

    this.props.highlightCells({
      //[popId]: !popoverOpen,
      ...cells
    })
  }

  componentDidMount() {
    this.setState({
      id: 'pop_calculation_' + Math.random().toString(36).substring(2, 15)
    })
  }

  render() {

    numFormat = {
      ...numFormat,
      decimalScale: Number(this.props['decimal'])
    }

    const popId = this.state.id
    const className =
      (this.props.nastroje.vypocty ? 'bg-yellow' : '')
      + ' '
      + (this.props['class'] === undefined ? '' : this.props['class'])

    return (
      <td id={ popId }
          onClick={ this.toggle }
          className={ className }
      >
        <Popover placement={ this.props.placement }
                 //isOpen={ this.props.vypocet[popId] }
                 isOpen={ this.state.pop }
                 target={ popId }
                 toggle={ this.toggle }
        >
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