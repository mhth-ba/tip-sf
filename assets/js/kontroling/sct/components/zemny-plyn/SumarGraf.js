import React from 'react'
import {connect} from 'react-redux'

import {
  Card, CardBody, CardFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap'

import Highcharts from 'highcharts'
require('highcharts/highcharts-more')(Highcharts)
import ReactHighcharts from 'react-highcharts'
import { pk_spolu } from '../../selectors/zemny-plyn/zemnyplyn'

class SumarGraf extends React.Component {
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

      const chart = this.refs.kotolne_chart.getChart()

      const vyrobne = this.props.vyrobne
      const kotolne = this.props.kotolne

      const {
        tpv,
        tpz,
        vhj
      } = vyrobne

      switch (this.state.view) {
        case 1: {
          chart.setTitle({ text: 'Celková spotreba zemného plynu BAT' })
          chart.update({ tooltip: { valueSuffix: ' m3' }}, false)
          chart.series[0].update({name: 'Spotreba'}, false)
          chart.series[0].setData([{
            name: 'TpV',
            y: tpv.spolu.objem_m3
          }, {
            name: 'VhJ',
            y: vhj.spolu.objem_m3
          },{
            name: 'TpZ',
            y: tpz.spolu.objem_m3
          }, {
            name: 'Kotolne',
            y: kotolne.m3
          }], false)
          break
        }
        case 2: {
          chart.setTitle({ text: 'Celkové náklady BAT' })
          chart.update({ tooltip: { valueSuffix: ' €' }}, false)
          chart.series[0].update({name: 'Náklady'}, false)
          chart.series[0].setData([{
            name: 'TpV',
            y: tpv.spolu.naklady
          }, {
            name: 'VhJ',
            y: vhj.spolu.naklady
          },{
            name: 'TpZ',
            y: tpz.spolu.naklady
          }, {
            name: 'Kotolne',
            y: kotolne.cnsd
          }], false)
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
              height: 280,
              type: 'pie',
              animation: { duration: 1500 },
              margin: [55, 0, 0, 0]
            },
            colors: this.colors(),
            credits: { enabled: false },
            title: { text: 'Celková spotreba zemného plynu' },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'bottom',
              floating: true,
              borderWidth: 1,
              backgroundColor: '#fff',
              shadow: {
                color: '#5d5d5d',
                offsetX: 1,
                offsetY: 1
              },
              // x: 0,
              // y: 25,
            },
            xAxis: {},
            yAxis: {},
            tooltip: {
              valueDecimals: 0,
              pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.percentage:.2f}%</b><br/>'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: { enabled: false },
                showInLegend: true
              }
            },
            series: [{
              name: 'Podiel',
              data: [{
                name: 'TpV'
              }, {
                name: 'VhJ'
              }, {
                name: 'TpZ'
              }, {
                name: 'Kotolne'
              }]
            }]
          }} ref={'kotolne_chart'} />
        </CardBody>
        <CardFooter>
          <Form inline onChange={ this.view }>
            <FormGroup check>
              <Label check>
                <Input type={'radio'} name={'sumar_graf_view'} value={1} defaultChecked />{' '}
                Zemný plyn m<sup>3</sup>
              </Label>
            </FormGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FormGroup check>
              <Label check>
                <Input type={'radio'} name={'sumar_graf_view'} value={2} />{' '}
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
  vyrobne: state.zemnyplyn,
  kotolne: pk_spolu(state.kotolne.udaje)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SumarGraf)