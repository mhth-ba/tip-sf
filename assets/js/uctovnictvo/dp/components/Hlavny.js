import React from 'react'
import {connect} from 'react-redux'
import { updateHlavnyRequest } from '../actions'
import {
  Card, CardHeader, CardBody, CardFooter, Table, Badge,
  UncontrolledTooltip, CardText, Input, Button, FormGroup, Form
} from 'reactstrap'
import {dateYearMonth, dateShort, dateSmall, dateTime} from '../../../utils/format'
import FontAwesome from 'react-fontawesome'
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek2'
import Routing from '../../../Components/Routing'

import DatePicker from 'react-datepicker'
import moment from 'moment'
moment.locale('sk')

const RIEConfig = {
  classEditing: 'form-control',
  classInvalid: 'is-invalid',
  classLoading: 'form-control riek-loading'
}

class Hlavny extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleDruh = this.handleDruh.bind(this)
    this.handlePredchadzajuci = this.handlePredchadzajuci.bind(this)
    this.handlePosledny = this.handlePosledny.bind(this)
    this.handleZistene = this.handleZistene.bind(this)
    this.handlePodane = this.handlePodane.bind(this)
  }

  handleChange(data) {
    data = {
      ...data,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  /**
   * Druh daňového priznania (riadne, opravné, dodatočné)
   */
  handleDruh(e) {
    const data = {
      druh: e.target.value,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  /**
   * ID daňového priznania v predchádzajúcom zdaňovacom období
   */
  handlePredchadzajuci(e) {
    const data = {
      predchadzajuci: e.target.value,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  /**
   * ID posledného podaného daňového priznania v rovnakom zdaňovacom období (prípad dodatočného priznania)
   */
  handlePosledny(e) {
    const data = {
      posledny: e.target.value,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  /**
   * Dátum zistenia skutočnosti na podanie dodatočného daňového priznania
   */
  handleZistene(e) {
    let zistene

    // jediný spôsob, ako zistiť, či chceme dátum zmeniť alebo vymazať
    zistene = typeof e.isValid === 'function' ? e.format('YYYY-MM-DD') : null
    // e.unix()

    const data = {
      zistene,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  /**
   * Dátum podania daňového priznania
   */
  handlePodane(e) {
    let podane

    // jediný spôsob, ako zistiť, či chceme dátum zmeniť alebo vymazať
    podane = typeof e.isValid === 'function' ? e.format('YYYY-MM-DD') : null
    // e.unix()

    const data = {
      podane,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  render() {

    const init = this.props.hlavny.initialized
    const moznosti = this.props.moznosti
    const hlavny = this.props.hlavny

    const id = hlavny.id                           // id
    const datum = hlavny.datum                     // dátum vytvorenia hlavného záznamu
    const zmenene = hlavny.zmenene                 // dátum poslednej zmeny hlavného záznamu
    const druh = hlavny.druh                       // druh (riadne, opravné, dodatočné)
    const predchadzajuci = hlavny.predchadzajuci   // priznanie v predošlom zdaňovacom období
    const posledny = hlavny.posledny               // posledné podané priznanie v rovnakom zdaňovacom období
    const obdobie = hlavny.obdobie                 // zdaňovacie obdobie
    const zistene = hlavny.zistene                 // dátum zistenia skutočnosti na podanie dodatočného
    const podane = hlavny.podane                   // dátum podania daňového priznania

    const vytvoril = hlavny.vytvoril
    const upravil = hlavny.upravil

    const poznamka = hlavny.poznamka

    const updating = hlavny.updating

    const path = Routing.generate('dp_download')

    return (
      <div>
        { init &&
          <Card>
            <CardHeader className="text-white bg-secondary">
              Karta hlavných údajov
              <span className="pull-right">ID: {id}</span>
            </CardHeader>
            <CardBody>
              <Table>
                <tbody>
                <tr className="bg-yellow">
                  <th>Zdaňovacie obdobie</th>
                  <td>
                    <span className="text-primary font-weight-bold">{ dateYearMonth(obdobie) }</span>
                  </td>
                </tr>
                <tr>
                  <th>Druh priznania</th>
                  <td>
                    <Input type={'select'} disabled={hlavny.updating}
                           value={druh.id}
                           onChange={ this.handleDruh }>
                      { moznosti.druh.map(
                        (polozka, x) => <option key={x} value={polozka.id}>{polozka.druh}</option>
                      ) }
                    </Input>
                  </td>
                </tr>
                { druh.id !== 3 && // iba v prípade riadneho a lebo opravného daňového priznania
                  <tr>
                    <th>Priznanie v predchádzajúcom období<br/>
                      <span className="small">Odpočítanie nadmerného odpočtu od vlastnej daňovej povinnosti</span>
                    </th>
                    <td>
                      <Input type={'select'} disabled={hlavny.updating}
                             value={predchadzajuci ? predchadzajuci : ''}
                             onChange={this.handlePredchadzajuci}>
                        <option value="">-</option>
                        {moznosti.predchadzajuci && moznosti.predchadzajuci.map(
                          (polozka, x) =>
                            <option key={x} value={polozka.id}>
                              {dateYearMonth(polozka.obdobie)} - {polozka.druh.druh} | Podané {dateSmall(polozka.podane)}
                            </option>
                        )}
                      </Input>
                    </td>
                  </tr>
                }
                { druh.id === 3 && // iba ak ide o dodatočné daňové priznanie
                  <tr>
                    <th>Dátum zistenia skutočnosti<br/>
                      <span className="small">Na podanie dodatočného daňového priznania</span>
                    </th>
                    <td>
                      <Form inline>
                        <FormGroup>
                          <DatePicker
                            selected={zistene ? moment(zistene * 1000) : null}
                            onChange={this.handleZistene}
                            disabled={updating}
                            className="form-control datum"
                          />
                          &nbsp;
                          <Button size={'sm'} onClick={this.handleZistene} disabled={updating}>
                            <FontAwesome name={'times'}/>
                          </Button>
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                }
                { druh.id === 3 && // iba ak ide o dodatočné daňové priznanie
                  <tr>
                    <th>Posledné podané priznanie<br/>
                      <span className="small">Prepojenie kvôli riadkom 37 a 38</span>
                    </th>
                    <td>
                      <Input type={'select'} disabled={hlavny.updating}
                             value={posledny ? posledny : ''}
                             onChange={ this.handlePosledny }>
                        <option value="">-</option>
                        { moznosti.suvisiace && moznosti.suvisiace.map(
                          (polozka, x) =>
                            <option key={x} value={polozka.id}>
                              {dateYearMonth(polozka.obdobie)} - {polozka.druh.druh} | Podané {dateSmall(polozka.podane)}
                            </option>
                        ) }
                      </Input>
                    </td>
                  </tr>
                }
                <tr>
                  <th>Dátum podania</th>
                  <td>
                    <Form inline>
                      <FormGroup>
                        <DatePicker
                          selected={podane ? moment(podane * 1000) : null}
                          onChange={this.handlePodane}
                          disabled={updating}
                          className="form-control datum"
                        />
                        &nbsp;
                        <Button size={'sm'} onClick={this.handlePodane} disabled={updating}>
                          <FontAwesome name={'times'} />
                        </Button>
                      </FormGroup>
                    </Form>
                  </td>
                </tr>
                <tr>
                  <th>Excel<br/><span className="small">Predbežné hlásenie</span></th>
                  <td className="align-middle">{ hlavny.upload.alr ?
                    <Badge href={`${path}/${hlavny.upload.alr.id}`} color="success">
                      { hlavny.upload.alr.original }
                    </Badge>
                    :
                    <span>
                    <Badge color="danger" id="excel-nenahrany-alr-hl">Nenahraný</Badge>
                    <UncontrolledTooltip placement="top" target="excel-nenahrany-alr-hl">
                      Excel súbor s údajmi predbežného hlásenia zatiaľ nebol nahraný
                    </UncontrolledTooltip>
                  </span> }
                  </td>
                </tr>
                <tr>
                  <th>Excel<br/><span className="small">Daňové doklady</span></th>
                  <td className="align-middle">{ hlavny.upload.ddokl ?
                    <Badge href={`${path}/${hlavny.upload.ddokl.id}`} color="success">
                      { hlavny.upload.ddokl.original }
                    </Badge>
                    :
                    <span>
                    <Badge color="danger" id="excel-nenahrany-ddokl-hl">Nenahraný</Badge>
                    <UncontrolledTooltip placement="top" target="excel-nenahrany-ddokl-hl">
                        Excel súbor s údajmi daňových dokladov zatiaľ nebol nahraný
                    </UncontrolledTooltip>
                  </span> }
                  </td>
                </tr>
                </tbody>
              </Table>
              <CardText style={{whiteSpace: 'pre-line'}}>
                <RIETextArea {...RIEConfig}
                             value={poznamka}
                             change={this.handleChange}
                             propName={'poznamka'}
                             rows={8}
                             className={"riek-base"}
                />
              </CardText>
              <CardText className="small text-muted text-right">
                Vytvoril používateľ { vytvoril.fullname }
                <br/>
                { dateTime(datum) }
              </CardText>
              { upravil && zmenene &&
                <CardText className="small text-muted text-right">
                  Naposledy upravil používateľ { upravil.fullname }
                  <br/>
                  { dateTime(zmenene) }
                </CardText>
              }
            </CardBody>
            <CardFooter>
              IČ DPH: SK2020285245
            </CardFooter>
          </Card>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  moznosti: state.moznosti,
  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateHlavnyRequest: (e) => dispatch(updateHlavnyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hlavny)