import { combineReducers } from 'redux'

import prilohy from './prilohy'
import opravnenia from './opravnenia'
import ost from './ost'
import dispeceri from './dispeceri'
import poruchovka from './poruchovka'
import auditlog from './auditlog'
import hlavny from './hlavny'
import pracenaostprevadzka from './pracenaostprevadzka'

import { reducer as notifications } from 'react-notification-system-redux'

export default combineReducers({
  prilohy,
  opravnenia,
  ost,
  dispeceri,
  poruchovka,
  auditlog,
  hlavny,
  pracenaostprevadzka,

  notifications
})
