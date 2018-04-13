import React from 'react'
import {
    Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, Row, Col
} from 'reactstrap'
import scrollToComponent from 'react-scroll-to-component'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import dateTime from '../../../utils/format'
import { connect } from 'react-redux'

import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
//require('highcharts/modules/export-data')(Highcharts)
require('highcharts/highcharts-more')(Highcharts)

import ReactHighcharts from 'react-highcharts'

import * as CONSTANTS from '../../../constants'
import * as CONFIGS from '../../../configs'

Highcharts.setOptions({...CONFIGS.REACT_HIGHCHART_OPTIONS})

const chart = {
    ...CONFIGS.REACT_HIGHCHARTS,
    chart: {
        //margin: [0, 0, 0, 0],
        height: 360,
        zoomType: 'x',
        //plotBackgroundColor: null,
        //plotBorderWidth: null,
        //plotShadow: false,
    },
    credits: false,
    exporting: {
        enabled: true,
        sourceWidth: 1100,
        sourceHeight: 360,
        scale: 2
    },
    title: {
        text: null
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { month: '%b %Y' },
        //title: { text: 'Dátum' },
        tickPixelInterval: 60
    },
    yAxis: [{
        title: {
            text: 'Vonkajšia teplota'
        },
        labels: {
            format: '{value} °C',
            style: {
                color: '#ecba17'
            }
        },
        opposite: true,
        min: -20,
        max: 40
    }, {
        title: {
            text: 'Vychladenie'
        },
        labels: {
            format: '{value} °C',
            style: {
                color: '#47e'
            }
        },
        plotLines: [{
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
        max: 90
    }, {
        title: {
            text: 'Vplyv'
        },
        labels: {
            style: {
                color: '#000'
            }
        }
    }, {
        title: {
            text: null, // energia
        },
        labels: {
            format: '{value} GJ',
            style: {
                color: '#e41e25'
            }
        }
    }, {
        title: {
            text: null // objem
        },
        labels: {
            format: '{value} m3',
            style: {
                color: '#1dc'
            }
        }
    }],
    tooltip: {
        //pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f}</b><br/>',
        shared: true,
        split: false,
        dateTimeLabelFormats: {
            hour: "%B %Y"
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
        color: '#ecba17',
        //dashStyle: 'ShortDot',
        //type: 'spline',
        yAxis: 0,
        tooltip: { valueSuffix: ' °C' },
        marker: {
            fillColor: 'white',
            lineWidth: 2,
            lineColor: '#ecba17',
            enabled: true
        },
        zIndex: 1,
        data: []
    }, {
        name: 'Rozsah',
        yAxis: 0,
        tooltip: { valueSuffix: ' °C' },
        type: 'arearange',
        lineWidth: 0,
        linkedTo: ':previous',
        color: '#ecba17',
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
            enabled: false
        },
        data: []
    }, {
        name: 'Vychladenie',
        color: '#47e',
        type: 'spline',
        lineWidth: 3,
        yAxis: 1,
        tooltip: { valueSuffix: ' °C' },
        zIndex: 2,
        data: []
    }, {
        name: 'Vplyv',
        color: '#000',
        type: 'spline',
        yAxis: 2,
        zIndex: 2,
        data: []
    }, {
        name: 'Energia',
        color: '#e41e25',
        type: 'spline',
        yAxis: 3,
        zIndex: 2,
        visible: false,
        data: []
    }, {
        name: 'Objem',
        color: '#1dc',
        type: 'spline',
        yAxis: 4,
        zIndex: 2,
        visible: false,
        data: []
    }]
}

const dateTimeFormatter = ( cell, row ) => (
    dateTime(cell, 'DD.MM.YYYY HH:mm:ss')
)

const decimalFormatter = value => (
    value === null ? '' : value
        .toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
)

const energyFormatter = ( cell, row ) => (
    `${cell
        .toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        } GJ`
)

const volumeFormatter = ( cell, row ) => (
    `${cell
        .toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        } m<sup>3</sup>`
)

const coolingFormatter = ( cell, row ) => (
    `${cell
        .toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        } °C`
)

const monthFormatter = ( month ) => {

    const months = {
        1: 'Január',
        2: 'Február',
        3: 'Marec',
        4: 'Apríl',
        5: 'Máj',
        6: 'Jún',
        7: 'Júl',
        8: 'August',
        9: 'September',
        10: 'Október',
        11: 'November',
        12: 'December'
    }

    return months[month]
}

class VychladenieOST extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.tabulka !== this.props.tabulka) {

            const dataGrafu = this.props.graf
            const ost = this.props.ost

            dataGrafu.map(
                ( data, index ) => {

                    let om, meranie, ref

                    let datum = [], teplotaPriemer = [], teplotaRozsah = [],
                        energia = [], objem = [],
                        vychladenie = [], vplyv = []

                    om = data.find(x => x.om !== null).om
                    meranie = data.find(x => x.meranie !== null).meranie
                    ref = 'chart_ost_' + index

                    data.map(
                        ( riadok, i ) => {
                            datum.push(riadok.datum * 1000)

                            let teplotaAvg_a = riadok.teplotaAvg && parseFloat(riadok.teplotaAvg.toFixed(2))
                            let teplotaMin_a = riadok.teplotaMin && parseFloat(riadok.teplotaMin.toFixed(2))
                            let teplotaMax_a = riadok.teplotaMax && parseFloat(riadok.teplotaMax.toFixed(2))
                            let energia_a = riadok.energia && parseFloat(riadok.energia.toFixed(2))
                            let objem_a = riadok.objem && parseFloat(riadok.objem.toFixed(2))
                            let vychladenie_a = riadok.vychladenie && parseFloat(riadok.vychladenie.toFixed(2))
                            let vplyv_a = riadok.vplyv && parseFloat(riadok.vplyv.toFixed(2))

                            teplotaPriemer.push([ datum[i], teplotaAvg_a ])
                            teplotaRozsah.push([ datum[i], teplotaMin_a, teplotaMax_a ])
                            energia.push([ datum[i], energia_a ])
                            objem.push([ datum[i], objem_a ])
                            vychladenie.push([ datum[i], vychladenie_a ])
                            vplyv.push([ datum[i], vplyv_a ])
                        }
                    )

                    const chart = this.refs[ref].getChart()

                    chart.setTitle({text: `${meranie} na OST ${ost}`})
                    chart.setSubtitle({text: `Odberné miesto ${om}`})

                    chart.series[0].setData(teplotaPriemer, false)
                    chart.series[1].setData(teplotaRozsah, false)
                    chart.series[2].setData(vychladenie, false)
                    chart.series[3].setData(vplyv, false)
                    chart.series[4].setData(energia, false)
                    chart.series[5].setData(objem, false)

                    chart.redraw()

                    let points_a = []
                    points_a.push(chart.series[2].points)
                    points_a.push(chart.series[3].points)
                    points_a.push(chart.series[4].points)

                    points_a.map(
                        points => {
                            for (let i = 0; i < points.length - 1; i++) {
                                if (i > 0
                                    && points[i].y !== null
                                    && points[i-1].y === null
                                    && points[i+1].y === null) {
                                    points[i].update({
                                        marker: {
                                            enabled: true
                                        }
                                    })
                                }
                            }
                        }
                    )

                    chart.reflow()
                }
            )

            scrollToComponent(this.refs.table_ost, { offset: -5, align: 'top', duration: 2000, ease:'inOutQuart'})
        }
    }

    render() {

        const tabulka = this.props.tabulka
        const graf = this.props.graf

        const ost = this.props.ost
        const odberatel = this.props.odberatel
        const adresa = this.props.adresa

        const options = {
            ...CONFIGS.REACT_BOOTSTRAP_TABLE
        }

        return(
            <div ref="table_ost">
                { tabulka.length > 0 &&
                <Card>
                    <CardHeader className="text-white bg-secondary">Vychladenie OST v jednotlivých mesiacoch</CardHeader>
                    <CardBody>
                        <CardTitle>OST {ost}</CardTitle>
                        <CardSubtitle>{odberatel}</CardSubtitle>
                        <CardText>{adresa}</CardText>
                        <br/>
                        <BootstrapTable
                            version={'4'}
                            data={ this.props.tabulka }
                            options={ options }
                            bordered
                            striped
                            condensed
                            pagination
                            search
                            searchPlaceholder={'Hľadať'}
                            exportCSV
                        >
                            <TableHeaderColumn dataField={'om'} width={'85px'} dataSort>
                                Odberné<br/>miesto
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'mp'} width={'75px'} isKey dataSort>
                                Miesto<br/>prístroja
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'tarifa'} width={'80px'} dataAlign={'center'} dataSort>
                                Tarifa
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'rok'} width={'50px'} dataSort>
                                Rok
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'mesiac'} width={'80px'} dataFormat={monthFormatter} dataSort>
                                Mesiac
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'prvyDen'} width={'130px'} dataFormat={dateTimeFormatter} dataSort>
                                Prvý deň
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'poslednyDen'} width={'130px'} dataFormat={dateTimeFormatter} dataSort>
                                Posledný deň
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'teplo'} width={'90px'} dataFormat={energyFormatter} dataAlign={'right'} dataSort>
                                Teplo
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'prietok'} width={'100px'} dataFormat={volumeFormatter} dataAlign={'right'} dataSort>
                                Prietok
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'vychladenie'} width={'110px'} dataFormat={coolingFormatter} dataAlign={'right'} dataSort>
                                Vychladenie
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'vplyv'} width={'80px'} dataFormat={decimalFormatter} dataAlign={'right'} dataSort>
                                Vplyv
                            </TableHeaderColumn>
                        </BootstrapTable>
                        <br/>
                        <Row>
                            <Col>
                                { graf.map(
                                    ( data, ix ) =>
                                        <div key={ix}>
                                            <ReactHighcharts config={chart} ref={'chart_ost_' + ix} isPureConfig />
                                            <br/>
                                            <br/>
                                        </div>
                                ) }
                            </Col>
                        </Row>
                        <CardText>
                            <span className="small text-muted">
                                Údaje za niekoré obdobia sa nemusia vôbec zobrazovať z dôvodov ako je napríklad
                                porucha alebo výmena merača na meranom mieste prístroja. Práve toto spôsobuje zápornú
                                hodnotu spotreby tepla a preto nie je možné zobraziť správny údaj.<br/>
                            </span>
                        </CardText>
                    </CardBody>
                </Card> }
            </div>
        )
    }
}

const mapStateToProps = ( state, ownProps ) => ({
    ost: state.vychladenieost.data.ost,
    odberatel: state.vychladenieost.data.odberatel,
    adresa: state.vychladenieost.data.adresa,
    tabulka: state.vychladenieost.data.tabulka,
    graf: state.vychladenieost.data.graf
})

const mapDispatchToProps = ( state, ownProps ) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VychladenieOST)