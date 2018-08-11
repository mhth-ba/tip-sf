import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const loadSCZTVychodRequest = (data) => ({
  type: TYPES.LOAD_SCZT_VYCHOD_REQUEST,
  data
})

export const fetchSCZTVychodVykonRequest = (data) => ({
  type: TYPES.FETCH_SCZT_VYCHOD_VYKON_REQUEST,
  data
})

export const fetchSCZTVychodZdrojeRequest = (data) => ({
  type: TYPES.FETCH_SCZT_VYCHOD_ZDROJE_REQUEST,
  data
})

export function* loadSCZTVychod(action) {

  let data = action.data

  if (data.kalendar === false) {
    data = {
      kalendar: false
    }
  }

  yield put(fetchSCZTVychodVykonRequest(data))
  yield put(fetchSCZTVychodZdrojeRequest(data))
}

export function* fetchSCZTVychodVykon(action) {

  const url = Routing.generate('sczt_vychod_vykon_get')
  const data = action.data

  try {
    // yield delay(2000)
    // console.log(data)

    const polozky = yield call(Api.post, url, data)

    yield put({type: TYPES.FETCH_SCZT_VYCHOD_VYKON_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SCZT_VYCHOD_VYKON_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchSCZTVychodZdroje(action) {

  const url = Routing.generate('sczt_vychod_zdroje_get')
  const data = action.data

  try {
    // yield delay(3000)
    // console.log(data)

    const polozky = yield call(Api.post, url, data)

    yield put({type: TYPES.FETCH_SCZT_VYCHOD_ZDROJE_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SCZT_VYCHOD_ZDROJE_ERROR, data: e})
    console.log(e)
  }
}