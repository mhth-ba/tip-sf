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

import {
  fetchPristupyRequest,
  createPristupRequest,
  updatePristupRequest,
  deletePristupRequest
} from '../actions'

class Sprava extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: '1',

      pristupGUI: false,
      pouzivatel: '',
      rola: '',

      deleting_id: null
    }

    this.toggle = this.toggle.bind(this)

    this.togglePristupGUI = this.togglePristupGUI.bind(this)
    this.handleSelectPouzivatel = this.handleSelectPouzivatel.bind(this)
    this.handleSelectRola = this.handleSelectRola.bind(this)
    this.handleCreatePristup = this.handleCreatePristup.bind(this)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  togglePristupGUI() {
    this.setState({
      pristupGUI: !this.state.pristupGUI
    })
  }

  handleSelectPouzivatel(e) {
    this.setState({
      pouzivatel: e.target.value
    })
  }

  handleSelectRola(e) {
    this.setState({
      rola: e.target.value
    })
  }

  handleCreatePristup() {

    const data = {
      user: this.state.pouzivatel,
      role: this.state.rola
    }

    this.props.createPristupRequest(data)

    this.setState({
      pristupGUI: false,
      pouzivatel: '',
      rola: '',
      pristupVALID: false
    })
  }

  handleUpdatePristup(id, e) {
    const data = {
      id,
      roles: e.target.value
    }

    this.props.updatePristupRequest(data)
  }

  handleDeletePristup(id, e) {
    this.setState({
      deleting_id: id
    })

    this.props.deletePristupRequest({id})
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (prevProps.opravnenia !== this.props.opravnenia
      || prevProps.moznosti !== this.props.moznosti) {

      if (this.props.moznosti.initialized && this.props.opravnenia.mng) {
        this.props.fetchPristupyRequest()
      }
    }
  }

  render() {

    const hlavny = this.props.hlavny
    const opravnenia = this.props.opravnenia
    const moznosti = this.props.moznosti

    const pristupy = this.props.pristupy

    return (
      <Card>
        <CardHeader>
          {/*Karta správy prístupov, prehľadu aktivity užívateľov, konfigurácie zdrojov*/}
          <Nav tabs className="card-header-tabs">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1') }}
                href="#"
              >
                Prístupy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2') }}
                href="#"
              >
                Aktivita
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={ this.state.activeTab }>
            <TabPane tabId={'1'}>
              { pristupy.initialized ?

                opravnenia.admin ?
                  <div>
                    <p>Prideliť prístup, zmeniť úroveň prístupu pridelenú používateľovi, odobrať prístup.</p>
                    <br/>
                    <Row>
                      <Col lg={12} xl={8} style={{ overflowY: 'auto', height: '250px' }}>
                        { !pristupy.data.length &&
                          <div className="text-muted font-italic">
                            Na tomto mieste sa zobrazia pridelené oprávnenia akonáhle jedno vytvoríte.
                            <br/>
                            Použite tlačidlo <strong>prideliť prístup</strong>.
                          </div>
                        }
                        <Table hover style={{ maxWidth: '520px' }}>
                          <tbody>
                          { pristupy.data.map((p, ix) => (
                            <tr key={ix}>
                              <td className="text-left align-middle">
                                <span>{p.users.fullname}</span>
                              </td>
                              <td className="text-right align-middle">
                                <Input type={'select'} defaultValue={p.roles.id}
                                       disabled={pristupy.updating || pristupy.deleting}
                                       onChange={this.handleUpdatePristup.bind(this, p.id)}
                                >
                                  { moznosti.role.map((r, ix) => (
                                    <option key={ix} value={r.id}>{r.name}</option>
                                  )) }
                                </Input>
                              </td>
                              <td className="text-center align-middle">
                                <Button disabled={pristupy.updating || pristupy.deleting}
                                        onClick={this.handleDeletePristup.bind(this, p.id)}
                                >
                                  { pristupy.deleting && this.state.deleting_id === p.id ?
                                    <FontAwesome name={'spinner'} spin />
                                    :
                                    <span>X</span>
                                  }
                                </Button>
                              </td>
                            </tr>
                          )) }
                          </tbody>
                        </Table>
                      </Col>

                      <Col lg={12} xl={4}>
                        <Table size={'sm'}>
                          <tbody>
                          { moznosti.role.map((r, ix) => (
                            <tr key={ix}>
                              <td>{r.name}</td>
                              <td className="text-muted font-italic">{r.description}</td>
                            </tr>
                          )) }
                          </tbody>
                        </Table>
                      </Col>
                    </Row>

                    { !this.state.pristupGUI ?
                      <div>
                        <Button color={'success'}
                                disabled={pristupy.creating || pristupy.updating || pristupy.deleting}
                                onClick={ this.togglePristupGUI }
                        >
                          { pristupy.creating ?
                            <FontAwesome name={'spinner'} spin />
                            :
                            <FontAwesome name={'plus'} />
                          }
                          &nbsp;
                          Prideliť prístup
                        </Button>
                      </div>
                      :
                      <div>
                        <hr/>
                        <Form inline>
                          <FormGroup>
                            <Input type={'select'} disabled={pristupy.updating}
                                   onChange={this.handleSelectPouzivatel} value={this.state.pouzivatel}
                            >
                              <option value="">- Používateľ -</option>
                              { moznosti.pouzivatelia
                                .filter(x => !pristupy.data.find(y => y.users.id === x.id))
                                .map((p, ix) => (
                                <option key={ix} value={p.id}>{p.fullname}</option>
                              )) }
                            </Input>
                            &nbsp;
                            <Input type={'select'} disabled={pristupy.updating}
                                   onChange={this.handleSelectRola} value={this.state.rola}
                            >
                              <option value="">- Úroveň prístupu -</option>
                              { moznosti.role.map((r, ix) => (
                                <option key={ix} value={r.id}>{r.name}</option>
                              )) }
                            </Input>
                            &nbsp;
                            <Button color={'primary'}
                                    disabled={pristupy.creating || (this.state.pouzivatel === '' || this.state.rola === '')}
                                    onClick={this.handleCreatePristup}
                            >
                              { pristupy.creating ?
                                <FontAwesome name={'spinner'} spin/>
                                :
                                <span>OK</span>
                              }
                            </Button>
                            &nbsp;
                            <Button disabled={pristupy.creating} onClick={this.togglePristupGUI}>Zrušiť</Button>
                          </FormGroup>
                        </Form>
                      </div>
                    }

                  </div>

                  :

                  <div>
                    <p>Pridelené úrovne prístupu používateľom tejto aplikácie</p>
                    <br/>
                    <Row>
                      <Col lg={12} xl={8}>
                        <Table hover style={{ maxWidth: '400px' }}>
                          <thead>
                          <tr>
                            <th className="text-left">Používateľ</th>
                            <th className="text-right">Úroveň prístupu</th>
                          </tr>
                          </thead>
                          <tbody>
                          { pristupy.data.map((p, ix) => (
                            <tr key={ix}>
                              <td className="text-left">{p.users.fullname}</td>
                              <td className="text-right">{p.roles.name}</td>
                            </tr>
                          )) }
                          </tbody>
                        </Table>
                      </Col>

                      <Col lg={12} xl={4}>
                        <Table size={'sm'}>
                          <tbody>
                          { moznosti.role.map((r, ix) => (
                            <tr key={ix}>
                              <td>{r.name}</td>
                              <td className="text-muted font-italic">{r.description}</td>
                            </tr>
                          )) }
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </div>

                :

                <div>
                  { pristupy.loading ?
                    <FontAwesome name={'spinner'} size={'2x'} spin/>
                    :
                    <span>...</span>
                  }
                </div>
              }
            </TabPane>
            <TabPane tabId={'2'}>
            { opravnenia.mng ?
              hlavny.initialized ?
                <div>
                  Prehľad histórie zadaných hodnôt k aktuálne otvorenému záznamu ceny tepla...
                  <br/><br/>
                  Zobraziť prehľad zadaných hodnôt vo <u>všetkých</u> záznamoch ceny tepla ?
                </div>
                :
                <div>
                  Prehľad zadaných hodnôt užívateľmi vo všetkých záznamoch ceny tepla
                </div>
              :
              <span>...</span>
            }
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  hlavny: state.hlavny,
  opravnenia: state.opravnenia,
  pristupy: state.pristupy,
  moznosti: state.moznosti,
  sprava: state.sprava
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  fetchPristupyRequest: () => dispatch(fetchPristupyRequest()),
  createPristupRequest: (e) => dispatch(createPristupRequest(e)),
  updatePristupRequest: (e) => dispatch(updatePristupRequest(e)),
  deletePristupRequest: (e) => dispatch(deletePristupRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sprava)