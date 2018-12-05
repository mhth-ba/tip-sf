import React from 'react'
import { Button } from 'reactstrap'
import {connect} from 'react-redux'

class Zariadenie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const val = this.props.val
    const col = this.props.col

    return (
      <Button outline={ val < 1 } color={ col }>
        <span>{ this.props.nazov }</span>
        <br/>
        <span>{ Number(val).toFixed(2).replace('.', ',') } MW</span>
      </Button>
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
)(Zariadenie)