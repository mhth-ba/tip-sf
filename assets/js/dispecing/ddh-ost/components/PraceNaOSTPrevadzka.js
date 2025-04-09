import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import { createPraceNaOSTPrevadzkaRequest, updatePraceNaOSTPrevadzkaFormField } from '../actions'

class PraceNaOSTPrevadzka extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Holds newly created (local) entries.
      forms: [],
      ostFilter: ''
    }

    this.handleAddForm = this.handleAddForm.bind(this)
    this.handleRemoveForm = this.handleRemoveForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOstFilterChange = this.handleOstFilterChange.bind(this)
  }

  // When "Pridať" is clicked, create a new record in the database.
  handleAddForm() {
    const { hlavny, createPraceNaOSTPrevadzkaRequest } = this.props
    if (!hlavny || !hlavny.id) {
      alert('Hlavný záznam nie je načítaný.')
      return
    }
    // Dispatch the create action; the saga should create the record in DB
    // and then add it into Redux (persisted entries).
    createPraceNaOSTPrevadzkaRequest(hlavny.id)
    // Also add a placeholder in local state if you want immediate feedback.
    this.setState(prevState => ({
      forms: [
        ...prevState.forms,
        {
          ost: '',
          datum_cas_zaciatok: '',
          datum_cas_ukoncenia: '',
          vplyv_na_dodavku: '',
          vyvod: '',
          poznamka: '',
          stav: '',
          vybavuje: '',
          priloha: null,
          // Mark this as local new entry.
          newEntry: true
        }
      ]
    }))
  }

  handleRemoveForm(index) {
    this.setState(prevState => {
      const newForms = [...prevState.forms]
      newForms.splice(index, 1)
      return { forms: newForms }
    })
  }

  // Handle change for an entry based on whether it is persisted or a new entry.
  handleChange(index, e) {
    const { name, value, files } = e.target
    const persistedCount = this.props.prace && this.props.prace.entries ? this.props.prace.entries.length : 0

    if (index < persistedCount) {
      // This is a persisted entry from Redux.
      this.props.updatePraceNaOSTPrevadzkaFormField(index, name, value)
    } else {
      // This is a local new entry.
      // We adjust the index relative to the local array:
      const localIndex = index - persistedCount
      this.setState(prevState => {
        const newForms = [...prevState.forms]
        if (name === 'priloha' && files) {
          newForms[localIndex][name] = files[0]
        } else {
          newForms[localIndex][name] = value
        }
        return { forms: newForms }
      })
    }
  }

  handleOstFilterChange(e) {
    this.setState({ ostFilter: e.target.value })
  }

  render() {
    const allOstOptions = [
      { value: 'ost750', label: 'OST 750' },
      { value: 'ost770', label: 'OST 770' },
      { value: 'ost850', label: 'OST 850' }
    ]
    const filteredOstOptions = allOstOptions.filter(opt =>
      opt.label.toLowerCase().includes(this.state.ostFilter.toLowerCase())
    )

    // Get persisted entries from Redux.
    const persistedEntries = this.props.prace && this.props.prace.entries ? this.props.prace.entries : []
    // Merge persisted entries with newly created local forms.
    const combinedEntries = [...persistedEntries, ...this.state.forms]

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Práce na OST - prevádzka</CardHeader>
        <CardBody>
          <Button color="success" onClick={this.handleAddForm}>
            Pridať
          </Button>

          <FormGroup className="mt-2">
            <Label for="ostFilter">Filter OST</Label>
            <Input
              type="text"
              id="ostFilter"
              value={this.state.ostFilter}
              onChange={this.handleOstFilterChange}
              placeholder="Zadajte filter pre OST..."
            />
          </FormGroup>

          {combinedEntries.map((entry, i) => (
            <Form key={i} className="mt-4">
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for={`ost-${i}`}>Objekt OST/PK</Label>
                    <Input
                      type="select"
                      id={`ost-${i}`}
                      name="ost"
                      value={entry.ost || ''}
                      onChange={e => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      {filteredOstOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Začiatok prác</Label>
                    <Input
                      type="datetime-local"
                      name="datum_cas_zaciatok"
                      value={entry.datum_cas_zaciatok || ''}
                      onChange={e => this.handleChange(i, e)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Ukončenie prác</Label>
                    <Input
                      type="datetime-local"
                      name="datum_cas_ukoncenia"
                      value={entry.datum_cas_ukoncenia || ''}
                      onChange={e => this.handleChange(i, e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for={`vplyv_na_dodavku-${i}`}>Vplyv na dodávku</Label>
                    <Input
                      type="select"
                      id={`vplyv_na_dodavku-${i}`}
                      name="vplyv_na_dodavku"
                      value={entry.vplyv_na_dodavku || ''}
                      onChange={e => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      <option value="Prerušenie">Prerušenie</option>
                      <option value="Obmedzenie">Obmedzenie</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for={`vyvod-${i}`}>Vývod</Label>
                    <Input
                      type="select"
                      id={`vyvod-${i}`}
                      name="vyvod"
                      value={entry.vyvod || ''}
                      onChange={e => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      <option value="TV">TV</option>
                      <option value="ÚK">ÚK</option>
                      <option value="VZT">VZT</option>
                      <option value="TV + ÚK">TV + ÚK</option>
                      <option value="TV + VZT">TV + VZT</option>
                      <option value="ÚK + VZT">ÚK + VZT</option>
                      <option value="TV + ÚK + VZT">TV + ÚK + VZT</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <Label for={`poznamka-${i}`}>Poznámka</Label>
                    <Input
                      type="textarea"
                      id={`poznamka-${i}`}
                      name="poznamka"
                      value={entry.poznamka || ''}
                      onChange={e => this.handleChange(i, e)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for={`stav-${i}`}>Stav</Label>
                    <Input
                      type="select"
                      id={`stav-${i}`}
                      name="stav"
                      value={entry.stav || ''}
                      onChange={e => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      <option value="V riečení">V riešení</option>
                      <option value="Provizórne vyriešené">Provizórne vyriešené</option>
                      <option value="Vyriešené">Vyriešené</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for={`vybavuje-${i}`}>Vybavuje</Label>
                    <Input
                      type="select"
                      id={`vybavuje-${i}`}
                      name="vybavuje"
                      value={entry.vybavuje || ''}
                      onChange={e => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      <option value="Dispečing">Dispečing</option>
                      <option value="RIS">RIS</option>
                      <option value="Obvod východ">Obvod východ</option>
                      <option value="Obvod západ">Obvod západ</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for={`priloha-${i}`}>Príloha</Label>
                    <Input type="file" id={`priloha-${i}`} name="priloha" onChange={e => this.handleChange(i, e)} />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="danger" onClick={() => this.handleRemoveForm(i)} className="mb-3">
                Odstrániť
              </Button>
              <hr />
            </Form>
          ))}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  prace: state.pracenaostprevadzka
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPraceNaOSTPrevadzkaRequest: hlavnyId => dispatch(createPraceNaOSTPrevadzkaRequest(hlavnyId)),
  updatePraceNaOSTPrevadzkaFormField: (hlavnyId, formField) =>
    dispatch(updatePraceNaOSTPrevadzkaFormField(hlavnyId, formField))
})

export default connect(mapStateToProps, mapDispatchToProps)(PraceNaOSTPrevadzka)
