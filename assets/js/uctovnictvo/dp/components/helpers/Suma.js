import React from 'react'
import {connect} from 'react-redux'

import NumberFormat from 'react-number-format'

// Number format component
let numFormat = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 2,
  fixedDecimalScale: true,
  displayType: 'text',
  suffix: ' €',
  value: 0
}

class Suma extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <NumberFormat {...numFormat} value={this.props.v} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suma)