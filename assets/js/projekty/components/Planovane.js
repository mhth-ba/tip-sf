import React from 'react'
import {connect} from 'react-redux'

import { Card, CardText, ListGroup } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import { dateShort } from '../../utils/format'

import Uloha from './ulohy/Uloha'

class Planovane extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const ulohy = this.props.projekty.ulohy
    const ciastkove = this.props.projekty.ciastkove
    const zmenove = this.props.projekty.zmenove

    return (
      <div>
        <h3>
          <FontAwesome name={'flag-o'} />
          &nbsp;
          Plánované úlohy
        </h3>
        <br/>
        { this.props.projekty.loading ?
          <Card body>
              <h5>
                <FontAwesome name={'spinner'} spin />
                &nbsp;
                <em>Načítanie plánovaných úloh ...</em>
              </h5>
          </Card>
          :
          <ListGroup>
            {/* OPERATIVNE ULOHY */}
            { ulohy
              .filter(x => x.stav.id === 2)
              .map(
                (uloha, idx) => (
                  <Uloha key={idx}
                         nazov={uloha.nazov}
                         ziadatel={uloha.ziadatel}
                         zadane={dateShort(uloha.zadane)}
                         termin={dateShort(uloha.termin)}
                         pracnost={uloha.cas}
                         popis={uloha.popis}
                         // plnenie={uloha.plnenie}
                         stav={uloha.stav}
                  />
                )
              )
            }

            {/* CIASTKOVE ULOHY NA PROJEKTOCH */}
            { ciastkove
              .filter(x => x.stav.id === 2)
              .map(
                (uloha, idx) => (
                  <Uloha key={idx}
                         nazov={uloha.nazov}
                         ziadatel={uloha.ziadatel}
                         zadane={dateShort(uloha.zadane)}
                         pracnost={uloha.cas}
                         projekt={uloha.projekt.nazov}
                         popis={uloha.popis}
                         // plnenie={uloha.plnenie}
                         stav={uloha.stav}
                  />
                )
              )
            }

            {/* ZMENOVE POZIADAVKY K DOKONCENYM PROJEKTOM */}
            { zmenove
              .filter(x => x.stav.id === 2)
              .map(
                (uloha, idx) => (
                  <Uloha key={idx}
                         nazov={uloha.nazov}
                         ziadatel={uloha.ziadatel}
                         zadane={dateShort(uloha.zadane)}
                         termin={dateShort(uloha.termin)}
                         pracnost={uloha.cas}
                         projekt={uloha.projekt.nazov}
                         popis={uloha.popis}
                         // plnenie={uloha.plnenie}
                         stav={uloha.stav}
                  />
                )
              )
            }

          </ListGroup>
        }
        <br/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  projekty: state.projekty
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planovane)