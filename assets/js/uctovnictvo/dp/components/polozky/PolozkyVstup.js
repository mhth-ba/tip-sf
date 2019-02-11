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

class PolozkyVstup extends React.Component {
  constructor(props) {
    super(props)
  }

  onSizePerPageList(sizePerPage) {
    localStorage.setItem(CONSTANTS.CACHE_UCT_DP_PAGES, sizePerPage);
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

    return (
      <BootstrapTable version={'4'}
                      data={p}
                      options={options}
                      bordered={false}
                      striped
                      condensed
                      pagination
                      search
                      searchPlaceholder={'Hľadať'}
                      multiColumnSearch
      >
        <TableHeaderColumn dataField={'doklad'} width={'100px'} isKey dataSort>
          Doklad
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'referencia'} width={'100px'} dataSort>
          Referencia
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'obchodny_partner'} width={'210px'} dataSort>
          Obchodný partner
        </TableHeaderColumn>
        {/*<TableHeaderColumn width={'110px'}>
          IČDPH
        </TableHeaderColumn>*/}
        <TableHeaderColumn dataField={'druh_dokladu'} width={'60px'} dataSort>
          Druh
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'datum_dokladu'} width={'120px'}
                           dataFormat={dateTimeFormatter} dataSort>
          Dátum dokladu
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'datum_uctovania'} width={'120px'}
                           dataFormat={dateTimeFormatter} dataSort>
          Dátum účtovania
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'suma_bez_dph'} width={'110px'}
                           dataFormat={eurFormatter} dataAlign={'right'} dataSort>
          Základ dane
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'dph'} width={'110px'}
                           dataFormat={eurFormatter} dataAlign={'right'} dataSort>
          Vstupná DPH
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'suma_s_dph'} width={'110px'}
                           dataFormat={eurFormatter} dataAlign={'right'} dataSort>
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