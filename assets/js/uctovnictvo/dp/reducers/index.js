import { combineReducers } from 'redux'

import userinterface from './userinterface'

import vyberpolozky from './vyberpolozky'
import aktivita from './aktivita'
import moznosti from './moznosti'

import upload from './import'
import hlavny from './hlavny'
import znakydane from './znakydane'
import vstup from './vstup'
import vystup from './vystup'
import sumarizacia from './sumarizacia'

import pridatdoklad from './pridatdoklad'

import {reducer as notifications} from 'react-notification-system-redux'

export default combineReducers({
  userinterface,

  vyberpolozky,
  aktivita,
  moznosti,

  upload,
  hlavny,
  znakydane,
  vstup,
  vystup,
  sumarizacia,

  pridatdoklad,

  notifications
})