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
  'odt': {
    config: componentConfig,
    djsConfig: {
      autoProcessQueue: true,
      dictDefaultMessage: `Excel súbor obsahujúci <u>očakávanú dodávku tepla</u> presuňte sem.<br/>
                Karta musí mať názov <u>ODT</u>.<br/>
                Súbor musí spĺňať nižšie popísanú štruktúru:<br/><br/>
                Stĺpce: ID | Názov | Plan 1-12 (kWh a kW) | Plan 1-x (kWh aj kW) | Skutocnost 1-x (kWh aj kW)<br/>
                Stĺpec <u>ID</u> označuje zdroje nasledovne:
                15 - SCZT Východ | 16 - SCZT Západ `,
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
      <Row>
        <Col xl={4}>
          { stav === 2 ?
            <DropzoneComponent
              {...config.odt}
              // 5 = ocakavana dodavka tepla
              eventHandlers={{
                addedfile: (file) => this.handleAddedFile(file),
                complete: (file, uploadtype) => this.handleUpload(file, 5)
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
            {/*<img src="../build/static/vct_ocakavana_dodavka_priklad.png"
                 className="card-img rounded"
                 alt="Príklad požadovanej štruktúry"
                 title="Príklad požadovanej štruktúry"
            />*/}
          </Card>
        </Col>

        <Col xl={4}>
          { stav === 2 ?
            <DropzoneComponent
              {...config.sn}
              // 6 = skutocne spolocne naklady na teplo a elektrinu
              eventHandlers={{
                addedfile: (file) => this.handleAddedFile(file),
                complete: (file, uploadtype) => this.handleUpload(file, 6)
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
            {/*<img src="../build/static/sct_spolocne_naklady_priklad.png"
                 className="card-img rounded"
                 alt="Príklad požadovanej štruktúry"
                 title="Príklad požadovanej štruktúry"
            />*/}
          </Card>
        </Col>

        <Col xl={4}></Col>
      </Row>
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
