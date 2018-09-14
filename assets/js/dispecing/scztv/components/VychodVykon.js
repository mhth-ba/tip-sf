import React from 'react'

import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
//require('highcharts/modules/export-data')(Highcharts)
require('highcharts/highcharts-more')(Highcharts)

import ReactHighcharts from 'react-highcharts'
import * as CONSTANTS from '../../../constants'
import * as CONFIGS from '../../../configs'

import { connect } from 'react-redux'
import { fetchSCZTVychodVykonRequest } from '../actions'



Highcharts.setOptions({...CONFIGS.REACT_HIGHCHART_OPTIONS})

const chart = {
  chart: {
    //margin: [0, 0, 0, 0],
    height: 450,
    zoomType: 'x',
    //plotBackgroundColor: null,
    //plotBorderWidth: null,
    //plotShadow: false,
  },
  credits: {
    ...CONFIGS.REACT_HIGHCHARTS.credits,
    enabled: true,
  },
  exporting: {
    enabled: true,
    sourceWidth: 1100,
    sourceHeight: 450,
    scale: 2
  },
  title: {
    text: 'Porovnanie plánovaného a skutočného výkonu zdrojov a OST v SCZT východ'
  },
  xAxis: {
    type: 'datetime',
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
      text: 'Vonkajšia teplota'
    },
    labels: {
      format: '{value} °C',
      style: {
        color: '#eecc12'
      }
    },
    opposite: true,
    /*min: -20,
    max: 40*/
  }, {
    title: {
      text: 'Výkon'
    },
    labels: {
      format: '{value} MW',
      style: {
        color: '#47e'
      }
    },
  }, {
    title: {
      text: 'Komunikácia'
    },
    labels: {
      //format: '{value} OST',
      style: {
        color: '#2add1d'
      }
    },
    visible: false
  }],
  tooltip: {
    //pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f}</b><br/>',
    shared: true,
    split: true,
    dateTimeLabelFormats: {
      millisecond: '%A %e. %B %Y, %H:%M:%S.%L',
      second: '%A %e. %B %Y, %H:%M:%S',
      minute: '%A %e. %B %Y, %H:%M',
      hour: '%A %e. %B %Y, %H:%M',
      day: '%A %e. %B %Y, %H:%M',
      week: '%A %e. %B %Y',
      month: '%B %Y',
      year: '%Y'
    }
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false
      }
    },
    spline: {
      dataLabels: {
        enabled: false
      },
      enableMouseTracking: true
    }
  },
  series: [{
    name: 'Teplota',
    color: '#eecc12',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' °C' },
    /*marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: '#ecba17',
      enabled: true
    },*/
    zIndex: 1,
    data: []
  }, {
    name: 'Rozsah',
    yAxis: 0,
    tooltip: { valueSuffix: ' °C' },
    type: 'arearange',
    lineWidth: 0,
    linkedTo: ':previous',
    color: '#eecc12',
    fillOpacity: 0.3,
    zIndex: 0,
    marker: {
      enabled: false
    },
    data: []
  }, {
    name: 'Plán',
    color: '#47e',
    type: 'spline',
    //lineWidth: 3,
    yAxis: 1,
    tooltip: { valueSuffix: ' MW' },
    zIndex: 2,
    data: []
  }, {
    name: 'Termis',
    color: '#cb26b3',
    type: 'spline',
    yAxis: 1,
    tooltip: { valueSuffix: ' MW' },
    zIndex: 2,
    data: []
  }, {
    name: 'Zdroje',
    color: '#000',
    type: 'spline',
    yAxis: 1,
    tooltip: { valueSuffix: ' MW' },
    zIndex: 2,
    data: []
  }, {
    name: 'OST',
    color: '#e41e25',
    type: 'spline',
    yAxis: 1,
    tooltip: { valueSuffix: ' MW' },
    zIndex: 2,
    //visible: false,
    data: []
  }, {
    name: 'Komunikácia',
    color: '#2add1d',
    dashStyle: 'ShortDot',
    type: 'spline',
    lineWidth: 1,
    yAxis: 2,
    zIndex: 2,
    //visible: false,
    data: []
  }]
}


class VychodVykon extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {

    const chart = this.refs['chart_vykon_prehlad'].getChart()

    let plan = [], termis = [], zdroje = [], ost = [], komunikacia = [], teplota = []

    this.props.vykon.plan.map( row => { plan.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.termis.map( row => { termis.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.zdroje.map( row => { zdroje.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.ost.map( row => { ost.push([ row['datum'], parseFloat((row['hodnota'] / 1000).toFixed(4)) ]) })
    this.props.vykon.komunikacia.map( row => { komunikacia.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.teplota.map( row => { teplota.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(teplota, false)
    chart.series[2].setData(plan, false)
    chart.series[3].setData(termis, false)
    chart.series[4].setData(zdroje, false)
    chart.series[5].setData(ost, false)
    chart.series[6].setData(komunikacia, false)

    chart.yAxis[0].setExtremes(
      this.props.vykon.extremy_teplota['hodnota_min'],
      this.props.vykon.extremy_teplota['hodnota_max']
    )

    chart.yAxis[1].setExtremes(
      this.props.vykon.extremy_vykon['hodnota_min'],
      this.props.vykon.extremy_vykon['hodnota_max']
    )

    chart.yAxis[2].setExtremes(
      this.props.vykon.extremy_komunikacia['hodnota_min'],
      this.props.vykon.extremy_komunikacia['hodnota_max']
    )

    chart.redraw()
    chart.reflow()

    //console.log(this.props.vykon.teplota)

  }

  render() {

    return (
      <div>
        <ReactHighcharts config={chart} ref={'chart_vykon_prehlad'} isPureConfig />
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  vykon: state.vychodvykon
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  // fetch: (e) => dispatch(fetchSCZTVychodVykonRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VychodVykon)