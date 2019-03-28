import React from 'react'
import {connect} from 'react-redux'

import { Button } from 'reactstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { dateShort } from '../../../../utils/format'

import Swal from 'sweetalert2'
import withReactComponent from 'sweetalert2-react-content'

import Suma from '../helpers/Suma'
import * as CONSTANTS from "../../../../constants"
import * as CONFIGS from "../../../../configs"
import {updateDokladRequest, deleteDokladRequest} from "../../actions"

const dateTimeFormatter = ( cell, row ) => (
  dateShort(cell)
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

class PolozkyVstup extends React.Component {
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
      znak: 'XG',
      druh: ['DI', 'DJ', 'DK', 'PP', 'DM', 'DN', 'DO', 'DR', 'DS', 'DT', 'ST']
    }, {
      znak: 'XH',
      druh: ['DI', 'DJ', 'DK', 'PP', 'DM', 'DN', 'DO', 'DR', 'DS', 'DT', 'ST']
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
      key: cellName,
      [cellName]: cellValue,
      zaradenie: 1,
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
          zaradenie: 1,
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

    const cellEdit = {
      mode: 'dbclick', // dvojklik pre úpravu bunky
      beforeSaveCell: this.handleUpdate
    }

    return (
      <BootstrapTable version={'4'}
                      data={p}
                      cellEdit={cellEdit}
                      trClassName={rowColor}
                      options={options}
                      bordered={false}
                      striped
                      condensed
                      pagination
                      search
                      searchPlaceholder={'Hľadať'}
                      multiColumnSearch
      >
        <TableHeaderColumn dataField={'doklad'} width={'100px'} isKey dataSort editable={false}>
          Doklad
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'referencia'} width={'100px'} dataSort editable={false}>
          Referencia
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'obchodny_partner'} width={'210px'} dataSort editable={false}>
          Obchodný partner
        </TableHeaderColumn>
        {/*<TableHeaderColumn width={'110px'}>
          IČDPH
        </TableHeaderColumn>*/}
        <TableHeaderColumn dataField={'znak'} width={'60px'}>
          Znak
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'druh_dokladu'} width={'60px'}
                           dataFormat={this.druhFormatter} dataSort editable={false}>
          Druh
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'datum_dokladu'} width={'120px'}
                           dataFormat={dateTimeFormatter} dataSort editable={false}>
          Dátum dokladu
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'datum_uctovania'} width={'120px'}
                           dataFormat={dateTimeFormatter} dataSort editable={false}>
          Dátum účtovania
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'suma_bez_dph'} width={'110px'}
                           dataFormat={eurFormatter} dataAlign={'right'} dataSort editable={false}>
          Základ dane
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'dph'} width={'110px'}
                           dataFormat={eurFormatter} dataAlign={'right'} dataSort editable={false}>
          Vstupná DPH
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'suma_s_dph'} width={'110px'}
                           dataFormat={eurFormatter} dataAlign={'right'} dataSort editable={false}>
          Suma s DPH
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'button'} width={'30px'}
                           dataFormat={this.buttonFormatter} editable={false} >
        </TableHeaderColumn>
      </BootstrapTable>
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
)(PolozkyVstup)