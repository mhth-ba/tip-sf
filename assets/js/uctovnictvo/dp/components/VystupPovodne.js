import React from 'react'
import {connect} from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Input, Collapse, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'

import ZnakDane from './polozky/ZnakDane'
import PolozkyVystup from './polozky/PolozkyVystup'

class VystupPovodne extends React.Component {
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

  // vyhľadávanie dokladu alebo referencie medzi všetkými dokladmi
  handleFilter(val) {

    const regexp = new RegExp(val, 'i')
    const filtered = this.props.vystup.povodne.filter(
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
    if (prevProps.vystup.povodne !== this.props.vystup.povodne) {
      this.setState({
        filtered: this.props.vystup.povodne
      })
    }
  }

  render() {

    const init = this.props.hlavny.initialized
    const filter = this.props.ui.filter
    let zn = this.props.zn.vystup

    // let polozky = this.props.vystup.povodne // vystupna dph
    let polozky = this.state.filtered // vystupna dph

    return (
      <div>
        { init === true &&
        <Card>
          <CardHeader className="bg-primary text-white sticky-top">
            Výstupná DPH
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
                <Col md={1}><strong>Výstupná DPH</strong></Col>
                <Col md={1}><strong>Suma s DPH</strong></Col>
              </Row>
              <br/>
              { zn.map(
                (z, idx) => {
                  if (polozky === undefined) polozky = []
                  let items = polozky.filter(v => v.znak === z.znak)

                  if (filter > 1) {
                    items = items.filter(item => item.tag === Number(filter))
                  }

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
  vystup: state.vystup,
  ui: state.userinterface
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VystupPovodne)