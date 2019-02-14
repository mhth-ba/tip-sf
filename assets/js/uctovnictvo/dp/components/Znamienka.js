import React from 'react'
import {connect} from 'react-redux'
import { Card, CardHeader, CardBody, CardFooter, Table, Collapse, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

class Znamienka extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true
    }

    this.collapse = this.collapse.bind(this)
  }

  collapse(e) {
    e.preventDefault()
    this.setState({ collapse: !this.state.collapse })
  }

  render() {

    const init = this.props.hlavny.initialized

    return (
      <div>
        { init &&
          <Card>
            <CardHeader className="bg-primary text-white">
              Zmena znamienka
              <span className="pull-right">
                <Button onClick={this.collapse} color={'light'} size={'sm'}>
                { !this.state.collapse ?
                  <FontAwesome name={'plus-square'}/>
                  :
                  <FontAwesome name={'minus-square'}/>
                }
                </Button>
              </span>
            </CardHeader>
            <Collapse isOpen={this.state.collapse}>
              <CardBody>
                <Table bordered hover>
                  <thead>
                  <tr>
                    <th>Znak dane</th>
                    <th>Druh dokladu</th>
                    <th>Účet HK vstup</th>
                    <th>Vstupná DPH</th>
                    <th>Účet HK výstup</th>
                    <th>Výstupná DPH</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center">1G</td>
                    <td>ID, BV, ST</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">1M</td>
                    <td>ID, DM, DN, DO, BV, ST</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">3D</td>
                    <td>ID, BV, ST</td>
                    <td></td>
                    <td></td>
                    <td className="text-center">343191</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">XS</td>
                    <td>DI, DJ, DK, ID, PP, ST</td>
                    <td className="text-center">343741</td>
                    <td>Bez zmeny znamienka</td>
                    <td className="text-center">343151</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">XP</td>
                    <td>DI, DJ, DK, ID, PP, ST</td>
                    <td className="text-center">343751</td>
                    <td>Bez zmeny znamienka</td>
                    <td className="text-center">343151</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">XU</td>
                    <td>DI, DJ, DK, ID, PP, ST</td>
                    <td className="text-center">343761</td>
                    <td>Bez zmeny znamienka</td>
                    <td className="text-center">343161</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">XL</td>
                    <td>DI, DJ, DK, ID, PP, ST</td>
                    <td className="text-center">343771</td>
                    <td>Bez zmeny znamienka</td>
                    <td className="text-center">343161</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">LK</td>
                    <td>DI, DJ, DK, ID, PP, ST</td>
                    <td className="text-center">343740</td>
                    <td>Bez zmeny znamienka</td>
                    <td className="text-center">343181</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">KL</td>
                    <td>DI, DJ, DK, ID, PP, ST</td>
                    <td className="text-center">343290</td>
                    <td>Bez zmeny znamienka</td>
                    <td className="text-center">343180</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="text-center align-middle">3V</td>
                    <td>DI, DJ, DK, ID, PP, ST</td>
                    <td rowSpan={2} className="text-center align-middle">343431</td>
                    <td>Bez zmeny znamienka DI, DJ, DK, ID, PP</td>
                    <td rowSpan={2} className="text-center align-middle">343181</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka DI, DJ, DK, ID, PP, ST</td>
                  </tr>
                  <tr>
                    <td>DM, DN, DO, ST</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka DN, DM, DO, ST</td>
                    <td>Bez zmeny znamienka DM, DN, DO</td>
                  </tr>
                  <tr>
                    <td className="text-center">DA</td>
                    <td>DI, DJ, DK, ST</td>
                    <td className="text-center">343870</td>
                    <td>Bez zmeny znamienka</td>
                    <td className="text-center">343871</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">DR</td>
                    <td>DI, DJ, DK, PP, DM, DN, DO, DR, DS, DT, ST</td>
                    <td className="text-center">343870</td>
                    <td>Bez zmeny znamienka</td>
                    <td className="text-center">343871</td>
                    {/*<td className="font-weight-bold text-danger">Zmena znamienka</td>*/}
                    <td>Bez zmeny znamienka</td>
                  </tr>
                  <tr>
                    <td className="text-center">XG</td>
                    <td>DI, DJ, DK, PP, DM, DN, DO, DR, DS, DT, ST</td>
                    <td className="text-center">343441</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                    <td>{''}</td>
                    <td>{''}</td>
                  </tr>
                  <tr>
                    <td className="text-center">XH</td>
                    <td>DI, DJ, DK, PP, DM, DN, DO, DR, DS, DT, ST</td>
                    <td className="text-center">343451</td>
                    <td className="font-weight-bold text-danger">Zmena znamienka</td>
                    <td>{''}</td>
                    <td>{''}</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Collapse>
          </Card>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Znamienka)