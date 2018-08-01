import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchSCZTVychodVykon,
  fetchSCZTVychodZdroje
} from '../../services/ActionsSCZT'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_SCZT_VYCHOD_VYKON_REQUEST, fetchSCZTVychodVykon),
    takeLatest(TYPES.FETCH_SCZT_VYCHOD_ZDROJE_REQUEST, fetchSCZTVychodZdroje)
  ])
}

export default mySaga
