import React from 'react'
import {connect} from 'react-redux'

import { Row, Col, Card, CardHeader, CardBody, CardText, Table } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  powerFormatter(value) {
    return value.toFixed(1).replace('.', ',') + ' kW'
  }

  flowFormatter(value) {
    return value.toFixed(1).replace('.', ',') + ' m3/h'
  }

  temperatureFormatter(value) {
    return value.toFixed(2).replace('.', ',') + ' °C'
  }

  render() {

    const polozky = this.props.polozky
    const nazov = this.props.nazov
    const kriteria = this.props.kriteria

    return (
      <Row>
        <Col md={9}>
          <Card style={{ height: '200px' }}>
            <CardHeader className="text-white bg-primary">
              Dáta spĺňajúce podmienky kontroly
              <span className="pull-right">{polozky.length} meračov</span>
            </CardHeader>
            <CardBody style={{ overflowY: 'scroll' }}>
              <Table size={'sm'} hover>
                <thead>
                <tr>
                  <th>Modul</th>
                  <th>OM</th>
                  <th>OST</th>
                  <th>MP</th>
                  <th>Adresa</th>
                  <th>Odberateľ</th>
                  <th>Sériové číslo</th>
                  <th>Tarifa</th>
                  <th>Jednotka</th>
                  <th className="text-right">Výkon</th>
                  <th className="text-right">Prietok</th>
                  <th className="text-right">Výst. tepl.</th>
                  <th className="text-right">Vrat. tepl.</th>
                  <th className="text-right">&Delta;t</th>
                </tr>
                </thead>
                <tbody>
                { polozky.map(
                  (v, x) => (
                    <tr key={x} style={{ fontSize: '12px' }}>
                      <td>{v.modul}</td>
                      <td>{v.om}</td>
                      <td>{v.ost}</td>
                      <td>{v.device}</td>
                      <td>{v.adresa}</td>
                      <td>{v.odberatel}</td>
                      <td>{v.vc}</td>
                      <td>{v.tarifa}</td>
                      <td>{v.mj}</td>
                      <td className="text-right">{this.powerFormatter(v.power)}</td>
                      <td className="text-right">{this.flowFormatter(v.flow)}</td>
                      <td className="text-right">{this.temperatureFormatter(v.output)}</td>
                      <td className="text-right">{this.temperatureFormatter(v.return)}</td>
                      <td className="text-right">{this.temperatureFormatter(v.delta)}</td>
                    </tr>
                  )
                )}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ height: '200px' }}>
            <CardHeader className="text-white bg-info">Definícia kritérií kontroly</CardHeader>
            <CardBody>
              <CardText className="text-muted">Nasledujúce podmienky musia byť splnené:</CardText>
              {
                kriteria.map(
                  (v, x) => (
                    <p key={x}><FontAwesome name={'check-square-o'} /> &nbsp; {v}</p>
                  )
                )
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
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
)(Container)