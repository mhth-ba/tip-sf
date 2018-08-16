import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'
import {fetchVychladeniePrehladRequest} from "../../dispecing/vychladenie-ost/actions/Actions";

export const fetchVyberPolozkyRequest = () => ({
  type: TYPES.FETCH_VYBER_POLOZKY_REQUEST
})

export const fetchReportMeracovRequest = (data) => ({
  type: TYPES.FETCH_REPORT_MERACOV_REQUEST,
  data
})

export function* fetchVyberPolozky(action) {
  const url = Routing.generate('rm_report_list')

  try {
    //yield call(delay, 1000)

    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_VYBER_POLOZKY_SUCCESS, data: polozky})

    // načíta prvú položku zo zoznamu období
    // const data = Object.values(polozky).reverse()[0]
    const data = Object.values(polozky)[0]
    yield put(fetchReportMeracovRequest(data))

  } catch (e) {
    yield put({type: TYPES.FETCH_VYBER_POLOZKY_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchReportMeracov(action) {

  const url = Routing.generate('rm_report_get')
  const data = action.data
  const id = data.id

  try {
    // yield delay(2000)

    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_REPORT_MERACOV_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_REPORT_MERACOV_ERROR, data: e})
    console.log(e)
  }
}
