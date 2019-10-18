import React from 'react'
import {connect} from 'react-redux'

import {
  Card, CardBody, CardFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap'

import Highcharts from 'highcharts'
require('highcharts/highcharts-more')(Highcharts)
import ReactHighcharts from 'react-highcharts'
import { kotolne } from "../../selectors/zemny-plyn/zemnyplyn";

class KotolneGraf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      view: 0 // 1 = zemny plyn | 2 = celkove naklady €
    }

    this.view = this.view.bind(this)
  }

  pieColors() {
    const color = Highcharts.getOptions().colors[3]
    let colors = [],
      //base = Highcharts.getOptions().colors[3],
      base = {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7
        },
        stops: [
          [0, color],
          [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
      },
      i

    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }

    return colors
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

      const kotolne = this.props.kotolne
      let platne = []

      kotolne.platnost
        .filter(x => x['plati'] === true)
        .map(x => platne.push(x['kotolna'].id))

      const udaje = this.props.udaje
        .filter(x => platne.includes(x['kotolna'].id))

      let data = []

      const chart = this.refs.kotolne_chart.getChart()

      switch (this.state.view) {
        case 1: {
          udaje.map(item => (
            data.push({
              name: item.kotolna.nazov,
              y: item.m3
            })
          ))

          chart.setSubtitle({ text: 'Spotreba zemného plynu' })
          chart.update({ tooltip: { valueSuffix: ' m3' }}, false)
          chart.series[0].update({name: 'Spotreba'}, false)
          chart.series[0].setData(data, false)
          break
        }
        case 2: {
          udaje.map(item => (
            data.push({
              name: item.kotolna.nazov,
              y: item.cnsd
            })
          ))

          chart.setSubtitle({ text: 'Celkové náklady' })
          chart.update({ tooltip: { valueSuffix: ' €' }}, false)
          chart.series[0].update({name: 'Náklady'}, false)
          chart.series[0].setData(data, false)
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
            colors: this.pieColors(),
            credits: { enabled: false },
            title: { text: 'Plynové kotolne' },
            subtitle: { text: '...' },
            legend: {
              layout: 'vertical',
              align: 'left',
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
            tooltip: { valueSuffix: '', valueDecimals: 0 },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: { enabled: false },
                showInLegend: true
              }
            },
            series: [{
              name: '...',
              data: [{
                name: 'Kotolňa A',
                y: 1
              }, {
                name: 'Kotolňa B',
                y: 2
              }, {
                name: 'Kotolňa C',
                y: 3
              }]
            }]
          }} ref={'kotolne_chart'} />
        </CardBody>
        <CardFooter>
          <Form inline onChange={ this.view }>
            <FormGroup check>
              <Label check>
                <Input type={'radio'} name={'kotolne_graf_view'} value={1} defaultChecked />{' '}
                Zemný plyn m<sup>3</sup>
              </Label>
            </FormGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FormGroup check>
              <Label check>
                <Input type={'radio'} name={'kotolne_graf_view'} value={2} />{' '}
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
  kotolne: state.kotolne,
  udaje: kotolne(state.kotolne.udaje),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KotolneGraf)