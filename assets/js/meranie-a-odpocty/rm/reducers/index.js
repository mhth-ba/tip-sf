import { combineReducers } from 'redux'

import vyberpolozky from './vyberpolozky'
import report from './report'

export default combineReducers({
  vyberpolozky,
  report
})