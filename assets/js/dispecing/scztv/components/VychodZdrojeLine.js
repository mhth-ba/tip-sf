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
    sourceHeight: 475,
    scale: 2
  },
  title: {
    text: 'Priebeh výkonu jednotlivých zdrojov | SCZT východ'
  },
  subtitle: {
    text: 'Vzorkovanie 10 minút'
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
                        title="Vonkajšia teplota ako priemer z OST"
                  >${this.name}</span>`
        case 5:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Percento otvorenia ventilu TÚV priemer z OST 715, 770 a 841"
                  >${this.name}</span>`
        case 6:
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
    series: {
      marker: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'VhJ',
    yAxis: 0,
    type: 'areaspline',
    color: '#92b',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'Slovnaft',
    yAxis: 0,
    type: 'areaspline',
    color: '#2b3',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'TpV',
    yAxis: 0,
    type: 'areaspline',
    color: '#39c',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'PPC',
    yAxis: 0,
    type: 'areaspline',
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
  }, {
    name: 'Ventil TÚV',
    color: '#ffa905',
    type: 'spline',
    yAxis: 2,
    tooltip: { valueSuffix: ' %' },
    marker: {
      enabled: false
    },
    data: []
  }, {
    name: 'Ventil ÚK',
    color: '#ee1515',
    type: 'spline',
    yAxis: 2,
    tooltip: { valueSuffix: ' %' },
    marker: {
      enabled: false
    },
    data: []
  }]
}



class VychodZdrojeLine extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const chart = this.refs['chart_vykon_zdroje_line'].getChart()

    let ppc = [], tpv = [], slovnaft = [], vhj = [], teplota = [], ventil_tuv = [], ventil_uk = []

    this.props.zdroje.ppc_vykon_10min.map( row => { ppc.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.tpv_vykon_10min.map( row => { tpv.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.slovnaft_vykon_10min.map( row => { slovnaft.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.vhj_vykon_10min.map( row => { vhj.push([ row['datum'], row['hodnota'] ]) })
    //this.props.zdroje.vonkajsia_teplota_10min.map( row => { teplota.push([ row['datum'], row['hodnota'] ]) })
    teplota = this.props.zdroje.vonkajsia_teplota_priemer_10min
    this.props.zdroje.ventil_tuv_10min.map( row => { ventil_tuv.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.ventil_uk_10min.map( row => { ventil_uk.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(vhj, false)
    chart.series[1].setData(slovnaft, false)
    chart.series[2].setData(tpv, false)
    chart.series[3].setData(ppc, false)
    chart.series[4].setData(teplota, false)
    chart.series[5].setData(ventil_tuv, false)
    chart.series[6].setData(ventil_uk, false)

    //chart.yAxis[0].setExtremes(0, this.props.zdroje.max['hodnota'])

    chart.redraw()
    chart.reflow()
  }

  render() {

    return (
      <div>
        <ReactHighcharts config={chart} ref={'chart_vykon_zdroje_line'} isPureConfig />
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
)(VychodZdrojeLine)