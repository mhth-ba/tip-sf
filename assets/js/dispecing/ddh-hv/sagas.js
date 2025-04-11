import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import { fetchOpravnenia, fetchZoznamDispecerov, fetchDenneDispecerskeHlasenieHV, updateHVHlavny } from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_ZOZNAM_DISPECEROV_REQUEST, fetchZoznamDispecerov),
    takeLatest(TYPES.LOAD_HVHLAVNY_REQUEST, fetchDenneDispecerskeHlasenieHV),
    takeEvery(TYPES.UPDATE_HVHLAVNY_REQUEST, updateHVHlavny)
  ])
}

export default mySaga
