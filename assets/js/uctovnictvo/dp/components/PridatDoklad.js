import React from 'react'
import {connect} from 'react-redux'

import {
  Card, CardHeader, CardBody, CardFooter,
  Form, FormGroup, FormText, Label, Input, Button,
  UncontrolledTooltip
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import ReactLoading from 'react-loading'

import DatePicker from 'react-datepicker'
import moment from 'moment'
moment.locale('sk')

import {createDokladRequest} from '../actions'

const DEFAULT_STATE = {
  zaradenie: '',
  znak: '',
  druh: '',
  sadzba: null,
  samozdanenie: false,
  datumDokladu: null,
  datumUctovania: null,
  referencia: '',
  partner: '',

  sumaBezDph_user: '',
  dph_user: '',

  sumaBezDph: 0,
  dph: 0,
  sumaSDph: 0,

  validation: {
    znak: {
      valid: false,     // či je údaj platný
      feedback: false,  // či zobraziť invalid hlášku
    },
    druh: {
      valid: false,
      feedback: false
    },
    datumDokladu: {
      valid: false,
      warning: false,   // či zobraziť varovnú informáciu
      feedback: false
    },
    datumUctovania: {
      valid: false,
      warning: false,
      feedback: false
    },
    zaklad: {
      valid: false,
      feedback: false
    },
    dan: {
      valid: false,
      feedback: false
    },
  }
}

class VytvoritHlavny extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...DEFAULT_STATE
    }

    this.handleZnakDane = this.handleZnakDane.bind(this)
    this.handleDruhDokladu = this.handleDruhDokladu.bind(this)
    this.handleSamozdanenie = this.handleSamozdanenie.bind(this)
    this.handleDatumDokladu = this.handleDatumDokladu.bind(this)
    this.handleDatumUctovania = this.handleDatumUctovania.bind(this)
    this.handleReferencia = this.handleReferencia.bind(this)
    this.handlePartner = this.handlePartner.bind(this)
    this.handleZakladDane = this.handleZakladDane.bind(this)
    this.handleDan = this.handleDan.bind(this)

    this.handleDatumValidation = this.handleDatumValidation.bind(this)
    this.handleDatumDokladuValidation = this.handleDatumDokladuValidation.bind(this)
    this.handleDatumUctovaniaValidation = this.handleDatumUctovaniaValidation.bind(this)

    this.handleCreate = this.handleCreate.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }


  handleZnakDane(e) {

    const target = e.target
    const optionIndex = target.selectedIndex
    const optgroupId = target[optionIndex].parentNode.id
    let zaradenie
    const znak = target.value
    const sadzba = target[optionIndex].dataset['sadzba']

    const sumaBezDph = Number( this.state.sumaBezDph ).toFixed(2)
    const dph = Number( sumaBezDph * (sadzba/100) ).toFixed(2)
    const sumaSDph = Number( Number(sumaBezDph) + (Number(dph)) ).toFixed(2)

    let validation

    switch (optgroupId) {
      case 'zaradenie-vstup':
        zaradenie = 1
        break
      case 'zaradenie-vystup':
        zaradenie = 2
        break
      default:
        zaradenie = ''
        break
    }

    if (znak !== '' || null || undefined) {
      validation = {
        valid: true,
        feedback: false,
      }
    } else {
      validation = {
        valid: false,
        feedback: true
      }
    }

    this.setState({
      zaradenie,
      znak,
      druh: '',
      sadzba,
      samozdanenie: false,
      dph,
      sumaSDph,

      dph_user: String(dph).replace('.',','),

      validation: {
        ...this.state.validation,
        znak: validation
      }
    })
  }

  handleDruhDokladu(e) {

    const druh = e.target.value
    let validation

    if (druh !== '' || null || undefined) {
      validation = {
        valid: true,
        feedback: false
      }
    } else {
      validation = {
        valid: false,
        feedback: true
      }
    }

    this.setState({
      druh,
      validation: {
        ...this.state.validation,
        druh: validation
      }
    })
  }

  handleSamozdanenie(e) {
    this.setState({
      samozdanenie: e.target.checked
    })
  }

  handleDatumDokladu(e) {
    this.setState({
      datumDokladu: e
    })
  }

  handleDatumUctovania(e) {
    this.setState({
      datumUctovania: e
    })
  }

  handleDatumValidation(value) {
    const valid =  moment(value, 'DD.MM.YYYY').format('DD.MM.YYYY') === value
    let validation

    if (valid) {
      validation = {
        valid: true,
        feedback: false
      }
    } else {
      validation = {
        valid: false,
        feedback: true
      }
    }

    return validation
  }

  /**
   * Upozorniť, ak obdobie dokladu je iné ako zdaňovacie obdobie (mesiac/rok)
   */
  handleDatumDokladuValidation(e) {

    const validation = this.handleDatumValidation(e.target.value)

    this.setState({
      validation: {
        ...this.state.validation,
        datumDokladu: validation
      }
    })
  }

  /**
   * Nepovoliť obdobie účtovania iné ako zdaňovacie obdobie (mesiac/rok)
   */
  handleDatumUctovaniaValidation(e) {

    const validation = this.handleDatumValidation(e.target.value)

    this.setState({
      validation: {
        ...this.state.validation,
        datumUctovania: validation
      }
    })
  }

  handleReferencia(e) {
    this.setState({
      referencia: e.target.value
    })
  }

  handlePartner(e) {
    this.setState({
      partner: e.target.value
    })
  }

  handleZakladDane(e) {
    const value_user = e.target.value
    let value = Number(value_user.replace(',','.'))
    let validation

    if (!isNaN(value)) {
      validation = {
        valid: true,
        feedback: false
      }
    } else {
      validation = {
        valid: false,
        feedback: true
      }
    }

    isNaN(value) ? value = 0 : value

    this.setState({
      sumaBezDph_user: value_user,

      sumaBezDph: value,
      dph: Number( value * (this.state.sadzba/100) ).toFixed(2),
      sumaSDph: Number( value + ( value * (this.state.sadzba/100) ) ).toFixed(2),

      dph_user: String(Number(Number( value * (this.state.sadzba/100) ).toFixed(2))).replace('.',','),

      validation: {
        ...this.state.validation,
        zaklad: validation,
        dan: validation
      }
    })
  }

  handleDan(e) {
    const value_user = e.target.value
    let value = Number(value_user.replace(',','.'))
    let validation

    if (!isNaN(value)) {
      validation = {
        valid: true,
        feedback: false
      }
    } else {
      validation = {
        valid: false,
        feedback: true
      }
    }

    isNaN(value) ? value = 0 : value

    this.setState({
      dph_user: value_user,

      dph: value,
      sumaSDph: Number(Number( this.state.sumaBezDph + ( value ) ).toFixed(2)),

      validation: {
        ...this.state.validation,
        dan: validation
      }
    })
  }

  handleCreate() {

    const hlavny = this.props.hlavny.id
    const zaradenie = this.state.zaradenie    // vstupná / výstupná DPH
    const znak = this.state.znak              // znak dane
    const druh = this.state.druh              // druh dokladu
    const referencia = this.state.referencia  // napr. číslo faktúry
    const partner = this.state.partner        // názov obchodného partnera
    const datumDokladu = this.state.datumDokladu.format('YYYY-MM-DD')
    const datumUctovania = this.state.datumUctovania.format('YYYY-MM-DD')
    const sumaBezDph = this.state.sumaBezDph
    const dph = Number( String(this.state.dph).replace(',','.') ).toFixed(2)
    const sumaSDph = this.state.sumaSDph

    const samozdanenie = this.state.samozdanenie

    let data = {
      hlavny,
      zaradenie,
      znak,
      druh,
      referencia,
      partner,
      datumDokladu,
      datumUctovania,
      sumaBezDph,
      dph,
      sumaSDph
    }

    // vytvorenie dokladu
    this.props.create(data)

    // v prípade samozdanenia vytvoriť doklad aj na výstupe s opačným znamienkom
    if (samozdanenie) {
      data = {
        ...data,
        zaradenie: 2,
        sumaBezDph: sumaBezDph * (-1),
        dph: dph * (-1),
        sumaSDph: sumaSDph * (-1),
      }
      this.props.create(data)
    }

    // vynulovanie formulára na predvolené hodnoty
    this.handleReset()
  }

  handleReset() {

    this.setState({
      ...DEFAULT_STATE
    })
  }

  render() {

    const zd = this.props.zd // znaky dane
    const dd = this.props.dd // druhy dokladu
    const creating = this.props.pridatdoklad.creating

    const druhy = dd.zoznam[this.state.znak]

    // checkbox samozdanenie ponúknuť iba v prípade
    // zvolenia znaku dane na vstupnej dph a samozdaniteľné
    const samozdanenie = [
      '3V', 'V3',
      'DA', 'DR',
      'KL', 'LK',
      'XL', 'XU',
      'XP', 'XS',
      'XB', 'XA',
      'XF', 'XE',
      'XY', 'XX'
    ].some(x => x === this.state.znak) && this.state.zaradenie === 1

    const validation = this.state.validation

    const znak_invalid = !validation.znak.valid && validation.znak.feedback
    const druh_invalid = !validation.druh.valid && validation.druh.feedback
    const datum_dokladu_invalid = !validation.datumDokladu.valid && validation.datumDokladu.feedback
    const datum_uctovania_invalid = !validation.datumUctovania.valid && validation.datumUctovania.feedback
    const zaklad_invalid = !validation.zaklad.valid && validation.zaklad.feedback
    const dan_invalid = !validation.dan.valid && validation.dan.feedback

    const invalid = !validation.znak.valid
      || !validation.druh.valid
      || !validation.datumDokladu.valid
      || !validation.datumUctovania.valid
      || !validation.zaklad.valid
      || !validation.dan.valid

    return (
      <div>
        {
          creating &&
          <ReactLoading type="spin" color="#51565d" delay={0} className="react-loader" />
        }
        <Card>
          <CardHeader className="bg-primary text-white">Pridať doklad</CardHeader>
          <CardBody>
            <Form inline>
              <FormGroup>
                <Label for="novy-doklad-zaradenie">Zaradenie</Label>
                &nbsp;&nbsp;
                <Input type={'select'} id="novy-doklad-zaradenie" value={this.state.zaradenie} readOnly>
                  <option value="">-- Vstup / výstup --</option>
                  <option value="1">Vstupná DPH</option>
                  <option value="2">Výstupná DPH</option>
                </Input>
              </FormGroup>
            </Form>
            <br/>
            <Form inline>
              <FormGroup>
                <Label for="novy-doklad-znak-dane">Znak dane</Label>
                &nbsp;&nbsp;
                <Input type={'select'} id="novy-doklad-znak-dane"
                       className={znak_invalid ? 'is-invalid' : ''}
                       onChange={this.handleZnakDane} value={this.state.znak}
                >
                  <option value="" data-sadzba={0}>-- Znak dane --</option>
                  <optgroup label="Vstupná DPH" id="zaradenie-vstup">
                    {
                      zd.vstup.map( (item, ix) => (
                        <option key={ix} value={item.znak} data-sadzba={item.sadzba}>{item.znak} - {item.popis}</option>
                      ))
                    }
                  </optgroup>
                  <optgroup label="Výstupná DPH" id="zaradenie-vystup">
                    {
                      zd.vystup.map( (item, ix) => (
                        <option key={ix} value={item.znak} data-sadzba={item.sadzba}>{item.znak} - {item.popis}</option>
                      ))
                    }
                  </optgroup>
                </Input>
                { znak_invalid &&
                  <div className="invalid-feedback"
                       style={{position: 'relative', left: '70px', marginBottom: '-10px'}}>
                    Zvoľte znak dane
                  </div>
                }
              </FormGroup>
            </Form>
            <br/>
            <Form inline>
              <FormGroup>
                <Label for="novy-doklad-druh-dokladu">Druh dokladu</Label>
                &nbsp;&nbsp;
                <Input type={'select'} id="novy-doklad-druh-dokladu"
                       className={druh_invalid ? 'is-invalid' : ''}
                       onChange={this.handleDruhDokladu} value={this.state.druh}
                >
                  <option value="">-- Druh dokladu --</option>
                  {
                    druhy !== undefined &&
                    druhy.map( (item, ix) => (
                      <option key={ix} value={item.druh}>{item.druh} - {item.popis}</option>
                    ))
                  }
                </Input>
                &nbsp;&nbsp;
                { samozdanenie &&
                  <div>
                    <div className="form-group" id="novy-doklad-samozdanenie-tooltip">
                      <Input type={'checkbox'} id="novy-doklad-samozdanenie"
                             onChange={this.handleSamozdanenie} checked={this.state.samozdanenie}
                      />
                      &nbsp;
                      <Label for="novy-doklad-samozdanenie">Samozdanenie</Label>
                    </div>
                    <UncontrolledTooltip placement={'top'} target="novy-doklad-samozdanenie-tooltip">
                      Doklad sa pridá do vstupnej aj výstupnej DPH s ohľadom na číselník zmeny znamienka
                    </UncontrolledTooltip>
                  </div>
                }
                { druh_invalid &&
                  <div className="invalid-feedback"
                       style={{position: 'relative', left: '89px', marginBottom: '-10px'}}>
                    Zvoľte druh dokladu
                  </div>
                }
              </FormGroup>
            </Form>
            <br/>
            <Form inline>
              <FormGroup>
                <Label for="novy-doklad-datum-dokladu">Dátum dokladu</Label>
                &nbsp;&nbsp;
                <DatePicker
                  id="novy-doklad-datum-dokladu"
                  selected={this.state.datumDokladu}
                  onChange={this.handleDatumDokladu}
                  onBlur={this.handleDatumDokladuValidation}
                  className={datum_dokladu_invalid ? 'is-invalid form-control datum' : 'form-control datum'}
                />
                &nbsp;&nbsp;
                <Label for="novy-doklad-datum-uctovania">Dátum účtovania</Label>
                &nbsp;&nbsp;
                <DatePicker
                  id="novy-doklad-datum-uctovania"
                  selected={this.state.datumUctovania}
                  onChange={this.handleDatumUctovania}
                  onBlur={this.handleDatumUctovaniaValidation}
                  className={datum_uctovania_invalid ? 'is-invalid form-control datum' : 'form-control datum'}
                />
                &nbsp;&nbsp;
                <Label for="novy-doklad-referencia">Referencia</Label>
                &nbsp;&nbsp;
                <Input type={'text'} id="novy-doklad-referencia" value={this.state.referencia} maxLength={50}
                       onChange={this.handleReferencia}
                />
                { (datum_dokladu_invalid || datum_uctovania_invalid) &&
                  <div className="invalid-feedback"
                       style={{position: 'relative', left: '98px', marginBottom: '-10px', display: 'block'}}>
                    Dátum dokladu a dátum účtovania sú povinné polia a musia byť zadané vo formáte DD.MM.RRRR
                  </div>
                }
              </FormGroup>
            </Form>
            <br/>
            <Form inline>
              <FormGroup>
                <Label for="novy-doklad-partner">Obchodný partner</Label>
                &nbsp;&nbsp;
                <Input type={'text'} id="novy-doklad-partner" value={this.state.partner} maxLength={200}
                       onChange={this.handlePartner}
                />
              </FormGroup>
            </Form>
            <br/>
            <Form inline>
              <FormGroup>
                <Label for="novy-doklad-zaklad-dane">Základ dane</Label>
                &nbsp;&nbsp;
                <Input type={'text'} id="novy-doklad-zaklad-dane" value={this.state.sumaBezDph_user}
                       className={zaklad_invalid ? 'is-invalid' : ''} onChange={this.handleZakladDane}
                />
                { zaklad_invalid &&
                  <div className="invalid-feedback"
                       style={{position: 'absolute', left: '79px', top: '28px'}}>
                    Základ dane nie je číslo
                  </div>
                }
              </FormGroup>
              &nbsp;&nbsp;
              <FormGroup>
                <Label for="novy-doklad-dan">Daň</Label>
                &nbsp;&nbsp;
                <Input type={'text'} id="novy-doklad-dan" value={this.state.dph_user}
                       className={dan_invalid ? 'is-invalid' : ''} onChange={this.handleDan}
                />
                { dan_invalid &&
                <div className="invalid-feedback"
                     style={{position: 'absolute', left: '32px', top: '28px'}}>
                  Daň nie je číslo
                </div>
                }
              </FormGroup>
              &nbsp;&nbsp;
              <FormGroup>
                <Label for="novy-doklad-suma-s-dph">Suma s DPH</Label>
                &nbsp;&nbsp;
                <Input type={'text'} id="novy-doklad-suma-s-dph" value={this.state.sumaSDph} readOnly />
              </FormGroup>
            </Form>
            { this.state.samozdanenie &&
              <div>
                <br/>
                <span className="text-danger">
                  * Doklad sa pridá do vstupnej aj výstupnej DPH s ohľadom na číselník zmeny znamienka
                </span>
              </div>
            }
          </CardBody>
          <CardFooter>
            <Button color={'primary'} onClick={this.handleCreate} disabled={creating || invalid}>Pridať</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  zd: state.znakydane,
  dd: state.druhydokladu,
  pridatdoklad: state.pridatdoklad
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  create: (e) => dispatch(createDokladRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VytvoritHlavny)