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

    const polozky = this.props.polozky

    const kat_1 = polozky.filter(v => v.kat === 1)
    const kat_2 = polozky.filter(v => v.kat === 2)
    const kat_3 = polozky.filter(v => v.kat === 3)
    const kat_4 = polozky.filter(v => v.kat === 4)
    const kat_5 = polozky.filter(v => v.kat === 5)
    const kat_6 = polozky.filter(v => v.kat === 6)

    return (
      <div>

        <h3>
          <FontAwesome name={'exclamation-triangle'} />
          &nbsp;
          Porucha technológie
        </h3>
        <Container
          polozky={kat_1}
          kriteria={[
            <span>&Delta;t &nbsp; &lt; &nbsp; 3 °C</span>,
            <span>Okamžitý výkon &nbsp; &gt; &nbsp; 5 kW</span>,
            <span>Okamžitý prietok &nbsp; &gt; &nbsp; 5 m<sup>3</sup>/h</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={'cogs'} />
          &nbsp;
          Porucha merača
        </h3>
        <Container
          polozky={kat_2}
          kriteria={[
            <span>&Delta;t &nbsp; &gt; &nbsp; 5 °C</span>,
            <span>Okamžitý výkon &nbsp; = &nbsp; 0 kW</span>,
            <span>Okamžitý prietok &nbsp; = &nbsp; 0 m<sup>3</sup>/h</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={'exclamation-circle'} />
          &nbsp;
          Porucha merania
        </h3>
        <Container
          polozky={kat_3}
          kriteria={[
            <span>Výstupná teplota &nbsp; = &nbsp; 200 alebo 185 °C</span>,
            <span>Okrem týchto čísiel miesta prístroja: 10005208, 10006196</span>,
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={'snowflake-o'} />
          &nbsp;
          Nevychladenie média
        </h3>
        <Container
          polozky={kat_4}
          kriteria={[
            <span>Vratná teplota &nbsp; &gt; &nbsp; 65 °C</span>,
            <span>Okamžitý výkon &nbsp; &gt; &nbsp; 5 kW</span>,
            <span>Okamžitý prietok &nbsp; &gt; &nbsp; 5 m<sup>3</sup>/h</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={'thermometer-3'} />
          &nbsp;
          Problém s teplomerom
        </h3>
        <Container
          polozky={kat_5}
          kriteria={[
            <span>Výstupná teplota &nbsp; &gt; &nbsp; 14 °C</span>,
            <span>Okamžitý výkon &nbsp; &gt; &nbsp; 5 kW</span>,
            <span>Okamžitý prietok &nbsp; &gt; &nbsp; 5 m<sup>3</sup>/h</span>
          ]}
        />

        <br/><br/>

        <h3>
          <FontAwesome name={'exchange'} />
          &nbsp;
          Vymenené signály výstupnej a vratnej teploty
        </h3>
        <Container
          polozky={kat_6}
          kriteria={[
            <span>Výstupná teplota &nbsp; &lt; &nbsp; Vratná teplota</span>,
          ]}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
  polozky: state.analyzy.polozky
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  load: (e) => dispatch(fetchAnalyzyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analyzy)