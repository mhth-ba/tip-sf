import { combineReducers } from 'redux'

import opravnenia from './opravnenia'
import ost from './ost'
import dispeceri from './dispeceri'
import poruchovka from './poruchovka'
import hlavny from './hlavny'
import pracenaostprevadzka from './pracenaostprevadzka'

import { reducer as notifications } from 'react-notification-system-redux'

export default combineReducers({
  opravnenia,
  ost,
  dispeceri,
  poruchovka,
  hlavny,
  pracenaostprevadzka,

  notifications
})
