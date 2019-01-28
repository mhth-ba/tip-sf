import React from 'react'
import {connect} from 'react-redux'

import Routing from '../../../Components/Routing'

class Export extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const init = this.props.hlavny.initialized
    const hlavny = this.props.hlavny
    const path = Routing.generate('dp_download')

    return (
      <div>
        { init &&
          <div>
            <a href={`${path}/${hlavny.id}`} className="btn btn-success" role="button">
              Exportovať do XML
            </a>
            &nbsp;
            <a href="https://pfseform.financnasprava.sk/Formulare/eFormVzor/DP/form.391.html"
               target="_blank"
               className="btn btn-info"
               role="button"
            >
              Formulár - Daňové priznanie k DPH
            </a>
            &nbsp;
            <a href="https://www.financnasprava.sk/sk/elektronicke-sluzby/verejne-sluzby/katalog-danovych-a-colnych/katalog-formularov#"
               target="_blank"
               className="btn btn-secondary"
               role="button"
            >
              Finančná správa - Elektronické formuláre
            </a>
            <br/>
            <br/>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  hlavny: state.hlavny,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // load: (e) => dispatch(loadMainEntry(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Export)