import React from 'react'
import {connect} from 'react-redux'
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardImg, CardText, CardBody, CardTitle, CardFooter, CardHeader,
  Form, FormGroup, Label, Input, Table, Badge, UncontrolledTooltip,
  Nav, NavItem, NavLink, TabContent, TabPane,
  Row, Col,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

class ZmenaNaHV extends React.Component {
  constructor(props) {
    super(props)

    // We'll keep an array of "zmena" entries in state.
    // Each entry has two groups: hvZapad, hvVychod
    // e.g.:
    // {
    //   hvZapad: { datetime: '', poznamka: '' },
    //   hvVychod: { datetime: '', poznamka: '' }
    // }
    this.state = {
      zmeny: []
    }

    this.handleAddZmena = this.handleAddZmena.bind(this)
    this.handleRemoveZmena = this.handleRemoveZmena.bind(this)
    this.handleGroupChange = this.handleGroupChange.bind(this)
  }

  /**
   * Returns a fresh, empty "zmena" object containing
   * the two groups: HV Západ and HV Východ
   */
  getEmptyZmena() {
    return {
      hvZapad: {
        datetime: '',
        poznamka: ''
      },
      hvVychod: {
        datetime: '',
        poznamka: ''
      }
    }
  }

  /**
   * "Pridať" - append a new blank zmena object to our zmeny array
   */
  handleAddZmena() {
    this.setState((prevState) => ({
      zmeny: [...prevState.zmeny, this.getEmptyZmena()]
    }))
  }

  /**
   * "Odstrániť" - remove the zmena entry at the specified index
   */
  handleRemoveZmena(index) {
    this.setState((prevState) => {
      const newZmeny = [...prevState.zmeny]
      newZmeny.splice(index, 1)
      return { zmeny: newZmeny }
    })
  }

  /**
   * Universal change handler for a group's field.
   * We pass (zmenaIndex, groupKey, fieldName, event).
   * zmenaIndex = which zmena in the array,
   * groupKey   = 'hvZapad' or 'hvVychod'
   * fieldName  = 'datetime' or 'poznamka'
   */
  handleGroupChange(zmenaIndex, groupKey, fieldName, e) {
    const { value } = e.target
    this.setState((prevState) => {
      const newZmeny = [...prevState.zmeny]
      newZmeny[zmenaIndex] = {
        ...newZmeny[zmenaIndex],
        [groupKey]: {
          ...newZmeny[zmenaIndex][groupKey],
          [fieldName]: value
        }
      }
      return { zmeny: newZmeny }
    })
  }

  /**
   * Render a single group: label, date/time, textarea
   */
  renderGroup(zmenaIndex, groupKey, groupLabel) {
    const groupData = this.state.zmeny[zmenaIndex][groupKey]
    return (
      <div style={{ border: '1px solid #ddd', padding: '1rem', marginTop: '1rem' }}>
        <h5>{groupLabel}</h5>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Dátum a čas</Label>
              <Input
                type="datetime-local"
                value={groupData.datetime}
                onChange={(e) => this.handleGroupChange(zmenaIndex, groupKey, 'datetime', e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>Poznámka</Label>
              <Input
                type="textarea"
                value={groupData.poznamka}
                onChange={(e) => this.handleGroupChange(zmenaIndex, groupKey, 'poznamka', e)}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    )
  }

  render() {

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Zmena na HV</CardHeader>
        <CardBody>
          {/* Button to add a new "zmena" */}
          <Button color="success" onClick={this.handleAddZmena}>
            Pridať
          </Button>

          {this.state.zmeny.map((zmena, index) => (
            <Form
              key={index}
              className="mt-4"
              style={{ border: '2px solid #ccc', padding: '1rem' }}
            >
              {/* Group: HV Západ */}
              {this.renderGroup(index, 'hvZapad', 'HV Západ')}

              {/* Group: HV Východ */}
              {this.renderGroup(index, 'hvVychod', 'HV Východ')}

              {/* "Odstrániť" button to remove this entire zmena */}
              <Button
                color="danger"
                className="mt-3"
                onClick={() => this.handleRemoveZmena(index)}
              >
                Odstrániť
              </Button>
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
)(ZmenaNaHV)