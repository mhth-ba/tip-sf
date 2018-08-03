import React from 'react'
import {
  Card, CardHeader, CardBody, CardText,
  Form, FormGroup,
  Input,
  Button,
  Row, Col,
  Table
} from 'reactstrap'
import { date } from '../../../utils/format'
import FontAwesome from 'react-fontawesome'

import { connect } from 'react-redux'
import {
  fetchSpravaRequest,
  fetchReportMeracov
} from '../../../services/ActionsReportMeracov'

class VyberPolozky extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div style={{ width: '400px' }}>
        <Card>
          <CardHeader className="text-white bg-secondary">Výber obdobia</CardHeader>
          <CardBody>
            <Form inline>
              <FormGroup>
                <Input type={'select'}>
                  <option value="1">1. August 2018</option>
                </Input>
                &nbsp;
                {/*<Button color="primary">
                  <FontAwesome name="folder-open" />
                  {' '}
                  Načítať
                </Button>*/}
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({

})

const mapDispatchToProps = ( dispatch, ownProps ) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VyberPolozky)