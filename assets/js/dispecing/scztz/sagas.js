import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  loadSCZTZapad,
  fetchSCZTZapadVykon,
  fetchSCZTZapadZdroje
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.LOAD_SCZT_ZAPAD_REQUEST, loadSCZTZapad),
    takeLatest(TYPES.FETCH_SCZT_ZAPAD_VYKON_REQUEST, fetchSCZTZapadVykon),
    takeLatest(TYPES.FETCH_SCZT_ZAPAD_ZDROJE_REQUEST, fetchSCZTZapadZdroje)
  ])
}

export default mySaga
