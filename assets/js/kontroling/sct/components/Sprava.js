import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter,
    FormGroup, Label, Input, Table, Alert, Badge, UncontrolledTooltip } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import Moment from 'react-moment'
import Notifications from 'react-notification-system-redux'
import { connect } from 'react-redux'
import {
    fetchOpravneniaRequest,
    fetchSpravaRequest,
    loadMainEntryRequest,
    toggleHighlightEditable } from '../../../services/ActionsCenaTepla'

const Polozka = ({id, nazov, rok, stav, vytvoril, datum, poznamka, upload}) => (
    <option value={id}
            data-nazov={nazov}
            data-rok={rok}
            data-stav={stav.stav}
            data-vytvoril={vytvoril.fullname}
            data-datum={ datum.timestamp }
            data-poznamka={poznamka}
            data-upload_dt={upload.dt && upload.dt.original}
            data-upload_sn={upload.sn && upload.sn.original}
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

class Spravovat extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            modal: false,
            validOption: false,
            id: null,
            nazov: null,
            rok: null,
            stav: null,
            poznamka: null,
            vytvoril: null,
            datum: null,
            excel_dt: null,
            excel_sn: null
        }

        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLoad = this.handleLoad.bind(this)
        this.handleNotify = this.handleNotify.bind(this)
        this.handleHighlightEditable = this.handleHighlightEditable.bind(this)
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
            poznamka: null,
            vytvoril: null,
            datum: null,
            excel_dt: null,
            excel_sn: null
        })
    }

    handleChange(e) {
        const data = e.target.options[e.target.selectedIndex].dataset

        this.setState({
            validOption: e.target.value !== '',
            id: e.target.value,
            nazov: data.nazov,
            rok: data.rok,
            stav: data.stav,
            poznamka: data.poznamka,
            vytvoril: data.vytvoril,
            datum: data.datum,
            excel_dt: data.upload_dt,
            excel_sn: data.upload_sn
        })
    }

    handleLoad() {
        const id = this.state.id

        this.setState({
            modal: !this.state.modal
        })

        this.props.loadMainEntryRequest(id)
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
        this.props.toggleHighlightEditable(!this.props.sprava.highlightEditable)
    }

    componentDidMount() {
        this.props.fetchOpravneniaRequest()
        this.props.fetchSpravaRequest()
    }

    render() {
        const opravnenia = this.props.opravnenia
        const sprava = this.props.sprava

        return (
            <Card>
                {/*<CardImg top src="../../build/static/tools.jpg" />*/}
                <CardBody>
                    <CardTitle>Nástroje na správu</CardTitle>
                    {/*<CardSubtitle>Vytvoriť novú alebo načítať existujúcu položku</CardSubtitle>*/}
                    <CardText>Po kliknutí na tlačidlo nižšie sa zobrazí dialógové okno s možnosťami</CardText>

                    <Button color="primary" onClick={this.toggle} disabled={sprava.loading || !opravnenia.mng}>
                        {sprava.loading && <FontAwesome name="spinner" spin />}{' '}
                        Spravovať
                    </Button>
                    {' '}
                    <Button color="flower" onClick={this.handleNotify}>
                        Notify
                    </Button>

                    { sprava.loading && <NacitavaniePoloziek/> }
                    { opravnenia.loading && <NacitavanieOpravneni/> }

                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Skutočná cena tepla</ModalHeader>
                        <ModalBody>
                            <Input type="select" onChange={ this.handleChange }>
                                <option value="" disabled={ this.state.validOption }>- Vyberte položku -</option>
                                { sprava.polozky.map(polozka => <Polozka key={polozka.id} {...polozka} />) }
                            </Input>
                            <br/>
                            {
                                this.state.validOption &&
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
                                                <th>Excel<br/><span className="small">Dodané teplo</span></th>
                                                <td className="align-middle">{ this.state.excel_dt ?
                                                    <Badge color="success">{this.state.excel_dt}</Badge>
                                                    :
                                                    <span>
                                                        <Badge color="danger" id="excel-nenahrany-dt-spr">Nenahraný</Badge>
                                                        <UncontrolledTooltip placement="top" target="excel-nenahrany-dt-spr">
                                                            Excel súbor s údajmi o dodanom teple zatiaľ nebol nahraný
                                                        </UncontrolledTooltip>
                                                    </span> }
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Excel<br/><span className="small">Skutočné náklady</span></th>
                                                <td className="align-middle">{ this.state.excel_sn ?
                                                    <Badge color="success">{this.state.excel_sn}</Badge>
                                                    :
                                                    <span>
                                                        <Badge color="danger" id="excel-nenahrany-sn-spr">Nenahraný</Badge>
                                                        <UncontrolledTooltip placement="top" target="excel-nenahrany-sn-spr">
                                                            Excel súbor s údajmi skutočných nákladov zatiaľ nebol nahraný
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
                                            <Moment unix>{ this.state.datum }</Moment>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            }
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={ this.toggle } disabled>
                                <FontAwesome name="plus" />{' '}
                                Vytvoriť
                            </Button>
                            <Button color="primary" onClick={ this.handleLoad } disabled={ !this.state.validOption }>
                                <FontAwesome name="folder-open" />{' '}
                                Načítať
                            </Button>
                            <Button color="secondary" onClick={ this.toggle }>Zrušiť</Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
                {
                    opravnenia.kont &&
                    <CardFooter>
                        <FormGroup>
                            <Label check>
                                <Input type="checkbox"
                                       checked={ sprava.highlightEditable }
                                       onChange={ this.handleHighlightEditable }
                                />{' '}
                                Zvýrazniť upravovateľné položky
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label check id="xb-historia">
                                <Input type="checkbox"
                                />{' '}
                                História úprav
                                <UncontrolledTooltip placement="bottom" target="xb-historia">
                                    Zobrazenie zmenených hodnôt v minulosti
                                </UncontrolledTooltip>
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label check id="xb-vypocty">
                                <Input type="checkbox"
                                />{' '}
                                Výpočty
                                <UncontrolledTooltip placement="bottom" target="xb-vypocty">
                                    Zobrazenie podrobného výpočtu hodnôt s preklikom na dané čísla
                                </UncontrolledTooltip>
                            </Label>
                        </FormGroup>
                    </CardFooter>
                }
            </Card>
        )
    }
}

Spravovat.contextTypes = {
    store: PropTypes.object
}

export default connect(
    // mapStateToProps
    (state) => ({
        opravnenia: state.opravnenia,
        sprava: state.sprava
    }),
    // mapDispatchToProps
    {
        fetchOpravneniaRequest,
        fetchSpravaRequest,
        loadMainEntryRequest,
        toggleHighlightEditable
    }
)(Spravovat)
