import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const fetchOpravneniaRequest = () => ({
  type: TYPES.FETCH_OPRAVNENIA_REQUEST
})

export const fetchZoznamOSTRequest = () => ({
  type: TYPES.FETCH_ZOZNAM_OST_REQUEST
})

export const fetchZoznamDispecerovRequest = () => ({
  type: TYPES.FETCH_ZOZNAM_DISPECEROV_REQUEST
})

export const fetchZoznamPoruchovkaRequest = () => ({
  type: TYPES.FETCH_ZOZNAM_PORUCHOVKA_REQUEST
})

export const fetchAuditlogRequest = id => ({
  type: TYPES.FETCH_AUDIT_LOG_REQUEST,
  id
})

export const fetchDenneDispecerskeHlasenieOSTRequest = date => ({
  type: TYPES.LOAD_OSTHLAVNY_REQUEST,
  date
})

export const updateOSTHlavnyRequest = data => ({
  type: TYPES.UPDATE_OSTHLAVNY_REQUEST,
  data
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

export const updatePraceNaOSTPrevadzkaRequest = (data, rollbackCallback) => ({
  type: TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_REQUEST,
  data,
  rollbackCallback
})

export const deletePraceNaOSTPrevadzkaRequest = id => ({
  type: TYPES.DELETE_PRACE_NA_OST_PREVADZKA_REQUEST,
  id
})

export function* fetchOpravnenia(action) {
  const url = Routing.generate('ddh_ost_opravnenia')

  try {
    const opravnenia = yield call(Api.fetch, url)

    yield put({ type: TYPES.FETCH_OPRAVNENIA_SUCCESS, data: opravnenia })
  } catch (e) {
    yield put({ type: TYPES.FETCH_OPRAVNENIA_ERROR, data: e })
    console.log(e)
  }
}

export function* fetchZoznamOST(action) {
  const url = Routing.generate('ddh_ost_zoznam_ost_list')
  try {
    const data = yield call(Api.fetch, url)
    yield put({ type: TYPES.FETCH_ZOZNAM_OST_SUCCESS, data })
  } catch (e) {
    yield put({ type: TYPES.FETCH_ZOZNAM_OST_ERROR, data: e })
    console.error(e)
  }
}

export function* fetchZoznamDispecerov(action) {
  const url = Routing.generate('ddh_ost_dispeceri_list')
  try {
    const data = yield call(Api.fetch, url)
    yield put({ type: TYPES.FETCH_ZOZNAM_DISPECEROV_SUCCESS, data })
  } catch (e) {
    yield put({ type: TYPES.FETCH_ZOZNAM_DISPECEROV_ERROR, data: e })
    console.error(e)
  }
}

export function* fetchZoznamPoruchovka(action) {
  const url = Routing.generate('ddh_ost_poruchovka_list')
  try {
    const data = yield call(Api.fetch, url)
    yield put({ type: TYPES.FETCH_ZOZNAM_PORUCHOVKA_SUCCESS, data })
  } catch (e) {
    yield put({ type: TYPES.FETCH_ZOZNAM_PORUCHOVKA_ERROR, data: e })
    console.error(e)
  }
}

export function* fetchAuditlog(action) {
  let url
  const id = action.id

  if (id === undefined) {
    // ID hlavného záznamu nie je definované, načítať aktivitu vo všetkých záznamoch
    url = Routing.generate('ddh_ost_aktivita_get')
  } else {
    // ID hlavného záznmu je definované, načítať aktivitu iba v hlavnom zázname
    url = Routing.generate('ddh_ost_aktivita_hlavny_get')
    url = `${url}/${id}`
  }

  try {
    const udaje = yield call(Api.fetch, url)

    yield put({ type: TYPES.FETCH_AUDIT_LOG_SUCCESS, data: udaje })
  } catch (e) {
    yield put({ type: TYPES.FETCH_AUDIT_LOG_ERROR, data: e })
    console.error(e)
  }
}

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

    // If a rollback callback was provided, call it to restore the old value in the UI
    if (action.rollbackCallback && typeof action.rollbackCallback === 'function') {
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

export function* deletePraceNaOSTPrevadzka(action) {
  const url = Routing.generate('ddh_ost_prace_na_ost_prevadzka_delete', { id: action.id })
  try {
    yield call(Api.delete, url)
    yield put({ type: TYPES.DELETE_PRACE_NA_OST_PREVADZKA_SUCCESS, id: action.id })
    yield put(
      Notifications.success({
        message: 'Záznam bol úspešne vymazaný',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({ type: TYPES.DELETE_PRACE_NA_OST_PREVADZKA_ERROR, data: e })
    yield put(
      Notifications.error({
        message: 'Chyba pri mazaní záznamu',
        autoDismiss: 5
      })
    )
    console.error(e)
  }
}
