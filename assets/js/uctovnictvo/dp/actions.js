import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'

import Routing from '../../Components/Routing'

export const fetchVyberPolozkyRequest = () => ({
  type: TYPES.FETCH_VYBER_POLOZKY_REQUEST
})

export const loadMainEntryRequest = (data) => ({
  type: TYPES.LOAD_MAIN_ENTRY_REQUEST,
  data
})

export const fetchZnakyDaneRequest = () => ({
  type: TYPES.FETCH_ZNAKY_DANE_REQUEST
})

export const fetchVstupRequest = (id) => ({
  type: TYPES.FETCH_VSTUP_REQUEST,
  id
})

export const fetchVystupRequest = (id) => ({
  type: TYPES.FETCH_VYSTUP_REQUEST,
  id
})

export function* fetchVyberPolozky() {
  const url = Routing.generate('dp_hlavny_list')

  try {
    // yield call(delay, 5000)
    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_VYBER_POLOZKY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_VYBER_POLOZKY_ERROR, data: e})
    console.error(e)
  }
}

export function* loadMainEntry(action) {
  const url = Routing.generate('dp_hlavny_get')
  const data = action.data

  const {
    id
  } = data

  try {
    const udaje = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.LOAD_MAIN_ENTRY_SUCCESS, data: udaje})

    yield put(fetchZnakyDaneRequest())
    yield put(fetchVstupRequest(id))
    yield put(fetchVystupRequest(id))

  } catch (e) {
    yield put({type: TYPES.LOAD_MAIN_ENTRY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchZnakyDane() {
  const url = Routing.generate('dp_znaky-dane_get')

  try {
    const udaje = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_ZNAKY_DANE_SUCCESS, data: udaje})

  } catch (e) {
    yield put({type: TYPES.FETCH_ZNAKY_DANE_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchVstup(action) {
  const url = Routing.generate('dp_vstup_get')
  const id = action.id

  try {
    const udaje = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_VSTUP_SUCCESS, data: udaje})

  } catch (e) {
    yield put({type: TYPES.FETCH_VSTUP_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchVystup(action) {
  const url = Routing.generate('dp_vystup_get')
  const id = action.id

  try {
    const udaje = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_VYSTUP_SUCCESS, data: udaje})

  } catch (e) {
    yield put({type: TYPES.FETCH_VYSTUP_ERROR, data: e})
    console.error(e)
  }
}
