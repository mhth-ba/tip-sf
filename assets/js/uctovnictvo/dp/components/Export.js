import React from 'react'
import {connect} from 'react-redux'

import FontAwesome from 'react-fontawesome'
import Routing from '../../../Components/Routing'
import {updateHlavnyRequest} from '../actions'

class Export extends React.Component {
  constructor(props) {
    super(props)

    this.handleZamknut = this.handleZamknut.bind(this)
  }

  handleZamknut(e) {
    e.preventDefault()

    this.props.zamknut({
      id: this.props.hlavny.id,
      zamknute: true
    })
  }

  render() {

    const init = this.props.hlavny.initialized
    const hlavny = this.props.hlavny
    const zamknute = hlavny.zamknute
    const path = Routing.generate('dp_export')

    return (
      <div>
        { init &&
          <div>
            <a href={`${path}/${hlavny.id}`} className="btn btn-success" role="button">
              Exportovať do XML
            </a>
            &nbsp;
            <a href="https://pfseform.financnasprava.sk/Formulare/eFormVzor/DP/form.472.html"
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
            &nbsp;
            { !zamknute &&
              <a href="#" className="btn btn-dark" role="button" onClick={this.handleZamknut}>
                <FontAwesome name="lock" />
                &nbsp;
                Zamknúť
              </a>
            }
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
  zamknut: (e) => dispatch(updateHlavnyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Export)