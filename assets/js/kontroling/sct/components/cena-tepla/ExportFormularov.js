import React from 'react'
import {connect} from 'react-redux'

import ReactHtmlParser from 'react-html-parser'

import {
  Table, Row, Col,
  Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter,
  Form, FormGroup, InputGroup, InputGroupAddon, InputGroupText,
  Input, Label, UncontrolledTooltip,
  Alert
} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import NumberFormat from 'react-number-format'

import Jednotka from '../../../../components/Jednotka'
import ZlomkovaCiara from '../../../../components/ZlomkovaCiara'

import DecimalScale from '../helpers/DecimalScale'

import Vstup from '../helpers/Vstup'
import Vypocet from '../helpers/Vypocet'

import Routing from '../../../../Components/Routing'

class ExportFormularov extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const hlavny = this.props.hlavny
    const path_13 = Routing.generate('sct_export-13')
    const path_14 = Routing.generate('sct_export-14')
    const path_15 = Routing.generate('sct_export-15')
    const path_16 = Routing.generate('sct_export-16')
    const path_17 = Routing.generate('sct_export-17')
    const path_18 = Routing.generate('sct_export-18')
    const path_19 = Routing.generate('sct_export-19')
    const path_20 = Routing.generate('sct_export-20')
    const path_21 = Routing.generate('sct_export-21')

    return (
      <Card>
        <CardHeader className="bg-success text-white">
          Formuláre príloh k vyhláške č. 248/2016 Z.z., ktorou sa ustanovuje cenová regulácia v tepelnej energetike
        </CardHeader>
        <CardBody>
          {/*<a id={'priloha-13'} href={`${path_13}/${hlavny.id}`} className="btn btn-success" role="button">
            Príloha č.13
          </a>
          <UncontrolledTooltip target={'priloha-13'}>
            Skutočné náklady na výrobu a dodávku tepla
          </UncontrolledTooltip>
          &nbsp;
          <a id={'priloha-14'} href={`${path_14}/${hlavny.id}`} className="btn btn-success" role="button">
            Príloha č.14
          </a>
          <UncontrolledTooltip target={'priloha-14'}>
            Skutočné náklady regulovanej zložky fixných nákladov v roku t
          </UncontrolledTooltip>
          &nbsp;
          <a id={'priloha-15'} href={`${path_15}/${hlavny.id}`} className="btn btn-success" role="button">
            Príloha č.15
          </a>
          <UncontrolledTooltip target={'priloha-15'}>
            Zoznam odberateľov tepla a skutočná dodávka tepla
          </UncontrolledTooltip>
          &nbsp;
          <a id={'priloha-16'} href={`${path_16}/${hlavny.id}`} className="btn btn-success" role="button">
            Príloha č.16
          </a>
          <UncontrolledTooltip target={'priloha-16'}>
            Údaje o odberných miestach
          </UncontrolledTooltip>
          &nbsp;
          <a id={'priloha-17'} href={`${path_17}/${hlavny.id}`} className="btn btn-success" role="button">
            Príloha č.17
          </a>
          <UncontrolledTooltip target={'priloha-17'}>
            Skutočné spoločné náklady na výrobu elektriny a tepla zariadením na kombinovanú výrobu
          </UncontrolledTooltip>
          &nbsp;
          <a id={'priloha-18'} href={`${path_18}/${hlavny.id}`} className="btn btn-success" role="button">
            Príloha č.18
          </a>
          <UncontrolledTooltip target={'priloha-18'}>
            Skutočné vypočítané náklady na výrobu tepla zo spoločných nákladov kombinovanej výroby
          </UncontrolledTooltip>
          &nbsp;
          <a id={'priloha-19'} href={`${path_19}/${hlavny.id}`} className="btn btn-success" role="button">
            Príloha č.19
          </a>
          <UncontrolledTooltip target={'priloha-19'}>
            Skutočné osobitné náklady na výrobu tepla zariadením na kombinovanú výrobu
          </UncontrolledTooltip>
          &nbsp;
          <a id={'priloha-20'} href={`${path_20}/${hlavny.id}`} className="btn btn-success" role="button">
            Príloha č.20
          </a>
          <UncontrolledTooltip target={'priloha-20'}>
            Skutočné náklady na výrobu tepla zo zdrojov tepla bez kombinovanej výroby
          </UncontrolledTooltip>
          &nbsp;
          <a id={'priloha-21'} href={`${path_21}/${hlavny.id}`} className="btn btn-success" role="button">
            Príloha č.21
          </a>
          <UncontrolledTooltip target={'priloha-21'}>
            Skutočné doplňujúce údaje o kombinovanej výrobe elektriny a tepla
          </UncontrolledTooltip>

          <br/>
          <br/>
          <br/>*/}

          <Table hover>
            <tbody>
            <tr>

              <td className="align-middle">
                <a href={`${path_13}/${hlavny.id}`} className="btn btn-success" role="button">
                  Príloha č.13
                </a>
              </td>
              <td className="align-middle">Skutočné náklady na výrobu a dodávku tepla</td>

              <td className="align-middle">
                <a href={`${path_14}/${hlavny.id}`} className="btn btn-success" role="button">
                  Príloha č.14
                </a>
              </td>
              <td className="align-middle">Skutočné náklady regulovanej zložky fixných nákladov v roku t</td>

              <td className="align-middle">
                <a href={`${path_15}/${hlavny.id}`} className="btn btn-success" role="button">
                  Príloha č.15
                </a>
              </td>
              <td className="align-middle">Zoznam odberateľov tepla a skutočná dodávka tepla</td>

            </tr>
            <tr>

              <td className="align-middle">
                <a href={`${path_16}/${hlavny.id}`} className="btn btn-success" role="button">
                  Príloha č.16
                </a>
              </td>
              <td className="align-middle">Údaje o odberných miestach</td>

              <td className="align-middle">
                <a href={`${path_17}/${hlavny.id}`} className="btn btn-success" role="button">
                  Príloha č.17
                </a>
              </td>
              <td className="align-middle">Skutočné spoločné náklady na výrobu elektriny a tepla zariadením na kombinovanú výrobu</td>

              <td className="align-middle">
                <a href={`${path_18}/${hlavny.id}`} className="btn btn-success" role="button">
                  Príloha č.18
                </a>
              </td>
              <td className="align-middle">Skutočné vypočítané náklady na výrobu tepla zo spoločných nákladov kombinovanej výroby</td>

            </tr>
            <tr>

              <td className="align-middle">
                <a href={`${path_19}/${hlavny.id}`} className="btn btn-success" role="button">
                  Príloha č.19
                </a>
              </td>
              <td className="align-middle">Skutočné osobitné náklady na výrobu tepla zariadením na kombinovanú výrobu</td>

              <td className="align-middle">
                <a href={`${path_20}/${hlavny.id}`} className="btn btn-success" role="button">
                  Príloha č.20
                </a>
              </td>
              <td className="align-middle">Skutočné náklady na výrobu tepla zo zdrojov tepla bez kombinovanej výroby</td>

              <td className="align-middle">
                <a href={`${path_21}/${hlavny.id}`} className="btn btn-success" role="button">
                  Príloha č.21
                </a>
              </td>
              <td className="align-middle">Skutočné doplňujúce údaje o kombinovanej výrobe elektriny a tepla</td>

            </tr>
            </tbody>
          </Table>

        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // zoznam: state.zoznam,
  hlavny: state.hlavny
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExportFormularov)