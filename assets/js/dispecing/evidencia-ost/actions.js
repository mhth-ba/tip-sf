import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const toggleHighlightEditable = (toggle) => ({
  type: TYPES.TOGGLE_HIGHLIGHT_EDITABLE,
  toggle
})

export const toggleHistoria = (toggle) => ({
  type: TYPES.TOGGLE_HISTORIA,
  toggle
})

export const fetchOpravneniaRequest = () => ({
  type: TYPES.FETCH_OPRAVNENIA_REQUEST
})

export const fetchMoznostiRequest = () => ({
  type: TYPES.FETCH_MOZNOSTI_REQUEST
})

export const fetchAktivitaRequest = () => ({
  type: TYPES.FETCH_AKTIVITA_REQUEST
})

export const fetchHlavneZaznamyEvidencieRequest = () => ({
  type: TYPES.FETCH_HLAVNE_ZAZNAMY_EVIDENCIE_REQUEST
})

export const createHlavnyZaznamEvidencieRequest = () => ({
  type: TYPES.CREATE_HLAVNY_ZAZNAM_EVIDENCIE_REQUEST
})

export const updateHlavnyZaznamEvidencieRequest = (data) => ({
  type: TYPES.UPDATE_HLAVNY_ZAZNAM_EVIDENCIE_REQUEST,
  data
})



export function* fetchOpravnenia() {
  const url = Routing.generate('deo_opravnenia')

  try {
    const opravnenia = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_OPRAVNENIA_SUCCESS, data: opravnenia})

  } catch (e) {
    yield put({type: TYPES.FETCH_OPRAVNENIA_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchMoznosti() {
  const url = Routing.generate('deo_moznosti')

  try {
    const moznosti = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_MOZNOSTI_SUCCESS, data: moznosti})

  } catch (e) {
    yield put({type: TYPES.FETCH_MOZNOSTI_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchAktivita() {
  const url = Routing.generate('deo_aktivita')

  try {
    const aktivita = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_AKTIVITA_SUCCESS, data: aktivita})

  } catch (e) {
    yield put({type: TYPES.FETCH_AKTIVITA_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchHlavneZaznamyEvidencie(action) {
  const url = Routing.generate('deo_hlavny_get')
  const id = action.id

  try {
    //const polozky = yield call(Api.fetch, `${url}/${id}`)
    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_HLAVNE_ZAZNAMY_EVIDENCIE_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_HLAVNE_ZAZNAMY_EVIDENCIE_ERROR, data: e})
    console.error(e)
  }
}

export function* createHlavnyZaznamEvidencie(action) {
  const url = Routing.generate('deo_hlavny_post')
  const data = action.data

  try {
    const hlavny = yield call(Api.post, url, data)

    yield put({type: TYPES.CREATE_HLAVNY_ZAZNAM_EVIDENCIE_SUCCESS, data: hlavny})

  } catch (e) {
    yield put({type: TYPES.CREATE_HLAVNY_ZAZNAM_EVIDENCIE_ERROR, data: e})
    console.error(e)
  }
}

export function* updateHlavnyZaznamEvidencie(action) {
  const url = Routing.generate('deo_hlavny_update')
  const data = action.data
  const id = data.id
  const key = data.key

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_HLAVNY_ZAZNAM_EVIDENCIE_SUCCESS,
      data: {
        [key]: update
      }
    })

  } catch (e) {
    yield put({type: TYPES.UPDATE_HLAVNY_ZAZNAM_EVIDENCIE_ERROR, data: e})
    console.error(e)
  }
}

export function* deleteHlavnyZaznamEvidencie(action) {
  const url = Routing.generate('deo_hlavny_delete')
  const data = action.data
  const id = data.id

  try {
    yield call(Api.delete, `${url}/${id}`)

    yield put({type: TYPES.DELETE_HLAVNY_ZAZNAM_EVIDENCIE_SUCCESS, id: id})

  } catch (e) {
    yield put({type: TYPES.DELETE_HLAVNY_ZAZNAM_EVIDENCIE_ERROR, data: e})
    console.error(e)
  }
}
