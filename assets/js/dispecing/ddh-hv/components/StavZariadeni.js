import React from 'react'
import {connect} from 'react-redux'
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardImg, CardText, CardBody, CardTitle, CardFooter, CardHeader,
  Form, FormGroup, Label, Input, Table, Badge, UncontrolledTooltip,
  Nav, NavItem, NavLink, TabContent, TabPane,
  Row, Col,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import classnames from 'classnames'

class StavZariadeni extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Stav zariadení</CardHeader>
        <CardBody>
          <Table bordered hover size="sm">
            <thead className="thead-light">
            <tr>
              <th>Zdroje</th>
              <th>Zariadenie</th>
              <th>Stav</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Tp východ</td>
              <td>K5</td>
              <td>V ODSTÁVKE</td>
            </tr>
            <tr>
              <td></td>
              <td>K6</td>
              <td>V PREVÁDZKE</td>
            </tr>
            <tr>
              <td></td>
              <td>TG1</td>
              <td>V ODSTÁVKE</td>
            </tr>

            <tr>
              <td>PPC</td>
              <td>TG3</td>
              <td>V PREVÁDZKE</td>
            </tr>

            <tr>
              <td>Vh juh</td>
              <td>HK3</td>
              <td>V ODSTÁVKE</td>
            </tr>
            <tr>
              <td></td>
              <td>HK4</td>
              <td>V ODSTÁVKE</td>
            </tr>

            <tr>
              <td>VS Slovnaft</td>
              <td>V1</td>
              <td>V PREVÁDZKE</td>
            </tr>
            <tr>
              <td></td>
              <td>V2</td>
              <td>V PREVÁDZKE</td>
            </tr>
            <tr>
              <td></td>
              <td>V3</td>
              <td>V PREVÁDZKE</td>
            </tr>
            <tr>
              <td></td>
              <td>V4</td>
              <td>V ODSTÁVKE</td>
            </tr>

            <tr>
              <td>OLO</td>
              <td>VS</td>
              <td>V PREVÁDZKE</td>
            </tr>

            <tr>
              <td>Tp západ</td>
              <td>HK1</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>HK3</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>K6</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>TG1</td>
              <td></td>
            </tr>

            <tr>
              <td>KGJ WEST</td>
              <td>MG1</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>MG2</td>
              <td></td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // update: (id, val, row, col) => dispatch(updatePoznamkyRequest(id, val, row, col))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StavZariadeni)