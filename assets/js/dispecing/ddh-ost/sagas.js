import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchOpravnenia,
  fetchZoznamOST,
  fetchZoznamDispecerov,
  fetchZoznamPoruchovka,
  fetchAuditlog,
  fetchDenneDispecerskeHlasenieOST,
  updateOSTHlavny,
  fetchPraceNaOSTPrevadzka,
  createPraceNaOSTPrevadzka,
  updatePraceNaOSTPrevadzka,
  deletePraceNaOSTPrevadzka
  // Prace na OST - dispečing a poruchová služba
  // Plánované práce a odstávky na OST
  // Poznámky
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_ZOZNAM_OST_REQUEST, fetchZoznamOST),
    takeLatest(TYPES.FETCH_ZOZNAM_DISPECEROV_REQUEST, fetchZoznamDispecerov),
    takeLatest(TYPES.FETCH_ZOZNAM_PORUCHOVKA_REQUEST, fetchZoznamPoruchovka),
    takeLatest(TYPES.FETCH_AUDIT_LOG_REQUEST, fetchAuditlog),

    takeLatest(TYPES.LOAD_OSTHLAVNY_REQUEST, fetchDenneDispecerskeHlasenieOST),
    takeLatest(TYPES.FETCH_PRACE_NA_OST_PREVADZKA_REQUEST, fetchPraceNaOSTPrevadzka),

    takeEvery(TYPES.UPDATE_OSTHLAVNY_REQUEST, updateOSTHlavny),

    takeEvery(TYPES.CREATE_PRACE_NA_OST_PREVADZKA_REQUEST, createPraceNaOSTPrevadzka),
    takeEvery(TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_REQUEST, updatePraceNaOSTPrevadzka),
    takeEvery(TYPES.DELETE_PRACE_NA_OST_PREVADZKA_REQUEST, deletePraceNaOSTPrevadzka)
  ])
}

export default mySaga
