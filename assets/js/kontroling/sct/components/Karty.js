import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink,
    Card, CardBody, CardImg, CardTitle, CardText,
    Button, Row, Col, Table } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
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
        return (
            <Card>
                {/*<CardImg top src="../../build/static/economy3.jpg" />*/}
                <CardBody>
                    <Nav pills>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1') }}
                                href="#"
                            >
                                {this.props.dodavkatepla.loading && <FontAwesome name="spinner" spin />}{' '}
                                Skutočná dodávka tepla
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2') }}
                                href="#"
                            >
                                Zemný plyn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3') }}
                                href="#"
                            >
                                Náklady na palivo a nákup tepla
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4') }}
                                href="#"
                            >
                                Spoločné náklady na teplo a elektrinu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '5' })}
                                onClick={() => { this.toggle('5') }}
                                href="#"
                            >
                                Cena tepla
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '6' })}
                                onClick={() => { this.toggle('6') }}
                                href="#"
                            >
                                Konštanty
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '7' })}
                                onClick={() => { this.toggle('7') }}
                                href="#"
                            >
                                {this.props.vstupy.loading && <FontAwesome name="spinner" spin />}{' '}
                                Vstupy
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <br/>

                    { this.props.hlavny.initialized &&
                    <TabContent activeTab={ this.state.activeTab }>
                        <TabPane tabId="1">
                            { this.props.DodavkaTepla }
                        </TabPane>
                        <TabPane tabId="2">
                            <p>Zemný plyn fakturovaný</p>
                            <p>Zadávanie (rovnako ako v NCT)</p>
                            <p>Stĺpec "prekročenie dohodnutých množstiev"</p>
                        </TabPane>
                        <TabPane tabId="3">
                            <p>Oprávnené náklady na nákup zemného plynu</p>
                            <p>Výpočet palivového bonusu</p>
                            <p>Normatívne množstvá zemného plynu + priemerná ročná cena zemného plynu</p>
                            <p>Náklady na nákup tepla</p>
                            <p>Náklady na ťažký vykurovací olej</p>
                        </TabPane>
                        <TabPane tabId="4">
                            <p>Odroda od Roba (sap -> excel -> upload)</p>
                        </TabPane>
                        <TabPane tabId="5">
                            <p>Možnosť zmeny ceny v priebehu roka</p>
                        </TabPane>
                        <TabPane tabId="6">
                            <p>Normované straty podľa overenia sústav</p>
                        </TabPane>
                        <TabPane tabId="7">
                            { this.props.Vstupy }
                        </TabPane>
                    </TabContent> }
                </CardBody>
            </Card>
        )
    }
}

export default connect(
    (state) => ({
        dodavkatepla: state.dodavkatepla,
        hlavny: state.hlavny,
        vstupy: state.vstupy
    })
)(Karty)
