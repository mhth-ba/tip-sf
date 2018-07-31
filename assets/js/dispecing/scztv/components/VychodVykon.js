import React from 'react'
import {
  Row, Col,
  Card, CardHeader, CardBody, CardTitle, CardSubtitle,
  Table,
  Input,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import Help from '../../../components/Help'
import FontAwesome from 'react-fontawesome'

import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
//require('highcharts/modules/export-data')(Highcharts)
require('highcharts/highcharts-more')(Highcharts)

import ReactHighcharts from 'react-highcharts'
import * as CONSTANTS from '../../../constants'
import * as CONFIGS from '../../../configs'

import { connect } from 'react-redux'
import { fetchSCZTVychodVykonRequest } from '../../../services/ActionsSCZT'



Highcharts.setOptions({...CONFIGS.REACT_HIGHCHART_OPTIONS})

const chart = {
  chart: {
    //margin: [0, 0, 0, 0],
    height: 400,
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
    sourceHeight: 400,
    scale: 2
  },
  title: {
    text: 'Priebeh výkonu SCZT východ'
  },
  xAxis: {
    type: 'datetime',
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
    /*min: -20,
    max: 40*/
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
    /*plotLines: [{
      value: 40,
      color: '#78a6f7',
      dashStyle: 'longdash',
      zIndex: 2,
      width: 1,
      label: {
        text: 'Optimálne vychladenie',
        style: {
          color: '#78a6f7'
        }
      }
    }],
    min: 0,
    max: 90*/
  }, {
    title: {
      text: 'Komunikácia'
    },
    labels: {
      //format: '{value} OST',
      style: {
        color: '#2add1d'
      }
    }
  }, /*{
    title: {
      text: 'OST', // energia
    },
    labels: {
      format: '{value} GJ',
      style: {
        color: '#e41e25'
      }
    }
  }, {
    title: {
      text: 'Komunikácia' // objem
    },
    labels: {
      format: '{value} OST',
      style: {
        color: '#1dc'
      }
    }
  }*/],
  tooltip: {
    //pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f}</b><br/>',
    shared: true,
    split: true,
    dateTimeLabelFormats: {
      // minute: '%I:%M',
      // hour: '%I:%M',
      // week: '%I:%M',
      day: '%e. %b %Y, %H:%M',
      // month: '%b %Y'
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
    name: 'Rozsah',
    yAxis: 0,
    tooltip: { valueSuffix: ' °C' },
    type: 'arearange',
    lineWidth: 0,
    linkedTo: ':previous',
    color: '#eecc12',
    fillOpacity: 0.3,
    zIndex: 0,
    marker: {
      enabled: false
    },
    data: []
  }, {
    name: 'Plán',
    color: '#47e',
    type: 'spline',
    //lineWidth: 3,
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
  }]
}

class VychodVykon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      help: false
    }

    this.help = this.help.bind(this)
  }

  help() {
    this.setState({
      help: !this.state.help
    })
  }

  componentDidMount() {
    this.props.fetchVykon()

    this.timerID = setInterval(
      () => this.props.fetchVykon(),
      //5000
      5 * 60 * 1000 // 5 minut
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  componentDidUpdate(prevProps, prevState) {

    const chart = this.refs['chart_vykon_prehlad'].getChart()

    let plan = [], zdroje = [], ost = [], komunikacia = [], teplota = []

    this.props.vykon.plan.map( row => { plan.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.zdroje.map( row => { zdroje.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.ost.map( row => { ost.push([ row['datum'], parseFloat((row['hodnota'] / 1000).toFixed(4)) ]) })
    this.props.vykon.komunikacia.map( row => { komunikacia.push([ row['datum'], row['hodnota'] ]) })
    this.props.vykon.teplota.map( row => { teplota.push([ row['datum'], row['hodnota'] ]) })

    chart.series[0].setData(teplota, false)
    chart.series[2].setData(plan, false)
    chart.series[3].setData(zdroje, false)
    chart.series[4].setData(ost, false)
    chart.series[5].setData(komunikacia, false)

    chart.yAxis[1].setExtremes(0, this.props.vykon.max['hodnota'] * 1.2)

    chart.redraw()
    chart.reflow()

    //console.log(this.props.vykon.teplota)

  }

  render() {

    const options = {
      ...CONFIGS.REACT_BOOTSTRAP_TABLE,
    }

    const Pomocnik = (
      <div>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#a28c10' }}>Teplota</li>
          </Col>
          <Col sm={10}>
            <span>
              Údaj je z rozvodného uzla. Vzorkovanie v 30 minútovom intervale.
              V databáze prebieha automatické načítanie nových údajov každých :05 a :35 minút po celej hodine.
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#2354c5' }}>Plán</li>
          </Col>
          <Col sm={10}>
            <span>
              Plánovaný výkon podľa denného plánu prevádzky na danú hodinu. Aktualizácia údajov raz za deň o pol noci.
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#000000' }}>Zdroje</li>
          </Col>
          <Col sm={10}>
            <span>
              Sumárny výkon zdrojov vypočítaný z údajov z databázy PROCESS HISTORIAN (Information server)
              ako súčet výkonov PPC + TpV + Slovnaft + VhJ.
              <br/><br/>
              <ul>
                <li>PPC = výtlak - spiatočka</li>
                <li>TpV = TpV severná vetva + TpV južná vetva</li>
                <li>VhJ = VhJ výmenniková stanica - Slovnaft</li>
              </ul>
              Vzorkovanie v 30 minútovom intervale. Aktualizácia údajov každých :05 a :35 minút po celej hodine.
              <br/><br/>
              <div className="text-center">
                <img src="../build/static/scztv_help_schema.png" alt="PPC, VhJ a Slovnaft - zapojenie meračov"
                     title="PPC, VhJ a Slovnaft - zapojenie meračov" />
              </div>
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#e41e25' }}>OST</li>
          </Col>
          <Col sm={10}>
            <span>
              Sumárny výkon všetkých OST, ktorých odberné miesto začína číslicou 2 alebo 8 a s meračmi:
              <br/><br/>
              <ul>
                <li>centrálneho merania,</li>
                <li>ÚK,</li>
                <li>TÚV,</li>
                <li>vzduchotechniky.</li>
              </ul>
              Do výpočtu vstupujú iba hodnoty namerané v čase od :50 až :10 minút po celej hodine.
              Vzorkovanie v hodinovom intervale. Aktualizácia údajov každých :20 a :50 minút po celej hodine.
              Dáta z meračov na OST sa do systému ProCop dostávajú v rôznych obdobiach.
              <br/>
              <span className="small">
                Napríklad od 13:50 do 14:10 sa všetky namerané okamžité výkony spočítajú a priradia k 14:00 hod.
                Merania v iných časoch sa do úvahy neberú.
              </span>
              <br/>
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#108408' }}>Komunikácia</li>
          </Col>
          <Col sm={10}>
            <span>
              Predstavuje počet meraní, ktoré spĺňajú kritériá v položke OST popísané vyššie v danej hodine.
              Taktiež musia byť merania v databáze označené príznakom VALID = 1.
              <br/><br/>
              <span className="text-muted">
                Niektoré merače (resp. dátové koncentrátory) najprv komunikujú so systémom ProCop a až potom odčítajú
                aktuálne stavy, t.j. prenesú sa posledné odčítané stavy z predchádzajúcej hodiny. Dôležité je
                nastavenie synchronizácie týchto medzi sebou súvisiacich procesov a takisto správne a rovnaké nastavenie
                časov na <strong>všetkých</strong> OST. Je potrebné zohľadniť časové pásmo UTC + 1 a letný/zimný posun
                času DST (daylight saving time). Niektoré technologické servery majú nastavený svetový čas UTC, čo môže
                značne skreslovať skutočný výkon všetkých OST spolu.
              </span>
            </span>
          </Col>
        </Row>
      </div>
    )

    return (
      <div>
        <ReactHighcharts config={chart} ref={'chart_vykon_prehlad'} isPureConfig />
        <br/>
        <Help buttonLabel={'Vysvetlivky k legende'} modalTitle={'Legenda grafu priebeh výkonu SCZT východ'}
              modalBody={Pomocnik} size={'lg'} />
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  vykon: state.vychodvykon
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  fetchVykon: () => dispatch(fetchSCZTVychodVykonRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VychodVykon)