import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchOpravnenia,
  fetchZoznamDispecerov,
  fetchAuditlog,
  fetchAuditlogByDate,
  fetchAllZmenyNaZariadeniach,
  fetchDenneDispecerskeHlasenieHV,
  updateHVHlavny,
  fetchZmenaNaHV,
  createZmenaNaHV,
  updateZmenaNaHV,
  deleteZmenaNaHV,
  fetchZmenaNaZdroj,
  createZmenaNaZdroj,
  updateZmenaNaZdroj,
  deleteZmenaNaZdroj,
  fetchStavZariadeni,
  fetchFilteredData
} from './actions'

function* mySaga() {
  yield all([
    // Initial load
    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_ZOZNAM_DISPECEROV_REQUEST, fetchZoznamDispecerov),
    takeLatest(TYPES.FETCH_AUDIT_LOG_REQUEST, fetchAuditlog),
    takeLatest(TYPES.FETCH_AUDIT_LOG_BY_DATE_REQUEST, fetchAuditlogByDate),

    // Hlavicka
    takeLatest(TYPES.LOAD_HVHLAVNY_REQUEST, fetchDenneDispecerskeHlasenieHV),
    takeEvery(TYPES.UPDATE_HVHLAVNY_REQUEST, updateHVHlavny),

    // Zmeny na HV
    takeLatest(TYPES.FETCH_ZMENA_NA_HV_REQUEST, fetchZmenaNaHV),
    takeEvery(TYPES.CREATE_ZMENA_NA_HV_REQUEST, createZmenaNaHV),
    takeEvery(TYPES.UPDATE_ZMENA_NA_HV_REQUEST, updateZmenaNaHV),
    takeEvery(TYPES.DELETE_ZMENA_NA_HV_REQUEST, deleteZmenaNaHV),

    // Zmeny na zdrojoch
    takeLatest(TYPES.FETCH_ZMENA_NA_ZDROJ_REQUEST, fetchZmenaNaZdroj),
    takeEvery(TYPES.CREATE_ZMENA_NA_ZDROJ_REQUEST, createZmenaNaZdroj),
    takeEvery(TYPES.UPDATE_ZMENA_NA_ZDROJ_REQUEST, updateZmenaNaZdroj),
    takeEvery(TYPES.DELETE_ZMENA_NA_ZDROJ_REQUEST, deleteZmenaNaZdroj),

    // Stav zariadeni
    takeLatest(TYPES.FETCH_STAV_ZARIADENI_REQUEST, fetchStavZariadeni),

    // Chronologicky prehlad zmien
    takeLatest(TYPES.FETCH_VSETKY_ZMENY_NA_ZARIADENIACH_REQUEST, fetchAllZmenyNaZariadeniach),

    // Filter view
    takeLatest(TYPES.FETCH_FILTERED_DATA_REQUEST, fetchFilteredData)
  ])
}

export default mySaga
