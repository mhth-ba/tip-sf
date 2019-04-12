import React from 'react'
import {connect} from 'react-redux'

import {
  Card, CardHeader, CardBody, CardFooter,
  Form, FormGroup, Label, Input, Button
} from 'reactstrap'
import ReactLoading from 'react-loading'

import Swal from 'sweetalert2'
import withReactComponent from 'sweetalert2-react-content'

import {createHlavnyRequest} from '../actions'

class VytvoritHlavny extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      druh: 1,
      rok: null,
      mesiac: null
    }

    this.handleDruh = this.handleDruh.bind(this)
    this.handleRok = this.handleRok.bind(this)
    this.handleMesiac = this.handleMesiac.bind(this)

    this.handleCreate = this.handleCreate.bind(this)
  }

  handleDruh(e) {
    this.setState({
      druh: e.target.value
    })
  }

  handleRok(e) {
    this.setState({
      rok: e.target.value
    })
  }

  handleMesiac(e) {
    this.setState({
      mesiac: e.target.value
    })
  }

  handleCreate() {

    const druh = this.state.druh
    const rok = this.state.rok
    const mesiac = this.state.mesiac

    const obdobie = `${rok}-${mesiac}-01`

    const swal = withReactComponent(Swal)

    swal.fire({
      title: `<p>Vytvoriť nový hlavný záznam?</p>`,
      text: `Pribudne nový záznam v zdaňovacom období ${rok}/${mesiac}`,
      type: 'question',
      showCancelButton: true,
      cancelButtonText: 'Zrušiť'
    }).then( result => {
      if (result.value) {

        const data = {
          druh,
          obdobie
        }

        this.props.create(data)
      }
    })
  }

  render() {

    const year = new Date().getFullYear();
    let years = []

    for (let i = year; i >= 2010; i--) {
      years.push(i)
    }

    let buttonDisabled = (
      this.state.rok === null || this.state.rok === ''
      || this.state.mesiac === null || this.state.mesiac === ''
      || this.props.hlavny.creating
    )

    return (
      <div>
        {
          this.props.hlavny.creating &&
          <ReactLoading type="spin" color="#51565d" delay={0} className="react-loader" />
        }
        <Card style={{ width: '500px' }}>
          <CardHeader className="bg-success text-white">Vytvoriť daňové priznanie</CardHeader>
          <CardBody>
            <Form inline>
              <FormGroup>
                <Label for="novy-hlavny-druh">Druh daňového priznania</Label>
                &nbsp;&nbsp;
                <Input type={'select'} id="novy-hlavny-druh" onChange={this.handleDruh}>
                  <option value="1">Riadne</option>
                  <option value="2">Opravné</option>
                  <option value="3">Dodatočné</option>
                </Input>
              </FormGroup>
            </Form>
            <br/>
            <Form inline>
              <FormGroup>
                <Label>Obdobie</Label>
                &nbsp;&nbsp;
                <Input type={'select'} id="novy-hlavny-obdobie-rok" onChange={this.handleRok}>
                  <option value="">-- Rok --</option>
                  {
                    years.map( (item, ix) => (
                      <option key={ix} value={item}>{item}</option>
                    ))
                  }
                </Input>
                &nbsp;&nbsp;
                <Input type={'select'} id="novy-hlavny-obdobie-mesiac" onChange={this.handleMesiac}>
                  <option value="">-- Mesiac --</option>
                  <option value="01">Január</option>
                  <option value="02">Február</option>
                  <option value="03">Marec</option>
                  <option value="04">Apríl</option>
                  <option value="05">Máj</option>
                  <option value="06">Jún</option>
                  <option value="07">Júl</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">Október</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </Input>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button color={'success'} onClick={this.handleCreate} disabled={buttonDisabled}>Vytvoriť</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  create: (e) => dispatch(createHlavnyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VytvoritHlavny)