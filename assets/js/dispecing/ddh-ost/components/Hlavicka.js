import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'
import { updateOSTHlavnyFormField } from '../actions' // adjust path as needed

class Hlavicka extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    // Dispatch an action to update the specific form field in Redux
    this.props.updateOSTHlavnyFormField(name, value)
  }

  render() {
    const {
      dispecer_1,
      dispecer_2,
      poruchovka_1,
      poruchovka_2,
      teplota_letisko,
      teplota_tpv,
      teplota_tpz,
      doplnovanie_tpv,
      doplnovanie_tpz
    } = this.props.hlavny || {}

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
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="Sochovič Peter">Sochovič Peter</option>
                        <option value="Ušjak Daniel">Ušjak Daniel</option>
                        <option value="Medlen Radovan">Medlen Radovan</option>
                        <option value="Szabo Ivan">Szabo Ivan</option>
                        <option value="Korienek Martin">Korienek Martin</option>
                        <option value="Lalúch Michal">Lalúch Michal</option>
                        <option value="Závracký Miroslav">Závracký Miroslav</option>
                        <option value="Miartuš Ján">Miartuš Ján</option>
                        <option value="Zeman Rastislav">Zeman Rastislav</option>
                        <option value="Strašifták Lukáš">Strašifták Lukáš</option>
                        <option value="Čerhit Miroslav">Čerhit Miroslav</option>
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
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="Sochovič Peter">Sochovič Peter</option>
                        <option value="Ušjak Daniel">Ušjak Daniel</option>
                        <option value="Medlen Radovan">Medlen Radovan</option>
                        <option value="Szabo Ivan">Szabo Ivan</option>
                        <option value="Korienek Martin">Korienek Martin</option>
                        <option value="Lalúch Michal">Lalúch Michal</option>
                        <option value="Závracký Miroslav">Závracký Miroslav</option>
                        <option value="Miartuš Ján">Miartuš Ján</option>
                        <option value="Zeman Rastislav">Zeman Rastislav</option>
                        <option value="Strašifták Lukáš">Strašifták Lukáš</option>
                        <option value="Čerhit Miroslav">Čerhit Miroslav</option>
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
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="Rojček Lukáš">Rojček Lukáš</option>
                        <option value="Monosi Tibor">Monosi Tibor</option>
                        <option value="Vícen Peter">Vícen Peter</option>
                        <option value="Tóth Štefan">Tóth Štefan</option>
                        <option value="Čech Jaromír">Čech Jaromír</option>
                        <option value="Ďurica Juraj">Ďurica Juraj</option>
                        <option value="Vizváry Ľubomír">Vizváry Ľubomír</option>
                        <option value="Nagy Roman">Nagy Roman</option>
                        <option value="Župánek Filip">Župánek Filip</option>
                        <option value="Ivan Ján">Ivan Ján</option>
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
                      >
                        <option value="">-- Vyberte --</option>
                        <option value="Rojček Lukáš">Rojček Lukáš</option>
                        <option value="Monosi Tibor">Monosi Tibor</option>
                        <option value="Vícen Peter">Vícen Peter</option>
                        <option value="Tóth Štefan">Tóth Štefan</option>
                        <option value="Čech Jaromír">Čech Jaromír</option>
                        <option value="Ďurica Juraj">Ďurica Juraj</option>
                        <option value="Vizváry Ľubomír">Vizváry Ľubomír</option>
                        <option value="Nagy Roman">Nagy Roman</option>
                        <option value="Župánek Filip">Župánek Filip</option>
                        <option value="Ivan Ján">Ivan Ján</option>
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
  hlavny: state.hlavny // Mapping the hlavny slice from Redux store.
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateOSTHlavnyFormField: (field, value) => dispatch(updateOSTHlavnyFormField(field, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Hlavicka)
