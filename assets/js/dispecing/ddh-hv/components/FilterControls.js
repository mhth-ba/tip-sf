import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap'
import { setFilter, clearFilters, fetchFilteredDataRequest } from '../actions'
import { diacriticFilter, diacriticMatch } from '../../../utils/diacritic'

class FilterControls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zdrojSearchFilter: '',
      zaradienieSearchFilter: '',
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
    this.setState({
      zdrojSearchFilter: '',
      zaradienieSearchFilter: '',
      validationError: ''
    })
  }

  render() {
    const { filters, isLoading } = this.props
    const { zdrojSearchFilter, zaradienieSearchFilter, validationError } = this.state

    // Source options for HV
    const zdrojOptions = [
      { value: 'TpV', label: 'TpV - Tepláreň Východ' },
      { value: 'TpZ', label: 'TpZ - Tepláreň Západ' },
      { value: 'VhJ', label: 'VhJ - Výhrevňa Juh' },
      { value: 'Slovnaft', label: 'Slovnaft' },
      { value: 'CW', label: 'CW' },
      { value: 'OLO', label: 'OLO' },
      { value: 'PPC', label: 'PPC' }
    ]

    // Equipment/device options (common equipment names)
    const zaradienieOptions = [
      'Kotol 1',
      'Kotol 2',
      'Kotol 3',
      'Kotol 4',
      'Turbína 1',
      'Turbína 2',
      'Čerpadlo 1',
      'Čerpadlo 2',
      'Čerpadlo 3',
      'Výmenník 1',
      'Výmenník 2',
      'Kompresor',
      'Chladič',
      'Kondenzátor'
    ]

    return (
      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <i className="fa fa-filter mr-2" />
            Filtrovanie záznamov DDH-HV
          </h5>
        </CardHeader>
        <CardBody>
          {/* Date Range Section */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Dátum od</Label>
                <Input
                  type="date"
                  value={filters.dateFrom || ''}
                  onChange={e => this.handleInputChange('dateFrom', e.target.value)}
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
                  onChange={e => this.handleInputChange('dateTo', e.target.value)}
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

          <hr />

          {/* Zdroje Section */}
          <h6>
            <i className="fa fa-cogs mr-2" />
            Filtre pre sekciu "Zdroje"
          </h6>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Zdroj</Label>
                <Input
                  type="select"
                  multiple
                  size="5"
                  value={filters.zdroj}
                  onChange={e => {
                    const values = Array.from(e.target.selectedOptions, option => option.value)
                    this.handleInputChange('zdroj', values)
                  }}
                >
                  {zdrojOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Input>
                <small className="form-text text-muted">
                  Ctrl + klik pre viacnásobný výber. Ak nevyberiete žiadny zdroj, budú hľadané všetky.
                </small>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Zariadenie</Label>
                <Input
                  type="text"
                  placeholder="Názov zariadenia..."
                  value={filters.zariadenie}
                  onChange={e => this.handleInputChange('zariadenie', e.target.value)}
                />
                <small className="form-text text-muted">
                  Filtrovanie podľa názvu zariadenia (napríklad: K6, TG3, MG1, HK4, Chladič)
                </small>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Stav</Label>
                <Input
                  type="select"
                  multiple
                  size="4"
                  value={filters.stav}
                  onChange={e => {
                    const values = Array.from(e.target.selectedOptions, option => option.value)
                    this.handleInputChange('stav', values)
                  }}
                  style={{ height: 'auto' }}
                >
                  <option value="" disabled style={{ fontStyle: 'italic', color: '#999' }}>
                    ------
                  </option>
                  <option value="V prevádzke">V prevádzke</option>
                  <option value="V odstávke">V odstávke</option>
                  <option value="V poruche">V poruche</option>
                  <option value="V teplej zálohe">V teplej zálohe</option>
                  <option value="V teplej zálohe s povolením prác">V teplej zálohe s povolením prác</option>
                  <option value="Údržba">Údržba</option>
                </Input>
                <small className="form-text text-muted">Ctrl + klik pre viacnásobný výber</small>
              </FormGroup>
            </Col>
          </Row>

          <hr />

          {/* Horúcovod Section */}
          <h6>
            <i className="fa fa-thermometer-half mr-2" />
            Filtre pre sekciu "Horúcovod"
          </h6>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Horúcovod</Label>
                <Input
                  type="select"
                  multiple
                  size="3"
                  value={filters.horucovod}
                  onChange={e => {
                    const values = Array.from(e.target.selectedOptions, option => option.value)
                    this.handleInputChange('horucovod', values)
                  }}
                  style={{ height: 'auto' }}
                >
                  <option value="" disabled style={{ fontStyle: 'italic', color: '#999' }}>
                    ------
                  </option>
                  <option value="Východ">Východ</option>
                  <option value="Západ">Západ</option>
                </Input>
                <small className="form-text text-muted">Ctrl + klik pre viacnásobný výber</small>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Poznámka</Label>
                <Input
                  type="text"
                  placeholder="Hľadať v poznámkach..."
                  value={filters.poznamka}
                  onChange={e => this.handleInputChange('poznamka', e.target.value)}
                />
                <small className="form-text text-muted">Filtrovanie podľa obsahu poznámky</small>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Button color="primary" onClick={this.handleApplyFilters} disabled={isLoading}>
                <i className="fa fa-search mr-2" />
                Použiť filtre
              </Button>{' '}
              <Button color="secondary" onClick={this.handleClearFilters} disabled={isLoading}>
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
  isLoading: state.filterView.results.loading
})

const mapDispatchToProps = {
  setFilter,
  clearFilters,
  fetchFilteredData: fetchFilteredDataRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterControls)
