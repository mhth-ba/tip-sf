import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const fetchAnalyzyRequest = () => ({
  type: TYPES.FETCH_ANALYZY_REQUEST
})

export function* fetchAnalyzy(action) {

  const url = Routing.generate('anm_analyzy_get')

  try {
    // yield delay(2000)

    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_ANALYZY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_ANALYZY_ERROR, data: e})
    console.error(e)
  }
}
