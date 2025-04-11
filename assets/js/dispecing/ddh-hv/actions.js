import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const fetchOpravneniaRequest = () => ({
  type: TYPES.FETCH_OPRAVNENIA_REQUEST
})

export const fetchZoznamDispecerovRequest = () => ({
  type: TYPES.FETCH_ZOZNAM_DISPECEROV_REQUEST
})

export const fetchDenneDispecerskeHlasenieHVRequest = date => ({
  type: TYPES.LOAD_HVHLAVNY_REQUEST,
  date
})

export const updateHVHlavnyRequest = data => ({
  type: TYPES.UPDATE_HVHLAVNY_REQUEST,
  data
})

export const updateHVHlavnyFormField = (field, value) => ({
  type: TYPES.UPDATE_HVHLAVNY_FORMFIELD,
  field,
  value
})

export function* fetchOpravnenia(action) {
  const url = Routing.generate('ddh_hv_opravnenia')

  try {
    const opravnenia = yield call(Api.fetch, url)

    yield put({ type: TYPES.FETCH_OPRAVNENIA_SUCCESS, data: opravnenia })
  } catch (e) {
    yield put({ type: TYPES.FETCH_OPRAVNENIA_ERROR, data: e })
    console.log(e)
  }
}

export function* fetchZoznamDispecerov(action) {
  const url = Routing.generate('ddh_hv_dispeceri_list')
  try {
    const data = yield call(Api.fetch, url)
    yield put({ type: TYPES.FETCH_ZOZNAM_DISPECEROV_SUCCESS, data })
  } catch (e) {
    yield put({ type: TYPES.FETCH_ZOZNAM_DISPECEROV_ERROR, data: e })
    console.error(e)
  }
}

export function* fetchDenneDispecerskeHlasenieHV(action) {
  const url = Routing.generate('ddh_hv_hlavicka_get', { date: action.date })

  try {
    const polozky = yield call(Api.fetch, url)

    yield put({ type: TYPES.LOAD_HVHLAVNY_SUCCESS, data: polozky })
  } catch (e) {
    yield put({ type: TYPES.LOAD_HVHLAVNY_ERROR, data: e })
    console.error(e)
  }
}

export function* updateHVHlavny(action) {
  const url = Routing.generate('ddh_hv_hlavicka_update', { id: action.data.id })
  const data = action.data

  try {
    const update = yield call(Api.patch, url, data)

    yield put({ type: TYPES.UPDATE_HVHLAVNY_SUCCESS, data: update })

    yield put(
      Notifications.success({
        message: 'Úspešne uložené',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({ type: TYPES.UPDATE_HVHLAVNY_ERROR, data: e })
    console.error(e)
  }
}
