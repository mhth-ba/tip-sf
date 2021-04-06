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
    text: 'Výstupná teplota zo zdrojov | SCZT západ'
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
                        title="Vonkajšia teplota na TpZ"
                  >${this.name}</span>`
        case 1:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="TpZ predikcia"
                  >${this.name}</span>`
        case 2:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="TpZ skutočnosť"
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
      format: '{value:.2f} °C',
      style: {
        color: '#eecc12'
      }
    },
    opposite: true
  }, {
    title: {
      text: 'Výstupná teplota'
    },
    labels: {
      format: '{value:.2f} °C',
      style: {
        color: '#3b69df'
      }
    }
  }],
  tooltip: {
    valueDecimals: 2,
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
    name: 'TpZ (P)',
    color: '#689edf',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 1,
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
    name: 'TpZ (S)',
    color: '#3b69df',
    type: 'spline',
    yAxis: 1,
    tooltip: { valueSuffix: ' °C' },
    //lineWidth: 0,
    //linkedTo: ':previous',
    //fillOpacity: 0.3,
    zIndex: 1,
    /*marker: {
      enabled: false
    },*/
    data: []
  }]
}


class ZapadZdrojeTeplota extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const chart = this.refs['chart_zdroje_vystupna_teplota'].getChart()

    const zdr = this.props.zdroje

    // sk = skutocnost, pr = predikcia termis
    let vonkajsia_teplota = [],
      tpz_sk = [],
      tpz_pr = []

    //vonkajsia_teplota = zdr.teplota
    zdr.teplota_1h.map( row => { vonkajsia_teplota.push([ row['hodina'], row['priemer'] ]) })
    zdr.tpz_tepl_skut.map( row => { tpz_sk.push([ row['datum'], row['hodnota'] ]) })
    zdr.tpz_tepl_pred.map( row => { tpz_pr.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(vonkajsia_teplota, false)
    chart.series[1].setData(tpz_pr, false)
    chart.series[2].setData(tpz_sk, false)

    chart.redraw()
    chart.reflow()
  }

  render() {

    return (
      <div>
        <ReactHighcharts config={chart} ref={'chart_zdroje_vystupna_teplota'} isPureConfig />
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  zdroje: state.zapadzdroje,
  vykon: state.zapadvykon
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  // fetch: (e) => dispatch(fetchSCZTVychodVykonRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZapadZdrojeTeplota)