import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBody, Row, Col, Badge, Table } from 'reactstrap'
import ReadOnlyBadge from './ReadOnlyBadge'

class HlavickaReadOnly extends React.Component {
  render() {
    const hlavny = this.props.hlavny || {}
    const {
      dispecer_1 = '',
      dispecer_2 = '',
      poruchovka_1 = '',
      poruchovka_2 = '',
      teplota_letisko = '',
      teplota_tpv = '',
      teplota_tpz = '',
      doplnovanie_tpv = '',
      doplnovanie_tpz = ''
    } = hlavny

    return (
      <Row>
        <Col>
          <Card style={{ width: '480px' }}>
            <CardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
              <span>Hlavička</span>
              <ReadOnlyBadge datum={hlavny.datum} />
            </CardHeader>
            <CardBody className="pb-2">
              {/* Desktop view - Clean table layout */}
              <div className="d-none d-md-block">
                <Table borderless size="sm">
                  <tbody>
                    <tr>
                      <th style={{ width: '60%' }}>Dispečer - denná zmena:</th>
                      <td>{dispecer_1 || '-'}</td>
                    </tr>
                    <tr>
                      <th>Dispečer - nočná zmena:</th>
                      <td>{dispecer_2 || '-'}</td>
                    </tr>
                    <tr>
                      <th>Poruchová služba - denná zmena:</th>
                      <td>{poruchovka_1 || '-'}</td>
                    </tr>
                    <tr>
                      <th>Poruchová služba - nočná zmena:</th>
                      <td>{poruchovka_2 || '-'}</td>
                    </tr>
                    <tr>
                      <th>Priemerná denná teplota - letisko:</th>
                      <td>{teplota_letisko || '-'} °C</td>
                    </tr>
                    <tr>
                      <th>Priemerná denná teplota - TpV:</th>
                      <td>{teplota_tpv || '-'} °C</td>
                    </tr>
                    <tr>
                      <th>Priemerná denná teplota - TpZ:</th>
                      <td>{teplota_tpz || '-'} °C</td>
                    </tr>
                    <tr>
                      <th>Doplňovanie TpV:</th>
                      <td>{doplnovanie_tpv || '-'} t/h</td>
                    </tr>
                    <tr>
                      <th>Doplňovanie TpZ:</th>
                      <td>{doplnovanie_tpz || '-'} t/h</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              {/* Mobile view - Stacked label/value pairs */}
              <div className="d-md-none">
                <div className="mb-3">
                  <div className="text-muted small">Dispečer - denná zmena</div>
                  <div className="font-weight-bold">{dispecer_1 || '-'}</div>
                </div>
                <div className="mb-3">
                  <div className="text-muted small">Dispečer - nočná zmena</div>
                  <div className="font-weight-bold">{dispecer_2 || '-'}</div>
                </div>
                <div className="mb-3">
                  <div className="text-muted small">Poruchová služba - denná zmena</div>
                  <div className="font-weight-bold">{poruchovka_1 || '-'}</div>
                </div>
                <div className="mb-3">
                  <div className="text-muted small">Poruchová služba - nočná zmena</div>
                  <div className="font-weight-bold">{poruchovka_2 || '-'}</div>
                </div>

                <hr className="my-3" />

                <Row className="mb-2">
                  <Col xs="12">
                    <div className="text-muted small mb-1">Priemerné denné teploty</div>
                  </Col>
                  <Col xs="4">
                    <div className="text-center">
                      <div className="small">Letisko</div>
                      <div className="font-weight-bold">{teplota_letisko || '-'} °C</div>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div className="text-center">
                      <div className="small">TpV</div>
                      <div className="font-weight-bold">{teplota_tpv || '-'} °C</div>
                    </div>
                  </Col>
                  <Col xs="4">
                    <div className="text-center">
                      <div className="small">TpZ</div>
                      <div className="font-weight-bold">{teplota_tpz || '-'} °C</div>
                    </div>
                  </Col>
                </Row>

                <hr className="my-3" />

                <Row>
                  <Col xs="6">
                    <div className="text-muted small">Doplňovanie TpV</div>
                    <div className="font-weight-bold">{doplnovanie_tpv || '-'}</div>
                  </Col>
                  <Col xs="6">
                    <div className="text-muted small">Doplňovanie TpZ</div>
                    <div className="font-weight-bold">{doplnovanie_tpz || '-'}</div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny
})

export default connect(mapStateToProps)(HlavickaReadOnly)
