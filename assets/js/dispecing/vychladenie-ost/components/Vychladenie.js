import React from 'react'
import {
    Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText,
    Table, Row, Col,
    InputGroup, InputGroupText, InputGroupAddon, Input, Alert
} from 'reactstrap'
import ReactLoading from 'react-loading'
import FontAwesome from 'react-fontawesome'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import dateTime from '../../../utils/format'
import { connect } from 'react-redux'
import {
    fetchZoznamObdobiRequest,
    fetchVychladeniePrehladRequest,
    fetchVychladenieOSTRequest,
} from '../actions/Actions'

import Highcharts from 'highcharts'
import ReactHighcharts from 'react-highcharts'

import * as CONSTANTS from '../../../constants'
import * as CONFIGS from '../../../configs'

Highcharts.setOptions({
    colors: [
        '#ff0000',
        '#ff6400',
        '#ffc900',
        '#3f50cf',
        '#40c627',
    ]
})

Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.25).get('rgb')] // darken
            ]
        }
    })
})

const chart = {
    ...CONFIGS.REACT_HIGHCHARTS,
    chart: {
        margin: [0, 0, 0, 0],
        animation: {
            duration: 1000
        },
        height: 270,
        //width: 400,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    credits: false,
    title: {
        text: null
    },
    legend: {
        layout: 'vertical',
        title: {
            text: 'Vychladenie'
        },
        itemStyle: {
            color: '#4c4c4c',
            fontSize: "12px",
            fontWeight: "normal",
            textOverflow: 'ellipsis'
        },
        backgroundColor: '#ffffff',
        labelFormat: '<b>{name}</b> ({percentage:.1f}%)',
        align: 'right',
        verticalAlign: 'top',
        floating: true,
        borderWidth: 1,
        //x: 90,
        //y: 0
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                },
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Počet OM',
        showInLegend: true,
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

class Vychladenie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            alertInfoVisible: true
        }

        this.onDismiss = this.onDismiss.bind(this)

        this.handleFetchPrehlad = this.handleFetchPrehlad.bind(this)
        this.handleFetchOST = this.handleFetchOST.bind(this)
    }

    onDismiss() {
        this.setState({ alertInfoVisible: false })
    }

    handleFetchPrehlad(e) {
        const option = e.target.options[e.target.selectedIndex]

        const rok = option.getAttribute('data-rok')
        const mesiac = option.getAttribute('data-mesiac')

        const data = {
            rok,
            mesiac
        }

        this.props.fetchVychladeniePrehlad(data)
    }

    handleFetchOST(row, cell) {
        if (cell === 1) { // kliknutie na bunku v stĺpci OST
            const ost = row.ost
            const odberatel = row.odberatel
            const adresa = row.adresa

            this.props.fetchVychladenieOST({
                ost,
                odberatel,
                adresa
            })
        }
    }

    onSizePerPageList(sizePerPage) {
        localStorage.setItem(CONSTANTS.CACHE_DISP_VCO_PAGES, sizePerPage);
    }

    componentDidMount() {
        this.props.fetchZoznamObdobi()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.tabulka !== this.props.tabulka) {
            const data = this.props.graf

            const chart = this.refs.chart.getChart()
            chart.series[0].setData(data)
        }
    }

    render() {

        const loading = this.props.loading
        const prehlad = this.props.prehlad

        const loadingOST = this.props.loadingOST

        const cacheSizePerPage = localStorage.getItem(CONSTANTS.CACHE_DISP_VCO_PAGES)
        const sizePerPage = cacheSizePerPage !== null ? Number.parseInt(cacheSizePerPage) : 10

        const obdobia = {
            roky: Object.keys(this.props.obdobia).reverse(),
            obdobia: Object.values(this.props.obdobia).reverse()
        }

        const options = {
            ...CONFIGS.REACT_BOOTSTRAP_TABLE,
            sizePerPage,
            onSizePerPageList: this.onSizePerPageList,
            onRowClick: this.handleFetchOST
        }

        return (
            <div>
                { loadingOST &&
                <ReactLoading type="spin" color="#51565d" delay={0} className="react-loader" /> }
                <Card>
                    <CardHeader className="text-white bg-primary">Celkový mesačný prehľad v zvolenom období</CardHeader>
                    <CardBody>
                        <CardTitle>V zozname sa nachádzajú iba OST, ktoré nie sú v správe BAT</CardTitle>
                        <CardSubtitle>Výpočet je realizovaný na mesačnej báze</CardSubtitle>
                        <br/>
                        <div style={{ width: '270px' }}>
                            <InputGroup>
                                <InputGroupAddon addonType={'prepend'}>
                                    <InputGroupText>
                                        Obdobie
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="select" onChange={ this.handleFetchPrehlad } disabled={ loading }>
                                    { obdobia.obdobia.map(
                                            ( group, i ) =>
                                                <optgroup key={i} label={ obdobia.roky[i] }>
                                                    { group.map(
                                                        ( obdobie, i ) =>
                                                            <option key={i} data-rok={ obdobie.rok }
                                                                    data-mesiac={ obdobie.mesiac }
                                                            >{obdobie.rok} {monthFormatter(obdobie.mesiac)}</option>)
                                                    }
                                                </optgroup>)
                                    }
                                </Input>
                                { loading &&
                                <InputGroupAddon addonType={'append'}>
                                    <InputGroupText><FontAwesome name="spinner" spin /></InputGroupText>
                                </InputGroupAddon> }
                            </InputGroup>
                        </div>
                        <br/>
                        <BootstrapTable
                            version={'4'}
                            data={ this.props.tabulka }
                            options={ options }
                            //multiColumnSort={4}
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
                            <TableHeaderColumn dataField={'ost'} width={'55px'}
                                               tdStyle={{ cursor: 'pointer', textDecoration: 'underline' }} dataSort>
                                OST
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'mp'} width={'75px'} isKey dataSort>
                                Miesto<br/>prístroja
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'odberatel'} width={'50%'} dataSort>
                                Odberateľ
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'adresa'} width={'50%'} dataSort>
                                Adresa
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'tarifa'} width={'80px'} dataAlign={'center'} dataSort>
                                Tarifa
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'prvyDen'} width={'130px'}
                                               dataFormat={dateTimeFormatter} dataSort>
                                Prvý deň
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'poslednyDen'} width={'130px'}
                                               dataFormat={dateTimeFormatter} dataSort>
                                Posledný deň
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'spotrebaEnergie'} width={'90px'}
                                               dataFormat={energyFormatter} dataAlign={'right'} dataSort>
                                Teplo
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'spotrebaObjemu'} width={'100px'}
                                               dataFormat={volumeFormatter} dataAlign={'right'} dataSort>
                                Prietok
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'vychladenie'} width={'110px'}
                                               dataFormat={coolingFormatter} dataAlign={'right'} dataSort>
                                Vychladenie
                            </TableHeaderColumn>
                            <TableHeaderColumn dataField={'vplyv'} width={'80px'}
                                               dataFormat={decimalFormatter} dataAlign={'right'} dataSort>
                                Vplyv
                            </TableHeaderColumn>
                        </BootstrapTable>
                        <Alert color="info" style={{ width: '595px' }}
                               isOpen={ this.state.alertInfoVisible } toggle={this.onDismiss}>
                            <FontAwesome name="info-circle" />{' '}
                            Vychladenie konkrétnej stanice v jednotlivých mesiacoch zobrazíte kliknutím na číslo OST
                        </Alert>
                        <CardText>
                            <span className="small text-muted">
                                Kvôli správnosti výpočtu sa uvažujú iba meradlá pripojené na primárne potrubie.<br/>
                            </span>
                        </CardText>
                    </CardBody>
                </Card>

                <br/>

                { prehlad.length > 0 &&
                <Card>
                    <CardBody>
                        <Row>
                            <Col lg="12" xl="6">
                                <Table size="md" bordered>
                                    <thead className="text-center">
                                    <tr>
                                        <th rowSpan={2}>Vychladenie</th>
                                        <th rowSpan={2}>Počet OM</th>
                                        <th colSpan={2}>Sumárny odber</th>
                                    </tr>
                                    <tr>
                                        <th>Teplo</th>
                                        <th>Objem</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { prehlad.map( ( polozka, ix ) =>
                                        <tr key={ix}>
                                            <td>{ polozka.hranica }</td>
                                            <td>{ polozka.pocetOm }</td>
                                            <td className="text-right">
                                                { decimalFormatter(polozka.energia) } GJ
                                            </td>
                                            <td className="text-right">
                                                { decimalFormatter(polozka.objem) } m<sup>3</sup>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col lg="12" xl="6">
                                <ReactHighcharts config={chart} ref="chart" isPureConfig />
                            </Col>
                        </Row>
                    </CardBody>
                </Card> }
            </div>
        )
    }
}

const mapStateToProps = ( state, ownProps ) => ({
    loading: state.vychladenie.loading,
    loadingOST: state.vychladenieost.loading,
    obdobia: state.vychladenie.obdobia,
    tabulka: state.vychladenie.mesiac.tabulka,
    prehlad: state.vychladenie.mesiac.prehlad,
    graf: state.vychladenie.mesiac.graf
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    fetchZoznamObdobi: () => dispatch(fetchZoznamObdobiRequest()),
    fetchVychladeniePrehlad: (e) => dispatch(fetchVychladeniePrehladRequest(e)),
    fetchVychladenieOST: (e) => dispatch(fetchVychladenieOSTRequest(e))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vychladenie)