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
    text: 'Diferenčný tlak na zdrojoch | SCZT východ'
  },
  subtitle: {
    text: 'Predikcia / Skutočnosť'
  },
  legend: {
    useHTML: true,
    labelFormatter: function() {
      switch (this.index) {
        case 0:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="VhJ predikcia"
                  >${this.name}</span>`
        case 1:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="VhJ skutočnosť"
                  >${this.name}</span>`
        case 2:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Slovnaft predikcia"
                  >${this.name}</span>`
        case 3:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Slovnaft skutočnosť"
                  >${this.name}</span>`
        case 4:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="TpV predikcia"
                  >${this.name}</span>`
        case 5:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="TpV skutočnosť"
                  >${this.name}</span>`
        case 6:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="PPC predikcia"
                  >${this.name}</span>`
        case 7:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="PPC skutočnosť"
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
      text: 'Diferenčný tlak'
    },
    labels: {
      format: '{value} MPa',
      style: {
        color: '#47e'
      }
    }
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
    name: 'VhJ (P)',
    color: '#b095bb',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' MPa' },
    /*marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: '#ecba17',
      enabled: true
    },*/
    zIndex: 1,
    data: []
  }, {
    name: 'VhJ (S)',
    color: '#92b',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' MPa' },
    //lineWidth: 0,
    //linkedTo: ':previous',
    //fillOpacity: 0.3,
    zIndex: 1,
    /*marker: {
      enabled: false
    },*/
    data: []
  }, {
    name: 'Slovnaft (P)',
    color: '#91bb96',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' MPa' },
    /*marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: '#ecba17',
      enabled: true
    },*/
    zIndex: 1,
    data: []
  }, {
    name: 'Slovnaft (S)',
    color: '#2b3',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' MPa' },
    //lineWidth: 0,
    //linkedTo: ':previous',
    //fillOpacity: 0.3,
    zIndex: 1,
    /*marker: {
      enabled: false
    },*/
    data: []
  }, {
    name: 'TpV (P)',
    color: '#86bccc',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' MPa' },
    /*marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: '#ecba17',
      enabled: true
    },*/
    zIndex: 1,
    data: []
  }, {
    name: 'TpV (S)',
    color: '#39c',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' MPa' },
    //lineWidth: 0,
    //linkedTo: ':previous',
    //fillOpacity: 0.3,
    zIndex: 1,
    /*marker: {
      enabled: false
    },*/
    data: []
  }, {
    name: 'PPC (P)',
    color: '#aa937c',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' MPa' },
    /*marker: {
      fillColor: 'white',
      lineWidth: 2,
      lineColor: '#ecba17',
      enabled: true
    },*/
    zIndex: 1,
    data: []
  }, {
    name: 'PPC (S)',
    color: '#a51',
    type: 'spline',
    yAxis: 0,
    tooltip: { valueSuffix: ' MPa' },
    //lineWidth: 0,
    //linkedTo: ':previous',
    //fillOpacity: 0.3,
    zIndex: 1,
    /*marker: {
      enabled: false
    },*/
    data: []
  }, /*, {
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
  }*/]
}


class VychodZdrojeDiferencny extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const chart = this.refs['chart_zdroje_diferencny_tlak'].getChart()

    // sk = skutocnost, pr = predikcia termis
    let ppc_sk = [],
      ppc_pr = [],
      tpv_sk = [],
      tpv_pr = [],
      slovnaft_sk = [],
      slovnaft_pr = [],
      vhj_sk = [],
      vhj_pr = []

    this.props.zdroje.ppc_dt_sk_10min.map( row => { ppc_sk.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.ppc_dt_pr_10min.map( row => { ppc_pr.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.tpv_dt_sk_10min.map( row => { tpv_sk.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.tpv_dt_pr_10min.map( row => { tpv_pr.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.slovnaft_dt_sk_10min.map( row => { slovnaft_sk.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.slovnaft_dt_pr_10min.map( row => { slovnaft_pr.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.vhj_dt_sk_10min.map( row => { vhj_sk.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.vhj_dt_pr_10min.map( row => { vhj_pr.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(vhj_pr, false)
    chart.series[1].setData(vhj_sk, false)
    chart.series[2].setData(slovnaft_pr, false)
    chart.series[3].setData(slovnaft_sk, false)
    chart.series[4].setData(tpv_pr, false)
    chart.series[5].setData(tpv_sk, false)
    chart.series[6].setData(ppc_pr, false)
    chart.series[7].setData(ppc_sk, false)

    chart.redraw()
    chart.reflow()
  }

  render() {

    return (
      <div>
        <ReactHighcharts config={chart} ref={'chart_zdroje_diferencny_tlak'} isPureConfig />
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  zdroje: state.vychodzdroje,
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  // fetch: (e) => dispatch(fetchSCZTVychodVykonRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VychodZdrojeDiferencny)