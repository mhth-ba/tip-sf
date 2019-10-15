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
import { updateHlavnyRequest } from '../actions'

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
    this.handlePrepojenieDodavka = this.handlePrepojenieDodavka.bind(this)
    this.handlePrepojenieCena = this.handlePrepojenieCena.bind(this)
    this.validateNazov = this.validateNazov.bind(this)
    this.validateRok = this.validateRok.bind(this)
  }

  handleChange(data) {
    data = {
      ...data,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  handleStav(e) {
    const data = {
      stav: e.target.value,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  handlePrepojenieDodavka(e) {
    const data = {
      nct_dodavka: e.target.value,
      id: this.props.hlavny.id
    }

    this.props.updateHlavnyRequest(data)
  }

  handlePrepojenieCena(e) {
    const data = {
      nct_cena: e.target.value,
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

  render() {
    const opravnenia = this.props.opravnenia
    const nastroje = this.props.nastroje
    const moznosti = this.props.moznosti
    const hlavny = this.props.hlavny

    const editovatelne = opravnenia.kont && nastroje.highlightEditable

    const path = Routing.generate('sct_download')

    return (
      <Card>
        <CardHeader className="bg-secondary text-white">
          Karta hlavných údajov{' '}
          { (hlavny.loading || hlavny.updating) && <FontAwesome name="spinner" spin /> }
          { hlavny.initialized &&
            <span className="pull-right">ID = {hlavny.id}</span>
          }
        </CardHeader>
        <CardBody>
          <CardText>Všetky informácie týkajúce sa hlavného záznamu nájdete v tejto časti</CardText>
          { hlavny.initialized &&
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
              <tr>
                <th>Rok</th>
                <td>
                  { editovatelne ?
                    <RIENumber {...RIEConfig}
                               value={hlavny.rok}
                               change={this.handleChange}
                               propName={'rok'}
                               className={nastroje.highlightEditable ? "riek-base" : ""}
                               isDisabled={!opravnenia.kont}
                               validate={this.validateRok}
                               editProps={{
                                 min: 2000,
                                 max: 2050
                               }}
                    />
                    :
                    hlavny.rok
                  }
                  <FormFeedback>Musí byť v rozmedzí od 2018 do 2050</FormFeedback>
                </td>
              </tr>
              <tr>
                <th>
                  Stav
                  &nbsp;
                  <span id="stav-hl"><FontAwesome name={'info-circle'} /></span>
                  <UncontrolledTooltip placement="top" target="stav-hl">
                    Zmenou stavu na "dokončený" sa údaje k tomuto roku
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
                  Prepojenie - dodávka&nbsp;
                  <span id="nct-prepojenie-dodavka-hl"><FontAwesome name={'info-circle'} /></span>
                  <UncontrolledTooltip placement="top" target="nct-prepojenie-dodavka-hl">
                    Prepojte s návrhom ceny tepla na ten istý rok, na ktorý pripravujete výpočet skutočnej ceny tepla.
                    Slúži pre potreby výpočtu rozdielu medzi plánom a skutočnosťou dodaného tepla.
                  </UncontrolledTooltip>
                  <br/>
                  <span className="small">Plán dodávky tepla</span>
                </th>
                <td>
                  { editovatelne ?
                    <Input type={'select'} disabled={hlavny.updating}
                           defaultValue={hlavny.nct_dodavka !== null ? hlavny.nct_dodavka.id : ''}
                           onChange={ this.handlePrepojenieDodavka }>
                      <option value="">Žiadne</option>
                      { moznosti.prepojenie.map(
                        (polozka, x) =>
                          <option key={x} value={polozka.id}>
                            {polozka.nazov} na rok {polozka.rok}
                          </option>
                      ) }
                    </Input>
                    :
                    hlavny.nct_dodavka !== null ?
                      <span>{ hlavny.nct_dodavka.nazov } na rok { hlavny.nct_dodavka.rok }</span>
                      :
                      <span>Žiadne</span>
                  }
                </td>
              </tr>
              <tr>
                <th>
                  Prepojenie - cena&nbsp;
                  <span id="nct-prepojenie-cena-hl"><FontAwesome name={'info-circle'} /></span>
                  <UncontrolledTooltip placement="top" target="nct-prepojenie-cena-hl">
                    Prepojte s tým návrhom, ktorého cena bola podaná a scvhálená ÚRSOm,
                    a je platná pre rok, na ktorý pripravujete výpočet skutočnej ceny tepla.
                  </UncontrolledTooltip>
                  <br/>
                  <span className="small">Návrh ceny podaný na ÚRSO</span>
                </th>
                <td>
                  { editovatelne ?
                    <Input type={'select'} disabled={hlavny.updating}
                           defaultValue={hlavny.nct_cena !== null ? hlavny.nct_cena.id : ''}
                           onChange={ this.handlePrepojenieCena }>
                      <option value="">Žiadne</option>
                      { moznosti.prepojenie.map(
                        (polozka, x) =>
                          <option key={x} value={polozka.id}>
                            {polozka.nazov} na rok {polozka.rok}
                          </option>
                      ) }
                    </Input>
                    :
                    hlavny.nct_cena !== null ?
                      <span>{ hlavny.nct_cena.nazov } na rok { hlavny.nct_cena.rok }</span>
                      :
                      <span>Žiadne</span>
                  }
                </td>
              </tr>
              <tr>
                <th>Import DT<br/><span className="small">Dodané teplo</span></th>
                <td className="align-middle">{ hlavny.upload.dt ?
                  <Badge href={`${path}/${hlavny.upload.dt.id}`} color="success">
                    { hlavny.upload.dt.original }
                  </Badge>
                  :
                  <span>
                    <Badge color="danger" id="xml-nenahrany-dt-hl">Nenahraný</Badge>
                    <UncontrolledTooltip placement="top" target="xml-nenahrany-dt-hl">
                      XML súbor s údajmi o skutočnej dodávke tepla zatiaľ nebol nahraný
                    </UncontrolledTooltip>
                  </span> }
                </td>
              </tr>
              <tr>
                <th>Import SN<br/><span className="small">Skutočné náklady</span></th>
                <td className="align-middle">{ hlavny.upload.sn ?
                  <Badge href={`${path}/${hlavny.upload.sn.id}`} color="success">
                    { hlavny.upload.sn.original }
                  </Badge>
                  :
                  <span>
                    <Badge color="danger" id="xml-nenahrany-sn-hl">Nenahraný</Badge>
                    <UncontrolledTooltip placement="top" target="xml-nenahrany-sn-hl">
                        XML súbor s údajmi skutočných nákladov zatiaľ nebol nahraný
                    </UncontrolledTooltip>
                  </span> }
                </td>
              </tr>
              <tr>
                <th>Import DO<br/><span className="small">Daňové odpisy</span></th>
                <td className="align-middle">{ hlavny.upload.do ?
                  <Badge href={`${path}/${hlavny.upload.do.id}`} color="success">
                    { hlavny.upload.do.original }
                  </Badge>
                  :
                  <span>
                    <Badge color="danger" id="xml-nenahrany-do-hl">Nenahraný</Badge>
                    <UncontrolledTooltip placement="top" target="xml-nenahrany-do-hl">
                        XML súbor s údajmi daňových odpisov zatiaľ nebol nahraný
                    </UncontrolledTooltip>
                  </span> }
                </td>
              </tr>
              </tbody>
            </Table>
            <CardText style={{whiteSpace: 'pre-line'}}>
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
  { updateHlavnyRequest }
)(Hlavny)
