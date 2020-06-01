import React from 'react'
import {connect} from 'react-redux'

import { RIENumber } from 'riek2'
import NumberFormat from 'react-number-format'
import FontAwesome from 'react-fontawesome'
import { dateTimeSmall, dateDayname } from '../../../../utils/format'

import { Table, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

// Number format component
let numFormat = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 0,
  displayType: 'text',
  value: 0
}

class Vstup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 'init',
      history: false
    }

    this.formatNumber = this.formatNumber.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  handleChange(id, col, key, table, hlavny, data) {
    data[col] = data[col].replace(',', '.')

    data = {
      ...data,
      ...id,
      key
    }

    this.props.update(data, table, hlavny)
  }

  formatNumber(decimal, number) {
    decimal = Number(decimal)

    return <NumberFormat {...numFormat} value={number} decimalScale={decimal} />
  }

  toggle() {

    if (!this.props.nastroje.historia) return;

    this.setState({
      history: !this.state.history
    })
  }

  componentDidMount() {
    this.setState({
      id: 'pop_history_' + Math.random().toString(36).substring(2, 15)
    })
  }

  render() {

    numFormat = {
      ...numFormat,
      decimalScale: Number(this.props['dec'])
    }

    const opravnenia = this.props.opravnenia
    const sprava = this.props.nastroje
    const historia = this.props.historia

    const editovatelne = opravnenia.kont && sprava.highlightEditable

    // React Inline Edit
    const RIEConfig = {
      classEditing: 'form-control',
      classInvalid: 'is-invalid',
      classLoading: 'form-control riek-loading',
      //format: this.formatNumber, // dynamicky pocet desatinnych miest
      className: sprava.highlightEditable ? "riek-base" : "",
      isDisabled: !opravnenia.kont || !sprava.highlightEditable
    }

    const decimal = this.props['dec']
    const className = this.props['class']

    // e.g.  tpv (fakturovany zemny plyn - teplaren vychod)
    const table = this.props['table'] === undefined ? '' : this.props['table']
    const place = this.props['place'] === undefined ? 'top' : this.props['place']
    const sqlt = this.props['sqlt'] === undefined ? 'VCT_' : this.props['sqlt']
    const popId = this.state.id

    const hlavny = this.props['hlavny']   // e.g.  10 (id hlavneho zaznamu)
    const row = this.props['row']         // e.g.  veez (vyroba elektrickej energie na zdroji)
    const col = this.props['col']         // e.g.  tpz (teplaren zapad)
    //const sqlt = this.props['sqlt']       // e.g.  SCT_ZemnyPlyn (nazov tabulky v sql databaze)
    const id = this.props['id']           // e.g.  45 (id, int, pk, not null)
    const value = this.props['val']       // e.g.  714559.12

    const unit = this.props['unit']



    const historia_data = historia.data
      .filter(x => x.table === sqlt
        && x.column === col
        && x.row === id)

    let icon_class = ''
    if (historia_data.length === 0) icon_class = 'text-danger'
    if (historia_data.length > 8) icon_class = 'text-primary'

    return (
      <td id={ popId }
          onClick={ this.toggle }
          className={ className }
      >
        <Popover placement={ place }
                 isOpen={ this.state.history }
                 target={ popId }
                 toggle={ this.toggle }
                 trigger={'hover'}
        >
          <PopoverHeader className="historia-bublina">História</PopoverHeader>
          <PopoverBody className="historia-bublina" style={{ overflowY: 'auto', maxHeight: '300px' }}>
            { historia_data.length === 0 ?
              <p>Zatiaľ nezadané</p>
              :
              <Table size={'sm'} hover>
                <tbody>
                { historia_data.map(
                  (act, idx) => (
                    <tr key={idx}>
                      <td title={dateDayname(act.datum)}>{dateTimeSmall(act.datum)}</td>
                      <td className="font-italic">{act.fullname}</td>
                      <td className="text-right font-weight-bold">
                        <NumberFormat {...numFormat} value={act.value} decimalScale={6} />
                        &nbsp;
                        { unit }
                      </td>
                    </tr>
                  )) }
                </tbody>
              </Table>
            }
          </PopoverBody>
        </Popover>
        { sprava.historia &&
          <span className={'pull-left small ' + icon_class}>
            <FontAwesome name={'history'} />
            {historia_data.length}
          </span>
        }
        {
          editovatelne ?
          <RIENumber {...RIEConfig} propName={col} value={ value }
                     format={ this.formatNumber.bind( this, decimal ) }
                     change={ this.handleChange.bind( this, { id }, col, row, table, hlavny ) }
          />
            :
          <NumberFormat {...numFormat} value={ value } />
        }
        {' '}
        { unit }
      </td>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  opravnenia: state.opravnenia,
  nastroje: state.nastroje,
  historia: state.historia
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vstup)