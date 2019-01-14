import React from 'react'
import {connect} from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Input, Table } from 'reactstrap'

import Suma from './helpers/Suma'

class Sumarizacia extends React.Component {
  constructor(props) {
    super(props)
  }

  findSuma(riadok, stlpec) {
    const polozky = this.props.sumarizacia.polozky
    const item = polozky.find( x => x['riadok'] == riadok )

    switch (stlpec) {
      case 'z': stlpec = 'zaklad'; break;
      case 'd': stlpec = 'dan'; break;
    }

    return item === undefined ? undefined : item[stlpec]
  }

  render() {

    const init = this.props.hlavny.initialized

    const r3 = this.findSuma('3_4', 'z')
    const r4 = this.findSuma('3_4', 'd')
    const r5 = this.findSuma('5_6', 'z')
    const r6 = this.findSuma('5_6', 'd')
    const r7 = this.findSuma('7_8', 'z')
    const r8 = this.findSuma('7_8', 'd')
    const r9 = this.findSuma('9_10', 'z')
    const r10 = this.findSuma('9_10', 'd')
    const r15 = this.findSuma('15', 'z')
    const r20 = this.findSuma('20', 'd')
    const r21 = this.findSuma('21', 'd')
    const r22 = this.findSuma('22', 'd')
    const r23 = this.findSuma('23', 'd')
    const r26 = this.findSuma('26_27', 'z')
    const r27 = this.findSuma('26_27', 'd')
    const r28 = this.findSuma('28', 'd')

    return (
      <div>
        { init === true &&
          <Card>
            <CardHeader className="bg-primary text-white">
              Sumarizácia a popis tlačiva
            </CardHeader>
            <CardBody>
              <Table>
                <thead>
                <tr>
                  <th>Popis položky</th>
                  <th colSpan={2} className="text-center">Základ dane</th>
                  <th colSpan={2} className="text-center">DPH</th>
                  <th>Účet HK</th>
                  <th>Znak dane</th>
                  <th>Druh dokladu</th>
                  <th>Strana</th>
                </tr>
                <tr>
                  <th>{''}</th>
                  <th>Riadok dane</th>
                  <th className="text-right">Suma</th>
                  <th>Riadok dane</th>
                  <th className="text-right">Suma</th>
                  <th>{''}</th>
                  <th>{''}</th>
                  <th>{''}</th>
                  <th>{''}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Dodanie tovaru a služby - § 8,9 - 10% sadzba DPH</td>
                  <td className="text-danger font-weight-bold">1</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">2</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td rowSpan={3} className="align-middle">
                    Dodanie tovaru a služby - § 8,9 - 20% sadzba DPH <br/>
                    <span className="text-primary">
                      (dodanie tovaru a služby v tuzemsku, fakturácia za teplo, elektrinu, vodu, nájom)
                    </span>
                  </td>
                  <td rowSpan={3} className="align-middle text-danger font-weight-bold">3</td>
                  <td rowSpan={3} className="align-middle font-weight-bold text-right"><Suma v={r3} /></td>
                  <td rowSpan={3} className="align-middle text-danger font-weight-bold">4</td>
                  <td rowSpan={3} className="align-middle text-right font-weight-bold"><Suma v={r4} /></td>
                  <td>343121</td>
                  <td>3B</td>
                  <td>OB, ST, OY</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>343191</td>
                  <td>3D</td>
                  <td>OO, ID, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>343181</td>
                  <td>3V</td>
                  <td>DI, DJ, DK, PP, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>
                    Nadobudnutie tovaru v tuzemsku - § 11, 11a - 10% sadzba DPH <br/>
                    <span className="text-primary">(tovar z EÚ)</span>
                  </td>
                  <td className="text-danger font-weight-bold">5</td>
                  <td className="text-right font-weight-bold"><Suma v={r5} /></td>
                  <td className="text-danger font-weight-bold">6</td>
                  <td className="text-right font-weight-bold"><Suma v={r6} /></td>
                  <td>343180</td>
                  <td>LK, KL</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>
                    Nadobudnutie tovaru v tuzemsku - § 11, 11a - 20% sadzba DPH <br/>
                    <span className="text-primary">(tovar z EÚ)</span>
                  </td>
                  <td className="text-danger font-weight-bold">7</td>
                  <td className="text-right font-weight-bold"><Suma v={r7} /></td>
                  <td className="text-danger font-weight-bold">8</td>
                  <td className="text-right font-weight-bold"><Suma v={r8} /></td>
                  <td>343151</td>
                  <td>XS, XP</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td rowSpan={2} className="align-middle">
                    Tovary a služby, pri ktorých platí príjemca DPH - § 69 ods 2 a 9 až 12 <br/>
                    <span className="text-primary">
                      (tovar od zahraničného dodávateľa  z EÚ alebo 3. štátu zo skladu v tuzemsku (napr. Alza), <br/>
                      služby s miestom dodania podľa § 16 napr. ubytovacie služby, emisné kvóty,
                      tuzemské samozdanenie stavebných prác...)
                    </span>
                  </td>
                  <td rowSpan={2} className="align-middle text-danger font-weight-bold">9</td>
                  <td rowSpan={2} className="align-middle text-right font-weight-bold"><Suma v={r9} /></td>
                  <td rowSpan={2} className="align-middle text-danger font-weight-bold">10</td>
                  <td rowSpan={2} className="align-middle text-right font-weight-bold"><Suma v={r10} /></td>
                  <td>343161</td>
                  <td>XU, XL</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>343871</td>
                  <td>DA</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>
                    Služby, pri ktorých príjemca platí DPH - § 69 ods 3 <br/>
                    <span className="text-primary">
                      (služby z EÚ alebo z 3. štátu  s miestom dodania podľa § 15 napr. právne, sprostredkovateľ., <br/>
                      reklamné, školenia pre vymedzený okruh účastíkov, ...)
                    </span>
                  </td>
                  <td className="text-danger font-weight-bold">11</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">12</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    Tovary, pri ktorých druhý odberateľ platí DPH - § 69 ods 7 <br/>
                    <span className="text-primary">(trojstranný obchod)</span>
                  </td>
                  <td className="text-danger font-weight-bold">13</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">14</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    Dodanie tovaru a služieb s oslobodením od dane -  § 28 - § 43, § 46 -48 ods. 8 <br/>
                    <span className="text-primary">
                      (nájmy pre občanov, finančné, poisťovnícke služby, aj D, Ť, dodanie tovaru a služieb
                      do EÚ pre odberateľa s IČ DPH)
                    </span>
                  </td>
                  <td className="text-danger font-weight-bold">15</td>
                  <td className="text-right font-weight-bold"><Suma v={r15} /></td>
                  <td>×</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>1G</td>
                  <td>ID, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>
                    z toho podľa  § 43 ods 1 a 4 <br/>
                    <span className="text-primary">(intrakomunitárne dodanie tovaru, aj D, Ť)</span>
                  </td>
                  <td className="text-danger font-weight-bold">16</td>
                  <td>{''}</td>
                  <td>×</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    z toho podľa  § 46, 47, 48  ods 8 <br/>
                    <span className="text-primary">(vývoz tovaru a služieb)</span>
                  </td>
                  <td className="text-danger font-weight-bold">17</td>
                  <td>{''}</td>
                  <td>×</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    Daň pri zrušení registrácie <br/>
                    <span className="text-primary">
                      (suma dane prislúchajúca k zostatkovej cene majetku a zásob pri zrušení registrácie platiteľa DPH)
                    </span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">18</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    <strong>DAŇ CELKOM</strong> <br/>
                    <span className="text-primary">(súčet riadku 2,4,6,8,10,12,14,18)</span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">19</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td rowSpan={5} className="align-middle">
                    odpočítanie dane celkom - 10% sadzba DPH <br/>
                    <span className="text-primary">
                      (tuzemsko, samozdanenie, vysporiadanie koeficientu, úprava odpočítanej DPH pri zmene
                      rozsahu použitia investič. majetku)
                    </span>
                  </td>
                  <td rowSpan={5} className="align-middle">×</td>
                  <td rowSpan={5} className="align-middle">{''}</td>
                  <td rowSpan={5} className="align-middle text-danger font-weight-bold">20</td>
                  <td rowSpan={5} className="align-middle text-right font-weight-bold"><Suma v={r20} /></td>
                  <td>343310</td>
                  <td>HD</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343340</td>
                  <td>HK</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343740</td>
                  <td>LK</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343290</td>
                  <td>KL</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>{''}</td>
                  <td>KF, KP</td>
                  <td>ID, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td rowSpan={14} className="align-middle">
                    odpočítanie dane celkom - 20% sadzba DPH <br/>
                    <span className="text-primary">
                      (tuzemsko, samozdanenie, vysporiadanie koeficientu, úprava odpočítanej DPH pri zmene
                      rozsahu použitia investič. majetku)
                    </span>
                  </td>
                  <td rowSpan={14} className="align-middle">×</td>
                  <td rowSpan={14} className="align-middle">{''}</td>
                  <td rowSpan={14} className="align-middle text-danger font-weight-bold">21</td>
                  <td rowSpan={14} className="align-middle text-right font-weight-bold"><Suma v={r21} /></td>
                  <td>343431</td>
                  <td>3V</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343870</td>
                  <td>DA</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343761</td>
                  <td>XU</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343771</td>
                  <td>XL</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343431</td>
                  <td>XK</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343411</td>
                  <td>XD</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343741</td>
                  <td>XS</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343751</td>
                  <td>XP</td>
                  <td>DI, DJ, DK, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343250</td>
                  <td>QD, QK</td>
                  <td>{''}</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343431</td>
                  <td>KX</td>
                  <td>ID, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>{''}</td>
                  <td>KF, KP</td>
                  <td>{''}</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>511990</td>
                  <td>D3</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>501990</td>
                  <td>D4</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>518990</td>
                  <td>D5</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td rowSpan={3} className="align-middle">
                    z toho § 51 ods.1 písm.a ) - 10% sadzba DPH <br/>
                    <span className="text-primary">(tuzemsko)</span>
                  </td>
                  <td rowSpan={3} className="align-middle">×</td>
                  <td rowSpan={3} className="align-middle">{''}</td>
                  <td rowSpan={3} className="align-middle text-danger font-weight-bold">22</td>
                  <td rowSpan={3} className="align-middle text-right font-weight-bold"><Suma v={r22} /></td>
                  <td>343310</td>
                  <td>HD</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343340</td>
                  <td>HK</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>{''}</td>
                  <td>KF, KP</td>
                  <td>ID, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td rowSpan={6} className="align-middle">
                    z toho § 51 ods.1 písm.a ) - 20% sadzba DPH <br/>
                    <span className="text-primary">(tuzemsko)</span>
                  </td>
                  <td rowSpan={6} className="align-middle">×</td>
                  <td rowSpan={6} className="align-middle">{''}</td>
                  <td rowSpan={6} className="align-middle text-danger font-weight-bold">23</td>
                  <td rowSpan={6} className="align-middle text-right font-weight-bold"><Suma v={r23} /></td>
                  <td>343431</td>
                  <td>XK</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343411</td>
                  <td>XD</td>
                  <td>DI, DJ, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343431</td>
                  <td>3V</td>
                  <td>DI, D J, DK, DV, PP, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343250</td>
                  <td>QD, QK</td>
                  <td>{''}</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343431</td>
                  <td>KX</td>
                  <td>ID, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>{''}</td>
                  <td>KF, KP</td>
                  <td>{''}</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>
                    z toho § 51 ods.1 písm.d) - 10% sadzba DPH<br/>
                    <span className="text-primary">(DPH zaplatená v tuzemsku pri dovoze tovaru)</span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">24</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    z toho § 51 ods.1 písm.d) - 20% sadzba DPH<br/>
                    <span className="text-primary">(DPH zaplatená v tuzemsku pri dovoze tovaru)</span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">25</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td rowSpan={4} className="align-middle">
                    Rozdiel v ZD a DPH po oprave - § 25 ods. 1 a 3 <br/>
                    <span className="text-primary">(D, Ť na výstupe)</span>
                  </td>
                  <td rowSpan={4} className="align-middle text-danger font-weight-bold">26</td>
                  <td rowSpan={4} className="align-middle text-right font-weight-bold"><Suma v={r26} /></td>
                  <td rowSpan={4} className="align-middle text-danger font-weight-bold">27</td>
                  <td rowSpan={4} className="align-middle text-right font-weight-bold"><Suma v={r27} /></td>
                  <td>343121</td>
                  <td>3H</td>
                  <td>OB, MF, OT, OD, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>343191</td>
                  <td>3K</td>
                  <td>OT, OD, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>343871</td>
                  <td>DR</td>
                  <td>DM, DN, DO, DR, DS, DT, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td>343181</td>
                  <td>3V</td>
                  <td>DM, DN, DO, ST</td>
                  <td>Výstup</td>
                </tr>
                <tr>
                  <td rowSpan={6} className="align-middle">
                    Oprava odpočítanej dane - § 53 <br/>
                    <span className="text-primary">(D, Ť na vstupe)</span>
                  </td>
                  <td rowSpan={6} className="align-middle">×</td>
                  <td rowSpan={6} className="align-middle">{''}</td>
                  <td rowSpan={6} className="align-middle text-danger font-weight-bold">28</td>
                  <td rowSpan={6} className="align-middle text-right font-weight-bold"><Suma v={r28} /></td>
                  <td>343441</td>
                  <td>XG</td>
                  <td>DM, DN, DO, DR, DS, DT, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343451</td>
                  <td>XH</td>
                  <td>DM, DN, DO, DR, DS, DT, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343270</td>
                  <td>DF</td>
                  <td>DM, DN, DO, DR, DS, DT, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343280</td>
                  <td>DC</td>
                  <td>DM, DN, DO, DR, DS, DT, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343870</td>
                  <td>DR</td>
                  <td>DM, DN, DO, DR, DS, DT, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>343431</td>
                  <td>3V</td>
                  <td>DM, DN, DO, ST</td>
                  <td>Vstup</td>
                </tr>
                <tr>
                  <td>
                    Odpočítanie dane pri registrácii - § 55 <br/>
                    <span className="text-primary">(odpočet DPH z tovarov a služieb nadobudnutých pred registráciou)</span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">29</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>Vrátenie dane cestujúcim pri vývoze tovaru - § 60</td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">30</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    Vlastá daňová povinnosť <br/>
                    <span className="text-primary">(kladný rozdiel medzi výstupnou DPH a odpočitateľnou DPH)</span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">31</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    Nadmerný odpočet <br/>
                    <span className="text-primary">(záporný rozdiel medzi výstupnou DPH a odpočitateľnou DPH)</span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">32</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    Nadmerný odpočet odpočítaný od daňovej povinnosti <br/>
                    <span className="text-primary">
                      (NO za predchádzajúce zdaň. obd., ktorý sa odpočítava z daň. povinnosti v r. 31)
                    </span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">33</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>Vlastná daňová povinnosť na úhradu</td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">34</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    Trojstranný obchod § 45 - Nadobudnutie tovaru prvým odberateľom <br/>
                    <span className="text-primary">
                      (základ dane za tovary nadobudnuté z EÚ prvým odberateľom v čl. štáte
                      druhého odberateľa pri trojstrannom obchode)
                    </span>
                  </td>
                  <td className="text-danger font-weight-bold">35</td>
                  <td>{''}</td>
                  <td>×</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    Dodanie tovaru prvým odberateľom <br/>
                    <span className="text-primary">
                      (základ dane za tovary dodané v prvým odberateľom druhému odberateľovi v čl. štáte
                      druhého odberateľa pri trojstrannom obchode)
                    </span>
                  </td>
                  <td className="text-danger font-weight-bold">36</td>
                  <td>{''}</td>
                  <td>×</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>
                    Údaje dodat. daň. priznania - Rozdiel oproti poslednej známej vlastnej daň. povinnosti
                    alebo nadmer. odpočtu
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">37</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                </tr>
                <tr>
                  <td>Údaje dodat. daň. priznania - Daň na úhradu (+ /-)</td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">38</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
                  <td>{''}</td>
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
  hlavny: state.hlavny,
  sumarizacia: state.sumarizacia
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sumarizacia)