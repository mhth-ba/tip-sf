import React from 'react'
import {connect} from 'react-redux'

import { Button } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import cellEditFactory from 'react-bootstrap-table2-editor'
import { dateSmall } from '../../../../utils/format'

import Swal from 'sweetalert2'
import withReactComponent from 'sweetalert2-react-content'

import Suma from '../helpers/Suma'
import * as CONSTANTS from "../../../../constants"
import * as CONFIGS from "../../../../configs"
import {updateDokladRequest, deleteDokladRequest} from "../../actions"

const dateTimeFormatter = ( cell, row ) => (
  dateSmall(cell)
)

const eurFormatter = ( value ) => (
  <Suma v={value} />
)

const rowColor = ( row, idx ) => {
  switch (row.tag) {
    case 2:
      return 'bg-yellow'
    case 3:
      return 'bg-lime'
    case 4:
      return 'bg-azure'
  }
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

const partnerFilter = textFilter({
  placeholder: 'Partner',
  delay: 400
})

class PolozkyVystup extends React.Component {
  constructor(props) {
    super(props)

    this.handleUpdate = this.handleUpdate.bind(this)

    this.druhFormatter = this.druhFormatter.bind(this)
    this.buttonFormatter = this.buttonFormatter.bind(this)
  }

  onSizePerPageList(sizePerPage) {
    localStorage.setItem(CONSTANTS.CACHE_UCT_DP_PAGES, sizePerPage);
  }

  druhFormatter( cell, row ) {

    const druh = [{
      znak: '1G',
      druh: ['ID', 'BV', 'ST']
    }, {
      znak: '1M',
      druh: ['ID', 'DM', 'DN', 'DO', 'BV', 'ST']
    }, {
      znak: '3D',
      druh: ['ID', 'BV', 'ST']
    }, {
      znak: 'XS',
      druh: ['DI', 'DJ', 'DK', 'ID', 'PP', 'ST']
    }, {
      znak: 'XP',
      druh: ['DI', 'DJ', 'DK', 'ID', 'PP', 'ST']
    }, {
      znak: 'XU',
      druh: ['DI', 'DJ', 'DK', 'ID', 'PP', 'ST']
    }, {
      znak: 'XL',
      druh: ['DI', 'DJ', 'DK', 'ID', 'PP', 'ST']
    }, {
      znak: 'LK',
      druh: ['DI', 'DJ', 'DK', 'ID', 'PP', 'ST']
    }, {
      znak: 'KL',
      druh: ['DI', 'DJ', 'DK', 'ID', 'PP', 'ST']
    }, {
      znak: '3V',
      druh: ['DI', 'DJ', 'DK', 'ID', 'PP', 'ST']
    }, {
      znak: 'DA',
      druh: ['DI', 'DJ', 'DK', 'ST']
    }, {
      znak: 'XA',
      druh: ['DI', 'DJ', 'DK', 'ST']
    }, {
      znak: 'XB',
      druh: ['DI', 'DJ', 'DK', 'ST']
    }, {
      znak: 'XE',
      druh: ['DI', 'DJ', 'DK', 'ST']
    }, {
      znak: 'XF',
      druh: ['DI', 'DJ', 'DK', 'ST']
    }, {
      znak: 'XX',
      druh: ['DI', 'DJ', 'DK', 'ST']
    }, {
      znak: 'XY',
      druh: ['DI', 'DJ', 'DK', 'ST']
    }, {
      znak: 'V3',
      druh: ['DM', 'DN', 'DO', 'PP', 'ST']
    }]

    let index = druh.findIndex( x => x.znak === row.znak && x.druh.includes(cell) )

    return index !== -1 ?
      <span style={{ backgroundColor: 'yellow' }}>{cell}</span>
      :
      cell
  }

  buttonFormatter( cell, row ) {
    return <Button onClick={this.handleDelete.bind(this, cell, row)} size={'sm'}>X</Button>
  }

  handleUpdate(row, cellName, cellValue) {
    // ak editujeme pohľad "zmenené", id týchto položiek sa začína číslom 99
    // skutočné ID záznamu v databáze je však bez úvodných dvoch cifier 99, preto ich treba odstrániť
    // v prípade, že editujeme pohľad "pôvodné", neupravujeme nič
    if (String(row.id).substr(0, 2) === '99') {
      row.id = Number(String(row.id).substr(2))
    }

    const data = {
      id: row.id,
      //key: cellName,
      key: column.dataField,
      //[cellName]: cellValue,
      [column.dataField]: newValue,
      zaradenie: 2,
      hlavny: this.props.hlavny.id
    }

    this.props.update(data)

    return true
  }

  handleDelete(cell, row, e) {

    const suma = row.suma_s_dph

    const swal = withReactComponent(Swal)

    swal.fire({
      title: `<p>Vymazať doklad?</p>`,
      text: `Doklad so sumou ${suma} € s DPH sa odstráni z databázy`,
      type: 'question',
      showCancelButton: true,
      cancelButtonText: 'Zrušiť'
    }).then( result => {
      if (result.value) {

        // ak editujeme pohľad "zmenené", id týchto položiek sa začína číslom 99
        // skutočné ID záznamu v databáze je však bez úvodných dvoch cifier 99, preto ich treba odstrániť
        // v prípade, že editujeme pohľad "pôvodné", neupravujeme nič
        if (String(row.id).substr(0, 2) === '99') {
          row.id = Number(String(row.id).substr(2))
        }

        const data = {
          id: row.id,
          zaradenie: 2,
          hlavny: this.props.hlavny.id
        }

        this.props.remove(data)
      }
    })
  }

  render() {

    const p = this.props.p // polozky [array]

    const cacheSizePerPage = localStorage.getItem(CONSTANTS.CACHE_UCT_DP_PAGES)
    const sizePerPage = cacheSizePerPage !== null ? Number.parseInt(cacheSizePerPage) : 10

    const options = {
      ...CONFIGS.REACT_BOOTSTRAP_TABLE,
      sizePerPage,
      onSizePerPageList: this.onSizePerPageList
    }

    const cellEdit = cellEditFactory({
      mode: 'dbclick', // dvojklik pre úpravu bunky
      beforeSaveCell: this.handleUpdate
    })

    const columns = [{
      dataField: 'id',
      text: 'ID',
      hidden: true
    }, {
      dataField: 'doklad',
      text: 'Doklad',
      sort: true,
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '100px'}
      }
    }, {
      dataField: 'referencia',
      text: 'Referencia',
      sort: true,
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '100px' }
      }
    }, {
      dataField: 'obchodny_partner',
      text: 'Obchodný partner',
      sort: true,
      //filter: partnerFilter,
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '210px' }
      }
    }, {
      dataField: 'znak',
      text: 'Znak',
      editable: !this.props.hlavny.zamknute,
      headerStyle: (col, idx) => {
        return { width: '60px' }
      }
    }, {
      dataField: 'druh_dokladu',
      text: 'Druh',
      sort: true,
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '60px' }
      },
      formatter: this.druhFormatter
    }, {
      dataField: 'datum_dokladu',
      text: 'Dátum dokladu',
      sort: true,
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '120px' }
      },
      formatter: dateTimeFormatter
    }, {
      dataField: 'datum_uctovania',
      text: 'Dátum účtovania',
      sort: true,
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '120px' }
      },
      formatter: dateTimeFormatter
    }, {
      dataField: 'suma_bez_dph',
      text: 'Základ dane',
      sort: true,
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '110px' }
      },
      align: 'right',
      headerAlign: 'right',
      formatter: eurFormatter
    }, {
      dataField: 'dph',
      text: 'Výstupná DPH',
      sort: true,
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '110px' }
      },
      align: 'right',
      headerAlign: 'right',
      formatter: eurFormatter
    }, {
      dataField: 'suma_s_dph',
      text: 'Suma s DPH',
      sort: true,
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '110px' }
      },
      align: 'right',
      headerAlign: 'right',
      formatter: eurFormatter
    }, {
      dataField: 'button',
      text: '',
      editable: false,
      headerStyle: (col, idx) => {
        return { width: '30px' }
      },
      formatter: this.buttonFormatter,
      hidden: this.props.hlavny.zamknute
    }]

    return (
      <BootstrapTable keyField={'id'}
                      data={p}
                      columns={columns}
                      bootstrap4
                      cellEdit={cellEdit}
                      rowClasses={rowColor}
                      bordered={false}
                      striped
                      condensed
                      pagination={ pagination }
                      filter={ filterFactory() }
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  update: (e) => dispatch(updateDokladRequest(e)),
  remove: (e) => dispatch(deleteDokladRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolozkyVystup)