import React from 'react'
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'

class Help extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      help: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      help: !this.state.help
    })
  }

  render() {
    return (
      <div>
        <Button color={'primary'} onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.help} toggle={this.toggle} className={this.props.className} size={this.props.size}>
          <ModalHeader toggle={this.toggle}>{this.props.modalTitle}</ModalHeader>
          <ModalBody>{this.props.modalBody}</ModalBody>
          <ModalFooter>
            <Button color={'secondary'} onClick={this.toggle}>Zavrieť</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Help