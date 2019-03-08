import React from 'react'
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
  Card, CardHeader, CardBody, CardImg, CardTitle, CardText,
  Button, Row, Col, Table,
  Form, FormGroup, Label, Input,
  UncontrolledTooltip
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'
import {connect} from 'react-redux'

import { toggleTab, toggleFilter } from '../actions'

class Pohlad extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTab = this.toggleTab.bind(this)
    this.toggleFilter = this.toggleFilter.bind(this)
  }

  toggleTab(tab) {
    this.props.toggleTab(tab)
  }

  toggleFilter(e) {
    this.props.toggleFilter(e.target.value)
  }

  render() {

    const init = this.props.hlavny.initialized

    return (
      <div>
        { init &&
          <div>

            <Card style={{ width: '740px' }}>
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

                <br/><br/>

                <Form inline onChange={this.toggleFilter}>
                  <FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type={'radio'} name={'filter'} value={1} defaultChecked />&nbsp;
                        <span>Všetky doklady</span>
                        &nbsp;&nbsp;
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type={'radio'} name={'filter'} value={2} />&nbsp;
                        <span className={'bg-yellow legend'} id="filter-2">Import - zmenený doklad</span>
                        <UncontrolledTooltip placement={'bottom'} target="filter-2">
                          Doklady, ktoré sú importované z excelu a dodatočne zmenené
                        </UncontrolledTooltip>
                        &nbsp;&nbsp;
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type={'radio'} name={'filter'} value={3} />&nbsp;
                        <span className={'bg-lime legend'} id="filter-3">Používateľ - pridaný doklad</span>
                        <UncontrolledTooltip placement={'bottom'} target="filter-3">
                          Doklady, ktoré pridal používateľ v aplikácií
                        </UncontrolledTooltip>
                        &nbsp;&nbsp;
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type={'radio'} name={'filter'} value={4} />&nbsp;
                        <span className={'bg-azure legend'} id="filter-4">Používateľ - zmenený doklad</span>
                        <UncontrolledTooltip placement={'bottom'} target="filter-4">
                          Doklady, ktoré pridal používateľ a dodatočne boli ešte zmenené
                        </UncontrolledTooltip>
                        &nbsp;&nbsp;
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Form>
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
  toggleTab: (e) => dispatch(toggleTab(e)),
  toggleFilter: (e) => dispatch(toggleFilter(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pohlad)