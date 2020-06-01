import React from 'react'
import {connect} from 'react-redux'

import {
  Card, CardBody, CardFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap'

import Highcharts from 'highcharts'
require('highcharts/highcharts-more')(Highcharts)
import ReactHighcharts from 'react-highcharts'

class NakladyVCeneGraf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: this.colors(),
      view: 0 // 1 = naklady v cene | 2 porovnanie nakladov v cene
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

    if (prevProps.on !== this.props.on || prevProps.onv !== this.props.onv || prevState.view !== this.state.view) {

      const chart = this.refs.naklady_v_cene_chart.getChart()

      const on = this.props.on
      const onv = this.props.onv
      const varianty = on.varianty

      let categories = ['Schválená ÚRSO', 'Forecast 1-12 100%']

      let variabilne = []
      let fixne = []

      switch (this.state.view) {
        case 1: {

          variabilne.push(Number((on.vnct.plan).toFixed(0)))
          fixne.push(Number((on.fnpz.plan).toFixed(0)))

          variabilne.push(Number((on.vnct.forecast).toFixed(0)))
          fixne.push(Number((on.fnpz.forecast).toFixed(0)))

          varianty.map( (v, idx) => {
            categories.push(`Forecast 1-12 variant #${Number(idx+1)} V=${v.vychod_percento}% Z=${v.zapad_percento}%`)
            variabilne.push(Number((v.vnct).toFixed(0)))
            fixne.push(Number((v.fnpzct).toFixed(0)))
          })

          chart.setTitle({ text: 'Náklady v cene tepla BAT, a.s.' })
          chart.setSubtitle({ text: 'absolútna výška nákladov v €' })

          chart.series[0].setData(variabilne, false)
          chart.series[1].setData(fixne, false)
          chart.xAxis[0].setCategories(categories, false)

          break
        }
        case 2: {
          chart.setTitle({ text: 'Porovnanie nákladov v cene tepla BAT, a.s.' })
          chart.setSubtitle({ text: 'plán - variant' })

          break
        }
      }

      chart.redraw()
      chart.reflow()
    }
  }

  render() {

    const on = this.props.on
    const onv = this.props.onv
    const varianty = on.varianty

    let categories = ['Schválená ÚRSO', 'Forecast 1-12 100%']

    let variabilne = []
    let fixne = []

    return (
      <Card>
        <CardBody>
          <ReactHighcharts config={{
            chart: {
              height: 428,
              type: 'column',
              animation: { duration: 1500 },
            },
            colors: this.colors(),
            credits: { enabled: false },
            title: { text: 'Náklady v cene tepla BAT, a.s.' },
            subtitle: { text: 'absolútna výška nákladov v €' },
            /*legend: {
              layout: 'vertical',
              align: 'left',
              verticalAlign: 'top',
              floating: true,
              borderWidth: 1,
              backgroundColor: '#fff',
              shadow: {
                color: '#5d5d5d',
                offsetX: 1,
                offsetY: 1
              },
              x: 10,
              y: 10,
              /!*labelFormatter: function() {
                const divider = spk.b_kwh === 0 ? 1 : spk.b_kwh
                return this.name + ' ' + ( (this.yData[0] * 100) / divider ).toFixed(2).replace('.', ',') + '%'
              }*!/
            },*/
            xAxis: {
              categories: categories,
            },
            yAxis: {
              // gridLineWidth: 0,
              // minorGridLineWidth: 0,
              stackLabels: {
                enabled: true
              },
              title: { text: 'Náklady a primeraný zisk v cene tepla v €' },
              // labels: { enabled: false }
            },
            tooltip: {
              shared: true,
              valueSuffix: ' €'
              /*valueDecimals: 0,
              pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y} kWh</b> ({point.percentage:.2f}%)<br/>'*/
            },
            plotOptions: {
              column: {
                stacking: undefined,
                dataLabels: {
                  enabled: true,
                  allowOverlap: true
                }
                /*dataLabels: {
                  enabled: true,
                  inside: true,
                  formatter() {
                    return 'blablabla'
                  }
                }*/
              }
            },
            series: [{
              type: 'column',
              name: 'Variabilné náklady',
              color: this.state.colors[5],
              data: variabilne,
            }, {
              type: 'column',
              name: 'Fixné náklady',
              color: this.state.colors[0],
              data: fixne
            }]
          }} ref={'naklady_v_cene_chart'} isPureConfig />
        </CardBody>
        <CardFooter>
          <Form inline onChange={ this.view }>
            <FormGroup check>
              <Label check>
                <Input type={'radio'} name={'onte_graf_view'} value={1} defaultChecked />{' '}
                Náklady v cene tepla
              </Label>
            </FormGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FormGroup check>
              <Label check>
                <Input type={'radio'} name={'onte_graf_view'} value={2} />{' '}
                Porovnanie nákladov v cene tepla
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
  hlavny: state.hlavny,

  varianty: state.varianty,
  on: state.ocakavanenaklady,
  onv: state.ocakavanenakladyvarianty
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NakladyVCeneGraf)