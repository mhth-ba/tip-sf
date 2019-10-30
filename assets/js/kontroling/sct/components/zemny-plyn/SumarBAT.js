import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Card, CardHeader, CardBody, CardFooter, UncontrolledTooltip
} from 'reactstrap'

import NumberFormat from 'react-number-format'

import Jednotka from '../../../../components/Jednotka'
import DecimalScale from '../helpers/DecimalScale'
import Vypocet from '../helpers/Vypocet'

// Number format component
let numFormat = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 0,
  displayType: 'text',
  value: 0
}

let vypocetFormat = {
  ...numFormat,
  decimalScale: 10,
  className: 'text-nowrap'
}

class SumarBAT extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const vyrobne = this.props.vyrobne
    const kotolne = this.props.kotolne
    const bat = this.props.bat

    const decimal = this.props.nastroje.decimal_fzpbat

    numFormat = {
      ...numFormat,
      decimalScale: Number(decimal)
    }

    vypocetFormat = {
      ...vypocetFormat,
      decimalScale: Number(decimal)
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Sumár BAT (Výrobne + kotolne)</CardHeader>
        <CardBody>
          <Table size={'sm'} bordered>
            <thead>
            <tr className="text-center">
              <th>Objem zemného plnu<br/>m<sup>3</sup></th>
              <th>Objem zemného plynu<br/>MWh</th>
              <th>Náklady bez<br/>spotrebnej dane <Jednotka unit={'€'} /></th>
              <th>Spotrebná<br/>daň <Jednotka unit={'€'} /></th>
              <th id={'sum-pdm'}>PDM <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'sum-pdm'}>Prekročenie dohodnutých množstiev</UncontrolledTooltip>
              <th>Celkové náklady<br/>so spotrebnou daňou <Jednotka unit={'€'} /></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr className="text-right">
              <Vypocet value={ bat.objem_m3 }
                       unit={ <span>m<sup>3</sup></span> }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vyrobne.objem_m3} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={kotolne.m3} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Výrobne m<sup>3</sup></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne m<sup>3</sup></span>
                       </div> }
                       cellsId={['fzp_vyr_spo_m3', 'fzp_pk_spo_m3']}
                       placement={'top'}
                       decimal={decimal}
                       class={'font-weight-bold'}
              />
              <Vypocet value={ bat.objem_mwh }
                       unit={'MWh'}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vyrobne.objem_mwh} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={kotolne.mwh} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Výrobne MWh</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne MWh</span>
                       </div> }
                       cellsId={['fzp_vyr_spo_mwh', 'fzp_pk_spo_mwh']}
                       placement={'top'}
                       decimal={decimal}
                       class={'font-weight-bold'}
              />
              <Vypocet value={ bat.nbsd }
                       unit={'€'}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vyrobne.sopo} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vyrobne.fmso} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vyrobne.sopp} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vyrobne.fmsp} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vyrobne.sopd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vyrobne.fmsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={vyrobne.vsd} />
                         <br/>+&nbsp;
                         <NumberFormat {...vypocetFormat} value={kotolne.nbsd} />
                       </div> }
                       popis={ <div>
                         <span>Výrobne:</span>&nbsp;
                         <span className="polozka-1">SOP<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">FMS<sub>o</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-3">SOP<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-4">FMS<sub>p</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-5">SOP<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-6">FMS<sub>d</sub></span>
                         &nbsp;+&nbsp;
                         <span className="polozka-7">VS<sub>d</sub></span>
                         <br/>+&nbsp;
                         <span>Kotolne:</span>&nbsp;
                         <span className="polozka-8">Náklady bez spotrebnej dane</span>
                       </div> }
                       cellsId={[
                         'fzp_vyr_spo_sopo', 'fzp_vyr_spo_fmso', 'fzp_vyr_spo_sopp', 'fzp_vyr_spo_fmsp',
                         'fzp_vyr_spo_sopd', 'fzp_vyr_spo_fmsd', 'fzp_vyr_spo_vsd', 'fzp_pk_spo_nbsd'
                       ]}
                       placement={'top'}
                       decimal={decimal}
                       class={'font-weight-bold'}
              />
              <Vypocet value={ bat.sd }
                       unit={'€'}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vyrobne.dan_eur} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={kotolne.sd} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Výrobne Spotrebná daň €</span>
                         <br/>+&nbsp;
                         <span className="polozka-2">Kotolne Spotrebná daň €</span>
                       </div> }
                       cellsId={['fzp_vyr_spo_dan_e', 'fzp_pk_spo_sd']}
                       placement={'top'}
                       decimal={decimal}
                       class={'font-weight-bold'}
              />
              <Vypocet value={ bat.pdm }
                       unit={'€'}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vyrobne.pdm} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={kotolne.pdm} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Výrobne PDM €</span>
                         &nbsp;+&nbsp;
                         <span className="polozka-2">Kotolne PDM €</span>
                       </div> }
                       cellsId={['fzp_vyr_spo_pdm', 'fzp_pk_spo_pdm']}
                       placement={'top'}
                       decimal={decimal}
                       class={'font-weight-bold'}
              />
              <Vypocet value={ bat.cn }
                       unit={'€'}
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={vyrobne.naklady} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={kotolne.cn} />
                       </div> }
                       popis={ <div>
                         <span className="polozka-1">Výrobne Náklady spolu €</span>
                         <br/>+&nbsp;
                         <span className="polozka-2">Kotolne Celkové náklady €</span>
                       </div> }
                       cellsId={['fzp_vyr_spo_ns', 'fzp_pk_spo_cnsd']}
                       placement={'top'}
                       decimal={decimal}
                       class={'font-weight-bold'}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'fzpbat'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  vyrobne: state.zemnyplyn.vyrobne.spolu,
  kotolne: state.kotolne.zps,
  bat: state.zemnyplynklucovanie.bat_spolu
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SumarBAT)