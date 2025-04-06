import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {

  fetchDenneDispecerskeHlasenieHV,

} from './actions'

function* mySaga() {
  yield all([

    takeLatest(TYPES.LOAD_MAIN_ENTRY_REQUEST, fetchDenneDispecerskeHlasenieHV),

  ])
}

export default mySaga
