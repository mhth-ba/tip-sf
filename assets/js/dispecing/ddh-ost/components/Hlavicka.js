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

class Hlavicka extends React.Component {
  constructor(props) {
    super(props)

    // If using local component state, define initial state values here
    // or connect them to Redux store via mapStateToProps.
    this.state = {
      dispecerDenna: '',
      dispecerNocna: '',
      poruchovaDenna: '',
      poruchovaNocna: '',
      tempLetisko: '',
      tempTpV: '',
      tempTpZ: '',
      dopTpv: '',
      dopTpz: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <Row>
        <Col>
          <Card>
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
                        name="dispecerDenna"
                        id="dispecerDenna"
                        value={this.state.dispecerDenna}
                        onChange={this.handleChange}
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="personA">Medlen Radovan</option>
                        <option value="personB">Szabo Ivan</option>
                        <option value="personC">Korienek Martin</option>
                        <option value="personC">Lalúch Michal</option>
                        <option value="personC">Závracký Miroslav</option>
                        <option value="personC">Miartuš Ján</option>
                        <option value="personC">Zeman Rastislav</option>
                        <option value="personC">Strašifták Lukáš</option>
                        <option value="personC">Čerhit Miroslav</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="dispecerNocna">Dispečer - nočná zmena</Label>
                      <Input
                        type="select"
                        name="dispecerNocna"
                        id="dispecerNocna"
                        value={this.state.dispecerNocna}
                        onChange={this.handleChange}
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="personA">Medlen Radovan</option>
                        <option value="personB">Szabo Ivan</option>
                        <option value="personC">Korienek Martin</option>
                        <option value="personC">Lalúch Michal</option>
                        <option value="personC">Závracký Miroslav</option>
                        <option value="personC">Miartuš Ján</option>
                        <option value="personC">Zeman Rastislav</option>
                        <option value="personC">Strašifták Lukáš</option>
                        <option value="personC">Čerhit Miroslav</option>
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
                        name="poruchovaDenna"
                        id="poruchovaDenna"
                        value={this.state.poruchovaDenna}
                        onChange={this.handleChange}
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="personA">Osoba A</option>
                        <option value="personB">Osoba B</option>
                        <option value="personC">Osoba C</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="poruchovaNocna">Poruchová služba - nočná zmena</Label>
                      <Input
                        type="select"
                        name="poruchovaNocna"
                        id="poruchovaNocna"
                        value={this.state.poruchovaNocna}
                        onChange={this.handleChange}
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="personD">Osoba A</option>
                        <option value="personE">Osoba B</option>
                        <option value="personF">Osoba C</option>
                        <option value="personG">Osoba D</option>
                        <option value="personG">Osoba E</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                {/* Row 3: Teploty */}
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <Label for="tempLetisko">Priemerná denná teplota - letisko</Label>
                      <Input
                        type="text"
                        name="tempLetisko"
                        id="tempLetisko"
                        value={this.state.tempLetisko}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label for="tempTpV">Priemerná denná teplota TpV</Label>
                      <Input
                        type="text"
                        name="tempTpV"
                        id="tempTpV"
                        value={this.state.tempTpV}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label for="tempTpZ">Priemerná denná teplota TpZ</Label>
                      <Input
                        type="text"
                        name="tempTpZ"
                        id="tempTpZ"
                        value={this.state.tempTpZ}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                {/* Row 4: Doplňovanie */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="dopTpv">Doplňnovanie TpV</Label>
                      <Input
                        type="text"
                        name="dopTpv"
                        id="dopTpv"
                        value={this.state.dopTpv}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="dopTpz">Doplňovanie TpZ</Label>
                      <Input
                        type="text"
                        name="dopTpz"
                        id="dopTpz"
                        value={this.state.dopTpz}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col></Col>
      </Row>
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
)(Hlavicka)