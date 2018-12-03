import React from 'react'
import {connect} from 'react-redux'

import { Progress, ListGroupItem, Collapse } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

class Uloha extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle(e) {
    e.preventDefault()
    this.setState({ collapse: !this.state.collapse })
  }

  render() {

    const nazov = this.props.nazov
    const popis = this.props.popis
    const projekt = this.props.projekt

    const zadane = this.props.zadane
    const termin = this.props.termin
    const dokoncene = this.props.dokoncene

    const ziadatel = this.props.ziadatel
    const pracnost = this.props.pracnost
    const plnenie = this.props.plnenie

    const stav = this.props.stav.id

    return (
      <ListGroupItem>
        <div className='d-flex justify-content-between'>
          <h5 className='mb-1'>{ nazov }</h5>
          { ziadatel &&
            <div>
              <span className='text-muted'>
                <FontAwesome name={'user'}/>&nbsp;
                Žiadateľ:
              </span>&nbsp;
              { ziadatel }
            </div>
          }
        </div>
        <div className='d-flex justify-content-between'>
          { zadane ?
            <div>
              <span className='text-muted'>
                <FontAwesome name={'calendar-plus-o'} />&nbsp;
                Dátum zadania:
              </span>&nbsp;
              { zadane }
            </div>
            :
            <div>{''}</div>
          }
          { pracnost &&
            <div>
              <span className='text-muted'>
                <FontAwesome name={'clock-o'}/>&nbsp;
                Prácnosť:
              </span>&nbsp;
              { pracnost }
            </div>
          }
        </div>
        <div className='d-flex justify-content-between'>
          { termin ?
            <div>
              <span className='text-muted'>
                <FontAwesome name={'calendar-o'} />&nbsp;
                Očakávaný termín:
              </span>&nbsp;
              { termin }
            </div>
            :
            <div>{''}</div>
          }
          { projekt &&
            <div className='text-primary'>
              <span>
                <FontAwesome name={'folder-open'} />&nbsp;
                Projekt:
              </span>&nbsp;
              { projekt }
            </div>
          }
        </div>
        <div className='d-flex justify-content-between'>
          <div>
            { dokoncene ?
              <div>
                <span className='text-muted'>
                  <FontAwesome name={'calendar-check-o'} />&nbsp;
                  Dátum dokončenia:
                </span>&nbsp;
                  { dokoncene }
              </div>
              :
              <div>{''}</div>
            }
          </div>
          <div>
            { stav === 3 &&
              <div>
                <span className='text-success'>
                  <FontAwesome name={'check'} />&nbsp;
                  Dokončené
                </span>
              </div>
            }
          </div>
        </div>
        { plnenie < 100 &&
          <div>
            <br/>
            <Progress value={ plnenie }
                      style={{ height: '15px' }}
                      animated
            >{ plnenie } %</Progress>
          </div>
        }
        <br/>
        <div>
          <span className='text-muted'>
            { !this.state.collapse ?
              <FontAwesome name={'plus-square'} /> : <FontAwesome name={'minus-square'} />
            }
          </span>
          &nbsp;
          <a onClick={this.toggle} href={'#'} className='text-secondary'>
            { !this.state.collapse ? 'Zobraziť' : 'Skryť' } podrobnosti
          </a>
          <Collapse isOpen={this.state.collapse}>
            <br/>
            <p style={{ whiteSpace: 'pre-wrap' }}>{ popis }</p>
          </Collapse>
        </div>
      </ListGroupItem>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  // hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Uloha)