import React from 'react'
import {
  Row, Col, Input, Label,
  Form, FormGroup, Tooltip
} from 'reactstrap'

import DatePickerTooltip from '../../../components/DatePickerTooltip'
import Help from '../../../components/Help'

import DatePicker from 'react-datepicker'
import moment from 'moment'
moment.locale('sk')

import {connect} from 'react-redux'
import { loadSCZTVychodRequest, updateParametre, updateVonkajsiaTeplotaPriemer } from '../actions'
import * as CONSTANTS from '../../../constants'
import _ from "lodash";

class Kriteria extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tooltipOpen: false,
      help: false,
      startDate: moment().subtract(4, 'days'),
      endDate: moment(),
      kalendar: false,

      teplota: []
    }

    this.toggleTooltip = this.toggleTooltip.bind(this)
    this.toggleHelp = this.toggleHelp.bind(this)
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this)
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this)
    this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this)

    this.handleChangeParametre = this.handleChangeParametre.bind(this)
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

  handleChangeParametre(e) {

    let arr = this.state.teplota // teplota
    arr = arr.filter(x => x != e.target.value)

    if (e.target.checked) arr.push(parseInt(e.target.value))

    this.setState({
      teplota: arr
    })

    localStorage.setItem(CONSTANTS.CACHE_DISP_SCZTV_VONK_TEP, arr)

    //this.props.updateParametre(arr)

    this.priemernaVonkajsiaTeplota(arr)
  }

  handleLoadSCZTVychod() {
    const parameters = {
      kalendar: this.state.kalendar,
      start: this.state.startDate.format('YYYY-MM-DD'),
      end: this.state.endDate.format('YYYY-MM-DD')
    }

    this.props.loadSCZTVychod(parameters)
  }

  priemernaVonkajsiaTeplota(arr) {

    let parametre

    //console.log(arr === undefined)

    if (arr === undefined) {
      parametre = localStorage.getItem(CONSTANTS.CACHE_DISP_SCZTV_VONK_TEP).split(',').map(Number)
    } else {
      parametre = arr
    }

    let teploty = this.props.zdroje.vonkajsia_teplota_10min

    teploty = teploty.filter(x => parametre.includes(x.kategoria.id))
    //console.log(teploty)

    // vypocet priemernej teploty - interval 10 minut
    let object = _.chain(teploty)
      .groupBy((result) => result.datum)
      .map((entries, datum) => [parseInt(datum), _.meanBy(entries, entry => entry.hodnota)])
      //.fromPairs()
      .value()

    // vytvorenie pomocneho intervalu - 1 hodina
    let object_1h = object.filter(
      x => moment(x[0]).minute() === 0
    )

    //console.log(object)

    //console.log(object_1h)

    this.props.updateVonkajsiaTeplotaPriemer({
      mm: object,
      hh: object_1h
    })
  }

  componentDidMount() {
    this.handleLoadSCZTVychod()

    this.timerID = setInterval(
      () => this.handleLoadSCZTVychod(),
      10 * 60 * 1000 // 10 minut
    )

    const vonk_tep = localStorage.getItem(CONSTANTS.CACHE_DISP_SCZTV_VONK_TEP)
    let arr = []

    if (vonk_tep !== null) {
      arr = vonk_tep.split(',').map(Number)
      this.setState({
        teplota: arr
      })
    } else {
      arr = [301, 302, 303, 304, 305, 306, 307, 308, 309, 310]
      localStorage.setItem(CONSTANTS.CACHE_DISP_SCZTV_VONK_TEP, arr)
      this.setState({
        teplota: arr
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (this.state.kalendar !== prevState.kalendar) {
      if (this.state.kalendar) { // ak je zvolene obdobie, zastavit obnovovanie grafu
        clearInterval(this.timerID)
      } else { // inac obnovovat graf v pravidelnych intervaloch
        this.timerID = setInterval(
          () => this.handleLoadSCZTVychod(),
          10 * 60 * 1000 // 10 minut
        )
      }
      this.handleLoadSCZTVychod()
    }

    if (this.state.startDate !== prevState.startDate || this.state.endDate !== prevState.endDate) {
      if (this.state.kalendar) {
        this.handleLoadSCZTVychod()
      }
    }

    if (this.props.zdroje.vonkajsia_teplota_10min !== prevProps.zdroje.vonkajsia_teplota_10min) {
      this.priemernaVonkajsiaTeplota()
    }
  }

  render() {
    
    const parametre = this.state.teplota

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
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#2354c5' }}>Denný plán</li>
          </Col>
          <Col sm={10}>
            <span>
              Plánovaný výkon podľa denného plánu prevádzky na danú hodinu.
              Aktualizácia údajov raz za deň o pol noci.
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#cb26b3' }}>Termis zdroje</li>
          </Col>
          <Col sm={10}>
            <span>
              Predikcia výkonu zdrojov podľa optimalizátora TERMISu.
              Aktualizácia údajov raz za hodinu, :30 minút po celej hodine.
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#000000' }}>Zdroje</li>
          </Col>
          <Col sm={10}>
            <span>
              Sumárny výkon zdrojov vo východnej sústave vypočítaný z údajov v databázach na serveri CIRRUS
              ako súčet výkonov PPC + TpV + Slovnaft + VhJ.
              <br/><br/>
              <ul>
                <li>PPC = výtlak - spiatočka</li>
                <li>TpV = TpV severná vetva + TpV južná vetva</li>
                <li>VhJ = VhJ výmenniková stanica - Slovnaft</li>
              </ul>
              Vzorkovanie v hodinovom intervale. Aktualizácia údajov každých :05 a :35 minút po celej hodine.
              <br/><br/>
              <div className="text-center">
                <img src="../build/static/scztv_help_schema.png" alt="PPC, VhJ a Slovnaft - zapojenie meračov"
                     title="PPC, VhJ a Slovnaft - zapojenie meračov" />
              </div>
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#a85ccb' }}>Termis OST</li>
          </Col>
          <Col sm={10}>
            <span>
              Predikcia výkonu OST podľa optimalizátora TERMISu.
              Aktualizácia údajov raz za hodinu, :30 minút po celej hodine.
            </span>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#e41e25' }}>OST</li>
          </Col>
          <Col sm={10}>
            <span>
              Sumárny výkon všetkých OST, ktorých odberné miesto začína číslicou 2 alebo 8 a s meračmi:
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

    const Parametre = (
      <div>
        <Row>
          <Col sm={2}>
            <li className="font-weight-bold" style={{ color: '#d3b520' }}>Vonkajšia teplota</li>
          </Col>
          <Col sm={10}>
            <h6>Vypočíta sa ako priemer z nižšie zvolených údajov</h6>
            <br/>
            <Row>
              <Col>
                <h5>OST - Termis</h5>
                <Form>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" value={301}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(301)}
                      />
                      {' '}OST 737 Dunajské predmestie B04
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={302}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(302)}
                      />
                      {' '}OST 822 Seberíniho
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={303}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(303)}
                      />
                      {' '}OST 861 Teplická 17
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={304}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(304)}
                      />
                      {' '}OST 612 Hotel Blue
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={305}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(305)}
                      />
                      {' '}OST 769 Planét
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={306}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(306)}
                      />
                      {' '}OST 451 Kuchajda B
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={307}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(307)}
                      />
                      {' '}OST 655 Radničné námestie
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={308}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(308)}
                      />
                      {' '}OST 610 Úrad vlády
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={309}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(309)}
                      />
                      {' '}OST 798 Moskovská
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={310}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(310)}
                      />
                      {' '}OST 644 Sliačska
                    </Label>
                  </FormGroup>
                </Form>
              </Col>
              <Col>
                <h5>OST - Výber</h5>
                <Form>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" value={311}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(311)}
                      />
                      {' '}OST 715
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={312}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(312)}
                      />
                      {' '}OST 770
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={313}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(313)}
                      />
                      {' '}OST 873
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="checkbox" value={314}
                             onChange={this.handleChangeParametre}
                             defaultChecked={parametre.includes(314)}
                      />
                      {' '}OST 827
                    </Label>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )

    return (
      <div>
        <Form inline>
          <Help buttonLabel={'Vysvetlivky k legende'} modalTitle={'Legenda grafu priebeh výkonu SCZT východ'}
                modalBody={Pomocnik} size={'lg'} />
          &nbsp;
          <Help buttonLabel={'Parametre'} modalTitle={'Prispôsobenie výpočtov'}
                modalBody={Parametre} size={'md'} />
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
  kriteria: state.kriteria,
  zdroje: state.vychodzdroje
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  loadSCZTVychod: (e) => dispatch(loadSCZTVychodRequest(e)),
  updateParametre: (e) => dispatch(updateParametre(e)),
  updateVonkajsiaTeplotaPriemer: (e) => dispatch(updateVonkajsiaTeplotaPriemer(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kriteria)