import { combineReducers } from 'redux'

import vyberpolozky from './vyberpolozky'
import hlavny from './hlavny'
import znakydane from './znakydane'
import vstup from './vstup'
import vystup from './vystup'
import sumarizacia from './sumarizacia'

export default combineReducers({
  vyberpolozky,
  hlavny,
  znakydane,
  vstup,
  vystup,
  sumarizacia
})