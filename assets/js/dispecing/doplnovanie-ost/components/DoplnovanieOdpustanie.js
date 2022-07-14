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
    let unique_ost = [...new Set(data.map(item => item.ost))]
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
            Východ • Doplňovanie a odpúšťanie OST
          </CardHeader>
          <CardBody style={{overflow: 'auto', maxHeight: '85vh'}}>
            <Table size="md" bordered hover>
              <thead className="bg-white sticky-top">
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

              { unique_ost.map(
                (ost, idx) => {
                  /** OST VÝCHOD
                   * Vo vlastníctve BAT
                   * DOPLŇOVANIE aj ODPÚŠŤANIE **/
                  if (data.find(x => x.ost === ost && x.kategoria.id === 511) !== undefined &&
                      data.find(x => x.ost === ost && x.kategoria.id === 512) !== undefined) {
                    return [
                      <tr key={idx}>
                        <th rowSpan={2} className="align-middle">
                          OST {ost}<br/>{(data.find(z => z.nazov.cislo === ost)).nazov.adresa}
                        </th>
                        <th className="text-left text-nowrap">
                          Doplňovanie <span className="font-weight-normal">[t/deň]</span>
                        </th>
                        {dni.map(
                          (x, idx) => (
                            temp_data = data
                              .find(y => y.kategoria.id === 511 && y.ost === ost
                                && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                                && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                                && moment(y.datum * 1000).format("DD") == x),

                              temp_data === undefined ?
                                <td key={idx}></td>
                                :
                                <td key={idx} className={(temp_data.hodnota > 0.5) ? 'bg-lightorange' : ''}>
                                  {number(temp_data.hodnota, 2)}
                                </td>
                          ))
                        }
                      </tr>,
                      <tr key={idx}>
                        <th className="text-left text-nowrap">
                          Odpúšťanie <span className="font-weight-normal">[t/deň]</span>
                        </th>
                        {dni.map(
                          (x, idx) => (
                            temp_data = data
                              .find(y => y.kategoria.id === 512 && y.ost === ost
                                && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                                && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                                && moment(y.datum * 1000).format("DD") == x),

                              temp_data === undefined ?
                                <td key={idx}></td>
                                :
                                <td key={idx} className={(temp_data.hodnota > 0.1) ? 'bg-azure' : ''}>
                                  {number(temp_data.hodnota, 2)}
                                </td>
                          ))
                        }
                      </tr>
                    ]
                    /** OST VÝCHOD
                     * Vo vlastníctve BAT
                     * Iba DOPLŇOVANIE **/
                  } else if (data.find(x => x.ost === ost && x.kategoria.id === 511) !== undefined &&
                             data.find(x => x.ost === ost && x.kategoria.id === 512) === undefined) {
                    return (
                      <tr>
                        <th>
                          OST {ost}<br/>{(data.find(z => z.nazov.cislo === ost)).nazov.adresa}
                        </th>
                        <th className="text-left text-nowrap">
                          Doplňovanie <span className="font-weight-normal">[t/deň]</span>
                        </th>
                        {dni.map(
                          (x, idx) => (
                            temp_data = data
                              .find(y => y.kategoria.id === 511 && y.ost === ost
                                && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                                && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                                && moment(y.datum * 1000).format("DD") == x),

                              temp_data === undefined ?
                                <td key={idx}></td>
                                :
                                <td key={idx} className={(temp_data.hodnota > 0.5) ? 'bg-lightorange' : ''}>
                                  {number(temp_data.hodnota, 2)}
                                </td>
                          ))
                        }
                      </tr>
                    )
                    /** OST VÝCHOD
                     * V cudzom vlastníctve
                     * Iba DOPLŇOVANIE **/
                  } else if (data.find(x => x.ost === ost && x.kategoria.id === 513) !== undefined) {
                    return (
                      <tr>
                        <th>
                          OST {ost}<br/>{(data.find(z => z.nazov.cislo === ost)).nazov.adresa}
                        </th>
                        <th className="text-left text-nowrap">
                          Doplňovanie <span className="font-weight-normal">[t/deň]</span>
                        </th>
                        {dni.map(
                          (x, idx) => (
                            temp_data = data
                              .find(y => y.kategoria.id === 513 && y.ost === ost
                                && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                                && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                                && moment(y.datum * 1000).format("DD") == x),

                              temp_data === undefined ?
                                <td key={idx}></td>
                                :
                                <td key={idx} className={(temp_data.hodnota > 0.5) ? 'bg-lightorange' : ''}>
                                  {number(temp_data.hodnota, 2)}
                                </td>
                          ))
                        }
                      </tr>
                    )
                  }
                }
              )}

              </tbody>
            </Table>
          </CardBody>
        </Card>

        <br/>

        <Card>
          <CardHeader className="bg-primary text-white">
            Západ • Doplňovanie a odpúšťanie OST
          </CardHeader>
          <CardBody style={{overflow: 'auto', maxHeight: '85vh'}}>
            <Table size="md" bordered hover>
              <thead className="bg-white sticky-top">
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

              { unique_ost.map(
                (ost, idx) => {
                  /** OST ZÁPAD
                   * Vo vlastníctve BAT
                   * DOPLŇOVANIE aj ODPÚŠŤANIE **/
                  if (data.find(x => x.ost === ost && x.kategoria.id === 521) !== undefined &&
                    data.find(x => x.ost === ost && x.kategoria.id === 522) !== undefined) {
                    return [
                      <tr key={idx}>
                        <th rowSpan={2} className="align-middle">
                          OST {ost}<br/>{(data.find(z => z.nazov.cislo === ost)).nazov.adresa}
                        </th>
                        <th className="text-left text-nowrap">
                          Doplňovanie <span className="font-weight-normal">[t/deň]</span>
                        </th>
                        {dni.map(
                          (x, idx) => (
                            temp_data = data
                              .find(y => y.kategoria.id === 521 && y.ost === ost
                                && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                                && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                                && moment(y.datum * 1000).format("DD") == x),

                              temp_data === undefined ?
                                <td key={idx}></td>
                                :
                                <td key={idx} className={(temp_data.hodnota > 0.5) ? 'bg-lightorange' : ''}>
                                  {number(temp_data.hodnota, 2)}
                                </td>
                          ))
                        }
                      </tr>,
                      <tr key={idx}>
                        <th className="text-left text-nowrap">
                          Odpúšťanie <span className="font-weight-normal">[t/deň]</span>
                        </th>
                        {dni.map(
                          (x, idx) => (
                            temp_data = data
                              .find(y => y.kategoria.id === 522 && y.ost === ost
                                && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                                && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                                && moment(y.datum * 1000).format("DD") == x),

                              temp_data === undefined ?
                                <td key={idx}></td>
                                :
                                <td key={idx} className={(temp_data.hodnota > 0.1) ? 'bg-azure' : ''}>
                                  {number(temp_data.hodnota, 2)}
                                </td>
                          ))
                        }
                      </tr>
                    ]
                    /** OST ZÁPAD
                     * Vo vlastníctve BAT
                     * Iba DOPLŇOVANIE **/
                  } else if (data.find(x => x.ost === ost && x.kategoria.id === 521) !== undefined &&
                    data.find(x => x.ost === ost && x.kategoria.id === 522) === undefined) {
                    return (
                      <tr>
                        <th>
                          OST {ost}<br/>{(data.find(z => z.nazov.cislo === ost)).nazov.adresa}
                        </th>
                        <th className="text-left text-nowrap">
                          Doplňovanie <span className="font-weight-normal">[t/deň]</span>
                        </th>
                        {dni.map(
                          (x, idx) => (
                            temp_data = data
                              .find(y => y.kategoria.id === 521 && y.ost === ost
                                && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                                && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                                && moment(y.datum * 1000).format("DD") == x),

                              temp_data === undefined ?
                                <td key={idx}></td>
                                :
                                <td key={idx} className={(temp_data.hodnota > 0.5) ? 'bg-lightorange' : ''}>
                                  {number(temp_data.hodnota, 2)}
                                </td>
                          ))
                        }
                      </tr>
                    )
                    /** OST ZÁPAD
                     * V cudzom vlastníctve
                     * Iba DOPLŇOVANIE **/
                  } else if (data.find(x => x.ost === ost && x.kategoria.id === 523) !== undefined) {
                    return (
                      <tr>
                        <th>
                          OST {ost}<br/>{(data.find(z => z.nazov.cislo === ost)).nazov.adresa}
                        </th>
                        <th className="text-left text-nowrap">
                          Doplňovanie <span className="font-weight-normal">[t/deň]</span>
                        </th>
                        {dni.map(
                          (x, idx) => (
                            temp_data = data
                              .find(y => y.kategoria.id === 523 && y.ost === ost
                                && moment(y.datum * 1000).format("YYYY") == this.props.data.rok
                                && moment(y.datum * 1000).format("MM") == this.props.data.mesiac
                                && moment(y.datum * 1000).format("DD") == x),

                              temp_data === undefined ?
                                <td key={idx}></td>
                                :
                                <td key={idx} className={(temp_data.hodnota > 0.5) ? 'bg-lightorange' : ''}>
                                  {number(temp_data.hodnota, 2)}
                                </td>
                          ))
                        }
                      </tr>
                    )
                  }
                }
              )}

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