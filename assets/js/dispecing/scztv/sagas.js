import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  loadSCZTVychod,
  fetchSCZTVychodVykon,
  fetchSCZTVychodZdroje
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.LOAD_SCZT_VYCHOD_REQUEST, loadSCZTVychod),
    takeLatest(TYPES.FETCH_SCZT_VYCHOD_VYKON_REQUEST, fetchSCZTVychodVykon),
    takeLatest(TYPES.FETCH_SCZT_VYCHOD_ZDROJE_REQUEST, fetchSCZTVychodZdroje)
  ])
}

export default mySaga
