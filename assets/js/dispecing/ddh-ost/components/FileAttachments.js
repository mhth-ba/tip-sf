import React from 'react'
import { connect } from 'react-redux'
import { Table, Button, Alert, Badge } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import moment from 'moment'
import { fetchPrilohyRequest, deletePrilohaRequest } from '../actions'
import Routing from '../../../Components/Routing'

class FileAttachments extends React.Component {
  componentDidMount() {
    const { entryId, fetchPrilohy } = this.props
    if (entryId) {
      fetchPrilohy(entryId)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Check if the entry ID has changed
    if (this.props.entryId !== prevProps.entryId) {
      this.props.fetchPrilohy(this.props.entryId)
    }

    // Add this check for when the main data is reloaded (e.g., when changing dates)
    if (this.props.hlavny && prevProps.hlavny && this.props.hlavny.id !== prevProps.hlavny.id) {
      this.props.fetchPrilohy(this.props.entryId)
    }
  }

  handleDelete = prilohaId => {
    if (window.confirm('Naozaj chcete odstrániť túto prílohu?')) {
      this.props.deletePriloha(prilohaId)
    }
  }

  // New compact view for table cells
  renderCompactView() {
    const { prilohy } = this.props

    if (!prilohy || prilohy.length === 0) {
      return <span className="text-muted">-</span>
    }

    return (
      <div>
        {prilohy.map(priloha => (
          <div key={priloha.id} className="mb-1 text-nowrap">
            <a
              href={Routing.generate('ddh_ost_prilohy_download', { id: priloha.id })}
              target="_blank"
              title={`Nahral: ${priloha.nahral} (${moment.unix(priloha.datum).format('DD.MM.YYYY HH:mm')})`}
            >
              <FontAwesome name="file" className="mr-1" />
              {priloha.original}
            </a>
          </div>
        ))}
        {/*<Badge color="info" pill className="mt-1" title="Počet príloh">
          {prilohy.length}
        </Badge>*/}
      </div>
    )
  }

  renderPrilohy() {
    const { prilohy, readOnly, compact } = this.props

    // If compact view is requested (for table cells)
    if (compact) {
      return this.renderCompactView()
    }

    if (!prilohy || prilohy.length === 0) {
      return (
        <Alert color="light" className="text-center">
          Žiadne prílohy
        </Alert>
      )
    }

    return (
      <Table size="sm" bordered striped>
        <thead>
          <tr>
            <th>Názov súboru</th>
            <th>Nahral</th>
            <th>Dátum</th>
            {!readOnly && <th>Akcie</th>}
          </tr>
        </thead>
        <tbody>
          {prilohy.map(priloha => (
            <tr key={priloha.id}>
              <td>
                <a href={Routing.generate('ddh_ost_prilohy_download', { id: priloha.id })} target="_blank">
                  {priloha.original}
                </a>
              </td>
              <td>{priloha.nahral}</td>
              <td>{moment.unix(priloha.datum).format('DD.MM.YYYY HH:mm')}</td>
              {!readOnly && (
                <td>
                  <Button color="danger" size="sm" onClick={() => this.handleDelete(priloha.id)}>
                    <FontAwesome name="trash" />
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }

  render() {
    return this.renderPrilohy()
  }
}

const mapStateToProps = (state, ownProps) => {
  const entryId = ownProps.entryId
  return {
    prilohy: state.prilohy.byEntryId[entryId] || [],
    hlavny: state.hlavny
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPrilohy: entryId => dispatch(fetchPrilohyRequest(entryId)),
  deletePriloha: id => dispatch(deletePrilohaRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FileAttachments)
