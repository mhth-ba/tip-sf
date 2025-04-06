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

class ZmenaNaZdrojoch extends React.Component {
  constructor(props) {
    super(props)

    // We'll store an array of zmena (change) entries in local state.
    // Each entry has 7 groups, each group with { datetime, zariadenie, poznamka, stav }.
    this.state = {
      zmeny: []
    }

    this.handleAddZmena = this.handleAddZmena.bind(this)
    this.handleRemoveZmena = this.handleRemoveZmena.bind(this)
    this.handleGroupChange = this.handleGroupChange.bind(this)
  }

  /**
   * Returns a fresh, empty structure for one entire "Zmena" with all 7 groups.
   */
  getEmptyZmena() {
    return {
      teplarenZapad: {
        datetime: '',
        zariadenie: '',
        poznamka: '',
        stav: ''
      },
      cogenWest: {
        datetime: '',
        zariadenie: '',
        poznamka: '',
        stav: ''
      },
      teplarenVychod: {
        datetime: '',
        zariadenie: '',
        poznamka: '',
        stav: ''
      },
      vyhrevnaJuh: {
        datetime: '',
        zariadenie: '',
        poznamka: '',
        stav: ''
      },
      vsSlovnaft: {
        datetime: '',
        zariadenie: '',
        poznamka: '',
        stav: ''
      },
      olo: {
        datetime: '',
        zariadenie: '',
        poznamka: '',
        stav: ''
      },
      ppc: {
        datetime: '',
        zariadenie: '',
        poznamka: '',
        stav: ''
      }
    }
  }

  /**
   * "Pridať" - Add a new blank Zmena to the zmeny array.
   */
  handleAddZmena() {
    this.setState((prevState) => ({
      zmeny: [...prevState.zmeny, this.getEmptyZmena()]
    }))
  }

  /**
   * "Odstrániť" - Remove the Zmena at the given index.
   */
  handleRemoveZmena(index) {
    this.setState((prevState) => {
      const newZmeny = [...prevState.zmeny]
      newZmeny.splice(index, 1)
      return { zmeny: newZmeny }
    })
  }

  /**
   * A universal handler for changes in any group's field.
   * We pass in (zmenaIndex, groupKey, fieldName, event) so we know
   * which Zmena entry, which group, and which field to update.
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
   * Options for "Stav" used by all groups.
   */
  renderStavOptions() {
    return (
      [
        <option value="">-- Vyberte --</option>,
        <option value="V prevádzke">V prevádzke</option>,
        <option value="V odstávke">V odstávke</option>,
        <option value="V poruche">V poruche</option>,
        <option value="V teplej zálohe">V teplej zálohe</option>,
        <option value="V teplej zálohe s povolením prác">
          V teplej zálohe s povolením prác
        </option>,
        <option value="Havária">Havária</option>
      ]
    )
  }

  /**
   * Renders a group with fields:
   *  Dátum a čas (datetime-local),
   *  Zariadenie (select),
   *  Poznámka (textarea),
   *  Stav (select).
   *
   *  We pass the group key (e.g. 'teplarenZapad') to retrieve the correct data from the zmena object.
   *  Also pass the array of zariadenie options relevant to that group.
   */
  renderGroup(zmenaIndex, groupKey, groupLabel, zariadenieOptions) {
    const groupData = this.state.zmeny[zmenaIndex][groupKey]

    return (
      <div style={{ border: '1px solid #dedede', padding: '1rem', marginTop: '1rem' }}>
        <h5>{groupLabel}</h5>
        {/* Dátum a čas */}
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

        {/* Zariadenie */}
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Zariadenie</Label>
              <Input
                type="select"
                value={groupData.zariadenie}
                onChange={(e) => this.handleGroupChange(zmenaIndex, groupKey, 'zariadenie', e)}
              >
                <option value="">-- Vyberte --</option>
                {zariadenieOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {/* Poznámka */}
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

        {/* Stav */}
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Stav</Label>
              <Input
                type="select"
                value={groupData.stav}
                onChange={(e) => this.handleGroupChange(zmenaIndex, groupKey, 'stav', e)}
              >
                {this.renderStavOptions()}
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
    )
  }

  render() {

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Zmena na zdrojoch</CardHeader>
        <CardBody>
          <Button color="success" onClick={this.handleAddZmena}>
            Pridať
          </Button>

          {this.state.zmeny.map((zmena, zmenaIndex) => (
            <Form key={zmenaIndex} className="mt-4" style={{ border: '2px solid #ccc', padding: '1rem' }}>
              {/* Group: Tepláreň Západ */}
              {this.renderGroup(
                zmenaIndex,
                'teplarenZapad',
                'Tepláreň Západ',
                ['HK1', 'HK3', 'K6', 'TG1']
              )}
              {/* Group: Cogen West */}
              {this.renderGroup(
                zmenaIndex,
                'cogenWest',
                'Cogen West',
                ['MG1', 'MG2']
              )}
              {/* Group: Tepláreň Východ */}
              {this.renderGroup(
                zmenaIndex,
                'teplarenVychod',
                'Tepláreň Východ',
                ['K5', 'K6', 'TG1']
              )}
              {/* Group: Výhrevňa Juh */}
              {this.renderGroup(
                zmenaIndex,
                'vyhrevnaJuh',
                'Výhrevňa Juh',
                ['HK3', 'HK4']
              )}
              {/* Group: VS Slovnaft */}
              {this.renderGroup(
                zmenaIndex,
                'vsSlovnaft',
                'VS Slovnaft',
                [
                  'V1',
                  'V2',
                  'V3',
                  'V4',
                  'Para 0,3 MPa',
                  'Para 1 Mpa'
                ]
              )}
              {/* Group: OLO */}
              {this.renderGroup(
                zmenaIndex,
                'olo',
                'OLO',
                ['VS']
              )}
              {/* Group: PPC */}
              {this.renderGroup(
                zmenaIndex,
                'ppc',
                'PPC',
                ['TG3']
              )}

              {/* "Odstrániť" button to remove this entire Zmena entry */}
              <Button
                color="danger"
                className="mt-3"
                onClick={() => this.handleRemoveZmena(zmenaIndex)}
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
)(ZmenaNaZdrojoch)