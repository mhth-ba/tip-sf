import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const setRok = (rok) => ({
  type: TYPES.SET_ROK,
  rok
})

export const setMesiac = (mesiac) => ({
  type: TYPES.SET_MESIAC,
  mesiac
})

export const fetchDoplnovanieOdpustanieRequest = (data) => ({
  type: TYPES.FETCH_DOPLNOVANIE_ODPUSTANIE_REQUEST,
  data
})



export function* fetchDoplnovanieOdpustanie(action) {

  const url = Routing.generate('ds_dop_odp_get')
  const data = action.data

  try {
    const polozky = yield call(Api.post, url, data)

    yield put({type: TYPES.FETCH_DOPLNOVANIE_ODPUSTANIE_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_DOPLNOVANIE_ODPUSTANIE_ERROR, data: e})
    console.error(e)
  }
}
