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

class OdstavkyOSTNad24Hod extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Odstávky OST nad 24 hod.</CardHeader>
        <CardBody>
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
)(OdstavkyOSTNad24Hod)