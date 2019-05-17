import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const loadSCZTOSTRequest = (data) => ({
  type: TYPES.LOAD_SCZT_OST_REQUEST,
  data
})

export const fetchSCZTOSTVychodRequest = (data) => ({
  type: TYPES.FETCH_SCZT_OST_VYCHOD_REQUEST,
  data
})

export const fetchSCZTOSTZapadRequest = (data) => ({
  type: TYPES.FETCH_SCZT_OST_ZAPAD_REQUEST,
  data
})

export function* loadSCZTOST(action) {

  let data = action.data

  if (data.kalendar === false) {
    data = {
      kalendar: false
    }
  }

  yield put(fetchSCZTOSTVychodRequest(data))
  yield put(fetchSCZTOSTZapadRequest(data))
}

export function* fetchSCZTOSTVychod(action) {

  const url = Routing.generate('sczt_ost_vychod_get')
  const data = action.data

  try {
    // yield delay(3000)
    // console.log(data)

    const polozky = yield call(Api.post, url, data)

    yield put({type: TYPES.FETCH_SCZT_OST_VYCHOD_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SCZT_OST_VYCHOD_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchSCZTOSTZapad(action) {

  const url = Routing.generate('sczt_ost_zapad_get')
  const data = action.data

  try {
    // yield delay(3000)
    // console.log(data)

    const polozky = yield call(Api.post, url, data)

    yield put({type: TYPES.FETCH_SCZT_OST_ZAPAD_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SCZT_OST_ZAPAD_ERROR, data: e})
    console.log(e)
  }
}