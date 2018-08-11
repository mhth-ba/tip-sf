import React from 'react'
import {
  Tooltip
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'

class DatePickerTooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tooltipOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  render() {

    return (
      <div>
        <FontAwesome name={'question-circle'} size={'lg'} id="kalendar-tooltip" />
        <Tooltip isOpen={this.state.tooltipOpen} target="kalendar-tooltip" toggle={this.toggle}>
          Navigácia v kalendári klávesmi pri výbere dátumu:
          <br/><br/>
          Šípka vľavo - predchádzajúci deň<br/>
          Šípka vpravo - nasledujúci deň<br/>
          Šípka hore - predchádzajúci týždeň<br/>
          Šípka dole - nasledujúci týždeň<br/>
          PageUp - predchádzajúci mesiac<br/>
          PageDown - nasledujúci mesiac<br/>
          Home - predchádzajúci rok<br/>
          End - nasledujúci rok
        </Tooltip>
      </div>
    )
  }
}

export default DatePickerTooltip