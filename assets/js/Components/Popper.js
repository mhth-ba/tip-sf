import React from 'react'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import {connect} from 'react-redux'

class Popper extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {

    const base = this.props['base']

    const placement = this.props['placement']
    const target = this.props['target']
    const title = this.props['title']
    const body = this.props['body']

    return (
      <div>
        <span onClick={this.toggle}>
          { base }
        </span>
        <Popover placement={ placement }
                 isOpen={ this.state.open }
                 target={ target }
                 toggle={ this.toggle }
                 trigger={'hover'}
        >
          <PopoverHeader>{ title }</PopoverHeader>
          <PopoverBody>{ body }</PopoverBody>
        </Popover>
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
)(Popper)