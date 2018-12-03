import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../services/ActionTypes'
import Api from '../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../Components/Routing'

export const fetchProjektyRequest = () => ({
  type: TYPES.FETCH_PROJEKTY_REQUEST
})

export function* fetchProjekty() {
  const url = Routing.generate('projekty_get')

  try {
    // yield delay(2000)
    // console.log(data)

    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_PROJEKTY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_PROJEKTY_ERROR, data: e})
    console.error(e)
  }
}