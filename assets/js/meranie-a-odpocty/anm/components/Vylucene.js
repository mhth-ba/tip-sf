import React from 'react'
import {connect} from 'react-redux'

import { Card, CardHeader, CardBody, CardFooter, Table, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import {dateTime, dateShort} from '../../../utils/format'

import {fetchVyluceneRequest, fetchPrehladRequest, deleteVyluceneRequest} from "../actions"

class Vylucene extends React.Component {
  constructor(props) {
    super(props)
  }

  kategoriaFormatter(kat) {
    switch (kat) {
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

  miestoPristrojaFormatter(value) {
    return <a href='#' onClick={this.popup.bind(this, 1, '../../../../tip/zone_smao_historia-spotrieb-miesta-pristroja.php?id=' + value)}>{value}</a>
  }

  vyrobneCisloFormatter(value) {
    return <a href='#' onClick={this.popup.bind(this, 2, '../../../../tip/zone_smao_historia-spotrieb-meradla.php?id=' + value)}>{value}</a>
  }

  /**
   * Otvorí popup okno
   *
   * @param key {int} 1 = miesto prístroja, 2 = výrobné číslo (merač)
   * @param id {string} URL + ID
   * @param e {object} Event
   */
  popup(key, id, e) {

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

  handleVratit(id, e) {

    const data = {
      id
    }

    console.log(data)

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
    const deleting = this.props.vylucene.deleting

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
              <Table size={'sm'} hover>
                <thead>
                <tr>
                  <th>OM</th>
                  <th>OST</th>
                  <th>MP</th>
                  <th>Adresa</th>
                  <th>Odberateľ</th>
                  <th>Sériové číslo</th>
                  <th>Tarifa</th>
                  <th>Jednotka</th>
                  <th>Odložené do</th>
                  <th>Kto vylúčil</th>
                  <th>Kedy vylúčil</th>
                  <th>Poznámka</th>
                  <th className="text-center">Kategória</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                { polozky.map(
                  (v, x) => (
                    <tr key={x} style={{ fontSize: '12px' }}>
                      <td>{v.om}</td>
                      <td>{v.ost}</td>
                      <td>{ this.miestoPristrojaFormatter(v.mp) }</td>
                      <td>{v.adresa}</td>
                      <td>{v.odberatel}</td>
                      <td>{ this.vyrobneCisloFormatter(v.vc) }</td>
                      <td>{v.tarifa}</td>
                      <td>{v.mj}</td>
                      <td>{ dateShort(v.odlozene) }</td>
                      <td>{v.vytvoril.fullname}</td>
                      <td>{ dateTime(v.datum) }</td>
                      <td>{v.poznamka}</td>
                      <td className="text-center">{ this.kategoriaFormatter(v.kategoria) }</td>
                      <td>
                        <Button size={'sm'} onClick={this.handleVratit.bind(this, v.id)} disabled={deleting} >
                          <FontAwesome name={'reply'}/>
                        </Button>
                      </td>
                    </tr>
                  )
                )}
                </tbody>
              </Table>
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
  vratit: (e) => dispatch(deleteVyluceneRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vylucene)