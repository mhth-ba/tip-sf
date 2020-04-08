import React from 'react'
import { Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap'

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xl={10} lg={12}>
            <Card>
              <CardHeader className="bg-primary text-white">Tabuľka s prílohami</CardHeader>
              <CardBody>
                <Table size='md' hover>
                  <thead>
                  <tr>
                    <th>Názov</th>
                    <th>Číslo vydania</th>
                    <th>Vypracoval</th>
                    <th>Kontroloval</th>
                    <th>Schválil</th>
                    <th>Platné od</th>
                    <th>Počet strán</th>
                    <th>Počet príloh</th>
                    <th>Súbor</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Miestny prevádzkový predpis sústavy centralizovaného zásobovania teplom Ba - východ</td>
                    <td>1</td>
                    <td>
                      Ing. Štetka Peter, PhD<br/>
                      Ing. Cýcha Martin<br/>
                      Ing. Seneši Slavomír<br/>
                      Ing. Sochovič Peter<br/>
                      Ing. Ormandy Tomáš
                    </td>
                    <td>Mgr. Szabó Szilárd</td>
                    <td>Ing. Čižmár Ján</td>
                    <td>20.12.2019</td>
                    <td>41</td>
                    <td>-</td>
                    <td>
                      <a href="../uploads/prevadzka/mpp-tpv/MPP SCZT Ba-vychod.pdf">Odkaz na súbor</a>
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
