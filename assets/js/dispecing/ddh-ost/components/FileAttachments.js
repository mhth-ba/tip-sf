import React from 'react'
import { connect } from 'react-redux'
import { Table, Button, Alert } from 'reactstrap'
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
    const { entryId, fetchPrilohy } = this.props
    if (entryId && entryId !== prevProps.entryId) {
      fetchPrilohy(entryId)
    }
  }

  handleDelete = prilohaId => {
    if (window.confirm('Naozaj chcete odstrániť túto prílohu?')) {
      this.props.deletePriloha(prilohaId)
    }
  }

  renderPrilohy() {
    const { prilohy, readOnly } = this.props

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
    prilohy: state.prilohy.byEntryId[entryId] || []
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPrilohy: entryId => dispatch(fetchPrilohyRequest(entryId)),
  deletePriloha: id => dispatch(deletePrilohaRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FileAttachments)
