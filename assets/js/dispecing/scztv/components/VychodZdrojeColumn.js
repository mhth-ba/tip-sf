import React from 'react'

import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/export-data')(Highcharts)
require('highcharts/highcharts-more')(Highcharts)

import ReactHighcharts from 'react-highcharts'
import * as CONFIGS from '../../../configs'

import { connect } from 'react-redux'

Highcharts.setOptions({...CONFIGS.REACT_HIGHCHART_OPTIONS})

const chart = {
  chart: {
    height: 475,
    zoomType: 'x',
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
    text: 'Výkon jednotlivých zdrojov v SCZT východ'
  },
  subtitle: {
    text: 'Hodinový priemer z 10 minútových intervalov'
  },
  legend: {
    useHTML: true,
    labelFormatter: function() {
      switch (this.index) {
        case 0:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Predpoveď vonkajšej teploty"
                  >${this.name}</span>`
        case 1:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Vonkajšia teplota ako priemer z OST 644, 655 a 798"
                  >${this.name}</span>`
        case 2:
          return `<span>${this.name}</span>`
        case 3:
          return `<span>${this.name}</span>`
        case 4:
          return `<span>${this.name}</span>`
        case 5:
          return `<span>${this.name}</span>`
        case 6:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Predikcia celkového výkonu zdrojov"
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
      text: 'Výkon'
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
    min: 0
  }, {
    title: {
      text: 'Vonkajšia teplota'
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
    column: {
      stacking: 'normal',
    },
    spline: {
      pointInterval: 3600000, // jedna hodina
      //pointStart: Date.UTC(2018, 2, 25, 0, 0, 0),
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
    name: 'Teplota',
    color: '#eecc12',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 1,
    tooltip: { valueSuffix: ' °C' },
    marker: {
      enabled: false
    },
    data: []
  }, {
    name: 'Termis teplota',
    color: '#ed7e14',
    dashStyle: 'ShortDash',
    type: 'spline',
    yAxis: 1,
    tooltip: { valueSuffix: ' °C' },
    marker: {
      enabled: false
    },
    data: []
  }, {
    name: 'VhJ',
    yAxis: 0,
    type: 'column',
    color: '#92b',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'Slovnaft',
    yAxis: 0,
    type: 'column',
    color: '#2b3',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'TpV',
    yAxis: 0,
    type: 'column',
    color: '#39c',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'PPC',
    yAxis: 0,
    type: 'column',
    color: '#a51',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'Termis zdroje',
    yAxis: 0,
    type: 'spline',
    color: '#2f2f2f',
    tooltip: { vallueSuffix: ' MW' },
    marker: {
      enabled: true
    },
    data: []
  }]
}



class VychodZdrojeColumn extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const chart = this.refs['chart_vykon_zdroje_column'].getChart()

    let teplota = [], termis_pocasie = [],
      ppc = [], tpv = [], slovnaft = [], vhj = [], termis_zdroje = []

    this.props.zdroje.vonkajsia_teplota_1h.map( row => { teplota.push([ row['hodina'], row['priemer'] ]) })
    this.props.vykon.termis_pocasie.map( row => { termis_pocasie.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.ppc_vykon_1h.map( row => { ppc.push([ row['hodina'], row['priemer'] ]) })
    this.props.zdroje.tpv_vykon_1h.map( row => { tpv.push([ row['hodina'], row['priemer'] ]) })
    this.props.zdroje.slovnaft_vykon_1h.map( row => { slovnaft.push([ row['hodina'], row['priemer'] ]) })
    this.props.zdroje.vhj_vykon_1h.map( row => { vhj.push([ row['hodina'], row['priemer'] ]) })
    this.props.vykon.termis.map( row => { termis_zdroje.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(teplota, false)
    chart.series[1].setData(termis_pocasie, false)
    chart.series[2].setData(vhj, false)
    chart.series[3].setData(slovnaft, false)
    chart.series[4].setData(tpv, false)
    chart.series[5].setData(ppc, false)
    chart.series[6].setData(termis_zdroje, false)

    //chart.yAxis[0].setExtremes(0, this.props.zdroje.max['hodnota'])

    chart.redraw()
    chart.reflow()
  }

  render() {

    return (
      <div>
        <ReactHighcharts config={chart} ref={'chart_vykon_zdroje_column'} isPureConfig />
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  vykon: state.vychodvykon,
  zdroje: state.vychodzdroje
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  // fetchZdroje: () => dispatch(fetchSCZTVychodZdrojeRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VychodZdrojeColumn)