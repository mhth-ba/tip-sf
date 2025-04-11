import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchPrilohy,
  uploadPriloha,
  deletePriloha,
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
  deletePraceNaOSTPrevadzka,
  fetchPraceNaOSTDispecing,
  createPraceNaOSTDispecing,
  updatePraceNaOSTDispecing,
  deletePraceNaOSTDispecing,
  fetchPlanovanePraceOdstavky,
  createPlanovanePraceOdstavky,
  updatePlanovanePraceOdstavky,
  deletePlanovanePraceOdstavky
  // Poznámky
} from './actions'

function* mySaga() {
  yield all([
    takeEvery(TYPES.FETCH_PRILOHY_REQUEST, fetchPrilohy),
    takeLatest(TYPES.UPLOAD_PRILOHA_REQUEST, uploadPriloha),
    takeLatest(TYPES.DELETE_PRILOHA_REQUEST, deletePriloha),

    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_ZOZNAM_OST_REQUEST, fetchZoznamOST),
    takeLatest(TYPES.FETCH_ZOZNAM_DISPECEROV_REQUEST, fetchZoznamDispecerov),
    takeLatest(TYPES.FETCH_ZOZNAM_PORUCHOVKA_REQUEST, fetchZoznamPoruchovka),
    takeLatest(TYPES.FETCH_AUDIT_LOG_REQUEST, fetchAuditlog),

    takeLatest(TYPES.LOAD_OSTHLAVNY_REQUEST, fetchDenneDispecerskeHlasenieOST),
    takeLatest(TYPES.FETCH_PRACE_NA_OST_PREVADZKA_REQUEST, fetchPraceNaOSTPrevadzka),
    takeLatest(TYPES.FETCH_PRACE_NA_OST_DISPECING_REQUEST, fetchPraceNaOSTDispecing),
    takeLatest(TYPES.FETCH_PLANOVANE_PRACE_ODSTAVKY_REQUEST, fetchPlanovanePraceOdstavky),

    takeEvery(TYPES.UPDATE_OSTHLAVNY_REQUEST, updateOSTHlavny),

    takeEvery(TYPES.CREATE_PRACE_NA_OST_PREVADZKA_REQUEST, createPraceNaOSTPrevadzka),
    takeEvery(TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_REQUEST, updatePraceNaOSTPrevadzka),
    takeEvery(TYPES.DELETE_PRACE_NA_OST_PREVADZKA_REQUEST, deletePraceNaOSTPrevadzka),

    takeEvery(TYPES.CREATE_PRACE_NA_OST_DISPECING_REQUEST, createPraceNaOSTDispecing),
    takeEvery(TYPES.UPDATE_PRACE_NA_OST_DISPECING_REQUEST, updatePraceNaOSTDispecing),
    takeEvery(TYPES.DELETE_PRACE_NA_OST_DISPECING_REQUEST, deletePraceNaOSTDispecing),

    takeEvery(TYPES.CREATE_PLANOVANE_PRACE_ODSTAVKY_REQUEST, createPlanovanePraceOdstavky),
    takeEvery(TYPES.UPDATE_PLANOVANE_PRACE_ODSTAVKY_REQUEST, updatePlanovanePraceOdstavky),
    takeEvery(TYPES.DELETE_PLANOVANE_PRACE_ODSTAVKY_REQUEST, deletePlanovanePraceOdstavky)
  ])
}

export default mySaga
