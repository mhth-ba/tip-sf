import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'

import DatePicker from 'react-datepicker'
import moment from 'moment'
moment.locale('sk')

class DatePickerInline extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      datum: null
    }
  }

  handleDatum(dateObject, e) {
    this.setState({
      datum: dateObject
    })

    this.props.onUpdate( dateObject.valueOf() / 1000 )

    //return true
  }

  componentDidMount() {
    this.setState({
      datum: moment(this.props.value * 1000)
    })
  }

  render() {

    const { row, column, value, onUpdate } = this.props

    return (
      <DatePicker selected={ this.state.datum }
                  onChange={ this.handleDatum.bind(this) }
                  className="form-control form-control-sm datum"
      />
    )
  }
}

DatePickerInline.propTypes = {
  value: PropTypes.number,
  onUpdate: PropTypes.func.isRequired
}

DatePickerInline.defaultProps = {
  value: 0
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
)(DatePickerInline)