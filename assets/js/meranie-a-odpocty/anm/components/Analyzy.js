import React from 'react'
import {connect} from 'react-redux'

import FontAwesome from 'react-fontawesome'

import Container from './helpers/Container'

import {fetchAnalyzyRequest, fetchOpravneniaRequest} from "../actions";

class Analyzy extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.load()
    this.props.security()
  }

  render() {

    const polozky = this.props.analyzy.polozky
    const loading = this.props.analyzy.loading

    const kat_1 = polozky.filter(v => v.kategoria === 1)
    const kat_2 = polozky.filter(v => v.kategoria === 2)
    const kat_3 = polozky.filter(v => v.kategoria === 3)
    const kat_4 = polozky.filter(v => v.kategoria === 4)
    const kat_5 = polozky.filter(v => v.kategoria === 5)
    const kat_6 = polozky.filter(v => v.kategoria === 6)
    const kat_7 = polozky.filter(v => v.kategoria === 7)

    return (
      <div>

        <h3>
          <FontAwesome name={loading ? 'spinner' : 'exclamation-triangle'} spin={loading} />
          &nbsp;
          Porucha technológie
        </h3>
        <Container
          polozky={kat_1}
          kategoria={1}
          farba={'bg-flower text-white'}
          kriteria={[
            <span>&Delta;t &nbsp; &lt; &nbsp; 3 °C</span>,
            <span>Okamžitý výkon &nbsp; &gt; &nbsp; 5 kW</span>,
            <span>Okamžitý prietok &nbsp; &gt; &nbsp; 5 m<sup>3</sup>/h</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={loading ? 'spinner' : 'cogs'} spin={loading} />
          &nbsp;
          Porucha merača
        </h3>
        <Container
          polozky={kat_2}
          kategoria={2}
          farba={'bg-warning text-white'}
          kriteria={[
            <span>&Delta;t &nbsp; &gt; &nbsp; 5 °C</span>,
            <span>Okamžitý výkon &nbsp; = &nbsp; 0 kW</span>,
            <span>Okamžitý prietok &nbsp; = &nbsp; 0 m<sup>3</sup>/h</span>,
            <span>Trend &nbsp; &gt; &nbsp; 24 hodín</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={loading ? 'spinner' : 'exclamation-circle'} spin={loading} />
          &nbsp;
          Porucha merania
        </h3>
        <Container
          polozky={kat_3}
          kategoria={3}
          farba={'bg-danger text-white'}
          kriteria={[
            <span>Výstupná teplota &nbsp; = &nbsp; 200 alebo 185 °C</span>,
            <span>Okrem týchto čísiel miesta prístroja: 10005205, 10006196</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={loading ? 'spinner' : 'snowflake-o'} spin={loading} />
          &nbsp;
          Nevychladenie média
        </h3>
        <Container
          polozky={kat_4}
          kategoria={4}
          farba={'bg-primary text-white'}
          kriteria={[
            <span>3°C &nbsp; &lt; &nbsp; &Delta;t &nbsp; &lt; &nbsp; 10 °C</span>,
            <span>Okamžitý výkon &nbsp; &gt; &nbsp; 5 kW</span>,
            <span>Okamžitý prietok &nbsp; &gt; &nbsp; 5 m<sup>3</sup>/h</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={loading ? 'spinner' : 'thermometer-3'} spin={loading} />
          &nbsp;
          Problém s teplomerom
        </h3>
        <Container
          polozky={kat_5}
          kategoria={5}
          farba={'bg-orange text-white'}
          kriteria={[
            <span>Výstupná teplota &nbsp; &gt; &nbsp; 30 °C &nbsp; a &nbsp; Vratná teplota &nbsp; &lt; &nbsp; 30 °C</span>,
            <span>Okamžitý výkon &nbsp; &gt; &nbsp; 0 kW</span>,
            <span>Okamžitý prietok &nbsp; &gt; &nbsp; 0 m<sup>3</sup>/h</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={loading ? 'spinner' : 'exchange'} spin={loading} />
          &nbsp;
          Vymenené signály výstupnej a vratnej teploty
        </h3>
        <Container
          polozky={kat_6}
          kategoria={6}
          farba={'bg-yellowgreen text-white'}
          kriteria={[
            <span>Výstupná teplota &nbsp; &lt; &nbsp; Vratná teplota</span>,
            <span>&Delta;t &nbsp; &lt; &nbsp; -5 °C</span>,
            <span>Ignorovať medzi 23:00h a 5:00h</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={loading ? 'spinner' : 'battery-quarter'} spin={loading} />
          &nbsp;
          Výpadok napájania počítadla
        </h3>
        <Container
          polozky={kat_7}
          kategoria={7}
          farba={'bg-cyan text-white'}
          kriteria={[
            <span>Okamžitý výkon je rovnaký</span>,
            <span>Okamžitý prietok je rovnaký</span>,
            <span>Trend &nbsp; &gt; &nbsp; 72 hodín</span>
          ]}
        />

        <br/><br/>


      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
  opravnenia: state.opravnenia,
  analyzy: state.analyzy
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  security: (e) => dispatch(fetchOpravneniaRequest(e)),
  load: (e) => dispatch(fetchAnalyzyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analyzy)