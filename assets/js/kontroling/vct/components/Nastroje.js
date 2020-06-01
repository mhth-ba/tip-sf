import React from 'react'
import PropTypes from 'prop-types'
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardImg, CardText, CardBody, CardTitle, CardFooter, CardHeader,
  Form, FormGroup, Label, Input, Table, Badge, UncontrolledTooltip
} from 'reactstrap'
import { dateTime, date } from '../../../utils/format'
import FontAwesome from 'react-fontawesome'
import Notifications from 'react-notification-system-redux'
import { connect } from 'react-redux'
import {
  fetchOpravneniaRequest,
  fetchVyberPolozkyRequest,
  fetchMoznostiRequest,
  fetchAktivitaRequest,
  //
  loadMainEntryRequest,
  //
  createHlavnyRequest,
  //
  toggleHighlightEditable,
  toggleHistoria,
  // toggleVypocty
} from '../actions'

import * as CONSTANTS from '../../../constants'

const Polozka = ({id, nazov, rok, mesiac, stav, nct, sct, vytvoril, datum, poznamka, upload}) => (
  <option value={id}
          data-nazov={nazov}
          data-rok={rok}
          data-mesiac={mesiac}
          data-stav={stav.stav}
          data-prepojenie_nct={nct ? `${nct.nazov} na rok ${nct.rok}` : null}
          data-nct={nct ? nct.id : null}
          data-prepojenie_sct={sct ? `${sct.nazov} na rok ${sct.rok}` : null}
          data-sct={sct ? sct.id : null}
          data-vytvoril={vytvoril.fullname}
          data-datum={ datum }
          data-poznamka={poznamka}
          data-upload_odt={upload.odt && upload.odt.original}
  >({rok}) {nazov}</option>
)

const NacitavanieOpravneni = () => (
  <div className="small text-muted">
    <em>Načítavajú sa oprávnenia</em>
  </div>
)

const NacitavaniePoloziek = () => (
  <div className="small text-muted">
    <em>Načítavajú sa položky ceny tepla</em>
  </div>
)

class Nastroje extends React.Component {
  constructor (props) {
    super (props)

    this.state = {

      modal_create: false,       // vytvorit novy hlavny zaznam
      rok_create: null,          // obdobie (rok) noveho hlavneho zaznamu
      mesiac_create: null,       // obdobie (mesiac) noveho hlavneho zaznamu

      modal: false,              // otvorit cenu tepla
      validOption: false,
      id: null,
      nazov: null,
      rok: null,
      mesiac: null,
      stav: null,
      prepojenie_nct: null,      // nazov a rok NCT
      nct: null,                 // ID NCT
      prepojenie_sct: null,      // nazov a rok SCT
      sct: null,                 // ID SCT
      poznamka: null,
      vytvoril: null,
      datum: null,
      excel_odt: null            // ocakavana dodavka tepla (subor)
    }

    this.toggleCreate = this.toggleCreate.bind(this)
    this.handleRokCreate = this.handleRokCreate.bind(this)
    this.handleMesiacCreate = this.handleMesiacCreate.bind(this)
    this.handleCreate = this.handleCreate.bind(this)

    this.toggle = this.toggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLoad = this.handleLoad.bind(this)
    this.handleHighlightEditable = this.handleHighlightEditable.bind(this)
    this.handleHistoria = this.handleHistoria.bind(this)
    this.handleVypocty = this.handleVypocty.bind(this)
  }

  toggleCreate() {
    this.setState({
      modal_create: !this.state.modal_create
    })
  }

  handleRokCreate(e) {
    this.setState({
      rok_create: e.target.value
    })
  }

  handleMesiacCreate(e) {
    this.setState({
      mesiac_create: e.target.value
    })
  }

  handleCreate() {

    const rok = this.state.rok_create
    const mesiac = this.state.mesiac_create

    const data = {rok, mesiac}

    this.setState({
      modal_create: !this.state.modal_create
    })

    //console.log(data)

    this.props.create(data)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })

    this.setState({
      validOption: false,
      id: null,
      nazov: null,
      rok: null,
      mesiac: null,
      stav: null,
      prepojenie_nct: null,  // nazov a rok NCT
      nct: null,             // ID NCT
      prepojenie_sct: null,  // nazov a rok SCT
      sct: null,             // ID SCT
      poznamka: null,
      vytvoril: null,
      datum: null,
      excel_odt: null        // ocakavana dodavka tepla
    })
  }

  handleChange(e) {
    const option = e.target.options[e.target.selectedIndex]

    const nazov = option.getAttribute('data-nazov')
    const rok = option.getAttribute('data-rok')
    const mesiac = option.getAttribute('data-mesiac')
    const stav = option.getAttribute('data-stav')
    const prepojenie_nct = option.getAttribute('data-prepojenie_nct')
    const nct = option.getAttribute('data-nct')
    const prepojenie_sct = option.getAttribute('data-prepojenie_sct')
    const sct = option.getAttribute('data-sct')
    const poznamka = option.getAttribute('data-poznamka')
    const vytvoril = option.getAttribute('data-vytvoril')
    const datum = option.getAttribute('data-datum')
    const excel_odt = option.getAttribute('data-upload_odt')

    this.setState({
      validOption: e.target.value !== '',
      id: e.target.value,
      nazov,
      rok,
      mesiac,
      stav,
      prepojenie_nct,
      nct,
      prepojenie_sct,
      sct,
      poznamka,
      vytvoril,
      datum,
      excel_odt
    })
  }

  handleLoad() {
    const id = this.state.id

    const data = {
      id,
      roles: this.props.opravnenia
    }

    this.setState({
      modal: !this.state.modal
    })

    this.props.loadMainEntryRequest(data)
  }

  handleHighlightEditable() {
    const flag = !this.props.nastroje.highlightEditable
    localStorage.setItem(CONSTANTS.CACHE_KONT_VCT_TOOLS_EDIT, flag)
    this.props.toggleHighlightEditable(flag)
  }

  handleHistoria() {
    const flag = !this.props.nastroje.historia
    localStorage.setItem(CONSTANTS.CACHE_KONT_VCT_TOOLS_HISTORY, flag)
    this.props.toggleHistoria(flag)
  }

  handleVypocty() {
    const flag = !this.props.nastroje.vypocty
    localStorage.setItem(CONSTANTS.CACHE_KONT_VCT_TOOLS_CALCULATIONS, flag)
    this.props.toggleVypocty(flag)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    // zaskrnutie checkboxov (z karty nastrojov) po nacitani podla posledneho nastavenia pouzivatela (browser cache)
    if (prevProps.hlavny.all_data_loaded !== this.props.hlavny.all_data_loaded) {
      if (this.props.hlavny.stav.id !== 1 && this.props.opravnenia.kont) {
        this.props.toggleHighlightEditable(localStorage.getItem(CONSTANTS.CACHE_KONT_VCT_TOOLS_EDIT) === "true")
      }
      if (this.props.opravnenia.mng) {
        this.props.toggleHistoria(localStorage.getItem(CONSTANTS.CACHE_KONT_VCT_TOOLS_HISTORY) === "true")
      }
      /*if (this.props.opravnenia.mng) {
        this.props.toggleVypocty(localStorage.getItem(CONSTANTS.CACHE_KONT_VCT_TOOLS_CALCULATIONS) === "true")
      }*/
    }

    if (prevProps.opravnenia.mng !== this.props.opravnenia.mng) {
      if (this.props.opravnenia.mng) {
        this.props.fetchAktivitaRequest()
      }
    }
  }

  componentDidMount() {
    this.props.fetchOpravneniaRequest()
    this.props.fetchVyberPolozkyRequest()

    this.props.fetchMoznostiRequest()
  }

  render() {

    const opravnenia = this.props.opravnenia
    const vyberpolozky = this.props.vyberpolozky
    const nastroje = this.props.nastroje
    const hlavny = this.props.hlavny

    let buttonCreateDisabled = (
      this.state.rok_create === null || this.state.rok_create === ''
      || this.state.mesiac_create === null || this.state.mesiac_create === ''
    )

    return (
      <Card>
        {/*<CardImg top src="../../build/static/tools.jpg" />*/}
        <CardHeader className="bg-secondary text-white">Karta nástrojov</CardHeader>
        <CardBody>
          <CardText>
            Otvoriť existujúce vyhodnotenie ceny tepla alebo vypočítať nové?
          </CardText>

          <Button color="primary" onClick={this.toggle} disabled={nastroje.loading || !opravnenia.vyr}>
            {vyberpolozky.loading && <FontAwesome name="spinner" spin />}&nbsp;
            Otvoriť cenu tepla
          </Button>
          &nbsp;
          <Button color="primary" onClick={this.toggleCreate} disabled={nastroje.loading || hlavny.initialized || !opravnenia.kont}>
            Vytvoriť nový hlavný záznam
          </Button>
          &nbsp;

          {/*{' '}
          <Button color="flower" onClick={this.handleNotify}>
            Notify
          </Button>*/}

          { vyberpolozky.loading && <NacitavaniePoloziek/> }
          { opravnenia.loading && <NacitavanieOpravneni/> }

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Vyhodnotenie ceny tepla</ModalHeader>
            <ModalBody>
              <Input type="select" disabled={vyberpolozky.loading} onChange={ this.handleChange }>
                <option value="" disabled={ this.state.validOption }>- Vyberte položku -</option>
                { vyberpolozky.polozky.map(polozka => <Polozka key={polozka.id} {...polozka} />) }
              </Input>
              <br/>
              {
                (this.state.validOption && opravnenia.mng) &&
                <Card>
                  <CardBody>
                    <Table size="sm">
                      <tbody>
                      <tr>
                        <th>Názov</th>
                        <td>{ this.state.nazov }</td>
                      </tr>
                      <tr>
                        <th>Rok</th>
                        <td>{ this.state.rok }</td>
                      </tr>
                      <tr>
                        <th>Mesiac</th>
                        <td>{ this.state.mesiac }</td>
                      </tr>
                      <tr>
                        <th>Stav</th>
                        <td>{ this.state.stav }</td>
                      </tr>
                      <tr>
                        <th>Prepojenie - NCT</th>
                        <td>{ this.state.prepojenie_nct ?
                          <span>{ this.state.prepojenie_nct }</span>
                          :
                          <span>Nie je</span> }
                        </td>
                      </tr>
                      <tr>
                        <th>Prepojenie - SCT</th>
                        <td>{ this.state.prepojenie_sct ?
                          <span>{ this.state.prepojenie_sct }</span>
                          :
                          <span>Nie je</span> }
                        </td>
                      </tr>
                      <tr>
                        <th>Import ODT<br/><span className="small">Očakávaná dodávka tepla</span></th>
                        <td className="align-middle">{ this.state.excel_odt ?
                          <Badge color="success">{ this.state.excel_odt }</Badge>
                          :
                          <span>
                            <Badge color="danger" id="xml-nenahrany-odt-spr">Nenahraný</Badge>
                            <UncontrolledTooltip placement="top" target="xml-nenahrany-odt-spr">
                              XML súbor s údajmi o očakávanej dodávke tepla zatiaľ nebol nahraný
                            </UncontrolledTooltip>
                          </span> }
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                    <CardText style={{whiteSpace: 'pre-line'}}>
                      { this.state.poznamka }
                    </CardText>
                    <CardText className="small text-muted text-right">
                      Vytvoril užívateľ { this.state.vytvoril }
                      <br/>
                      { dateTime( this.state.datum ) }
                    </CardText>
                  </CardBody>
                </Card>
              }
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={ this.handleLoad } disabled={ !this.state.validOption }>
                <FontAwesome name="folder-open" />{' '}
                Načítať
              </Button>
              <Button color="secondary" onClick={ this.toggle }>Zrušiť</Button>
            </ModalFooter>
          </Modal>




          <Modal isOpen={this.state.modal_create} toggle={this.toggleCreate} className={this.props.className}>
            <ModalHeader toggle={this.toggleCreate}>Vyhodnotenie ceny tepla</ModalHeader>
            <ModalBody>
              <p>Vytvorenie nového hlavného záznamu vyhodnotenia ceny tepla</p>
              <br/>
              <Form inline>
                <FormGroup>
                  <Label>Obdobie</Label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Input type={'select'} id="novy-hlavny-obdobie-rok" onChange={this.handleRokCreate}>
                    <option value="">-- Rok --</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </Input>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Input type={'select'} id="novy-hlavny-obdobie-mesiac" onChange={this.handleMesiacCreate}>
                    <option value="">-- Mesiac --</option>
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
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.handleCreate} disabled={buttonCreateDisabled}>Vytvoriť</Button>
              <Button color="secondary" onClick={this.toggleCreate}>Zrušiť</Button>
            </ModalFooter>
          </Modal>




          <br/><br/>

          { hlavny.initialized &&
            <Form>
              { (opravnenia.kont && hlavny.stav.id !== 1) &&
                <FormGroup check>
                  <Label check id="xb-uprava">
                    <Input type="checkbox"
                           checked={nastroje.highlightEditable}
                           onChange={this.handleHighlightEditable}
                    />{' '}
                    Upravovať hodnoty
                    <UncontrolledTooltip placement="bottom" target="xb-uprava">
                      Položky na zadávanie sa odomknú a zvýraznia sa
                    </UncontrolledTooltip>
                  </Label>
                </FormGroup>
              }
              { opravnenia.mng &&
                <FormGroup check>
                  <Label check id="xb-historia">
                    <Input type="checkbox"
                           checked={nastroje.historia}
                           onChange={this.handleHistoria}
                    />{' '}
                    História úprav
                    <UncontrolledTooltip placement="bottom" target="xb-historia">
                      Zobrazí sa história zmeny príslušnej hodnoty (dátum a zamestnanec)
                    </UncontrolledTooltip>
                  </Label>
                </FormGroup>
              }
              { opravnenia.mng &&
                <FormGroup check>
                  <Label check id="xb-vypocty">
                    <Input type={'checkbox'}
                           checked={nastroje.vypocty}
                           onChange={this.handleVypocty}
                    />{' '}
                    Výpočty
                    <UncontrolledTooltip placement="bottom" target="xb-vypocty">
                      Po kliknutí na zvýraznenú bunku sa zobrazí popis výpočtu hodnoty
                      s preklikom na súvisiace čísla a grafy
                    </UncontrolledTooltip>
                  </Label>
                </FormGroup>
              }
            </Form>
          }
        </CardBody>
      </Card>
    )
  }
}

Nastroje.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = ( state, ownProps ) => ({
  opravnenia: state.opravnenia,
  vyberpolozky: state.vyberpolozky,
  nastroje: state.nastroje,
  hlavny: state.hlavny
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  // opravnenia a zoznam hlavnych poloziek
  fetchOpravneniaRequest: () => dispatch(fetchOpravneniaRequest()),
  fetchVyberPolozkyRequest: () => dispatch(fetchVyberPolozkyRequest()),

  // zoznam moznosti v select->option boxoch
  fetchMoznostiRequest: () => dispatch(fetchMoznostiRequest()),

  // aktivita pouzivatelov (historia zadavania hodnot)
  fetchAktivitaRequest: () => dispatch(fetchAktivitaRequest()),

  // nacitanie hlavneho zaznamu spolu so vsetkymi suvisiacimi datami
  loadMainEntryRequest: (e) => dispatch(loadMainEntryRequest(e)),

  // vytvorenie halvneho zaznamu
  create: (e) => dispatch(createHlavnyRequest(e)),

  // toolbox
  toggleHighlightEditable: (e) => dispatch(toggleHighlightEditable(e)),
  toggleHistoria: (e) => dispatch(toggleHistoria(e)),
  //toggleVypocty: (e) => dispatch(toggleVypocty(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nastroje)
