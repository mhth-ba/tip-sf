import React from 'react'
import {
  Card, CardHeader, CardBody, CardText, CardTitle, CardSubtitle, CardFooter,
  Form, FormGroup,
  Input,
  Button,
  Row, Col,
  Table
} from 'reactstrap'
import { number } from '../../../utils/format'
import NumberFormat from 'react-number-format'
import FontAwesome from 'react-fontawesome'

import { connect } from 'react-redux'
import { fetchReportMeracovRequest } from '../actions'

class Report extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const report = this.props.report
    const loading = report.loading

    return (
      <div>
        <Row>
          <Col sm={4}>
            <Card>
              <CardHeader className="text-white bg-primary">
                Celkový prehľad počtu meradiel{' '}
                { loading && <FontAwesome name="spinner" spin /> }
              </CardHeader>
              <CardBody>
                <CardTitle>Delenie podľa spôsobu odpočtu</CardTitle>
                <br/>
                <Table>
                  <thead>
                  <tr>
                    <th>Spolu</th>
                    <th>{ number(this.props.report.spolu) }</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th>ProCop</th>
                    <td>{ number(this.props.report.procop) }</td>
                  </tr>
                  <tr>
                    <th>Rádio</th>
                    <td>{ number(this.props.report.radio) }</td>
                  </tr>
                  <tr>
                    <th>Ručne</th>
                    <td>{ number(this.props.report.rucne) }</td>
                  </tr>
                  <tr>
                    <th>BVS</th>
                    <td>{ number(this.props.report.bvs) }</td>
                  </tr>
                  <tr>
                    <th>Merače odberateľov</th>
                    <td>{ number(this.props.report.odberatelske) }</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <CardHeader className="text-white bg-primary">
                Celkový prehľad počtu meradiel{' '}
                { loading && <FontAwesome name="spinner" spin /> }
              </CardHeader>
              <CardBody>
                <CardTitle>Delenie podľa typu merania</CardTitle>
                <br/>
                <Table>
                  <tbody>
                  <tr>
                    <th>Merače tepla</th>
                    <td>{ number(this.props.report.gj + this.props.report.mwh) }</td>
                  </tr>
                  <tr>
                    <td>merná jednotka GJ</td>
                    <td>{ number(this.props.report.gj) }</td>
                  </tr>
                  <tr>
                    <td>merná jednotka MWh</td>
                    <td>{ number(this.props.report.mwh) }</td>
                  </tr>
                  <tr>
                    <th>Vodomery</th>
                    <td>{ number(this.props.report.voda) }</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <CardHeader className="text-white bg-primary">
                Celkový prehľad počtu meradiel{' '}
                { loading && <FontAwesome name="spinner" spin /> }
              </CardHeader>
              <CardBody>
                <CardTitle>Delenie podľa lokality</CardTitle>
                <br/>
                <Table>
                  <tbody>
                  <tr>
                    <th>Východná časť</th>
                    <td>{ number(this.props.report.vychod) }</td>
                  </tr>
                  <tr>
                    <th>Západná časť</th>
                    <td>{ number(this.props.report.zapad) }</td>
                  </tr>
                  </tbody>
                </Table>
                <br/>
                <Table>
                  <thead>
                  <tr>
                    <th colSpan={2} className="text-center">Východná časť</th>
                    <th colSpan={2} className="text-center">Západná časť</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th>Merače tepla</th>
                    <td>{ number(this.props.report.vychod_gj + this.props.report.vychod_mwh) }</td>
                    <th>Merače tepla</th>
                    <td>{ number(this.props.report.zapad_gj + this.props.report.zapad_mwh) }</td>
                  </tr>
                  <tr>
                    <td>merná jednotka GJ</td>
                    <td>{ number(this.props.report.vychod_gj) }</td>
                    <td>merná jednotka GJ</td>
                    <td>{ number(this.props.report.zapad_gj) }</td>
                  </tr>
                  <tr>
                    <td>merná jednotka MWh</td>
                    <td>{ number(this.props.report.vychod_mwh) }</td>
                    <td>merná jednotka MWh</td>
                    <td>{ number(this.props.report.zapad_mwh) }</td>
                  </tr>
                  <tr>
                    <th>Vodomery</th>
                    <td>{ number(this.props.report.vychod_voda) }</td>
                    <th>Vodomery</th>
                    <td>{ number(this.props.report.zapad_voda) }</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={6}>
            <Card>
              <CardHeader className="text-white bg-primary">
                Delenie podľa spôsobu odpočtu na východnú a západnú časť{' '}
                { loading && <FontAwesome name="spinner" spin /> }
              </CardHeader>
              <CardBody>
                <CardTitle>
                  Meradlá odčítavané cez systém ProCop ({ number(this.props.report.procop) })
                </CardTitle>
                <CardSubtitle>Delenie podľa lokality</CardSubtitle>
                <br/>
                <Row>
                  <Col>
                    <Table>
                      <thead>
                      <tr>
                        <th>Východná časť</th>
                        <th>{ number(this.props.report.procop_vychod_gj + this.props.report.procop_vychod_mwh
                          + this.props.report.procop_vychod_voda) }</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th>Merače tepla</th>
                        <td>{ number(this.props.report.procop_vychod_gj + this.props.report.procop_vychod_mwh) }</td>
                      </tr>
                      <tr>
                        <td>merná jednotka GJ</td>
                        <td>{ number(this.props.report.procop_vychod_gj) }</td>
                      </tr>
                      <tr>
                        <td>merná jednotka MWh</td>
                        <td>{ number(this.props.report.procop_vychod_mwh) }</td>
                      </tr>
                      <tr>
                        <th>Vodomery</th>
                        <td>{ number(this.props.report.procop_vychod_voda) }</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col>
                    <Table>
                      <thead>
                      <tr>
                        <th>Západná časť</th>
                        <th>{ number(this.props.report.procop_zapad_gj + this.props.report.procop_zapad_mwh
                          + this.props.report.procop_zapad_voda) }</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th>Merače tepla</th>
                        <td>{ number(this.props.report.procop_zapad_gj + this.props.report.procop_zapad_mwh) }</td>
                      </tr>
                      <tr>
                        <td>merná jednotka GJ</td>
                        <td>{ number(this.props.report.procop_zapad_gj) }</td>
                      </tr>
                      <tr>
                        <td>merná jednotka MWh</td>
                        <td>{ number(this.props.report.procop_zapad_mwh) }</td>
                      </tr>
                      <tr>
                        <th>Vodomery</th>
                        <td>{ number(this.props.report.procop_zapad_voda) }</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <CardHeader className="text-white bg-primary">
                Delenie podľa spôsobu odpočtu na východnú a západnú časť{' '}
                { loading && <FontAwesome name="spinner" spin /> }
              </CardHeader>
              <CardBody>
                <CardTitle>
                  Meradlá odčítavané pomocou rádiových terminálov z auta ({ number(this.props.report.radio) })
                </CardTitle>
                <CardSubtitle>Delenie podľa lokality</CardSubtitle>
                <br/>
                <Row>
                  <Col>
                    <Table>
                      <thead>
                      <tr>
                        <th>Východná časť</th>
                        <th>{ number(this.props.report.radio_vychod_gj + this.props.report.radio_vychod_mwh
                          + this.props.report.radio_vychod_voda) }</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th>Merače tepla</th>
                        <td>{ number(this.props.report.radio_vychod_gj + this.props.report.radio_vychod_mwh) }</td>
                      </tr>
                      <tr>
                        <td>merná jednotka GJ</td>
                        <td>{ number(this.props.report.radio_vychod_gj) }</td>
                      </tr>
                      <tr>
                        <td>merná jednotka MWh</td>
                        <td>{ number(this.props.report.radio_vychod_mwh) }</td>
                      </tr>
                      <tr>
                        <th>Vodomery</th>
                        <td>{ number(this.props.report.radio_vychod_voda) }</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col>
                    <Table>
                      <thead>
                      <tr>
                        <th>Západná časť</th>
                        <th>{ number(this.props.report.radio_zapad_gj + this.props.report.radio_zapad_mwh
                          + this.props.report.radio_zapad_voda) }</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th>Merače tepla</th>
                        <td>{ number(this.props.report.radio_zapad_gj + this.props.report.radio_zapad_mwh) }</td>
                      </tr>
                      <tr>
                        <td>merná jednotka GJ</td>
                        <td>{ number(this.props.report.radio_zapad_gj) }</td>
                      </tr>
                      <tr>
                        <td>merná jednotka MWh</td>
                        <td>{ number(this.props.report.radio_zapad_mwh) }</td>
                      </tr>
                      <tr>
                        <th>Vodomery</th>
                        <td>{ number(this.props.report.radio_zapad_voda) }</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  report: state.report
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  fetch: () => dispatch(fetchReportMeracovRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report)