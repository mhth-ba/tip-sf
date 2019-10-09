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

class Dodavka extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const hlavny = this.props.hlavny
    const dodavka = this.props.dodavka

    const {
      vykon_v,
      slovnaft,
      ppc,
      tpv,
      vhj,
      vykon_z,
      cogen_west,
      k6,
      hk
    } = dodavka

    return (
      <div>
        { hlavny.initialized &&
          <Card>
            <CardHeader className="text-white bg-primary">
              Dodávka{' '}
              { dodavka.loading && <FontAwesome name="spinner" spin /> }
            </CardHeader>
            <CardBody className="dpp-overflow">
              <div className="dodavka-min">
                <CardTitle>Diagram dodávky tepla</CardTitle>
                <CardSubtitle>Rozdelenie dodávky tepla medzi výrobne a cudzie zdroje</CardSubtitle>
                <br/>
                <Table hover>
                  <thead>
                  <tr className="text-center">
                    <th colSpan={2}></th>
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

                  <tr className="text-center font-weight-bold bg-lime">
                    <th rowSpan={5} className="text-left">Východ</th>
                    <th className="text-left">
                      Výkon HV
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={vykon_v.h0} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h1} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h2} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h3} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h4} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h5} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h6} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h7} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h8} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h9} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h10} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h11} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h12} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h13} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h14} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h15} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h16} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h17} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h18} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h19} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h20} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h21} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h22} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.h23} /></td>
                    <td><NumberFormat {...numF} value={vykon_v.spolu} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      Slovnaft
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={slovnaft.h0} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h1} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h2} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h3} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h4} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h5} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h6} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h7} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h8} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h9} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h10} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h11} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h12} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h13} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h14} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h15} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h16} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h17} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h18} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h19} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h20} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h21} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h22} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.h23} /></td>
                    <td><NumberFormat {...numF} value={slovnaft.spolu} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      PPC
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={ppc.h0} /></td>
                    <td><NumberFormat {...numF} value={ppc.h1} /></td>
                    <td><NumberFormat {...numF} value={ppc.h2} /></td>
                    <td><NumberFormat {...numF} value={ppc.h3} /></td>
                    <td><NumberFormat {...numF} value={ppc.h4} /></td>
                    <td><NumberFormat {...numF} value={ppc.h5} /></td>
                    <td><NumberFormat {...numF} value={ppc.h6} /></td>
                    <td><NumberFormat {...numF} value={ppc.h7} /></td>
                    <td><NumberFormat {...numF} value={ppc.h8} /></td>
                    <td><NumberFormat {...numF} value={ppc.h9} /></td>
                    <td><NumberFormat {...numF} value={ppc.h10} /></td>
                    <td><NumberFormat {...numF} value={ppc.h11} /></td>
                    <td><NumberFormat {...numF} value={ppc.h12} /></td>
                    <td><NumberFormat {...numF} value={ppc.h13} /></td>
                    <td><NumberFormat {...numF} value={ppc.h14} /></td>
                    <td><NumberFormat {...numF} value={ppc.h15} /></td>
                    <td><NumberFormat {...numF} value={ppc.h16} /></td>
                    <td><NumberFormat {...numF} value={ppc.h17} /></td>
                    <td><NumberFormat {...numF} value={ppc.h18} /></td>
                    <td><NumberFormat {...numF} value={ppc.h19} /></td>
                    <td><NumberFormat {...numF} value={ppc.h20} /></td>
                    <td><NumberFormat {...numF} value={ppc.h21} /></td>
                    <td><NumberFormat {...numF} value={ppc.h22} /></td>
                    <td><NumberFormat {...numF} value={ppc.h23} /></td>
                    <td><NumberFormat {...numF} value={ppc.spolu} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      TpV
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
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
                    <th className="text-left">
                      VhJ
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={vhj.h0} /></td>
                    <td><NumberFormat {...numF} value={vhj.h1} /></td>
                    <td><NumberFormat {...numF} value={vhj.h2} /></td>
                    <td><NumberFormat {...numF} value={vhj.h3} /></td>
                    <td><NumberFormat {...numF} value={vhj.h4} /></td>
                    <td><NumberFormat {...numF} value={vhj.h5} /></td>
                    <td><NumberFormat {...numF} value={vhj.h6} /></td>
                    <td><NumberFormat {...numF} value={vhj.h7} /></td>
                    <td><NumberFormat {...numF} value={vhj.h8} /></td>
                    <td><NumberFormat {...numF} value={vhj.h9} /></td>
                    <td><NumberFormat {...numF} value={vhj.h10} /></td>
                    <td><NumberFormat {...numF} value={vhj.h11} /></td>
                    <td><NumberFormat {...numF} value={vhj.h12} /></td>
                    <td><NumberFormat {...numF} value={vhj.h13} /></td>
                    <td><NumberFormat {...numF} value={vhj.h14} /></td>
                    <td><NumberFormat {...numF} value={vhj.h15} /></td>
                    <td><NumberFormat {...numF} value={vhj.h16} /></td>
                    <td><NumberFormat {...numF} value={vhj.h17} /></td>
                    <td><NumberFormat {...numF} value={vhj.h18} /></td>
                    <td><NumberFormat {...numF} value={vhj.h19} /></td>
                    <td><NumberFormat {...numF} value={vhj.h20} /></td>
                    <td><NumberFormat {...numF} value={vhj.h21} /></td>
                    <td><NumberFormat {...numF} value={vhj.h22} /></td>
                    <td><NumberFormat {...numF} value={vhj.h23} /></td>
                    <td><NumberFormat {...numF} value={vhj.spolu} /></td>
                  </tr>

                  <tr className="text-center font-weight-bold bg-azure">
                    <th rowSpan={4} className="text-left">Západ</th>
                    <th className="text-left">
                      Výkon HV
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={vykon_z.h0} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h1} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h2} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h3} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h4} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h5} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h6} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h7} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h8} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h9} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h10} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h11} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h12} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h13} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h14} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h15} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h16} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h17} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h18} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h19} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h20} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h21} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h22} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.h23} /></td>
                    <td><NumberFormat {...numF} value={vykon_z.spolu} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      Cogen West
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={cogen_west.h0} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h1} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h2} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h3} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h4} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h5} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h6} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h7} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h8} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h9} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h10} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h11} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h12} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h13} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h14} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h15} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h16} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h17} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h18} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h19} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h20} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h21} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h22} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.h23} /></td>
                    <td><NumberFormat {...numF} value={cogen_west.spolu} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      K6
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={k6.h0} /></td>
                    <td><NumberFormat {...numF} value={k6.h1} /></td>
                    <td><NumberFormat {...numF} value={k6.h2} /></td>
                    <td><NumberFormat {...numF} value={k6.h3} /></td>
                    <td><NumberFormat {...numF} value={k6.h4} /></td>
                    <td><NumberFormat {...numF} value={k6.h5} /></td>
                    <td><NumberFormat {...numF} value={k6.h6} /></td>
                    <td><NumberFormat {...numF} value={k6.h7} /></td>
                    <td><NumberFormat {...numF} value={k6.h8} /></td>
                    <td><NumberFormat {...numF} value={k6.h9} /></td>
                    <td><NumberFormat {...numF} value={k6.h10} /></td>
                    <td><NumberFormat {...numF} value={k6.h11} /></td>
                    <td><NumberFormat {...numF} value={k6.h12} /></td>
                    <td><NumberFormat {...numF} value={k6.h13} /></td>
                    <td><NumberFormat {...numF} value={k6.h14} /></td>
                    <td><NumberFormat {...numF} value={k6.h15} /></td>
                    <td><NumberFormat {...numF} value={k6.h16} /></td>
                    <td><NumberFormat {...numF} value={k6.h17} /></td>
                    <td><NumberFormat {...numF} value={k6.h18} /></td>
                    <td><NumberFormat {...numF} value={k6.h19} /></td>
                    <td><NumberFormat {...numF} value={k6.h20} /></td>
                    <td><NumberFormat {...numF} value={k6.h21} /></td>
                    <td><NumberFormat {...numF} value={k6.h22} /></td>
                    <td><NumberFormat {...numF} value={k6.h23} /></td>
                    <td><NumberFormat {...numF} value={k6.spolu} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      HK
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={hk.h0} /></td>
                    <td><NumberFormat {...numF} value={hk.h1} /></td>
                    <td><NumberFormat {...numF} value={hk.h2} /></td>
                    <td><NumberFormat {...numF} value={hk.h3} /></td>
                    <td><NumberFormat {...numF} value={hk.h4} /></td>
                    <td><NumberFormat {...numF} value={hk.h5} /></td>
                    <td><NumberFormat {...numF} value={hk.h6} /></td>
                    <td><NumberFormat {...numF} value={hk.h7} /></td>
                    <td><NumberFormat {...numF} value={hk.h8} /></td>
                    <td><NumberFormat {...numF} value={hk.h9} /></td>
                    <td><NumberFormat {...numF} value={hk.h10} /></td>
                    <td><NumberFormat {...numF} value={hk.h11} /></td>
                    <td><NumberFormat {...numF} value={hk.h12} /></td>
                    <td><NumberFormat {...numF} value={hk.h13} /></td>
                    <td><NumberFormat {...numF} value={hk.h14} /></td>
                    <td><NumberFormat {...numF} value={hk.h15} /></td>
                    <td><NumberFormat {...numF} value={hk.h16} /></td>
                    <td><NumberFormat {...numF} value={hk.h17} /></td>
                    <td><NumberFormat {...numF} value={hk.h18} /></td>
                    <td><NumberFormat {...numF} value={hk.h19} /></td>
                    <td><NumberFormat {...numF} value={hk.h20} /></td>
                    <td><NumberFormat {...numF} value={hk.h21} /></td>
                    <td><NumberFormat {...numF} value={hk.h22} /></td>
                    <td><NumberFormat {...numF} value={hk.h23} /></td>
                    <td><NumberFormat {...numF} value={hk.spolu} /></td>
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
  dodavka: state.dodavka
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  //update: (e) => dispatch(updateDodavkaRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dodavka)