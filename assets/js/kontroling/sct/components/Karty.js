import React from 'react'
import {
    TabContent, TabPane, Nav, NavItem, NavLink,
  Card, CardHeader, CardBody, CardImg, CardTitle, CardText,
  Button, Row, Col, Table
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import ReactLoading from 'react-loading'
import classnames from 'classnames'
import { connect } from 'react-redux'

class Karty extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1'
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {

    const vypocet_buniek = this.props.vb.loading

    return (
      <div>
        { vypocet_buniek &&
          <ReactLoading type="spin" color="#51565d" delay={0} className="react-loader" />
        }
        <Card>
          <CardBody>
            {
              !this.props.hlavny.initialized &&
              <div>
                <CardTitle className="text-center">Výpočet skutočnej ceny tepla</CardTitle>
                <CardText>
                  Karty súvisiace s výpočtom ceny tepla sa zobrazia po načítaní alebo vytvorení hlavného záznamu
                </CardText>
              </div>
            }
            {
              this.props.hlavny.initialized &&
              <Nav pills className="card-header-tabs">
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1') }}
                    href="#"
                  >
                    {
                      (this.props.teplo.loading || this.props.elektrina.loading || this.props.klucovanie.loading)
                      && <FontAwesome name="spinner" spin />
                    }
                    {' '}
                    Skutočná dodávka tepla
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2') }}
                    href="#"
                  >
                    {
                      (this.props.plyn.loading)
                      && <FontAwesome name="spinner" spin />
                    }
                    {' '}
                    Fakturovaný zemný plyn
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3') }}
                    href="#"
                  >
                    {
                      (this.props.nm.loading || this.props.on.loading)
                      && <FontAwesome name="spinner" spin />
                    }
                    {' '}
                    Palivový bonus
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4') }}
                    href="#"
                  >
                    {
                      (this.props.nt.loading)
                      && <FontAwesome name="spinner" spin />
                    }
                    {' '}
                    Nakupované teplo
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '5' })}
                    onClick={() => { this.toggle('5') }}
                    href="#"
                  >
                    {
                      (this.props.sn.loading || this.props.rz.loading || this.props.ct.loading)
                      && <FontAwesome name="spinner" spin />
                    }
                    {' '}
                    Spoločné náklady na teplo a elektrinu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '6' })}
                    onClick={() => { this.toggle('6') }}
                    href="#"
                  >
                    {
                      (this.props.ct.loading)
                      && <FontAwesome name="spinner" spin />
                    }
                    {' '}
                    Cena tepla
                  </NavLink>
                </NavItem>
                {/*<NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '7' })}
                    onClick={() => { this.toggle('7') }}
                    href="#"
                  >
                    Konštanty
                  </NavLink>
                </NavItem>*/}
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '8' })}
                    onClick={() => { this.toggle('8') }}
                    href="#"
                  >
                    {this.props.vstupy.loading && <FontAwesome name="spinner" spin />}{' '}
                    Vstupy
                  </NavLink>
                </NavItem>
              </Nav>
            }
          </CardBody>
        </Card>

        <br/>

        { this.props.hlavny.initialized &&
        <TabContent activeTab={ this.state.activeTab }>
          <TabPane tabId="1">
            { this.props['SkutocnaDodavkaTepla'] }
          </TabPane>
          <TabPane tabId="2">
            { this.props['FakturovanyZemnyPlyn'] }
          </TabPane>
          <TabPane tabId="3">
            { this.props['PalivovyBonus'] }
          </TabPane>
          <TabPane tabId="4">
            { this.props['NakupovaneTeplo'] }
          </TabPane>
          <TabPane tabId="5">
            { this.props['SpolocneNakladyNaTeploAElektrinu'] }
          </TabPane>
          <TabPane tabId="6">
            { this.props['CenaTepla'] }
          </TabPane>
          {/*<TabPane tabId="7">
            <p>Normované straty podľa overenia sústav</p>
          </TabPane>*/}
          <TabPane tabId="8">
            { this.props['Vstupy'] }
          </TabPane>
        </TabContent> }
      </div>
    )
  }
}

export default connect(
  (state) => ({
    hlavny: state.hlavny,
    teplo: state.dodavkatepla,
    elektrina: state.vyrobaelektriny,
    klucovanie: state.delenienakladov,
    plyn: state.zemnyplyn,
    nm: state.normativnemnozstvo,
    on: state.opravnenenaklady,
    nt: state.nakuptepla,
    sn: state.skutocnenaklady,
    rz: state.regulovanazlozka,
    ct: state.cenatepla,
    vb: state.vypocetbuniek,
    vstupy: state.vstupy
  })
)(Karty)
