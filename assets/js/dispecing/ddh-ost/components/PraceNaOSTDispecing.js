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

class PraceNaOSTDispecing extends React.Component {
  constructor(props) {
    super(props)

    // Store multiple forms in an array. Each item is one record.
    this.state = {
      forms: []
    }

    this.handleAddForm = this.handleAddForm.bind(this)
    this.handleRemoveForm = this.handleRemoveForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // When user clicks "Pridať", add a new empty form object to `forms`
  handleAddForm() {
    this.setState(prevState => ({
      forms: [
        ...prevState.forms,
        {
          ost: '',
          startDateTime: '',
          endDateTime: '',
          vplyvNaDodavku: '',
          vyvod: '',
          poznamka: '',
          stav: '',
          vybavuje: '',
          priloha: null
        }
      ]
    }))
  }

  // Removes the form at the specified index
  handleRemoveForm(index) {
    this.setState((prevState) => {
      const newForms = [...prevState.forms]
      newForms.splice(index, 1)
      return { forms: newForms }
    })
  }

  // Generic change handler: update the correct form index with new field value
  handleChange(index, e) {
    const { name, value, files } = e.target
    this.setState(prevState => {
      const newForms = [...prevState.forms]

      // If it's a file input, store the file object(s); otherwise store the string value
      if (name === 'priloha' && files) {
        newForms[index][name] = files[0]
      } else {
        newForms[index][name] = value
      }

      return { forms: newForms }
    })
  }

  /*handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }*/

  render() {

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Práce na OST - dispečing a poruchová služba</CardHeader>
        <CardBody>
          {/* "Pridať" button to append a new entry */}
          <Button color="success" onClick={this.handleAddForm}>
            Pridať
          </Button>

          {this.state.forms.map((entry, i) => (
            <Form key={i} className="mt-4">
              <Row>
                <Col md="6">
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
                      <option value="ost750">OST 750</option>
                      <option value="ost770">OST 770</option>
                      <option value="ost850">OST 850</option>
                      {/* add more as needed */}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              {/* "Začiatok a koniec prác" group */}
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Začiatok prác</Label>
                    {/* Simple HTML date/time picker (HTML5) */}
                    <Input
                      type="datetime-local"
                      name="startDateTime"
                      value={entry.startDateTime}
                      onChange={(e) => this.handleChange(i, e)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Ukončenie prác</Label>
                    <Input
                      type="datetime-local"
                      name="endDateTime"
                      value={entry.endDateTime}
                      onChange={(e) => this.handleChange(i, e)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for={`vplyvNaDodavku-${i}`}>Vplyv na dodávku</Label>
                    <Input
                      type="select"
                      id={`vplyvNaDodavku-${i}`}
                      name="vplyvNaDodavku"
                      value={entry.vplyvNaDodavku}
                      onChange={(e) => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      <option value="prerusenie">Prerušenie</option>
                      <option value="obmedzenie">Obmedzenie</option>
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
                      value={entry.vyvod}
                      onChange={(e) => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      <option value="tv">TV</option>
                      <option value="uk">ÚK</option>
                      <option value="vzt">VZT</option>
                      <option value="tv+uk">TV + ÚK</option>
                      <option value="tv+vzt">TV + VZT</option>
                      <option value="uk+vzt">ÚK + VZT</option>
                      <option value="tv+uk+vzt">TV + ÚK + VZT</option>
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
                      value={entry.poznamka}
                      onChange={(e) => this.handleChange(i, e)}
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
                      value={entry.stav}
                      onChange={(e) => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      <option value="v rieseni">V riešení</option>
                      <option value="provizorne vyriesene">Provizórne vyriešené</option>
                      <option value="vyriesene">Vyriešené</option>
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
                      value={entry.vybavuje}
                      onChange={(e) => this.handleChange(i, e)}
                    >
                      <option value="">-- Vyberte --</option>
                      <option value="dispecing">Dispečing</option>
                      <option value="ris">RIS</option>
                      <option value="obvod_vychod">Obvod východ</option>
                      <option value="obvod_zapad">Obvod západ</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for={`priloha-${i}`}>Príloha</Label>
                    <Input
                      type="file"
                      id={`priloha-${i}`}
                      name="priloha"
                      onChange={(e) => this.handleChange(i, e)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* "Odstrániť" button to remove this form entry */}
              <Button
                color="danger"
                onClick={() => this.handleRemoveForm(i)}
                className="mb-3"
              >
                Odstrániť
              </Button>

              {/* Optional horizontal rule to visually separate each form */}
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
)(PraceNaOSTDispecing)