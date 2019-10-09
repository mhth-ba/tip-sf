import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchOpravnenia,
  fetchVyberPolozky,
  loadMainEntry,
  fetchKonstanty,
  fetchObjednavka,
  fetchDodavka,
  fetchElektrina,

  processUploadedFile,

  updateKonstanty,
  updateObjednavka,
  updateDodavka,
  updateElektrina
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_VYBER_POLOZKY_REQUEST, fetchVyberPolozky),
    takeLatest(TYPES.LOAD_MAIN_ENTRY_REQUEST, loadMainEntry),
    takeLatest(TYPES.FETCH_KONSTANTY_REQUEST, fetchKonstanty),
    takeLatest(TYPES.FETCH_OBJEDNAVKA_REQUEST, fetchObjednavka),
    takeLatest(TYPES.FETCH_DODAVKA_REQUEST, fetchDodavka),
    takeLatest(TYPES.FETCH_ELEKTRINA_REQUEST, fetchElektrina),

    takeLatest(TYPES.PROCESS_UPLOADED_FILE_REQUEST, processUploadedFile),

    takeEvery(TYPES.UPDATE_KONSTANTY_REQUEST, updateKonstanty),
    takeEvery(TYPES.UPDATE_OBJEDNAVKA_REQUEST, updateObjednavka),
    takeEvery(TYPES.UPDATE_DODAVKA_REQUEST, updateDodavka),
    takeEvery(TYPES.UPDATE_ELEKTRINA_REQUEST, updateElektrina)
  ])
}

export default mySaga