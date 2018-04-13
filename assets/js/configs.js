export const REACT_BOOTSTRAP_TABLE = {
    exportCSVText: 'Export',
    noDataText: 'Žiadne údaje na zobrazenie',
    paginationSize: 7,
    sizePerPageList: [5, 10, 20, 30, 50],
    paginationShowsTotal: ( start, to, total ) => (
        `Záznamy ${start} ~ ${to} z ${total}`
    ),
}

export const REACT_HIGHCHARTS = {
    credits: {
        text: 'Bratislavská Teplárenská, a.s. | TI portál',
        href: '/tip-sf/web'
    }
}

export const REACT_HIGHCHART_OPTIONS = {
    lang: {
        contextButtonTitle: 'Kontextové menu grafu',
        downloadJPEG: 'Stiahnuť JPEG obrázok',
        downloadPDF: 'Stiahnuť PDF dokument',
        downloadPNG: 'Stiahnuť PNG obrázok',
        downloadSVG: 'Stiahnuť SVG vektorový obrázok',
        downloadCSV: 'Export do CSV',
        downloadXLS: 'Export do XLS',
        viewData: 'Zobraziť dátovú tabuľku',
        drillUpText: 'Späť na {series.name}',
        months: [
            'Január', 'Február', 'Marec', 'Apríl',
            'Máj', 'Jún', 'Júl', 'August',
            'September', 'Október', 'November', 'December'
        ],
        shortMonths: [ 'Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec' ],
        weekdays: [ 'Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota' ],
        thousandsSep: ' ',
        decimalPoint: ',',
        noData: 'Žiadne údaje na zobrazenie',
        printChart: 'Vytlačiť graf',
        loading: 'Načítavanie...'
    }
}