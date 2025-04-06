import React from 'react'
import {connect} from 'react-redux'
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardImg, CardText, CardBody, CardTitle, CardFooter, CardHeader,
  Form, FormGroup, Label, Input, Table, Badge, UncontrolledTooltip,
  Nav, NavItem, NavLink, TabContent, TabPane,
  Row, Col
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

class Poznamky extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      forms: []
    }

    this.handleAddForm = this.handleAddForm.bind(this)
    this.handleRemoveForm = this.handleRemoveForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  /**
   * "Pridať" - Add a new blank form entry.
   */
  handleAddForm() {
    this.setState((prevState) => ({
      forms: [
        ...prevState.forms,
        {
          datetime: '',
          ost: '',
          ostDigits: '',
          poznamka: ''
        }
      ]
    }))
  }

  /**
   * "Odstrániť" - Remove a form entry by its index.
   */
  handleRemoveForm(index) {
    this.setState((prevState) => {
      const newForms = [...prevState.forms]
      newForms.splice(index, 1)
      return { forms: newForms }
    })
  }

  /**
   * Universal onChange handler for inputs, bound by entry index.
   */
  handleChange(index, e) {
    const { name, value } = e.target
    this.setState((prevState) => {
      const newForms = [...prevState.forms]
      newForms[index][name] = value
      return { forms: newForms }
    })
  }

  render() {

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Poznámky</CardHeader>
        <CardBody>
          {/* "Pridať" button to add a new form entry */}
          <Button color="success" onClick={this.handleAddForm}>
            Pridať
          </Button>

          {/* Render each form entry */}
          {this.state.forms.map((entry, i) => (
            <Form key={i} className="mt-4">
              <Row>
                {/* Dátum a čas */}
                <Col md="6">
                  <FormGroup>
                    <Label for={`datetime-${i}`}>Dátum a čas</Label>
                    <Input
                      type="datetime-local"
                      id={`datetime-${i}`}
                      name="datetime"
                      value={entry.datetime}
                      onChange={(e) => this.handleChange(i, e)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                {/* OST dropdown */}
                <Col md="4">
                  <FormGroup>
                    <Label for={`ost-${i}`}>OST</Label>
                    <Input
                      type="select"
                      id={`ost-${i}`}
                      name="ost"
                      value={entry.ost}
                      onChange={(e) => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      <option value="OST 430">OST 430</option>
                      <option value="OST 435">OST 435</option>
                      <option value="OST 450">OST 450</option>
                      <option value="OST 530">OST 530</option>
                      <option value="OST 570">OST 570</option>
                      <option value="OST 690">OST 690</option>
                    </Input>
                  </FormGroup>
                </Col>

                {/* 3-digit input */}
                <Col md="2">
                  <FormGroup>
                    <Label for={`ostDigits-${i}`}>3-číslie OM</Label>
                    <Input
                      type="text"
                      id={`ostDigits-${i}`}
                      name="ostDigits"
                      placeholder="xyz"
                      maxLength={3}
                      value={entry.ostDigits}
                      onChange={(e) => this.handleChange(i, e)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                {/* Poznámka (textarea) */}
                <Col md="12">
                  <FormGroup>
                    <Label for={`poznamka-${i}`}>Poznámka</Label>
                    <Input
                      type="textarea"
                      id={`poznamka-${i}`}
                      name="poznamka"
                      value={entry.poznamka}
                      onChange={(e) => this.handleChange(i, e)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* "Odstrániť" button to remove this form entry */}
              <Button
                color="danger"
                className="mb-3"
                onClick={() => this.handleRemoveForm(i)}
              >
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
  // zoznam: state.zoznam,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // update: (id, val, row, col) => dispatch(updatePoznamkyRequest(id, val, row, col))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poznamky)