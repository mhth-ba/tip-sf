import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {

  fetchDoplnovanieOdpustanie

} from './actions'

function* mySaga() {
  yield all([

    takeLatest(TYPES.FETCH_DOPLNOVANIE_ODPUSTANIE_REQUEST, fetchDoplnovanieOdpustanie),

  ])
}

export default mySaga
