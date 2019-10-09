import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, Table, Alert } from 'reactstrap'
import ReactLoading from 'react-loading'
import {dateYearMonth, dateShort, dateSmall, dateTime} from '../../../utils/format'
import FontAwesome from 'react-fontawesome'
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek2'
import Routing from '../../../Components/Routing'
import DropzoneComponent from 'react-dropzone-component'
import Notifications from 'react-notification-system-redux'
import {
    fetchVyberPolozkyRequest,
    loadMainEntryRequest,
    processUploadedFileRequest
} from '../actions'

import DatePicker from 'react-datepicker'
import moment from 'moment'
moment.locale('sk')

const RIEConfig = {
  classEditing: 'form-control',
  classInvalid: 'is-invalid',
  classLoading: 'form-control riek-loading'
}

const componentConfig = {
    iconFiletypes: ['.xml'],
    showFiletypeIcon: false,
    postUrl: $('#uploader-excel').data('endpoint'),
    maxFilesize: 1000 // MB
}

const config = {
    'dpp': {
        config: componentConfig,
        djsConfig: {
            autoProcessQueue: true,
            dictDefaultMessage: `Excel súbor obsahujúci <u>denný plán prevádzky</u> presuňte sem.
                Karta musí mať názov <u>DPP</u>.`,
            dictInvalidFileType: 'Nemôžete nahrať súbory tohto typu. Vyžaduje sa excel súbor uložený vo formáte xml 2003 (.xml)',
            acceptedFiles: '.xml',
        },
        eventHandlers: {
            //addedfile: (file) => console.log(file)
        }
    }
}

class Vstupy extends React.Component {
    constructor (props) {
      super (props)

      this.state = {
          //datumPlanu: moment().format('DD.MM.YYYY')
          datumPlanu: moment()
      }

      this.handleChangeDatumPlanu = this.handleChangeDatumPlanu.bind(this)

      this.handleAddedFile = this.handleAddedFile.bind(this)
      this.handleUpload = this.handleUpload.bind(this)
    }

    handleChangeDatumPlanu(e) {
      this.setState({
        datumPlanu: e
      })
    }

    handleAddedFile(file) {
        //console.log(file)
    }

    handleUpload(file) {
      const original = file.name
      const filename = JSON.parse(file.xhr.response).filename

      const datum = this.state.datumPlanu.format('YYYY-MM-DD')

      const data = { datum, original, filename }

      // console.dir(file)

      // this.props.fetchSpravaRequest()
      // this.props.loadMainEntryRequest(id)

      //console.log(data)

      this.props.processUploadedFileRequest(data)

      this.context.store.dispatch(
        Notifications.info({
          title: 'Nahrávanie dokončené',
          message: 'Súbor bol odoslaný na server',
          autoDismiss: 4
        })
      )
    }

    render() {

      const uploading = this.props.hlavny.uploading

        return (
            <Card>
              { uploading &&
                <ReactLoading type="spin" color="#51565d" delay={0} className="react-loader" />
              }
              <CardHeader className="text-white bg-secondary">Nahrať nový denný plán prevádzky</CardHeader>
              <CardBody>
                <Table>
                  <tbody>
                  <tr>
                    <th>Dátum</th>
                    <td>
                      <DatePicker
                        id="upload-denny-plan-datum"
                        onChange={this.handleChangeDatumPlanu}
                        selected={this.state.datumPlanu}
                        className="form-control datum"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Súbor</th>
                    <td>
                      <DropzoneComponent
                        {...config.dpp}
                        eventHandlers={{
                          addedfile: (file) => this.handleAddedFile(file),
                          complete: (file) => this.handleUpload(file)
                        }}
                      />
                    </td>
                  </tr>
                  </tbody>
                </Table>

                <Alert color={'primary'}>
                  <FontAwesome name={'info-circle'} />&nbsp;
                  Upload súboru sa spustí hneď po zvolení súboru.
                  Ak k vybranému dátumu už existujú údaje, budú automaticky prepísané.
                </Alert>

              </CardBody>
            </Card>
        )
    }
}

Vstupy.contextTypes = {
    store: PropTypes.object
}

const mapStateToProps = ( state, ownProps ) => ({
  hlavny: state.hlavny
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  fetchVyberPolozkyRequest: () => dispatch(fetchVyberPolozkyRequest()),
  loadMainEntryRequest: () => dispatch(loadMainEntryRequest()),
  processUploadedFileRequest: () => dispatch(processUploadedFileRequest())
})

export default connect(
    mapStateToProps,
    {
        fetchVyberPolozkyRequest: fetchVyberPolozkyRequest,
        loadMainEntryRequest,
        processUploadedFileRequest
    }
)(Vstupy)
