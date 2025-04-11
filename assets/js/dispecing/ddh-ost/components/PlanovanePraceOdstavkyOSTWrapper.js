import React from 'react'
import { connect } from 'react-redux'
import PlanovanePraceOdstavkyOST from './PlanovanePraceOdstavkyOST'
import PlanovanePraceOdstavkyOSTReadOnly from './PlanovanePraceOdstavkyOSTReadOnly'
import { canEditData } from '../../../utils/datePermissions'

const PlanovanePraceOdstavkyOSTWrapper = ({ hlavny, opravnenia }) => {
  // Determine if user can edit based on permissions and date
  const canEdit = canEditData(hlavny, opravnenia)

  return canEdit ? <PlanovanePraceOdstavkyOST /> : <PlanovanePraceOdstavkyOSTReadOnly />
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(PlanovanePraceOdstavkyOSTWrapper)
