import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col, Card, CardTitle, CardText, CardBody, Button, Badge } from 'reactstrap'

import Routing from '../Components/Routing'

const polozky = [
  {
    title: 'Výkon a odber tepla',
    text: `Priebeh v západnej a východnej sústave.
        Aktualizované hodnoty k poslednej hodine.
        Historické zobrazenie za 72 hodín.
        Export údajov do excelu.`,
    users: `Vladimír Raček, Milan Bartoš, Peter Sochovič, Daniel Ušjak`,
    links: [
      {
        url: Routing.generate('sczt-vychod'),
        nazov: 'SCZT Východ',
        color: 'primary',
        size: 'sm'
      },
      {
        url: Routing.generate('sczt-zapad'),
        nazov: 'SCZT Západ',
        color: 'primary',
        size: 'sm'
      },
      {
        url: Routing.generate('sczt-ost'),
        nazov: 'SCZT OST',
        color: 'primary',
        size: 'sm'
      },
      {
        url: Routing.generate('doplnovanie-siet'),
        nazov: 'Doplňovanie sústav',
        color: 'dark',
        size: 'sm'
      },
      {
        url: Routing.generate('doplnovanie-ost'),
        nazov: 'Doplňovanie OST',
        color: 'dark',
        size: 'sm'
      }
    ]
  },
  {
    title: 'Plánovanie prevádzky',
    text: `Tvorba, upravovanie a zobrazenie plánov prevádzky.
        Štruktúra sa automaticky prispôsobuje v závislosti od súčasného zapojenia zdrojov a zariadení, ktoré sa
        zadefinuje pri tvorbe plánu.`,
    users: `Peter Sochovič, Mário Geleta, Ivan Broniš`,
    links: [
      {
        url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_ee_plan-prevadzky.php',
        nazov: 'Týždenný plán prevádzky',
        color: 'primary',
        size: 'md'
      },
      {
        url: Routing.generate('denny-plan-prevadzky'),
        nazov: 'Denný plán prevádzky',
        color: 'secondary',
        size: 'sm'
      }
    ]
  },
  /*{
    title: 'Cena tepla',
    text: `Príprava návrhu a výpočet skutočnej ceny tepla.
        Zobrazenie, tvorba, upravenie.
        Import excel súborov a príloh.
        Správa oprávnení.
        Prehľad vykonaných zmien.
        Export príloh k cenovému návrhu pre ÚRSO.`,
    users: `Marcela Belanská, Martin Bíreš, Róbert Tomčík`,
    links: [{
      url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_kont_navrh-ceny-tepla.php',
      nazov: 'Návrh ceny tepla',
      color: 'primary',
      size: 'md'
    }, {
      url: Routing.generate('skutocna-cena-tepla'),
      nazov: 'Skutočná cena tepla',
      color: 'primary',
      size: 'md'
    }, {
      url: Routing.generate('vyhodnotenie-ceny-tepla'),
      nazov: 'Vyhodnotenie ceny tepla',
      color: 'primary',
      size: 'md'
    }]
  },*/ {
    title: 'Denníky prevádzky',
    text: `Stavy a údaje o výrobných zariadeniach na teplárňach.
        Činnosti súvisiace s výrobou a dodávkou tepla na prevádzkach.
        Hlásenia a poznámky odboru rozvod tepla východ.`,
    users: `Martin Cýcha, Szilárd Szabó, Peter Štetka, Peter Sochovič, Diana Chovancová`,
    links: [
      {
        url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_disp-dennik-cinnosti-zoznam-tpv.php',
        nazov: 'Tepláreň Východ',
        color: 'secondary',
        size: 'sm'
      },
      {
        url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_disp-dennik-cinnosti-zoznam-tpz.php',
        nazov: 'Tepláreň Západ',
        color: 'secondary',
        size: 'sm'
      },
      {
        url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_disp-dennik-cinnosti-zoznam-vhj.php',
        nazov: 'Výhrevňa Juh',
        color: 'secondary',
        size: 'sm'
      },
      {
        url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_prevadzka_rozvod-tepla-vychod.php',
        nazov: 'Rozvod tepla východ',
        color: 'dark',
        size: 'sm'
      }
    ]
  },

  {
    title: 'Denné dispečerské hlásenia',
    text: `Zadávanie a zobrazenie denných hlásení o poruchách na OST, zdrojoch a HV.`,
    users: `Peter Sochovič, Daniel Ušjak`,
    links: [
      {
        url: Routing.generate('ddh-ost'),
        nazov: 'Denné hlásenie • OST',
        color: 'primary',
        size: 'md'
      },
      {
        url: Routing.generate('ddh-hv'),
        nazov: 'Denné hlásenie • Zdroje a HV',
        color: 'primary',
        size: 'md'
      }
    ]
  },

  /* {
    title: 'Opravy a poruchy',
    text: `Hlásenia modulu PM zo SAPu.
        Obnova údajov v intervale 15 minút.
        Najčastejšie poruchové zariadenia.`,
    users: `Szilárd Szabó`,
    links: [{
      url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_uvod_hlasenia-pm.php',
      nazov: 'Hlásenia PM',
      color: 'primary',
      size: 'md'
    }]
  }, {
    title: 'Majetkové karty',
    text: `Zobrazenie majetkovej karty zamestnanca.
        VOD a RS sa zobrazujú aj MK podriadených.
        Generovanie formuláru hromadnej prevodky DM a KM.`,
    users: `Mgr. Miroslav Rybár, Zuzana Grancová, Mgr. Andrej Rybák, Juraj Lelkeš`,
    links: [{
      url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_uvod_majetkove-karty.php',
      nazov: 'Majetková karta',
      color: 'primary',
      size: 'md'
    }, {
      url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_uvod_prevodka.php',
      nazov: 'Hromadná prevodka',
      color: 'secondary',
      size: 'sm'
    }]
  }, {
    title: 'Účtovníctvo',
    text: `Daňové priznanie k DPH. Import súborov zo SAPu.
        Výpočet a sumarizácia. Export do XML súboru pre následné použitie na stránke finančnej správy.`,
    users: `Marcela Belanská, Helena Rejmanová`,
    links: [{
      url: Routing.generate('danove-priznanie'),
      nazov: 'Daňové priznanie',
      color: 'primary',
      size: 'md'
    }]
  }, {
    title: 'Miestne prevádzkové predpisy',
    text: `Zobrazenie miestnych prevádzkových predpisov (MPP) technologických zariadení zdrojov a rozvodov sústavy CZT.`,
    users: `Szilárd Szabó, Jaroslav Ovečka`,
    links: [{
      url: Routing.generate('miestne-prevadzkove-predpisy-tpv'),
      nazov: 'Tepláreň Východ',
      color: 'secondary',
      size: 'md'
    }, {
      url: Routing.generate('miestne-prevadzkove-predpisy-tpz'),
      nazov: 'Tepláreň Západ',
      color: 'secondary',
      size: 'md'
    }, {
      url: Routing.generate('miestne-prevadzkove-predpisy-vhj'),
      nazov: 'Výhrevňa Juh',
      color: 'secondary',
      size: 'md'
    }]
  }, {
    title: 'Dispečing',
    text: `Evidencia záznamov porúch a manipulácií na OST, zdrojoch a zariadeniach`,
    users: `Peter Sochovič`,
    links: [{
      url: Routing.generate('evidencia-ost'),
      nazov: 'Evidencia stavov OST',
      color: 'primary',
      size: 'md'
    }]
  }*/

  {
    title: 'Meranie a odpočty',
    text: `Plnenie dát z ProCop do odpočtovej zbernice na základe spájania údajov so SAPom.
        Kontrola anomálií. Porovnanie spotrieb.
        Export nameraných a skontrolovaných stavov do SAPu.`,
    users: `Miroslav Lenhartovič, Zlatica Tatarková`,
    links: [
      {
        url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_smao_denne-a-mesacne-odpocty.php',
        nazov: 'Správa odpočtov',
        color: 'primary',
        size: 'md'
      } /*, {
      url: Routing.generate('analyzy-notifikacie-merani'),
      nazov: 'Analýzy a notifikácie o meraní',
      color: 'primary',
      size: 'md'
    }, {
      url: 'https://srv10wpzeusprod01.corp.mhth.sk/tip/zone_smao_vyhladavanie-meradiel.php',
      nazov: 'Vyhľadávanie meradiel',
      color: 'secondary',
      size: 'sm'
    }, {
      url: Routing.generate('report-meracov'),
      nazov: 'Report meračov',
      color: 'secondary',
      size: 'sm'
    }*/
    ]
  }
]

const Karta = ({ title, text, users, links }) => (
  <Col xs="12" sm="12" md="6" lg="4" xl="3">
    <Card className="mb-3">
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardText>
          <span className="text-muted small">{users}</span>
        </CardText>
        {links.map((link, ix) => (
          <Button key={ix} href={link.url} color={link.color} size={link.size} disabled={link.disabled} block>
            {link.nazov}{' '}
            {link.new && (
              <Badge color="light" className="ml-2">
                Nové
              </Badge>
            )}
          </Button>
        ))}
      </CardBody>
    </Card>
  </Col>
)
class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          {polozky.map((polozka, ix) => (
            <Karta key={ix} {...polozka} />
          ))}
        </Row>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('uvodna-stranka'))
