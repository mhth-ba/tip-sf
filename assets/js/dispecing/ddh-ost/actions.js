import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const fetchDenneDispecerskeHlasenieOSTRequest = date => ({
  type: TYPES.LOAD_OSTHLAVNY_REQUEST,
  date
})

export const updateOSTHlavnyRequest = (data, rollbackCallback) => ({
  type: TYPES.UPDATE_OSTHLAVNY_REQUEST,
  data,
  rollbackCallback
})

export const updateOSTHlavnyFormField = (field, value) => ({
  type: TYPES.UPDATE_OSTHLAVNY_FORMFIELD,
  field,
  value
})

export const fetchPraceNaOSTPrevadzkaRequest = hlavnyId => ({
  type: TYPES.FETCH_PRACE_NA_OST_PREVADZKA_REQUEST,
  hlavnyId
})

export const createPraceNaOSTPrevadzkaRequest = hlavnyId => ({
  type: TYPES.CREATE_PRACE_NA_OST_PREVADZKA_REQUEST,
  hlavnyId
})

export const updatePraceNaOSTPrevadzkaRequest = data => ({
  type: TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_REQUEST,
  data
})

export function* fetchDenneDispecerskeHlasenieOST(action) {
  const url = Routing.generate('ddh_ost_hlavicka_get', { date: action.date })

  try {
    const polozky = yield call(Api.fetch, url)

    yield put({ type: TYPES.LOAD_OSTHLAVNY_SUCCESS, data: polozky })
  } catch (e) {
    yield put({ type: TYPES.LOAD_OSTHLAVNY_ERROR, data: e })
    console.error(e)
  }
}

export function* updateOSTHlavny(action) {
  const url = Routing.generate('ddh_ost_hlavicka_update', { id: action.data.id })
  const data = action.data

  try {
    const update = yield call(Api.patch, url, data)

    yield put({ type: TYPES.UPDATE_OSTHLAVNY_SUCCESS, data: update })

    yield put(
      Notifications.success({
        message: 'Úspešne uložené',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({ type: TYPES.UPDATE_OSTHLAVNY_ERROR, data: e })

    if (action.rollbackCallback) {
      action.rollbackCallback()
    }

    yield put(
      Notifications.error({
        message: 'Chyba pri ukladaní',
        autoDismiss: 5
      })
    )

    console.error(e)
  }
}

export function* fetchPraceNaOSTPrevadzka(action) {
  const url = Routing.generate('ddh_ost_prace_na_ost_prevadzka_list') + '?hlavny_id=' + action.hlavnyId
  try {
    const data = yield call(Api.fetch, url)
    yield put({ type: TYPES.FETCH_PRACE_NA_OST_PREVADZKA_SUCCESS, data })
  } catch (e) {
    yield put({ type: TYPES.FETCH_PRACE_NA_OST_PREVADZKA_ERROR, data: e })
    console.error(e)
  }
}

export function* createPraceNaOSTPrevadzka(action) {
  const url = Routing.generate('ddh_ost_prace_na_ost_prevadzka_create')
  try {
    const data = yield call(Api.post, url, { hlavny_id: action.hlavnyId })
    yield put({ type: TYPES.CREATE_PRACE_NA_OST_PREVADZKA_SUCCESS, data })
    yield put(
      Notifications.success({
        message: 'Nový záznam "Práce na OST - prevádzka" bol vytvorený',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({ type: TYPES.CREATE_PRACE_NA_OST_PREVADZKA_ERROR, data: e })
    console.error(e)
  }
}

export function* updatePraceNaOSTPrevadzka(action) {
  const url = Routing.generate('ddh_ost_prace_na_ost_prevadzka_update', { id: action.data.id })
  try {
    const data = yield call(Api.patch, url, action.data)
    yield put({ type: TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_SUCCESS, data })
    yield put(
      Notifications.success({
        message: 'Úspešne uložené',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({ type: TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_ERROR, data: e })
    yield put(
      Notifications.error({
        message: 'Chyba pri ukladaní',
        autoDismiss: 5
      })
    )
    console.error(e)
  }
}
