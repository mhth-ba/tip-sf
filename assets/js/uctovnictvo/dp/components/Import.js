import React from 'react'
import PropTypes from 'prop-types'
import DropzoneComponent from 'react-dropzone-component'
import Notifications from 'react-notification-system-redux'
import {connect} from 'react-redux'
import { Collapse, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import { processUploadedFileRequest } from '../actions'

const componentConfig = {
  iconFiletypes: ['.xls'],
  showFiletypeIcon: true,
  postUrl: $('#uploader').data('endpoint')
}

const config = {
  alr: {
    config: componentConfig,
    djsConfig: {
      autoProcessQueue: true,
      dictDefaultMessage: `Excel súbor obsahujúci <u>predbežné hlásenie</u> presuňte sem.<br/>
                Súbor musí byť vygenerovaný zo SAPu cez transakciu <b>S_ALR_87012357</b>
                a exportovaný ako tabuľková kalkulácia.`,
      dictInvalidFileType: 'Nemôžete nahrať súbory tohto typu. Vyžaduje sa koncovka excelu (.xls)',
      acceptedFiles: '.xls'
    },
    eventHandlers: {
      //addedfile: (file) => console.log(file)
    }
  },
  ddokl: {
    config: componentConfig,
    djsConfig: {
      autoProcessQueue: true,
      dictDefaultMessage: `Excel súbor obsahujúci <u>daňové doklady</u> presuňte sem.<br/>
                Súbor musí byť vygenerovaný zo SAPu cez transakciu <b>ZFC_DDOKL</b>
                a exportovaný ako tabuľková kalkulácia.`,
      dictInvalidFileType: 'Nemôžete nahrať súbory tohto typu. Vyžaduje sa excel (.xls)',
      acceptedFiles: '.xls'
    },
    eventHandlers: {
      //addedfile: (file) => console.log(file)
    }
  }
}

class Import extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      collapse: false
    }

    this.toggle = this.toggle.bind(this)

    this.handleAddedFile = this.handleAddedFile.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse })
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

    this.props.upload(data)

    this.context.store.dispatch(
      Notifications.info({
        title: 'Nahrávanie dokončené',
        message: 'Súbor bol odoslaný na server'
      })
    )
  }

  render() {

    return (
      <div>
        <DropzoneComponent
          {...config.alr}
          /*djsConfig={{...config.dt.djsConfig, params: {
              hlavny: id,
              upload: 1
          }}}*/
          // 1 = predbezne hlasenie (S_ALR)
          eventHandlers={{
            addedfile: (file) => this.handleAddedFile(file),
            complete: (file, uploadtype) => this.handleUpload(file, 1)
          }}
        />
        <br/>
        <DropzoneComponent
          {...config.ddokl}
          // 2 = danove doklady (ZFC_DDOKL)
          eventHandlers={{
            addedfile: (file) => this.handleAddedFile(file),
            complete: (file, uploadtype) => this.handleUpload(file, 2)
          }}
        />
      </div>
    )
  }
}

Import.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  upload: (e) => dispatch(processUploadedFileRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Import)