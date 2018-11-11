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
          return `<span>${this.name}</span>`
        case 1:
          return `<span>${this.name}</span>`
        case 2:
          return `<span>${this.name}</span>`
        case 3:
          return `<span>${this.name}</span>`
        case 4:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Vonkajšia teplota na TpZ"
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
  }]
}



class VychodZdrojeColumn extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    const chart = this.refs['chart_vykon_zdroje_column'].getChart()

    let ppc = [], tpv = [], slovnaft = [], vhj = [], teplota = []

    this.props.zdroje.ppc_1h.map( row => { ppc.push([ row['hodina'], row['priemer'] ]) })
    this.props.zdroje.tpv_1h.map( row => { tpv.push([ row['hodina'], row['priemer'] ]) })
    this.props.zdroje.slovnaft_1h.map( row => { slovnaft.push([ row['hodina'], row['priemer'] ]) })
    this.props.zdroje.vhj_1h.map( row => { vhj.push([ row['hodina'], row['priemer'] ]) })
    this.props.zdroje.teplota_1h.map( row => { teplota.push([ row['hodina'], row['priemer'] ]) })

    chart.series[0].setData(vhj, false)
    chart.series[1].setData(slovnaft, false)
    chart.series[2].setData(tpv, false)
    chart.series[3].setData(ppc, false)
    chart.series[4].setData(teplota, false)

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
  zdroje: state.vychodzdroje
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  // fetchZdroje: () => dispatch(fetchSCZTVychodZdrojeRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VychodZdrojeColumn)