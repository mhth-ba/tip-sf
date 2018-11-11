import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const loadSCZTZapadRequest = (data) => ({
  type: TYPES.LOAD_SCZT_ZAPAD_REQUEST,
  data
})

export const fetchSCZTZapadVykonRequest = (data) => ({
  type: TYPES.FETCH_SCZT_ZAPAD_VYKON_REQUEST,
  data
})

export const fetchSCZTZapadZdrojeRequest = (data) => ({
  type: TYPES.FETCH_SCZT_ZAPAD_ZDROJE_REQUEST,
  data
})

export function* loadSCZTZapad(action) {

  let data = action.data

  if (data.kalendar === false) {
    data = {
      kalendar: false
    }
  }

  yield put(fetchSCZTZapadVykonRequest(data))
  yield put(fetchSCZTZapadZdrojeRequest(data))
}

export function* fetchSCZTZapadVykon(action) {

  const url = Routing.generate('sczt_zapad_vykon_get')
  const data = action.data

  try {
    // yield delay(2000)
    // console.log(data)

    const polozky = yield call(Api.post, url, data)

    yield put({type: TYPES.FETCH_SCZT_ZAPAD_VYKON_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SCZT_ZAPAD_VYKON_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchSCZTZapadZdroje(action) {

  const url = Routing.generate('sczt_zapad_zdroje_get')
  const data = action.data

  try {
    // yield delay(3000)
    // console.log(data)

    const polozky = yield call(Api.post, url, data)

    yield put({type: TYPES.FETCH_SCZT_ZAPAD_ZDROJE_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SCZT_ZAPAD_ZDROJE_ERROR, data: e})
    console.log(e)
  }
}