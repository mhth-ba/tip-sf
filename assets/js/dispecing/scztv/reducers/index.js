import { combineReducers } from 'redux'

import vychodvykon from './vychodvykon'
import vychodzdroje from './vychodzdroje'
import vychodzariadenia from './vychodzariadenia'

export default combineReducers({
  vychodvykon,
  vychodzdroje,
  vychodzariadenia
})