import React from 'react'
import {connect} from 'react-redux'

import { Card, CardHeader, CardBody, CardFooter, Table } from 'reactstrap'

import { fetchDoplnovanieOdpustanieRequest } from '../actions'

import { number } from '../../../utils/format'
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
          <CardHeader className="bg-primary text-white">
            Doplňovanie a odpúšťanie podľa sústavy a vlastníctva OST
          </CardHeader>
          <CardBody style={{overflow: 'auto', maxHeight: '95vh'}}>
            <Table size="md" bordered hover>
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
                <th rowSpan={7} className="text-center align-middle">Východ</th>
                <th className="text-left text-blue text-nowrap" title={"bez PPC"}>
                  Doplňovanie zdroj <span className="font-weight-normal">[t/h]</span> <span className="text-muted small">ID=516</span>
                </th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 516
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{number(temp_data.hodnota / 24, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left text-blue text-nowrap" title={"= doplňovanie zdroj - doplňovanie OST spolu"}>
                  Doplňovanie sieť <span className="font-weight-normal">[t/h]</span> <span className="text-muted small">ID=517</span>
                </th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 517
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{number(temp_data.hodnota / 24, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left text-nowrap" title={"rozťažnosť vody"}>Doplňovanie sieť (korekcia na T)</th>
              </tr>
              <tr>
                <td className="text-left text-nowrap">Doplňovanie OST BAT [t] <span className="text-muted small">ID=511</span></td>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

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
                    <td key={idx}>{number(temp_data.hodnota, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <td className="text-left">Odpúšťanie OST BAT [t] <span className="text-muted small">ID=512</span></td>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

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
                        <td key={idx}>{number(temp_data.hodnota, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <td className="text-left">Doplňovanie OST Cudzí [t] <span className="text-muted small">ID=513</span></td>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

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
                        <td key={idx}>{number(temp_data.hodnota, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left" title={"= doplňovanie OST BAT + doplňovanie OST cudzí"}>
                  Doplňovanie OST Spolu <span className="font-weight-normal">[t]</span> <span className="text-muted small">ID=515</span>
                </th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 515
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{number(temp_data.hodnota, 2)}</td>

                  ))
                }
              </tr>

              <tr className="bg-secondary">
                <td></td>
                <td></td>
                { dni.map(
                  (x, idx) => (
                    <td key={idx}></td>
                  )
                )}
              </tr>

              <tr>
                <th rowSpan={7} className="text-center align-middle">Západ</th>
                <th className="text-left text-orange" title={"bez odpúšťania"}>
                  Doplňovanie zdroj <span className="font-weight-normal">[t/h]</span> <span className="text-muted small">ID=526</span>
                </th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 526
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{number(temp_data.hodnota / 24, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left text-orange" title={"= doplňovanie zdroj - doplňovanie OST spolu"}>
                  Doplňovanie sieť <span className="font-weight-normal">[t/h]</span> <span className="text-muted small">ID=527</span>
                </th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 527
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{number(temp_data.hodnota / 24, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left" title={"rozťažnosť vody"}>Doplňovanie sieť (korekcia na T)</th>
              </tr>
              <tr>
                <td className="text-left">Doplňovanie OST BAT [t] <span className="text-muted small">ID=521</span></td>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

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
                        <td key={idx}>{number(temp_data.hodnota, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <td className="text-left">Odpúšťanie OST BAT [t] <span className="text-muted small">ID=522</span></td>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

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
                        <td key={idx}>{number(temp_data.hodnota, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <td className="text-left">Doplňovanie OST Cudzí [t] <span className="text-muted small">ID=523</span></td>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

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
                        <td key={idx}>{number(temp_data.hodnota, 2)}</td>

                  ))
                }
              </tr>
              <tr>
                <th className="text-left" title={"= doplňovanie OST BAT + doplňovanie OST cudzí"}>
                  Doplňovanie OST Spolu <span className="font-weight-normal">[t/h]</span> <span className="text-muted small">ID=525</span>
                </th>

                {/* pocet buniek podla poctu dni v danom roku_a_mesiaci a hodnota k prislusnej kategorii */}

                { dni.map(
                  (x, idx) => (

                    temp_data = data
                      .find(y => y.kategoria.id === 525
                        && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                        && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                        && moment(y.datum * 1000).format("DD") == x),

                      temp_data === undefined ?
                        <td key={idx}></td>
                        :
                        <td key={idx}>{number(temp_data.hodnota, 2)}</td>

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