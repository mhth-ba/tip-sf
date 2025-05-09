import React from 'react'
import {
  Row, Col, Input,
  Form, FormGroup, Tooltip
} from 'reactstrap'

import DatePickerTooltip from '../../../components/DatePickerTooltip'
import Help from '../../../components/Help'

import DatePicker from 'react-datepicker'
import moment from 'moment'
moment.locale('sk')

import {connect} from 'react-redux'
import { loadSCZTOSTRequest } from "../actions";

class Kriteria extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tooltipOpen: false,
      help: false,
      startDate: moment().subtract(4, 'days'),
      endDate: moment(),
      kalendar: false
    }

    this.toggleTooltip = this.toggleTooltip.bind(this)
    this.toggleHelp = this.toggleHelp.bind(this)
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this)
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this)
    this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this)
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  toggleHelp() {
    this.setState({
      help: !this.state.help
    })
  }

  handleChangeStartDate(date) {
    this.setState({
      startDate: date
    })
  }

  handleChangeEndDate(date) {
    this.setState({
      endDate: date
    })
  }

  handleChangeCheckBox(e) {
    const kalendar = e.target.checked // false / true

    this.setState({
      kalendar
    })
  }

  handleLoadSCZTOST() {
    const parameters = {
      kalendar: this.state.kalendar,
      start: this.state.startDate.format('YYYY-MM-DD'),
      end: this.state.endDate.format('YYYY-MM-DD')
    }

    this.props.loadSCZTOST(parameters)
  }

  componentDidMount() {
    this.handleLoadSCZTOST()

    this.timerID = setInterval(
      () => this.handleLoadSCZTVychod(),
      10 * 60 * 1000 // 10 minut
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  componentDidUpdate(prevProps, prevState, prevContext) {

    if (this.state.kalendar !== prevState.kalendar) {

      if (this.state.kalendar) { // ak je zvolene obdobie, zastavit obnovovanie grafu

        clearInterval(this.timerID)

      } else { // inac obnovovat graf v pravidelnych intervaloch

        this.timerID = setInterval(
          () => this.handleLoadSCZTVychod(),
          10 * 60 * 1000 // 10 minut
        )

      }

      this.handleLoadSCZTOST()
    }

    if (this.state.startDate !== prevState.startDate || this.state.endDate !== prevState.endDate) {

      if (this.state.kalendar) {
        this.handleLoadSCZTOST()
      }
    }

  }

  render() {

    const Pomocnik = (
      <div>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#a28c10' }}>Teplota</li>
          </Col>
          <Col sm={10}>
            <span>
              Priemerná vonkajšia teplota z OST: 644, 655 a 798. Vzorkovanie v hodinovom intervale.
              V databáze prebieha automatické načítanie nových údajov každých :05 minút po celej hodine.
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#ee9d18' }}>Termis teplota</li>
          </Col>
          <Col sm={10}>
            <span>
              Predikcia vonkajšej teploty podľa optimalizátora TERMISu.
              Aktualizácia údajov raz za hodinu, :05 minút po celej hodine.
            </span>
          </Col>
        </Row>
        <br/>
        {/*<Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#a85ccb' }}>Vlastné OST Termis</li>
          </Col>
          <Col sm={10}>
            <span>
              Predikcia výkonu OST podľa optimalizátora TERMISu.
              Aktualizácia údajov raz za hodinu, :30 minút po celej hodine.
            </span>
          </Col>
        </Row>
        <br/>*/}
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#e41e25' }}>Vlastné OST</li>
          </Col>
          <Col sm={10}>
            <span>
              Sumárny výkon vlastných OST v oblasti východ, ktorých odberné miesto začína číslicou 2 alebo 8 a s meračmi:
              <br/><br/>
              <ul>
                <li>centrálneho merania,</li>
                <li>ÚK,</li>
                <li>TÚV,</li>
                <li>vzduchotechniky.</li>
              </ul>
              Do výpočtu vstupujú iba hodnoty namerané v čase od :50 až :10 minút po celej hodine.
              Vzorkovanie v hodinovom intervale. Aktualizácia údajov každých :20 a :50 minút po celej hodine.
              Dáta z meračov na OST sa do systému ProCop dostávajú v rôznych obdobiach.
              <br/>
              <span className="small">
                Napríklad od 13:50 do 14:10 sa všetky namerané okamžité výkony spočítajú a priradia k 14:00 hod.
                Merania v iných časoch sa do úvahy neberú.
              </span>
              <br/>
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#108408' }}>Komunikácia</li>
          </Col>
          <Col sm={10}>
            <span>
              Predstavuje počet meraní, ktoré spĺňajú kritériá v položke OST popísané vyššie v danej hodine.
              Taktiež musia byť merania v databáze označené príznakom VALID = 1.
              <br/><br/>
              <span className="text-muted">
                Niektoré merače (resp. dátové koncentrátory) najprv komunikujú so systémom ProCop a až potom odčítajú
                aktuálne stavy, t.j. prenesú sa posledné odčítané stavy z predchádzajúcej hodiny. Dôležité je
                nastavenie synchronizácie týchto medzi sebou súvisiacich procesov a takisto správne a rovnaké nastavenie
                časov na <strong>všetkých</strong> OST. Je potrebné zohľadniť časové pásmo UTC + 1 a letný/zimný posun
                času DST (daylight saving time). Niektoré technologické servery majú nastavený svetový čas UTC, čo môže
                značne skreslovať skutočný výkon všetkých OST spolu.
              </span>
            </span>
          </Col>
        </Row>
      </div>
    )

    return (
      <div>
        <Form inline>
          {/*<Help buttonLabel={'Vysvetlivky k legende'} modalTitle={'Legenda grafu priebeh výkonu SCZT OST'}
                modalBody={Pomocnik} size={'lg'} />*/}
          {/*&nbsp;
          <div style={{ width: '190px' }}>
            <InputGroup>
              <InputGroupAddon addonType={'prepend'}>
                <InputGroupText>Vzorkovanie</InputGroupText>
              </InputGroupAddon>
              <Input type={'select'} id="zdroje_vzorkovanie">
                <option value="1">10 minút</option>
                <option value="2">30 minút</option>
                <option value="3">1 hodina</option>
                <option value="4">3 hodiny</option>
                <option value="5">6 hodín</option>
                <option value="6">12 hodín</option>
                <option value="7">1 deň</option>
              </Input>
            </InputGroup>
          </div>*/}
          &nbsp;
          Obdobie:
          &nbsp;
          <FormGroup>
            <DatePicker selected={this.state.startDate} onChange={this.handleChangeStartDate}
                        className="form-control datum" />
          </FormGroup>
          &nbsp;
          -
          &nbsp;
          <FormGroup>
            <DatePicker selected={this.state.endDate} onChange={this.handleChangeEndDate}
                        className="form-control datum" />
          </FormGroup>
          &nbsp;
          <Input type={'checkbox'} id="rozsah" onChange={this.handleChangeCheckBox} />
          <Tooltip isOpen={this.state.tooltipOpen} toggle={this.toggleTooltip} target="rozsah">
            Po zaškrtnutí poľa sa zobrazia údaje za obdobie v zvolenom rozsahu.<br/>
            V opačnom prípade sa zobrazujú údaje za posledný deň
            a automaticky sa načítavajú každých 10 minút z databázy.
          </Tooltip>
          &nbsp;
          <DatePickerTooltip/>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  kriteria: state.kriteria
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  loadSCZTOST: (e) => dispatch(loadSCZTOSTRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kriteria)