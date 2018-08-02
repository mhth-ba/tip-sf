import React from 'react'
import {
  Row, Col,
  Card, CardHeader, CardBody, CardTitle, CardSubtitle,
  Table,
  InputGroup, InputGroupText, InputGroupAddon, Label, Input,
  Form, FormGroup, FormFeedback,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import Help from '../../../components/Help'
import FontAwesome from 'react-fontawesome'

import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/export-data')(Highcharts)
require('highcharts/highcharts-more')(Highcharts)

import ReactHighcharts from 'react-highcharts'
import * as CONSTANTS from '../../../constants'
import * as CONFIGS from '../../../configs'

import { connect } from 'react-redux'
import { fetchSCZTVychodZdrojeRequest } from "../../../services/ActionsSCZT";



Highcharts.setOptions({...CONFIGS.REACT_HIGHCHART_OPTIONS})

const chart = {
  chart: {
    height: 400,
    zoomType: 'x',
  },
  credits: {
    ...CONFIGS.REACT_HIGHCHARTS.credits,
    enabled: true,
  },
  exporting: {
    enabled: true,
    buttons: {
      customButton: {
        text: 'Spolu / Jednotlivo',
        //x: -35,
        symbol: 'circle',
        onclick: function () {
          let stack = null
          let opacity = null
          let color = null
          let width = null

          if (this.options.plotOptions.areaspline.stacking === 'normal') {
            stack = null
            opacity = 0.1
            color = null
            width = 2
          } else {
            stack = 'normal'
            opacity = 0.5
            color = '#666'
            width = 1
          }

          this.update({
            plotOptions: {
              areaspline: {
                stacking: stack,
                lineColor: color,
                lineWidth: width,
                marker: {
                  lineColor: color
                },
                fillOpacity: opacity
              }
            }
          })
        }
      }
    },
    sourceWidth: 1100,
    sourceHeight: 400,
    scale: 2
  },
  title: {
    text: 'Priebeh výkonu jednotlivých zdrojov v SCZT východ'
  },
  xAxis: {
    type: 'datetime',
    crosshair: true,
    dateTimeLabelFormats: {
      //minute: '%I:%M',
      //hour: '%I:%M',
      //day: '%e. %b',
      //month: '%b %Y'
    },
    //title: { text: 'Dátum a čas' },
    tickPixelInterval: 60
  },
  yAxis: [{
    title: {
      text: 'Výkon zdrojov',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    labels: {
      formatter: function () {
        return this.value + ' MW';
      },
      style: {
        //color: Highcharts.getOptions().colors[1]
        color: '#47e'
      }
    },
  }, {
    title: {
      text: 'Vonkajšia teplota',
      style: {
        color: '#eecc12',
      }
    },
    labels: {
      formatter: function () {
        return this.value + ' °C'
      },
      style: {
        color: '#eecc12',
      }
    },
    opposite: true
  }],
  tooltip: {
    shared: true,
    split: true,
    dateTimeLabelFormats: {
      millisecond: '%A %e. %b %Y, %H:%M:%S.%L',
      second: '%A %e. %b %Y, %H:%M:%S',
      minute: '%A %e. %b %Y, %H:%M',
      hour: '%A %e. %b %Y, %H:%M',
      day: '%A %e. %b %Y, %H:%M',
      week: '%A %e. %b %Y, %H:%M',
      month: '%A %e. %b %Y, %H:%M'
    }
  },
  plotOptions: {
    areaspline: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#666666'
      },
      fillOpacity: 0.5,
      pointInterval: 3600 * 1000, // jedna hodina
      pointStart: Date.UTC(2018, 2, 25, 0, 0, 0)
    },
    spline: {
      pointInterval: 3600000, // jedna hodina
      pointStart: Date.UTC(2018, 2, 25, 0, 0, 0),
      dataLabels: {
        enabled: false
      },
      enableMouseTracking: true
    },
    /*series: {
      marker: {
        enabled: false
      }
    }*/
  },
  series: [{
    name: 'VhJ',
    yAxis: 0,
    type: 'areaspline',
    color: '#92b',
    tooltip: { valueSuffix: ' MW' },
    data: [200, 160, 210, 230, 220, 180, 120]
  }, {
    name: 'Slovnaft',
    yAxis: 0,
    type: 'areaspline',
    color: '#2b3',
    tooltip: { valueSuffix: ' MW' },
    data: [163, 203, 276, 408, 547, 729, 628]
  }, {
    name: 'TpV',
    yAxis: 0,
    type: 'areaspline',
    color: '#39c',
    tooltip: { valueSuffix: ' MW' },
    data: [106, 130, 190, 250, 100, 260, 98]
  }, {
    name: 'PPC',
    yAxis: 0,
    type: 'areaspline',
    color: '#a51',
    tooltip: { valueSuffix: ' MW' },
    data: [502, 635, 809, 947, 700, 500, 630]
  }, {
    name: 'Teplota',
    color: '#eecc12',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 1,
    tooltip: { valueSuffix: ' °C' },
    marker: {
      enabled: false
    },
    data: [
      18, 16, 19, 20, 21, 23, 10
    ]
  }]
}



class VychodZdroje extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchZdroje()

    this.timerID = setInterval(
      () => this.props.fetchZdroje(),
      10 * 60 * 1000 // 10 minuty
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  componentDidUpdate(prevProps, prevState) {
    const chart = this.refs['chart_vykon_zdroje'].getChart()

    let ppc = [], tpv = [], slovnaft = [], vhj = [], teplota = []

    this.props.zdroje.ppc.map( row => { ppc.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.tpv.map( row => { tpv.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.slovnaft.map( row => { slovnaft.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.vhj.map( row => { vhj.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.teplota.map( row => { teplota.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(vhj, false)
    chart.series[1].setData(slovnaft, false)
    chart.series[2].setData(tpv, false)
    chart.series[3].setData(ppc, false)
    chart.series[4].setData(teplota, false)

    chart.yAxis[0].setExtremes(0, this.props.zdroje.max['hodnota'])

    chart.redraw()
    chart.reflow()
  }

  render() {

    return (
      <div>
        {/*<div style={{ width: '200px' }}>
          <InputGroup>
            <InputGroupAddon addonType={'prepend'}>
              <InputGroupText>Vzorkovanie</InputGroupText>
            </InputGroupAddon>
            <Input type={'select'} id="zdroje_vzorkovanie">
              <option value="1">10 minút</option>
              <option value="2">1 hodina</option>
              <option value="3">6 hodín</option>
              <option value="4">12 hodín</option>
              <option value="5">1 deň</option>
            </Input>
          </InputGroup>
        </div>
        <br/>*/}
        <ReactHighcharts config={chart} ref={'chart_vykon_zdroje'} isPureConfig />
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  zdroje: state.vychodzdroje
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  fetchZdroje: () => dispatch(fetchSCZTVychodZdrojeRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VychodZdroje)