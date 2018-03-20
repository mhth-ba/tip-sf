import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody, CardTitle, Table, Badge, UncontrolledTooltip,
Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
import dateTime from '../../../utils/format'
import FontAwesome from 'react-fontawesome'
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek2'
import _ from 'lodash'
import Loader from '../../../components/Loader'
import { connect } from 'react-redux'
import { updateHlavnyRequest } from '../../../services/ActionsCenaTepla'

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

    validateNazov(text) {
        return text.length >= 5
    }

    validateRok(cislo) {
        return !isNaN(cislo)
            && 2010 <= cislo === cislo <= 2030
    }

    render() {
        const opravnenia = this.props.opravnenia
        const sprava = this.props.sprava
        const hlavny = this.props.hlavny

        const path = Routing.generate('sct_download')

        return (
            <Card>
                <Loader loading={ hlavny.loading } content={
                    <CardBody>
                        <CardTitle>
                            { hlavny.loading && <FontAwesome name="spinner" spin /> }{' '}
                            Karta hlavných údajov
                        </CardTitle>
                        <CardText>Všetky informácie týkajúce sa hlavného záznamu nájdete tu</CardText>
                        { hlavny.initialized &&
                        <div>
                            <Table>
                                <tbody>
                                <tr>
                                    <th>Názov</th>
                                    <td>
                                        <RIEInput {...RIEConfig}
                                                  value={ hlavny.nazov }
                                                  change={ this.handleChange }
                                                  propName="nazov"
                                                  className={ sprava.highlightEditable ? "riek-base" : "" }
                                                  isDisabled={ !opravnenia.kont }
                                                  validate={ this.validateNazov }
                                                  editProps={{
                                                      maxLength: 50
                                                  }}
                                        />
                                        <FormFeedback>Musí mať aspoň 5 znakov</FormFeedback>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Rok</th>
                                    <td>
                                        <RIENumber {...RIEConfig}
                                                   value={ hlavny.rok }
                                                   change={ this.handleChange }
                                                   propName="rok"
                                                   className={ sprava.highlightEditable ? "riek-base" : "" }
                                                   isDisabled={ !opravnenia.kont }
                                                   validate={ this.validateRok }
                                                   editProps={{
                                                       min: 2000,
                                                       max: 2050
                                                   }}
                                        />
                                        <FormFeedback>Musí byť v rozmedzí od 2010 do 2030</FormFeedback>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Stav</th>
                                    <td>{ hlavny.stav.stav }</td>
                                </tr>
                                <tr>
                                    <th>Excel<br/><span className="small">Dodané teplo</span></th>
                                    <td className="align-middle">{ hlavny.upload.dt ?
                                        <Badge href={`${path}/${hlavny.upload.dt.id}`} color="success">
                                            { hlavny.upload.dt.original }
                                        </Badge>
                                        :
                                        <span>
                                            <Badge color="danger" id="excel-nenahrany-dt-hl">Nenahraný</Badge>
                                            <UncontrolledTooltip placement="top" target="excel-nenahrany-dt-hl">
                                                Excel súbor s údajmi o dodanom teple zatiaľ nebol nahraný
                                            </UncontrolledTooltip>
                                        </span> }
                                    </td>
                                </tr>
                                <tr>
                                    <th>Excel<br/><span className="small">Skutočné náklady</span></th>
                                    <td className="align-middle">{ hlavny.upload.sn ?
                                        <Badge href={`${path}/${hlavny.upload.sn.id}`} color="success">
                                            { hlavny.upload.sn.original }
                                        </Badge>
                                        :
                                        <span>
                                            <Badge color="danger" id="excel-nenahrany-sn-hl">Nenahraný</Badge>
                                            <UncontrolledTooltip placement="top" target="excel-nenahrany-sn-hl">
                                                Excel súbor s údajmi skutočných nákladov zatiaľ nebol nahraný
                                            </UncontrolledTooltip>
                                        </span> }
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                            <CardText style={{whiteSpace: 'pre-line'}}>
                                <RIETextArea {...RIEConfig}
                                             value={ hlavny.poznamka }
                                             change={ this.handleChange }
                                             propName="poznamka"
                                             rows={8}
                                             className={ sprava.highlightEditable ? "riek-base" : "" }
                                             isDisabled={ !opravnenia.kont }
                                />
                            </CardText>
                            <CardText className="small text-muted text-right">
                                Vytvoril užívateľ { hlavny.vytvoril.fullname }
                                <br/>
                                { dateTime(hlavny.datum.timestamp) }
                            </CardText>
                            { hlavny.upravil && hlavny.zmenene &&
                                <CardText className="small text-muted text-right">
                                    Naposledy upravil užívateľ { hlavny.upravil.fullname }
                                    <br/>
                                    { dateTime(hlavny.zmenene.timestamp) }
                                </CardText>
                            }
                        </div> }
                    </CardBody>
                }/>
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
        sprava: state.sprava,
        hlavny: state.hlavny
    }),
    { updateHlavnyRequest }
)(Hlavny)
