import { combineReducers } from 'redux'

import hlavny from './hlavny'
import pracenaostprevadzka from './pracenaostprevadzka'

import { reducer as notifications } from 'react-notification-system-redux'

export default combineReducers({
  hlavny,
  pracenaostprevadzka,

  notifications
})
