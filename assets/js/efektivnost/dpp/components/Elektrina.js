import React from 'react'
import { connect } from 'react-redux'

import {
  Card, CardHeader, CardBody, CardTitle, CardSubtitle,
  Table,
  Input
} from 'reactstrap'
import NumberFormat from 'react-number-format'
import FontAwesome from 'react-fontawesome'

// Number format component
let numF = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 2,
  displayType: 'text',
  value: 0
}



class Elektrina extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const hlavny = this.props.hlavny
    const elektrina = this.props.elektrina

    const {
      tpv,
      tpz,
      srv
    } = elektrina

    return (
      <div>
        { hlavny.initialized &&
          <Card>
            <CardHeader className="text-white bg-primary">
              Elektrina{' '}
              { elektrina.loading && <FontAwesome name="spinner" spin /> }
            </CardHeader>
            <CardBody className="dpp-overflow">
              <div className="elektrina-min">
                <CardTitle>Výroba elektrickej energie</CardTitle>
                <CardSubtitle>Vlastné zdroje a podporné služby</CardSubtitle>
                <br/>
                <Table size="sm" className="dpp-nowrap">
                  <thead>
                  <tr className="text-center">
                    <th></th>
                    <th>0</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>21</th>
                    <th>22</th>
                    <th>23</th>
                    <th>Spolu</th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr className="text-center">
                    <th className="text-left">TpV</th>
                    <td><NumberFormat {...numF} value={tpv.h0} /></td>
                    <td><NumberFormat {...numF} value={tpv.h1} /></td>
                    <td><NumberFormat {...numF} value={tpv.h2} /></td>
                    <td><NumberFormat {...numF} value={tpv.h3} /></td>
                    <td><NumberFormat {...numF} value={tpv.h4} /></td>
                    <td><NumberFormat {...numF} value={tpv.h5} /></td>
                    <td><NumberFormat {...numF} value={tpv.h6} /></td>
                    <td><NumberFormat {...numF} value={tpv.h7} /></td>
                    <td><NumberFormat {...numF} value={tpv.h8} /></td>
                    <td><NumberFormat {...numF} value={tpv.h9} /></td>
                    <td><NumberFormat {...numF} value={tpv.h10} /></td>
                    <td><NumberFormat {...numF} value={tpv.h11} /></td>
                    <td><NumberFormat {...numF} value={tpv.h12} /></td>
                    <td><NumberFormat {...numF} value={tpv.h13} /></td>
                    <td><NumberFormat {...numF} value={tpv.h14} /></td>
                    <td><NumberFormat {...numF} value={tpv.h15} /></td>
                    <td><NumberFormat {...numF} value={tpv.h16} /></td>
                    <td><NumberFormat {...numF} value={tpv.h17} /></td>
                    <td><NumberFormat {...numF} value={tpv.h18} /></td>
                    <td><NumberFormat {...numF} value={tpv.h19} /></td>
                    <td><NumberFormat {...numF} value={tpv.h20} /></td>
                    <td><NumberFormat {...numF} value={tpv.h21} /></td>
                    <td><NumberFormat {...numF} value={tpv.h22} /></td>
                    <td><NumberFormat {...numF} value={tpv.h23} /></td>
                    <td><NumberFormat {...numF} value={tpv.spolu} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">TpZ</th>
                    <td><NumberFormat {...numF} value={tpz.h0} /></td>
                    <td><NumberFormat {...numF} value={tpz.h1} /></td>
                    <td><NumberFormat {...numF} value={tpz.h2} /></td>
                    <td><NumberFormat {...numF} value={tpz.h3} /></td>
                    <td><NumberFormat {...numF} value={tpz.h4} /></td>
                    <td><NumberFormat {...numF} value={tpz.h5} /></td>
                    <td><NumberFormat {...numF} value={tpz.h6} /></td>
                    <td><NumberFormat {...numF} value={tpz.h7} /></td>
                    <td><NumberFormat {...numF} value={tpz.h8} /></td>
                    <td><NumberFormat {...numF} value={tpz.h9} /></td>
                    <td><NumberFormat {...numF} value={tpz.h10} /></td>
                    <td><NumberFormat {...numF} value={tpz.h11} /></td>
                    <td><NumberFormat {...numF} value={tpz.h12} /></td>
                    <td><NumberFormat {...numF} value={tpz.h13} /></td>
                    <td><NumberFormat {...numF} value={tpz.h14} /></td>
                    <td><NumberFormat {...numF} value={tpz.h15} /></td>
                    <td><NumberFormat {...numF} value={tpz.h16} /></td>
                    <td><NumberFormat {...numF} value={tpz.h17} /></td>
                    <td><NumberFormat {...numF} value={tpz.h18} /></td>
                    <td><NumberFormat {...numF} value={tpz.h19} /></td>
                    <td><NumberFormat {...numF} value={tpz.h20} /></td>
                    <td><NumberFormat {...numF} value={tpz.h21} /></td>
                    <td><NumberFormat {...numF} value={tpz.h22} /></td>
                    <td><NumberFormat {...numF} value={tpz.h23} /></td>
                    <td><NumberFormat {...numF} value={tpz.spolu} /></td>
                  </tr>

                  <tr className="text-center font-weight-bold elektrina-sum">
                    <th className="text-left">BAT dodávka</th>
                    <td><NumberFormat {...numF} value={tpv.h0 + tpz.h0} /></td>
                    <td><NumberFormat {...numF} value={tpv.h1 + tpz.h1} /></td>
                    <td><NumberFormat {...numF} value={tpv.h2 + tpz.h2} /></td>
                    <td><NumberFormat {...numF} value={tpv.h3 + tpz.h3} /></td>
                    <td><NumberFormat {...numF} value={tpv.h4 + tpz.h4} /></td>
                    <td><NumberFormat {...numF} value={tpv.h5 + tpz.h5} /></td>
                    <td><NumberFormat {...numF} value={tpv.h6 + tpz.h6} /></td>
                    <td><NumberFormat {...numF} value={tpv.h7 + tpz.h7} /></td>
                    <td><NumberFormat {...numF} value={tpv.h8 + tpz.h8} /></td>
                    <td><NumberFormat {...numF} value={tpv.h9 + tpz.h9} /></td>
                    <td><NumberFormat {...numF} value={tpv.h10 + tpz.h10} /></td>
                    <td><NumberFormat {...numF} value={tpv.h11 + tpz.h11} /></td>
                    <td><NumberFormat {...numF} value={tpv.h12 + tpz.h12} /></td>
                    <td><NumberFormat {...numF} value={tpv.h13 + tpz.h13} /></td>
                    <td><NumberFormat {...numF} value={tpv.h14 + tpz.h14} /></td>
                    <td><NumberFormat {...numF} value={tpv.h15 + tpz.h15} /></td>
                    <td><NumberFormat {...numF} value={tpv.h16 + tpz.h16} /></td>
                    <td><NumberFormat {...numF} value={tpv.h17 + tpz.h17} /></td>
                    <td><NumberFormat {...numF} value={tpv.h18 + tpz.h18} /></td>
                    <td><NumberFormat {...numF} value={tpv.h19 + tpz.h19} /></td>
                    <td><NumberFormat {...numF} value={tpv.h20 + tpz.h20} /></td>
                    <td><NumberFormat {...numF} value={tpv.h21 + tpz.h21} /></td>
                    <td><NumberFormat {...numF} value={tpv.h22 + tpz.h22} /></td>
                    <td><NumberFormat {...numF} value={tpv.h23 + tpz.h23} /></td>
                    {/*<td><NumberFormat {...numF} value={tpv.spolu + tpz.spolu} /></td>*/}
                  </tr>

                  <tr className="text-center bg-yellow">
                    <th className="text-left">SRV</th>
                    <td><NumberFormat {...numF} value={srv.h0} /></td>
                    <td><NumberFormat {...numF} value={srv.h1} /></td>
                    <td><NumberFormat {...numF} value={srv.h2} /></td>
                    <td><NumberFormat {...numF} value={srv.h3} /></td>
                    <td><NumberFormat {...numF} value={srv.h4} /></td>
                    <td><NumberFormat {...numF} value={srv.h5} /></td>
                    <td><NumberFormat {...numF} value={srv.h6} /></td>
                    <td><NumberFormat {...numF} value={srv.h7} /></td>
                    <td><NumberFormat {...numF} value={srv.h8} /></td>
                    <td><NumberFormat {...numF} value={srv.h9} /></td>
                    <td><NumberFormat {...numF} value={srv.h10} /></td>
                    <td><NumberFormat {...numF} value={srv.h11} /></td>
                    <td><NumberFormat {...numF} value={srv.h12} /></td>
                    <td><NumberFormat {...numF} value={srv.h13} /></td>
                    <td><NumberFormat {...numF} value={srv.h14} /></td>
                    <td><NumberFormat {...numF} value={srv.h15} /></td>
                    <td><NumberFormat {...numF} value={srv.h16} /></td>
                    <td><NumberFormat {...numF} value={srv.h17} /></td>
                    <td><NumberFormat {...numF} value={srv.h18} /></td>
                    <td><NumberFormat {...numF} value={srv.h19} /></td>
                    <td><NumberFormat {...numF} value={srv.h20} /></td>
                    <td><NumberFormat {...numF} value={srv.h21} /></td>
                    <td><NumberFormat {...numF} value={srv.h22} /></td>
                    <td><NumberFormat {...numF} value={srv.h23} /></td>
                    {/*<td><NumberFormat {...numF} value={srv.spolu} /></td>*/}
                  </tr>

                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        }
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => ({
  hlavny: state.hlavny,
  elektrina: state.elektrina
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  //update: (e) => dispatch(updateElektrinaRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Elektrina)