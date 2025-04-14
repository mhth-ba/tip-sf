import React from 'react'
import { connect } from 'react-redux'
import ZmenaNaHV from './ZmenaNaHV'
import ZmenaNaHVReadOnly from './ZmenaNaHVReadOnly'
import { canEditData } from '../../../utils/datePermissions'

class ZmenaNaHVWrapper extends React.Component {
  componentDidMount() {
    this.logPermissionDebug()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.hlavny !== this.props.hlavny || prevProps.opravnenia !== this.props.opravnenia) {
      this.logPermissionDebug()
    }
  }

  logPermissionDebug() {
    const { hlavny, opravnenia } = this.props
    const canEdit = hlavny && opravnenia ? canEditData(hlavny, opravnenia) : false
  }

  render() {
    const { hlavny, opravnenia } = this.props
    const canEdit = hlavny && opravnenia ? canEditData(hlavny, opravnenia) : false

    return canEdit ? <ZmenaNaHV /> : <ZmenaNaHVReadOnly />
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(ZmenaNaHVWrapper)
