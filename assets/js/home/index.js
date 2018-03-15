import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Card, CardTitle, CardText, CardBody, Button } from 'reactstrap'

import Routing from '../Components/Routing'

const polozky = [
    {
        title: 'Výkon a odber tepla',
        text: `Priebeh v západnej a východnej sústave.
        Aktualizované hodnoty k poslednej hodine.
        Historické zobrazenie za 72 hodín.
        Export údajov do excelu.`,
        users: `Ing. Milan Bartoš`,
        links: [{
            url: 'http://zeusprod-vi/tip/zone_ris_vykon-odber-sustav.php',
            nazov: 'Výkon a odber tepla',
            color: 'primary',
            size: 'md'
        }, {
            url: 'http://zeusprod-vi/tip/zone_ris_celkovy-vykon-sustav.php',
            nazov: 'Celkový výkon sústav',
            color: 'secondary',
            size: 'sm'
        }, {
            url: 'http://zeusprod-vi/tip/zone_ris_celkovy-odber-tepla-zo-sustav.php',
            nazov: 'Celkový odber tepla zo sústav',
            color: 'secondary',
            size: 'sm'
        }]
    }, {
        title: 'Plánovanie prevádzky',
        text: `Tvorba, upravovanie a zobrazenie plánov prevádzky.
        Štruktúra sa automaticky prispôsobuje v závislosti od súčasného zapojenia zdrojov a zariadení, ktoré sa
        zadefinuje pri tvorbe plánu.`,
        users: `Ing. Peter Sochovič, Ing. Mário Geleta, Ing. Ivan Broniš`,
        links: [{
            url: 'http://zeusprod-vi/tip/zone_ee_plan-prevadzky.php',
            nazov: 'Týždenný plán prevádzky',
            color: 'primary',
            size: 'md'
        }, {
            url: 'http://zeusprod-vi/tip/zone_ee_denny-plan-prevadzky.php',
            nazov: 'Denný plán prevádzky',
            color: 'secondary',
            size: 'sm'
        }]
    }, {
        title: 'Meranie a odpočty',
        text: `Plnenie dát z ProCop do odpočtovej zbernice na základe spájania údajov so SAPom.
        Kontrola anomálií. Porovnanie spotrieb.
        Export nameraných a skontrolovaných stavov do SAPu.`,
        users: `Ing. Miroslav Lenhartovič, Ing. Zlatica Morávková`,
        links: [{
            url: 'http://zeusprod-vi/tip/zone_smao_denne-a-mesacne-odpocty.php',
            nazov: 'Správa odpočtov',
            color: 'primary',
            size: 'md'
        }, {
            url: 'http://zeusprod-vi/tip/zone_smao_vyhladavanie-meradiel.php',
            nazov: 'Vyhľadávanie meradiel',
            color: 'secondary',
            size: 'sm'
        }]
    }, {
        title: 'Cena tepla',
        text: `Príprava návrhu a výpočet skutočnej ceny tepla.
        Zobrazenie, tvorba, upravenie.
        Import excel súborov a príloh.
        Správa oprávnení.
        Prehľad vykonaných zmien.
        Export príloh k cenovému návrhu pre ÚRSO.`,
        users: `Ing. Marcela Belanská, Ing. Martin Bíreš, Ing. Róbert Tomčík`,
        links: [{
            url: 'http://zeusprod-vi/tip/zone_kont_navrh-ceny-tepla.php',
            nazov: 'Návrh ceny tepla',
            color: 'primary',
            size: 'md'
        }, {
            url: Routing.generate('skutocna-cena-tepla'),
            nazov: 'Skutočná cena tepla',
            color: 'info',
            size: 'sm',
            disabled: true
        }]
    }, {
        title: 'Denníky prevádzky',
        text: `Stavy a údaje o výrobných zariadeniach na teplárňach.
        Činnosti súvisiace s výrobou a dodávkou tepla na prevádzkach.
        Hlásenia a poznámky odboru rozvod tepla východ.`,
        users: `Ing. Martin Cýcha, Ing. Szilárd Szabó, Ing. Peter Štetka, Ing. Peter Sochovič, Ing. Diana Chovancová`,
        links: [{
            url: 'http://zeusprod-vi/tip/zone_disp-dennik-cinnosti-zoznam-tpv.php',
            nazov: 'Tepláreň Východ',
            color: 'secondary',
            size: 'sm'
        }, {
            url: 'http://zeusprod-vi/tip/zone_disp-dennik-cinnosti-zoznam-tpz.php',
            nazov: 'Tepláreň Západ',
            color: 'secondary',
            size: 'sm'
        }, {
            url: 'http://zeusprod-vi/tip/zone_disp-dennik-cinnosti-zoznam-vhj.php',
            nazov: 'Výhrevňa Juh',
            color: 'secondary',
            size: 'sm'
        }, {
            url: 'http://zeusprod-vi/tip/zone_prevadzka_rozvod-tepla-vychod.php',
            nazov: 'Rozvod tepla východ',
            color: 'dark',
            size: 'sm'
        }]
    }, {
        title: 'Opravy a poruchy',
        text: `Hlásenia modulu PM zo SAPu.
        Obnova údajov v intervale 15 minút.
        Najčastejšie poruchové zariadenia.`,
        users: `Ing. Szilárd Szabó`,
        links: [{
            url: 'http://zeusprod-vi/tip/zone_uvod_hlasenia-pm.php',
            nazov: 'Hlásenia PM',
            color: 'primary',
            size: 'md'
        }]
    }, {
        title: 'Majetkové karty',
        text: `Zobrazenie majetkovej karty zamestnanca.
        VOD a RS sa zobrazujú aj MK podriadených.
        Generovanie formuláru hromadnej prevodky DM a KM.`,
        users: `Mgr. Miroslav Rybár, Zuzana Grancová, Mgr. Andrej Rybák, Ing. Juraj Lelkeš`,
        links: [{
            url: 'http://zeusprod-vi/tip/zone_uvod_majetkove-karty.php',
            nazov: 'Majetková karta',
            color: 'primary',
            size: 'md'
        }, {
            url: 'http://zeusprod-vi/tip/zone_uvod_prevodka.php',
            nazov: 'Hromadná prevodka',
            color: 'secondary',
            size: 'sm'
        }]
    }
]

const Karta = ({title, text, users, links}) => (
    <Col xs="12" sm="12" md="6" lg="4" xl="3">
        <Card className="mb-3">
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <CardText>
                <span className="text-muted small">
                    {/*Kľúčoví používatelia:*/}
                    {/*<br/>*/}
                    {users}
                </span>
                </CardText>
                {links.map(
                    (link) => <Button href={link.url} color={link.color} size={link.size} disabled={link.disabled} block>{link.nazov}</Button>
                )}
            </CardBody>
        </Card>
    </Col>
)
class App extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    {polozky.map(
                        (polozka, index) => <Karta key={index} {...polozka} />
                    )}
                </Row>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('uvodna-stranka')
);