import React from 'react'
import {connect} from 'react-redux'

import { Card, CardBody } from 'reactstrap'

import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/export-data')(Highcharts)
require('highcharts/highcharts-more')(Highcharts)
import ReactHighcharts from 'react-highcharts'

Highcharts.setOptions({...CONFIGS.REACT_HIGHCHART_OPTIONS})

import * as CONFIGS from "../../../../configs";

class OcakavanaCenaGraf extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: this.colors()
    }
  }

  colors() {
    return Highcharts.map(Highcharts.getOptions().colors, color => {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7
        },
        stops: [
          [0, color],
          [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
      }
    })
  }

  render() {

    const hlavny = this.props.hlavny

    const on = this.props.on     // ocakavane naklady
    const onv = this.props.onv   // ocakavane naklady varianty
    const varianty = on.varianty          // vypocitane hodnoty variantov

    let categories = ['Schválená ÚRSO', 'Forecast 1-12 100%']

    let variabil = []
    let fix = []

    variabil.push(Number((on.vzct.plan).toFixed(4)))
    fix.push(Number((on.fzct.plan / 5300).toFixed(4)))

    variabil.push(Number((on.vzct.forecast).toFixed(4)))
    fix.push(Number((on.fzct.forecast / 5300).toFixed(4)))

    varianty.map( (v, idx) => {
      categories.push(`Forecast 1-12 variant #${Number(idx+1)} V=${v.vychod_percento}% Z=${v.zapad_percento}%`)
      variabil.push(Number((v.vzct).toFixed(4)))
      fix.push(Number((v.fzct / 5300).toFixed(4)))
    })

    /*ostatne_roky.map( v => {
      variabil.push({x: v['Rok'], y: v['Variabilna']})
      fix.push({x: v['Rok'], y: v['Fixna']})
    })

    variabil.push({x: hlavny.rok, y: ct.vzct})
    fix.push({x: hlavny.rok, y: Number((ct.fzct / 5300).toFixed(4))})

    // variabilna zlozka - historia
    const vz_2013 = { x: 2013, y: 0.0392 }
    const vz_2014 = { x: 2014, y: 0.0488 }
    const vz_2015 = { x: 2015, y: 0.0488 }
    const vz_2016 = { x: 2016, y: 0.0438 }
    const vz_2017 = { x: 2017, y: 0.0331 }

    // fixna zlozka - historia
    const fz_2013 = { x: 2013, y: Number((177.0632 / 5300).toFixed(4)) }
    const fz_2014 = { x: 2014, y: Number((132.5215 / 5300).toFixed(4)) }
    const fz_2015 = { x: 2015, y: Number((125.5517 / 5300).toFixed(4)) }
    const fz_2016 = { x: 2016, y: Number((135.6254 / 5300).toFixed(4)) }
    const fz_2017 = { x: 2017, y: Number((184.951 / 5300).toFixed(4)) }*/

    return (
       <Card>
         <CardBody>
           <ReactHighcharts config={{
             chart: {
               height: 428,
               type: 'column',
               animation: { duration: 1500 }
             },
             colors: this.colors(),
             credits: { enabled: false },
             exporting: {
               enabled: true,
               buttons: {
                 customButtonA: {
                   text: '',
                   x: -35,
                   symbol: 'circle',
                   onclick: function () {
                     let stack = null

                     if (this.options.plotOptions.column.stacking === 'normal') {
                       stack = null
                     } else {
                       stack = 'normal'
                     }

                     this.update({
                       plotOptions: {
                         column: {
                           stacking: stack,
                         }
                       }
                     })
                   }
                 },

                 customButtonB: {
                   text: '',
                   x: -70,
                   symbol: 'triangle',
                   onclick: function () {
                     let labels = null

                     /*if (this.options.plotOptions.column.dataLabels.enabled === true) {
                       labels = true
                     } else {
                       labels = false
                     }*/

                     this.update({
                       plotOptions: {
                         column: {
                           dataLabels: {
                             enabled: !this.options.plotOptions.column.dataLabels.enabled
                           },
                         }
                       }
                     })
                   }
                 }
               },
               sourceWidth: 600,
               sourceHeight: 420,
               scale: 2
             },
             title: {
               text: 'Očakávaná cena tepla BAT, a.s.'
             },
             subtitle: {
               text: 'porovnanie zložiek všetkých variantov'
             },
             xAxis: {
               // lineWidth: 0,
               // minorGridLineWidth: 0,
               // tickLength: 0,
               // minorTickLength: 0,
               //categories: [ 'Podiel zdrojov', '', '', '', '', '', '', '' ],
               categories: categories,
               //labels: { enabled: false },
               //step: 1
             },
             yAxis: {
               // gridLineWidth: 0,
               // minorGridLineWidth: 0,
               stackLabels: {
                 enabled: true
               },
               title: { text: 'Cena tepla v €/kWh' },
               //labels: { enabled: false }
             },
             tooltip: {
               shared: true,
               valueSuffix: ' €/kWh'
             },
             plotOptions: {
               column: {
                 stacking: 'normal',
                 dataLabels: {
                   enabled: false
                 }
               }
             },
             series: [{
               type: 'column',
               name: 'Variabilná zložka',
               color: this.state.colors[5],
               data: variabil /*[vz_2013, vz_2014, vz_2015, vz_2016, vz_2017, {
                 x: 2018,
                 y: Number(ct.vzct)
               }]*/
             }, {
               type: 'column',
               name: 'Fixná zložka',
               color: this.state.colors[0],
               data: fix /*[fz_2013, fz_2014, fz_2015, fz_2016, fz_2017, {
                 x: 2018,
                 y: Number((Number(ct.fzct) / 5300).toFixed(4))
               }]*/
             }]
           }} isPureConfig />
         </CardBody>
       </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
  hlavny: state.hlavny,

  varianty: state.varianty,
  on: state.ocakavanenaklady,
  onv: state.ocakavanenakladyvarianty
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OcakavanaCenaGraf)