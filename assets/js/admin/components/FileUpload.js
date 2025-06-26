import React from 'react'
import DropzoneComponent from 'react-dropzone-component'
import Notifications from 'react-notification-system-redux'
import { connect } from 'react-redux'
import Api from '../../services/Api'
import Routing from '../../Components/Routing'

class FileUpload extends React.Component {
  constructor(props) {
    super(props)

    this.handleUpload = this.handleUpload.bind(this)
    this.handleAddedFile = this.handleAddedFile.bind(this)
  }

  handleAddedFile(file) {
    console.log('File added:', file.name)
  }

  handleUpload(file) {
    if (file.status === 'success') {
      const response = JSON.parse(file.xhr.response)
      const original = file.name
      const filename = response.filename

      // Make API call to admin upload endpoint
      const data = { original, subor: filename }

      Api.post(Routing.generate('admin_upload'), data)
        .then(response => {
          // Show success notification
          this.props.dispatch(
            Notifications.success({
              title: 'Upload Successful',
              message: `File "${original}" has been uploaded successfully`,
              position: 'tr',
              autoDismiss: 5
            })
          )
        })
        .catch(error => {
          console.error('Upload error:', error)
          this.props.dispatch(
            Notifications.error({
              title: 'Upload Failed',
              message: 'There was an error processing your upload',
              position: 'tr',
              autoDismiss: 5
            })
          )
        })
    }
  }

  render() {
    const componentConfig = {
      iconFiletypes: ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt', '.zip', '.7z'],
      showFiletypeIcon: true,
      postUrl: document.getElementById('uploader').dataset.endpoint,
      maxFilesize: 5000 // MB
    }

    const djsConfig = {
      autoProcessQueue: true,
      dictDefaultMessage: 'Drop files here or click to upload',
      dictInvalidFileType: 'This file type is not supported.',
      acceptedFiles: '.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip,.7z',
      maxFiles: 10,
      addRemoveLinks: true
    }

    const eventHandlers = {
      addedfile: this.handleAddedFile,
      complete: this.handleUpload
    }

    return (
      <div className="mb-4">
        <h3>File Upload</h3>
        <p className="text-muted mb-3">
          Upload files to the admin area. Supported formats: PDF, DOC, DOCX, XLS, XLSX, TXT, ZIP, 7Z
        </p>
        <DropzoneComponent config={componentConfig} djsConfig={djsConfig} eventHandlers={eventHandlers} />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(FileUpload)
