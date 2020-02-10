import React from 'react'
import { Row, Col, Card, CardBody, CardHeader, Progress } from 'reactstrap'
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

    const dop_nvs = Number(z.dop_nvs).toFixed(2)
    const dop_ppc = Number(z.dop_ppc).toFixed(2)

    return (
      <div className="card-columns" style={{ display: 'inline-block' }}>
        <Card style={{ width: '570px' }}>
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
            <Zariadenie val={hk3} nazov={'HK3'} col={'purple'} />
            &nbsp;&nbsp;&nbsp;
            <Zariadenie val={hk4} nazov={'HK4'} col={'purple'} />
          </CardBody>
        </Card>

        <Card style={{ width: '400px' }}>
          <CardHeader>
            Doplňovanie do sústavy
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={8}>
                <Progress animated value={0.9 * dop_nvs} />
              </Col>
              <Col md={4} className='text-right'>
                <span>{ dop_nvs.replace('.', ',') }</span>
                &nbsp;
                <span>t/h NVS</span>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col md={8}>
                <Progress animated value={0.9 * dop_ppc} />
              </Col>
              <Col md={4} className='text-right'>
                <span>{ dop_ppc.replace('.', ',') }</span>
                &nbsp;
                <span>t/h PPC</span>
              </Col>
            </Row>
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