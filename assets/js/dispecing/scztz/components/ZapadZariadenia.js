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
    text: 'Priebeh výkonu jednotlivých zariadení na Teplárni Západ'
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
    name: 'HK1',
    yAxis: 0,
    type: 'areaspline',
    color: '#484fd5',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'HK3',
    yAxis: 0,
    type: 'areaspline',
    color: '#63b8be',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'K6',
    yAxis: 0,
    type: 'areaspline',
    color: '#fe2812',
    tooltip: { valueSuffix: ' MW' },
    data: []
  }, {
    name: 'TG1',
    yAxis: 0,
    type: 'areaspline',
    color: '#eedf23',
    tooltip: { valueSuffix: ' MWel' },
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



class ZapadZdrojeLine extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    const chart = this.refs['chart_vykon_zariadenia'].getChart()

    let hk1 = [], hk3 = [], k6 = [], tg1 = [], teplota = []

    this.props.zdroje.hk1.map( row => { hk1.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.hk3.map( row => { hk3.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.k6.map( row => { k6.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.tg1.map( row => { tg1.push([ row['datum'], row['hodnota'] ]) })
    this.props.zdroje.teplota.map( row => { teplota.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(hk1, false)
    chart.series[1].setData(hk3, false)
    chart.series[2].setData(k6, false)
    chart.series[3].setData(tg1, false)
    chart.series[4].setData(teplota, false)

    //chart.yAxis[0].setExtremes(0, this.props.zdroje.max['hodnota'])

    chart.redraw()
    chart.reflow()
  }

  render() {

    return (
      <div>
        <ReactHighcharts config={chart} ref={'chart_vykon_zariadenia'} isPureConfig />
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  zdroje: state.zapadzdroje
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  // fetchZdroje: () => dispatch(fetchSCZTVZapadZdrojeRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZapadZdrojeLine)