import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Card, CardHeader, CardBody, Table} from 'reactstrap'

import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import cellEditFactory from 'react-bootstrap-table2-editor'
import { dateSmall, dateTimeSmall } from '../../../utils/format'

import {fetchHlavneZaznamyEvidencieRequest} from '../actions'

const dateTimeFormatter = ( cell, row ) => (
  dateTimeSmall(cell)
)

const booleanFormatter = ( cell, row ) => {
  return cell ? 'Áno' : 'Nie'
}

const vplyvFormatter = ( cell, row ) => {
  switch (cell) {
    case 1: return '-'
    case 2: return 'Obmedzená dodávka'
    case 3: return 'Prerušená dodávka'
  }
}

const ostFormatter = ( cell, row ) => {
  return `${cell.cislo} ${cell.adresa}`
}

const pagination = paginationFactory({
  sizePerPage: 10,
  showTotal: true, // display pagination information
  sizePerPageList: [5, 10, 20, 30, 50],
  withFirstAndLast: false, // hide the going to first and last page button
  alwaysShowAllBtns: true, // always show the next and previous page button
  firstPageText: '<<', // the text of first page button
  prePageText: '<', // the text of previous page button
  nextPageText: '>', // the text of next page button
  lastPageText: '>>', // the text of last page button
  nextPageTitle: 'Ďalšia strana', // the title of next page button
  prePageTitle: 'Predchádzajúca strana', // the title of previous page button
  firstPageTitle: 'Prvá strana', // the title of first page button
  lastPageTitle: 'Posledná strana', // the title of last page button
  hideSizePerPage: false, // hide the size per page dropdown
  hidePageListOnlyOnePage: true // hide pagination bar when only one page, default is false
})

class HlavneZaznamy extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.load()
  }

  render() {

    const hlavny = this.props.hlavny
    const zaznamy = hlavny.zaznamy

    const expandRow = {
      renderer: row => (
        <Table>
          <thead>
          <tr>
            <th>Dátum a čas postúpenia</th>
            <th>Postúpené na</th>
            <th>Udalosť</th>
            <th>Zaevidoval</th>
            <th>Vyriešené</th>
            <th>Dátum odstránenia</th>
            <th>Poznámka</th>
          </tr>
          </thead>
          <tbody>
          { row.postupenia.map( (v, index) => (
            <tr key={index}>
              <td>{dateTimeFormatter(v.datum_postupenia)}</td>
              <td>{v.subjekt_postupenia.subjekt}</td>
              <td>{v.udalost.nazov}</td>
              <td>{v.vytvoril.fullname}</td>
              <td>{booleanFormatter(v.vyriesene)}</td>
              <td>{dateTimeFormatter(v.datum_odstranenia)}</td>
              <td>{v.poznamka}</td>
            </tr>
            ) ) }
          </tbody>
        </Table>
      ),
      showExpandColumn: true
    }

    const columns = [{
      dataField: 'id',
      text: 'ID',
      hidden: true
    }, {
      dataField: 'datum_zistenia',
      text: 'Dátum a čas zistenia',
      formatter: dateTimeFormatter
    }, {
      dataField: 'ost',
      text: 'OST',
      formatter: ostFormatter
    }, {
      dataField: 'predmet.nazov',
      text: 'Predmet'
    }, {
      dataField: 'zakaznik.meno',
      text: 'Zákazník'
    }, {
      dataField: 'udalost.nazov',
      text: 'Udalosť'
    },{
      dataField: 'vytvoril.fullname',
      text: 'Zaevidoval'
    }, {
      dataField: '',
      text: 'Doba trvania'
    }, {
      dataField: '',
      text: 'Doba odstraňovania'
    }, {
      dataField: 'vplyv_uk',
      text: 'Vplyv na ÚK',
      formatter: vplyvFormatter
    }, {
      dataField: 'vplyv_tuv',
      text: 'Vplyv na TÚV',
      formatter: vplyvFormatter
    }, {
      dataField: 'zavinenie',
      text: 'Zavinenie',
      formatter: booleanFormatter
    },{
      dataField: 'typ.nazov',
      text: 'Typ'
    }, {
      dataField: 'poznamka',
      text: 'Poznámka'
    }];

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Karta hlavných záznamov evidencie</CardHeader>
        <CardBody>
          <BootstrapTable keyField={'id'}
                          data={zaznamy}
                          columns={columns}
                          bootstrap4
                          bordered={false}
                          striped
                          condensed
                          pagination={pagination}
                          filter={ filterFactory() }
                          expandRow={expandRow}
          />
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: () => dispatch(fetchHlavneZaznamyEvidencieRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HlavneZaznamy)