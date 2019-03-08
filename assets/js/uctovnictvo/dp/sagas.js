import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'

import {
  fetchVyberPolozky,
  fetchAktivita,
  loadMainEntry,
  fetchMoznosti,
  fetchZnakyDane,
  fetchVstup,
  fetchVystup,
  fetchSumarizacia,

  createHlavny,
  createDoklad,

  updateHlavny,

  processUploadedFile
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_VYBER_POLOZKY_REQUEST, fetchVyberPolozky),
    takeLatest(TYPES.FETCH_AKTIVITA_REQUEST, fetchAktivita),
    takeLatest(TYPES.LOAD_MAIN_ENTRY_REQUEST, loadMainEntry),
    takeLatest(TYPES.FETCH_MOZNOSTI_REQUEST, fetchMoznosti),
    takeLatest(TYPES.FETCH_ZNAKY_DANE_REQUEST, fetchZnakyDane),
    takeLatest(TYPES.FETCH_VSTUP_REQUEST, fetchVstup),
    takeLatest(TYPES.FETCH_VYSTUP_REQUEST, fetchVystup),
    takeLatest(TYPES.FETCH_SUMARIZACIA_REQUEST, fetchSumarizacia),

    takeEvery(TYPES.UPDATE_HLAVNY_REQUEST, updateHlavny),

    takeLatest(TYPES.CREATE_HLAVNY_REQUEST, createHlavny),
    takeLatest(TYPES.CREATE_DOKLAD_REQUEST, createDoklad),

    takeLatest(TYPES.PROCESS_UPLOADED_FILE_REQUEST, processUploadedFile)
  ])
}

export default mySaga
