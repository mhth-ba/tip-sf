import { combineReducers } from 'redux'

import opravnenia from './opravnenia'
import dispeceri from './dispeceri'
import hlavny from './hlavny'

import { reducer as notifications } from 'react-notification-system-redux'

export default combineReducers({
  opravnenia,
  dispeceri,
  hlavny,

  notifications
})
