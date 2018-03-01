import React from 'react'
import { Table, Row, Col } from 'reactstrap'
import NumberFormat from 'react-number-format'
import { connect } from 'react-redux'
import { fetchDodavkaTeplaRequest } from '../../../services/ActionsCenaTepla'

// konstanty
const gj = 0.0036

// Number format component
const numFormat = {
    thousandSeparator: ' ',
    decimalScale: 0,
    displayType: 'text',
    value: 0
}

// struktura polozky uzitocnej dodavky tepla (t.j. riadok | po zdroji)
const Polozka = ({id, zdroj, v_kwh, v_kw, z_kwh, z_kw}) => (
    <tr className="text-right">
        <th className="text-left">{zdroj.nazov}</th>
        <td>{v_kwh}</td>
        <td>{v_kw}</td>
        <td>{z_kwh}</td>
        <td>{z_kw}</td>
        <td>{v_kwh + z_kwh}</td>
        <td>{v_kw + z_kw}</td>
    </tr>
)

const UzitocnaDodavkaTepla = ({zdroj, primar, ost, sekundar, pk, tpv, vhj, tpz, ppc, slovnaft, cw}) => (
    <tbody className="text-right">
    <tr>
        <th className="text-left">Zdroj</th>
        <td><NumberFormat {...numFormat} value={zdroj.v_kwh} /></td>
        <td><NumberFormat {...numFormat} value={zdroj.v_kw} /></td>
        <td><NumberFormat {...numFormat} value={zdroj.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={zdroj.z_kw} /></td>
        <td><NumberFormat {...numFormat} value={zdroj.v_kwh + zdroj.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={zdroj.v_kw + zdroj.z_kw} /></td>
    </tr>
    <tr>
        <th className="text-left">Primárna sieť</th>
        <td><NumberFormat {...numFormat} value={primar.v_kwh} /></td>
        <td><NumberFormat {...numFormat} value={primar.v_kw} /></td>
        <td><NumberFormat {...numFormat} value={primar.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={primar.z_kw} /></td>
        <td><NumberFormat {...numFormat} value={primar.v_kwh + primar.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={primar.v_kw + primar.z_kw} /></td>
    </tr>
    <tr>
        <th className="text-left">OST</th>
        <td><NumberFormat {...numFormat} value={ost.v_kwh} /></td>
        <td><NumberFormat {...numFormat} value={ost.v_kw} /></td>
        <td><NumberFormat {...numFormat} value={ost.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={ost.z_kw} /></td>
        <td><NumberFormat {...numFormat} value={ost.v_kwh + ost.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={
            ost.v_kw + ost.z_kw
        } /></td>
    </tr>
    <tr>
        <th className="text-left">Sekundárna sieť</th>
        <td><NumberFormat {...numFormat} value={sekundar.v_kwh} /></td>
        <td><NumberFormat {...numFormat} value={sekundar.v_kw} /></td>
        <td><NumberFormat {...numFormat} value={sekundar.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={sekundar.z_kw} /></td>
        <td><NumberFormat {...numFormat} value={sekundar.v_kwh + sekundar.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={sekundar.v_kw + sekundar.z_kw} /></td>
    </tr>
    <tr>
        <th className="text-left">Spolu (bez PK)</th>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kw + primar.v_kw + ost.v_kw + sekundar.v_kw
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.z_kw + primar.z_kw + ost.z_kw + sekundar.z_kw
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh
            + zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kw + primar.v_kw + ost.v_kw + sekundar.v_kw
            + zdroj.z_kw + primar.z_kw + ost.z_kw + sekundar.z_kw
        } /></td>
    </tr>
    <tr>
        <th className="text-left">Plynové kotolne</th>
        <td><NumberFormat {...numFormat} value={pk.v_kwh} /></td>
        <td><NumberFormat {...numFormat} value={pk.v_kw} /></td>
        <td><NumberFormat {...numFormat} value={pk.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={pk.z_kw} /></td>
        <td><NumberFormat {...numFormat} value={pk.v_kwh + pk.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={pk.v_kw + pk.z_kw} /></td>
    </tr>
    <tr>
        <th className="text-left">Spolu (vrátane PK)</th>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh + pk.v_kwh
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kw + primar.v_kw + ost.v_kw + sekundar.v_kw + pk.v_kw
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh + pk.z_kwh
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.z_kw + primar.z_kw + ost.z_kw + sekundar.z_kw + pk.z_kw
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh + pk.v_kwh
            + zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh + pk.z_kwh
        } /></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kw + primar.v_kw + ost.v_kw + sekundar.v_kw + pk.v_kw
            + zdroj.z_kw + primar.z_kw + ost.z_kw + sekundar.z_kw + pk.z_kw
        } /></td>
    </tr>
    <tr>
        <th className="text-left">Straty</th>
        <td><NumberFormat {...numFormat} value={
            (tpv + vhj + ppc + slovnaft) - (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh)
        } /></td>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (tpz + cw) - (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh)
        } /></td>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (tpv + vhj + ppc + slovnaft) - (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh)
            + (tpz + cw) - (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh)
        } /></td>
        <td></td>
    </tr>
    <tr>
        <th className="text-left">Celková dodávka tepla</th>
        <td><NumberFormat {...numFormat} value={
            (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh + pk.v_kwh)
            + (tpv + vhj + ppc + slovnaft) - (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh)
        } /></td>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh + pk.z_kwh)
            + (tpz + cw) - (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh)
        } /></td>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh + pk.v_kwh
            + zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh + pk.z_kwh)
            + ((tpv + vhj + ppc + slovnaft) - (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh)
            + (tpz + cw) - (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh))
        } /></td>
        <td></td>
    </tr>
    </tbody>
)

const PorovnanieSPlanom = ({tpv, vhj, tpz, pk, ppc, slovnaft, cw, zdroj, primar, ost, sekundar}) => (
    <tbody className="text-right">
    <tr>
        <th rowSpan={3} className="text-center align-middle">SCZT<br/>Východ</th>
        <th className="text-left">Užitočná dodávka tepla (kWh)</th>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh + pk.v_kwh
        } /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th className="text-left">Straty (kWh)</th>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (tpv + vhj + ppc + slovnaft) - (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh)
        } /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th className="text-left">Celková dodávka tepla (kWh)</th>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh + pk.v_kwh)
            + (tpv + vhj + ppc + slovnaft) - (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh)
        } /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th rowSpan={3} className="text-center align-middle">SCZT<br/>Západ</th>
        <th className="text-left">Užitočná dodávka tepla (kWh)</th>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh + pk.z_kwh
        } /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th className="text-left">Straty (kWh)</th>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (tpz + cw) - (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh)
        } /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th className="text-left">Celková dodávka tepla (kWh)</th>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh + pk.z_kwh)
            + (tpz + cw) - (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh)
        } /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th rowSpan={3} className="text-center align-middle">BAT<br/>Spolu</th>
        <th className="text-left">Užitočná dodávka tepla (kWh)</th>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh + pk.v_kwh
            + zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh + pk.z_kwh
        } /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th className="text-left">Straty (kWh)</th>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (tpv + vhj + ppc + slovnaft) - (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh)
            + (tpz + cw) - (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh)
        } /></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th className="text-left">Celková dodávka tepla (kWh)</th>
        <td></td>
        <td><NumberFormat {...numFormat} value={
            (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh + pk.v_kwh
            + zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh + pk.z_kwh)
            + ((tpv + vhj + ppc + slovnaft) - (zdroj.v_kwh + primar.v_kwh + ost.v_kwh + sekundar.v_kwh)
            + (tpz + cw) - (zdroj.z_kwh + primar.z_kwh + ost.z_kwh + sekundar.z_kwh))
        } /></td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
)

const VyrobaTeplaPodlaZdrojov = ({tpv, vhj, tpz, pk, ppc, slovnaft, cw}) => (
    <tbody className="text-right">
    <tr>
        <th className="text-left">Tepláreň Východ</th>
        <td><NumberFormat {...numFormat} value={tpv} /></td>
        <td><NumberFormat {...numFormat} value={tpv * gj} /></td>
    </tr>
    <tr>
        <th className="text-left">Výhrevňa Juh</th>
        <td><NumberFormat {...numFormat} value={vhj} /></td>
        <td><NumberFormat {...numFormat} value={vhj * gj} /></td>
    </tr>
    <tr>
        <th className="text-left">Tepláreň Západ</th>
        <td><NumberFormat {...numFormat} value={tpz} /></td>
        <td><NumberFormat {...numFormat} value={tpz * gj} /></td>
    </tr>
    <tr>
        <th className="text-left">Plynové kotolne</th>
        <td><NumberFormat {...numFormat} value={pk.v_kwh + pk.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={(pk.v_kwh + pk.z_kwh) * gj} /></td>
    </tr>
    <tr>
        <th className="text-left">Vlastné zdroje</th>
        <td><NumberFormat {...numFormat} value={tpv + vhj + tpz + pk.v_kwh + pk.z_kwh} /></td>
        <td><NumberFormat {...numFormat} value={(tpv + vhj + tpz + pk.v_kwh + pk.z_kwh) * gj} /></td>
    </tr>
    <tr>
        <th className="text-left">PPC</th>
        <td><NumberFormat {...numFormat} value={ppc} /></td>
        <td><NumberFormat {...numFormat} value={ppc * gj} /></td>
    </tr>
    <tr>
        <th className="text-left">Slovnaft</th>
        <td><NumberFormat {...numFormat} value={slovnaft} /></td>
        <td><NumberFormat {...numFormat} value={slovnaft * gj} /></td>
    </tr>
    <tr>
        <th className="text-left">Cogen West</th>
        <td><NumberFormat {...numFormat} value={cw} /></td>
        <td><NumberFormat {...numFormat} value={cw * gj} /></td>
    </tr>
    <tr>
        <th className="text-left">Externé zdroje</th>
        <td><NumberFormat {...numFormat} value={slovnaft + ppc + cw} /></td>
        <td><NumberFormat {...numFormat} value={(slovnaft + ppc + cw) * gj} /></td>
    </tr>
    <tr>
        <th className="text-left">Spolu (vlastné + externé)</th>
        <td><NumberFormat {...numFormat} value={
            tpv + vhj + tpz + pk.v_kwh + pk.z_kwh + slovnaft + ppc + cw
        } /></td>
        <td><NumberFormat {...numFormat} value={
            (tpv + vhj + tpz + pk.v_kwh + pk.z_kwh + slovnaft + ppc + cw) * gj
        } /></td>
    </tr>
    </tbody>
)

const VyrobaElektrickejEnergie = ({veez, dszse, dree, vsee}) => (
    <tbody className="text-right">
    <tr>
        <th className="text-left">Výroba elektrickej energie na zdroji</th>
        <td><NumberFormat {...numFormat} value={veez.tpv} /></td>
        <td><NumberFormat {...numFormat} value={veez.tpz} /></td>
        <td><NumberFormat {...numFormat} value={veez.tpv + veez.tpz} /></td>
    </tr>
    <tr>
        <th className="text-left">Dodávka do siete ZSE</th>
        <td><NumberFormat {...numFormat} value={dszse.tpv} /></td>
        <td><NumberFormat {...numFormat} value={dszse.tpz} /></td>
        <td><NumberFormat {...numFormat} value={dszse.tpv + dszse.tpz} /></td>
    </tr>
    <tr>
        <th className="text-left">Dodávka regulačnej elektrickej energie</th>
        <td><NumberFormat {...numFormat} value={dree.tpv} /></td>
        <td><NumberFormat {...numFormat} value={dree.tpz} /></td>
        <td><NumberFormat {...numFormat} value={dree.tpv + dree.tpz} /></td>
    </tr>
    <tr>
        <th className="text-left">Vlastná spotreba elektrickej energie</th>
        <td><NumberFormat {...numFormat} value={vsee.tpv} /></td>
        <td><NumberFormat {...numFormat} value={vsee.tpz} /></td>
        <td><NumberFormat {...numFormat} value={vsee.tpv + vsee.tpz} /></td>
    </tr>
    </tbody>
)

const DelenieNakladovPodlaEnergetickejMetody = () => (
    <tbody>
    <tr>
        <th>Využiteľné teplo na dodávku tepla</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>Teplo spotrebované na výrobu elektriny</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </tbody>
)

class DodavkaTepla extends React.Component {

    render() {
        const dodane = this.props.dodane
        const elektrina = this.props.elektrina

        return (
            <div>
                {/*<Table size="sm">
                    <tbody className="text-right">
                    {this.props.polozky.map(
                        polozka => <Polozka key={polozka.id} {...polozka} />
                    )}
                    </tbody>
                </Table>
                <br/>*/}
                <h3 className="text-center">Užitočná dodávka tepla</h3>
                <Table size="sm" bordered>
                    <thead>
                    <tr className="text-center">
                        <th rowSpan={2}></th>
                        <th colSpan={2}>SCZT Východ</th>
                        <th colSpan={2}>SCZT Západ</th>
                        <th colSpan={2}>BAT spolu</th>
                    </tr>
                    <tr className="text-center">
                        <th>kWh</th>
                        <th>kW</th>
                        <th>kWh</th>
                        <th>kW</th>
                        <th>kWh</th>
                        <th>kW</th>
                    </tr>
                    </thead>
                    <UzitocnaDodavkaTepla {...dodane} />
                </Table>
                <br/>
                <Row>
                    <Col xl="8">
                        <h3 className="text-center">Porovnanie s plánom</h3>
                        <Table size="sm" bordered>
                            <thead>
                            <tr className="text-center">
                                <th colSpan={2}></th>
                                <th>Plán</th>
                                <th>Skutočnosť</th>
                                <th>Rozdiel</th>
                                <th>Plnenie v %</th>
                            </tr>
                            </thead>
                            <PorovnanieSPlanom {...dodane} />
                        </Table>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xl="6">
                        <h3 className="text-center">Výroba tepla podľa zdrojov</h3>
                        <Table size="sm" bordered>
                            <thead>
                            <tr className="text-center">
                                <th></th>
                                <th>kWh</th>
                                <th>GJ</th>
                            </tr>
                            </thead>
                            <VyrobaTeplaPodlaZdrojov {...dodane} />
                        </Table>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xl="6">
                        <h3 className="text-center">Výroba elektrickej energie</h3>
                        <Table size="sm" bordered>
                            <thead>
                            <tr className="text-center">
                                <th></th>
                                <th>Tepláreň Východ (MWh)</th>
                                <th>Tepláreň Západ (MWh)</th>
                                <th>BAT Spolu (MWh)</th>
                            </tr>
                            </thead>
                            <VyrobaElektrickejEnergie {...elektrina} />
                        </Table>
                    </Col>
                    <Col xl="6">
                        <h3 className="text-center">Delenie nákladov podľa energetickej metódy</h3>
                        <Table size="sm" bordered>
                            <thead>
                            <tr className="text-center">
                                <th></th>
                                <th>Tepláreň Východ (MWh)</th>
                                <th>Tepláreň Západ (MWh)</th>
                                <th>Kľúčovanie (%)</th>
                            </tr>
                            </thead>
                            <DelenieNakladovPodlaEnergetickejMetody/>
                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        dodane: state.dodavkatepla.dodane,
        elektrina: state.dodavkatepla.elektrina
    }),
    { fetchDodavkaTeplaRequest }
)(DodavkaTepla)
