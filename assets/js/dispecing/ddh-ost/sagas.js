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
  fetchAuditlogByDate,
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
  deletePlanovanePraceOdstavky,
  fetchPoznamky,
  createPoznamka,
  updatePoznamka,
  deletePoznamka
} from './actions'

function* mySaga() {
  yield all([
    // Upload suborov - prilohy
    takeEvery(TYPES.FETCH_PRILOHY_REQUEST, fetchPrilohy),
    takeLatest(TYPES.UPLOAD_PRILOHA_REQUEST, uploadPriloha),
    takeLatest(TYPES.DELETE_PRILOHA_REQUEST, deletePriloha),

    // Initial load
    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_ZOZNAM_OST_REQUEST, fetchZoznamOST),
    takeLatest(TYPES.FETCH_ZOZNAM_DISPECEROV_REQUEST, fetchZoznamDispecerov),
    takeLatest(TYPES.FETCH_ZOZNAM_PORUCHOVKA_REQUEST, fetchZoznamPoruchovka),
    takeLatest(TYPES.FETCH_AUDIT_LOG_REQUEST, fetchAuditlog),
    takeLatest(TYPES.FETCH_AUDIT_LOG_BY_DATE_REQUEST, fetchAuditlogByDate),

    takeLatest(TYPES.FETCH_PLANOVANE_PRACE_ODSTAVKY_REQUEST, fetchPlanovanePraceOdstavky),
    takeLatest(TYPES.FETCH_POZNAMKY_REQUEST, fetchPoznamky),

    // Hlavicka
    takeLatest(TYPES.LOAD_OSTHLAVNY_REQUEST, fetchDenneDispecerskeHlasenieOST),
    takeEvery(TYPES.UPDATE_OSTHLAVNY_REQUEST, updateOSTHlavny),

    // Prace na OST - prevadzka
    takeLatest(TYPES.FETCH_PRACE_NA_OST_PREVADZKA_REQUEST, fetchPraceNaOSTPrevadzka),
    takeEvery(TYPES.CREATE_PRACE_NA_OST_PREVADZKA_REQUEST, createPraceNaOSTPrevadzka),
    takeEvery(TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_REQUEST, updatePraceNaOSTPrevadzka),
    takeEvery(TYPES.DELETE_PRACE_NA_OST_PREVADZKA_REQUEST, deletePraceNaOSTPrevadzka),

    // Prace na OST - dispecing
    takeLatest(TYPES.FETCH_PRACE_NA_OST_DISPECING_REQUEST, fetchPraceNaOSTDispecing),
    takeEvery(TYPES.CREATE_PRACE_NA_OST_DISPECING_REQUEST, createPraceNaOSTDispecing),
    takeEvery(TYPES.UPDATE_PRACE_NA_OST_DISPECING_REQUEST, updatePraceNaOSTDispecing),
    takeEvery(TYPES.DELETE_PRACE_NA_OST_DISPECING_REQUEST, deletePraceNaOSTDispecing),

    // Planovane prace a odstavky
    takeEvery(TYPES.CREATE_PLANOVANE_PRACE_ODSTAVKY_REQUEST, createPlanovanePraceOdstavky),
    takeEvery(TYPES.UPDATE_PLANOVANE_PRACE_ODSTAVKY_REQUEST, updatePlanovanePraceOdstavky),
    takeEvery(TYPES.DELETE_PLANOVANE_PRACE_ODSTAVKY_REQUEST, deletePlanovanePraceOdstavky),

    // Poznamka (global)
    takeEvery(TYPES.CREATE_POZNAMKA_REQUEST, createPoznamka),
    takeEvery(TYPES.UPDATE_POZNAMKA_REQUEST, updatePoznamka),
    takeEvery(TYPES.DELETE_POZNAMKA_REQUEST, deletePoznamka)
  ])
}

export default mySaga
