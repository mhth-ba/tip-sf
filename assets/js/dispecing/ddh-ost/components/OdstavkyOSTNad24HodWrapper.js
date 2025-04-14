import React from 'react'
import { connect } from 'react-redux'
import OdstavkyOSTNad24Hod from './OdstavkyOSTNad24Hod'
import OdstavkyOSTNad24HodReadOnly from './OdstavkyOSTNad24HodReadOnly'

/**
 * Wrapper component that determines whether to show the editable or read-only version
 * of the OdstavkyOSTNad24Hod component based on user permissions
 */
const OdstavkyOSTNad24HodWrapper = ({ opravnenia }) => {
  // Check if user has editor permissions
  // Unlike PraceNaOSTDispecingWrapper, this component does not have date limitations
  // It only depends on the user's permissions
  const canEdit = opravnenia && opravnenia.editor

  // Render the appropriate component based on permissions
  return canEdit ? <OdstavkyOSTNad24Hod /> : <OdstavkyOSTNad24HodReadOnly />
}

const mapStateToProps = state => ({
  opravnenia: state.opravnenia
})

export default connect(mapStateToProps)(OdstavkyOSTNad24HodWrapper)
