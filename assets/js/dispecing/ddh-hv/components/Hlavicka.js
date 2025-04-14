import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Row, Col, Table } from 'reactstrap'
import debounce from '../../../utils/debounce'
import { updateHVHlavnyFormField, updateHVHlavnyRequest } from '../actions'

class Hlavicka extends React.Component {
  constructor(props) {
    super(props)

    // Initialize state with values from props
    this.state = {
      localHlavny: props.hlavny || {}
    }

    // Create debounced update functions
    this.debouncedUpdateField = {}

    // Fields that need debouncing (not needed for this component as we're only using select inputs)

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
    this.props.updateHVHlavnyFormField(name, value)

    // For select fields, update immediately
    if (type === 'select-one') {
      if (this.props.hlavny && this.props.hlavny.id) {
        const updateData = {
          id: this.props.hlavny.id,
          [name]: value
        }

        // If no ID yet but we have ost_hlavny_id, include it for new record creation
        if (!this.props.hlavny.id && this.props.hlavny.ost_hlavny_id) {
          updateData.ost_hlavny_id = this.props.hlavny.ost_hlavny_id
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

        this.props.updateHVHlavnyRequest(updateData, rollbackCallback)
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
    const { dispeceri = [] } = this.props

    // Get values from local state first, falling back to props, then to empty values
    const { dispecer_1 = '', dispecer_2 = '', ost_data = {} } = this.state.localHlavny || this.props.hlavny || {}

    // Extract the read-only values from OST_Hlavny
    const {
      poruchovka_1 = '',
      poruchovka_2 = '',
      teplota_letisko = '',
      teplota_tpv = '',
      teplota_tpz = '',
      doplnovanie_tpv = '',
      doplnovanie_tpz = ''
    } = ost_data || {}

    // Check if data is still loading
    const dispeceriLoading = this.props.dispeceriLoading

    return (
      <Row>
        <Col>
          <Card style={{ width: '480px' }}>
            <CardHeader className="bg-primary text-white">Hlavička</CardHeader>
            <CardBody>
              <Form>
                {/* Row 1: Dispečer - editable fields */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="dispecer_1">Dispečer - denná zmena</Label>
                      <Input
                        type="select"
                        name="dispecer_1"
                        id="dispecer_1"
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
                      <Label for="dispecer_2">Dispečer - nočná zmena</Label>
                      <Input
                        type="select"
                        name="dispecer_2"
                        id="dispecer_2"
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

                {/* Row 2: Read-only fields from OST_Hlavny - Poruchová služba */}
                {/*<Row>
                  <Col md="12">
                    <h5 className="mt-3 mb-3">Údaje z OST (len na čítanie)</h5>
                  </Col>
                </Row>*/}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="poruchovka_1">Poruchová služba - denná zmena</Label>
                      <Input
                        type="text"
                        name="poruchovka_1"
                        id="poruchovka_1"
                        value={poruchovka_1 || ''}
                        disabled={true}
                        readOnly
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="poruchovka_2">Poruchová služba - nočná zmena</Label>
                      <Input
                        type="text"
                        name="poruchovka_2"
                        id="poruchovka_2"
                        value={poruchovka_2 || ''}
                        disabled={true}
                        readOnly
                      />
                    </FormGroup>
                  </Col>
                </Row>

                {/* Row 3: Read-only fields from OST_Hlavny - Teploty */}
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <Label for="teplota_letisko">Priemerná denná teplota - letisko</Label>
                      <Input
                        type="text"
                        name="teplota_letisko"
                        id="teplota_letisko"
                        value={teplota_letisko || ''}
                        disabled={true}
                        readOnly
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
                        disabled={true}
                        readOnly
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
                        disabled={true}
                        readOnly
                      />
                    </FormGroup>
                  </Col>
                </Row>

                {/* Row 4: Read-only fields from OST_Hlavny - Doplňovanie */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="doplnovanie_tpv">Doplňovanie TpV</Label>
                      <Input
                        type="text"
                        name="doplnovanie_tpv"
                        id="doplnovanie_tpv"
                        value={doplnovanie_tpv || ''}
                        disabled={true}
                        readOnly
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
                        disabled={true}
                        readOnly
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
  dispeceriLoading: state.dispeceri ? state.dispeceri.loading : false
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateHVHlavnyFormField: (field, value) => {
    dispatch(updateHVHlavnyFormField(field, value))
  },
  updateHVHlavnyRequest: (data, rollbackCallback) => {
    dispatch(updateHVHlavnyRequest(data, rollbackCallback))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hlavicka)
