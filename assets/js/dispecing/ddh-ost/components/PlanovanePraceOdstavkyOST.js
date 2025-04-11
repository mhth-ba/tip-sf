import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Badge,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

class PlanovanePraceOdstavkyOST extends React.Component {
  constructor(props) {
    super(props)

    // Keep an array of form entries. Each entry is one "Plánované práce" record.
    this.state = {
      forms: []
    }

    // A static list of OST options (for demonstration).
    // In real usage, you might load this from props or an API.
    this.ALL_OST_OPTIONS = ['OST 430', 'OST 435', 'OST 450', 'OST 530', 'OST 570', 'OST 690']

    this.handleAddForm = this.handleAddForm.bind(this)
    this.handleRemoveForm = this.handleRemoveForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleOstDropdown = this.toggleOstDropdown.bind(this)
    this.handleSelectOstValue = this.handleSelectOstValue.bind(this)
  }

  /**
   * "Pridať" - Add a new empty form entry.
   */
  handleAddForm() {
    this.setState(prevState => ({
      forms: [
        ...prevState.forms,
        {
          datetime: '',
          ostDropdownOpen: false,
          ostFilter: '',
          ostSelected: '',
          ostDigits: '',
          poznamka: ''
        }
      ]
    }))
  }

  /**
   * "Odstrániť" - Remove the specified form entry by index.
   */
  handleRemoveForm(index) {
    this.setState(prevState => {
      const newForms = [...prevState.forms]
      newForms.splice(index, 1)
      return { forms: newForms }
    })
  }

  /**
   * Generic change handler for text/datetime inputs.
   * Tied to each form entry by its index.
   */
  handleChange(index, e) {
    const { name, value } = e.target
    this.setState(prevState => {
      const newForms = [...prevState.forms]
      newForms[index][name] = value
      return { forms: newForms }
    })
  }

  /**
   * Toggles the OST dropdown open/closed for the form entry at `index`.
   */
  toggleOstDropdown(index) {
    this.setState(prevState => {
      const newForms = [...prevState.forms]
      newForms[index].ostDropdownOpen = !newForms[index].ostDropdownOpen
      return { forms: newForms }
    })
  }

  /**
   * Called when a user clicks one of the filtered OST options in the dropdown.
   * Sets `ostSelected` to that value and closes the dropdown.
   */
  handleSelectOstValue(index, value) {
    this.setState(prevState => {
      const newForms = [...prevState.forms]
      newForms[index].ostSelected = value
      newForms[index].ostDropdownOpen = false
      return { forms: newForms }
    })
  }

  render() {
    return (
      <Card>
        <CardHeader className="bg-primary text-white">Plánované práce a odstávky na OST</CardHeader>
        <CardBody>
          {/* Button to add a new form entry */}
          <Button color="success" onClick={this.handleAddForm}>
            Pridať
          </Button>

          {this.state.forms.map((entry, i) => {
            // Filter OST options based on `ostFilter`.
            const filteredOstOptions = this.ALL_OST_OPTIONS.filter(ost =>
              ost.toLowerCase().includes(entry.ostFilter.toLowerCase())
            )

            return (
              <Form key={i} className="mt-4">
                {/* Dátum a čas */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for={`datetime-${i}`}>Dátum a čas</Label>
                      <Input
                        type="datetime-local"
                        id={`datetime-${i}`}
                        name="datetime"
                        value={entry.datetime}
                        onChange={e => this.handleChange(i, e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                {/* OST dropdown with in-menu filter + a 3-digit code input */}
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <Label>Objekt OST/PK</Label>
                      <Dropdown isOpen={entry.ostDropdownOpen} toggle={() => this.toggleOstDropdown(i)}>
                        <DropdownToggle caret>
                          {entry.ostSelected ? entry.ostSelected : '-- Vyberte OST --'}
                        </DropdownToggle>
                        <DropdownMenu>
                          {/* Input for filtering inside the dropdown */}
                          <DropdownItem header>
                            <Input
                              type="text"
                              placeholder="Filter OST..."
                              name="ostFilter"
                              value={entry.ostFilter}
                              onChange={e => this.handleChange(i, e)}
                            />
                          </DropdownItem>
                          <DropdownItem divider />

                          {/* Display filtered options */}
                          {filteredOstOptions.length > 0 ? (
                            filteredOstOptions.map(option => (
                              <DropdownItem key={option} onClick={() => this.handleSelectOstValue(i, option)}>
                                {option}
                              </DropdownItem>
                            ))
                          ) : (
                            <DropdownItem disabled>Žiadne záznamy</DropdownItem>
                          )}
                        </DropdownMenu>
                      </Dropdown>
                    </FormGroup>
                  </Col>

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
                        onChange={e => this.handleChange(i, e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                {/* Poznámka */}
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label for={`poznamka-${i}`}>Poznámka</Label>
                      <Input
                        type="textarea"
                        id={`poznamka-${i}`}
                        name="poznamka"
                        value={entry.poznamka}
                        onChange={e => this.handleChange(i, e)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                {/* Button to remove this form entry */}
                <Button color="danger" onClick={() => this.handleRemoveForm(i)} className="mb-3">
                  Odstrániť
                </Button>
                <hr />
              </Form>
            )
          })}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlanovanePraceOdstavkyOST)
