import React from 'react'
import {connect} from 'react-redux'

import { Row, Col, Card, CardHeader, CardBody, CardText, Table } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import Container from './helpers/Container'

import {fetchAnalyzyRequest} from "../actions";

class Analyzy extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.load()
  }

  render() {

    const polozky = this.props.analyzy.polozky
    const loading = this.props.analyzy.loading

    const kat_1 = polozky.filter(v => v.kat === 1)
    const kat_2 = polozky.filter(v => v.kat === 2)
    const kat_3 = polozky.filter(v => v.kat === 3)
    const kat_4 = polozky.filter(v => v.kat === 4)
    const kat_5 = polozky.filter(v => v.kat === 5)
    const kat_6 = polozky.filter(v => v.kat === 6)

    return (
      <div>

        <h3>
          <FontAwesome name={loading ? 'spinner' : 'exclamation-triangle'} spin={loading} />
          &nbsp;
          Porucha technológie
        </h3>
        <Container
          polozky={kat_1}
          farba={'bg-warning text-white'}
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
          farba={'bg-warning text-white'}
          kriteria={[
            <span>&Delta;t &nbsp; &gt; &nbsp; 5 °C</span>,
            <span>Okamžitý výkon &nbsp; = &nbsp; 0 kW</span>,
            <span>Okamžitý prietok &nbsp; = &nbsp; 0 m<sup>3</sup>/h</span>
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
          farba={'bg-primary text-white'}
          kriteria={[
            <span>&Delta;t &nbsp; &lt; &nbsp; 10 °C</span>,
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
          farba={'bg-warning text-white'}
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
          farba={'bg-danger text-white'}
          kriteria={[
            <span>Výstupná teplota &nbsp; &lt; &nbsp; Vratná teplota</span>,
            <span>&Delta;t &nbsp; &lt; &nbsp; -5 °C</span>
          ]}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
  analyzy: state.analyzy
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: (e) => dispatch(fetchAnalyzyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analyzy)