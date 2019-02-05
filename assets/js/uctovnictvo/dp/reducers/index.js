import { combineReducers } from 'redux'

import userinterface from './userinterface'

import vyberpolozky from './vyberpolozky'
import moznosti from './moznosti'

import upload from './import'
import hlavny from './hlavny'
import znakydane from './znakydane'
import vstup from './vstup'
import vystup from './vystup'
import sumarizacia from './sumarizacia'

export default combineReducers({
  userinterface,

  vyberpolozky,
  moznosti,

  upload,
  hlavny,
  znakydane,
  vstup,
  vystup,
  sumarizacia
})