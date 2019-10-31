import React from 'react'

import { Row, Col, Card, Alert } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import PropTypes from 'prop-types'
import DropzoneComponent from 'react-dropzone-component'
import Notifications from 'react-notification-system-redux'
import { connect } from 'react-redux'
import {
  fetchVyberPolozkyRequest,
  loadMainEntryRequest,
  processUploadedFileRequest
} from '../actions'

const componentConfig = {
  iconFiletypes: ['.xml'],
  showFiletypeIcon: true,
  postUrl: $('#uploader-excel').data('endpoint'),
  maxFilesize: 1000 // MB
}

const config = {
  'dt': {
    config: componentConfig,
    djsConfig: {
      autoProcessQueue: true,
      dictDefaultMessage: `Excel súbor obsahujúci <u>dodané teplo</u> presuňte sem.<br/>
                Karta musí mať názov <u>DT</u>.<br/>
                Súbor musí spĺňať nižšie popísanú štruktúru:<br/><br/>
                Stĺpce: ID | Názov | SCZT_V_kWh | SCZT_V_kW | SCZT_Z_kWh | SCZT_Z_kW<br/>
                Stĺpec <u>ID</u> označuje zdroje nasledovne:
                1 - TpV | 2 - VhJ | 3 - TpZ | 4 - Kotolne | 5 - PPC | 6 - Slovnaft | 7 - Cogen West |
                11 - Zdroj | 12 - Primár | 13 - OST | 14 - Sekundár`,
      dictInvalidFileType: 'Nemôžete nahrať súbory tohto typu. Vyžaduje sa excel súbor uložený vo formáte xml 2003 (.xml)',
      acceptedFiles: '.xml'
    },
    eventHandlers: {
      //addedfile: (file) => console.log(file)
    }
  },
  'sn': {
    config: componentConfig,
    djsConfig: {
      autoProcessQueue: true,
      dictDefaultMessage: `Excel súbor obsahujúci <u>spoločné náklady na teplo a elektrinu</u> presuňte sem.<br/>
                Karta musí mať názov <u>SN</u>.<br/>
                Súbor musí spĺňať nižšie popísanú štruktúru:<br/><br/>
                Stĺpce: ID | Názov kalkulačnej položky<br/>
                TpV V plnej výške | TpV Kľúčované | TpZ V plnej výške | TpZ Kľúčované | VhJ | PK | Primár | OST | Sekundár | Rěžijné náklady`,
      dictInvalidFileType: 'Nemôžete nahrať súbory tohto typu. Vyžaduje sa excel súbor uložený vo formáte xml 2003 (.xml)',
      acceptedFiles: '.xml'
    },
    eventHandlers: {
      //addedfile: (file) => console.log(file)
    }
  },
  'do': {
    config: componentConfig,
    djsConfig: {
      autoProcessQueue: true,
      dictDefaultMessage: `Excel súbor obsahujúci <u>daňové odpisy</u> presuňte sem.<br/>
                      Karta musí mať názov <u>ODPISY</u>.<br/>
                      Súbor musí spĺňať nižšie popísanú štruktúru:<br/><br/>
                      Stĺpce: ID | Názov kalkulačnej položky<br/>
                      TpV V plnej výške | TpV Kľúčované | TpZ V plnej výške | TpZ Kľúčované | VhJ | PK | Primár | OST | Sekundár | Rěžijné náklady`,
      dictInvalidFileType: 'Nemôžete nahrať súbory tohto typu. Vyžaduje sa excel súbor uložený vo formáte xml 2003 (.xml)',
      acceptedFiles: '.xml'
    },
    eventHandlers: {
      //addedfile: (file) => console.log(file)
    }
  }
}

class Vstupy extends React.Component {
  constructor (props) {
    super (props)

    this.handleAddedFile = this.handleAddedFile.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  handleAddedFile(file) {
    //console.log(file)
  }

  handleUpload(file, uploadtype) {

    const id = this.props.hlavny.id
    const original = file.name
    const filename = JSON.parse(file.xhr.response).filename

    const data = { id, uploadtype, original, filename }

    // console.dir(file)

    // this.props.fetchSpravaRequest()
    // this.props.loadMainEntryRequest(id)

    this.props.processUploadedFileRequest(data)

    this.context.store.dispatch(
      Notifications.info({
        title: 'Nahrávanie dokončené',
        message: 'Súbor bol odoslaný na server'
      })
    )
  }

  render() {

    const stav = this.props.hlavny.stav.id

    return (
      <div>
        <Row>
          <Col xl={4}>
            { stav === 2 ?
              <DropzoneComponent
                {...config.dt}
                /*djsConfig={{...config.dt.djsConfig, params: {
                    hlavny: id,
                    upload: 2
                }}}*/
                // 2 = skutocna dodavka tepla
                eventHandlers={{
                  addedfile: (file) => this.handleAddedFile(file),
                  complete: (file, uploadtype) => this.handleUpload(file, 2)
                }}
              />
              :
              <Alert color={'primary'}>
                <FontAwesome name={'info-circle'} />&nbsp;
                V dokončenom (zamknutom) stave nie je možné importovať súbor s údajmi.
              </Alert>
            }
            <br/>
            <Card>
              <img src="../build/static/sct_dodane_teplo_priklad.png"
                   className="card-img rounded"
                   alt="Príklad požadovanej štruktúry"
                   title="Príklad požadovanej štruktúry"
              />
            </Card>
          </Col>
          <Col xl={4}>
            { stav === 2 ?
              <DropzoneComponent
                {...config.sn}
                // 3 = spolocne naklady na teplo a elektrinu
                eventHandlers={{
                  addedfile: (file) => this.handleAddedFile(file),
                  complete: (file, uploadtype) => this.handleUpload(file, 3)
                }}
              />
              :
              <Alert color={'primary'}>
                <FontAwesome name={'info-circle'} />&nbsp;
                V dokončenom (zamknutom) stave nie je možné importovať súbor s údajmi.
              </Alert>
            }
            <br/>
            <Card>
              <img src="../build/static/sct_spolocne_naklady_priklad.png"
                   className="card-img rounded"
                   alt="Príklad požadovanej štruktúry"
                   title="Príklad požadovanej štruktúry"
              />
            </Card>
          </Col>
          <Col xl={4}>
            { stav === 2 ?
              <DropzoneComponent
                {...config.do}
                // 4 = danove odpisy
                eventHandlers={{
                  addedfile: (file) => this.handleAddedFile(file),
                  complete: (file, uploadtype) => this.handleUpload(file, 4)
                }}
              />
              :
              <Alert color={'primary'}>
                <FontAwesome name={'info-circle'} />&nbsp;
                V dokončenom (zamknutom) stave nie je možné importovať súbor s údajmi.
              </Alert>
            }
            <br/>
            <Card>
              <img src="../build/static/sct_danove_odpisy_priklad.png"
                   className="card-img rounded"
                   alt="Príklad požadovanej štruktúry"
                   title="Príklad požadovanej štruktúry"
              />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

Vstupy.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = ( state, ownProps ) => ({
  hlavny: state.hlavny
})

export default connect(
  mapStateToProps,
  {
    fetchVyberPolozkyRequest: fetchVyberPolozkyRequest,
    loadMainEntryRequest,
    processUploadedFileRequest
  }
)(Vstupy)
