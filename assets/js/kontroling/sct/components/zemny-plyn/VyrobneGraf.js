import React from 'react'
import {connect} from 'react-redux'

import {
  Card, CardBody, CardFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap'

import Highcharts from 'highcharts'
require('highcharts/highcharts-more')(Highcharts)
import ReactHighcharts from 'react-highcharts'

class VyrobneGraf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 0 // 1 = zemny plyn | 2 = celkove naklady €
    }

    this.view = this.view.bind(this)
  }

  colors() {
    return Highcharts.map(Highcharts.getOptions().colors, color => {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7
        },
        stops: [
          [0, color],
          [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
      }
    })
  }

  view(e) {
    this.setState({
      view: Number(e.target.value)
    })
  }

  componentDidMount() {
    this.setState({
      view: 1
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps !== this.props || prevState !== this.state) {
      const zp = this.props.plyn

      const {
        tpv,
        tpz,
        vhj
      } = zp

      const chart = this.refs.vyrobne_chart.getChart()

      switch (this.state.view) {

        case 1: {
          chart.setTitle({ text: 'Spotreba zemného plynu na výrobniach' })
          chart.update({ tooltip: { valueSuffix: ' m3' }}, false)
          chart.yAxis[0].setTitle({ text: 'Zemný plyn' })
          chart.series[0].setData([
            tpv.januar.objem_m3,
            tpv.februar.objem_m3,
            tpv.marec.objem_m3,
            tpv.april.objem_m3,
            tpv.maj.objem_m3,
            tpv.jun.objem_m3,
            tpv.jul.objem_m3,
            tpv.august.objem_m3,
            tpv.september.objem_m3,
            tpv.oktober.objem_m3,
            tpv.november.objem_m3,
            tpv.december.objem_m3
          ], false)
          chart.series[1].setData([
            vhj.januar.objem_m3,
            vhj.februar.objem_m3,
            vhj.marec.objem_m3,
            vhj.april.objem_m3,
            vhj.maj.objem_m3,
            vhj.jun.objem_m3,
            vhj.jul.objem_m3,
            vhj.august.objem_m3,
            vhj.september.objem_m3,
            vhj.oktober.objem_m3,
            vhj.november.objem_m3,
            vhj.december.objem_m3
          ], false)
          chart.series[2].setData([
            tpz.januar.objem_m3,
            tpz.februar.objem_m3,
            tpz.marec.objem_m3,
            tpz.april.objem_m3,
            tpz.maj.objem_m3,
            tpz.jun.objem_m3,
            tpz.jul.objem_m3,
            tpz.august.objem_m3,
            tpz.september.objem_m3,
            tpz.oktober.objem_m3,
            tpz.november.objem_m3,
            tpz.december.objem_m3
          ], false)
          break
        }

        case 2: {
          chart.setTitle({ text: 'Celkové náklady na výrobniach' })
          chart.update({ tooltip: { valueSuffix: ' €' }}, false)
          chart.yAxis[0].setTitle({ text: 'Celkové náklady' })
          chart.series[0].setData([
            tpv.januar.naklady,
            tpv.februar.naklady,
            tpv.marec.naklady,
            tpv.april.naklady,
            tpv.maj.naklady,
            tpv.jun.naklady,
            tpv.jul.naklady,
            tpv.august.naklady,
            tpv.september.naklady,
            tpv.oktober.naklady,
            tpv.november.naklady,
            tpv.december.naklady
          ], false)
          chart.series[1].setData([
            vhj.januar.naklady,
            vhj.februar.naklady,
            vhj.marec.naklady,
            vhj.april.naklady,
            vhj.maj.naklady,
            vhj.jun.naklady,
            vhj.jul.naklady,
            vhj.august.naklady,
            vhj.september.naklady,
            vhj.oktober.naklady,
            vhj.november.naklady,
            vhj.december.naklady
          ], false)
          chart.series[2].setData([
            tpz.januar.naklady,
            tpz.februar.naklady,
            tpz.marec.naklady,
            tpz.april.naklady,
            tpz.maj.naklady,
            tpz.jun.naklady,
            tpz.jul.naklady,
            tpz.august.naklady,
            tpz.september.naklady,
            tpz.oktober.naklady,
            tpz.november.naklady,
            tpz.december.naklady
          ], false)
          break
        }
      }

      chart.redraw()
      chart.reflow()
    }
  }

  render() {

    return (
        <Card>
          <CardBody>
            <ReactHighcharts config={{
              chart: {
                height: 400,
                type: 'column',
                animation: { duration: 1500 }
              },
              colors: this.colors(),
              credits: { enabled: false },
              // title: { text: 'Spotreba zemného plynu na výrobniach' },
              legend: {
                align: 'right',
                verticalAlign: 'top',
                floating: true,
                borderWidth: 1,
                backgroundColor: '#fff',
                shadow: {
                  color: '#5d5d5d',
                  offsetX: 1,
                  offsetY: 1
                },
                x: -30,
                y: 25
              },
              xAxis: {
                categories: [
                  'Január', 'Február', 'Marec', 'Apríl',
                  'Máj', 'Jún', 'Júl', 'August',
                  'September', 'Október', 'November', 'December'
                ]
              },
              /*yAxis: {
                title: { text: 'Zemný plyn' },
                // stackLabels: { enabled: true }
              },*/
              tooltip: {
                shared: true,
                valueDecimals: 0,
                // valueSuffix: ' m3',
                pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>'
              },
              plotOptions: {
                column: { stacking: 'normal' },
              },
              series: [{
                name: 'TpV'
              }, {
                name: 'VhJ'
              }, {
                name: 'TpZ'
              }]
            }} ref={'vyrobne_chart'} neverReflow />
          </CardBody>
          <CardFooter>
            <Form inline onChange={ this.view }>
              <FormGroup check>
                <Label check>
                  <Input type={'radio'} name={'vyrobne_graf_view'} value={1} defaultChecked />{' '}
                  Zemný plyn m<sup>3</sup>
                </Label>
              </FormGroup>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <FormGroup check>
                <Label check>
                  <Input type={'radio'} name={'vyrobne_graf_view'} value={2} />{' '}
                  Celkové náklady €
                </Label>
              </FormGroup>
            </Form>
          </CardFooter>
        </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny

  plyn: state.zemnyplyn,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VyrobneGraf)