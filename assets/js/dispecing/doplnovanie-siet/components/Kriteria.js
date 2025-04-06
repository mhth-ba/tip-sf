import React from 'react'
import {connect} from 'react-redux'
import { Row, Col, Input, Label, Form, FormGroup, Tooltip } from 'reactstrap'

import { fetchDoplnovanieOdpustanieRequest } from '../actions'

import { setRok, setMesiac } from '../actions'

import moment from 'moment'
moment.locale('sk')

class Kriteria extends React.Component {
  constructor(props) {
    super(props)

    this.handleRok = this.handleRok.bind(this)
    this.handleMesiac = this.handleMesiac.bind(this)
  }

  handleRok(e) {
    const value = e.target.value

    this.props.setRok(parseInt(value))
  }

  handleMesiac(e) {
    const value = e.target.value

    this.props.setMesiac(parseInt(value))
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.props.data.rok !== prevProps.data.rok ||
      this.props.data.mesiac !== prevProps.data.mesiac) {

      this.props.fetchDoplnovanieOdpustanieRequest({
        rok: this.props.data.rok,
        mesiac: this.props.data.mesiac
      })

    }
  }

  componentDidMount() {
    this.props.setRok(parseInt(moment().format("YYYY")))
    this.props.setMesiac(parseInt(moment().format("M")))
  }

  // Generate an array of years starting from 2020 up to the current year
  generateYears() {
    const currentYear = moment().year()
    const startYear = 2020
    let years = []

    for (let i = startYear; i <= currentYear; i++) {
      years.push(i)
    }

    return years
  }

  render() {
    const years = this.generateYears()

    return (
      <div>
        <Form inline>
          <FormGroup>
            <Label for="rokSelect">Rok:</Label>
            &nbsp;
            &nbsp;
            <Input type={'select'} id={'rokSelect'} value={this.props.data.rok} onChange={this.handleRok}>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </Input>
          </FormGroup>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <FormGroup>
            <Label for="mesiacSelect">Mesiac:</Label>
            &nbsp;
            &nbsp;
            <Input type={'select'} id={'mesiacSelect'} value={this.props.data.mesiac} onChange={ this.handleMesiac }>
              <option value="1">(1) Január</option>
              <option value="2">(2) Február</option>
              <option value="3">(3) Marec</option>
              <option value="4">(4) Apríl</option>
              <option value="5">(5) Máj</option>
              <option value="6">(6) Jún</option>
              <option value="7">(7) Júl</option>
              <option value="8">(8) August</option>
              <option value="9">(9) September</option>
              <option value="10">(10) Október</option>
              <option value="11">(11) November</option>
              <option value="12">(12) December</option>
            </Input>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
  data: state.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  setRok: (e) => dispatch(setRok(e)),
  setMesiac: (e) => dispatch(setMesiac(e)),

  fetchDoplnovanieOdpustanieRequest: (e) => dispatch(fetchDoplnovanieOdpustanieRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kriteria)