import React from 'react'
import {connect} from 'react-redux'

import { Card, CardHeader, CardBody, CardFooter, Table } from 'reactstrap'

import { fetchDoplnovanieOdpustanieRequest } from '../actions'

import moment from 'moment'
moment.locale('sk')

class DoplnovanieOdpustanie extends React.Component {
  constructor(props) {
    super(props)
  }

  /*componentDidMount() {
    this.props.fetchDoplnovanieOdpustanieRequest({
      rok: this.props.data.rok,
      mesiac: this.props.data.mesiac
    })
  }*/

  render() {

    const rok = this.props.data.rok
    const mesiac = this.props.data.mesiac

    const data = this.props.data.doplnovanie_odpustanie
    let temp_data

    const pocet_dni = moment(`${rok}-${mesiac}`, "YYYY-MM").daysInMonth()
    let dni = []

    for (let x = 1; x <= pocet_dni; x++) {
      dni.push(x)
    }

    return (
      <div>

        <Card>
          <CardHeader className="bg-primary text-white">Doplňovanie a odpúšťanie</CardHeader>
          <CardBody>
            <Table size="md" bordered>
              <thead>
              <tr className="text-center">
                <th>{' '}</th>
                <th>{' '}</th>
                {/* cisla dni podla poctu dni v danom roku_a_mesiaci */}
                { dni.map(
                  (x, idx) => (
                    <th key={idx}>{x}</th>
                  ))
                }
              </tr>
              </thead>
              <tbody className="text-right">
              <tr>
                <th rowSpan={3} className="text-center align-middle">Východ</th>
                <th className="text-left">Doplňovanie BAT <span className="text-muted small">ID=511</span></th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej ktageroii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 511
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                    temp_data === undefined ?
                    <td key={idx}></td>
                    :
                    <td key={idx}>{temp_data.hodnota}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left">Odpúšťanie BAT <span className="text-muted small">ID=512</span></th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej ktageroii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 512
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{temp_data.hodnota}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left">Doplňovanie Cudzí <span className="text-muted small">ID=513</span></th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej ktageroii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 513
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{temp_data.hodnota}</td>

                  ))
                }
              </tr>
              <tr>
                <th rowSpan={3} className="text-center align-middle">Západ</th>
                <th className="text-left">Doplňovanie BAT <span className="text-muted small">ID=521</span></th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej ktageroii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 521
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{temp_data.hodnota}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left">Odpúšťanie BAT <span className="text-muted small">ID=522</span></th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej ktageroii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 522
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{temp_data.hodnota}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left">Doplňovanie Cudzí <span className="text-muted small">ID=523</span></th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej ktageroii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 523
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{temp_data.hodnota}</td>

                  ))
                }
              </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>

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
  fetchDoplnovanieOdpustanieRequest: (e) => dispatch(fetchDoplnovanieOdpustanieRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoplnovanieOdpustanie)