import React from 'react'
import {connect} from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Input, Collapse, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import ZnakDane from './polozky/ZnakDane'
import PolozkyVstup from './polozky/PolozkyVstup'

class Vstup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filtered: [],
      collapse: true
    }

    this.collapse = this.collapse.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  collapse(e) {
    e.preventDefault()
    this.setState({ collapse: !this.state.collapse })
  }

  handleChange(e) {

    e.preventDefault()
    clearTimeout(this.timer)

    const val = e.target.value

    this.timer = setTimeout(() => {
      this.handleFilter(val)
    }, 300)
  }

  handleFilter(val) {

    const regexp = new RegExp(val, 'i')
    const filtered = this.props.vstup.zmenene.filter(
      (v) => {
        return String (v.doklad).search(regexp) > -1
          || String (v.referencia).search(regexp) > -1
      }
    )

    this.setState({
      filtered: filtered
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.vstup.zmenene !== this.props.vstup.zmenene) {
      this.setState({
        filtered: this.props.vstup.zmenene
      })
    }
  }

  render() {

    const init = this.props.hlavny.initialized
    let zn = this.props.zn.vstup

    // nezobrazovat polozky pri znakoch dane: D3, D4 a D5
    zn = zn.filter(item =>
      item.znak !== 'D3'
      && item.znak !== 'D4'
      && item.znak !== 'D5'
    )

    // const polozky = this.props.vstup.zmenene // vstupna dph
    const polozky = this.state.filtered // vstupna dph

    return (
      <div>
        { init === true &&
        <Card>
          <CardHeader className="bg-primary text-white">
            Vstupná DPH
            <span className="pull-right">
              <Button onClick={this.collapse} color={'light'} size={'sm'}>
              { !this.state.collapse ?
                <FontAwesome name={'plus-square'}/>
                :
                <FontAwesome name={'minus-square'}/>
              }
              </Button>
            </span>
          </CardHeader>
          <Collapse isOpen={this.state.collapse}>
            <CardBody>
              <Row>
                <Col md={1}><strong>Znak</strong></Col>
                <Col md={1}><strong>Počet položiek</strong></Col>
                <Col md={5}><strong>Popis</strong></Col>
                <Col md={1}><strong>Sadzba</strong></Col>
                <Col md={1}><strong>Účet hlavnej knihy</strong></Col>
                <Col md={1}><strong>Základ dane</strong></Col>
                <Col md={1}><strong>Vstupná DPH</strong></Col>
                <Col md={1}><strong>Suma s DPH</strong></Col>
              </Row>
              <br/>
              { zn.map(
                (z, idx) => {
                  const items = polozky.filter(v => v.znak === z.znak)
                  return <ZnakDane key={idx}
                                   znak={z.znak}
                                   popis={z.popis}
                                   sadzba={z.sadzba}
                                   ucet_hk={z.ucet_hk}
                                   items={ items }
                                   polozky={ <PolozkyVstup p={items} /> }
                  />
                }
              )}
            </CardBody>
            <CardFooter>
              <Input type={'text'}
                     placeholder={'Vyhľadať doklad alebo faktúru'}
                     style={{ width: '200px' }}
                     onChange={this.handleChange}
              />
            </CardFooter>
          </Collapse>
        </Card>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  zn: state.znakydane,
  vstup: state.vstup
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vstup)