import React from 'react'
import { connect } from 'react-redux'
import OdstavkyOSTNad24Hod from './OdstavkyOSTNad24Hod'
import OdstavkyOSTNad24HodReadOnly from './OdstavkyOSTNad24HodReadOnly'
import { canEditData } from '../../../utils/datePermissions'

const OdstavkyOSTNad24HodWrapper = ({ hlavny, opravnenia }) => {
  // Determine if user can edit based on permissions and date
  const canEdit = canEditData(hlavny, opravnenia)

  return canEdit ? <OdstavkyOSTNad24Hod /> : <OdstavkyOSTNad24HodReadOnly />
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(OdstavkyOSTNad24HodWrapper)
