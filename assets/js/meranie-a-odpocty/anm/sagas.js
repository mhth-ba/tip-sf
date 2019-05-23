import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchAnalyzy
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_ANALYZY_REQUEST, fetchAnalyzy)
  ])
}

export default mySaga
