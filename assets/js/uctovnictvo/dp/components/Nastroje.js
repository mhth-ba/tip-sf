import React from 'react'
import { Collapse, Button } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import {connect} from 'react-redux'

class Nastroje extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapseVytvorit: true,
      collapseImport: false,
      collapsePrilohy: false,
      collapseAktivita: false
    }

    this.collapseVytvorit = this.collapseVytvorit.bind(this)
    this.collapseImport = this.collapseImport.bind(this)
    this.collapsePrilohy = this.collapsePrilohy.bind(this)
    this.collapseAktivita = this.collapseAktivita.bind(this)
  }

  collapseVytvorit() {
    this.setState({
      collapseVytvorit: !this.state.collapseVytvorit,
      collapseImport: false,
      collapsePrilohy: false,
      collapseAktivita: false
    })
  }

  collapseImport() {
    this.setState({
      collapseVytvorit: false,
      collapseImport: !this.state.collapseImport,
      collapsePrilohy: false,
      collapseAktivita: false
    })
  }

  collapsePrilohy() {
    this.setState({
      collapseVytvorit: false,
      collapseImport: false,
      collapsePrilohy: !this.state.collapsePrilohy,
      collapseAktivita: false
    })
  }

  collapseAktivita() {
    this.setState({
      collapseVytvorit: false,
      collapseImport: false,
      collapsePrilohy: false,
      collapseAktivita: !this.state.collapseAktivita
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
            Vytvoriť nový záznam
          </Button>
          &nbsp;
          { init &&
            <span>
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
        </div>

        <br/>

        <div>
          <Collapse isOpen={this.state.collapseVytvorit}>
            {this.props.vytvorit}
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