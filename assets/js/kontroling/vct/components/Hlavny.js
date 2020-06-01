import React from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardHeader, CardText, CardBody, CardTitle, Table, Badge, UncontrolledTooltip,
  Form, FormGroup, Label, Input, FormFeedback, FormText
} from 'reactstrap'
import { dateTime } from '../../../utils/format'
import FontAwesome from 'react-fontawesome'
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek2'
import _ from 'lodash'
import { connect } from 'react-redux'
import { toggleHighlightEditable, updateHlavnyRequest } from '../actions'

import Routing from '../../../Components/Routing'

const RIEConfig = {
  classEditing: 'form-control',
  classInvalid: 'is-invalid',
  classLoading: 'form-control riek-loading'
}

class Hlavny extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleStav = this.handleStav.bind(this)
    this.handleMesiac = this.handleMesiac.bind(this)
    this.handlePrepojenieNCT = this.handlePrepojenieNCT.bind(this)
    this.handlePrepojenieSCT = this.handlePrepojenieSCT.bind(this)
    this.validateNazov = this.validateNazov.bind(this)
  }

  handleChange(data) {
    data = {
      ...data,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  handleStav(e) {

    const stav = e.target.value

    const data = {
      stav,
      id: this.props.hlavny.id
    }

    if (stav === '1') {
      this.props.toggleHighlightEditable(false)
    }

    this.props.updateHlavnyRequest(data)
  }

  handleMesiac(e) {
    const data = {
      mesiac: e.target.value,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  handlePrepojenieNCT(e) {
    const data = {
      nct: e.target.value,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  handlePrepojenieSCT(e) {
    const data = {
      sct: e.target.value,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  validateNazov(text) {
    return text.length >= 5
  }

  validateRok(cislo) {
    return !isNaN(cislo)
      && 2018 <= cislo === cislo <= 2050
  }

  static translateMesiac(cislo) {

    const mesiac = {
      1: 'Január',
      2: 'Február',
      3: 'Marec',
      4: 'Apríl',
      5: 'Máj',
      6: 'Jún',
      7: 'Júl',
      8: 'August',
      9: 'September',
      10: 'Október',
      11: 'November',
      12: 'December'
    }

    return mesiac[cislo]
  }

  render() {
    const opravnenia = this.props.opravnenia
    const nastroje = this.props.nastroje
    const moznosti = this.props.moznosti
    const hlavny = this.props.hlavny

    const editovatelne = opravnenia.kont && nastroje.highlightEditable

    const path = Routing.generate('vct_download')

    return (
      <Card>
        <CardHeader className="bg-secondary text-white">
          Karta hlavných údajov{' '}
          { (hlavny.loading || hlavny.updating) && <FontAwesome name="spinner" spin /> }
          { hlavny.initialized &&
            <span className="pull-right">ID: {hlavny.id}</span>
          }
        </CardHeader>
        <CardBody>
          <CardText>
            { opravnenia.mng ?
              <span>Všetky informácie týkajúce sa hlavného záznamu nájdete v tejto časti</span>
              :
              <span>...</span>
            }
          </CardText>
          { (hlavny.initialized && opravnenia.mng) &&
          <div>
            <Table>
              <tbody>
              <tr>
                <th>Názov</th>
                <td>
                  { editovatelne ?
                    <RIEInput {...RIEConfig}
                              value={hlavny.nazov}
                              change={this.handleChange}
                              propName={'nazov'}
                              className={nastroje.highlightEditable ? "riek-base" : ""}
                              isDisabled={!opravnenia.kont}
                              validate={this.validateNazov}
                              editProps={{
                                maxLength: 50
                              }}
                    />
                    :
                    hlavny.nazov
                  }
                  <FormFeedback>Musí mať aspoň 5 znakov</FormFeedback>
                </td>
              </tr>
              <tr className="bg-yellow">
                <th>Rok</th>
                <td className="font-weight-bold text-primary">
                  {/*{ editovatelne ?
                    <RIENumber {...RIEConfig}
                               value={hlavny.rok}
                               change={this.handleChange}
                               propName={'rok'}
                               className={nastroje.highlightEditable ? "riek-base" : ""}
                               isDisabled={!opravnenia.kont}
                               validate={this.validateRok}
                               editProps={{
                                 min: 2018,
                                 max: 2050
                               }}
                    />
                    :
                    hlavny.rok
                  }
                  <FormFeedback>Musí byť v rozmedzí od 2018 do 2050</FormFeedback>*/}
                  { hlavny.rok }
                </td>
              </tr>
              <tr className="bg-yellow">
                <th>Mesiac</th>
                <td className="font-weight-bold text-primary">
                  {/*{ editovatelne ?
                    <Input type={'select'} disabled={hlavny.updating}
                           defaultValue={hlavny.mesiac} onChange={this.handleMesiac}
                    >
                      <option value="1">Január</option>
                      <option value="2">Február</option>
                      <option value="3">Marec</option>
                      <option value="4">Apríl</option>
                      <option value="5">Máj</option>
                      <option value="6">Jún</option>
                      <option value="7">Júl</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">Október</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </Input>
                    :
                    <span>{ Hlavny.translateMesiac(hlavny.mesiac) }</span>
                  }*/}
                  <span>{ Hlavny.translateMesiac(hlavny.mesiac) }</span>
                </td>
              </tr>
              <tr>
                <th>
                  Stav
                  &nbsp;
                  <span id="stav-hl"><FontAwesome name={'info-circle'} /></span>
                  <UncontrolledTooltip placement="top" target="stav-hl">
                    Zmenou stavu na "dokončený" sa údaje k tomuto záznamu
                    natrvalo uložia do databázy a nebude ich možné upraviť.
                  </UncontrolledTooltip>
                </th>
                <td>
                  { editovatelne ?
                    <Input type={'select'} disabled={hlavny.updating}
                           defaultValue={hlavny.stav.id}
                           onChange={ this.handleStav }>
                      { moznosti.stav.map(
                        (polozka, x) => <option key={x} value={polozka.id}>{polozka.stav}</option>
                      ) }
                    </Input>
                    :
                    <span>{ hlavny.stav.stav }</span>
                  }
                </td>
              </tr>
              <tr>
                <th>
                  Prepojenie - NCT&nbsp;
                  <span id="nct-prepojenie-nct-hl"><FontAwesome name={'info-circle'} /></span>
                  <UncontrolledTooltip placement="top" target="nct-prepojenie-nct-hl">
                    Prepojte s návrhom ceny tepla.
                  </UncontrolledTooltip>
                  <br/>
                  <span className="small">Návrh ceny tepla</span>
                </th>
                <td>
                  { editovatelne ?
                    <Input type={'select'} disabled={hlavny.updating}
                           defaultValue={hlavny.nct !== null ? hlavny.nct.id : ''}
                           onChange={ this.handlePrepojenieNCT }>
                      <option value="">Žiadne</option>
                      { moznosti.prepojenie_nct.map(
                        (polozka, x) =>
                          <option key={x} value={polozka.id}>
                            {polozka.nazov} na rok {polozka.rok}
                          </option>
                      ) }
                    </Input>
                    :
                    hlavny.nct !== null ?
                      <span>{ hlavny.nct.nazov } na rok { hlavny.nct.rok }</span>
                      :
                      <span>Žiadne</span>
                  }
                </td>
              </tr>
              <tr>
                <th>
                  Prepojenie - SCT&nbsp;
                  <span id="nct-prepojenie-sct-hl"><FontAwesome name={'info-circle'} /></span>
                  <UncontrolledTooltip placement="top" target="nct-prepojenie-sct-hl">
                    Prepojte so skutočnou cenou tepla.
                  </UncontrolledTooltip>
                  <br/>
                  <span className="small">Skutočná cena tepla</span>
                </th>
                <td>
                  { editovatelne ?
                    <Input type={'select'} disabled={hlavny.updating}
                           defaultValue={hlavny.sct !== null ? hlavny.sct.id : ''}
                           onChange={ this.handlePrepojenieSCT }>
                      <option value="">Žiadne</option>
                      { moznosti.prepojenie_sct.map(
                        (polozka, x) =>
                          <option key={x} value={polozka.id}>
                            {polozka.nazov} na rok {polozka.rok}
                          </option>
                      ) }
                    </Input>
                    :
                    hlavny.sct !== null ?
                      <span>{ hlavny.sct.nazov } na rok { hlavny.sct.rok }</span>
                      :
                      <span>Žiadne</span>
                  }
                </td>
              </tr>
              <tr>
                <th>Import ODT<br/><span className="small">Očakávaná dodávka tepla</span></th>
                <td className="align-middle">{ hlavny.upload.odt ?
                  <Badge href={`${path}/${hlavny.upload.odt.id}`} color="success">
                    { hlavny.upload.odt.original }
                  </Badge>
                  :
                  <span>
                    <Badge color="danger" id="xml-nenahrany-odt-hl">Nenahraný</Badge>
                    <UncontrolledTooltip placement="top" target="xml-nenahrany-odt-hl">
                      XML súbor s údajmi o očakávanej dodávke tepla zatiaľ nebol nahraný
                    </UncontrolledTooltip>
                  </span> }
                </td>
              </tr>
              <tr>
                <th>Import SN<br/><span className="small">Skutočné náklady (1-{hlavny.mesiac})</span></th>
                <td className="align-middle">{ hlavny.upload.sn ?
                  <Badge href={`${path}/${hlavny.upload.sn.id}`} color="success">
                    { hlavny.upload.sn.original }
                  </Badge>
                  :
                  <span>
                    <Badge color="danger" id="xml-nenahrany-sn-hl">Nenahraný</Badge>
                    <UncontrolledTooltip placement="top" target="xml-nenahrany-sn-hl">
                      XML súbor s údajmi o skutočných nákladoch (1-X) zatiaľ nebol nahraný
                    </UncontrolledTooltip>
                  </span> }
                </td>
              </tr>
              </tbody>
            </Table>
            <CardText style={{whiteSpace: 'pre-line', fontFamily: 'Comic Sans MS', textShadow: '#aaa 3px 3px 7px'}}>
              { editovatelne ?
                <RIETextArea {...RIEConfig}
                             value={hlavny.poznamka}
                             change={this.handleChange}
                             propName={'poznamka'}
                             rows={8}
                             className={nastroje.highlightEditable ? "riek-textarea" : ""}
                             isDisabled={!opravnenia.kont}
                />
                :
                hlavny.poznamka
              }
            </CardText>
            <CardText className="small text-muted text-right">
              Vytvoril používateľ { hlavny.vytvoril.fullname }
              <br/>
              { dateTime(hlavny.datum) }
            </CardText>
            { hlavny.upravil && hlavny.zmenene &&
            <CardText className="small text-muted text-right">
              Naposledy upravil používateľ { hlavny.upravil.fullname }
              <br/>
              { dateTime(hlavny.zmenene) }
            </CardText>
            }
          </div> }
        </CardBody>
      </Card>
    )
  }
}

Hlavny.propTypes = {
  nazov: PropTypes.array
}

export default connect(
  (state) => ({
    opravnenia: state.opravnenia,
    nastroje: state.nastroje,
    moznosti: state.moznosti,
    hlavny: state.hlavny
  }),
  { updateHlavnyRequest, toggleHighlightEditable }
)(Hlavny)
