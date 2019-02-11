import React from 'react'
import PropTypes from 'prop-types'
import DropzoneComponent from 'react-dropzone-component'
import Notifications from 'react-notification-system-redux'
import { Card, CardBody } from 'reactstrap'
import {connect} from 'react-redux'

import Routing from '../../../Components/Routing'
import { processUploadedFileRequest } from '../actions'

const componentConfig = {
  iconFiletypes: ['.xls', '.doc', '.pdf', '.txt'],
  showFiletypeIcon: true,
  postUrl: $('#uploader').data('endpoint')
}

const config = {
  prilohy: {
    config: componentConfig,
    djsConfig: {
      autoProcessQueue: true,
      dictDefaultMessage: `Môžete nahrať akýkoľvek dokument, excel alebo pdf súbor.`,
      dictInvalidFileType: 'Nemôžete nahrať súbory tohto typu. Vyžaduje sa koncovka wordu, excelu alebo pdf',
      acceptedFiles: '.xls,.xlsx,.doc,.docx,.pdf,.txt'
    },
    eventHandlers: {
      //addedfile: (file) => console.log(file)
    }
  }
}

class Prilohy extends React.Component {
  constructor(props) {
    super(props)

    this.handleAddedFile = this.handleAddedFile.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.getExtension = this.getExtension.bind(this)
    this.getFilename = this.getFilename.bind(this)
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

  getExtension(filename) {

    const path = '../build/static/'
    const exp = filename.substr(filename.length - 4)

    if (exp.search("doc") !== -1) {
      return path + '/word.svg'
    } else if (exp.search("xls") !== -1) {
      return path + '/excel.svg'
    } else if (exp.search("pdf") !== -1) {
      return path + '/pdf.svg'
    } else return path + '/file.svg'
  }

  getFilename(filename) {

    const length = filename.length
    const max = 9

    return length > max ?
      filename.substr(0, max) + '...'
      :
      filename
  }

  render() {

    const hlavny = this.props.hlavny
    const prilohy = hlavny.upload.prilohy

    const path = Routing.generate('dp_download')

    return (
      <div>
        <Card>
          <CardBody className="d-flex">
            { (prilohy === null || prilohy.length === 0)&&
              <span className="text-muted">Zatiaľ tu nie sú žiadne súbory ...</span>
            }

            { prilohy !== null && prilohy.map(
              (item, ix) => (
                <div key={ix} style={{ width: '80px', textAlign: 'center' }} title={item.original}>
                  <a href={`${path}/${item.id}`}>
                    <img src={this.getExtension(item.subor)} width={'40px'} />
                    <br/>
                    <span style={{ wordWrap: 'break-word' }}>
                      {this.getFilename(item.original)}
                    </span>
                  </a>
                </div>
              )
            ) }
          </CardBody>
        </Card>
        <br/>
        <DropzoneComponent
          {...config.prilohy}
          eventHandlers={{
            addedfile: (file) => this.handleAddedFile(file),
            complete: (file, uploadtype) => this.handleUpload(file, 3)
          }}
        />
      </div>
    )
  }
}

Prilohy.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  upload: (e) => dispatch(processUploadedFileRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prilohy)