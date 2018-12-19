import React from 'react'
import {
  Card, CardHeader, CardBody, CardText,
  Form, FormGroup,
  Input, InputGroup, InputGroupAddon, InputGroupText,
  Button,
  Row, Col,
  Table
} from 'reactstrap'
import { dateMonthYear } from '../../../utils/format'
import FontAwesome from 'react-fontawesome'

import { connect } from 'react-redux'
import { fetchVyberPolozkyRequest, loadMainEntryRequest } from '../actions'

class VyberPolozky extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleLoad = this.handleLoad.bind(this)
  }

  handleChange(e) {
    const option = e.target.options[e.target.selectedIndex]

    this.setState({
      id: e.target.value
    })
  }

  handleLoad() {
    const id = this.state.id
    const data = {
      id
    }

    this.props.load(data)
  }

  componentDidMount() {
    this.props.fetchZoznam()
  }

  render() {
    const vyberpolozky = this.props.vyberpolozky
    const hlavny = this.props.hlavny

    return (
      <div style={{ width: '380px' }}>
        <Card>
          <CardHeader className="text-white bg-secondary">Výber obdobia</CardHeader>
          <CardBody>
            <div style={{ width: '340px' }}>
              <InputGroup>
                <InputGroupAddon addonType={'prepend'}>
                  <InputGroupText>Obdobie</InputGroupText>
                </InputGroupAddon>
                <Input type={'select'} onChange={ this.handleChange } disabled={hlavny.loading} >
                  { vyberpolozky.loading && <option>- Načítavanie položiek -</option> }
                  <option value={'-'}>- Vyberte položku -</option>
                  { vyberpolozky.polozky.map(
                    (polozka, ix) =>
                      <option key={ix} value={polozka.id}>{dateMonthYear(polozka.datum)}</option>
                  )}
                </Input>
                {/*{ vyberpolozky.loading &&
                <InputGroupAddon addonType={'append'}>
                  <InputGroupText><FontAwesome name="spinner" spin /></InputGroupText>
                </InputGroupAddon> }*/}

                &nbsp;

                <Button color={'secondary'}
                        onClick={ this.handleLoad }
                        disabled={vyberpolozky.loading || hlavny.loading || this.state.id === '-' || this.state.id == null} >
                  { vyberpolozky.loading || hlavny.loading ?
                    <FontAwesome name={'spinner'} spin /> : <FontAwesome name={'folder-open'} /> }
                  {' '}
                  Načítať
                </Button>

              </InputGroup>
            </div>
            {/*<Form inline>
              <FormGroup>
                <Input type={'select'}>
                  { vyberpolozky.loading && <option>- Načítavanie položiek -</option> }
                  { vyberpolozky.polozky.map( (polozka, ix) => <option key={ix} id={polozka.id}>{date(polozka.datum)}</option>) }
                </Input>
                &nbsp;
                <Button color="secondary" disabled={vyberpolozky.loading || report.loading} >
                  { vyberpolozky.loading || report.loading ?
                    <FontAwesome name="spinner" spin /> : <FontAwesome name="folder-open" /> }
                  {' '}
                  Načítať
                </Button>
              </FormGroup>
            </Form>*/}
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  vyberpolozky: state.vyberpolozky,
  hlavny: state.hlavny
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  fetchZoznam: () => dispatch(fetchVyberPolozkyRequest()),
  load: (e) => dispatch(loadMainEntryRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VyberPolozky)