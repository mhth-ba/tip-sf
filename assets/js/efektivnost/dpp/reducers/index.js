import { combineReducers } from 'redux'

import opravnenia from './opravnenia'
import vyberpolozky from './vyberpolozky'
import hlavny from './hlavny'
import konstanty from './konstanty'
import objednavka from './objednavka'
import dodavka from './dodavka'
import elektrina from './elektrina'

import {reducer as notifications} from 'react-notification-system-redux'

export default combineReducers({
  opravnenia,
  vyberpolozky,
  hlavny,
  konstanty,
  objednavka,
  dodavka,
  elektrina,

  notifications
})