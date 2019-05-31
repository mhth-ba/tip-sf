import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchOpravnenia,
  fetchAnalyzy,
  fetchVylucene,
  fetchPrehlad,

  createVylucene,

  deleteVylucene
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_ANALYZY_REQUEST, fetchAnalyzy),
    takeLatest(TYPES.FETCH_VYLUCENE_REQUEST, fetchVylucene),
    takeLatest(TYPES.FETCH_PREHLAD_REQUEST, fetchPrehlad),

    takeEvery(TYPES.CREATE_VYLUCENE_REQUEST, createVylucene),

    takeEvery(TYPES.DELETE_VYLUCENE_REQUEST, deleteVylucene)
  ])
}

export default mySaga
