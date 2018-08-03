import React from 'react'
import {
  Card, CardHeader, CardBody, CardText, CardTitle, CardSubtitle, CardFooter,
  Form, FormGroup,
  Input,
  Button,
  Row, Col,
  Table
} from 'reactstrap'
import { date } from '../../../utils/format'
import FontAwesome from 'react-fontawesome'

import { connect } from 'react-redux'

class Report extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Row>
          <Col sm={4}>
            <Card>
              <CardHeader className="text-white bg-primary">Celkový prehľad počtu meradiel</CardHeader>
              <CardBody>
                <CardTitle>Delenie podľa spôsobu odpočtu</CardTitle>
                <br/>
                <Table>
                  <thead>
                  <tr>
                    <th>Spolu</th>
                    <th>3 156</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th>ProCop</th>
                    <td>2 459</td>
                  </tr>
                  <tr>
                    <th>Rádio</th>
                    <td>562</td>
                  </tr>
                  <tr>
                    <th>Ručne</th>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th>BVS</th>
                    <td>117</td>
                  </tr>
                  <tr>
                    <th>Merače odberateľa</th>
                    <td>8</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <CardHeader className="text-white bg-primary">Celkový prehľad počtu meradiel</CardHeader>
              <CardBody>
                <CardTitle>Delenie podľa typu merania</CardTitle>
                <br/>
                <Table>
                  <tbody>
                  <tr>
                    <th>Merače tepla</th>
                    <td>1 989</td>
                  </tr>
                  <tr>
                    <td>merná jednotka GJ</td>
                    <td>1 916</td>
                  </tr>
                  <tr>
                    <td>merná jednotka MWh</td>
                    <td>73</td>
                  </tr>
                  <tr>
                    <th>Vodomery</th>
                    <td>1 167</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <CardHeader className="text-white bg-primary">Celkový prehľad počtu meradiel</CardHeader>
              <CardBody>
                <CardTitle>Delenie podľa lokality</CardTitle>
                <br/>
                <Table>
                  <tbody>
                  <tr>
                    <th>Východná časť</th>
                    <td>1 672</td>
                  </tr>
                  <tr>
                    <th>Západná časť</th>
                    <td>1 484</td>
                  </tr>
                  </tbody>
                </Table>
                <br/>
                <Table>
                  <thead>
                  <tr>
                    <th colSpan={2} className="text-center">Východná časť</th>
                    <th colSpan={2} className="text-center">Západná časť</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th>Merače tepla</th>
                    <td>1 050</td>
                    <th>Merače tepla</th>
                    <td>939</td>
                  </tr>
                  <tr>
                    <td>merná jednotka GJ</td>
                    <td>1 010</td>
                    <td>merná jednotka GJ</td>
                    <td>906</td>
                  </tr>
                  <tr>
                    <td>merná jednotka MWh</td>
                    <td>40</td>
                    <td>merná jednotka MWh</td>
                    <td>33</td>
                  </tr>
                  <tr>
                    <th>Vodomery</th>
                    <td>622</td>
                    <th>Vodomery</th>
                    <td>545</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col sm={6}>
            <Card>
              <CardHeader className="text-white bg-primary">
                Delenie podľa spôsobu odpočtu na východnú a západnú časť
              </CardHeader>
              <CardBody>
                <CardTitle>Meradlá odčítavané cez systém ProCop (2 459)</CardTitle>
                <CardSubtitle>Delenie podľa lokality</CardSubtitle>
                <br/>
                <Row>
                  <Col>
                    <Table>
                      <thead>
                      <tr>
                        <th>Východná časť</th>
                        <th>1 521</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th>Merače tepla</th>
                        <td>998</td>
                      </tr>
                      <tr>
                        <td>merná jednotka GJ</td>
                        <td>961</td>
                      </tr>
                      <tr>
                        <td>merná jednotka MWh</td>
                        <td>37</td>
                      </tr>
                      <tr>
                        <th>Vodomery</th>
                        <td>523</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col>
                    <Table>
                      <thead>
                      <tr>
                        <th>Západná časť</th>
                        <th>938</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th>Merače tepla</th>
                        <td>594</td>
                      </tr>
                      <tr>
                        <td>merná jednotka GJ</td>
                        <td>564</td>
                      </tr>
                      <tr>
                        <td>merná jednotka MWh</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <th>Vodomery</th>
                        <td>344</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <CardHeader className="text-white bg-primary">
                Delenie podľa spôsobu odpočtu na východnú a západnú časť
              </CardHeader>
              <CardBody>
                <CardTitle>Meradlá odčítavané pomocou rádiových terminálov z auta (562)</CardTitle>
                <CardSubtitle>Delenie podľa lokality</CardSubtitle>
                <br/>
                <Row>
                  <Col>
                    <Table>
                      <thead>
                      <tr>
                        <th>Východná časť</th>
                        <th>67</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th>Merače tepla</th>
                        <td>47</td>
                      </tr>
                      <tr>
                        <td>merná jednotka GJ</td>
                        <td>46</td>
                      </tr>
                      <tr>
                        <td>merná jednotka MWh</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <th>Vodomery</th>
                        <td>20</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col>
                    <Table>
                      <thead>
                      <tr>
                        <th>Západná časť</th>
                        <th>495</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th>Merače tepla</th>
                        <td>340</td>
                      </tr>
                      <tr>
                        <td>merná jednotka GJ</td>
                        <td>340</td>
                      </tr>
                      <tr>
                        <td>merná jednotka MWh</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <th>Vodomery</th>
                        <td>155</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
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
)(Report)