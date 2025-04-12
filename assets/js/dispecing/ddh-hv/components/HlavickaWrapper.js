import React from 'react'
import { connect } from 'react-redux'
import Hlavicka from './Hlavicka'
import HlavickaReadOnly from './HlavickaReadOnly'
import { canEditData } from '../../../utils/datePermissions'

const HlavickaWrapper = ({ hlavny, opravnenia }) => {
  // For the HV module, we need to adapt the hlavny object to include datum
  // from ost_data since the canEditData function expects datum at the top level
  const adaptedHlavny = hlavny && {
    ...hlavny,
    // If datum is not directly available, use datum from ost_data
    datum: hlavny.datum || (hlavny.ost_data && hlavny.ost_data.datum)
  }

  // Determine if user can edit based on permissions and date
  const canEdit = canEditData(adaptedHlavny, opravnenia)

  return canEdit ? <Hlavicka /> : <HlavickaReadOnly />
}

const mapStateToProps = state => ({
  hlavny: state.hlavny,
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(HlavickaWrapper)
