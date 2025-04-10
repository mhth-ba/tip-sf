import React from 'react'
import { connect } from 'react-redux'
import PraceNaOSTPrevadzka from './PraceNaOSTPrevadzka'
import PraceNaOSTPrevadzkaReadOnly from './PraceNaOSTPrevadzkaReadOnly'
import { canEditData } from '../../../utils/datePermissions'

const PraceNaOSTPrevadzkaWrapper = ({ hlavny, opravnenia }) => {
  // Determine if user can edit based on permissions and date
  const canEdit = canEditData(hlavny, opravnenia)

  return canEdit ? <PraceNaOSTPrevadzka /> : <PraceNaOSTPrevadzkaReadOnly />
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(PraceNaOSTPrevadzkaWrapper)
