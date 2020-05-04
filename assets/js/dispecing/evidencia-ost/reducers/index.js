import { combineReducers } from 'redux'

import nastroje from './nastroje'
import aktivita from './aktivita'

import opravnenia from './opravnenia'
import moznosti from './moznosti'

import hlavny from './hlavny'

import {reducer as notifications} from 'react-notification-system-redux'

export default combineReducers({
  nastroje,
  aktivita,

  opravnenia,
  moznosti,

  hlavny,

  notifications
})