import React from 'react'
import {
  Card, CardHeader, CardBody, CardText,
  Form, FormGroup, Label, Input, Button,
  Row, Col
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux'

class Foot extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row className="vypracoval-max">
        <Col>
          <Card>
            <CardHeader>Vypracoval a schválil</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="vypracoval" sm={4}>Vypracoval:</Label>
                  <Col sm={8}>
                    <Input type={'text'} id="vypracoval" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="schvalil" sm={4}>Schválil:</Label>
                  <Col sm={8}>
                    <Input type={'text'} id="schvalil" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="vyhotovene-dna" sm={4}>Dňa:</Label>
                  <Col sm={8}>
                    <Input type={'text'} id="vyhotovene-dna" />
                  </Col>
                </FormGroup>
              </Form>
              <Row>
                <Col className="text-left">
                  <Button color={'success'}>
                    <FontAwesome name="check" />{' '}
                    Schváliť
                  </Button>
                </Col>
                <Col className="text-right">
                  <Button color={'danger'}>
                    <FontAwesome name="trash" />{' '}
                    Odstrániť
                  </Button>
                </Col>
              </Row>
              <br/>
              <CardText>Formulár F-90A/1 k PSM-09 - Dispečerské riadenie</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default connect()(Foot)