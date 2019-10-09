import React from 'react'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

import {connect} from 'react-redux'

class NumInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.val,
      valid: true
    }
  }

  validateNumber(n) {
    return !isNaN(n)
      && 0 <= n === n <= 1000000
      && n.length > 0
  }

  validate(value) {
    if (this.validateNumber(value)) {
      this.setState({ valid: true })
    } else {
      this.setState({ valud: false })
    }
  }

  handleChange(e) {
    const value = e.target.value.replace(',', '.')

    this.setState({
      value: value
    })

    this.validate(value)
  }

  handleBlur(tabulka, zdroj, hodina, e) {

    const id = this.props[tabulka][zdroj].id
    const html_id = e.target.id
    const key = hodina
    const value = e.target.value

    // ak sa hodnota nezmenila, nevykonavat update
    if (this.props[tabulka][zdroj][hodina] === Number(value)) return

    const data = {
      id, // SQL: ID of entry
      [key]: value,
      field: html_id,
      zdroj,
      hodina
    }

    if (this.validateNumber(value)) {
      this.props.update(data)
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  render() {

    const state = this.props.hlavny.stav.id === 1
    const loading = this.props.loading

    const value = this.state.value
    const valid = this.state.valid ? '' : 'is-invalid'

    const id = this.props.id
    const name = this.props.name

    return (
      <InputGroup>
        <InputGroupAddon addonType={'prepend'}>
          <InputGroupText>{ name }</InputGroupText>
        </InputGroupAddon>
        <Input type={'text'} id={id} className={valid} value={value}
               readOnly={state || loading}
               onChange={this.handleChange} onBlur={this.props.handleBlur} />
        { loading &&
        <InputGroupAddon addonType={'append'}>
          <InputGroupText>
            <FontAwesome name="spinner" spin />
          </InputGroupText>
        </InputGroupAddon> }
      </InputGroup>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  objednavka: state.objednavka,
  dodavka: state.dodavka,
  elektrina: state.elektrina
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumInput)