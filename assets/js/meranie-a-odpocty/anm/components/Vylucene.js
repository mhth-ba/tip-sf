import React from 'react'
import {connect} from 'react-redux'

import { Card, CardHeader, CardBody, Table, Button } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import cellEditFactory from 'react-bootstrap-table2-editor'
import FontAwesome from 'react-fontawesome'
import {dateTime, dateShort, dateSmall} from '../../../utils/format'

import moment from 'moment'
moment.locale('sk')

import DatePickerInline from '../../../components/DatePickerInline'

import {fetchVyluceneRequest, fetchPrehladRequest, updateVyluceneRequest, deleteVyluceneRequest} from '../actions'

const dateTimeFormatter = ( cell, row ) => (
  dateTime(cell)
)

const dateFormatter = ( cell, row ) => (
  dateShort(cell)
)

const kategoriaFormatter = ( cell, row ) => {
  switch (cell) {
    case 1:
      return <FontAwesome name={'exclamation-triangle'}/>
    case 2:
      return <FontAwesome name={'cogs'}/>
    case 3:
      return <FontAwesome name={'exclamation-circle'}/>
    case 4:
      return <FontAwesome name={'snowflake-o'}/>
    case 5:
      return <FontAwesome name={'thermometer-3'}/>
    case 6:
      return <FontAwesome name={'exchange'}/>
    case 7:
      return <FontAwesome name={'battery-quarter'}/>
  }
}

const vylucilFormatter = ( cell, row ) => {
  return cell.fullname
}

const miestoPristrojaFormatter = ( cell, row ) => {
  return <a href='#' onClick={popup.bind(this, 1, '../../../../tip/zone_smao_historia-spotrieb-miesta-pristroja.php?id=' + cell)}>{cell}</a>
}

const vyrobneCisloFormatter = ( cell, row ) => {
  return <a href='#' onClick={popup.bind(this, 2, '../../../../tip/zone_smao_historia-spotrieb-meradla.php?id=' + cell)}>{cell}</a>
}

/**
 * Otvorí popup okno
 *
 * @param key {int} 1 = miesto prístroja, 2 = výrobné číslo (merač)
 * @param id {string} URL + ID
 * @param e {object} Event
 */
const popup = (key, id, e) => {

  e.preventDefault()

  const wA = screen.availWidth;
  const hA = screen.availHeight;
  let wP // width (šírka) popup
  let hP // height (výška) popup
  let tP // top popup
  let lP // left popup
  switch (key) {
    case 1: // história spotrieb miesta prístroja
      wP = 1200
      hP = hA - 90
      tP = 5
      lP = 5
      break;
    case 2: // história spotrieb meradla
      wP = 770
      hP = hA - 90
      tP = 5
      lP = 5
      break;
  }

  window
    .open(id, 'pop', 'height=' + hP + ',width=' + wP + ',top=' + tP + ',left=' + lP + ',menubar=no,resizeable=yes,scrollbars=yes,status=no,titlebar=no,toolbar=no')
    .focus()
}

class Vylucene extends React.Component {
  constructor(props) {
    super(props)

    this.handleUpravit = this.handleUpravit.bind(this)
  }

  handleUpravit(oldValue, newValue, row, column, done) {

    if (column.dataField === 'odlozene') {
      newValue = moment(newValue * 1000).format('YYYY-MM-DD')
    }

    const data = {
      id: row.id,
      key: column.dataField,
      [column.dataField]: newValue
    }

    this.props.upravit(data)
  }

  handleVratit(id, e) {

    const data = {
      id
    }

    this.props.vratit(data)
  }

  componentDidUpdate(prevProps, prevState, prevContext) {

    if (prevProps.opravnenia.anm !== this.props.opravnenia.anm) {
      if (this.props.opravnenia.anm) {
        this.props.load()
      }
    }
  }

  render() {

    const editor = this.props.opravnenia.anm
    const polozky = this.props.vylucene.polozky

    const vratitButtonFormatter = ( cell, row ) => {

      const deleting = this.props.vylucene.deleting

      return <Button size={'sm'} onClick={this.handleVratit.bind(this, row.id)} disabled={deleting} >
        <FontAwesome name={'reply'}/>
      </Button>
    }

    const cellEdit = {
      mode: 'dbclick', // dvojklik pre úpravu bunky
      beforeSaveCell: this.handleUpravit
    }

    const columns =[{
      dataField: 'id',
      text: 'ID',
      hidden: true
    }, {
      dataField: 'om',
      text: 'OM',
      sort: true,
      // filter: textFilter({ placeholder: '...', className: 'form-control-sm' }),
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '90px' }
      }
    }, {
      dataField: 'ost',
      text: 'OST',
      sort: true,
      // filter: textFilter({ placeholder: '...', className: 'form-control-sm' }),
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '60px' }
      }
    }, {
      dataField: 'mp',
      text: 'OM',
      sort: true,
      // filter: textFilter({ placeholder: '...', className: 'form-control-sm' }),
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '80px' }
      },
      formatter: miestoPristrojaFormatter
    }, {
      dataField: 'adresa',
      text: 'Adresa',
      sort: true,
      // filter: textFilter({ placeholder: '...', className: 'form-control-sm' }),
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '180px' }
      }
    }, {
      dataField: 'odberatel',
      text: 'Odberateľ',
      sort: true,
      // filter: textFilter({ placeholder: '...', className: 'form-control-sm' }),
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '200px' }
      }
    }, {
      dataField: 'vc',
      text: 'Sériové číslo',
      sort: true,
      // filter: textFilter({ placeholder: '...', className: 'form-control-sm' }),
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '120px' }
      },
      formatter: vyrobneCisloFormatter
    }, {
      dataField: 'tarifa',
      text: 'Tarifa',
      sort: true,
      // filter: textFilter({ placeholder: '...', className: 'form-control-sm' }),
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '80px' }
      }
    }, {
      dataField: 'mj',
      text: 'Jednotka',
      sort: true,
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '90px' }
      }
    }, {
      dataField: 'odlozene',
      text: 'Odložené do',
      sort: true,
      editable: true,
      editorRenderer: (editorProps, value, row, column, rowIdx, ColIdx) => (
        <DatePickerInline {...editorProps} value={value} />
      ),
      headerStyle: (col, ix) => {
        return { width: '130px' }
      },
      formatter: dateFormatter
    }, {
      dataField: 'vytvoril',
      text: 'Kto vylúčil',
      sort: true,
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '130px' }
      },
      formatter: vylucilFormatter
    }, {
      dataField: 'datum',
      text: 'Kedy vylúčené',
      sort: true,
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '180px' }
      },
      formatter: dateTimeFormatter
    }, {
      dataField: 'poznamka',
      text: 'Poznámka',
      sort: true,
      // filter: textFilter({ placeholder: '...', className: 'form-control-sm' }),
      editable: true,
      headerStyle: (col, ix) => {
        return { width: '120px' }
      }
    }, {
      dataField: 'kategoria',
      text: 'Kategória',
      sort: true,
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '90px' }
      },
      align: 'center',
      headerAlign: 'center',
      formatter: kategoriaFormatter
    }, {
      dataField: 'button',
      text: '',
      sort: false,
      editable: false,
      headerStyle: (col, ix) => {
        return { width: '45px' }
      },
      align: 'center',
      headerAlign: 'center',
      formatter: vratitButtonFormatter
    }]

    return (
      <div>
        { editor &&
          <Card style={{ maxHeight: '400px' }}>
            <CardHeader className="bg-primary text-white">
              Pozastavené analýzy a notifikácie
              <span className="pull-right">{polozky.length} meračov</span>
            </CardHeader>
            <CardBody style={{ overflowY: 'scroll' }}>
              <h3>
                <FontAwesome name={'flag-o'}/>
                &nbsp;
                Dočasne vylúčené z analýz
              </h3>

              <br/><br/>

              <BootstrapTable bootstrap4
                              data={polozky}
                              keyField={'id'}
                              columns={columns}
                              cellEdit={ cellEditFactory(cellEdit) }
                              rowStyle={{ fontSize: '12px' }}
                              //rowClasses={}
                              bordered={false}
                              //striped
                              hover
                              condensed
                              //pagination={}
                              filter={ filterFactory() }
              />

            </CardBody>
          </Card>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
  opravnenia: state.opravnenia,
  vylucene: state.vylucene
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: (e) => dispatch(fetchVyluceneRequest(e)),
  prehlad: (e) => dispatch(fetchPrehladRequest(e)),
  upravit: (e) => dispatch(updateVyluceneRequest(e)),
  vratit: (e) => dispatch(deleteVyluceneRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vylucene)