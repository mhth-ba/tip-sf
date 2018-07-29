import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from './ActionTypes'
import Api from '../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../Components/Routing'

export const fetchSCZTVychodVykonRequest = () => ({
  type: TYPES.FETCH_SCZT_VYCHOD_VYKON_REQUEST
})

export function* fetchSCZTVychodVykon(action) {

  const url = Routing.generate('sczt_vychod_vykon_get')

  try {
    // yield delay(2000)

    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_SCZT_VYCHOD_VYKON_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SCZT_VYCHOD_VYKON_ERROR, data: e})
    console.log(e)
  }
}