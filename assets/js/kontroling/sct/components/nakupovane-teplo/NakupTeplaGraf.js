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

class NakupTeplaGraf extends React.Component {
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

    const nt = this.props.nt

    const {
      vn,       // variabilne naklady
      fn        // fixne naklady
    } = nt

    return (
       <Card>
         <CardBody>
           <ReactHighcharts config={{
             chart: {
               height: 400,
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
             title: { text: 'Náklady na nákup tepla' },
             subtitle: { text: 'Variabilné a fixné náklady' },
             xAxis: {
               // lineWidth: 0,
               // minorGridLineWidth: 0,
               // tickLength: 0,
               // minorTickLength: 0,
               categories: [ 'PPC', 'Slovnaft', 'Cogen West' ],
               //labels: { enabled: false },
               //step: 1
             },
             yAxis: {
               // gridLineWidth: 0,
               // minorGridLineWidth: 0,
               stackLabels: {
                 enabled: true
               },
               title: { text: 'Výška nákladov v €' },
               //labels: { enabled: false }
               //max: 1000000000
             },
             tooltip: {
               shared: true,
               valueSuffix: ' €',
             },
             plotOptions: {
               column: {
                 stacking: 'normal',
               }
             },
             series: [{
               name: 'Variabilné náklady',
               color: this.state.colors[4],
               data: [vn.ppc, vn.slovnaft, vn.cw]
             }, {
               name: 'Fixné náklady',
               color: this.state.colors[9],
               data: [fn.ppc, fn.slovnaft, fn.cw]
             }]
           }} isPureConfig />
         </CardBody>
       </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nt: state.nakuptepla
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NakupTeplaGraf)