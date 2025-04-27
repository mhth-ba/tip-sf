import React from 'react'
import { connect } from 'react-redux'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { deletePrilohaRequest } from '../actions'
import Routing from '../../../Components/Routing'

class FileAttachments extends React.Component {
  handleDelete = prilohaId => {
    if (window.confirm('Naozaj chcete vymazať túto prílohu?')) {
      this.props.deletePriloha(prilohaId)
    }
  }

  renderAttachment = (priloha, readOnly, compact) => {
    const downloadUrl = Routing.generate('ddh_ost_prilohy_download', { id: priloha.id })

    if (compact) {
      return (
        <div key={priloha.id} className="d-flex align-items-center mb-1">
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="text-truncate mr-2">
            {priloha.original}
          </a>
          {!readOnly && (
            <Button
              color="danger"
              size="sm"
              className="ml-auto"
              onClick={() => this.handleDelete(priloha.id)}
              style={{ padding: '0.125rem 0.25rem', fontSize: '0.75rem' }}
            >
              X
            </Button>
          )}
        </div>
      )
    }

    return (
      <ListGroupItem key={priloha.id} className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            {priloha.original}
          </a>
          <small className="text-muted">
            Nahral: {priloha.nahral} ({new Date(priloha.datum * 1000).toLocaleString()})
          </small>
        </div>
        {!readOnly && (
          <Button color="danger" size="sm" onClick={() => this.handleDelete(priloha.id)}>
            Odstrániť
          </Button>
        )}
      </ListGroupItem>
    )
  }

  render() {
    const { entryId, source = 'prevadzka', prilohy, readOnly, compact } = this.props

    // Use a composite key that includes both entryId and source
    const compositeKey = `${entryId}-${source}`
    const entryPrilohy = prilohy.byEntryId[compositeKey] || []

    if (entryPrilohy.length === 0) {
      return compact ? null : <div className="text-muted mb-3">Žiadne prílohy</div>
    }

    if (compact) {
      return <div>{entryPrilohy.map(priloha => this.renderAttachment(priloha, readOnly, compact))}</div>
    }

    return (
      <ListGroup className="mb-3">{entryPrilohy.map(priloha => this.renderAttachment(priloha, readOnly))}</ListGroup>
    )
  }
}

const mapStateToProps = state => ({
  prilohy: state.prilohy
})

const mapDispatchToProps = dispatch => ({
  deletePriloha: id => dispatch(deletePrilohaRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FileAttachments)
