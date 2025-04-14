import React from 'react'
import { connect } from 'react-redux'
import ZmenaNaZdrojoch from './ZmenaNaZdrojoch'
import ZmenaNaZdrojochReadOnly from './ZmenaNaZdrojochReadOnly'
import { canEditData } from '../../../utils/datePermissions'

class ZmenaNaZdrojochWrapper extends React.Component {
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

    return canEdit ? <ZmenaNaZdrojoch /> : <ZmenaNaZdrojochReadOnly />
  }
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(ZmenaNaZdrojochWrapper)
