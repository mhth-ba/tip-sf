import React from 'react'
import {
  Card, CardHeader, CardBody, CardTitle, CardSubtitle,
  Row, Col, Progress,
  InputGroup, InputGroupText, InputGroupAddon, Label, Input,
  Form, FormGroup, FormFeedback
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import NumInput from '../components/helpers/NumInput'

import { connect } from 'react-redux'
import { updateKonstantyRequest } from '../actions'


class Konstanty extends React.Component {
  constructor(props) {
    super(props)

    const konstanty = this.props.konstanty

    this.state = {
      vykon_max_tpv: konstanty.vykon_max_tpv,
      vykon_max_tpz: konstanty.vykon_max_tpz,
      krivka_vychod: konstanty.krivka_vychod,
      krivka_zapad: konstanty.krivka_zapad,
      vyhrevnost_zp: konstanty.vyhrevnost_zp,
      ucinnost_tpv: konstanty.ucinnost_tpv,
      ucinnost_vhj: konstanty.ucinnost_vhj,
      ucinnost_tpz: konstanty.ucinnost_tpz,
      dmm_tpv: konstanty.dmm_tpv,
      dmm_vhj: konstanty.dmm_vhj,
      dmm_tpz: konstanty.dmm_tpz,
      dmm_limit: konstanty.dmm_limit,
      ppc_min: konstanty.ppc_min,
      ppc_max: konstanty.ppc_max,
      slovnaft_min: konstanty.slovnaft_min,
      slovnaft_max: konstanty.slovnaft_max,
      ppc_para: konstanty.ppc_para,
      ppc_zmluva: konstanty.ppc_zmluva,
      ppc_hv: konstanty.ppc_hv,

      valid: {
        vykon_max_tpv: true,
        vykon_max_tpz: true,
        krivka_vychod: true,
        krivka_zapad: true,
        vyhrevnost_zp: true,
        ucinnost_tpv: true,
        ucinnost_vhj: true,
        ucinnost_tpz: true,
        dmm_tpv: true,
        dmm_vhj: true,
        dmm_tpz: true,
        dmm_limit: true,
        ppc_min: true,
        ppc_max: true,
        slovnaft_min: true,
        slovnaft_max: true,
        ppc_para: true,
        ppc_zmluva: true,
        ppc_hv: true
      },

      naplanovat: true
    }

    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleBlur(e) {
    const id = this.props.konstanty.id
    const key = e.target.id
    const value = e.target.value

    // ak sa hodnota nezmenila, nevykonavat update
    if (this.props.konstanty[key] === Number(value)) return

    const data = {
      id,
      [key]: value,
      field: key
    }

    if (this.validateNumber(value)) {
      this.props.update(data)
      //console.log(data)
    }
  }

  handleChange(e) {
    const id = e.target.id
    const value = e.target.value.replace(',', '.')

    this.setState({
      [id]: value
    })

    this.validate(id, value)
  }

  handleCheck() {
    this.setState({
      naplanovat: !this.state.naplanovat
    })
  }

  validateNumber(n) {
    return !isNaN(n)
      && 0 <= n === n <= 1000000
      && n.length > 0
  }

  validate(id, value) {
    if (this.validateNumber(value)) {
      this.setState({ valid: { ...this.state.valid, [id]: true } })
    } else {
      this.setState({ valid: { ...this.state.valid, [id]: false } })
    }
  }

  componentWillReceiveProps(nextProps) {
    const next = nextProps.konstanty
    const current = this.props.konstanty

    if (next.vykon_max_tpv !== current.vykon_max_tpv) this.setState({ vykon_max_tpv: next.vykon_max_tpv })
    if (next.vykon_max_tpz !== current.vykon_max_tpz) this.setState({ vykon_max_tpz: next.vykon_max_tpz })
    if (next.krivka_vychod !== current.krivka_vychod) this.setState({ krivka_vychod: next.krivka_vychod })
    if (next.krivka_zapad !== current.krivka_zapad) this.setState({ krivka_zapad: next.krivka_zapad })
    if (next.vyhrevnost_zp !== current.vyhrevnost_zp) this.setState({ vyhrevnost_zp: next.vyhrevnost_zp })
    if (next.ucinnost_tpv !== current.ucinnost_tpv) this.setState({ ucinnost_tpv: next.ucinnost_tpv })
    if (next.ucinnost_vhj !== current.ucinnost_vhj) this.setState({ ucinnost_vhj: next.ucinnost_vhj })
    if (next.ucinnost_tpz !== current.ucinnost_tpz) this.setState({ ucinnost_tpz: next.ucinnost_tpz })
    if (next.dmm_tpv !== current.dmm_tpv) this.setState({ dmm_tpv: next.dmm_tpv })
    if (next.dmm_vhj !== current.dmm_vhj) this.setState({ dmm_vhj: next.dmm_vhj })
    if (next.dmm_tpz !== current.dmm_tpz) this.setState({ dmm_tpz: next.dmm_tpz })
    if (next.dmm_limit !== current.dmm_limit) this.setState({ dmm_limit: next.dmm_limit })
    if (next.ppc_min !== current.ppc_min) this.setState({ ppc_min: next.ppc_min })
    if (next.ppc_max !== current.ppc_max) this.setState({ ppc_max: next.ppc_max })
    if (next.slovnaft_min !== current.slovnaft_min) this.setState({ slovnaft_min: next.slovnaft_min })
    if (next.slovnaft_max !== current.slovnaft_max) this.setState({ slovnaft_max: next.slovnaft_max })
    if (next.ppc_para !== current.ppc_para) this.setState({ ppc_para: next.ppc_para })
    if (next.ppc_zmluva !== current.ppc_zmluva) this.setState({ ppc_zmluva: next.ppc_zmluva })
    if (next.ppc_hv !== current.ppc_hv) this.setState({ ppc_hv: next.ppc_hv })
  }

  render() {

    const hlavny = this.props.hlavny
    const konstanty = this.props.konstanty
    const updating = this.props.konstanty.updating

    // 1 = dokonceny | 2 = rozpracovany
    // ak je plan dokonceny (schvaleny), tak id je 1 => hodnoty sa nedaju upravovat, vsetko je read-only
    const stav = hlavny.stav.id === 1

    const {
      loading,
      vykon_max_tpv
    } = konstanty

    // const vykon_max_tpv = this.state.vykon_max_tpv
    const vykon_max_tpz = this.state.vykon_max_tpz
    const krivka_vychod = this.state.krivka_vychod
    const krivka_zapad = this.state.krivka_zapad
    const vyhrevnost_zp = this.state.vyhrevnost_zp
    const ucinnost_tpv = this.state.ucinnost_tpv
    const ucinnost_vhj = this.state.ucinnost_vhj
    const ucinnost_tpz = this.state.ucinnost_tpz
    const dmm_tpv = this.state.dmm_tpv
    const dmm_vhj = this.state.dmm_vhj
    const dmm_tpz = this.state.dmm_tpz
    const dmm_limit = this.state.dmm_limit
    const ppc_min = this.state.ppc_min
    const ppc_max = this.state.ppc_max
    const slovnaft_min = this.state.slovnaft_min
    const slovnaft_max = this.state.slovnaft_max
    const ppc_para = this.state.ppc_para
    const ppc_zmluva = this.state.ppc_zmluva
    const ppc_hv = this.state.ppc_hv

    const invalid_vykon_max_tpv = this.state.valid.vykon_max_tpv ? '' : 'is-invalid'
    const invalid_vykon_max_tpz = this.state.valid.vykon_max_tpz ? '' : 'is-invalid'
    const invalid_krivka_vychod = this.state.valid.krivka_vychod ? '' : 'is-invalid'
    const invalid_krivka_zapad = this.state.valid.krivka_zapad ? '' : 'is-invalid'
    const invalid_vyhrevnost_zp = this.state.valid.vyhrevnost_zp ? '' : 'is-invalid'
    const invalid_ucinnost_tpv = this.state.valid.ucinnost_tpv ? '' : 'is-invalid'
    const invalid_ucinnost_vhj = this.state.valid.ucinnost_vhj ? '' : 'is-invalid'
    const invalid_ucinnost_tpz = this.state.valid.ucinnost_tpz ? '' : 'is-invalid'
    const invalid_dmm_tpv = this.state.valid.dmm_tpv ? '' : 'is-invalid'
    const invalid_dmm_vhj = this.state.valid.dmm_vhj ? '' : 'is-invalid'
    const invalid_dmm_tpz = this.state.valid.dmm_tpz ? '' : 'is-invalid'
    const invalid_dmm_limit = this.state.valid.dmm_limit ? '' : 'is-invalid'
    const invalid_ppc_min = this.state.valid.ppc_min ? '' : 'is-invalid'
    const invalid_ppc_max = this.state.valid.ppc_max ? '' : 'is-invalid'
    const invalid_slovnaft_min = this.state.valid.slovnaft_min ? '' : 'is-invalid'
    const invalid_slovnaft_max = this.state.valid.slovnaft_max ? '' : 'is-invalid'
    const invalid_ppc_para = this.state.valid.ppc_para ? '' : 'is-invalid'
    const invalid_ppc_zmluva = this.state.valid.ppc_zmluva ? '' : 'is-invalid'
    const invalid_ppc_hv = (ppc_zmluva - ppc_para >= 0) ? '' : 'is-invalid'

    return (
      <div>
        <Card className="konstanty-max">
          <CardHeader className="text-white bg-primary">
            Konštanty{' '}
            { konstanty.loading && <FontAwesome name="spinner" spin />}
          </CardHeader>
          <CardBody className="dpp-overflow">
            <div className="konstanty-min">
              <CardTitle>Tieto údaje sú použité v ďalších výpočtoch</CardTitle>
              <CardSubtitle>Ich hodnoty sa väčšinou nemenia, ale v prípade potreby je možnosť zmeniť ich</CardSubtitle>
              <br/>
              <Row>
                <Col>
                  <Label for="vykon_max_tpv">Maximálny výkon do horúcovodu <span className="text-muted">[MW]</span></Label>
                  <div style={{ width: '120px' }}>
                    <NumInput loading={updating.vykon_max_tpv || loading} onBlur={this.handleBlur}
                              id={'vykon_max_tpv'} val={vykon_max_tpv} name={'TpV'}
                              update={this.props.update}
                    />
                    {/*<InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>TpV</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="vykon_max_tpv" className={invalid_vykon_max_tpv} value={vykon_max_tpv}
                             readOnly={stav || konstanty.loading || updating.vykon_max_tpv}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.vykon_max_tpv || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>*/}
                    <br/>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>TpZ</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="vykon_max_tpz" className={invalid_vykon_max_tpz} value={vykon_max_tpz}
                             readOnly={stav || konstanty.loading || updating.vykon_max_tpz}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.vykon_max_tpz || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                  </div>
                </Col>
                <Col>
                  <Label for="krivka_vychod">Koeficient vplyvu na vykurovaciu krivku</Label>
                  <div style={{ width: '150px' }}>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>Východ</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="krivka_vychod" className={invalid_krivka_vychod} value={krivka_vychod}
                             readOnly={stav || konstanty.loading || updating.krivka_vychod}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.krivka_vychod || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                    <br/>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>Západ</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="krivka_zapad" className={invalid_krivka_zapad} value={krivka_zapad}
                             readOnly={stav || konstanty.loading || updating.krivka_zapad}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.krivka_zapad || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                  </div>
                </Col>
                <Col>
                  <Label for="vyhrevnost_zp">Výhrevnosť zemného plynu</Label>
                  <div style={{ width: '180px' }}>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>Výhrevnosť</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="vyhrevnost_zp" className={invalid_vyhrevnost_zp} value={vyhrevnost_zp}
                             readOnly={stav || konstanty.loading || updating.vyhrevnost_zp}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.vyhrevnost_zp || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <Label for="ucinnost_tpv">Účinnosť kotlov <span className="text-muted">[%]</span></Label>
                  <div style={{ width: '120px' }}>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>TpV</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="ucinnost_tpv" className={invalid_ucinnost_tpv} value={ucinnost_tpv}
                             readOnly={stav || konstanty.loading || updating.ucinnost_tpv}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.ucinnost_tpv || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                    <br/>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>VhJ</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="ucinnost_vhj" className={invalid_ucinnost_vhj} value={ucinnost_vhj}
                             readOnly={stav || konstanty.loading || updating.ucinnost_vhj}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.ucinnost_vhj || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                    <br/>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>TpZ</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="ucinnost_tpz" className={invalid_ucinnost_tpz} value={ucinnost_tpz}
                             readOnly={stav || konstanty.loading || updating.ucinnost_tpz}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.ucinnost_tpz || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                  </div>
                </Col>
                <Col>
                  <Label for="dmm_tpv">
                    Denné maximálne množstvo plynu <span className="text-muted">[m<sup>3</sup>]</span>
                  </Label>
                  <div style={{ width: '180px' }}>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>TpV</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="dmm_tpv" className={invalid_dmm_tpv} value={dmm_tpv}
                             readOnly={stav || konstanty.loading || updating.dmm_tpv}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.dmm_tpv || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                    <br/>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>VhJ</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="dmm_vhj" className={invalid_dmm_vhj} value={dmm_vhj}
                             readOnly={stav || konstanty.loading || updating.dmm_vhj}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.dmm_vhj || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                    <br/>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>TpZ</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="dmm_tpz" className={invalid_dmm_tpz} value={dmm_tpz}
                             readOnly={stav || konstanty.loading || updating.dmm_tpz}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.dmm_tpz || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                  </div>
                </Col>
                <Col>
                  <Label>Ukazovateľ DMM</Label>
                  <div style={{ width: '200px' }}>
                    <Progress value="25" style={{ height: '30px' }}>35</Progress>
                    <br/>
                    <Progress value="15" style={{ height: '30px' }}>20</Progress>
                    <br/>
                    <Progress value="70" style={{ height: '30px' }}>835</Progress>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col xs={{ size: 'auto', offset: 8 }}>
                  <Label for="dmm_limit">Limit prekročenia DMM bez sankcie <span className="text-muted">[%]</span></Label>
                  <div style={{ width: '130px' }}>
                    <InputGroup>
                      <InputGroupAddon addonType={'prepend'}>
                        <InputGroupText>Limit</InputGroupText>
                      </InputGroupAddon>
                      <Input type={'text'} id="dmm_limit" className={invalid_dmm_limit} value={dmm_limit}
                             readOnly={stav || konstanty.loading || updating.dmm_limit}
                             onChange={this.handleChange} onBlur={this.handleBlur} />
                      { (updating.dmm_limit || konstanty.loading) &&
                      <InputGroupAddon addonType={'append'}>
                        <InputGroupText>
                          <FontAwesome name="spinner" spin />
                        </InputGroupText>
                      </InputGroupAddon> }
                    </InputGroup>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <div className="text-center">
                    <Label for="ppc_min">
                      Minimálna a maximálna dodávka tepla za hodinu <span className="text-muted">[MW]</span>
                    </Label>
                  </div>
                  <Row>
                    <Col>
                      <div style={{ width: '170px' }}>
                        <InputGroup>
                          <InputGroupAddon addonType={'prepend'}>
                            <InputGroupText>PPC Min</InputGroupText>
                          </InputGroupAddon>
                          <Input type={'text'} id="ppc_min" className={invalid_ppc_min} value={ppc_min}
                                 readOnly={stav || konstanty.loading || updating.ppc_min}
                                 onChange={this.handleChange} onBlur={this.handleBlur} />
                          { (updating.ppc_min || konstanty.loading) &&
                          <InputGroupAddon addonType={'append'}>
                            <InputGroupText>
                              <FontAwesome name="spinner" spin />
                            </InputGroupText>
                          </InputGroupAddon> }
                        </InputGroup>
                        <br/>
                        <InputGroup>
                          <InputGroupAddon addonType={'prepend'}>
                            <InputGroupText>Slovnaft Min</InputGroupText>
                          </InputGroupAddon>
                          <Input type={'text'} id="slovnaft_min" className={invalid_slovnaft_min} value={slovnaft_min}
                                 readOnly={stav || konstanty.loading || updating.slovnaft_min}
                                 onChange={this.handleChange} onBlur={this.handleBlur} />
                          { (updating.slovnaft_min || konstanty.loading) &&
                          <InputGroupAddon addonType={'append'}>
                            <InputGroupText>
                              <FontAwesome name="spinner" spin />
                            </InputGroupText>
                          </InputGroupAddon> }
                        </InputGroup>
                      </div>
                    </Col>
                    <Col>
                      <div style={{ width: '170px' }}>
                        <InputGroup>
                          <InputGroupAddon addonType={'prepend'}>
                            <InputGroupText>PPC Max</InputGroupText>
                          </InputGroupAddon>
                          <Input type={'text'} id="ppc_max" className={invalid_ppc_max} value={ppc_max}
                                 readOnly={stav || konstanty.loading || updating.ppc_max}
                                 onChange={this.handleChange} onBlur={this.handleBlur} />
                          { (updating.ppc_max || konstanty.loading) &&
                          <InputGroupAddon addonType={'append'}>
                            <InputGroupText>
                              <FontAwesome name="spinner" spin />
                            </InputGroupText>
                          </InputGroupAddon> }
                        </InputGroup>
                        <br/>
                        <InputGroup>
                          <InputGroupAddon addonType={'prepend'}>
                            <InputGroupText>Slovnaft Max</InputGroupText>
                          </InputGroupAddon>
                          <Input type={'text'} id="slovnaft_max" className={invalid_slovnaft_max} value={slovnaft_max}
                                 readOnly={stav || konstanty.loading || updating.slovnaft_max}
                                 onChange={this.handleChange} onBlur={this.handleBlur} />
                          { (updating.slovnaft_max || konstanty.loading) &&
                          <InputGroupAddon addonType={'append'}>
                            <InputGroupText>
                              <FontAwesome name="spinner" spin />
                            </InputGroupText>
                          </InputGroupAddon> }
                        </InputGroup>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col sm={'5'}>
                      <Label for="ppc_para">Hodinová dodávka pary</Label>
                      <div style={{ width: '150px' }}>
                        <InputGroup>
                          <InputGroupAddon addonType={'prepend'}>
                            <InputGroupText>PPC Para</InputGroupText>
                          </InputGroupAddon>
                          <Input type={'text'} id="ppc_para" className={invalid_ppc_para} value={ppc_para}
                                 readOnly={stav || konstanty.loading || updating.ppc_para}
                                 onChange={this.handleChange} onBlur={this.handleBlur} />
                          { (updating.ppc_para || konstanty.loading) &&
                          <InputGroupAddon addonType={'append'}>
                            <InputGroupText>
                              <FontAwesome name="spinner" spin />
                            </InputGroupText>
                          </InputGroupAddon> }
                        </InputGroup>
                      </div>
                    </Col>
                    <Col sm={'7'}>
                      <Label for="ppc_zmluva">Minimálne množstvo odberu tepla</Label>
                      <div style={{ width: '170px' }}>
                        <InputGroup>
                          <InputGroupAddon addonType={'prepend'}>
                            <InputGroupText>PPC Zmluva</InputGroupText>
                          </InputGroupAddon>
                          <Input type={'text'} id="ppc_zmluva" className={invalid_ppc_zmluva} value={ppc_zmluva}
                                 readOnly={stav || konstanty.loading || updating.ppc_zmluva}
                                 onChange={this.handleChange} onBlur={this.handleBlur} />
                          { (updating.ppc_zmluva || konstanty.loading) &&
                          <InputGroupAddon addonType={'append'}>
                            <InputGroupText>
                              <FontAwesome name="spinner" spin />
                            </InputGroupText>
                          </InputGroupAddon> }
                        </InputGroup>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <br/>
                      <Form inline>
                        <FormGroup>
                          <Label for="ppc_hv">Minimálna hodinová dodávka horúcej vody</Label>
                          &nbsp;
                          <Input type={'number'} id="ppc_hv" readOnly style={{ width: '65px' }}
                                 onChange={this.handleChange} className={invalid_ppc_hv}
                                 value={stav ? ppc_hv : String(ppc_zmluva - ppc_para)} />
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col xs={{ size: 'auto', offset: 6 }}>
                  <Form inline>
                    <Input type={'checkbox'} id="naplanovat-ppc-para"
                           checked={this.state.naplanovat} onChange={this.handleCheck} />
                    <Label for="naplanovat-ppc-para">
                      Naplánovať objednávku pary podľa hodinovej dodávky pary z PPC
                    </Label>
                  </Form>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  hlavny: state.hlavny,
  konstanty: state.konstanty,
  dodavka: state.dodavka,
  elektrina: state.elektrina
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  update: (e) => dispatch(updateKonstantyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Konstanty)