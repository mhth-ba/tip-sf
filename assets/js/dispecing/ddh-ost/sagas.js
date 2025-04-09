import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  // Hlavička
  fetchDenneDispecerskeHlasenieOST,
  updateOSTHlavny,
  // Prace na OST - prevádzka
  fetchPraceNaOSTPrevadzka,
  createPraceNaOSTPrevadzka,
  updatePraceNaOSTPrevadzka
  // Prace na OST - dispečing a poruchová služba
  // Plánované práce a odstávky na OST
  // Poznámky
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.LOAD_OSTHLAVNY_REQUEST, fetchDenneDispecerskeHlasenieOST),
    takeLatest(TYPES.FETCH_PRACE_NA_OST_PREVADZKA_REQUEST, fetchPraceNaOSTPrevadzka),

    takeEvery(TYPES.CREATE_PRACE_NA_OST_PREVADZKA_REQUEST, createPraceNaOSTPrevadzka),
    takeEvery(TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_REQUEST, updatePraceNaOSTPrevadzka),
    takeEvery(TYPES.UPDATE_OSTHLAVNY_REQUEST, updateOSTHlavny)
  ])
}

export default mySaga
