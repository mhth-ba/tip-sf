import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Card, CardTitle, CardText, CardBody, Button } from 'reactstrap'

import Routing from '../Components/Routing'

const polozky = [
    {
        title: 'Skutočná cena tepla',
        text: `Výpočet skutočnej ceny tepla za uplynulý rok.
        Zobrazenie, tvorba, upravenie.
        Import excel súborov a príloh.
        Oprávnenia.`,
        users: `Ing. Marcela Belanská,
        Ing. Martin Bíreš,
        Ing. Róbert Tomčík`,
        link: Routing.generate('skutocna-cena-tepla')
    },
    {
        title: 'Meranie a odpočty',
        text: `Plnenie dát do odpočtovej zbernice.
        Kontrola anomálií.
        Porovnanie spotrieb.
        Export do SAPu.`,
        users: `Ing. Miroslav Lenhartovič`,
        link: 'http://zeusprod-vi/tip/zone_smao_denne-a-mesacne-odpocty.php'
    },
    {
        title: 'Výkon a odber tepla zo sústavy',
        text: `Priebeh v západnej a východnej sústave.
        Aktualizované hodnoty k poslednej hodine.
        Historické zobrazenie za 72 hodín.`,
        users: `Ing. Milan Bartoš`,
        link: 'http://zeusprod-vi/tip/zone_ris_vykon-odber-sustav.php'
    },
    {
        title: 'Opravy a poruchy',
        text: `Hlásenia modulu PM zo SAPu.
        Obnova údajov v intervale 15 minút.
        Najčastejšie poruchové zariadenia.`,
        users: `Ing. Szilárd Szabó`,
        link: 'http://zeusprod-vi/tip/zone_uvod_hlasenia-pm.php'
    },
    {
        title: 'Majetkové karty',
        text: `Zobrazenie majetkovej karty zamestnanca.
        VOD má možnosť vidieť MK svojich podriadených.`,
        users: `Mgr. Miroslav Rybár, Zuzana Grancová`,
        link: 'http://zeusprod-vi/tip/zone_uvod_majetkove-karty.php'
    }
]

const Karta = ({title, text, users, link}) => (
    <Col sm="12" md="6" lg="4" xl="3">
        <Card body>
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
            <CardText>
                <span className="text-muted small">
                    Kľúčoví používatelia:
                    <br/>
                    {users}
                </span>
            </CardText>
            <Button href={link} color="primary">{title}</Button>
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