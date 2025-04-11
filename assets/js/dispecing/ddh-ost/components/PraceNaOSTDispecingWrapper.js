import React from 'react'
import { connect } from 'react-redux'
import PraceNaOSTDispecing from './PraceNaOSTDispecing'
import PraceNaOSTDispecingReadOnly from './PraceNaOSTDispecingReadOnly'
import { canEditData } from '../../../utils/datePermissions'

const PraceNaOSTDispecingWrapper = ({ hlavny, opravnenia }) => {
  // Determine if user can edit based on permissions and date
  const canEdit = canEditData(hlavny, opravnenia)

  return canEdit ? <PraceNaOSTDispecing /> : <PraceNaOSTDispecingReadOnly />
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(PraceNaOSTDispecingWrapper)
