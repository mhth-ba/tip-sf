import React from 'react'
import {connect} from 'react-redux'

import {
  Card, CardBody, CardFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap'

import Highcharts from 'highcharts'
require('highcharts/highcharts-more')(Highcharts)
import ReactHighcharts from 'react-highcharts'

class UzitocnaDodavkaGraf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: this.colors(),
      view: 0 // 1 = TpV | 2 = TpZ | 3 = BAT spolu
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
      view: 3
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.dodavkatepla !== this.props.dodavkatepla || prevState.view !== this.state.view) {

      const chart = this.refs.uzitocna_dodavka_tepla_chart.getChart()

      const dodavkatepla = this.props.dodavkatepla

      const {
        zdroj,
        primar,
        ost,        // OST
        sekundar,
        pk,         // plynove kotolne
        straty,

        spk         // spolu vratane plynovych kotolni
      } = dodavkatepla

      switch (this.state.view) {
        case 1: {
          chart.setTitle({ text: 'Dodávka tepla SCZT Východ' })
          chart.series[2].setData([{
            name: 'Zdroj',
            color: this.state.colors[1],
            y: zdroj.v_kwh
          }, {
            name: 'Primár',
            color: this.state.colors[4],
            y: primar.v_kwh
          },{
            name: 'OST',
            color: this.state.colors[3],
            y: ost.v_kwh
          }, {
            name: 'Sekundár',
            color: this.state.colors[5],
            y: sekundar.v_kwh
          }, {
            name: 'Plynové kotolne',
            color: this.state.colors[9],
            y: pk.v_kwh
          }, {
            name: 'Straty',
            color: this.state.colors[6],
            y: straty.v_kwh
          }].filter(x => x.y > 0), false)
          break
        }
        case 2: {
          chart.setTitle({ text: 'Dodávka tepla SCZT Západ' })
          chart.series[2].setData([{
            name: 'Zdroj',
            color: this.state.colors[1],
            y: zdroj.z_kwh
          }, {
            name: 'Primár',
            color: this.state.colors[4],
            y: primar.z_kwh
          },{
            name: 'OST',
            color: this.state.colors[3],
            y: ost.z_kwh
          }, {
            name: 'Sekundár',
            color: this.state.colors[5],
            y: sekundar.z_kwh
          }, {
            name: 'Plynové kotolne',
            color: this.state.colors[9],
            y: pk.z_kwh
          }, {
            name: 'Straty',
            color: this.state.colors[6],
            y: straty.z_kwh
          }].filter(x => x.y > 0), false)
          break
        }
        case 3: {
          chart.setTitle({ text: 'Dodávka tepla BAT Spolu' })
          chart.series[2].setData([{
            name: 'Zdroj',
            color: this.state.colors[1],
            y: zdroj.b_kwh
          }, {
            name: 'Primár',
            color: this.state.colors[4],
            y: primar.b_kwh
          },{
            name: 'OST',
            color: this.state.colors[3],
            y: ost.b_kwh
          }, {
            name: 'Sekundár',
            color: this.state.colors[5],
            y: sekundar.b_kwh
          }, {
            name: 'Plynové kotolne',
            color: this.state.colors[9],
            y: pk.b_kwh
          }, {
            name: 'Straty',
            color: this.state.colors[6],
            y: straty.b_kwh
          }].filter(x => x.y > 0), false)
          break
        }
      }

      chart.redraw()
      chart.reflow()
    }
  }

  render() {

    const dodavkatepla = this.props.dodavkatepla

    const {
      zdroj,
      primar,
      ost,        // OST
      sekundar,
      pk,         // plynove kotolne
      straty,

      spk         // spolu vratane plynovych kotolni
    } = dodavkatepla

    return (
      <Card>
        <CardBody>
          <ReactHighcharts config={{
            chart: {
              height: 375,
              animation: { duration: 1500 },
              //margin: [55, 0, 0, 0]
            },
            colors: this.colors(),
            credits: { enabled: false },
            title: { text: 'Dodávka tepla BAT spolu' },
            subtitle: { text: 'Podľa stupňov sústavy' },
            legend: {
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
              /*labelFormatter: function() {
                const divider = spk.b_kwh === 0 ? 1 : spk.b_kwh
                return this.name + ' ' + ( (this.yData[0] * 100) / divider ).toFixed(2).replace('.', ',') + '%'
              }*/
            },
            xAxis: {
              lineWidth: 0,
              minorGridLineWidth: 0,
              tickLength: 0,
              minorTickLength: 0,
              categories: [ 'Podiel SCZT', '', '', '', '', '', '', '' ],
              labels: { enabled: false }
            },
            yAxis: {
              gridLineWidth: 0,
              minorGridLineWidth: 0,
              stackLabels: {
                //enabled: true
              },
              title: { enabled: false },
              labels: { enabled: false }
            },
            //tooltip: { valueDecimals: 0, },
            tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>' },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                //center: [350, 150],
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b> {point.percentage:.2f} %'
                },
                showInLegend: false
              },
              column: {
                stacking: 'normal'
              }
            },
            series: [{
              type: 'column',
              name: 'Západ',
              color: this.state.colors[2],
              data: [{
                y: spk.z_kwh
              }, 0, 0, 0, 0, 0, 0, 0]
            }, {
              type: 'column',
              name: 'Východ',
              color: this.state.colors[0],
              data: [{
                y: spk.v_kwh
              }, 0, 0, 0, 0, 0, 0, 0]
            }, {
              type: 'pie',
              //innerSize: '30%',
              name: 'Podiel',
              data: [{
                name: 'Zdroj',
                color: this.state.colors[1],
                y: zdroj.b_kwh
              }, {
                name: 'Primár',
                color: this.state.colors[4],
                y: primar.b_kwh
              }, {
                name: 'OST',
                color: this.state.colors[3],
                y: ost.b_kwh
              }, {
                name: 'Sekundár',
                color: this.state.colors[5],
                y: sekundar.b_kwh
              }, {
                name: 'Plynové kotolne',
                color: this.state.colors[9],
                y: pk.b_kwh
              }, {
                name: 'Straty',
                color: this.state.colors[6],
                y: straty.b_kwh
              }].filter(x => x.y > 0)
            }]
          }} ref={'uzitocna_dodavka_tepla_chart'} isPureConfig />
        </CardBody>
        <CardFooter>
          <Form inline onChange={ this.view }>
            <FormGroup check>
              <Label check>
                <Input type={'radio'} name={'udt_graf_view'} value={1} />{' '}
                SCZT Východ
              </Label>
            </FormGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FormGroup check>
              <Label check>
                <Input type={'radio'} name={'udt_graf_view'} value={2} />{' '}
                SCZT Západ
              </Label>
            </FormGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <FormGroup check>
              <Label check>
                <Input type={'radio'} name={'udt_graf_view'} value={3} defaultChecked />{' '}
                BAT Spolu
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
  
  dodavkatepla: state.dodavkatepla
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UzitocnaDodavkaGraf)