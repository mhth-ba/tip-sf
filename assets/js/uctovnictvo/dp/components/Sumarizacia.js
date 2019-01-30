import React from 'react'
import {connect} from 'react-redux'
import { Card, CardHeader, CardBody, CardFooter, Table } from 'reactstrap'

import Suma from './helpers/Suma'

class Sumarizacia extends React.Component {
  constructor(props) {
    super(props)
  }

  findSuma_s(riadok, stlpec) {
    const polozky = this.props.sumarizacia.polozky_s

    return this.findSuma(riadok, stlpec, polozky)
  }
  
  findSuma_p(riadok, stlpec) {
    const polozky = this.props.sumarizacia.polozky_p
    return this.findSuma(riadok, stlpec, polozky)
  }

  findSuma(riadok, stlpec, polozky) {
    const item = polozky.find( x => x['riadok'] == riadok )

    switch (stlpec) {
      case 'z': stlpec = 'zaklad'; break;
      case 'd': stlpec = 'dan'; break;
    }

    return item === undefined ? 0 : item[stlpec]
  }

  render() {

    const init = this.props.hlavny.initialized
    const hlavny = this.props.hlavny

    const r2 = 0;
    const r3 = this.findSuma_s('3_4', 'z')
    const r4 = this.findSuma_s('3_4', 'd')
    const r5 = this.findSuma_s('5_6', 'z')
    const r6 = this.findSuma_s('5_6', 'd')
    const r7 = this.findSuma_s('7_8', 'z')
    const r8 = this.findSuma_s('7_8', 'd')
    const r9 = this.findSuma_s('9_10', 'z')
    const r10 = this.findSuma_s('9_10', 'd')
    const r12 = 0
    const r14 = 0
    const r15 = this.findSuma_s('15', 'z')
    const r18 = 0
    // DAŃ CELKOM
    const r19 = r2 + r4 + r6 + r8 + r10 +r12 + r14 + r18
    const r20 = this.findSuma_s('20', 'd')
    const r21 = this.findSuma_s('21', 'd')
    const r22 = this.findSuma_s('22', 'd')
    const r23 = this.findSuma_s('23', 'd')
    const r26 = this.findSuma_s('26_27', 'z')
    const r27 = this.findSuma_s('26_27', 'd')
    const r28 = this.findSuma_s('28', 'd')
    const r29 = 0
    const r30 = 0
    let r31, r32, r33
    let r34 = 0

    // Daňová povinnosť alebo nadmerný odpočet
    const x = r19 - r20 - r21 + r27 + r28 - r29 - r30

    // ak x > 0 (daňová povinnosť), tak r31 = x a r32 prázdny
    if (x >= 0) {
      r31 = x
      r32 = ''
      r33 = ''
      r34 = r31
    } // ak x < 0 (nadmerný odpočet), tak r32 = x a r31 = 0
    else if (x < 0) {
      r31 = 0
      r32 = x
      r33 = ''
    }

    // ak v predchádzajúcom zdaňovacom období bol nadmerný odpočet
    if (hlavny.predchadzajuci !== null) {

      const r_2 = 0;
      const r_4 = this.findSuma_p('3_4', 'd')
      const r_6 = this.findSuma_p('5_6', 'd')
      const r_8 = this.findSuma_p('7_8', 'd')
      const r_10 = this.findSuma_p('9_10', 'd')
      const r_12 = 0
      const r_14 = 0
      const r_18 = 0
      const r_20 = this.findSuma_p('20', 'd')
      const r_21 = this.findSuma_p('21', 'd')
      const r_27 = this.findSuma_p('26_27', 'd')
      const r_28 = this.findSuma_p('28', 'd')
      const r_29 = 0
      const r_30 = 0

      // DAŃ CELKOM (predchadzajuci)
      const r_19 = r_2 + r_4 + r_6 + r_8 + r_10 + r_12 + r_14 + r_18
      let r_31, r_32

      // Daňová povinnosť alebo nadmerný odpočet ??
      const y = r_19 - r_20 - r_21 + r_27 + r_28 - r_29 - r_30

      // ak y > 0 (daňová povinnosť), tak r_31 = y a r_šľ prázdny
      if (y >= 0) {
        r_31 = y
      } // ak r_31 < 0 (nadmerný odpočet), tak r_32 = y a r31 = 0
      else if (y < 0) {
        r_31 = 0
        r_32 = y

        // ak je nadmerný odpočet väčší ako daňová povinnosť
        if (r_32 * (-1) > r31) {
          r_32 = r31 * (-1)
        }
      }

      // ak v predchádzajúcom daňovom priznané je vyplnený r_32
      // čiže ak v predchádzajúcom daňovom priznaní je nadmerný odpočet, čiže ZÁPORNÉ ČÍSLO a NIE KLADNÉ
      if (r_32 < 0) {
        // a zároveň :

        // 1. je vyplnený r31, tak v súčasnom hlavnom zázname
        if (r31 > 0) {
          r33 = r_32
          r34 = r31 + r33
        }

        // 2. nie je vyplnený r_31, tak v súčasnom hlavnom zázname
        if (r31 === 0) {
           // r32 = r32 (??)
        }
      }
    }

    return (
      <div>
        { init &&
          <Card>
            <CardHeader className="bg-primary text-white">
              Sumarizácia a popis tlačiva
            </CardHeader>
            <CardBody>
              <Table bordered>
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
                  <td></td>
                  <td className="text-danger font-weight-bold">2</td>
                  <td></td>
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
                  <td>OB, OY, ST</td>
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
                  <td className="text-right font-weight-bold"><Suma v={r12} /></td>
                </tr>
                <tr>
                  <td>
                    Tovary, pri ktorých druhý odberateľ platí DPH - § 69 ods 7 <br/>
                    <span className="text-primary">(trojstranný obchod)</span>
                  </td>
                  <td className="text-danger font-weight-bold">13</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">14</td>
                  <td className="text-right font-weight-bold"><Suma v={r14} /></td>
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
                  <td>ID, OO, ST</td>
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
                  <td className="text-right font-weight-bold"><Suma v={r18} /></td>
                </tr>
                <tr>
                  <td>
                    <strong>DAŇ CELKOM</strong> <br/>
                    <span className="text-primary">(súčet riadku 2,4,6,8,10,12,14,18)</span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">19</td>
                  <td className="text-right font-weight-bold"><Suma v={r19} /></td>
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
                  <td rowSpan={11} className="align-middle">
                    odpočítanie dane celkom - 20% sadzba DPH <br/>
                    <span className="text-primary">
                      (tuzemsko, samozdanenie, vysporiadanie koeficientu, úprava odpočítanej DPH pri zmene
                      rozsahu použitia investič. majetku)
                    </span>
                  </td>
                  <td rowSpan={11} className="align-middle">×</td>
                  <td rowSpan={11} className="align-middle">{''}</td>
                  <td rowSpan={11} className="align-middle text-danger font-weight-bold">21</td>
                  <td rowSpan={11} className="align-middle text-right font-weight-bold"><Suma v={r21} /></td>
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
                {/*<tr>
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
                </tr>*/}
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
                  <td>DI, DJ, DK, DV, PP, ST</td>
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
                  <td></td>
                </tr>
                <tr>
                  <td>
                    z toho § 51 ods.1 písm.d) - 20% sadzba DPH<br/>
                    <span className="text-primary">(DPH zaplatená v tuzemsku pri dovoze tovaru)</span>
                  </td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">25</td>
                  <td></td>
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
                  <td></td>
                </tr>
                <tr>
                  <td>Vrátenie dane cestujúcim pri vývoze tovaru - § 60</td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">30</td>
                  <td></td>
                </tr>
                <tr style={{ backgroundColor: '#feffe5' }}>
                  <td>
                    <strong>Vlastná daňová povinnosť</strong> <br/>
                    <span className="text-primary">(kladný rozdiel medzi výstupnou DPH a odpočitateľnou DPH)</span><br/>
                    <span className="text-primary">(r. 19 - r. 20 - r. 21 + r. 27 + r. 28 - r. 29 - r. 30)</span>
                  </td>
                  <td className="align-middle">×</td>
                  <td>{''}</td>
                  <td className="align-middle text-danger font-weight-bold">31</td>
                  <td className="align-middle text-right font-weight-bold"><Suma v={r31} /></td>
                </tr>
                <tr style={{ backgroundColor: '#feffe5' }}>
                  <td>
                    <strong>Nadmerný odpočet</strong> <br/>
                    <span className="text-primary">(záporný rozdiel medzi výstupnou DPH a odpočitateľnou DPH)</span><br/>
                    <span className="text-primary">(r. 19 - r. 20 - r. 21 + r. 27 + r. 28 - r. 29 - r. 30)</span>
                  </td>
                  <td className="align-middle">×</td>
                  <td>{''}</td>
                  <td className="align-middle text-danger font-weight-bold">32</td>
                  <td className="align-middle text-right font-weight-bold"><Suma v={r32} /></td>
                </tr>
                <tr>
                  <td>
                    Nadmerný odpočet odpočítaný od daňovej povinnosti <br/>
                    <span className="text-primary">
                      (NO za predchádzajúce zdaň. obd., ktorý sa odpočítava z daň. povinnosti v r. 32)
                    </span>
                  </td>
                  <td className="align-middle">×</td>
                  <td>{''}</td>
                  <td className="align-middle text-danger font-weight-bold">33</td>
                  <td className="align-middle text-right font-weight-bold"><Suma v={r33} /></td>
                </tr>
                <tr style={{ backgroundColor: '#feffe5' }}>
                  <td>
                    <strong>Vlastná daňová povinnosť na úhradu</strong> <br/>
                    <span className="text-primary">(r. 31 - r. 33)</span>
                  </td>
                  <td className="align-middle">×</td>
                  <td>{''}</td>
                  <td className="align-middle text-danger font-weight-bold">34</td>
                  <td className="align-middle text-right font-weight-bold"><Suma v={r34} /></td>
                </tr>
                <tr>
                  <td>
                    Trojstranný obchod § 45 - Nadobudnutie tovaru prvým odberateľom <br/>
                    <span className="text-primary">
                      (základ dane za tovary nadobudnuté z EÚ prvým odberateľom v čl. štáte
                      druhého odberateľa pri trojstrannom obchode)
                    </span>
                  </td>
                  <td className="align-middle text-danger font-weight-bold">35</td>
                  <td></td>
                  <td className="align-middle">×</td>
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
                  <td className="align-middle text-danger font-weight-bold">36</td>
                  <td></td>
                  <td className="align-middle">×</td>
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
                  <td></td>
                </tr>
                <tr>
                  <td>Údaje dodat. daň. priznania - Daň na úhradu (+ /-)</td>
                  <td>×</td>
                  <td>{''}</td>
                  <td className="text-danger font-weight-bold">38</td>
                  <td></td>
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