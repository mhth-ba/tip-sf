import React from 'react'
import {connect} from 'react-redux'

import { Card, CardBody, CardText } from 'reactstrap'

import { RIETextArea } from 'riek2'

const RIEConfig = {
  classEditing: 'form-control',
  classInvalid: 'is-invalid',
  classLoading: 'form-control riek-loading'
}

class Poznamky extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange(id, key, data) {
    data = {
      ...data,
      ...id,
      key
    }

    this.props.update(data)
  }

  render() {

    const opravnenia = this.props.opravnenia
    const nastroje = this.props.nastroje

    const editovatelne = opravnenia.kont && nastroje.highlightEditable

    const className = this.props['class']

    const row = this.props['row']
    const col = this.props['col']
    const id = this.props['id']
    const value = this.props['val']

    return (
      <Card style={{
        maxWidth: '960px',
        fontFamily: 'Comic Sans MS',
        fontSize: '1.1em',
        textShadow: '4px 4px 7px #999'
      }}>

        {/* Bodoni MT ... Monotype Corsiva ... Haettenschweiler */}

        {/*<img src="../build/static/paper-background.jpg"
             className="card-img"
             style={{ opacity: 0.21 }}
        />*/}

        {/*<CardBody className="card-img-overlay">*/}

        <CardBody style={{
          backgroundImage: 'url("../build/static/paper-background.jpg")',
          // backgroundColor: 'rgba(255, 252, 173, 0.82)',
          backgroundColor: 'rgba(255, 252, 255, 0.85)',
          backgroundBlendMode: 'screen'
        }}>
          <div>
            <h4>Poznámky</h4>
            <br/>

            <CardText style={{whiteSpace: 'pre-line'}}>
              { editovatelne ?
                <RIETextArea {...RIEConfig} propName={col} value={value}
                             change={ this.handleChange.bind(this, {id}, row) }
                             rows={12}
                             className={nastroje.highlightEditable ? "riek-textarea" : ""}
                             isDisabled={!opravnenia.kont}
                />
                :
                value
              }
            </CardText>
          </div>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  opravnenia: state.opravnenia,
  nastroje: state.nastroje,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  //update: (e) => dispatch(updatePoznamkyRequest(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poznamky)