import React from 'react'
import {connect} from 'react-redux'

import { RIEInput } from 'riek2'

class VstupText extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange(id, key, table, data) {
    data = {
      ...data,
      ...id,
      key
    }

    this.props.update(data, table)
  }

  render() {

    const opravnenia = this.props['opravnenia']
    const editable = this.props['editable']
    const edit = opravnenia && editable

    // React Inline Edit
    const RIEConfig = {
      classEditing: 'form-control',
      classInvalid: 'is-invalid',
      classLoading: 'form-control riek-loading',
      className: edit ? "riek-base" : "",
      isDisabled: !opravnenia || !editable
    }

    const className = this.props['class']
    const cell = !this.props['cell']      // bunka alebo obycajny text (<td> || <span>)

    const table = this.props['table']
    const row = this.props['row']
    const col = this.props['col']
    const id = this.props['id']
    const val = this.props['val']
    const editprops = this.props['editprops']

    if (!cell) {

      return (
        <td className={ className }>
          { edit ?
            <RIEInput {...RIEConfig}
                      value={ val }
                      id={ id }
                      change={ this.handleChange.bind( this, { id }, row, table ) }
                      propName={ col }
                      className={ edit ? "riek-base" : "" }
                      isDisabled={ !opravnenia }
                      editProps={{ editprops }}
            />
              :
            val
          }
        </td>
      )
    } else {

      return (
        <span className={ className }>
          { edit ?
            <RIEInput {...RIEConfig}
                      value={ val }
                      id={ id }
                      change={ this.handleChange.bind( this, { id }, row, table ) }
                      propName={ col }
                      className={ edit ? "riek-base" : "" }
                      isDisabled={ !opravnenia }
                      editProps={{ editprops }}
            />
              :
            val
          }
        </span>
      )
    }
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
)(VstupText)