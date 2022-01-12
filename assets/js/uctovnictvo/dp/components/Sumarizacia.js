import React from 'react'
import {connect} from 'react-redux'
import { Card, CardHeader, CardBody, CardFooter, Table, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import Suma from './helpers/Suma'
import { dateYearMonth, dateYear } from '../../../utils/format'

class Sumarizacia extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pomocnik: false
    }

    this.pomocnik = this.pomocnik.bind(this)
  }

  pomocnik(e) {
    e.preventDefault()
    this.setState({ pomocnik: !this.state.pomocnik })
  }

  findSuma(riadok) {
    const polozky = this.props.riadky.riadky
    const item = polozky.find( x => x['riadok'] === riadok )

    if (item === undefined || item['suma'] === null) {
      return 0
    } else {
      return item['suma']
    }
  }

  render() {

    const init = this.props.hlavny.initialized

    const r1 = this.findSuma(1)
    const r2 = this.findSuma(2)
    const r3 = this.findSuma(3)
    const r4 = this.findSuma(4)
    const r5 = this.findSuma(5)
    const r6 = this.findSuma(6)
    const r7 = this.findSuma(7)
    const r8 = this.findSuma(8)
    const r9 = this.findSuma(9)
    const r10 = this.findSuma(10)
    const r11 = this.findSuma(11)
    const r12 = this.findSuma(12)
    const r15 = this.findSuma(15)
    const r19 = this.findSuma(19)
    const r20 = this.findSuma(20)
    const r21 = this.findSuma(21)
    const r22 = this.findSuma(22)
    const r23 = this.findSuma(23)
    const r26 = this.findSuma(26)
    const r27 = this.findSuma(27)
    const r28 = this.findSuma(28)
    const r31 = this.findSuma(31)
    const r32 = this.findSuma(32)
    const r33 = this.findSuma(33)
    const r34 = this.findSuma(34)
    const r37 = this.findSuma(37)
    const r38 = this.findSuma(38)

    const verzia_2020 = dateYear(this.props.hlavny.obdobie) >= 2020
    const verzia_2021 = dateYear(this.props.hlavny.obdobie) >= 2021

    const pomocnik = this.state.pomocnik

    return (
      <div>
        { init &&
          <Card>
            <CardHeader className="bg-primary text-white sticky-top">
              Sumarizácia a popis tlačiva
              <span className="pull-right">
                <span>
                { dateYearMonth(this.props.hlavny.obdobie) }
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  { this.props.hlavny.druh.druh }
              </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={this.pomocnik} color={'light'} size={'sm'}>
                  Pomocník
                  &nbsp;&nbsp;
                { !pomocnik ?
                  <FontAwesome name={'eye'}/>
                  :
                  <FontAwesome name={'minus-square'}/>
                }
                </Button>
              </span>
            </CardHeader>
            <CardBody>
              <Table bordered hover size={'sm'}>
                <thead>
                <tr>
                  <th style={{ width: '800px' }}>Popis položky</th>
                  <th className="text-center" style={{ width: '150px' }}>Základ dane</th>
                  <th className="text-center" style={{ width: '150px' }}>DPH</th>
                  { pomocnik && <th>Účet HK</th> }
                  { pomocnik && <th>Znak dane</th> }
                  { pomocnik && <th>Druh dokladu</th> }
                  { pomocnik && <th>Strana</th> }
                  { pomocnik && <th>Sekcia KV</th> }
                </tr>
                </thead>
                { verzia_2021 ?

                  /* Od roku 2021 január */
                  <tbody>
                  <tr>
                    <td>Dodanie tovaru a služby - § 8,9 a daň § 81 - 10% sadzba DPH</td>
                    <td>
                      <span className="cislo-riadku">01</span>
                      <div className="suma"><Suma v={r1} /></div>
                    </td>
                    <td>
                      <span className="cislo-riadku">02</span>
                      <div className="suma"><Suma v={r2} /></div>
                    </td>
                    { pomocnik && <td>343192</td> }
                    { pomocnik && <td>2A</td> }
                    { pomocnik && <td>OD, OO, OT, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td>A1</td> }
                  </tr>
                  <tr>
                    <td rowSpan={ pomocnik ? 3 : 1} className="align-middle">
                      Dodanie tovaru a služby - § 8,9 - 20% sadzba DPH <br/>
                      <span className="text-primary">
                        (dodanie tovaru a služby v tuzemsku, fakturácia za teplo, elektrinu, vodu, nájom)
                      </span>
                    </td>
                    <td rowSpan={ pomocnik ? 3 : 1 } className="align-middle">
                      <span className="cislo-riadku">03</span>
                      <div className="suma"><Suma v={r3} /></div>
                    </td>
                    <td rowSpan={ pomocnik ? 3 : 1 } className="align-middle">
                      <span className="cislo-riadku">04</span>
                      <div className="suma"><Suma v={r4} /></div>
                    </td>
                    { pomocnik && <td>343121</td> }
                    { pomocnik && <td>3B</td> }
                    { pomocnik && <td>OB, OY, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={3}>A1, D2</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343191</td>
                    <td>3D</td>
                    <td>OO, ID, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343181</td>
                    <td>3V</td>
                    <td>DI, DJ, DK, PP, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  <tr>
                    <td>
                      Nadobudnutie tovaru v tuzemsku - § 11, 11a - 10% sadzba DPH <br/>
                      <span className="text-primary">(tovar z EÚ)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">05</span>
                      <div className="suma"><Suma v={r5} /></div>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">06</span>
                      <div className="suma"><Suma v={r6} /></div>
                    </td>
                    { pomocnik && <td>343180</td> }
                    { pomocnik && <td>LK, KL</td> }
                    { pomocnik && <td>DI, DJ, DK, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td>B1</td> }
                  </tr>
                  <tr>
                    <td>
                      Nadobudnutie tovaru v tuzemsku - § 11, 11a - 20% sadzba DPH <br/>
                      <span className="text-primary">(tovar z EÚ)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">07</span>
                      <div className="suma"><Suma v={r7} /></div>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">08</span>
                      <div className="suma"><Suma v={r8} /></div>
                    </td>
                    { pomocnik && <td>343151</td> }
                    { pomocnik && <td>XS, XP</td> }
                    { pomocnik && <td>DI, DJ, DK, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td>B1</td> }
                  </tr>
                  <tr>
                    <td rowSpan={ pomocnik ? 5 : 1 } className="align-middle">
                      Tovary a služby, pri ktorých platí príjemca DPH - § 69 ods. 2, 3 a 9 až 12 <br/>
                      <span className="text-primary">
                        (tovar od zahraničného dodávateľa z EÚ alebo 3. štátu zo skladu v tuzemsku (napr. Alza), <br/>
                        služby s miestom dodania podľa § 16 napr. ubytovacie služby, emisné kvóty,
                        tuzemské samozdanenie stavebných prác...)
                      </span><br/><br/>
                      <span className="text-primary">
                        (služby z EÚ alebo z 3. štátu  s miestom dodania podľa § 15 napr. právne, sprostredkovateľ., <br/>
                        reklamné, školenia pre vymedzený okruh účastíkov, ...)
                      </span>
                    </td>
                    <td rowSpan={ pomocnik ? 5 : 1 } className="align-middle">
                      <span className="cislo-riadku">09</span>
                      <div className="suma"><Suma v={r9 + r11} /></div>
                    </td>
                    <td rowSpan={ pomocnik ? 5 : 1 } className="align-middle">
                      <span className="cislo-riadku">10</span>
                      <div className="suma"><Suma v={r10 + r12} /></div>
                    </td>
                    { pomocnik && <td>343161</td> }
                    { pomocnik && <td>XU, XL</td> }
                    { pomocnik && <td>DI, DJ, DK, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={5}>B1</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343871</td>
                    <td>DA</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343151</td>
                    <td>XX, XY</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343180</td>
                    <td>XE, XF</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Výstup</td>
                  </tr>}
                  { pomocnik &&
                  <tr>
                    <td>343161</td>
                    <td>XA, XB</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Výstup</td>
                  </tr>}
                  <tr>
                    <td>
                      Tovary, pri ktorých druhý odberateľ platí DPH - § 69 ods. 7 <br/>
                      <span className="text-primary">(trojstranný obchod)</span>
                    </td>
                    <td>
                      <span className="cislo-riadku">11</span>
                    </td>
                    <td>
                      <span className="cislo-riadku">12</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Dodanie tovaru a služieb s oslobodením od dane -  § 28 - § 43, § 46 -48 ods. 8 <br/>
                      <span className="text-primary">
                        (nájmy pre občanov, finančné, poisťovnícke služby, aj D, Ť, dodanie tovaru a služieb
                        do EÚ pre odberateľa s IČ DPH)
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">13</span>
                      <div className="suma"><Suma v={r15} /></div>
                    </td>
                    <td></td>
                    { pomocnik && <td></td> }
                    { pomocnik && <td>1G</td> }
                    { pomocnik && <td>ID, OO, OD, OT, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                  </tr>
                  <tr>
                    <td>
                      z toho podľa  § 43 ods. 1 a 4 <br/>
                      <span className="text-primary">(intrakomunitárne dodanie tovaru, aj D, Ť)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">14</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      z toho podľa  § 46, 47, 48  ods. 8 <br/>
                      <span className="text-primary">(vývoz tovaru a služieb)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">15</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Daň podľa § 48ca ods. 2, § 48d ods. 15 a § 48e ods. 3, 6 a 8 zákona <br/>
                      <span className="text-primary">
                        (suma dane prislúchajúca k zostatkovej cene majetku a zásob pri zrušení registrácie platiteľa DPH)
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">16</span>
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#feffe5' }}>
                    <td colSpan={2}>
                      <strong>Daň celkom</strong> <br/>
                      <span className="text-primary">(súčet riadku 2, 4, 6, 8, 10, 12, a 16)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">17</span>
                      <div className="suma"><Suma v={r19} /></div>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={ pomocnik ? 5 : 1 } colSpan={2} className="align-middle">
                      <strong>Odpočítanie dane celkom</strong> - 10% sadzba DPH <br/>
                      <span className="text-primary">
                        (tuzemsko, samozdanenie, vysporiadanie koeficientu, úprava odpočítanej DPH pri zmene
                        rozsahu použitia investič. majetku)
                      </span>
                    </td>
                    <td rowSpan={ pomocnik ? 5 : 1 } className="align-middle">
                      <span className="cislo-riadku">18</span>
                      <div className="suma"><Suma v={r20} /></div>
                    </td>
                    { pomocnik && <td>343310</td> }
                    { pomocnik && <td>HD</td> }
                    { pomocnik && <td>DI, DJ, DK, DV, PP, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={5}>B1, B2, B31, B32</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343340</td>
                    <td>HK</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343740</td>
                    <td>LK, XE</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343290</td>
                    <td>KL, XF</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>{''}</td>
                    <td>KF, KP</td>
                    <td>ID, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td rowSpan={ pomocnik ? 11 : 1 } colSpan={2} className="align-middle">
                      <strong>Odpočítanie dane celkom</strong> - 20% sadzba DPH <br/>
                      <span className="text-primary">
                        (tuzemsko, samozdanenie, vysporiadanie koeficientu, úprava odpočítanej DPH pri zmene
                        rozsahu použitia investič. majetku)
                      </span>
                    </td>
                    <td rowSpan={ pomocnik ? 11 : 1} className="align-middle">
                      <span className="cislo-riadku">19</span>
                      <div className="suma"><Suma v={r21} /></div>
                    </td>
                    { pomocnik && <td>343431</td> }
                    { pomocnik && <td>3V</td> }
                    { pomocnik && <td>DI, DJ, DK, DV, PP, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={11}>B1, B2, B31, B32</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343870</td>
                    <td>DA</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343761</td>
                    <td>XU, XA</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343771</td>
                    <td>XL, XB</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>XK</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343411</td>
                    <td>XD</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343741</td>
                    <td>XS, XY</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343751</td>
                    <td>XP, XX</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343250</td>
                    <td>QD, QK</td>
                    <td>RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>KX</td>
                    <td>ID, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td></td>
                    <td>KF, KP</td>
                    <td>RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td rowSpan={ pomocnik ? 3 : 1 } colSpan={2} className="align-middle">
                      z toho § 51 ods.1 písm.a ) - 10% sadzba DPH <br/>
                      <span className="text-primary">(tuzemsko)</span>
                    </td>
                    <td rowSpan={ pomocnik ? 3 : 1 } className="align-middle">
                      <span className="cislo-riadku">20</span>
                      <div className="suma"><Suma v={r22} /></div>
                    </td>
                    { pomocnik && <td>343310</td> }
                    { pomocnik && <td>HD</td> }
                    { pomocnik && <td>DI, DJ, DK, DV, PP, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={3}>B2, B31, B32</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343340</td>
                    <td>HK</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>{''}</td>
                    <td>KF, KP</td>
                    <td>ID, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td rowSpan={ pomocnik ? 6 : 1 } colSpan={2} className="align-middle">
                      z toho § 51 ods.1 písm.a ) - 20% sadzba DPH <br/>
                      <span className="text-primary">(tuzemsko)</span>
                    </td>
                    <td rowSpan={ pomocnik ? 6 : 1 } className="align-middle">
                      <span className="cislo-riadku">21</span>
                      <div className="suma"><Suma v={r23} /></div>
                    </td>
                    { pomocnik && <td>343431</td> }
                    { pomocnik && <td>XK</td> }
                    { pomocnik && <td>DI, DJ, DK, DV, PP, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={6}>B2, B31, B32</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343411</td>
                    <td>XD</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>3V</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343250</td>
                    <td>QD, QK</td>
                    <td>RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>KX</td>
                    <td>ID, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td></td>
                    <td>KF, KP</td>
                    <td>RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td colSpan={2}>
                      z toho § 51 ods.1 písm.d) - 10% sadzba DPH<br/>
                      <span className="text-primary">(DPH zaplatená v tuzemsku pri dovoze tovaru)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">22</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      z toho § 51 ods.1 písm.d) - 20% sadzba DPH<br/>
                      <span className="text-primary">(DPH zaplatená v tuzemsku pri dovoze tovaru)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">23</span>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={ pomocnik ? 4 : 1 } className="align-middle">
                      Rozdiel v ZD a DPH po oprave - § 25 ods. 1 až 3, § 65 ods. 10 a 11 <br/>
                      <span className="text-primary">(D, Ť na výstupe)</span>
                    </td>
                    <td rowSpan={ pomocnik ? 4 : 1 } className="align-middle">
                      <span className="cislo-riadku">24</span>
                      <div className="suma"><Suma v={r26} /></div>
                    </td>
                    <td rowSpan={ pomocnik ? 4 : 1 } className="align-middle">
                      <span className="cislo-riadku">25</span>
                      <div className="suma"><Suma v={r27} /></div>
                    </td>
                    { pomocnik && <td>343121</td> }
                    { pomocnik && <td>3H</td> }
                    { pomocnik && <td>OB, MF, OT, OD, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={4}>C1, D2-FO vyúčt.fakt.</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343191</td>
                    <td>3K</td>
                    <td>OT, OD, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343871</td>
                    <td>DR</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343181</td>
                    <td>V3</td>
                    <td>PP, DI, DJ, DK, DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  <tr>
                    <td>Rozdiel v základe dane a v dani podľa § 25a zákona /+ -/</td>
                    <td>
                      <span className="cislo-riadku">26</span>
                    </td>
                    <td>
                      <span className="cislo-riadku">27</span>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={ pomocnik ? 6 : 1 } colSpan={2} className="align-middle">
                      Oprava odpočítanej dane - § 53 a 53a <br/>
                      <span className="text-primary">(D, Ť na vstupe)</span>
                    </td>
                    <td rowSpan={ pomocnik ? 6 : 1 } className="align-middle">
                      <span className="cislo-riadku">28</span>
                      <div className="suma"><Suma v={r28} /></div>
                    </td>
                    { pomocnik && <td>343441</td> }
                    { pomocnik && <td>XG</td> }
                    { pomocnik && <td>DM, DN, DO, DR, DS, DT, DJ, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={6}>C2</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343451</td>
                    <td>XH</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343270</td>
                    <td>DF</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343280</td>
                    <td>DC</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343870</td>
                    <td>DR</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>V3</td>
                    <td>PP, DI, DJ, DK, DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td colSpan={2}>
                      Oprava odpočítanej dane podľa § 53b zákona /+ -/
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">29</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Odpočítanie dane pri registrácii - § 55 <br/>
                      <span className="text-primary">(odpočet DPH z tovarov a služieb nadobudnutých pred registráciou)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">30</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Vrátenie dane cestujúcim pri vývoze tovaru - § 60</td>
                    <td className="align-middle">
                      <span className="cislo-riadku">31</span>
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#feffe5' }}>
                    <td colSpan={2}>
                      <strong>Vlastná daňová povinnosť</strong> <br/>
                      <span className="text-primary">(kladný rozdiel medzi výstupnou DPH a odpočitateľnou DPH)</span><br/>
                      <span className="text-primary">(r. 17 - r. 18 - r. 19 + r. 25 + r. 27 + r. 28 + r. 29 - r. 30 - r. 31 )</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">32</span>
                      <div className="suma"><Suma v={r31} /></div>
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#feffe5' }}>
                    <td colSpan={2}>
                      <strong>Nadmerný odpočet</strong> <br/>
                      <span className="text-primary">(záporný rozdiel medzi výstupnou DPH a odpočitateľnou DPH)</span><br/>
                      <span className="text-primary">(r. 17 - r. 18 - r. 19 + r. 25 + r. 27 + r. 28 + r. 29 - r. 30 - r. 31)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">33</span>
                      <div className="suma"><Suma v={r32} /></div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Nadmerný odpočet odpočítaný od daňovej povinnosti <br/>
                      <span className="text-primary">
                        (NO za predchádzajúce zdaň. obd., ktorý sa odpočítava z daň. povinnosti v r. 33)
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">34</span>
                      <div className="suma"><Suma v={r33} /></div>
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#feffe5' }}>
                    <td colSpan={2}>
                      <strong>Vlastná daňová povinnosť na úhradu</strong> <br/>
                      <span className="text-primary">(r. 32 - r. 34)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">35</span>
                      <div className="suma"><Suma v={r34} /></div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Údaje dodat. daň. priznania - Rozdiel oproti poslednej známej vlastnej daň. povinnosti
                      alebo nadmer. odpočtu
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">36</span>
                      <div className="suma"><Suma v={r37} /></div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Údaje dodat. daň. priznania - Daň na úhradu (+ /-)</td>
                    <td className="align-middle">
                      <span className="cislo-riadku">37</span>
                      <div className="suma"><Suma v={r38} /></div>
                    </td>
                  </tr>
                  </tbody>

                  :

                  /* Do roku 2020 december */
                  <tbody>
                  <tr>
                    { verzia_2020 ?
                      <td>Dodanie tovaru a služby - § 8,9 a daň § 81 - 10% sadzba DPH</td>
                      :
                      <td>Dodanie tovaru a služby - § 8,9 - 10% sadzba DPH</td>
                    }
                    <td>
                      <span className="cislo-riadku">01</span>
                    </td>
                    <td>
                      <span className="cislo-riadku">02</span>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={ pomocnik ? 3 : 1} className="align-middle">
                      Dodanie tovaru a služby - § 8,9 - 20% sadzba DPH <br/>
                      <span className="text-primary">
                        (dodanie tovaru a služby v tuzemsku, fakturácia za teplo, elektrinu, vodu, nájom)
                      </span>
                    </td>
                    <td rowSpan={ pomocnik ? 3 : 1 } className="align-middle">
                      <span className="cislo-riadku">03</span>
                      <div className="suma"><Suma v={r3} /></div>
                    </td>
                    <td rowSpan={ pomocnik ? 3 : 1 } className="align-middle">
                      <span className="cislo-riadku">04</span>
                      <div className="suma"><Suma v={r4} /></div>
                    </td>
                    { pomocnik && <td>343121</td> }
                    { pomocnik && <td>3B</td> }
                    { pomocnik && <td>OB, OY, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={3}>A1, D2</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343191</td>
                    <td>3D</td>
                    <td>OO, ID, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343181</td>
                    <td>3V</td>
                    <td>DI, DJ, DK, PP, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  <tr>
                    <td>
                      Nadobudnutie tovaru v tuzemsku - § 11, 11a - 10% sadzba DPH <br/>
                      <span className="text-primary">(tovar z EÚ)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">05</span>
                      <div className="suma"><Suma v={r5} /></div>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">06</span>
                      <div className="suma"><Suma v={r6} /></div>
                    </td>
                    { pomocnik && <td>343180</td> }
                    { pomocnik && <td>LK, KL</td> }
                    { pomocnik && <td>DI, DJ, DK, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td>B1</td> }
                  </tr>
                  <tr>
                    <td>
                      Nadobudnutie tovaru v tuzemsku - § 11, 11a - 20% sadzba DPH <br/>
                      <span className="text-primary">(tovar z EÚ)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">07</span>
                      <div className="suma"><Suma v={r7} /></div>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">08</span>
                      <div className="suma"><Suma v={r8} /></div>
                    </td>
                    { pomocnik && <td>343151</td> }
                    { pomocnik && <td>XS, XP</td> }
                    { pomocnik && <td>DI, DJ, DK, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td>B1</td> }
                  </tr>
                  <tr>
                    <td rowSpan={ pomocnik ? 4 : 1 } className="align-middle">
                      Tovary a služby, pri ktorých platí príjemca DPH - § 69 ods. 2 a 9 až 12 <br/>
                      <span className="text-primary">
                        (tovar od zahraničného dodávateľa z EÚ alebo 3. štátu zo skladu v tuzemsku (napr. Alza), <br/>
                        služby s miestom dodania podľa § 16 napr. ubytovacie služby, emisné kvóty,
                        tuzemské samozdanenie stavebných prác...)
                      </span>
                    </td>
                    <td rowSpan={ pomocnik ? 4 : 1 } className="align-middle">
                      <span className="cislo-riadku">09</span>
                      <div className="suma"><Suma v={r9} /></div>
                    </td>
                    <td rowSpan={ pomocnik ? 4 : 1 } className="align-middle">
                      <span className="cislo-riadku">10</span>
                      <div className="suma"><Suma v={r10} /></div>
                    </td>
                    { pomocnik && <td>343161</td> }
                    { pomocnik && <td>XU, XL</td> }
                    { pomocnik && <td>DI, DJ, DK, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={4}>B1</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343871</td>
                    <td>DA</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343151</td>
                    <td>XX, XY</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343180</td>
                    <td>XE, XF</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Výstup</td>
                  </tr>}
                  <tr>
                    <td>
                      Služby, pri ktorých príjemca platí DPH - § 69 ods. 3 <br/>
                      <span className="text-primary">
                        (služby z EÚ alebo z 3. štátu  s miestom dodania podľa § 15 napr. právne, sprostredkovateľ., <br/>
                        reklamné, školenia pre vymedzený okruh účastíkov, ...)
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">11</span>
                      <div className="suma"><Suma v={r11} /></div>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">12</span>
                      <div className="suma"><Suma v={r12} /></div>
                    </td>
                    { pomocnik && <td>343161</td> }
                    { pomocnik && <td>XA, XB</td> }
                    { pomocnik && <td>DI, DJ, DK, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td>B1</td> }
                  </tr>
                  <tr>
                    <td>
                      Tovary, pri ktorých druhý odberateľ platí DPH - § 69 ods. 7 <br/>
                      <span className="text-primary">(trojstranný obchod)</span>
                    </td>
                    <td>
                      <span className="cislo-riadku">13</span>
                    </td>
                    <td>
                      <span className="cislo-riadku">14</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Dodanie tovaru a služieb s oslobodením od dane -  § 28 - § 43, § 46 -48 ods. 8 <br/>
                      <span className="text-primary">
                        (nájmy pre občanov, finančné, poisťovnícke služby, aj D, Ť, dodanie tovaru a služieb
                        do EÚ pre odberateľa s IČ DPH)
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">15</span>
                      <div className="suma"><Suma v={r15} /></div>
                    </td>
                    <td></td>
                    { pomocnik && <td></td> }
                    { pomocnik && <td>1G</td> }
                    { pomocnik && <td>ID, OO, OD, OT, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                  </tr>
                  <tr>
                    <td>
                      z toho podľa  § 43 ods. 1 a 4 <br/>
                      <span className="text-primary">(intrakomunitárne dodanie tovaru, aj D, Ť)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">16</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      z toho podľa  § 46, 47, 48  ods. 8 <br/>
                      <span className="text-primary">(vývoz tovaru a služieb)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">17</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      { verzia_2020 ?
                        'Daň podľa § 48ca ods. 2, § 48d ods. 15 a § 48e ods. 3 a 8 zákona '
                        :
                        'Daňová povinnosť pri zrušení registrácie podľa § 81 '
                      }
                      <br/>
                      <span className="text-primary">
                        (suma dane prislúchajúca k zostatkovej cene majetku a zásob pri zrušení registrácie platiteľa DPH)
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">18</span>
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#feffe5' }}>
                    <td colSpan={2}>
                      <strong>Daň celkom</strong> <br/>
                      <span className="text-primary">(súčet riadku 2, 4, 6, 8, 10, 12, 14 a 18)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">19</span>
                      <div className="suma"><Suma v={r19} /></div>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={ pomocnik ? 5 : 1 } colSpan={2} className="align-middle">
                      <strong>Odpočítanie dane celkom</strong> - 10% sadzba DPH <br/>
                      <span className="text-primary">
                        (tuzemsko, samozdanenie, vysporiadanie koeficientu, úprava odpočítanej DPH pri zmene
                        rozsahu použitia investič. majetku)
                      </span>
                    </td>
                    <td rowSpan={ pomocnik ? 5 : 1 } className="align-middle">
                      <span className="cislo-riadku">20</span>
                      <div className="suma"><Suma v={r20} /></div>
                    </td>
                    { pomocnik && <td>343310</td> }
                    { pomocnik && <td>HD</td> }
                    { pomocnik && <td>DI, DJ, DK, DV, PP, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={5}>B1, B2, B31, B32</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343340</td>
                    <td>HK</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343740</td>
                    <td>LK, XE</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343290</td>
                    <td>KL, XF</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>{''}</td>
                    <td>KF, KP</td>
                    <td>ID, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td rowSpan={ pomocnik ? 11 : 1 } colSpan={2} className="align-middle">
                      <strong>Odpočítanie dane celkom</strong> - 20% sadzba DPH <br/>
                      <span className="text-primary">
                        (tuzemsko, samozdanenie, vysporiadanie koeficientu, úprava odpočítanej DPH pri zmene
                        rozsahu použitia investič. majetku)
                      </span>
                    </td>
                    <td rowSpan={ pomocnik ? 11 : 1} className="align-middle">
                      <span className="cislo-riadku">21</span>
                      <div className="suma"><Suma v={r21} /></div>
                    </td>
                    { pomocnik && <td>343431</td> }
                    { pomocnik && <td>3V</td> }
                    { pomocnik && <td>DI, DJ, DK, DV, PP, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={11}>B1, B2, B31, B32</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343870</td>
                    <td>DA</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343761</td>
                    <td>XU, XA</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343771</td>
                    <td>XL, XB</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>XK</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343411</td>
                    <td>XD</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343741</td>
                    <td>XS, XY</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343751</td>
                    <td>XP, XX</td>
                    <td>DI, DJ, DK, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343250</td>
                    <td>QD, QK</td>
                    <td>RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>KX</td>
                    <td>ID, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td></td>
                    <td>KF, KP</td>
                    <td>RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td rowSpan={ pomocnik ? 3 : 1 } colSpan={2} className="align-middle">
                      z toho § 51 ods.1 písm.a ) - 10% sadzba DPH <br/>
                      <span className="text-primary">(tuzemsko)</span>
                    </td>
                    <td rowSpan={ pomocnik ? 3 : 1 } className="align-middle">
                      <span className="cislo-riadku">22</span>
                      <div className="suma"><Suma v={r22} /></div>
                    </td>
                    { pomocnik && <td>343310</td> }
                    { pomocnik && <td>HD</td> }
                    { pomocnik && <td>DI, DJ, DK, DV, PP, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={3}>B2, B31, B32</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343340</td>
                    <td>HK</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>{''}</td>
                    <td>KF, KP</td>
                    <td>ID, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td rowSpan={ pomocnik ? 6 : 1 } colSpan={2} className="align-middle">
                      z toho § 51 ods.1 písm.a ) - 20% sadzba DPH <br/>
                      <span className="text-primary">(tuzemsko)</span>
                    </td>
                    <td rowSpan={ pomocnik ? 6 : 1 } className="align-middle">
                      <span className="cislo-riadku">23</span>
                      <div className="suma"><Suma v={r23} /></div>
                    </td>
                    { pomocnik && <td>343431</td> }
                    { pomocnik && <td>XK</td> }
                    { pomocnik && <td>DI, DJ, DK, DV, PP, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={6}>B2, B31, B32</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343411</td>
                    <td>XD</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>3V</td>
                    <td>DI, DJ, DK, DV, PP, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343250</td>
                    <td>QD, QK</td>
                    <td>RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>KX</td>
                    <td>ID, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td></td>
                    <td>KF, KP</td>
                    <td>RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td colSpan={2}>
                      z toho § 51 ods.1 písm.d) - 10% sadzba DPH<br/>
                      <span className="text-primary">(DPH zaplatená v tuzemsku pri dovoze tovaru)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">24</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      z toho § 51 ods.1 písm.d) - 20% sadzba DPH<br/>
                      <span className="text-primary">(DPH zaplatená v tuzemsku pri dovoze tovaru)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">25</span>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={ pomocnik ? 4 : 1 } className="align-middle">
                      { verzia_2020 ?
                        'Rozdiel v ZD a DPH po oprave - § 25 ods. 1 až 3, § 65 ods. 10 a 11'
                        :
                        'Rozdiel v ZD a DPH po oprave - § 25 ods. 1 až 3 '
                      }
                      <br/>
                      <span className="text-primary">(D, Ť na výstupe)</span>
                    </td>
                    <td rowSpan={ pomocnik ? 4 : 1 } className="align-middle">
                      <span className="cislo-riadku">26</span>
                      <div className="suma"><Suma v={r26} /></div>
                    </td>
                    <td rowSpan={ pomocnik ? 4 : 1 } className="align-middle">
                      <span className="cislo-riadku">27</span>
                      <div className="suma"><Suma v={r27} /></div>
                    </td>
                    { pomocnik && <td>343121</td> }
                    { pomocnik && <td>3H</td> }
                    { pomocnik && <td>OB, MF, OT, OD, ST, RU</td> }
                    { pomocnik && <td>Výstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={4}>C1, D2-FO vyúčt.fakt.</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343191</td>
                    <td>3K</td>
                    <td>OT, OD, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343871</td>
                    <td>DR</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343181</td>
                    <td>V3</td>
                    <td>PP, DI, DJ, DK, DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Výstup</td>
                  </tr> }
                  <tr>
                    <td rowSpan={ pomocnik ? 6 : 1 } colSpan={2} className="align-middle">
                      { verzia_2020 ?
                        'Oprava odpočítanej dane - § 53 a 53a'
                        :
                        'Oprava odpočítanej dane - § 53 '
                      }
                      <br/>
                      <span className="text-primary">(D, Ť na vstupe)</span>
                    </td>
                    <td rowSpan={ pomocnik ? 6 : 1 } className="align-middle">
                      <span className="cislo-riadku">28</span>
                      <div className="suma"><Suma v={r28} /></div>
                    </td>
                    { pomocnik && <td>343441</td> }
                    { pomocnik && <td>XG</td> }
                    { pomocnik && <td>DM, DN, DO, DR, DS, DT, DJ, ST, RU</td> }
                    { pomocnik && <td>Vstup</td> }
                    { pomocnik && <td className="align-middle" rowSpan={6}>C2</td> }
                  </tr>
                  { pomocnik &&
                  <tr>
                    <td>343451</td>
                    <td>XH</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343270</td>
                    <td>DF</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343280</td>
                    <td>DC</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343870</td>
                    <td>DR</td>
                    <td>DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  { pomocnik &&
                  <tr>
                    <td>343431</td>
                    <td>V3</td>
                    <td>PP, DI, DJ, DK, DM, DN, DO, DR, DS, DT, ST, RU</td>
                    <td>Vstup</td>
                  </tr> }
                  <tr>
                    <td colSpan={2}>
                      Odpočítanie dane pri registrácii - § 55 <br/>
                      <span className="text-primary">(odpočet DPH z tovarov a služieb nadobudnutých pred registráciou)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">29</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Vrátenie dane cestujúcim pri vývoze tovaru - § 60</td>
                    <td className="align-middle">
                      <span className="cislo-riadku">30</span>
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#feffe5' }}>
                    <td colSpan={2}>
                      <strong>Vlastná daňová povinnosť</strong> <br/>
                      <span className="text-primary">(kladný rozdiel medzi výstupnou DPH a odpočitateľnou DPH)</span><br/>
                      <span className="text-primary">(r. 19 - r. 20 - r. 21 + r. 27 + r. 28 - r. 29 - r. 30)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">31</span>
                      <div className="suma"><Suma v={r31} /></div>
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#feffe5' }}>
                    <td colSpan={2}>
                      <strong>Nadmerný odpočet</strong> <br/>
                      <span className="text-primary">(záporný rozdiel medzi výstupnou DPH a odpočitateľnou DPH)</span><br/>
                      <span className="text-primary">(r. 19 - r. 20 - r. 21 + r. 27 + r. 28 - r. 29 - r. 30)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">32</span>
                      <div className="suma"><Suma v={r32} /></div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Nadmerný odpočet odpočítaný od daňovej povinnosti <br/>
                      <span className="text-primary">
                        (NO za predchádzajúce zdaň. obd., ktorý sa odpočítava z daň. povinnosti v r. 32)
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">33</span>
                      <div className="suma"><Suma v={r33} /></div>
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: '#feffe5' }}>
                    <td colSpan={2}>
                      <strong>Vlastná daňová povinnosť na úhradu</strong> <br/>
                      <span className="text-primary">(r. 31 - r. 33)</span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">34</span>
                      <div className="suma"><Suma v={r34} /></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Trojstranný obchod § 45 - Nadobudnutie tovaru prvým odberateľom <br/>
                      <span className="text-primary">
                        (základ dane za tovary nadobudnuté z EÚ prvým odberateľom v čl. štáte
                        druhého odberateľa pri trojstrannom obchode)
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">35</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Dodanie tovaru prvým odberateľom <br/>
                      <span className="text-primary">
                        (základ dane za tovary dodané prvým odberateľom druhému odberateľovi v čl. štáte
                        druhého odberateľa pri trojstrannom obchode)
                      </span>
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">36</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Údaje dodat. daň. priznania - Rozdiel oproti poslednej známej vlastnej daň. povinnosti
                      alebo nadmer. odpočtu
                    </td>
                    <td className="align-middle">
                      <span className="cislo-riadku">37</span>
                      <div className="suma"><Suma v={r37} /></div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Údaje dodat. daň. priznania - Daň na úhradu (+ /-)</td>
                    <td className="align-middle">
                      <span className="cislo-riadku">38</span>
                      <div className="suma"><Suma v={r38} /></div>
                    </td>
                  </tr>
                  </tbody>
                }
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
  sumarizacia: state.sumarizacia,
  riadky: state.riadky
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sumarizacia)