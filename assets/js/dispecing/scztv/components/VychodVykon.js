import React from 'react'

import _ from 'lodash'

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
    text: 'Výkon zdrojov a OST | SCZT východ'
  },
  subtitle: {
    text: 'Plán / Termis / Skutočnosť'
  },
  legend: {
    useHTML: true,
    labelFormatter: function() {
      switch (this.index) {
        case 0:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Vonkajšia teplota ako priemer z OST"
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
        case 8:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Percento otvorenia ventilu TÚV priemer z OST 715, 770 a 841"
                  >${this.name}</span>`
        case 9:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Percento otvorenia ventilu ÚK priemer z OST 715, 770, 841 a 688"
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
  }, {
    title: {
      text: 'Percento otvorenia ventilu'
    },
    labels: {
      formatter: function () {
        return this.value + ' %'
      },
      style: {
        color: '#ee2818',
      }
    },
    opposite: true,
    min: 0,
    max: 100,
    visible: false
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
  }, {
    name: 'Ventil TÚV',
    color: '#ffa905',
    //dashStyle: 'ShortDot',
    type: 'spline',
    yAxis: 3,
    tooltip: { valueSuffix: ' %' },
    marker: {
      enabled: true
    },
    visible: false,
    data: []
  }, {
    name: 'Ventil ÚK',
    color: '#ee1515',
    //dashStyle: 'ShortDot',
    type: 'spline',
    yAxis: 3,
    tooltip: { valueSuffix: ' %' },
    marker: {
      enabled: true
    },
    visible: false,
    data: []
  }]
}


class VychodVykon extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const chart = this.refs['chart_vykon_prehlad'].getChart()

    let vonkajsia_teplota = [],
      termis_pocasie = [],
      plan = [],
      termis = [],
      zdroje = [],
      termis_ost = [],
      ost = [],
      komunikacia = [],
      ventil_tuv = [],
      ventil_uk = []

    vonkajsia_teplota = this.props.zdroje.vonkajsia_teplota_priemer_1hod
    this.props.vykon.termis_pocasie.map( row => { termis_pocasie.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.plan.map( row => { plan.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.termis.map( row => { termis.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.zdroje.map( row => { zdroje.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.termis_ost.map( row => { termis_ost.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.ost.map( row => { ost.push([ row['datum'], parseFloat((row['hodnota'] / 1000).toFixed(4)) ]) })
    this.props.vykon.komunikacia.map( row => { komunikacia.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.ventil_tuv_10min.map( row => { ventil_tuv.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.ventil_uk_10min.map( row => { ventil_uk.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(vonkajsia_teplota, false)
    chart.series[1].setData(termis_pocasie, false)
    chart.series[2].setData(plan, false)
    chart.series[3].setData(termis, false)
    chart.series[4].setData(zdroje, false)
    chart.series[5].setData(termis_ost, false)
    chart.series[6].setData(ost, false)
    chart.series[7].setData(komunikacia, false)
    chart.series[8].setData(ventil_tuv, false)
    chart.series[9].setData(ventil_uk, false)

    chart.yAxis[2].setExtremes(
      0,
      this.props.vykon.extremy_komunikacia['hodnota_max']
    )

    chart.redraw()
    chart.reflow()
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
  zdroje: state.vychodzdroje,
  vykon: state.vychodvykon
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  // fetch: (e) => dispatch(fetchSCZTVychodVykonRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VychodVykon)