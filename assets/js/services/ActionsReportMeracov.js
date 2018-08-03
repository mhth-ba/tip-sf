import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from './ActionTypes'
import Api from '../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../Components/Routing'

export const fetchSpravaRequest = () => ({
  type: TYPES.FETCH_SPRAVA_REQUEST
})

export const fetchReportMeracovRequest = () => ({
  type: TYPES.FETCH_REPORT_MERACOV_REQUEST
})

export function* fetchSprava(action) {
  const url = Routing.generate('report_meracov_list')

  try {
    //yield call(delay, 1000)
    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_SPRAVA_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SPRAVA_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchReportMeracov(action) {

  const url = Routing.generate('report_meracov_get')

  try {
    // yield delay(2000)

    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_REPORT_MERACOV_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_REPORT_MERACOV_ERROR, data: e})
    console.log(e)
  }
}
