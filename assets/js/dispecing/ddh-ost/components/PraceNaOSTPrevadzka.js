import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Row, Col, FormText } from 'reactstrap'
import moment from 'moment' // for date/time parsing/formatting
import {
  createPraceNaOSTPrevadzkaRequest,
  updatePraceNaOSTPrevadzkaRequest,
  fetchPraceNaOSTPrevadzkaRequest
} from '../actions'

class PraceNaOSTPrevadzka extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ostFilter: ''
    }
    this.handleOstFilterChange = this.handleOstFilterChange.bind(this)
    this.handleAddForm = this.handleAddForm.bind(this)
  }

  handleAddForm() {
    const { hlavny, createPraceNaOSTPrevadzkaRequest, fetchPraceNaOSTPrevadzka } = this.props
    if (!hlavny || !hlavny.id) {
      alert('Hlavný záznam nie je načítaný.')
      return
    }
    // Dispatch create action
    createPraceNaOSTPrevadzkaRequest(hlavny.id)
      .then(() => {
        // Re-fetch all entries after creation, so the new entry appears
        fetchPraceNaOSTPrevadzka(hlavny.id)
      })
      .catch(err => {
        console.error(err)
      })
  }

  handleOstFilterChange(e) {
    this.setState({ ostFilter: e.target.value })
  }

  // Add this method to your component class
  handleChangeField = (entry, fieldName, value) => {
    // Handle dates specially
    if (fieldName === 'datum_cas_zaciatok' || fieldName === 'datum_cas_ukoncenie') {
      this.handleDateChange(entry, fieldName, value)
      return
    }

    // For non-date fields, only send the ID and the changed field
    // This matches the expected format for logging
    this.props.updatePraceNaOSTPrevadzkaRequest({
      id: entry.id,
      [fieldName]: value
    })
  }

  // Update your handleDateChange method to follow the same pattern
  handleDateChange = (entry, fieldName, newValue) => {
    // If user clears the field, send null
    if (!newValue) {
      this.props.updatePraceNaOSTPrevadzkaRequest({
        id: entry.id,
        [fieldName]: null
      })
      return
    }

    try {
      // Create a date object from the input
      const dateObj = new Date(newValue)

      // Use timestamp for consistency across all date fields
      const timestamp = Math.floor(dateObj.getTime() / 1000) // Convert to seconds

      // Only send the ID and the changed field
      this.props.updatePraceNaOSTPrevadzkaRequest({
        id: entry.id,
        [fieldName]: timestamp
      })
    } catch (err) {
      console.error(`Error converting date: ${newValue}`, err)
    }
  }

  // Convert a numeric or string date from Redux to "YYYY-MM-DDTHH:mm" for <input type="datetime-local">
  getDisplayDate = value => {
    if (!value) return ''
    // If value is numeric (a Unix timestamp), convert it.
    if (typeof value === 'number') {
      return moment.unix(value).format('YYYY-MM-DDTHH:mm')
    }
    // Otherwise, assume it's a string that can be parsed.
    // Try to parse known formats and output in the proper format.
    return moment(value, ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DDTHH:mm']).format('YYYY-MM-DDTHH:mm')
  }

  renderEntry(entry) {
    // For the OST filter
    const allOstOptions = [
      { value: 'OST 750', label: 'OST 750' },
      { value: 'OST 770', label: 'OST 770' },
      { value: 'OST 850', label: 'OST 850' }
    ]
    const { ostFilter } = this.state
    const filteredOstOptions = allOstOptions.filter(opt => opt.label.toLowerCase().includes(ostFilter.toLowerCase()))

    // Convert the DB/stored date/time into the format needed by <input type="datetime-local">
    const startDateDisplay = this.getDisplayDate(entry.datum_cas_zaciatok)
    const endDateDisplay = this.getDisplayDate(entry.datum_cas_ukoncenie)

    return (
      <Form key={entry.id} className="mt-4">
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Objekt OST/PK</Label>
              <Input
                type="select"
                value={entry.ost || ''}
                onChange={e => this.handleChangeField(entry, 'ost', e.target.value)}
              >
                <option value="">-- Vyberte --</option>
                {filteredOstOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Input>
              <FormText color="muted">Filtrujte názvy OST podľa poľa "Filter OST" hore.</FormText>
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
                value={startDateDisplay}
                onChange={e => this.handleChangeField(entry, 'datum_cas_zaciatok', e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Ukončenie prác</Label>
              <Input
                type="datetime-local"
                name="datum_cas_koniec"
                value={endDateDisplay}
                onChange={e => this.handleChangeField(entry, 'datum_cas_ukoncenie', e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Vplyv na dodávku</Label>
              <Input
                type="select"
                value={entry.vplyv_na_dodavku || ''}
                onChange={e => this.handleChangeField(entry, 'vplyv_na_dodavku', e.target.value)}
              >
                <option value="">-- Vyberte --</option>
                <option value="Prerušenie">Prerušenie</option>
                <option value="Obmedzenie">Obmedzenie</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Vývod</Label>
              <Input
                type="select"
                value={entry.vyvod || ''}
                onChange={e => this.handleChangeField(entry, 'vyvod', e.target.value)}
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
              <Label>Poznámka</Label>
              <Input
                type="textarea"
                value={entry.poznamka || ''}
                onChange={e => this.handleChangeField(entry, 'poznamka', e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Stav</Label>
              <Input
                type="select"
                value={entry.stav || ''}
                onChange={e => this.handleChangeField(entry, 'stav', e.target.value)}
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
              <Label>Vybavuje</Label>
              <Input
                type="select"
                value={entry.vybavuje || ''}
                onChange={e => this.handleChangeField(entry, 'vybavuje', e.target.value)}
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
        <hr />
      </Form>
    )
  }

  render() {
    const { ostFilter } = this.state
    const persistedEntries = this.props.prace && this.props.prace.entries ? this.props.prace.entries : []

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
              value={ostFilter}
              onChange={this.handleOstFilterChange}
              placeholder="Zadajte filter pre OST..."
            />
          </FormGroup>

          {persistedEntries.map(entry => this.renderEntry(entry))}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  prace: state.pracenaostprevadzka
})

const mapDispatchToProps = dispatch => ({
  createPraceNaOSTPrevadzkaRequest: hlavnyId => dispatch(createPraceNaOSTPrevadzkaRequest(hlavnyId)),
  updatePraceNaOSTPrevadzkaRequest: data => dispatch(updatePraceNaOSTPrevadzkaRequest(data)),
  fetchPraceNaOSTPrevadzka: hlavnyId => dispatch(fetchPraceNaOSTPrevadzkaRequest(hlavnyId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PraceNaOSTPrevadzka)
