import React from 'react'
import {connect} from 'react-redux'

class Ciastkova extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        ...
      </div>
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
)(Ciastkova)