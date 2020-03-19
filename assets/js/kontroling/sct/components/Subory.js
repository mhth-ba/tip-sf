import React from 'react'
import {connect} from 'react-redux'

import { Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import { dateTimeSmall, dateDayname } from '../../../utils/format'

import PropTypes from 'prop-types'
import DropzoneComponent from 'react-dropzone-component'
import Notifications from 'react-notification-system-redux'

import Swal from 'sweetalert2'
import withReactComponent from 'sweetalert2-react-content'

import Routing from '../../../Components/Routing'
import { processUploadedFileRequest, deleteSuborRequest } from '../actions'

const componentConfig = {
  iconFiletypes: ['.doc', '.xls', '.pdf', '.txt', '.xml', '.zip'],
  showFiletypeIcon: true,
  postUrl: $('#uploader-excel').data('endpoint'),
  maxFilesize: 1000 // MB
}

const config = {
  'os': {
    config: componentConfig,
    djsConfig: {
      autoProcessQueue: true,
      dictDefaultMessage: `Sem presuňte akýkoľvek súbor, ktorý chcete mať k dispozícií
                           v úložisku k tomuto hlavnému záznamu.`,
      dictInvalidFileType: 'Tento typ súborov nie je podporovaný.',
      acceptedFiles: '.doc,.docx,.xls,.xlsx,.pdf,.txt,.xml,.zip'
    },
    eventHandlers: {
      // addedfile: (file) => console.log(file)
    }
  }
}

class Subory extends React.Component {
  constructor(props) {
    super(props)

    this.handleAddedFile = this.handleAddedFile.bind(this)
    this.handleUpload = this.handleUpload.bind(this)

    //this.handleDeleteFile = this.handleDeleteFile.bind(this)
  }

  handleAddedFile(file) {
    // console.log(file)
  }

  handleUpload(file, uploadtype) {

    const id = this.props.hlavny.id
    const original = file.name
    const filename = JSON.parse(file.xhr.response).filename

    const data = { id, uploadtype, original, filename }

    this.props.processFile(data)

    this.context.store.dispatch(
      Notifications.info({
        title: 'Nahrávanie dokončené',
        message: 'Súbor bol odoslaný na server'
      })
    )
  }

  handleDeleteFile(file, e) {

    e.preventDefault()

    const MySwal = withReactComponent(Swal)

    MySwal.fire({
      title: `<p>Odstrániť súbor ${file.original} ?</p>`,
      text: `Skutočne si prajete odstrániť tento súbor?`,
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Zrušiť'
    }).then( (result) => {
      if (result.value) {
        const data = {
          id: file.id,
          name: file.original
        }

        this.props.deleteFile(data)
      }
    })
  }

  static getExtension(filename) {

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

  static getFilename(filename) {

    const length = filename.length
    const max = 7

    return length > max ?
      filename.substr(0, max) + '...'
      :
      filename
  }

  render() {

    const edit = this.props.nastroje.highlightEditable

    const subory = this.props.subory.files
    const historia = this.props.historia

    const path = Routing.generate('sct_download')

    const historia_data = historia.data
      .filter(x => x.table === 'SCT_Upload'
        && (x.value === 'CREATE ENTRY' || x.value === 'MARK DELETED ENTRY'))

    return (
      <Row>
        <Col lg={7}>
          <Row>
            <Col>
              <Card>
                <CardHeader className="bg-primary text-white">Súbory, prílohy, podklady k výpočtom</CardHeader>
                <CardBody className="d-flex flex-wrap">
                  { (subory.filter(x => x.platne === true).length === 0) &&
                    <span className="text-muted">Zatiaľ tu nie sú žiadne súbory ...</span>
                  }

                  { subory
                    .filter(x => x.platne === true)
                    .map(
                      (item, ix) => (
                        <div key={ix} style={{ width: '80px', textAlign: 'center' }}
                             title={item.original + ' | ' + dateTimeSmall(item.datum)}
                        >
                          <a href={`${path}/${item.id}`}>
                            <img src={Subory.getExtension(item.subor)} width={'40px'} />
                            <br/>
                            <span style={{ wordWrap: 'break-word' }}>
                              {Subory.getFilename(item.original)}
                            </span>
                          </a>
                          { edit &&
                            <a href='#' role={'button'} className="pull-right text-dark"
                               onClick={this.handleDeleteFile.bind(this, item)}
                            >
                              <FontAwesome name={'trash-o'} />
                            </a>
                          }
                        </div>
                    )) }
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <DropzoneComponent {...config.os}
                eventHandlers={{
                  addedfile: (file) => this.handleAddedFile(file),
                  complete: (file, uploadtype) => this.handleUpload(file, 1)
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={5}>
          <Card>
            <CardHeader className="bg-secondary text-white">História uploadov súborov</CardHeader>
            <CardBody style={{ overflowY: 'auto', maxHeight: '350px' }}>
              <p>Prehľad aktivity (upload a vymazanie) používateľov so súbormi v úložisku k tomuto hlavnému záznamu</p>

              <Table size={'sm'} hover>
                <thead>
                <tr>
                  <th>Dátum</th>
                  <th>Používateľ</th>
                  <th>Akcia</th>
                  <th className="text-right">Súbor</th>
                </tr>
                </thead>
                <tbody>
                { historia_data.map((item, ix) => (
                  <tr key={ix}>
                    <td>
                      <span title={ dateDayname(item.datum) }>{ dateTimeSmall(item.datum) }</span>
                    </td>
                    <td>{ item.fullname }</td>
                    <td>
                      { item.value === 'CREATE ENTRY' && <span><FontAwesome name={'upload'}/> Upload</span> }
                      { item.value === 'MARK DELETED ENTRY' && <span><FontAwesome name={'trash'}/> Vymazanie</span> }
                    </td>
                    <td className="text-right">
                      { subory.find(x => x.id === item.row && x.platne) !== undefined &&
                        <a href={`${path}/${item.row}`}>{ subory.find(x => x.id === item.row).original }</a>
                      }
                      { subory.find(x => x.id === item.row && !x.platne) !== undefined &&
                        <span className="text-muted">{ subory.find(x => x.id === item.row).original }</span>
                      }
                    </td>
                  </tr>
                )) }
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

Subory.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  subory: state.subory,
  historia: state.historia
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processFile: (e) => dispatch(processUploadedFileRequest(e)),
  deleteFile: (e) => dispatch(deleteSuborRequest(e))
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subory)