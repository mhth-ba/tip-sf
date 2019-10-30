import React from 'react'
import {connect} from 'react-redux'

import ReactHtmlParser from 'react-html-parser'

import {
  Card, CardHeader, CardBody, CardFooter, CardTitle,
  Button, ButtonGroup,
  Table, Alert,
  UncontrolledTooltip
} from 'reactstrap'

import Swal from 'sweetalert2'
import withReactComponent from 'sweetalert2-react-content'

import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek2'

import Vstup from '../helpers/Vstup'
import VstupText from '../../../../components/VstupText'
import Popper from '../../../../components/Popper'

import {
  createKotolnaRequest,
  updateKotolnaRequest,
  updateParameterKotolneRequest,
  deleteKotolnaRequest,
} from '../../actions'

import FontAwesome from 'react-fontawesome'

import Highcharts from 'highcharts'
require('highcharts/highcharts-more')(Highcharts)
import ReactHighcharts from 'react-highcharts'
import * as CONFIGS from '../../../../configs'

class SpravaKotolni extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      zobrazenie: 1, // 1 = kotolne | 2 = parametre
      kotolna: null
    }

    this.kotolne = this.kotolne.bind(this)
    this.parametre = this.parametre.bind(this)

    this.handlePridatKotolnu = this.handlePridatKotolnu.bind(this)
    this.handleOdstranitKotolnu = this.handleOdstranitKotolnu.bind(this)
  }

  kotolne() {
    this.setState({
      zobrazenie: 1
    })
  }

  parametre(e) {
    this.setState({
      zobrazenie: 2,
      kotolna: Number(e.target.id) // ID kotolne
    })
  }

  handlePridatKotolnu() {

    const hlavny = this.props.hlavny
    const swal = withReactComponent(Swal)

    swal.fire({
      title: `<p>Pridať novú kotolňu?</p>`,
      text: `Nová kotolňa pribudne vo všetkých záznamoch ceny tepla kvôli integrite dát,
             ale platná bude iba pre rok ${hlavny.rok}. Prajete si vytvoriť novú kotolňu?`,
      type: 'question',
      showCancelButton: true,
      cancelButtonText: 'Zrušiť'
    }).then( (result) => {
      if (result.value) {

        const data = {
          id: hlavny.id // ID hlavného záznamu SCT
        }

        this.props.createKotolna(data)
      }
    })
  }

  handleOdstranitKotolnu(kotolna) {

    const MySwal = withReactComponent(Swal)

    MySwal.fire({
      title: `<p>Odstrániť kotolňu ${kotolna.nazov}?</p>`,
      text: `Kotolňa a všetky súvisiace údaje budú vymazané zo všetkých záznamov ceny tepla.
             Túto akciu nie je možné vrátiť späť. Ak si prajete kotolňu iba vyradiť z tohto záznamu,
             ale zároveň ponechať údaje v ostatných záznamoch, použite tlačidlo pre vyradenie kotolne
             a túto akciu zrušte.`,
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Zrušiť',
    }).then( (result) => {
      if (result.value) {

        const data = {
          id: kotolna.id,
          nazov: kotolna.nazov
        }

        this.props.deleteKotolna(data)

        this.setState({
          zobrazenie: 1,
          kotolna: null
        })
      }
    })
  }

  render() {

    const zobrazenie = this.state.zobrazenie

    const hlavny = this.props.hlavny

    const kotolne = this.props.kotolne.kotolne
    const kotolna_id = this.state.kotolna

    // id platnych kotolni
    let platne = []

    this.props.kotolne.platnost
      .filter(x => x['plati'] === true)
      .map(x => platne.push(x['kotolna'].id))

    let kotolna = {}
    let parametre = []
    let parametre_k = []
    let plati
    let primar

    if (kotolna_id !== null) {

      // objekt vlastnosti a hodnot kotolne
      kotolna = kotolne.find(x => x.id === kotolna_id)

      // pole parametrov prislusnej kotolne
      parametre = this.props.kotolne.parametre
        .filter(x => x['kotolna'].id === kotolna_id)
        .sort((a, b) => a.hlavny.rok - b.hlavny.rok)

      // pole parametrov prislusnej kotolne v tomto roku
      parametre_k = parametre.filter(x => x['hlavny']['rok'] === hlavny.rok)

      // platnost kotolne
      plati = this.props.kotolne.platnost
        .find(x => x['kotolna'].id === kotolna_id)['plati']

      // ma/nema primarny rozvod kotolna
      primar = this.props.kotolne.platnost
        .find(x => x['kotolna'].id === kotolna_id)['primar']
    }

    const opravnenia = this.props.opravnenia
    const nastroje = this.props.nastroje

    // loading states (fetching | creating | deleting)
    const loading = this.props.kotolne.loading
    const creating = this.props.kotolne.creating
    const deleting = this.props.kotolne.deleting

    return (

      <Card>
        <CardHeader className="bg-primary text-white">Správa plynových kotolní</CardHeader>

        {/* Prehľad kotolní */}
        { zobrazenie === 1 &&
          <CardBody>
            {/*<CardTitle className="text-danger">
              Skontrolovať parametre kotolní !
            </CardTitle>*/}
            { kotolne.map((k, ix) => (
                <span key={ix}>
                  <Button id={k.id} onClick={this.parametre} disabled={creating || deleting}
                          style={{ marginBottom: '3px' }}
                          color={ platne.includes(k.id) ? 'primary' : 'secondary' }
                  >
                    {k.nazov}
                  </Button>
                  {' '}
                </span>
              ))
            }
          </CardBody>
        }

        {/* Podrobnosti zvolenej kotolne (parametre, názov, platnosť) */}
        { zobrazenie === 2 &&
          <CardBody>
            <Table style={{ maxWidth: '465px' }}>
              <tbody>
              <tr>
                <th>Kotolňa</th>
                <VstupText val={ kotolna.nazov }
                           id={ kotolna.id }
                           col={ 'nazov' }
                           cell
                           class={'text-nowrap'}
                           opravnenia={ opravnenia.kont }
                           editable={ nastroje.highlightEditable }
                           editprops={{ maxLength: 30 }}
                           update={ this.props.updateKotolna }
                />
                <td>{''}</td>
              </tr>
              {
                parametre_k.map( (p, ix) => (
                  <tr key={ix}>
                    <td className={'text-nowrap'}>{ p['polozka'].nazov }</td>
                    <Vstup id={ p.id }
                           sqlt={'SCT_KotolnaParametre'}
                           hlavny={ hlavny.id }
                           val={ p.hodnota }
                           col={ 'hodnota' }
                           update={ this.props.updateParameter }
                           unit={ ReactHtmlParser(p['polozka']['jednotka']) }
                           dec={ p['polozka']['desatiny'] }
                           class={'text-nowrap'}
                    />
                    <td>
                      <Popper base={
                        <Button color={'default'} size={'sm'}>
                          <FontAwesome name={'line-chart'} id={`pop_ch_${ix}`} />
                        </Button>
                      }
                              placement={'right'}
                              target={`pop_ch_${ix}`}
                              title={'Vývoj parametra'}
                              body={
                                <ReactHighcharts config={{
                                  chart: { width: 300, height: 120 },
                                  credits: { enabled: false },
                                  title: { text: null },
                                  yAxis: { title: null },
                                  legend: { enabled: false },
                                  series: [{
                                    name: 'Hodnota',
                                    tooltip: { valueSuffix: ` ${p['polozka']['jednotka']}` },
                                    data: parametre
                                      .filter(x => x['polozka'].id === p['polozka'].id)
                                      .map( v => ([ v.hlavny.rok, v.hodnota ]) )
                                  }]
                                }} />
                              }
                      />
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </Table>

            { !plati &&
              <Alert color={'primary'} style={{ maxWidth: '465px' }}>
                <FontAwesome name={'info-circle'} />&nbsp;
                Kotolňa je vyradená
              </Alert>
            }

            { primar &&
              <Alert color={'primary'} style={{ maxWidth: '465px' }}>
                <FontAwesome name={'info-circle'} />&nbsp;
                Kotolňa má primárny rozvod
              </Alert>
            }

            <Button color={'default'} id={'kotolna-back'} onClick={ this.kotolne }>
              <FontAwesome name={'undo'} />
            </Button>
            <UncontrolledTooltip target={'kotolna-back'}>Späť</UncontrolledTooltip>
            {' '}
            <Button color={'default'} id={'kotolna-delete'} onClick={ this.handleOdstranitKotolnu.bind(this, kotolna) }
                    disabled={deleting || !opravnenia.kont}
            >
              { !deleting && <FontAwesome name={'trash-o'} /> }
              { deleting && <FontAwesome name={'spinner'} spin /> }
            </Button>
            <UncontrolledTooltip target={'kotolna-delete'}>Vymazať kotolňu</UncontrolledTooltip>
            {' '}
            { plati ?
              <span>
                <Button color={'default'} id={'kotolna-deactivate'} disabled={!opravnenia.kont}>
                  <FontAwesome name={'check-square-o'} />
                </Button>
                <UncontrolledTooltip target={'kotolna-deactivate'}>Vyradiť kotolňu</UncontrolledTooltip>
              </span>
              :
              <span>
                <Button color={'default'} id={'kotolna-activate'} disabled={!opravnenia.kont}>
                  <FontAwesome name={'square-o'} />
                </Button>
                <UncontrolledTooltip target={'kotolna-activate'}>Zaradiť kotolňu</UncontrolledTooltip>
              </span>
            }
            {' '}
            { primar ?
              <span>
                <Button color={'default'} id={'kotolna-primar-ma'} disabled={!opravnenia.kont}>
                  <FontAwesome name={'angle-double-up'} />
                </Button>
                <UncontrolledTooltip target={'kotolna-primar-ma'}>Odobrať primárny rozvod</UncontrolledTooltip>
              </span>
              :
              <span>
                <Button color={'default'} id={'kotolna-primar-nema'} disabled={!opravnenia.kont}>
                  <FontAwesome name={'angle-up'} />
                </Button>
                <UncontrolledTooltip target={'kotolna-primar-nema'}>Pridať primárny rozvod</UncontrolledTooltip>
              </span>
            }
          </CardBody>
        }

        {/* Prehľad kotolní */}
        { zobrazenie === 1 &&
          <CardFooter>
            <Button color={'success'} onClick={this.handlePridatKotolnu} disabled={creating || !opravnenia.kont}>
              {!creating && <FontAwesome name={'plus-circle'}/>}
              {creating && <FontAwesome name={'spinner'} spin/>}
              {' '}
              Pridať kotolňu
            </Button>

            {loading &&
            <div>
              <br/>
              <FontAwesome name={'spinner'} spin/>{' '}
              <span className="text-muted">Načítavanie kotolní...</span>
            </div>}

            {creating &&
            <div>
              <br/>
              <FontAwesome name={'spinner'} spin/>{' '}
              <span className="text-muted">Vytváranie novej kotolne...</span>
            </div>}

            {deleting &&
            <div>
              <br/>
              <FontAwesome name={'spinner'} spin/>{' '}
              <span className="text-muted">Odstraňovanie kotolne...</span>
            </div>}
          </CardFooter>
        }
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  opravnenia: state.opravnenia,
  nastroje: state.nastroje,
  hlavny: state.hlavny,
  kotolne: state.kotolne
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createKotolna: (e) => dispatch(createKotolnaRequest(e)),
  updateKotolna: (e) => dispatch(updateKotolnaRequest(e)),
  updateParameter: (e, table, hlavny) => dispatch(updateParameterKotolneRequest(e, table, hlavny)),
  deleteKotolna: (e) => dispatch(deleteKotolnaRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpravaKotolni)