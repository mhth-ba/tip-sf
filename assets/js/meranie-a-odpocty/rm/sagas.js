import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchVyberPolozky,
  fetchReportMeracov
} from './actions'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_VYBER_POLOZKY_REQUEST, fetchVyberPolozky),
    takeLatest(TYPES.FETCH_REPORT_MERACOV_REQUEST, fetchReportMeracov)
  ])
}

export default mySaga
