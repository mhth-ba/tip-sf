import React from 'react'

import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/export-data')(Highcharts)
require('highcharts/highcharts-more')(Highcharts)

import ReactHighcharts from 'react-highcharts'
import * as CONFIGS from '../../../configs'

import { connect } from 'react-redux'

Highcharts.setOptions({...CONFIGS.REACT_HIGHCHART_OPTIONS})

// oznacenie dni/noci a vikendov
// http://jsfiddle.net/yj06z3qo/1/
// https://api.highcharts.com/highcharts/xAxis.plotBands

const chart = {
  chart: {
    //margin: [0, 0, 0, 0],
    height: 475,
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
    sourceHeight: 475,
    scale: 2
  },
  title: {
    text: 'Porovnanie plánovaného a skutočného výkonu zdrojov a OST v SCZT východ'
  },
  legend: {
    useHTML: true,
    labelFormatter: function() {
      switch (this.index) {
        case 0:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Vonkajšia teplota na TpZ"
                  >${this.name}</span>`
        case 1:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Predpoveď vonkajšej teploty"
                  >${this.name}</span>`
        case 2:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Denný plán prevádzky"
                  >${this.name}</span>`
        case 3:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Predikcia celkového výkonu zdrojov"
                  >${this.name}</span>`
        case 4:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Skutočný celkový výkon zdrojov"
                  >${this.name}</span>`
        case 5:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Predikcia odberu tepla zo siete"
                  >${this.name}</span>`
        case 6:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Celkový odber tepla zo siete"
                  >${this.name}</span>`
        case 7:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Počet meradiel s platnými údajmi"
                  >${this.name}</span>`
      }
    }
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
      text: 'Vonkajšia teplota'
    },
    labels: {
      format: '{value} °C',
      style: {
        color: '#eecc12'
      }
    },
    opposite: true
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
    min: 0
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
    min: 0,
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
    name: 'Termis teplota',
    color: '#ee9d18',
    dashStyle: 'LongDash',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' °C' },
    //lineWidth: 0,
    //linkedTo: ':previous',
    //fillOpacity: 0.3,
    zIndex: 1,
    /*marker: {
      enabled: false
    },*/
    data: []
  }, {
    name: 'Denný plán',
    color: '#47e',
    type: 'spline',
    //lineWidth: 3,
    yAxis: 1,
    tooltip: { valueSuffix: ' MW' },
    zIndex: 2,
    visible: false,
    data: [],
  }, {
    name: 'Termis zdroje',
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
    name: 'Termis OST',
    color: '#a062cb',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 1,
    tooltip: { valueSuffix: ' MW' },
    zIndex: 2,
    visible: false,
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

    let teplota = [],
      termis_pocasie = [],
      plan = [],
      termis = [],
      zdroje = [],
      termis_ost = [],
      ost = [],
      komunikacia = []

    this.props.vykon.teplota.map( row => { teplota.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.termis_pocasie.map( row => { termis_pocasie.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.plan.map( row => { plan.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.termis.map( row => { termis.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.zdroje.map( row => { zdroje.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.termis_ost.map( row => { termis_ost.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.ost.map( row => { ost.push([ row['datum'], parseFloat((row['hodnota'] / 1000).toFixed(4)) ]) })
    this.props.vykon.komunikacia.map( row => { komunikacia.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(teplota, false)
    chart.series[1].setData(termis_pocasie, false)
    chart.series[2].setData(plan, false)
    chart.series[3].setData(termis, false)
    chart.series[4].setData(zdroje, false)
    chart.series[5].setData(termis_ost, false)
    chart.series[6].setData(ost, false)
    chart.series[7].setData(komunikacia, false)

    /*chart.yAxis[0].setExtremes(
      this.props.vykon.extremy_teplota['hodnota_min'],
      this.props.vykon.extremy_teplota['hodnota_max']
    )

    chart.yAxis[1].setExtremes(
      this.props.vykon.extremy_vykon['hodnota_min'],
      this.props.vykon.extremy_vykon['hodnota_max']
    )*/

    chart.yAxis[2].setExtremes(
      0,
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