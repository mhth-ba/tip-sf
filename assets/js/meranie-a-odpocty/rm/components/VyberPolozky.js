import React from 'react'
import {
  Card, CardHeader, CardBody, CardText,
  Form, FormGroup,
  Input, InputGroup, InputGroupAddon, InputGroupText,
  Button,
  Row, Col,
  Table
} from 'reactstrap'
import { date } from '../../../utils/format'
import FontAwesome from 'react-fontawesome'

import { connect } from 'react-redux'
import { fetchVyberPolozkyRequest, fetchReportMeracovRequest } from '../actions'

class VyberPolozky extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const id = e.target.value

    const data = {
      id
    }

    this.props.fetchReport(data)
  }

  componentDidMount() {
    this.props.fetchZoznam()
  }

  render() {
    const vyberpolozky = this.props.vyberpolozky
    const report = this.props.report

    return (
      <div style={{ width: '360px' }}>
        <Card>
          <CardHeader className="text-white bg-secondary">Výber obdobia</CardHeader>
          <CardBody>
            <div style={{ width: '300px' }}>
              <InputGroup>
                <InputGroupAddon addonType={'prepend'}>
                  <InputGroupText>Obdobie</InputGroupText>
                </InputGroupAddon>
                <Input type={'select'} onChange={this.handleChange} disabled={report.loading} >
                  { vyberpolozky.loading && <option>- Načítavanie položiek -</option> }
                  { vyberpolozky.polozky.map( (polozka, ix) => <option key={ix} value={polozka.id}>{date(polozka.datum)}</option>) }
                </Input>
                { vyberpolozky.loading &&
                <InputGroupAddon addonType={'append'}>
                  <InputGroupText><FontAwesome name="spinner" spin /></InputGroupText>
                </InputGroupAddon> }
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
  report: state.report
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  fetchZoznam: () => dispatch(fetchVyberPolozkyRequest()),
  fetchReport: (e) => dispatch(fetchReportMeracovRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VyberPolozky)