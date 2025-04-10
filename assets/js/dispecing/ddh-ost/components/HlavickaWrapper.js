import React from 'react'
import { connect } from 'react-redux'
import Hlavicka from './Hlavicka'
import HlavickaReadOnly from './HlavickaReadOnly'
import { canEditData } from '../../../utils/datePermissions'

const HlavickaWrapper = ({ hlavny, opravnenia }) => {
  // Determine if user can edit based on permissions and date
  const canEdit = canEditData(hlavny, opravnenia)

  return canEdit ? <Hlavicka /> : <HlavickaReadOnly />
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(HlavickaWrapper)
