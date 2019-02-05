import React from 'react'
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
  Card, CardHeader, CardBody, CardImg, CardTitle, CardText,
  Button, Row, Col, Table
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'
import {connect} from 'react-redux'

import { toggleTab } from '../actions'

class Pohlad extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTab = this.toggleTab.bind(this)
  }

  toggleTab(tab) {
    this.props.toggleTab(tab)
  }

  render() {

    const init = this.props.hlavny.initialized

    return (
      <div>
        { init &&
          <div>

            <Card style={{ width: '190px' }}>
              <CardBody>
                <Nav pills className="card-header-tabs">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.props.userinterface.pohlad === '1' })}
                      onClick={() => { this.toggleTab('1') }}
                      href="#"
                    >
                      {
                        (this.props.hlavny.loading || this.props.hlavny.updating)
                        && <FontAwesome name="spinner" spin />
                      }
                      {' '}
                      Zmenené
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.props.userinterface.pohlad === '2' })}
                      onClick={() => { this.toggleTab('2') }}
                      href="#"
                    >
                      {
                        (this.props.hlavny.loading || this.props.hlavny.updating)
                        && <FontAwesome name="spinner" spin />
                      }
                      {' '}
                      Pôvodné
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>

            <br/>

            <TabContent activeTab={ this.props.userinterface.pohlad }>
              <TabPane tabId="1">
                <Row>
                  <Col>{ this.props['vstup_zmenene'] }</Col>
                </Row>
                <br/>
                <Row>
                  <Col>{ this.props['vystup_zmenene'] }</Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col>{ this.props['vstup_povodne'] }</Col>
                </Row>
                <br/>
                <Row>
                  <Col>{ this.props['vystup_povodne'] }</Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  hlavny: state.hlavny,
  userinterface: state.userinterface
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  toggleTab: (e) => dispatch(toggleTab(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pohlad)