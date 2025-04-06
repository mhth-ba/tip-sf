import React from 'react'
import ReactDOM from 'react-dom'

import Highcharts from 'highcharts'
require('highcharts/modules/exporting')(Highcharts)
require('highcharts/modules/export-data')(Highcharts)

import ReactHighcharts from 'react-highcharts'

import Routing from '../../Components/Routing'

Highcharts.setOptions({
    lang: {
        contextButtonTitle: 'Kontextové menu grafu',
        decimalPoint: ',',
        downloadJPEG: 'Stiahnuť JPEG obrázok',
        downloadPDF: 'Stiahnuť PDF dokument',
        downloadPNG: 'Stiahnuť PNG obrázok',
        downloadSVG: 'Stiahnuť SVG vektorový obrázok',
        downloadCSV: 'Export do CSV',
        downloadXLS: 'Export do XLS',
        viewData: 'Zobraziť dátovú tabuľku',
        drillUpText: 'Späť na {series.name}',
        loading: 'Načítavanie...',
        months: [
            'Január', 'Február', 'Marec',
            'Apríl', 'Máj', 'Jún',
            'Júl', 'August', 'September',
            'Október', 'November', 'December'
        ],
        noData: 'Žiadne údaje na zobrazenie',
        printChart: 'Vytlačiť graf',
        shortMonths:  [ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'Máj' , 'Jún' , 'Júl' , 'Aug' , 'Sep' , 'Okt' , 'Nov' , 'Dec' ],
        weekdays: [ 'Nedeľa', 'Pondelok', 'Utorok', 'Steda', 'Štvrtok', 'Piatok', 'Sobota' ]
    }
});

const config = {
    chart: {
        height: 500
    },
    credits: {
        text: 'Bratislavská Teplárenská, a.s. | TI portál',
        href: 'http://www.batas.sk'
    },
    title: {
        text: 'Výkon OST - SCZT Východ'
    },
    subtitle: {
        text: 'za posledných 72 hodín'
    },
    exporting: {
        enabled: true,
        sourceWidth: 1000,
        sourceHeight: 500,
        scale: 2
    },
    tooltip: {
        shared: true,
        //split: true
    },
    xAxis: {
        title: {
            text: 'Priebeh výkonu v čase po hodinách'
        },
        type: 'datetime',
        crosshair: true
    },
    yAxis: [{
        title: {
            text: 'Výkon OST',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + ' MW';
            },
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
    },{
        title: {
            text: 'Počet komunikujúcich OST s platnými údajmi',
            style: {
                color: '#c60'
            }
        },
        labels: {
            style: {
                color: '#c60'
            }
        },
        min: 0,
        opposite: true
    }, {
        title: {
            text: 'Vonkajšia teplota',
            style: {
                color: '#f00',
            }
        },
        labels: {
            formatter: function () {
                return this.value + ' °C'
            },
            style: {
                color: '#f00',
            }
        },
        opposite: true
    }],
    plotOptions: {
        areaspline: {
            fillOpacity: 0.35,
            pointInterval: 3600 * 1000, // jedna hodina
            pointStart: Date.UTC(2018, 2, 25, 0, 0, 0)
        },
        spline: {
            pointInterval: 3600 * 1000, // jedna hodina
            pointStart: Date.UTC(2018, 2, 25, 0, 0, 0)
        }
    },
    series: [{
        name: 'Výkon (vlastné)',
        yAxis: 0,
        type: 'areaspline',
        //color: '#39c',
        tooltip: { valueSuffix: ' kW' },
        data: [450, 320, 190, 250, 140, 260, 470]
    }, {
        name: 'Výkon (cudzie)',
        yAxis: 0,
        type: 'areaspline',
        //color: '#2b3',
        tooltip: { valueSuffix: ' kW' },
        data: [163, 203, 276, 408, 98, 729, 628]
    },{
        name: 'Platné údaje (vlastné)',
        yAxis: 1,
        type: 'spline',
        color: '#f90',
        tooltip: { valueSuffix: ' OST' },
        dashStyle: 'ShortDot',
        marker: {
            enabled: false
        },
        data: [450, 452, 450, 439, 450, 451, 450]
    }, {
        name: 'Platné údaje (cudzie)',
        yAxis: 1,
        type: 'spline',
        color: '#55d13f',
        tooltip: { valueSuffix: ' OST' },
        dashStyle: 'ShortDot',
        marker: {
            enabled: false
        },
        data: [188, 187, 189, 189, 185, 188, 188]
    }, {
        name: 'Teplota',
        yAxis: 2,
        type: 'spline',
        color: '#f00',
        tooltip: { valueSuffix: ' °C' },
        dashStyle: 'LongDashDot',
        marker: {
            enabled: false
        },
        data: [15, 17, 15, 16, 21, 20, 9]
    }]
}

class App extends React.Component {

    render() {
        return (
            <div>
                <ReactHighcharts config={config} />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('vykon-ost')
)