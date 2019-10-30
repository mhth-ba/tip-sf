import React from 'react'
import {connect} from 'react-redux'

import ReactHtmlParser from 'react-html-parser'

import {
  Table, Card, CardHeader, CardBody, CardFooter, UncontrolledTooltip
} from 'reactstrap'

import NumberFormat from 'react-number-format'

import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'
import Jednotka from '../../../../components/Jednotka'
import DecimalScale from '../helpers/DecimalScale'

import { updateUdajKotolneRequest } from '../../actions'
import { kotolne } from '../../selectors/zemny-plyn/zemnyplyn'

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

class PlynoveKotolne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const kotolne = this.props.kotolne
    let platne = []

    const decimal = this.props.nastroje.decimal_fzppk

    numFormat = {
      ...numFormat,
      decimalScale: Number(this.props.nastroje.decimal_fzppk)
    }

    kotolne.platnost
      .filter(x => x['plati'] === true)
      .map(x => platne.push(x['kotolna'].id))

    // const udaje = kotolne.udaje
    const udaje = this.props.udaje
      .filter(x => platne.includes(x['kotolna'].id))

    const spolu = this.props.spolu

    const vypocet = this.props.vypocet

    // class names pre bunky, ktore su pouzite v bublinach vypoctu - farebne oramovanie
    const {
      fzp_pk_spo_m3, fzp_pk_spo_mwh, fzp_pk_spo_nbsd, fzp_pk_spo_sd, fzp_pk_spo_pdm, fzp_pk_spo_cnsd
    } = vypocet

    const vstup = {
      //table: 'klucovanie',
      sqlt: 'SCT_KotolnaUdaje',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.updateUdaj
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Plynové kotolne</CardHeader>
        <CardBody>
          <Table size={'sm'} bordered>
            <thead>
            <tr className="text-center">
              <th>Kotolňa</th>
              <th>m<sup>3</sup></th>
              <th>MWh</th>
              <th>Náklady bez<br/>spotrebnej dane <Jednotka unit={'€'} /></th>
              <th>Spotrebná<br/>daň <Jednotka unit={'€'} /></th>
              <th id={'pk-pdm'}>PDM <Jednotka unit={'€'} /></th>
              <UncontrolledTooltip target={'pk-pdm'}>Prekročenie dohodnutých množstiev</UncontrolledTooltip>
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
              <td>{''}</td>
            </tr>
            {
              udaje.map(
                (u, ix) => (
                  <tr key={ix} className="text-right">
                    <td className="text-left">{ kotolne['kotolne'].find(k => k.id === u['kotolna']['id']).nazov }</td>
                    <Vstup {...vstup} id={ u.id } val={ u['m3'] } col={ 'm3' } unit={ReactHtmlParser('m<sup>3</sup>')} />
                    <Vstup {...vstup} id={ u.id } val={ u['mwh'] } col={ 'mwh' } unit={'MWh'} />
                    <Vstup {...vstup} id={ u.id } val={ u['nbsd'] } col={ 'nbsd' } unit={'€'} />
                    <Vstup {...vstup} id={ u.id } val={ u['sd'] } col={ 'sd' } unit={'€'} />
                    <Vstup {...vstup} id={ u.id } val={ u['pdm'] } col={ 'pdm' } unit={'€'} />
                    <Vypocet value={ u['cnsd'] }
                             cisla={ <div>
                               <NumberFormat {...vypocetFormat} value={u['nbsd']} />
                               &nbsp;+&nbsp;
                               <NumberFormat {...vypocetFormat} value={u['sd']} />
                               &nbsp;+&nbsp;
                               <NumberFormat {...vypocetFormat} value={u['pdm']} />
                             </div> }
                             popis={ <div>
                               <span className="text-nowrap">Náklady bez spotrebnej dane</span>
                               <br/>+&nbsp;
                               <span className="text-nowrap">Spotrebná daň</span>
                               <br/>+&nbsp;
                               <span className="text-nowrap">Prekročenie dohodnutých množstiev</span>
                             </div> }
                             cellsId={[]}
                             placement={'right'}
                             unit={'€'}
                             decimal={decimal}
                    />
                  </tr>
                )
              )
            }
            <tr>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
              <td>{''}</td>
            </tr>
            <tr className="text-right">
              <th className="text-left">Spolu</th>
              <Vypocet value={ spolu.m3 }
                       cisla={ <div>
                         { udaje.map(
                           (u, ix) => (
                             <span key={ix}>
                               {ix ? ' + ' : ''}
                               <NumberFormat {...vypocetFormat} value={u['m3']} />
                             </span>
                           )
                         )}
                       </div> }
                       popis={ <div className="text-nowrap">
                         <span className="text-muted">Sumár objemu zemného plynu v m<sup>3</sup></span>
                       </div> }
                       cellsId={[]}
                       placement={'bottom'}
                       unit={ <span>m<sup>3</sup></span> }
                       decimal={decimal}
                       class={fzp_pk_spo_m3 + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.mwh }
                       cisla={ <div>
                         { udaje.map(
                           (u, ix) => (
                             <span key={ix}>
                               {ix ? ' + ' : ''}
                               <NumberFormat {...vypocetFormat} value={u['mwh']} />
                             </span>
                           )
                         )}
                       </div> }
                       popis={ <div className="text-nowrap">
                         <span className="text-muted">Sumár objemu zemného plynu v MWh</span>
                       </div> }
                       cellsId={[]}
                       placement={'bottom'}
                       unit={'MWh'}
                       decimal={decimal}
                       class={fzp_pk_spo_mwh + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.nbsd }
                       cisla={ <div>
                         { udaje.map(
                           (u, ix) => (
                             <span key={ix}>
                               {ix ? ' + ' : ''}
                               <NumberFormat {...vypocetFormat} value={u['nbsd']} />
                             </span>
                           )
                         )}
                       </div> }
                       popis={ <div className="text-nowrap">
                         <span className="text-muted">Sumár nákladov bez spotrebnej dane</span>
                       </div> }
                       cellsId={[]}
                       placement={'bottom'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_pk_spo_nbsd + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.sd }
                       cisla={ <div>
                         { udaje.map(
                           (u, ix) => (
                             <span key={ix}>
                               {ix ? ' + ' : ''}
                               <NumberFormat {...vypocetFormat} value={u['sd']} />
                             </span>
                           )
                         )}
                       </div> }
                       popis={ <div className="text-nowrap">
                         <span className="text-muted">Sumár nákladov na spotrebnú daň</span>
                       </div> }
                       cellsId={[]}
                       placement={'bottom'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_pk_spo_sd + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.pdm }
                       cisla={ <div>
                         { udaje.map(
                           (u, ix) => (
                             <span key={ix}>
                               {ix ? ' + ' : ''}
                               <NumberFormat {...vypocetFormat} value={u['pdm']} />
                             </span>
                           )
                         )}
                       </div> }
                       popis={ <div className="text-nowrap">
                         <span className="text-muted">Sumár nákladov na prekročenie<br/>dohodnutých množstiev</span>
                       </div> }
                       cellsId={[]}
                       placement={'bottom'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_pk_spo_pdm + ' font-weight-bold'}
              />
              <Vypocet value={ spolu.cn }
                       cisla={ <div>
                         <NumberFormat {...vypocetFormat} value={spolu.nbsd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={spolu.sd} />
                         &nbsp;+&nbsp;
                         <NumberFormat {...vypocetFormat} value={spolu.pdm} />
                       </div> }
                       popis={ <div className="text-nowrap">
                         <span className="polozka-1 text-nowrap">Náklady bez spotrebnej dane</span>
                         <br/>+&nbsp;
                         <span className="polozka-2 text-nowrap">Spotrebná daň</span>
                         <br/>+&nbsp;
                         <span className="polozka-3 text-nowrap">Prekročenie dohodnutých množstiev</span>
                       </div> }
                       cellsId={['fzp_pk_spo_nbsd', 'fzp_pk_spo_sd', 'fzp_pk_spo_pdm']}
                       placement={'bottom'}
                       unit={'€'}
                       decimal={decimal}
                       class={fzp_pk_spo_cnsd + ' font-weight-bold'}
              />
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'fzppk'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  hlavny: state.hlavny,
  nastroje: state.nastroje,
  vypocet: state.vypocet,

  kotolne: state.kotolne,
  udaje: kotolne(state.kotolne.udaje),

  spolu: state.kotolne.zps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  updateUdaj: (e, table, hlavny) => dispatch(updateUdajKotolneRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlynoveKotolne)