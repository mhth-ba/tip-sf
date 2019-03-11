import React from 'react'
import {connect} from 'react-redux'

import {
  Card, CardBody, CardFooter,
  Form, FormGroup, Label, Input, Button
} from 'reactstrap'
import ReactLoading from 'react-loading'

import DatePicker from 'react-datepicker'
import moment from 'moment'
moment.locale('sk')

import Swal from 'sweetalert2'
import withReactComponent from 'sweetalert2-react-content'

import {createDokladRequest} from '../actions'

class VytvoritHlavny extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      zaradenie: '',
      znak: null,
      sadzba: null,
      druh: null,
      referencia: null,
      datumDokladu: null,
      datumUctovania: null,
      sumaBezDph: 0,
      dph: 0,
      sumaSDph: 0
    }

    this.handleZnakDane = this.handleZnakDane.bind(this)
    this.handleDruhDokladu = this.handleDruhDokladu.bind(this)
    this.handleReferencia = this.handleReferencia.bind(this)
    this.handleDatumDokladu = this.handleDatumDokladu.bind(this)
    this.handleDatumUctovania = this.handleDatumUctovania.bind(this)
    this.handleZakladDane = this.handleZakladDane.bind(this)
    this.handleDan = this.handleDan.bind(this)

    this.handleCreate = this.handleCreate.bind(this)
  }


  handleZnakDane(e) {

    const target = e.target
    const optionIndex = target.selectedIndex
    const optgroupId = target[optionIndex].parentNode.id
    let zaradenie
    const znak = target.value
    const sadzba = target[optionIndex].dataset['sadzba']

    const dph = Number( this.state.sumaBezDph * (sadzba/100) ).toFixed(2)
    const sumaSDph = Number( this.state.sumaBezDph + (dph * (sadzba/100)) ).toFixed(2)

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

    this.setState({
      zaradenie,
      znak,
      sadzba,
      dph,
      sumaSDph
    })
  }

  handleDruhDokladu(e) {
    this.setState({
      druh: e.target.value.toUpperCase()
    })
  }

  handleReferencia(e) {
    this.setState({
      referencia: e.target.value
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

  handleZakladDane(e) {
    const value = Number(e.target.value.replace(',','.'))

    this.setState({
      sumaBezDph: value,
      dph: Number(Number( value * (this.state.sadzba/100) ).toFixed(2)),
      sumaSDph: Number(Number( value + ( value * (this.state.sadzba/100) ) ).toFixed(2))
    })
  }

  handleDan(e) {
    const value_user = e.target.value
    const value = Number(value_user.replace(',','.'))

    this.setState({
      dph: value_user,
      sumaSDph: Number(Number( this.state.sumaBezDph + ( value ) ).toFixed(2))
    })
  }

  handleCreate() {

    const hlavny = this.props.hlavny.id
    const zaradenie = this.state.zaradenie    // vstupná / výstupná DPH
    const znak = this.state.znak              // znak dane
    const druh = this.state.druh              // druh dokladu
    const referencia = this.state.referencia  // napr. číslo faktúry
    const datumDokladu = this.state.datumDokladu.format('YYYY-MM-DD')
    const datumUctovania = this.state.datumUctovania.format('YYYY-MM-DD')
    const sumaBezDph = this.state.sumaBezDph
    const dph = Number( String(this.state.dph).replace(',','.') ).toFixed(2)
    const sumaSDph = this.state.sumaSDph

    const data = {
      hlavny,
      zaradenie,
      znak,
      druh,
      referencia,
      datumDokladu,
      datumUctovania,
      sumaBezDph,
      dph,
      sumaSDph
    }

    this.props.create(data)
  }

  render() {

    const zd = this.props.zd
    const creating = this.props.pridatdoklad.creating

    return (
      <div>
        {
          creating &&
          <ReactLoading type="spin" color="#51565d" delay={0} className="react-loader" />
        }
        <Card>
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
                <Input type={'select'} id="novy-doklad-znak-dane" onChange={this.handleZnakDane}>
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
              </FormGroup>
            </Form>
            <br/>
            <Form inline>
              <FormGroup>
                <Label for="novy-doklad-druh-dokladu">Druh dokladu</Label>
                &nbsp;&nbsp;
                <Input type={'text'} id="novy-doklad-druh-dokladu" maxLength={2} onChange={this.handleDruhDokladu} />
                &nbsp;&nbsp;
                <Label for="novy-doklad-referencia">Referencia</Label>
                &nbsp;&nbsp;
                <Input type={'text'} id="novy-doklad-referencia" maxLength={50} onChange={this.handleReferencia} />
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
                  className="form-control datum"
                />
                &nbsp;&nbsp;
                <Label for="novy-doklad-datum-uctovania">Dátum účtovania</Label>
                &nbsp;&nbsp;
                <DatePicker
                  id="novy-doklad-datum-uctovania"
                  selected={this.state.datumUctovania}
                  onChange={this.handleDatumUctovania}
                  className="form-control datum"
                />
              </FormGroup>
            </Form>
            <br/>
            <Form inline>
              <FormGroup>
                <Label for="novy-doklad-zaklad-dane">Základ dane</Label>
                &nbsp;&nbsp;
                <Input tyoe={'text'} id="novy-doklad-zaklad-dane" onChange={this.handleZakladDane} />
              </FormGroup>
              &nbsp;&nbsp;
              <FormGroup>
                <Label for="novy-doklad-dan">Daň</Label>
                &nbsp;&nbsp;
                <Input tyoe={'text'} id="novy-doklad-dan" value={this.state.dph} onChange={this.handleDan} />
              </FormGroup>
              &nbsp;&nbsp;
              <FormGroup>
                <Label for="novy-doklad-suma-s-dph">Suma s DPH</Label>
                &nbsp;&nbsp;
                <Input tyoe={'text'} id="novy-doklad-suma-s-dph" value={this.state.sumaSDph} readOnly />
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button color={'primary'} onClick={this.handleCreate} disabled={creating}>Pridať</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  zd: state.znakydane,
  pridatdoklad: state.pridatdoklad
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  create: (e) => dispatch(createDokladRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VytvoritHlavny)