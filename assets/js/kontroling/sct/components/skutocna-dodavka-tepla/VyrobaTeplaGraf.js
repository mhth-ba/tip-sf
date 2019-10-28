import React from 'react'
import {connect} from 'react-redux'

import { Card, CardBody } from 'reactstrap'

import Highcharts from 'highcharts'
require('highcharts/highcharts-more')(Highcharts)
import ReactHighcharts from 'react-highcharts'

class VyrobaTeplaGraf extends React.Component {
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

    const vyrobatepla = this.props.vyrobatepla

    const {
      tpv,      // teplaren vychod
      vhj,      // vyhrevna juh
      tpz,      // teplaren zapad
      pk,       // plynove kotolne
      vlastne,  // vlastne zdroje (sum)
      ppc,      // paroplynovy cyklus
      slovnaft, // slovnaft
      cw,       // cogen west
      externe,  // externe zdroje (sum)
      spolu     // spolu: vlastne + externe (total)
    } = vyrobatepla

    return (
       <Card>
         <CardBody>
           <ReactHighcharts config={{
             chart: {
               height: 420,
               animation: { duration: 1000 }
             },
             colors: this.colors(),
             credits: { enabled: false },
             title: { text: 'Dodávka tepla podľa zdrojov' },
             subtitle: { text: 'Vlastné a externé zdroje' },
             legend: {
               layout: 'vertical',
               align: 'left',
               verticalAlign: 'top',
               floating: true,
               borderWidth: 1,
               backgroundColor: '#fff',
               shadow: {
                 color: '#5d5d5d',
                 offsetX: 1,
                 offsetY: 1
               },
               x: 10,
               y: 10,
               labelFormatter: function() {
                 const divider = spolu.kwh === 0 ? 1 : spolu.kwh
                 return this.name + ' ' + ( (this.yData[0] * 100) / divider ).toFixed(2).replace('.', ',') + '%'
               }
             },
             xAxis: {
               lineWidth: 0,
               minorGridLineWidth: 0,
               tickLength: 0,
               minorTickLength: 0,
               categories: [ 'Podiel zdrojov', '', '', '', '', '', '', '' ],
               labels: { enabled: false }
             },
             yAxis: {
               gridLineWidth: 0,
               minorGridLineWidth: 0,
               stackLabels: {
                 //enabled: true
               },
               title: { enabled: false },
               labels: { enabled: false }
             },
             //tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>' },
             tooltip: {
               valueDecimals: 0,
               pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y} kWh</b> ({point.percentage:.2f}%)<br/>'
             },
             plotOptions: {
               pie: {
                 allowPointSelect: true,
                 cursor: 'pointer',
                 dataLabels: {
                   enabled: true,
                   format: '<b>{point.name}</b> {point.percentage:.2f} %',
                 }
               },
               column: {
                 stacking: 'normal',
               }
             },
             series: [{
               type: 'column',
               name: 'Vlastné',
               data: [{
                 y: vlastne.kwh
               }, 0, 0, 0, 0, 0, 0, 0]
             }, {
               type: 'column',
               name: 'Externé',
               color: this.state.colors[8],
               data: [{
                 y: externe.kwh
               }, 0, 0, 0, 0, 0, 0, 0]
             }, {
               type: 'pie',
               innerSize: '55%',
               name: 'Podiel',
               data: [{
                 name: 'Tepláreň Východ',
                 y: tpv.kwh,
               }, {
                 name: 'Výhrevňa Juh',
                 y: vhj.kwh
               }, {
                 name: 'Tepláreň Západ',
                 y: tpz.kwh
               }, {
                 name: 'Plynové kotolne',
                 y: pk.kwh
               }, {
                 name: 'PPC',
                 y: ppc.kwh
               }, {
                 name: 'Slovnaft',
                 // color: '#2b3',
                 y: slovnaft.kwh
               }, {
                 name: 'Cogen West',
                 y: cw.kwh
               }].filter(x => x.y > 0)
             }]
           }} />
         </CardBody>
       </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny

  vyrobatepla: state.vyrobatepla
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VyrobaTeplaGraf)