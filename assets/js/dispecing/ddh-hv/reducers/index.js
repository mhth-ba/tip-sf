import { combineReducers } from 'redux'

import opravnenia from './opravnenia'
import dispeceri from './dispeceri'
import auditlog from './auditlog'
import hlavny from './hlavny'
import zmenaHV from './zmenaHV'
import zmenaZdroje from './zmenaZdroje'
import stavZariadeni from './stavZariadeni'

import { reducer as notifications } from 'react-notification-system-redux'

export default combineReducers({
  opravnenia,
  dispeceri,
  auditlog,
  hlavny,
  zmenaHV,
  zmenaZdroje,
  stavZariadeni,

  notifications
})
