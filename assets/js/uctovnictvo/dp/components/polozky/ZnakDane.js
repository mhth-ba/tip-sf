import React from 'react'
import {connect} from 'react-redux'

import { Row, Col, Collapse } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import Suma from '../helpers/Suma'

class ZnakDane extends React.Component {
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

    const znak = this.props.znak
    const popis = this.props.popis
    const sadzba = this.props.sadzba
    const ucet_hk = this.props.ucet_hk

    const items = this.props.items // data
    const count = items.length     // pocet poloziek

    return (
      <div>
        <a onClick={count > 0 ? this.toggle : null}
           href={count > 0 ? '#' : undefined}
           className={ !this.state.collapse ? count > 0 ? 'text-primary' : 'text-default' : 'text-primary h5' }
        >
          <span>
            <Row>
              <Col md={1}>
                { !this.state.collapse ?
                  <FontAwesome name={'plus-square'}/>
                  :
                  <FontAwesome name={'minus-square'}/>
                }
                &nbsp;
                { znak }
              </Col>
              <Col md={1}>
                { items !== undefined && <span>({items.length})</span> }
              </Col>
              <Col md={5}>
                { popis }
              </Col>
              <Col md={1}>
                { sadzba }%
              </Col>
              <Col md={1}>
                { ucet_hk }
              </Col>
              <Col md={1}>
                <div className='text-right'>
                  { items && <Suma v={items.map(x => x['suma_bez_dph']).reduce((a, b) => a + b, 0)} /> }
                </div>
              </Col>
              <Col md={1}>
                <div className='text-right'>
                  { items && <Suma v={items.map(x => x['dph']).reduce((a, b) => a + b, 0)} /> }
                </div>
              </Col>
              <Col md={1}>
                <div className='text-right'>
                  { items && <Suma v={items.map(x => x['suma_s_dph']).reduce((a, b) => a + b, 0)} /> }
                </div>
              </Col>
            </Row>
          </span>
        </a>
        <Collapse isOpen={this.state.collapse}>
          <br/>
          <div>
            { this.props.polozky }
          </div>
          <br/>
        </Collapse>
      </div>
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
)(ZnakDane)