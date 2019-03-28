import React from 'react'
import { Card, CardHeader, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import {connect} from 'react-redux'
import Routing from '../../../Components/Routing'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import {dateShort, dateTime, dateYearMonth} from '../../../utils/format'

import * as CONSTANTS from '../../../constants'
import * as CONFIGS from '../../../configs'

const dateTimeFormatter = ( cell, row ) => (
  dateTime(cell)
)

const userFormatter = ( userObject ) => {
  return userObject.fullname
}

const mainEntryFormatter = ( mainEntryObject ) => {
  const main = mainEntryObject

  return `${dateYearMonth(main.obdobie)} - ${main.druh.druh}`
}

const fileFormatter = ( filename, object ) => {

  const path = Routing.generate('dp_download')

  return <a href={`${path}/${object.id}`} color="success">{filename}</a>
}

import classnames from 'classnames';

class Aktivita extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: '1'
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

  render() {

    const options = {
      ...CONFIGS.REACT_BOOTSTRAP_TABLE,
      sizePerPage: 5
    }

    const aktivita = this.props.aktivita
    const init = this.props.hlavny.initialized

    const {
      upload_vsetky,
      udaje_vsetky,
      upload_hlavny,
      udaje_hlavny
    } = aktivita

    return (
      <Card>
        <CardHeader>
          <Nav tabs className="card-header-tabs">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1') }}
                href="#"
              >
                Celkový prehľad
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2') }}
                href="#"
              >
                Tento hlavný záznam
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent activeTab={ this.state.activeTab }>
            <TabPane tabId={'1'}>
              <p>Prehľad zadaných hodnôt a uploadov súborov vo všetkých záznamoch daňového priznania.</p>

              <h5>Import údajov a prílohy</h5>
              <BootstrapTable version={'4'}
                              data={upload_vsetky}
                              options={options}
                              bordered={false}
                              striped
                              condensed
                              pagination
              >
                <TableHeaderColumn dataField={'id'} isKey hidden>ID</TableHeaderColumn>
                <TableHeaderColumn dataField={'datum'} width={'40px'}
                                   dataFormat={dateTimeFormatter} dataSort>
                  Dátum
                </TableHeaderColumn>
                <TableHeaderColumn dataField={'nahral'} width={'40px'}
                                   dataFormat={userFormatter} dataSort>
                  Používateľ
                </TableHeaderColumn>
                <TableHeaderColumn dataField={'hlavny'} width={'40px'}
                                   dataFormat={mainEntryFormatter} dataSort>
                  Hlavný záznam
                </TableHeaderColumn>
                <TableHeaderColumn dataField={'original'} formatExtraData width={'40px'}
                                   dataFormat={fileFormatter} dataSort>
                  Súbor
                </TableHeaderColumn>
              </BootstrapTable>

              <br/><br/>

              <h5>Vytvorené, zmenené a vymazané doklady</h5>
              <BootstrapTable version={'4'}
                              data={udaje_vsetky}
                              options={options}
                              bordered={false}
                              striped
                              condensed
                              pagination
              >
                <TableHeaderColumn dataField={'id'} isKey hidden>ID</TableHeaderColumn>
                <TableHeaderColumn dataField={'vytvorene'} width={'30px'}
                                   dataFormat={dateTimeFormatter} dataSort>
                  Dátum
                </TableHeaderColumn>
                <TableHeaderColumn dataField={'pouzivatel'} width={'20px'}
                                   dataFormat={userFormatter} dataSort>
                  Používateľ
                </TableHeaderColumn>
                <TableHeaderColumn dataField={'hlavny'} width={'25px'}
                                   dataFormat={mainEntryFormatter} dataSort>
                  Hlavný záznam
                </TableHeaderColumn>
                <TableHeaderColumn dataField={'tabulka'} width={'20px'} dataSort>Tabuľka</TableHeaderColumn>
                <TableHeaderColumn dataField={'stlpec'} width={'15px'} dataSort>Stĺpec</TableHeaderColumn>
                <TableHeaderColumn dataField={'hodnota'} width={'30px'} dataSort>Hodnota</TableHeaderColumn>
              </BootstrapTable>

              <br/>
            </TabPane>
            <TabPane tabId={'2'}>
              <p>Prehľad zadaných hodnôt a uploadov súborov k aktuálne otvorenému záznamu daňového priznania.</p>

              { !init ?
                <p>Zobrazí sa po otvorení konkrétneho zdaňovacieho obdobia.</p>
                :
                <div>
                  <h5>Import údajov a prílohy</h5>
                  <BootstrapTable version={'4'}
                                  data={upload_hlavny}
                                  options={options}
                                  bordered={false}
                                  striped
                                  condensed
                                  pagination
                  >
                    <TableHeaderColumn dataField={'id'} isKey hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField={'datum'} width={'40px'}
                                       dataFormat={dateTimeFormatter} dataSort>
                      Dátum
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField={'nahral'} width={'40px'}
                                       dataFormat={userFormatter} dataSort>
                      Používateľ
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField={'hlavny'} width={'40px'}
                                       dataFormat={mainEntryFormatter} dataSort>
                      Hlavný záznam
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField={'original'} formatExtraData width={'40px'}
                                       dataFormat={fileFormatter} dataSort>
                      Súbor
                    </TableHeaderColumn>
                  </BootstrapTable>

                  <br/><br/>

                  <h5>Vytvorené, zmenené a vymazané doklady</h5>
                  <BootstrapTable version={'4'}
                                  data={udaje_hlavny}
                                  options={options}
                                  bordered={false}
                                  striped
                                  condensed
                                  pagination
                  >
                    <TableHeaderColumn dataField={'id'} isKey hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField={'vytvorene'} width={'30px'}
                                       dataFormat={dateTimeFormatter} dataSort>
                      Dátum
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField={'pouzivatel'} width={'20px'}
                                       dataFormat={userFormatter} dataSort>
                      Používateľ
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField={'hlavny'} width={'25px'}
                                       dataFormat={mainEntryFormatter} dataSort>
                      Hlavný záznam
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField={'tabulka'} width={'20px'} dataSort>Tabuľka</TableHeaderColumn>
                    <TableHeaderColumn dataField={'stlpec'} width={'15px'} dataSort>Stĺpec</TableHeaderColumn>
                    <TableHeaderColumn dataField={'hodnota'} width={'30px'} dataSort>Hodnota</TableHeaderColumn>
                  </BootstrapTable>

                  <br/>
                </div>
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
  aktivita: state.aktivita
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aktivita)