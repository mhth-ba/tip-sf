import React from 'react'
import {connect} from 'react-redux'

import { Row, Col } from 'reactstrap'
import {fetchPrehladRequest} from "../actions"

import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/export-data')(Highcharts)
require('highcharts/highcharts-more')(Highcharts)

import ReactHighcharts from 'react-highcharts'
import * as CONFIGS from '../../../configs'

Highcharts.setOptions({...CONFIGS.REACT_HIGHCHART_OPTIONS})

const chart_kategorie = {
  chart: {
    height: 350,
    type: 'column'
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
    text: 'Vylúčené podľa kategórie'
  },
  subtitle: {
    text: 'Počet vylúčených meraných miest'
  },
  legend: {},
  xAxis: {
    type: 'category'
  },
  yAxis:{
    title: {
      text: 'Počet vylúčených'
    }
  },
  tooltip: {},
  plotOptions: {
    column: {
      showInLegend: false
    }
  },
  series: [{
    name: 'Vylúčených',
    colorByPoint: true
  }]
}

const chart_poznamky = {
  chart: {
    height: 350,
    type: 'column'
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
    text: 'Vylúčené podľa poznámky (dôvodu)'
  },
  subtitle: {
    text: 'Počet vylúčených meraných miest'
  },
  legend: {},
  xAxis: {
    type: 'category'
  },
  yAxis:{
    title: {
      text: 'Počet vylúčených'
    }
  },
  tooltip: {},
  plotOptions: {
    column: {
      showInLegend: false
    }
  },
  series: [{
    name: 'Vylúčených',
    colorByPoint: true
  }]
}

class Prehlad extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState, prevContext) {

    /*if (prevProps.opravnenia.anm !== this.props.opravnenia.anm) {
      if (this.props.opravnenia.anm) {
        this.props.load()
      }
    }*/

    if (prevProps.vylucene.polozky !== this.props.vylucene.polozky) {
      this.props.load()
    }

    if (prevProps.prehlad !== this.props.prehlad) {

      const chart_kategorie = this.refs['chart_kategorie'].getChart()
      const chart_poznamky = this.refs['chart_poznamky'].getChart()

      let kategorie = [],
        poznamky = []

      this.props.prehlad.kategorie.map( item => kategorie.push({ name: item['kategoria'], y: item['pocet'] }) )
      this.props.prehlad.poznamky.map( item => poznamky.push({ name: item['poznamka'], y: item['pocet'] }) )

      chart_kategorie.series[0].setData(kategorie, false)
      chart_poznamky.series[0].setData(poznamky, false)

      chart_kategorie.redraw()
      chart_kategorie.reflow()

      chart_poznamky.redraw()
      chart_poznamky.reflow()
    }
  }

  render() {

    const editor = this.props.opravnenia.anm

    return (
      <div>
        { editor &&
          <div>
            <Row>
              <Col>
                <ReactHighcharts config={chart_kategorie} ref={'chart_kategorie'} isPureConfig />
              </Col>
              <Col>
                <ReactHighcharts config={chart_poznamky} ref={'chart_poznamky'} isPureConfig />
              </Col>
            </Row>
            <br/><br/>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
  opravnenia: state.opravnenia,
  vylucene: state.vylucene,
  prehlad: state.prehlad
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: (e) => dispatch(fetchPrehladRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prehlad)