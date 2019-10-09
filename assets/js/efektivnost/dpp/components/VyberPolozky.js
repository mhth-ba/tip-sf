import React from 'react'
import { connect } from 'react-redux'
import {
  Card, CardHeader, CardBody, CardText,
  Form, FormGroup, Badge,
  Input,
  Button,
  Row, Col,
  Table
} from 'reactstrap'
import {date, dateTime, dateYearDayMonthDayname} from '../../../utils/format'
import FontAwesome from 'react-fontawesome'

import Routing from '../../../Components/Routing'

import {
  fetchOpravneniaRequest,
  fetchVyberPolozkyRequest,
  loadMainEntryRequest
} from '../actions'

import Vstupy from './Vstupy'

import moment from 'moment'
moment.locale('sk')

const Polozka = ({id, den}) => (
  <option value={id}
          data-den={ den }
  >{ dateYearDayMonthDayname(den) }</option>
)

class VyberPolozky extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validOption: false,
      id: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleChange(e) {
    this.setState({
      validOption: e.target.value !== '',
      id: e.target.value
    })
  }

  handleLoad() {
    const id = this.state.id

    this.props.loadMainEntryRequest(id)
  }

  componentDidMount() {
    this.props.fetchOpravneniaRequest()
    this.props.fetchVyberPolozkyRequest()
  }

  render() {
    const opravnenia = this.props.opravnenia
    const vyberpolozky = this.props.vyberpolozky
    const hlavny = this.props.hlavny

    const path = Routing.generate('dpp_download')

    return (
      <Row className="vyber-polozky-max">
        <Col md={6} sm={12}>
          <Card>
            <CardHeader className="text-white bg-secondary">Načítať denný plán prevádzky</CardHeader>
            <CardBody>
              <Form inline>
                <FormGroup>
                  <Input type={'select'} onChange={this.handleChange}>
                    { vyberpolozky.loading && <option>- Načítavanie položiek -</option> }
                    { !vyberpolozky.loading && <option value="" disabled={this.state.validOption}>- Vyberte položku -</option> }
                    { vyberpolozky.polozky.map(polozka => <Polozka key={polozka.id} {...polozka} />) }
                  </Input>
                  &nbsp;
                  <Button color="primary"
                          disabled={vyberpolozky.loading || hlavny.loading || hlavny.uploading || !this.state.validOption}
                          onClick={this.handleLoad}
                  >
                    { vyberpolozky.loading || hlavny.loading || hlavny.uploading ?
                      <FontAwesome name="spinner" spin /> : <FontAwesome name="folder-open" /> }
                    {' '}
                    Načítať
                  </Button>
                </FormGroup>
              </Form>

              <br/><br/>

              { hlavny.initialized &&
                <div>

                  <Table>
                    <tbody>
                    <tr>
                      <th>Dátum:</th>
                      <td>{ date(hlavny.den) }</td>
                    </tr>
                    <tr>
                      <th>Pôvodný súbor:<br/><span className="small">XML</span></th>
                      <td className="align-middle">
                        <Button href={`${path}/${hlavny.upload.dpp.id}`} color="success" role="link">
                          { hlavny.upload.dpp.original }
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th>Nahral používateľ:</th>
                      <td>
                        <span>{ hlavny.vytvoril.fullname }</span>
                        <br/>
                        <span className="small text-muted">{ dateTime(hlavny.datum) }</span>
                      </td>
                    </tr>
                    </tbody>
                  </Table>

                </div>
              }

                {/*<Form inline>
                  <FormGroup>
                    <Input type={'text'} style={{width: '168px'}}/>
                    &nbsp;
                    <Button color="success">
                      <FontAwesome name="plus-circle"/>{' '}
                      Vytvoriť
                    </Button>
                  </FormGroup>
                </Form>
                <br/>*/}
              {/*<CardText>
              <span className="small text-muted">
                Hviezdička pred dátumom znamená, že plán ešte nebol schválený.
              </span>
              </CardText>*/}
            </CardBody>
          </Card>
        </Col>

        { opravnenia.editor &&
          <Col md={6} sm={12}>
            <Vstupy/>
          </Col>
        }

      </Row>
    )
  }
}

export default connect(
  (state) => ({
    opravnenia: state.opravnenia,
    vyberpolozky: state.vyberpolozky,
    hlavny: state.hlavny
  }),
  {
    fetchOpravneniaRequest,
    fetchVyberPolozkyRequest,
    loadMainEntryRequest
  }
)(VyberPolozky)