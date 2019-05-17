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
    scale: 2,
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
            opacity = 0.0
            color = null
            width = 2
          } else {
            stack = 'normal'
            opacity = 0.4
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
  },
  title: {
    text: 'Výkon OST | SCZT východ'
  },
  subtitle: {
    text: 'Vlastné / Cudzie'
  },
  legend: {
    useHTML: true,
    labelFormatter: function() {
      switch (this.index) {
        case 0:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Vonkajšia teplota ako priemer z OST 644, 655 a 798"
                  >${this.name}</span>`
        case 1:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Výkon vlastných OST"
                  >${this.name}</span>`
        case 2:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Výkon cudzích OST"
                  >${this.name}</span>`
        case 3:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Počet meradiel s platnými údajmi na vlastných OST"
                  >${this.name}</span>`
        case 4:
          return `<span class="my-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Počet meradiel s platnými údajmi na cudzích OST"
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
    opposite: true,
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
    },
    areaspline: {
      //stacking: 'normal',
      //lineColor: '#666666',
      lineWidth: 2,
      marker: {
        lineWidth: 1,
        //lineColor: '#666666'
      },
      fillOpacity: 0.0,
      pointInterval: 3600 * 1000, // jedna hodina
      pointStart: Date.UTC(2018, 2, 25, 0, 0, 0)
    },
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
    name: 'Výkon vlastné OST',
    color: '#e41e25',
    type: 'areaspline',
    yAxis: 1,
    tooltip: { valueSuffix: ' MW' },
    zIndex: 2,
    //visible: false,
    data: []
  }, {
    name: 'Výkon cudzie OST',
    color: '#5375e4',
    type: 'areaspline',
    yAxis: 1,
    tooltip: { valueSuffix: ' MW' },
    zIndex: 2,
    //visible: false,
    data: []
  }, {
    name: 'Prenos vlastné OST',
    color: '#2add1d',
    dashStyle: 'ShortDot',
    type: 'spline',
    lineWidth: 1,
    yAxis: 2,
    zIndex: 2,
    //visible: false,
    data: []
  }, {
    name: 'Prenos cudzie OST',
    color: '#4cdd9c',
    dashStyle: 'ShortDot',
    type: 'spline',
    lineWidth: 1,
    yAxis: 2,
    zIndex: 2,
    //visible: false,
    data: []
  }]
}


class VychodOST extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const chart = this.refs['chart_ost_vychod_prehlad'].getChart()

    let teplota = [],
      vlastne_vykon = [],
      cudzie_vykon = [],
      vlastne_prenos = [],
      cudzie_prenos = []

    this.props.vychod.pocasie_skutocnost.map( row => { teplota.push([ row['datum'], row['hodnota'] ]) })
    this.props.vychod.vlastne_vykon.map( row => { vlastne_vykon.push([ row['datum'], parseFloat((row['hodnota'] / 1000).toFixed(2)) ]) })
    this.props.vychod.cudzie_vykon.map( row => { cudzie_vykon.push([ row['datum'], parseFloat((row['hodnota'] / 1000).toFixed(2)) ]) })
    this.props.vychod.vlastne_prenos.map( row => { vlastne_prenos.push([ row['datum'], row['hodnota'] ]) })
    this.props.vychod.cudzie_prenos.map( row => { cudzie_prenos.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(teplota, false)
    chart.series[1].setData(vlastne_vykon, false)
    chart.series[2].setData(cudzie_vykon, false)
    chart.series[3].setData(vlastne_prenos, false)
    chart.series[4].setData(cudzie_prenos, false)

    /*chart.yAxis[0].setExtremes(
      this.props.vykon.extremy_teplota['hodnota_min'],
      this.props.vykon.extremy_teplota['hodnota_max']
    )

    chart.yAxis[1].setExtremes(
      this.props.vykon.extremy_vykon['hodnota_min'],
      this.props.vykon.extremy_vykon['hodnota_max']
    )*/

    /*chart.yAxis[2].setExtremes(
      0,
      this.props.vykon.extremy_komunikacia['hodnota_max']
    )*/

    chart.redraw()
    chart.reflow()

    //console.log(this.props.vychod.pocasie_skutocnost)
  }

  render() {

    return (
      <div>
        <ReactHighcharts config={chart} ref={'chart_ost_vychod_prehlad'} isPureConfig />
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  vychod: state.vychodost
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  // fetch: (e) => dispatch(fetchSCZTVychodVykonRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VychodOST)