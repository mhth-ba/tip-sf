import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../services/ActionTypes'
import {
  fetchProjekty,
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_PROJEKTY_REQUEST, fetchProjekty)
  ])
}

export default mySaga
