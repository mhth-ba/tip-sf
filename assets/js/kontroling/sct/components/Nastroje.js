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

  loadMainEntryRequest,

  createHlavnyRequest,

  toggleHighlightEditable,
  toggleHistoria,
  toggleVypocty
} from '../actions'

import * as CONSTANTS from '../../../constants'

const Polozka = ({id, nazov, rok, stav, nct_dodavka, nct_cena, vytvoril, datum, poznamka, upload}) => (
  <option value={id}
          data-nazov={nazov}
          data-rok={rok}
          data-stav={stav.stav}
          data-prepojenie_dodavka={nct_dodavka ? `${nct_dodavka.nazov} na rok ${nct_dodavka.rok}` : null}
          data-nct_dodavka={nct_dodavka ? nct_dodavka.id : null}
          data-prepojenie_cena={nct_cena ? `${nct_cena.nazov} na rok ${nct_cena.rok}` : null}
          data-nct_cena={nct_cena ? nct_cena.id : null}
          data-vytvoril={vytvoril.fullname}
          data-datum={ datum }
          data-poznamka={poznamka}
          data-upload_dt={upload.dt && upload.dt.original}
          data-upload_sn={upload.sn && upload.sn.original}
          data-upload_do={upload.do && upload.do.original}
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

      modal_create: false,      // vytvorit novy hlavny zaznam
      rok_create: null,         // obdobie (rok) noveho hlavneho zaznamu

      modal: false,             // otvorit cenu tepla
      validOption: false,
      id: null,
      nazov: null,
      rok: null,
      stav: null,
      prepojenie_dodavka: null, // nazov a rok NCT (plan dodavky tepla)
      nct_dodavka: null,        // ID NCT
      prepojenie_cena: null,    // nazov a rok NCT (navrh ceny podany na URSO)
      nct_cena: null,           // ID NCT
      poznamka: null,
      vytvoril: null,
      datum: null,
      excel_dt: null,
      excel_sn: null,
      excel_do: null
    }

    this.toggleCreate = this.toggleCreate.bind(this)
    this.handleRokCreate = this.handleRokCreate.bind(this)
    this.handleCreate = this.handleCreate.bind(this)

    this.toggle = this.toggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLoad = this.handleLoad.bind(this)
    this.handleNotify = this.handleNotify.bind(this)
    this.handleHighlightEditable = this.handleHighlightEditable.bind(this)
    this.hadnelHistoria = this.handleHistoria.bind(this)
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

  handleCreate() {

    const rok = this.state.rok_create

    const data = {rok}

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
      stav: null,
      prepojenie_dodavka: null, // nazov a rok NCT (plan dodavky tepla)
      nct_dodavka: null,        // ID NCT
      prepojenie_cena: null,    // nazov a rok NCT (navrh ceny podany na URSO)
      nct_cena: null,           // ID NCT
      poznamka: null,
      vytvoril: null,
      datum: null,
      excel_dt: null,
      excel_sn: null,
      excel_do: null
    })
  }

  handleChange(e) {
    const option = e.target.options[e.target.selectedIndex]

    const nazov = option.getAttribute('data-nazov')
    const rok = option.getAttribute('data-rok')
    const stav = option.getAttribute('data-stav')
    const prepojenie_dodavka = option.getAttribute('data-prepojenie_dodavka')
    const nct_dodavka = option.getAttribute('data-nct_dodavka')
    const prepojenie_cena = option.getAttribute('data-prepojenie_cena')
    const nct_cena = option.getAttribute('data-nct_cena')
    const poznamka = option.getAttribute('data-poznamka')
    const vytvoril = option.getAttribute('data-vytvoril')
    const datum = option.getAttribute('data-datum')
    const excel_dt = option.getAttribute('data-upload_dt')
    const excel_sn = option.getAttribute('data-upload_sn')
    const excel_do = option.getAttribute('data-upload_do')

    this.setState({
      validOption: e.target.value !== '',
      id: e.target.value,
      nazov,
      rok,
      stav,
      prepojenie_dodavka,
      nct_dodavka,
      prepojenie_cena,
      nct_cena,
      poznamka,
      vytvoril,
      datum,
      excel_dt,
      excel_sn,
      excel_do
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

  handleNotify() {
    this.context.store.dispatch(
      Notifications.info({
        title: 'Hey, it\'s good to see ya!',
        message: 'Now you can see how easy it is to use notifications in React!',
        autoDismiss: 0,
        action: {
          label: 'Click me!!',
          callback: () => console.log('clicked!')
        }
      })
    )
  }

  handleHighlightEditable() {
    const flag = !this.props.nastroje.highlightEditable
    localStorage.setItem(CONSTANTS.CACHE_KONT_SCT_TOOLS_EDIT, flag)
    this.props.toggleHighlightEditable(flag)
  }

  handleHistoria() {
    const flag = !this.props.nastroje.historia
    this.props.toggleHistoria(flag)
  }

  handleVypocty() {
    const flag = !this.props.nastroje.vypocty
    localStorage.setItem(CONSTANTS.CACHE_KONT_SCT_TOOLS_CALCULATIONS, flag)
    this.props.toggleVypocty(flag)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // zaskrnutie checkboxov (z karty nastrojov) po nacitani podla posledneho nastavenia pouzivatela (browser cache)
    if (prevProps.hlavny.all_data_loaded !== this.props.hlavny.all_data_loaded) {
      if (this.props.hlavny.stav.id !== 1 && this.props.opravnenia.kont) {
        this.props.toggleHighlightEditable(localStorage.getItem(CONSTANTS.CACHE_KONT_SCT_TOOLS_EDIT) === "true")
      }
      if (this.props.opravnenia.mng) {
        this.props.toggleHistoria(localStorage.getItem(CONSTANTS.CACHE_KONT_SCT_TOOLS_HISTORY) === "true")
      }
      if (this.props.opravnenia.mng) {
        this.props.toggleVypocty(localStorage.getItem(CONSTANTS.CACHE_KONT_SCT_TOOLS_CALCULATIONS) === "true")
      }
    }
  }

  componentDidMount() {
    this.props.fetchOpravneniaRequest()
    this.props.fetchVyberPolozkyRequest()

    // TODO zabezpecit, aby sa nacitanie moznosti vykonalo iba pre opravnenych uzivatelov, t.j. ROLE_SCT_KONT
    this.props.fetchMoznostiRequest()
  }

  render() {

    const opravnenia = this.props.opravnenia
    const vyberpolozky = this.props.vyberpolozky
    const nastroje = this.props.nastroje
    const hlavny = this.props.hlavny

    let buttonCreateDisabled = (
      this.state.rok_create === null || this.state.rok_create === ''
    )

    return (
      <Card>
        {/*<CardImg top src="../../build/static/tools.jpg" />*/}
        <CardHeader className="bg-secondary text-white">Karta nástrojov</CardHeader>
        <CardBody>
          <CardText>
            Otvoriť existujúcu cenu tepla alebo vypočítať novú cenu tepla?
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
            <ModalHeader toggle={this.toggle}>Skutočná cena tepla</ModalHeader>
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
                        <th>Stav</th>
                        <td>{ this.state.stav }</td>
                      </tr>
                      <tr>
                        <th>Prepojenie - dodávka<br/><span className="small">Plán dodávky tepla</span></th>
                        <td>{ this.state.prepojenie_dodavka ?
                          <span>{ this.state.prepojenie_dodavka }</span>
                          :
                          <span>Nie je</span> }
                        </td>
                      </tr>
                      <tr>
                        <th>Prepojenie - cena<br/><span className="small">Návrh ceny podaný na ÚRSO</span></th>
                        <td>{ this.state.prepojenie_cena ?
                          <span>{ this.state.prepojenie_cena }</span>
                          :
                          <span>Nie je</span> }
                        </td>
                      </tr>
                      <tr>
                        <th>Import DT<br/><span className="small">Dodané teplo</span></th>
                        <td className="align-middle">{ this.state.excel_dt ?
                          <Badge color="success">{ this.state.excel_dt }</Badge>
                          :
                          <span>
                            <Badge color="danger" id="xml-nenahrany-dt-spr">Nenahraný</Badge>
                            <UncontrolledTooltip placement="top" target="xml-nenahrany-dt-spr">
                              XML súbor s údajmi o skutočnej dodávke tepla zatiaľ nebol nahraný
                            </UncontrolledTooltip>
                          </span> }
                        </td>
                      </tr>
                      <tr>
                        <th>Import SN<br/><span className="small">Skutočné náklady</span></th>
                        <td className="align-middle">{ this.state.excel_sn ?
                          <Badge color="success">{ this.state.excel_sn }</Badge>
                          :
                          <span>
                            <Badge color="danger" id="xml-nenahrany-sn-spr">Nenahraný</Badge>
                            <UncontrolledTooltip placement="top" target="xml-nenahrany-sn-spr">
                              XML súbor s údajmi skutočných nákladov zatiaľ nebol nahraný
                            </UncontrolledTooltip>
                          </span> }
                        </td>
                      </tr>
                      <tr>
                        <th>Import DO<br/><span className="small">Daňové odpisy</span></th>
                        <td className="align-middle">{ this.state.excel_do ?
                          <Badge color="success">{ this.state.excel_do }</Badge>
                          :
                          <span>
                            <Badge color="danger" id="xml-nenahrany-do-spr">Nenahraný</Badge>
                            <UncontrolledTooltip placement="top" target="xml-nenahrany-do-spr">
                              XML súbor s údajmi daňových odpisov zatiaľ nebol nahraný
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
            <ModalHeader toggle={this.toggleCreate}>Skutočná cena tepla</ModalHeader>
            <ModalBody>
              <p>Vytvorenie nového hlavného záznamu skutočnej ceny tepla</p>
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
                    {/* TODO: Načítať roky, ktoré je možné použiť na vytvorenie hlavného záznamu */}
                    {/*{
                      years.map( (item, ix) => (
                        <option key={ix} value={item}>{item}</option>
                      ))
                    }*/}
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
                      Po kliknutí na zvýraznenú bunku sa zobrazí popis výpočtu hodnoty s preklikom na súvisiace čísla a
                      grafy
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

  // nacitanie hlavneho zaznamu spolu so vsetkymi suvisiacimi datami
  loadMainEntryRequest: (e) => dispatch(loadMainEntryRequest(e)),

  // vytvorenie halvneho zaznamu
  create: (e) => dispatch(createHlavnyRequest(e)),

  // toolbox
  toggleHighlightEditable: (e) => dispatch(toggleHighlightEditable(e)),
  toggleHistoria: (e) => dispatch(toggleHistoria(e)),
  toggleVypocty: (e) => dispatch(toggleVypocty(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nastroje)
