import React from 'react'
import {connect} from 'react-redux'
import {
  Row, Col, Card, CardHeader, CardBody, CardFooter, Table, Input,
  Form, FormGroup, Label
} from 'reactstrap'

import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor'
import { dateSmall, dateTimeSmall } from '../../../utils/format'

import {
  fetchOpravneniaRequest,
  fetchMoznostiRequest,
  fetchHlavneZaznamyEvidencieRequest,
  updateHlavnyRequest,
  updatePostupenieRequest
} from '../actions'

const dateTimeFormatter = ( cell, row ) => (
  dateTimeSmall(cell)
)

const booleanFormatter = ( cell, row ) => {
  return cell ? 'Áno' : 'Nie'
}

const vplyvFormatter = ( cell, row ) => {
  switch (cell) {
    case 1: return 'Žiadny'
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

    this.state = {
      edit: false // 0 = rezim zobrazenia | 1 = rezim uprav
    }


    this.editable = this.editable.bind(this)

    this.handleUpdateHlavny = this.handleUpdateHlavny.bind(this)
    this.handleUpdatePostupenie = this.handleUpdatePostupenie.bind(this)
  }

  editable(e) {
    this.setState({
      edit: e.target.value === 'true'
    })
  }

  handleUpdateHlavny(oldValue, newValue, row, column) {

    const data = {
      id: row.id,
      key: column.dataField,
      [column.dataField]: newValue,
      zaradenie: 1,
    }

    this.props.updateHlavny(data)

    return true
  }

  handleUpdatePostupenie(oldValue, newValue, row, column) {

    const data = {
      id: row.id,
      key: column.dataField,
      [column.dataField]: newValue,
      zaradenie: 1,
      hlavny: this.props.hlavny.id
    }

    this.props.updatePostupenie(data)

    return true
  }

  componentDidMount() {
    this.props.access()
    this.props.options()
    this.props.load()
  }

  render() {

    const opravnenia = this.props.opravnenia.deo
    const moznosti = this.props.moznosti
    const hlavny = this.props.hlavny
    const zaznamy = hlavny.zaznamy

    const edit = this.state.edit

    const cellEdit = cellEditFactory({
      mode: 'click', // dvojklik pre úpravu bunky
      beforeSaveCell: this.handleUpdate
    })

    const expandRow = {
      expandByColumnOnly: true,
      showExpandColumn: true,
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
          { row.postupenia !== null && row.postupenia.map( (v, index) => (
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
      )
    }

    const vplyv_options = [{
      value: 1,
      label: 'Žiadny'
    }, {
      value: 2,
      label: 'Obmedzená dodávka'
    }, {
      value: 3,
      label: 'Prerušená dodávka'
    }]

    // ost ... value=id .... label=cislo + adresa

    let ost_options = []

    moznosti.ost.map( item => {
      ost_options.push({
        value: item.id,
        label: item.cislo + ' ' + item.adresa
      })
    })

    const columns = [{
      dataField: 'id',
      text: 'ID',
      hidden: true
    }, {
      dataField: 'datum_zistenia',
      text: 'Dátum a čas zistenia',
      formatter: dateTimeFormatter,
      editable: edit
    }, {
      dataField: 'ost',
      text: 'OST',
      formatter: ostFormatter,
      editable: edit,
      editor: {
        type: Type.SELECT,
        options: ost_options,
        defaultValue: 1000
      }
    }, {
      dataField: 'predmet.nazov',
      text: 'Predmet',
      editable: edit
    }, {
      dataField: 'zakaznik.meno',
      text: 'Zákazník',
      editable: edit
    }, {
      dataField: 'udalost.nazov',
      text: 'Udalosť',
      editable: edit
    },{
      dataField: 'vytvoril.fullname',
      text: 'Zaevidoval',
      editable: false
    }, {
      dataField: 'doba_trvania',
      text: 'Doba trvania',
      editable: false,
    }, {
      dataField: 'doba_odstranovania',
      text: 'Doba odstraňovania',
      editable: false
    }, {
      dataField: 'vplyv_uk',
      text: 'Vplyv na ÚK',
      formatter: vplyvFormatter,
      editable: edit,
      editor: {
        type: Type.SELECT,
        options: vplyv_options
      }
    }, {
      dataField: 'vplyv_tuv',
      text: 'Vplyv na TÚV',
      formatter: vplyvFormatter,
      editable: edit,
      editor: {
        type: Type.SELECT,
        options: vplyv_options
      }
    }, {
      dataField: 'zavinenie',
      text: 'Zavinenie',
      formatter: booleanFormatter,
      editable: edit,
      editor: {
        type: Type.CHECKBOX,
        value: 'true:false'
      }
    },{
      dataField: 'typ.nazov',
      text: 'Typ',
      editable: edit
    }, {
      dataField: 'poznamka',
      text: 'Poznámka',
      editable: edit
    }]

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Karta hlavných záznamov evidencie</CardHeader>
        <CardBody>
          <BootstrapTable keyField={'id'}
                          data={zaznamy}
                          columns={columns}
                          bootstrap4
                          cellEdit={cellEdit}
                          bordered={false}
                          striped
                          condensed
                          pagination={pagination}
                          filter={filterFactory()}
                          expandRow={expandRow}
          />
        </CardBody>
        { opravnenia &&
          <CardFooter>
            <Form inline onChange={ this.editable }>
              <FormGroup check>
                <Label check>
                  <Input type={'radio'} name={'edit'} value={false} defaultChecked />{' '}
                  Režim zobrazenia
                </Label>
              </FormGroup>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <FormGroup check>
                <Label check>
                  <Input type={'radio'} name={'edit'} value={true} />{' '}
                  Režim úprav
                </Label>
              </FormGroup>
            </Form>
          </CardFooter>
        }
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  opravnenia: state.opravnenia,
  moznosti: state.moznosti,
  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // opravnenia
  access: () => dispatch(fetchOpravneniaRequest()),
  options: () => dispatch(fetchMoznostiRequest()),

  // data read

  // data update
  load: () => dispatch(fetchHlavneZaznamyEvidencieRequest()),
  updateHlavny: (e) => dispatch(updateHlavnyRequest(e)),
  updatePostupenie: (e) => dispatch(updatePostupenieRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HlavneZaznamy)