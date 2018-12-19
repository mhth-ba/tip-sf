import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'

import {
  fetchVyberPolozky,
  loadMainEntry,
  fetchZnakyDane,
  fetchVstup,
  fetchVystup
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_VYBER_POLOZKY_REQUEST, fetchVyberPolozky),
    takeLatest(TYPES.LOAD_MAIN_ENTRY_REQUEST, loadMainEntry),
    takeLatest(TYPES.FETCH_ZNAKY_DANE_REQUEST, fetchZnakyDane),
    takeLatest(TYPES.FETCH_VSTUP_REQUEST, fetchVstup),
    takeLatest(TYPES.FETCH_VYSTUP_REQUEST, fetchVystup)
  ])
}

export default mySaga
