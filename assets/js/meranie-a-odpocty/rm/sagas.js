import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchSprava,
  fetchReportMeracov
} from '../../services/ActionsReportMeracov'

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_SPRAVA_REQUEST, fetchSprava),
    takeLatest(TYPES.FETCH_REPORT_MERACOV_REQUEST, fetchReportMeracov)
  ])
}

export default mySaga
