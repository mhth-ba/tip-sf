import { combineReducers } from 'redux'

import vychodost from './vychodost'
import zapadost from './zapadost'

export default combineReducers({
  vychodost,
  zapadost
})