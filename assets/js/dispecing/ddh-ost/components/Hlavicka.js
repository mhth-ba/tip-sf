import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import debounce from '../../../utils/debounce'
import { updateOSTHlavnyFormField, updateOSTHlavnyRequest } from '../actions'

class Hlavicka extends React.Component {
  constructor(props) {
    super(props)

    // Initialize localHlavny with props.hlavny if available + optimistic udpates
    this.state = {
      localHlavny: props.hlavny || {}
    }

    // Create debounced update functions for each field type
    this.debouncedUpdateField = {}

    // Fields that need debouncing
    const textFields = ['teplota_letisko', 'teplota_tpv', 'teplota_tpz', 'doplnovanie_tpv', 'doplnovanie_tpz']

    // Create a debounced update function for each text field
    textFields.forEach(field => {
      this.debouncedUpdateField[field] = debounce(value => {
        if (this.props.hlavny && this.props.hlavny.id) {
          const updateData = {
            id: this.props.hlavny.id,
            [field]: value
          }

          // Define rollback callback
          const rollbackCallback = () => {
            this.setState(prevState => ({
              localHlavny: {
                ...prevState.localHlavny,
                [field]: this.props.hlavny[field]
              }
            }))
          }

          this.props.updateOSTHlavnyRequest(updateData, rollbackCallback)
        }
      }, 2000)
    })

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    // Initialize local state with props if available
    if (this.props.hlavny) {
      this.setState({
        localHlavny: { ...this.props.hlavny }
      })
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // When hlavny changes or is loaded initially
    if (prevProps.hlavny !== this.props.hlavny && this.props.hlavny) {
      this.setState({
        localHlavny: { ...this.props.hlavny }
      })
    }
  }

  handleChange(e) {
    const { name, value, type } = e.target

    // Update local state for immediate visual feedback
    this.setState(prevState => ({
      localHlavny: {
        ...prevState.localHlavny,
        [name]: value
      }
    }))

    // Update the field in Redux store immediately for visual feedback
    this.props.updateOSTHlavnyFormField(name, value)

    // For select fields, update immediately
    if (type === 'select-one') {
      if (this.props.hlavny && this.props.hlavny.id) {
        const updateData = {
          id: this.props.hlavny.id,
          [name]: value
        }

        // Define rollback callback
        const rollbackCallback = () => {
          this.setState(prevState => ({
            localHlavny: {
              ...prevState.localHlavny,
              [name]: this.props.hlavny[name]
            }
          }))
        }

        this.props.updateOSTHlavnyRequest(updateData, rollbackCallback)
      }
    }
    // For text inputs, use debounced update
    else if (type === 'text' || type === 'textarea') {
      if (this.debouncedUpdateField[name]) {
        this.debouncedUpdateField[name](value)
      }
    }
  }

  renderOption(option) {
    if (typeof option === 'string') {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      )
    } else if (option && typeof option === 'object' && option.meno) {
      return (
        <option key={option.id || option.meno} value={option.meno}>
          {option.meno}
        </option>
      )
    }
    return null
  }

  render() {
    const hlavny = this.props.hlavny || {}
    const { loading } = hlavny
    const { dispeceri = [], poruchovka = [] } = this.props

    // Get values from local state first, falling back to props, then to empty values
    const {
      dispecer_1 = '',
      dispecer_2 = '',
      poruchovka_1 = '',
      poruchovka_2 = '',
      teplota_letisko = '',
      teplota_tpv = '',
      teplota_tpz = '',
      doplnovanie_tpv = '',
      doplnovanie_tpz = ''
    } = this.state.localHlavny || this.props.hlavny || {}

    // Check if data is still loading
    const dispeceriLoading = this.props.dispeceriLoading
    const poruchovkaLoading = this.props.poruchovkaLoading

    return (
      <Row>
        <Col>
          <Card style={{ width: '480px' }}>
            <CardHeader className="bg-primary text-white">Hlavička</CardHeader>
            <CardBody>
              <Form>
                {/* Row 1: Dispečer */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="dispecerDenna">Dispečer - denná zmena</Label>
                      <Input
                        type="select"
                        name="dispecer_1"
                        id="dispecerDenna"
                        value={dispecer_1 || ''}
                        onChange={this.handleChange}
                        disabled={dispeceriLoading}
                      >
                        <option value="">-- Vyberte --</option>
                        {dispeceri.map(dispecer => this.renderOption(dispecer))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="dispecerNocna">Dispečer - nočná zmena</Label>
                      <Input
                        type="select"
                        name="dispecer_2"
                        id="dispecerNocna"
                        value={dispecer_2 || ''}
                        onChange={this.handleChange}
                        disabled={dispeceriLoading}
                      >
                        <option value="">-- Vyberte --</option>
                        {dispeceri.map(dispecer => this.renderOption(dispecer))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                {/* Row 2: Poruchová služba */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="poruchovaDenna">Poruchová služba - denná zmena</Label>
                      <Input
                        type="select"
                        name="poruchovka_1"
                        id="poruchovaDenna"
                        value={poruchovka_1 || ''}
                        onChange={this.handleChange}
                        disabled={poruchovkaLoading}
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="- Žiadna osoba -">- Žiadna osoba -</option>
                        {poruchovka.map(osoba => this.renderOption(osoba))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="poruchovaNocna">Poruchová služba - nočná zmena</Label>
                      <Input
                        type="select"
                        name="poruchovka_2"
                        id="poruchovaNocna"
                        value={poruchovka_2 || ''}
                        onChange={this.handleChange}
                        disabled={poruchovkaLoading}
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="- Žiadna osoba -">- Žiadna osoba -</option>
                        {poruchovka.map(osoba => this.renderOption(osoba))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                {/* Row 3: Teploty */}
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <Label for="teplota_letisko">Priemerná denná teplota - letisko</Label>
                      <Input
                        type="text"
                        name="teplota_letisko"
                        id="teplota_letisko"
                        value={teplota_letisko || ''}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label for="teplota_tpv">Priemerná denná teplota - TpV</Label>
                      <Input
                        type="text"
                        name="teplota_tpv"
                        id="teplota_tpv"
                        value={teplota_tpv || ''}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label for="teplota_tpz">Priemerná denná teplota - TpZ</Label>
                      <Input
                        type="text"
                        name="teplota_tpz"
                        id="teplota_tpz"
                        value={teplota_tpz || ''}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                {/* Row 4: Doplňovanie */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="doplnovanie_tpv">Doplňnovanie TpV</Label>
                      <Input
                        type="text"
                        name="doplnovanie_tpv"
                        id="doplnovanie_tpv"
                        value={doplnovanie_tpv || ''}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="doplnovanie_tpz">Doplňovanie TpZ</Label>
                      <Input
                        type="text"
                        name="doplnovanie_tpz"
                        id="doplnovanie_tpz"
                        value={doplnovanie_tpz || ''}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  dispeceri: state.dispeceri ? state.dispeceri.entries : [],
  poruchovka: state.poruchovka ? state.poruchovka.entries : [],
  dispeceriLoading: state.dispeceri ? state.dispeceri.loading : false,
  poruchovkaLoading: state.poruchovka ? state.poruchovka.loading : false
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateOSTHlavnyFormField: (field, value) => {
    dispatch(updateOSTHlavnyFormField(field, value))
  },
  updateOSTHlavnyRequest: (data, rollbackCallback) => {
    dispatch(updateOSTHlavnyRequest(data, rollbackCallback))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hlavicka)
