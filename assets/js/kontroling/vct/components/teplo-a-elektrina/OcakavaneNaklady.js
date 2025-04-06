import React from 'react'
import {connect} from 'react-redux'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Alert,
  Input, Button,
  UncontrolledTooltip
} from 'reactstrap'
import NumberFormat from 'react-number-format'
import FontAwesome from 'react-fontawesome'

import Vstup from '../helpers/Vstup'
import Jednotka from '../../../../components/Jednotka'
import mesiac from '../../../../utils/mesiac'
import DecimalScale from '../helpers/DecimalScale'
import ZlomkovaCiara from '../../../../components/ZlomkovaCiara'

import {
  updateSkutocneNakladyRequest,
  updateOcakavaneNakladyRequest,
  updateOcakavaneNakladyVariantyRequest
} from '../../actions'

// Number format component
let numF = {
  thousandSeparator: ' ',
  decimalSeparator: ',',
  decimalScale: 0,
  displayType: 'text',
  value: 0
}

const Cislo = ({value, unit, dec}) => {
  return value !== null  ?
    <span>
      <NumberFormat {...numF} value={value} decimalScale={dec !== undefined ? dec : 0} /> {unit}
    </span>
    :
    <span><small>Chýbajú vstupné údaje</small></span>
}

class OcakavaneNaklady extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const hlavny = this.props.hlavny
    const mesiac = hlavny.mesiac

    const upload_sn = hlavny.upload.sn !== null

    const on = this.props.on     // ocakavane naklady
    const onv = this.props.onv   // ocakavane naklady varianty
    const varianty = on.varianty          // vypocitane hodnoty variantov
    const varianty_inp = onv.varianty     // input boxy variantov (rucny vstup)
    const decimal = this.props.nastroje.decimal_onte

    // ocakavane naklady
    const {
      skutocnost, // ocakavane naklady - skutocnost
      forecast,  // ocakavane naklady - forecast (100%)

      zp,       // zemny plyn
      tvo,      // tazky vykurovaci olej
      ntvz,     // nakupovane teplo - variabilna zlozka
      ee,       // elektricka energia
      voda,     // voda
      th,       // technologicke hmoty
      nekpz,    // nakup emisnych kvot a poplatky za znecistenie
      vnct,     // variabilne naklady v cene tepla
      dmt,      // dodane mnozstvo tepla
      vzct,     // variabilna zlozka ceny tepla bez dph
      ntfz,     // nakupovane teplo - fixna zlozka
      pm,       // poistenie majetku
      dane,     // dane
      naj,      // najomne
      rzpp,     // revizie, zakonne prehliadky a poplatky
      nauz,     // naklady na aucit uctovnej zavierky
      ohnm,     // odpisy hmotneho a nehmotneho majetku
      oosz,     // odpisy a opravy spolocnych zariadeni
      ous,      // opravy a udrziavanie spolu
      uiu,      // uroky z investicneho uveru
      rzfn,     // regulovana zlozka fixnych nakladov
      pz,       // primerany zisk
      fnpz,     // fixne naklady a primerany zisk v cene tepla
      rp,       // regulacny prikon
      fzct,     // fixna zlozka ceny tepla cez dph
    } = on

    const vstup_sn = {
      table: 'skutocnost',
      sqlt: 'VCT_SkutocneNaklady',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update_sn
    }

    const vstup_on = {
      table: 'forecast',
      sqlt: 'VCT_OcakavaneNaklady',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update_on
    }

    const vstup_onv = {
      table: 'varianty',
      sqlt: 'VCT_OcakavaneNakladyVarianty',
      hlavny: this.props.hlavny.id,
      dec: decimal,
      update: this.props.update_onv
    }

    return (
      <Card>
        <CardHeader className="bg-primary text-white">Očakávané náklady a cena tepla</CardHeader>
        <CardBody>
          { !upload_sn &&
            <Alert color={'danger'}>
              <FontAwesome name={'exclamation'} />
              &nbsp;
              Súbor so skutočnými nákladmi zatiaľ nebol nahraný, preto sa niektoré hodnoty nedajú vypočítať.
            </Alert>
          }
          { hlavny.nct === null &&
            <Alert color={'danger'}>
              <FontAwesome name={'exclamation'} />
              &nbsp;
              Je potrebné prepojiť vyhodnotenie ceny tepla so záznamom návrhu ceny tepla v karte hlavných údajov.
            </Alert>
          }
          { hlavny.sct === null &&
          <Alert color={'danger'}>
            <FontAwesome name={'exclamation'} />
            &nbsp;
            Je potrebné prepojiť vyhodnotenie ceny tepla so záznamom skutočnej ceny tepla v karte hlavných údajov.
          </Alert>
          }
          <Table size={'sm'} bordered>
            <thead>
            <tr className="text-center">
              <th></th>
              <th>Plán 1-12</th>
              <th>Skutočnosť 1-{mesiac}</th>
              <th>Forecast 1-12 <span className="text-muted">(100%)</span></th>
              { varianty.map((item, ix) => (
                <th key={ix}>
                  Forecast 1-12
                  <br/>
                  <span className="text-muted">(V={item.vychod_percento}% Z={item.zapad_percento}%)</span>
                  <br/>
                  <span className="text-muted font-weight-normal">variant #{ix+1}</span>
                </th>
              )) }
              <th>Porovnanie plánu a skutočnosti</th>
              <th>
                Porovnanie plánu a variantu forecastu
                <Input type={'select'} bsSize={'sm'}>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                </Input>
              </th>
            </tr>
            </thead>
            <tbody className="text-right">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              { varianty.map((item, ix) => <td key={ix}></td> ) }
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Zemný plyn</td>
              <td><Cislo value={zp.plan} unit={'€'} /></td>
              <td><Cislo value={zp.skutocnost} unit={'€'} /></td>
              <td><Cislo value={zp.forecast} unit={'€'} /></td>
              { varianty.map((item, ix) => <td key={ix}><NumberFormat {...numF} value={item.zp} /> €</td> )}
              <td><Cislo value={zp.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Ťažký vykurovací olej</td>
              <td><Cislo value={tvo.plan} unit={'€'} /></td>
              <td><Cislo value={tvo.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.tvo.id} val={forecast.tvo.hodnota} row={'tvo'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 2).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 2).hodnota}
                       row={'tvo'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={tvo.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Nakupované teplo - variabilná zložka</td>
              <td><Cislo value={ntvz.plan} unit={'€'} /></td>
              <Vstup {...vstup_sn} id={skutocnost.ntvz.id} val={skutocnost.ntvz.zadane} row={'ntvz'} col={'zadane'} unit={'€'} />
              <td><Cislo value={ntvz.forecast} unit={'€'} /></td>
              { varianty.map((item, ix) => <td key={ix}><NumberFormat {...numF} value={item.ntvz} /> €</td> )}
              <td><Cislo value={ntvz.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Elektrická energia</td>
              <td><Cislo value={ee.plan} unit={'€'} /></td>
              <td><Cislo value={ee.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.ee.id} val={forecast.ee.hodnota} row={'ee'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 3).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 3).hodnota}
                       row={'ee'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={ee.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Voda</td>
              <td><Cislo value={voda.plan} unit={'€'} /></td>
              <td><Cislo value={voda.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.voda.id} val={forecast.voda.hodnota} row={'voda'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 4).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 4).hodnota}
                       row={'voda'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={voda.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Technologické hmoty</td>
              <td><Cislo value={th.plan} unit={'€'} /></td>
              <td><Cislo value={th.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.th.id} val={forecast.th.hodnota} row={'th'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 5).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 5).hodnota}
                       row={'th'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={th.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Nákup emisných kvót a poplatky za znečistenie</td>
              <td><Cislo value={nekpz.plan} unit={'€'} /></td>
              <Vstup {...vstup_sn} id={skutocnost.nekpz.id} val={skutocnost.nekpz.zadane} row={'nekpz'} col={'zadane'} unit={'€'} />
              <Vstup {...vstup_on} id={forecast.nekpz.id} val={forecast.nekpz.hodnota} row={'nekpz'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 117).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 117).hodnota}
                       row={'nekpz'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={nekpz.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr className="bg-yellower">
              <th className="text-left">Variabilné náklady v cene tepla</th>
              <td className="font-weight-bold"><Cislo value={vnct.plan} unit={'€'} /></td>
              <td className="font-weight-bold"><Cislo value={vnct.skutocnost} unit={'€'} /></td>
              <td className="font-weight-bold"><Cislo value={vnct.forecast} unit={'€'} /></td>
              { varianty.map((item, ix) =>
                <td className="font-weight-bold" key={ix}><Cislo value={item.vnct} unit={'€'} /></td>
              )}
              <td className="font-weight-bold"><Cislo value={vnct.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Objednané/dodané množstvo tepla</td>
              <td><Cislo value={dmt.plan} unit={'kWh'} /></td>
              <td><Cislo value={dmt.skutocnost} unit={'kWh'} /></td>
              <td><Cislo value={dmt.forecast} unit={'kWh'} /></td>
              { varianty.map((item, ix) =>
                <td key={ix}><NumberFormat {...numF} value={item.dmt} /> kWh</td>
              )}
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="bg-lightorange">
              <th className="text-left">Variabilná zložka ceny tepla bez DPH</th>
              <td className="font-weight-bold"><Cislo value={vzct.plan} unit={'€/kWh'} dec={4} /></td>
              <td className="font-weight-bold"><Cislo value={vzct.skutocnost} unit={'€/kWh'} dec={4} /></td>
              <td className="font-weight-bold"><Cislo value={vzct.forecast} unit={'€/kWh'} dec={4} /></td>
              { varianty.map((item, ix) =>
                <td className="font-weight-bold" key={ix}><NumberFormat {...numF} value={item.vzct} decimalScale={4} /> €/kWh</td>
              )}
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="text-left">Nakupované teplo - fixná zložka</td>
              <td><Cislo value={ntfz.plan} unit={'€'} /></td>
              <Vstup {...vstup_sn} id={skutocnost.ntfz.id} val={skutocnost.ntfz.zadane} row={'ntfz'} col={'zadane'} unit={'€'} />
              <td><Cislo value={ntfz.forecast} unit={'€'} /></td>
              { varianty.map((item, ix) =>
                <td key={ix}><NumberFormat {...numF} value={item.ntfz} /> €</td>
              )}
              <td><NumberFormat {...numF} value={ntfz.porovnanie_ps} /> €</td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Poistenie majetku</td>
              <td><Cislo value={pm.plan} unit={'€'} /></td>
              <td><Cislo value={pm.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.pm.id} val={forecast.pm.hodnota} row={'pm'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 7).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 7).hodnota}
                       row={'pm'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={pm.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Dane</td>
              <td><Cislo value={dane.plan} unit={'€'} /></td>
              <td><Cislo value={dane.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.dane.id} val={forecast.dane.hodnota} row={'dane'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 8).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 8).hodnota}
                       row={'dane'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={dane.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Nájomné</td>
              <td><Cislo value={naj.plan} unit={'€'} /> €</td>
              <td><Cislo value={naj.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.naj.id} val={forecast.naj.hodnota} row={'naj'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 9).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 9).hodnota}
                       row={'naj'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={naj.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Revízie, zákonné prehliadky a poplatky</td>
              <td><Cislo value={rzpp.plan} unit={'€'} /> €</td>
              <td><Cislo value={rzpp.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.rzpp.id} val={forecast.rzpp.hodnota} row={'rzpp'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 10).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 10).hodnota}
                       row={'rzpp'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={rzpp.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Náklady na audit účtovnej závierky</td>
              <td><Cislo value={nauz.plan} unit={'€'} /></td>
              <Vstup {...vstup_sn} id={skutocnost.nauz.id} val={skutocnost.nauz.zadane} row={'nauz'} col={'zadane'} unit={'€'} />
              <Vstup {...vstup_on} id={forecast.nauz.id} val={forecast.nauz.hodnota} row={'nauz'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 113).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 113).hodnota}
                       row={'nauz'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={nauz.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Odpisy hmotného a nehmotného majetku</td>
              <td><Cislo value={ohnm.plan} unit={'€'} /></td>
              <Vstup {...vstup_sn} id={skutocnost.ohnm.id} val={skutocnost.ohnm.zadane} row={'ohnm'} col={'zadane'} unit={'€'} />
              <Vstup {...vstup_on} id={forecast.ohnm.id} val={forecast.ohnm.hodnota} row={'ohnm'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 101).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 101).hodnota}
                       row={'ohnm'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={ohnm.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Odpisy a opravy spoločných zariadení</td>
              <td><Cislo value={oosz.plan} unit={'€'} /> €</td>
              <Vstup {...vstup_sn} id={skutocnost.oosz.id} val={skutocnost.oosz.zadane} row={'oosz'} col={'zadane'} unit={'€'} />
              <Vstup {...vstup_on} id={forecast.oosz.id} val={forecast.oosz.hodnota} row={'oosz'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 102).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 102).hodnota}
                       row={'oosz'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={oosz.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Opravy a udržiavanie spolu</td>
              <td><Cislo value={ous.plan} unit={'€'} /></td>
              <td><Cislo value={ous.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.ous.id} val={forecast.ous.hodnota} row={'ous'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 11).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 11).hodnota}
                       row={'ous'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={ous.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Úroky z investičného úveru</td>
              <td><Cislo value={uiu.plan} unit={'€'} /></td>
              <td><Cislo value={uiu.skutocnost} unit={'€'} /></td>
              <Vstup {...vstup_on} id={forecast.uiu.id} val={forecast.uiu.hodnota} row={'uiu'} col={'hodnota'} unit={'€'} />
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 12).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 12).hodnota}
                       row={'uiu'} col={'hodnota'} unit={'€'}
                />
              )}
              <td><Cislo value={uiu.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Regulovaná zložka fixných nákladov</td>
              <td><Cislo value={rzfn.plan} unit={'€'} /></td>
              <td>-</td>
              <td><NumberFormat {...numF} value={rzfn.forecast} /> €</td>
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 201).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 201).hodnota}
                       row={'rzfn'} col={'hodnota'} unit={'€'}
                />
              )}
              <td>-</td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Primeraný zisk</td>
              <td><Cislo value={pz.plan} unit={'€'} /></td>
              <td>-</td>
              <td><NumberFormat {...numF} value={pz.forecast} /> €</td>
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 202).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 202).hodnota}
                       row={'pz'} col={'hodnota'} unit={'€'}
                />
              )}
              <td>-</td>
              <td></td>
            </tr>
            <tr className="bg-lightblue">
              <th className="text-left">Fixné náklady a primeraný zisk v cene tepla</th>
              <td className="font-weight-bold"><Cislo value={fnpz.plan} unit={'€'} /></td>
              <td>-</td>
              <td className="font-weight-bold"><Cislo value={fnpz.forecast} unit={'€'} /></td>
              { varianty.map((item, ix) =>
                <td className="font-weight-bold" key={ix}><NumberFormat {...numF} value={item.fnpzct} /> €</td>
              )}
              <td className="font-weight-bold"><Cislo value={fnpz.porovnanie_ps} unit={'€'} /></td>
              <td></td>
            </tr>
            <tr>
              <td className="text-left">Regulačný príkon</td>
              <td><Cislo value={rp.plan} unit={'kW'} /></td>
              <td><Cislo value={rp.skutocnost} unit={'kW'} /></td>
              <td><Cislo value={rp.forecast} unit={'kW'} /></td>
              { varianty.map((item, ix) =>
                <Vstup key={ix} {...vstup_onv}
                       id={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 203).id}
                       val={varianty_inp.find(x => x.variant.id === item.id && x.ucet.id === 203).hodnota}
                       row={'rp'} col={'hodnota'} unit={'€'}
                />
              )}
              <td>-</td>
              <td></td>
            </tr>
            <tr className="bg-lightbluer">
              <th className="text-left">Fixná zložka ceny tepla bez DPH</th>
              <td className="font-weight-bold"><Cislo value={fzct.plan} unit={'€/kW'} dec={4} /></td>
              <td>-</td>
              <td className="font-weight-bold"><Cislo value={fzct.forecast} unit={'€/kW'} dec={4} /></td>
              { varianty.map((item, ix) =>
                <td className="font-weight-bold" key={ix}><NumberFormat {...numF} value={item.fzct} decimalScale={4} /> €/kW</td>
              )}
              <td>-</td>
              <td></td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <DecimalScale id={'onte'} />
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,

  nastroje: state.nastroje,
  hlavny: state.hlavny,
  on: state.ocakavanenaklady,
  onv: state.ocakavanenakladyvarianty,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  update_sn: (e, table, hlavny) => dispatch(updateSkutocneNakladyRequest(e, table, hlavny)),
  update_on: (e, table, hlavny) => dispatch(updateOcakavaneNakladyRequest(e, table, hlavny)),
  update_onv: (e, table, hlavny) => dispatch(updateOcakavaneNakladyVariantyRequest(e, table, hlavny))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OcakavaneNaklady)