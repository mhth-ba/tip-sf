import React from 'react'
import {connect} from 'react-redux'

import {
  Row, Col, Card, CardHeader, CardBody, CardText, Table, Button, Input, Label,
  Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import {createVyluceneRequest} from '../../actions'

import DatePicker from 'react-datepicker'
import moment from 'moment'
moment.locale('sk')

class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      mp: 10000000,
      kategoria: 0,
      datum: moment().add(28, 'days'),
      poznamka: ''
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.handleChangeDatum = this.handleChangeDatum.bind(this)
    this.handleChangePoznamka = this.handleChangePoznamka.bind(this)
    this.handleVylucit = this.handleVylucit.bind(this)
  }

  miestoPristrojaFormatter(value) {
    return <a href='#' onClick={this.popup.bind(this, 1, '../../../../tip/zone_smao_historia-spotrieb-miesta-pristroja.php?id=' + value)}>{value}</a>
  }

  vyrobneCisloFormatter(value) {
    return <a href='#' onClick={this.popup.bind(this, 2, '../../../../tip/zone_smao_historia-spotrieb-meradla.php?id=' + value)}>{value}</a>
  }

  powerFormatter(value) {
    return Number(value).toFixed(1).replace('.', ',') + ' kW'
  }

  flowFormatter(value) {
    return Number(value).toFixed(1).replace('.', ',') + ' m3/h'
  }

  temperatureFormatter(value) {
    return Number(value).toFixed(2).replace('.', ',') + ' °C'
  }

  /**
   * Otvorí popup okno
   *
   * @param key {int} 1 = miesto prístroja, 2 = výrobné číslo (merač)
   * @param id {string} URL + ID
   * @param e {object} Event
   */
  popup(key, id, e) {

    e.preventDefault()

    const wA = screen.availWidth;
    const hA = screen.availHeight;
    let wP // width (šírka) popup
    let hP // height (výška) popup
    let tP // top popup
    let lP // left popup
    switch (key) {
      case 1: // história spotrieb miesta prístroja
        wP = 1200
        hP = hA - 90
        tP = 5
        lP = 5
        break;
      case 2: // história spotrieb meradla
        wP = 770
        hP = hA - 90
        tP = 5
        lP = 5
        break;
    }

    window
      .open(id, 'pop', 'height=' + hP + ',width=' + wP + ',top=' + tP + ',left=' + lP + ',menubar=no,resizeable=yes,scrollbars=yes,status=no,titlebar=no,toolbar=no')
      .focus()
  }

  toggleVylucitDialog(mp, kategoria, e) {
    this.setState({
      modal: !this.state.modal,
      mp,
      kategoria
    })
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleChangeDatum(date) {
    this.setState({
      datum: date
    })
  }

  handleChangePoznamka(e) {
    this.setState({
      poznamka: e.target.value
    })
  }

  handleVylucit() {

    const data = {
      mp: this.state.mp,
      kategoria: this.state.kategoria,
      datum: this.state.datum.format('YYYY-MM-DD'),
      poznamka: this.state.poznamka
    }

    this.props.vylucit(data)
    this.toggleModal()
  }

  render() {

    const editor = this.props.opravnenia.anm

    const polozky = this.props.polozky
    const kategoria = this.props.kategoria
    const farba = this.props.farba
    const kriteria = this.props.kriteria

    const loading = this.props.analyzy.loading

    return (
      <Row>
        <Col md={9}>
          <Card style={{ height: '230px' }}>
            <CardHeader className={polozky.length > 0 ? farba : 'bg-secondary text-white'}>
              Dáta spĺňajúce podmienky kontroly
              <span className="pull-right">{polozky.length} meračov</span>
            </CardHeader>
            <CardBody style={{ overflowY: 'scroll' }}>
              <Table size={'sm'} hover>
                <thead>
                <tr>
                  { editor && <th></th> }
                  <th>Modul</th>
                  <th>OM</th>
                  <th>OST</th>
                  <th>MP</th>
                  <th>Adresa</th>
                  <th>Odberateľ</th>
                  <th>Sériové číslo</th>
                  <th>Tarifa</th>
                  <th>Jednotka</th>
                  <th className="text-right">Výkon</th>
                  <th className="text-right">Prietok</th>
                  <th className="text-right">Výst. tepl.</th>
                  <th className="text-right">Vrat. tepl.</th>
                  <th className="text-center">&Delta;t</th>
                </tr>
                </thead>
                <tbody>
                { polozky.map(
                  (v, x) => (
                    <tr key={x} style={{ fontSize: '12px' }}>
                      { editor &&
                        <td>
                          <Button
                            size={'sm'}
                            onClick={this.toggleVylucitDialog.bind(this, v.device, kategoria)}
                          >
                            <FontAwesome name={'ban'} />
                          </Button>
                        </td>
                      }
                      <td>{v.modul}</td>
                      <td>{v.om}</td>
                      <td>{v.ost}</td>
                      <td>{this.miestoPristrojaFormatter(v.device)}</td>
                      <td>{v.adresa}</td>
                      <td>{v.odberatel}</td>
                      <td>{this.vyrobneCisloFormatter(v.vc)}</td>
                      <td>{v.tarifa}</td>
                      <td>{v.mj}</td>
                      <td className="text-right">{this.powerFormatter(v.power)}</td>
                      <td className="text-right">{this.flowFormatter(v.flow)}</td>
                      <td className="text-right">{this.temperatureFormatter(v.output)}</td>
                      <td className="text-right">{this.temperatureFormatter(v.return)}</td>
                      <td className="text-right">{this.temperatureFormatter(v.delta)}</td>
                    </tr>
                  )
                )}
                </tbody>
              </Table>

              { loading &&
                <p className="text-center">Načítavanie údajov ...</p>
              }

              <Modal isOpen={this.state.modal}>
                <ModalHeader>Vylúčenie z analýzy</ModalHeader>
                <ModalBody>
                  <Form>
                    <FormGroup row>
                      <Label for="modal-mp" md={4}>Miesto prístroja:</Label>
                      <Col md={8}>
                        <Input type={'text'} id="modal-mp" value={this.state.mp} readOnly />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="modal-kategoria" md={4}>Kategória:</Label>
                      <Col md={8}>
                        <Input type={'text'} id="modal-kategoria" value={this.state.kategoria} readOnly />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="modal-datum" md={4}>Do kedy:</Label>
                      <Col md={8}>
                        <DatePicker selected={this.state.datum} onChange={this.handleChangeDatum}
                                    className="form-control datum" id="modal-datum"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="modal-poznamka" md={4}>Poznámka:</Label>
                      <Col md={8}>
                        <Input type={'text'} id="modal-poznamka" maxLength={200} placeholder={'Dôvod vylúčenia ...'}
                               value={this.state.poznamka} onChange={this.handleChangePoznamka}
                        />
                      </Col>
                    </FormGroup>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color={'primary'} onClick={this.handleVylucit}>Uložiť</Button>&nbsp;
                  <Button color={'secondary'} onClick={this.toggleModal}>Zrušiť</Button>
                </ModalFooter>
              </Modal>

            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={{ height: '230px' }}>
            <CardHeader className="text-white bg-info">Definícia kritérií kontroly</CardHeader>
            <CardBody>
              <CardText className="text-muted">Nasledujúce podmienky musia byť splnené:</CardText>
              {
                kriteria.map(
                  (v, x) => (
                    <p key={x}><FontAwesome name={'check-square-o'} /> &nbsp; {v}</p>
                  )
                )
              }
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
  opravnenia: state.opravnenia,
  analyzy: state.analyzy
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  vylucit: (e) => dispatch(createVyluceneRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)