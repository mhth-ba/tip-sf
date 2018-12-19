import React from 'react'
import {connect} from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Input } from 'reactstrap'

import ZnakDane from './polozky/ZnakDane'
import PolozkyVystup from './polozky/PolozkyVystup'

class Vystup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filtered: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
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
    const filtered = this.props.vystup.polozky.filter(
      (v) => {
        return String (v.doklad).search(regexp) > -1
          || String (v.referencia).search(regexp) > -1
      }
    )

    this.setState({
      filtered: filtered
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.vystup.polozky !== this.props.vystup.polozky) {
      this.setState({
        filtered: this.props.vystup.polozky
      })
    }
  }

  render() {

    const init = this.props.hlavny.initialized
    const zn = this.props.zn.vystup

    // const polozky = this.props.vystup.polozky // vystupna dph
    const polozky = this.state.filtered // vystupna dph

    return (
      <div>
        { init === true &&
        <Card>
          <CardHeader className="bg-primary text-white">
            Výstupná DPH
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={1}><strong>Znak</strong></Col>
              <Col md={1}><strong>Počet položiek</strong></Col>
              <Col md={5}><strong>Popis</strong></Col>
              <Col md={1}><strong>Sadzba</strong></Col>
              <Col md={1}><strong>Účet hlavnej knihy</strong></Col>
              <Col md={1}><strong>Základ dane</strong></Col>
              <Col md={1}><strong>Výstupná DPH</strong></Col>
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
                                 polozky={ <PolozkyVystup p={items} /> }
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
        </Card>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  zn: state.znakydane,
  vystup: state.vystup
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vystup)