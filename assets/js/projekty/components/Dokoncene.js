import React from 'react'
import {connect} from 'react-redux'

import { Card, CardText, ListGroup } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import { dateShort } from '../../utils/format'

import Uloha from './ulohy/Uloha'

class Dokoncene extends React.Component {
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
          <FontAwesome name={'check-square-o'} />
          &nbsp;
          Dokončené úlohy
        </h3>
        <br/>
        { this.props.projekty.loading ?
          <Card body>
              <h5>
                <FontAwesome name={'spinner'} spin />
                &nbsp;
                <em>Načítanie dokončených úloh ...</em>
              </h5>
          </Card>
          :
          <ListGroup style={{ overflowY: 'scroll', maxHeight: '250px' }}>
            {/* OPERATIVNE ULOHY */}
            { ulohy
              .filter(x => x.stav.id === 3)
              .map(
                (uloha, idx) => (
                  <Uloha key={idx}
                         nazov={uloha.nazov}
                         ziadatel={uloha.ziadatel}
                         zadane={dateShort(uloha.zadane)}
                         termin={dateShort(uloha.termin)}
                         dokoncene={dateShort(uloha.dokoncene)}
                         pracnost={uloha.cas}
                         popis={uloha.popis}
                         stav={uloha.stav}
                  />
                )
              )
            }

            {/* CIASTKOVE ULOHY NA PROJEKTOCH */}
            { ciastkove
              .filter(x => x.stav.id === 3)
              .map(
                (uloha, idx) => (
                  <Uloha key={idx}
                         nazov={uloha.nazov}
                         ziadatel={uloha.ziadatel}
                         zadane={dateShort(uloha.zadane)}
                         dokoncene={dateShort(uloha.dokoncene)}
                         pracnost={uloha.cas}
                         projekt={uloha.projekt.nazov}
                         popis={uloha.popis}
                         stav={uloha.stav}
                  />
                )
              )
            }

            {/* ZMENOVE POZIADAVKY K DOKONCENYM PROJEKTOM */}
            { zmenove
              .filter(x => x.stav.id === 3)
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
                         plnenie={uloha.plnenie}
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
)(Dokoncene)