import React from 'react'
import {
    Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, Row, Col
} from 'reactstrap'
import scrollToComponent from 'react-scroll-to-component'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import dateTime from '../../../utils/format'
import { connect } from 'react-redux'

import ReactHighcharts from 'react-highcharts'

import * as CONSTANTS from '../../../constants'
import * as CONFIGS from '../../../configs'

const chart = {
    ...CONFIGS.REACT_HIGHCHARTS,
    chart: {
        //margin: [0, 0, 0, 0],
        height: 300,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'spline'
    },
    credits: false,
    title: {
        text: null
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    tooltip: {
        shared: true,
        split: false
    },
    plotOptions: {
        spline: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, null, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, null, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
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

        this.tableRef = React.createRef()
    }

    onSizePerPageList(sizePerPage) {
        localStorage.setItem(CONSTANTS.CACHE_DISP_VCO_PAGES, sizePerPage);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.tabulka !== this.props.tabulka) {
            /*const data = this.props.graf

            const chart = this.refs.chart_ost.getChart()
            chart.series[0].setData(data)*/

            scrollToComponent(this.refs.table_ost, { offset: -5, align: 'top', duration: 2000, ease:'inOutQuart'})
        }
    }

    render() {

        const tabulka = this.props.tabulka

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
                                {/*<ReactHighcharts config={chart} ref="chart_ost" isPureConfig />*/}
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
    tabulka: state.vychladenieost.data.tabulka
})

const mapDispatchToProps = ( state, ownProps ) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VychladenieOST)