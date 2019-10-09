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
  decimalScale: 0,
  displayType: 'text',
  value: 0
}

class Objednavka extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const hlavny = this.props.hlavny
    const objednavka = this.props.objednavka

    const numF_teplota = {
      ...numF,
      decimalScale: 2
    }

    const {
      slovnaft,
      ppc_hv,
      ppc_para,
      wunder,
      aladin,
      teplota
    } = objednavka

    return (
      <div>
        { hlavny.initialized &&
          <Card>
            <CardHeader className="text-white bg-primary">
              Objednávka{' '}
              { objednavka.loading && <FontAwesome name="spinner" spin /> }
            </CardHeader>
            <CardBody className="dpp-overflow">
              <div className="objednavka-min">
                <CardTitle>Plánovanie objednávky tepla z cudzích zdrojov</CardTitle>
                <CardSubtitle>V závislosti od predpovede počasia na danú hodinu</CardSubtitle>
                <br/>
                <Table hover>
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
                  </tr>
                  </thead>
                  <tbody>

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
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      PPC HV
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={ppc_hv.h0} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h1} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h2} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h3} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h4} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h5} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h6} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h7} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h8} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h9} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h10} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h11} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h12} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h13} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h14} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h15} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h16} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h17} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h18} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h19} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h20} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h21} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h22} /></td>
                    <td><NumberFormat {...numF} value={ppc_hv.h23} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      PPC Para
                      &nbsp;
                      <span className="small text-muted">[MW]</span>
                    </th>
                    <td><NumberFormat {...numF} value={ppc_para.h0} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h1} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h2} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h3} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h4} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h5} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h6} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h7} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h8} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h9} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h10} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h11} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h12} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h13} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h14} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h15} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h16} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h17} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h18} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h19} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h20} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h21} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h22} /></td>
                    <td><NumberFormat {...numF} value={ppc_para.h23} /></td>
                  </tr>

                  <tr>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      Teplota Wunder
                      &nbsp;
                      <span className="small text-muted">[°C]</span>
                    </th>
                    <td><NumberFormat {...numF_teplota} value={wunder.h0} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h1} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h2} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h3} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h4} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h5} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h6} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h7} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h8} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h9} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h10} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h11} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h12} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h13} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h14} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h15} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h16} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h17} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h18} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h19} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h20} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h21} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h22} /></td>
                    <td><NumberFormat {...numF_teplota} value={wunder.h23} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      Teplota Aladin
                      &nbsp;
                      <span className="small text-muted">[°C]</span>
                    </th>
                    <td><NumberFormat {...numF_teplota} value={aladin.h0} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h1} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h2} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h3} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h4} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h5} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h6} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h7} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h8} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h9} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h10} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h11} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h12} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h13} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h14} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h15} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h16} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h17} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h18} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h19} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h20} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h21} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h22} /></td>
                    <td><NumberFormat {...numF_teplota} value={aladin.h23} /></td>
                  </tr>

                  <tr className="text-center">
                    <th className="text-left">
                      Priemerná teplota
                      &nbsp;
                      <span className="small text-muted">[°C]</span>
                    </th>
                    <td><NumberFormat {...numF_teplota} value={teplota.h0} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h1} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h2} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h3} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h4} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h5} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h6} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h7} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h8} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h9} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h10} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h11} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h12} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h13} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h14} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h15} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h16} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h17} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h18} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h19} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h20} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h21} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h22} /></td>
                    <td><NumberFormat {...numF_teplota} value={teplota.h23} /></td>
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
  objednavka: state.objednavka
})

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  //update: (e) => dispatch(updateObjednavkaRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Objednavka)