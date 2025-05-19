import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Button, Row, Col } from 'reactstrap'
import { createPoznamkaRequest, fetchPoznamkyRequest } from '../actions'
import debounce from '../../../utils/debounce'
import { updatePoznamkaRequest, deletePoznamkaRequest } from '../actions'

class Poznamky extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Store local entry values for optimistic updates
      localEntries: {},
      // Store debounced update functions for each entry by ID
      debouncedUpdates: {}
    }
  }

  componentDidMount() {
    // Fetch all poznamky when component mounts
    this.props.fetchPoznamky()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // When entries are loaded or updated from the server, update our local state
    if (prevProps.poznamky.entries !== this.props.poznamky.entries) {
      const localEntries = {}
      this.props.poznamky.entries.forEach(entry => {
        localEntries[entry.id] = { ...entry }
      })
      this.setState({ localEntries })
    }
  }

  handleAddForm = () => {
    this.props.createPoznamka()
  }

  // Handle the delete button click
  handleDeleteEntry = entryId => {
    if (window.confirm('Naozaj chcete odstrániť túto položku?')) {
      // First remove from local state for immediate UI update
      this.setState(prevState => {
        const newLocalEntries = { ...prevState.localEntries }
        delete newLocalEntries[entryId]
        return { localEntries: newLocalEntries }
      })

      // Then send the delete request to the server
      this.props.deletePoznamka(entryId)
    }
  }

  // Get or create a debounced update function for a specific entry
  getDebouncedUpdate(entryId, fieldName) {
    const key = `${entryId}-${fieldName}`

    if (!this.state.debouncedUpdates[key]) {
      const debouncedFn = debounce(value => {
        // Save the previous value before sending the update
        const entry = this.props.poznamky.entries.find(e => e.id === entryId)
        const previousValue = entry ? entry[fieldName] : undefined

        // Create rollback function for sagas
        const rollbackCallback = () => {
          this.setState(prevState => ({
            localEntries: {
              ...prevState.localEntries,
              [entryId]: {
                ...prevState.localEntries[entryId],
                [fieldName]: previousValue
              }
            }
          }))
        }

        // Send the update request
        this.props.updatePoznamka(
          {
            id: entryId,
            [fieldName]: value
          },
          rollbackCallback
        )
      }, 2000)

      // Store the debounced function
      this.setState(prevState => ({
        debouncedUpdates: {
          ...prevState.debouncedUpdates,
          [key]: debouncedFn
        }
      }))

      return debouncedFn
    }

    return this.state.debouncedUpdates[key]
  }

  // Handle field changes
  handleChangeField = (entry, fieldName, value) => {
    // First, update local state for immediate visual feedback
    this.setState(prevState => ({
      localEntries: {
        ...prevState.localEntries,
        [entry.id]: {
          ...prevState.localEntries[entry.id],
          [fieldName]: value
        }
      }
    }))

    // For all text fields, use debounced updates
    const debouncedUpdate = this.getDebouncedUpdate(entry.id, fieldName)
    debouncedUpdate(value)
  }

  renderEntryForm(entry) {
    // Get the local entry data for optimistic updates
    const localEntry = this.state.localEntries[entry.id] || entry

    return (
      <div style={{ padding: '10px' }}>
        <div className="form-group mb-2">
          <label>Predmet</label>
          <input
            type="text"
            className="form-control"
            value={localEntry.predmet || ''}
            onChange={e => this.handleChangeField(entry, 'predmet', e.target.value)}
            placeholder="Zadajte predmet..."
          />
        </div>

        <div className="form-group mb-3">
          <label>Poznámka</label>
          <textarea
            className="form-control"
            value={localEntry.poznamka || ''}
            onChange={e => this.handleChangeField(entry, 'poznamka', e.target.value)}
            rows="3"
          />
        </div>

        <div className="text-center">
          <Button color="danger" size="sm" onClick={() => this.handleDeleteEntry(entry.id)}>
            Odstrániť
          </Button>
        </div>
      </div>
    )
  }

  renderReadOnlyEntry(entry) {
    return (
      <div style={{ padding: '10px' }}>
        <div className="mb-2">
          <strong>Predmet:</strong>
          <div>{entry.predmet || '-'}</div>
        </div>
        <div className="mb-2">
          <strong>Poznámka:</strong>
          <div style={{ whiteSpace: 'pre-line' }}>{entry.poznamka || '-'}</div>
        </div>
      </div>
    )
  }

  render() {
    const { opravnenia, poznamky } = this.props
    const canEdit = opravnenia && opravnenia.editor
    const validEntries = poznamky && poznamky.entries ? poznamky.entries.filter(entry => entry.valid !== false) : []

    return (
      <Card className="mb-4">
        <CardHeader className="bg-primary text-white">Poznámky</CardHeader>
        <CardBody>
          {canEdit && (
            <div className="mb-3">
              <Button color="success" onClick={this.handleAddForm}>
                Pridať
              </Button>
            </div>
          )}

          <div
            style={{
              overflowX: 'auto',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: '15px'
            }}
            className="horizontal-scroll-container"
          >
            {validEntries.length === 0 ? (
              <div className="text-center p-3" style={{ width: '100%' }}>
                <p className="text-muted mb-0">Žiadne záznamy na zobrazenie.</p>
              </div>
            ) : (
              validEntries.map(entry => (
                <Card
                  key={entry.id}
                  style={{ minWidth: '300px', maxWidth: '350px', flex: '0 0 auto', marginBottom: 0 }}
                >
                  <CardBody style={{ padding: '0.75rem' }}>
                    {canEdit ? this.renderEntryForm(entry) : this.renderReadOnlyEntry(entry)}
                  </CardBody>
                </Card>
              ))
            )}
          </div>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  opravnenia: state.opravnenia,
  poznamky: state.poznamky
})

const mapDispatchToProps = dispatch => ({
  fetchPoznamky: () => dispatch(fetchPoznamkyRequest()),
  createPoznamka: () => dispatch(createPoznamkaRequest()),
  updatePoznamka: (data, rollbackCallback) => dispatch(updatePoznamkaRequest(data, rollbackCallback)),
  deletePoznamka: id => dispatch(deletePoznamkaRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Poznamky)
