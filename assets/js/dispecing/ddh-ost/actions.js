import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const fetchDenneDispecerskeHlasenieOSTRequest = (data) => ({
  type: TYPES.LOAD_MAIN_ENTRY_REQUEST,
  data
})



export function* fetchDenneDispecerskeHlasenieOST(action) {

  const url = Routing.generate('ddh_ost_hlavicka_get')
  const data = action.data

  /*try {
    const polozky = yield call(Api.post, url, data)

    yield put({type: TYPES.FETCH_DOPLNOVANIE_ODPUSTANIE_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_DOPLNOVANIE_ODPUSTANIE_ERROR, data: e})
    console.error(e)
  }*/
}
