import React from 'react'
import {connect} from 'react-redux'

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { dateShort } from '../../../../utils/format'

import Suma from '../helpers/Suma'
import * as CONSTANTS from "../../../../constants"
import * as CONFIGS from "../../../../configs"

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
  }

  onSizePerPageList(sizePerPage) {
    localStorage.setItem(CONSTANTS.CACHE_UCT_DP_PAGES, sizePerPage);
  }

  handleUpdate(row, cellName, cellValue) {
    console.log(row, cellName, cellValue)

    return false
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
                      //cellEdit={cellEdit}
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
        <TableHeaderColumn dataField={'druh_dokladu'} width={'60px'} dataSort editable={false}>
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
      </BootstrapTable>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolozkyVstup)