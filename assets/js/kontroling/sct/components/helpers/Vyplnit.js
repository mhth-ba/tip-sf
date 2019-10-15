import React from 'react'
import {connect} from 'react-redux'

import { Form, FormGroup, Input, Button } from 'reactstrap'

class Vyplnit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      disabled: false
    }

    this.changeValue = this.changeValue.bind(this)
    this.preventSubmission = this.preventSubmission.bind(this)
    this.fillColumn = this.fillColumn.bind(this)
  }

  changeValue(e) {
    this.setState({
      value: e.target.value.replace(',', '.')
    })
  }

  preventSubmission(e) {
    e.preventDefault()
    this.fillColumn()
  }

  fillColumn() {

    this.setState({
      disabled: true
    })

    setTimeout(
      () => this.setState({
        disabled: false
      }),
      5000
    )

    const data = this.props['data'] // array of objects | e.g. [{ id: 5, key: 'januar' }, { id: 7, key: 'marec'}, ...]
    const column = this.props['column'] // string | e.g. 'fmso'
    const table = this.props['table']   // string | e.g. 'tpv'

    data.map(
      (d, x) => (
        this.props.update({
          ...d,
          [column]: this.state.value
        }, table)
      )
    )
  }

  render() {

    const upravovanie = this.props.nastroje.highlightEditable

    return (
      upravovanie ?
        <Form inline onSubmit={ this.preventSubmission } >
          <FormGroup>
            <Input type={'text'} bsSize={'sm'} style={{ width: '80px' }}
                   value={ this.state.value } onChange={ this.changeValue } />
            &nbsp;
            <Button size={'sm'} onClick={ this.fillColumn } disabled={ this.state.disabled } >OK</Button>
          </FormGroup>
        </Form>
        :
        ''
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  opravnenia: state.opravnenia,
  nastroje: state.nastroje
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vyplnit)