import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  loadSCZTOST,
  fetchSCZTOSTVychod,
  fetchSCZTOSTZapad
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.LOAD_SCZT_OST_REQUEST, loadSCZTOST),
    takeLatest(TYPES.FETCH_SCZT_OST_VYCHOD_REQUEST, fetchSCZTOSTVychod),
    takeLatest(TYPES.FETCH_SCZT_OST_ZAPAD_REQUEST, fetchSCZTOSTZapad),
  ])
}

export default mySaga
