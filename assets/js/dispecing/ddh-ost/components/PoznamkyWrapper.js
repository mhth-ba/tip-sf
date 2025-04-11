import React from 'react'
import { connect } from 'react-redux'
import Poznamky from './Poznamky'
import PoznamkyReadOnly from './PoznamkyReadOnly'
import { canEditData } from '../../../utils/datePermissions'

const PoznamkyWrapper = ({ hlavny, opravnenia }) => {
  // Determine if user can edit based on permissions and date
  const canEdit = canEditData(hlavny, opravnenia)

  return canEdit ? <Poznamky /> : <PoznamkyReadOnly />
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(PoznamkyWrapper)
