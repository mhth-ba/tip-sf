import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import {connect} from 'react-redux'
import { fetchSCZTVychodZariadeniaRequest } from "../actions";
import Zariadenie from './helpers/Zariadenie'
import { dateTime } from '../../../utils/format'

class VychodZariadenia extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchVychodZariadenia()

    this.timerID = setInterval(
      () => this.props.fetchVychodZariadenia(),
      1 * 60 * 1000 // kazdu 1 minutu
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {

    const z = this.props.zariadenia

    const datum = z.datum

    const ppc = z.ppc
    const k5 = z.k5
    const k6 = z.k6
    const slovnaft = z.slovnaft
    const hk3 = z.hk3
    const hk4 = z.hk4

    return (
      <div style={{ width: '570px' }}>
        <Card>
          <CardHeader>
            Stavy zariadení - { dateTime(datum) }
          </CardHeader>
          <CardBody>
            <Zariadenie val={ppc} nazov={'PPC'} col={'brown'} />
            &nbsp;&nbsp;&nbsp;
            <Zariadenie val={k5} nazov={'K5'} col={'blue'} />
            &nbsp;&nbsp;&nbsp;
            <Zariadenie val={k6} nazov={'K6'} col={'blue'} />
            &nbsp;&nbsp;&nbsp;
            <Zariadenie val={slovnaft} nazov={'Slovnaft'} col={'green'} />
            &nbsp;&nbsp;&nbsp;
            <Zariadenie val={hk3} nazov={'HK3'} col={'pruple'} />
            &nbsp;&nbsp;&nbsp;
            <Zariadenie val={hk4} nazov={'HK4'} col={'pruple'} />
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  zariadenia: state.vychodzariadenia
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchVychodZariadenia: (e) => dispatch(fetchSCZTVychodZariadeniaRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VychodZariadenia)