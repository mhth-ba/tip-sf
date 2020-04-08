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
                    <td>Miestny prevádzkový predpis sústavy centralizovaného zásobovania teplom Ba - západ</td>
                    <td>1</td>
                    <td>
                      Ing. Jozef Púpala<br/>
                      Ing. Juraj Záborský<br/>
                      Ing. Milan Bartoš
                    </td>
                    <td>Ing. Juraj Mydliar</td>
                    <td>Ing. Čižmár Ján</td>
                    <td>01.12.2019</td>
                    <td>35</td>
                    <td>6</td>
                    <td>
                      <a href="../uploads/prevadzka/mpp-tpz/MPP SCZT Ba-zapad.pdf">Odkaz na súbor</a>
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
