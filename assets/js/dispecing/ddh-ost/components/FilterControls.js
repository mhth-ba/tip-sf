import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap'
import { setFilter, clearFilters, fetchFilteredDataRequest } from '../actions'
import { diacriticFilter, diacriticMatch } from '../../../utils/diacritic'

// Revert to HTML selects for now to avoid import issues

class FilterControls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ostSearchFilter: '',
      validationError: ''
    }
  }

  handleInputChange = (field, value) => {
    this.props.setFilter(field, value)
  }


  handleApplyFilters = () => {
    const { dateFrom, dateTo } = this.props.filters
    
    if (!dateFrom && !dateTo) {
      this.setState({ validationError: 'Prosím vyberte dátumový rozsah' })
      return
    } else if (!dateFrom) {
      this.setState({ validationError: 'dateFrom' })
      return
    } else if (!dateTo) {
      this.setState({ validationError: 'dateTo' })
      return
    }
    
    // Clear any previous error and proceed
    this.setState({ validationError: '' })
    this.props.fetchFilteredData(this.props.filters)
  }

  handleClearFilters = () => {
    this.props.clearFilters()
    this.setState({ ostSearchFilter: '', validationError: '' })
  }

  render() {
    const { filters, ost, isLoading } = this.props
    const { ostSearchFilter, validationError } = this.state

    return (
    <Card>
      <CardHeader>
        <h5 className="mb-0">
          <i className="fa fa-filter mr-2" />
          Filtrovanie záznamov
        </h5>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>Dátum od</Label>
              <Input
                type="date"
                value={filters.dateFrom || ''}
                onChange={(e) => this.handleInputChange('dateFrom', e.target.value)}
                placeholder="YYYY-MM-DD"
              />
              {validationError === 'dateFrom' && (
                <div className="mt-1">
                  <small className="text-danger">
                    <i className="fa fa-exclamation-triangle mr-1" />
                    Prosím vyberte dátum od
                  </small>
                </div>
              )}
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Dátum do</Label>
              <Input
                type="date"
                value={filters.dateTo || ''}
                onChange={(e) => this.handleInputChange('dateTo', e.target.value)}
                placeholder="YYYY-MM-DD"
                min={filters.dateFrom || undefined}
              />
              {validationError === 'dateTo' && (
                <div className="mt-1">
                  <small className="text-danger">
                    <i className="fa fa-exclamation-triangle mr-1" />
                    Prosím vyberte dátum do
                  </small>
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <FormGroup>
              <Label>OST</Label>
              <Input
                type="text"
                placeholder="Filtrovať OST..."
                value={ostSearchFilter}
                onChange={(e) => this.setState({ ostSearchFilter: e.target.value })}
                className="mb-2"
              />
              <Input
                type="select"
                multiple
                size="8"
                value={filters.ost}
                onChange={(e) => {
                  const values = Array.from(e.target.selectedOptions, option => option.value)
                  this.handleInputChange('ost', values)
                }}
              >
                {ost
                  .filter(o => {
                    if (!ostSearchFilter) return true
                    const searchTerm = `${o.cislo} ${o.adresa}`
                    return diacriticMatch(searchTerm, ostSearchFilter)
                  })
                  .map(o => (
                    <option key={`${o.cislo}-${o.adresa}`} value={`${o.cislo} ${o.adresa}`}>
                      {o.cislo} {o.adresa}
                    </option>
                  ))
                }
              </Input>
              <small className="form-text text-muted">
                Ak nevyberiete žiadnu OST, budú hľadané všetky. Použite Ctrl + klik pre viacnásobný výber.
              </small>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>Vplyv na dodávku</Label>
              <Input
                type="select"
                multiple
                size="3"
                value={filters.vplyvNaDodavku}
                onChange={(e) => {
                  const values = Array.from(e.target.selectedOptions, option => option.value)
                  this.handleInputChange('vplyvNaDodavku', values)
                }}
                style={{ height: 'auto' }}
              >
                <option value="" disabled style={{ fontStyle: 'italic', color: '#999' }}>------</option>
                <option value="Prerušenie">Prerušenie</option>
                <option value="Obmedzenie">Obmedzenie</option>
              </Input>
              <small className="form-text text-muted">
                Ctrl + klik pre viacnásobný výber
              </small>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Vývod</Label>
              <Input
                type="select"
                multiple
                size="5"
                value={filters.vyvod}
                onChange={(e) => {
                  const values = Array.from(e.target.selectedOptions, option => option.value)
                  this.handleInputChange('vyvod', values)
                }}
                style={{ height: 'auto' }}
              >
                <option value="" disabled style={{ fontStyle: 'italic', color: '#999' }}>------</option>
                <option value="TV">TV</option>
                <option value="ÚK">ÚK</option>
                <option value="VZT">VZT</option>
                <option value="Chladenie">Chladenie</option>
                <option value="TV + ÚK">TV + ÚK</option>
                <option value="TV + VZT">TV + VZT</option>
                <option value="TV + Chladenie">TV + Chladenie</option>
                <option value="ÚK + VZT">ÚK + VZT</option>
                <option value="TV + ÚK + VZT">TV + ÚK + VZT</option>
              </Input>
              <small className="form-text text-muted">
                Ctrl + klik pre viacnásobný výber
              </small>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Stav</Label>
              <Input
                type="select"
                multiple
                size="4"
                value={filters.stav}
                onChange={(e) => {
                  const values = Array.from(e.target.selectedOptions, option => option.value)
                  this.handleInputChange('stav', values)
                }}
                style={{ height: 'auto' }}
              >
                <option value="" disabled style={{ fontStyle: 'italic', color: '#999' }}>------</option>
                <option value="V riešení">V riešení</option>
                <option value="Provizórne vyriešené">Provizórne vyriešené</option>
                <option value="Vyriešené">Vyriešené</option>
              </Input>
              <small className="form-text text-muted">
                Ctrl + klik pre viacnásobný výber
              </small>
            </FormGroup>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Button
              color="primary"
              onClick={this.handleApplyFilters}
              disabled={isLoading}
            >
              <i className="fa fa-search mr-2" />
              Použiť filtre
            </Button>
            {' '}
            <Button
              color="secondary"
              onClick={this.handleClearFilters}
              disabled={isLoading}
            >
              <i className="fa fa-times mr-2" />
              Vymazať filtre
            </Button>
            {validationError === 'Prosím vyberte dátumový rozsah' && (
              <div className="mt-2">
                <small className="text-danger">
                  <i className="fa fa-exclamation-triangle mr-1" />
                  {validationError}
                </small>
              </div>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
    )
  }
}


const mapStateToProps = state => ({
  filters: state.filterView.filters,
  ost: (state.ost && state.ost.entries) || [],
  isLoading: state.filterView.results.loading
})

const mapDispatchToProps = {
  setFilter,
  clearFilters,
  fetchFilteredData: fetchFilteredDataRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterControls)