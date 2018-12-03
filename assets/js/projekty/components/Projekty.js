import React from 'react'
import classnames from 'classnames'
import {connect} from 'react-redux'

import {
  Row, Col, Nav, NavItem, NavLink, TabPane, TabContent,
  Progress, Label, Form, FormGroup,
  Card, CardHeader, CardBody, CardFooter, CardTitle, CardSubtitle, CardText
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import { fetchProjektyRequest } from '../actions'
import { dateShort } from '../../utils/format'

class Projekty extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  componentDidMount() {
    this.props.loadProjekty()
  }

  render() {

    const projekty = this.props.projekty.projekty
    const terminy = this.props.projekty.terminy
    const ciastkove = this.props.projekty.ciastkove
    const zmenove = this.props.projekty.zmenove

    return (
      <div>
        <h3>
          <FontAwesome name={'folder-open'} />
          &nbsp;
          Projekty
        </h3>
        <br/>
        {/*<div>Časová os všetkých projektov</div>
        <br/>*/}
        <Row>
          <Col sm={12} md={4} lg={3}>
            <Card body>
              <Nav pills vertical>
                { projekty.map(
                  (item, idx) => (
                    <NavItem key={idx}>
                      <NavLink className={classnames({ active: this.state.activeTab === idx })}
                               onClick={() => { this.toggle(idx) }} href='#'
                      >
                        { item.nazov }
                      </NavLink>
                    </NavItem>
                  )
                )}
              </Nav>
            </Card>
          </Col>

          <Col sm={12} md={8} lg={9}>
            <TabContent activeTab={ this.state.activeTab }>
              { projekty.map(
                (projekt, idx) => (
                  <TabPane tabId={idx} key={idx}>
                    <Row>
                      <Col>
                        <Card body>
                          {/* NAZOV PROJEKTU */}
                          <CardTitle>{ projekt.nazov }</CardTitle>
                          <br/>
                          {/* POPIS PROJEKTU */}
                          <div style={{ whiteSpace: 'pre-line' }}>{ projekt.popis }</div>
                          <br/>
                          <Row>
                            <Col>
                              {/* DATUM ZADANIA PROJEKTU */}
                              <div>
                                <span className='text-muted'>
                                  <FontAwesome name={'calendar-plus-o'} />&nbsp;
                                  Dátum zadania:
                                </span>
                                &nbsp;
                                <span>{ dateShort(projekt.zadane) }</span>
                              </div>
                              {/* SKUTOCNY DATUM DOKONCENIA PROJEKTU */}
                              <div>
                                <span className='text-muted'>
                                  <FontAwesome name={'calendar-check-o'} />&nbsp;
                                  Dátum dokončenia:
                                </span>
                                &nbsp;
                                <span>{ dateShort(projekt.dokoncene) }</span>
                              </div>
                            </Col>
                            {/* OCAKAVANY TERMIN DOKONCENIA PROJEKTU */}
                            <Col>
                              <span className='text-muted'>
                                <FontAwesome name={'calendar-o'} />&nbsp;
                                Očakávaný termín:
                              </span>
                              &nbsp;
                              <span>{ dateShort(projekt.termin) }</span>
                            </Col>
                            <Col>
                              {/* MENO ZIADATELA */}
                              <div>
                                <span className='text-muted'>
                                  <FontAwesome name={'user'} />&nbsp;
                                  Žiadateľ:
                                </span>
                                &nbsp;
                                <span>{ projekt.ziadatel }</span>
                              </div>
                              {/* MENA VSETKYCH ZUCASTNENYCH PRACOVNIKOV NA PROJEKTE */}
                              <div>
                                <span className='text-muted'>
                                  <FontAwesome name={'users'} />&nbsp;
                                  Zúčastnení:
                                </span>
                                &nbsp;
                                <span>{ projekt.zucastneni }</span>
                              </div>
                            </Col>
                          </Row>
                          <br/>
                          {/* POSUNY TERMINOV A ZDOVODNENIA */}
                          { terminy
                            .filter(x => x.projekt.id === projekt.id)
                            .map(
                              (termin, idx) => (
                                <div key={idx}>
                                  <Row>
                                    <Col>
                                      <div>
                                        <span className='text-muted'>Posun termínu:</span>
                                        &nbsp;
                                        <span>{ dateShort(termin.datum) }</span>
                                      </div>
                                      <div>
                                        <span className='text-muted'>Dôvod:</span>
                                        &nbsp;
                                        <span>{ termin.dovod }</span>
                                      </div>
                                    </Col>
                                  </Row>
                                  <br/>
                                </div>
                              )
                            )
                          }
                          <br/>
                          <Row>
                            {/* CELKOVY PROGRESS BAR PERCENTUALNEHO PLNENIA PROJEKTU */}
                            <Col>
                              { projekt.plnenie < 100 ?
                                <Progress style={{ height: '25px' }}
                                          animated
                                          value={projekt.plnenie}
                                          color={'info'}
                                >
                                  { projekt.plnenie }%
                                </Progress>
                                :
                                <Progress style={{ height: '25px' }}
                                          value={projekt.plnenie}
                                          color={'success'}
                                >
                                  { projekt.plnenie }%
                                </Progress>
                              }
                            </Col>
                          </Row>
                        </Card>

                        <br/>

                        {/* CIASTKOVE ULOHY, Z KTORYCH SA CELY PROJEKT SKLADA, PODROBNE */}
                        <Card body>
                          <CardTitle>
                            Čiastkové úlohy
                            &nbsp;
                            <span className='text-muted'>- počas projektu</span>
                          </CardTitle>
                          <br/>
                          { ciastkove
                            .filter(x => x.projekt.id === projekt.id)
                            .map(
                            (ciastkova, idx) => (
                              <div key={idx}>
                                <Row>
                                  <Col md={3}>
                                    <h6>{ ciastkova.nazov }</h6>
                                    { ciastkova.zadane &&
                                      <div>
                                        <span className='text-muted'>
                                          <FontAwesome name={'calendar-plus-o'} />&nbsp;
                                          Zadané:
                                        </span>&nbsp;
                                        { dateShort(ciastkova.zadane) }
                                      </div>
                                    }
                                    { ciastkova.dokoncene &&
                                      <div>
                                        <span className='text-muted'>
                                          <FontAwesome name={'calendar-check-o'} />&nbsp;
                                          Dokončené:
                                        </span>&nbsp;
                                        { dateShort(ciastkova.dokoncene) }
                                      </div>
                                    }
                                    { ciastkova.cas &&
                                      <div>
                                        <span className='text-muted'>
                                          <FontAwesome name={'clock-o'} />&nbsp;
                                          Čas:
                                        </span>&nbsp;
                                        { ciastkova.cas }
                                      </div>
                                    }
                                    <div>
                                      { ciastkova.plnenie < 100 ?
                                        ciastkova.stav.id === 1 ?
                                          <span className='text-primary'>
                                            <FontAwesome name={'dot-circle-o'} />&nbsp;
                                            { ciastkova.stav.stav }
                                            </span>
                                          :
                                          <span className='text-info'>
                                            <FontAwesome name={'flag'} />&nbsp;
                                            { ciastkova.stav.stav }
                                          </span>
                                        :
                                        <span>{''}</span>
                                      }
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <p style={{ whiteSpace: 'pre-line' }}>{ ciastkova.popis }</p>
                                  </Col>
                                  <Col md={3} className='align-self-center'>
                                    { ciastkova.plnenie < 100 ?
                                      <Progress value={ciastkova.plnenie} animated />
                                      :
                                      <Progress value={ciastkova.plnenie} color={'success'} />
                                    }
                                  </Col>
                                </Row>
                                <hr/>
                              </div>
                            )
                          )}
                        </Card>

                        <br/>

                        {/* ZMENOVE POZIADAVKY PO DOKONCENI PROJEKTU */}
                        <Card body>
                          <CardTitle>
                            Zmenové požiadavky
                            &nbsp;
                            <span className='text-muted'>- po dokončení projektu</span>
                          </CardTitle>
                          <br/>
                          { zmenove
                            .filter(x => x.projekt.id === projekt.id)
                            .map(
                              (zmenova, idx) => (
                                <div key={idx}>
                                  <Row>
                                    <Col md={3}>
                                      <h6>{ zmenova.nazov }</h6>
                                      { zmenova.ziadatel &&
                                        <div>
                                          <span className='text-muted'>
                                            <FontAwesome name={'user'}/>&nbsp;
                                            Žiadateľ:
                                          </span>&nbsp;
                                          { zmenova.ziadatel }
                                        </div>
                                      }
                                      { zmenova.zadane &&
                                        <div>
                                            <span className='text-muted'>
                                              <FontAwesome name={'calendar-plus-o'}/>&nbsp;
                                              Zadané:
                                            </span>&nbsp;
                                            { dateShort(zmenova.zadane) }
                                        </div>
                                      }
                                      { zmenova.termin &&
                                        <div>
                                          <span className='text-muted'>
                                            <FontAwesome name={'calendar'}/>&nbsp;
                                            Termín:
                                          </span>&nbsp;
                                          { dateShort(zmenova.termin) }
                                        </div>
                                      }
                                      { zmenova.cas &&
                                        <div>
                                          <span className='text-muted'>
                                            <FontAwesome name={'clock-o'} />&nbsp;
                                            Čas:
                                          </span>&nbsp;
                                          { zmenova.cas }
                                        </div>
                                      }
                                      <div>
                                        { zmenova.stav.id === 1 &&
                                          <span className='text-primary'>
                                            <FontAwesome name={'dot-circle-o'}/>&nbsp;
                                            {zmenova.stav.stav}
                                          </span>
                                        }
                                        { zmenova.stav.id === 2 &&
                                          <span className='text-info'>
                                            <FontAwesome name={'flag'} />&nbsp;
                                            {zmenova.stav.stav}
                                          </span>
                                        }
                                        { zmenova.stav.id === 3 &&
                                          <span className='text-success'>
                                            <FontAwesome name={'check-square-o'} />&nbsp;
                                            {zmenova.stav.stav}
                                          </span>
                                        }
                                      </div>
                                    </Col>
                                    <Col md={6}>
                                      <p style={{ whiteSpace: 'pre-line' }}>{ zmenova.popis }</p>
                                    </Col>
                                    <Col md={3} className='align-self-center'>
                                      { zmenova.plnenie < 100 ?
                                        <Progress value={ zmenova.plnenie } animated />
                                        :
                                        <Progress value={ zmenova.plnenie } color={'success'} />
                                      }
                                    </Col>
                                  </Row>
                                  <hr/>
                                </div>
                              )
                            )
                          }
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                )
              )}
            </TabContent>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  projekty: state.projekty
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadProjekty: () => dispatch(fetchProjektyRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projekty)