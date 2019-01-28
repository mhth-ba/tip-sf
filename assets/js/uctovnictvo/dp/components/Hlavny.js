import React from 'react'
import {connect} from 'react-redux'
import {
  Card, CardHeader, CardBody, Table
} from 'reactstrap'

import { dateYearMonth, dateShort } from '../../../utils/format'

class Hlavny extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const init = this.props.hlavny.initialized
    const hlavny = this.props.hlavny

    const id = hlavny.id                           // id
    const druh = hlavny.druh                       // druh (riadne, opravné, dodatočné)
    const obdobie = hlavny.obdobie                 // zdaňovacie obdobie
    const predchadzajuci = hlavny.predchadzajuci   // priznanie v predošlom zdaňovacom období
    const datum = hlavny.datum                     // dátum podania
    const podane = hlavny.podane                   // bolo priznanie podané ?

    return (
      <div>
        { init &&
          <Card>
            <CardHeader className="text-white bg-secondary">Karta hlavných údajov</CardHeader>
            <CardBody>
              <Table>
                <tbody>
                <tr>
                  <th>ID</th>
                  <td>{ id }</td>
                </tr>
                <tr>
                  <th>Druh</th>
                  <td>{ druh ? druh.druh : null }</td>
                </tr>
                <tr>
                  <th>Zdaňovacie obdobie</th>
                  <td>{ dateYearMonth(obdobie) }</td>
                </tr>
                <tr>
                  <th>Predchádzajúce daňové priznanie</th>
                  <td>{ predchadzajuci ?
                    //`[${predchadzajuci.id}] ${dateYearMonth(predchadzajuci.obdobie)} - ${predchadzajuci.druh.druh}`
                    predchadzajuci
                    : null }
                  </td>
                </tr>
                <tr>
                  <th>Dátum podania</th>
                  <td>{ dateShort(datum) }</td>
                </tr>
                <tr>
                  <th>Podané</th>
                  <td>{ podane }</td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
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
)(Hlavny)