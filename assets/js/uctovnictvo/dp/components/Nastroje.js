import React from 'react'
import { Collapse, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import {connect} from 'react-redux'

class Nastroje extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapseVytvorit: false,
      collapseDoklad: false,
      collapseImport: false,
      collapsePrilohy: false,
      collapseAktivita: false,
      collapseNacitat: true
    }

    this.collapseVytvorit = this.collapseVytvorit.bind(this)
    this.collapseDoklad = this.collapseDoklad.bind(this)
    this.collapseImport = this.collapseImport.bind(this)
    this.collapsePrilohy = this.collapsePrilohy.bind(this)
    this.collapseAktivita = this.collapseAktivita.bind(this)
    this.collapseNacitat = this.collapseNacitat.bind(this)
  }

  collapseVytvorit() {
    this.setState({
      collapseVytvorit: !this.state.collapseVytvorit,
      collapseDoklad: false,
      collapseImport: false,
      collapsePrilohy: false,
      collapseAktivita: false,
      collapseNacitat: false
    })
  }

  collapseDoklad() {
    this.setState({
      collapseVytvorit: false,
      collapseDoklad: !this.state.collapseDoklad,
      collapseImport: false,
      collapsePrilohy: false,
      collapseAktivita: false,
      collapseNacitat: false
    })
  }

  collapseImport() {
    this.setState({
      collapseVytvorit: false,
      collapseDoklad: false,
      collapseImport: !this.state.collapseImport,
      collapsePrilohy: false,
      collapseAktivita: false,
      collapseNacitat: false
    })
  }

  collapsePrilohy() {
    this.setState({
      collapseVytvorit: false,
      collapseDoklad: false,
      collapseImport: false,
      collapsePrilohy: !this.state.collapsePrilohy,
      collapseAktivita: false,
      collapseNacitat: false
    })
  }

  collapseAktivita() {
    this.setState({
      collapseVytvorit: false,
      collapseDoklad: false,
      collapseImport: false,
      collapsePrilohy: false,
      collapseAktivita: !this.state.collapseAktivita,
      collapseNacitat: false
    })
  }

  collapseNacitat() {
    this.setState({
      collapseVytvorit: false,
      collapseDoklad: false,
      collapseImport: false,
      collapsePrilohy: false,
      collapseAktivita: false,
      collapseNacitat: !this.state.collapseNacitat
    })
  }

  render() {

    const hlavny = this.props.hlavny
    const init = hlavny.initialized

    return (
      <div>
        <div>
          <Button color={'success'} onClick={this.collapseVytvorit}>
            <FontAwesome name={'plus-circle'} />
            &nbsp;&nbsp;
            Vytvoriť daňové priznanie
          </Button>
          &nbsp;
          { init &&
            <span>
              <Button color={'primary'} onClick={this.collapseDoklad}>
                <FontAwesome name={'plus-circle'} />
                &nbsp;&nbsp;
                Pridať doklad
              </Button>
              &nbsp;
              <Button color={'primary'} onClick={this.collapseImport}>
                <FontAwesome name={'upload'} />
                &nbsp;&nbsp;
                Import údajov
              </Button>
              &nbsp;
              <Button color={'danger'} onClick={this.collapsePrilohy}>
                <FontAwesome name={'file-pdf-o'} />
                &nbsp;&nbsp;
                Prílohy
              </Button>
              &nbsp;
            </span>
          }
          <Button color={'info'} onClick={this.collapseAktivita}>
            <FontAwesome name={'user-o'} />
            &nbsp;&nbsp;
            Aktivita
          </Button>
          &nbsp;
          <Button color={'secondary'} onClick={this.collapseNacitat}>
            <FontAwesome name={'folder-o'} />
            &nbsp;&nbsp;
            Načítať
          </Button>
        </div>

        <br/>

        <div>
          <Collapse isOpen={this.state.collapseVytvorit}>
            {this.props.vytvorit}
          </Collapse>
          <Collapse isOpen={this.state.collapseDoklad}>
            {this.props.doklad}
          </Collapse>
          <Collapse isOpen={this.state.collapseImport}>
            {this.props.import}
          </Collapse>
          <Collapse isOpen={this.state.collapsePrilohy}>
            {this.props.prilohy}
          </Collapse>
          <Collapse isOpen={this.state.collapseAktivita}>
            {this.props.aktivita}
          </Collapse>
          <Collapse isOpen={this.state.collapseNacitat}>
            {this.props.nacitat}
          </Collapse>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
  ui: state.userinterface
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
  uiCollapseImport: (e) => dispatch(uiCollapseImport(e)),
  uiCollapsePrilohy: (e) => dispatch(uiCollapsePrilohy(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nastroje)