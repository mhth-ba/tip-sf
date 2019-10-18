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

class PorovnanieSPlanomGraf extends React.Component {
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
    const psp = this.props.psp

    const {
      udt_v,     // sczt vychod | uzitocna dodavka tepla
      str_v,     // sczt vychod | straty
      cdt_v,     // sczt vychod | celkova dodavka tepla
      udt_z,     // sczt zapad | uzitocna dodavka tepla
      str_z,     // sczt zapad | straty
      cdt_z,     // sczt zapad | celkova dodavka tepla
      udt_b,     // bat spolu | uzitocna dodavka tepla
      str_b,     // bat spolu | straty
      cdt_b      // bat spolu | celkova dodavka tepla
    } = psp

    return (
      hlavny.nct_dodavka ?
       <Card>
         <CardBody>
           <ReactHighcharts config={{
             chart: {
               height: 380,
               type: 'column',
               animation: { duration: 1500 }
             },
             colors: this.colors(),
             credits: { enabled: false },
             exporting: {
               enabled: true,
               sourceWidth: 600,
               sourceHeight: 420,
               scale: 2
             },
             title: { text: 'Porovnanie plánu a skutočnosti' },
             subtitle: { text: 'užitočnej dodávky tepla a strát' },
             xAxis: {
               // lineWidth: 0,
               // minorGridLineWidth: 0,
               // tickLength: 0,
               // minorTickLength: 0,
               categories: [ 'SCZT Východ', 'SCZT Západ', 'BAT Spolu' ],
               //labels: { enabled: false },
               //step: 1
             },
             yAxis: {
               // gridLineWidth: 0,
               // minorGridLineWidth: 0,
               /*stackLabels: {
                 enabled: true
               },*/
               title: { text: 'Množstvo tepla v kWh' },
               //labels: { enabled: false }
               //max: 1000000000
             },
             tooltip: {
               shared: false,
               valueSuffix: ' kWh',
               valueDecimals: 0
             },
             plotOptions: {
               /*series: {
                 point: {
                   events: {
                     mouseOver: (e) => {
                       console.log(e)
                     }
                   }
                 }
               },*/
               column: {
                 stacking: 'normal',
               }
             },
             series: [{
               name: 'Plánované straty',
               color: this.state.colors[1],
               data: [str_v.plan, str_z.plan, str_b.plan],
               stack: 'plan'
             }, {
               name: 'Plánovaná dodávka',
               color: this.state.colors[4],
               data: [udt_v.plan, udt_z.plan, udt_b.plan],
               stack: 'plan'
             }, {
               name: 'Skutočné straty',
               color: this.state.colors[3],
               data: [str_v.skut, str_z.skut, str_b.skut],
               stack: 'skutocnost'
             }, {
               name: 'Skutočná dodávka',
               color: this.state.colors[6],
               data: [udt_v.skut, udt_z.skut, udt_b.skut],
               stack: 'skutocnost'
             }]
           }} isPureConfig />
         </CardBody>
       </Card>

        :

        <div></div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  psp: state.porovnaniesplanom
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PorovnanieSPlanomGraf)