import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'

import Routing from '../../Components/Routing'
import Notifications from 'react-notification-system-redux'

export const toggleTab = (tab) => ({
  type: TYPES.TOGGLE_TAB,
  tab
})

export const fetchVyberPolozkyRequest = () => ({
  type: TYPES.FETCH_VYBER_POLOZKY_REQUEST
})

export const loadMainEntryRequest = (data) => ({
  type: TYPES.LOAD_MAIN_ENTRY_REQUEST,
  data
})

export const fetchMoznostiRequest = (id) => ({
  type: TYPES.FETCH_MOZNOSTI_REQUEST,
  id
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

export const fetchSumarizaciaRequest = (id) => ({
  type: TYPES.FETCH_SUMARIZACIA_REQUEST,
  id
})

export const processUploadedFileRequest = (data) => ({
  type: TYPES.PROCESS_UPLOADED_FILE_REQUEST,
  data
})

export const updateHlavnyRequest = (data) => ({
  type: TYPES.UPDATE_HLAVNY_REQUEST,
  data
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

    yield put(fetchMoznostiRequest(id))
    yield put(fetchZnakyDaneRequest())
    yield put(fetchVstupRequest(id))
    yield put(fetchVystupRequest(id))
    yield put(fetchSumarizaciaRequest(id))

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

export function* fetchMoznosti(action) {
  const url = Routing.generate('dp_moznosti')
  const id = action.id

  try {
    const moznosti = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_MOZNOSTI_SUCCESS, data: moznosti})

  } catch (e) {
    yield put({type: TYPES.FETCH_MOZNOSTI_ERROR, data: e})
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

export function* fetchSumarizacia(action) {
  const url = Routing.generate('dp_sumarizacia_get')
  const id = action.id

  try {
    const udaje = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_SUMARIZACIA_SUCCESS, data: udaje})

  } catch (e) {
    yield put({type: TYPES.FETCH_SUMARIZACIA_ERROR, data: e})
    console.error(e)
  }
}

export function* processUploadedFile(action) {
  const url = Routing.generate('dp_upload')
  const data = action.data

  try {
    yield put(Notifications.info({
      message: 'Prebieha spracovanie súboru'
    }))

    const udaje = yield call(Api.post, url, data)

    yield put({type: TYPES.PROCESS_UPLOADED_FILE_SUCCESS, data: udaje})

    yield put(Notifications.success({
      title: 'Spracovanie dokončené',
      message: 'Údaje zo súboru boli úspešne uložené do databázy'
    }))

    yield put(fetchVyberPolozkyRequest())
    yield put(loadMainEntryRequest(data))

  } catch (e) {
    yield put({type: TYPES.PROCESS_UPLOADED_FILE_ERROR, data: e})

    yield put(Notifications.error({
      title: 'Spracovanie neúspešné',
      message: `Počas spracovania nastala chyba. Skúste chvíľu počkať
                a nahrať súbor znovu neskôr alebo kontaktujte vývojára.`,
      autoDismiss: 12
    }))

    console.error(e)
  }
}

export function* updateHlavny(action) {
  const url = Routing.generate('dp_hlavny_update')
  const data = action.data
  const id = data.id

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({type: TYPES.UPDATE_HLAVNY_SUCCESS, data: update})
    yield put(fetchVyberPolozkyRequest())

  } catch (e) {
    yield put({type: TYPES.UPDATE_HLAVNY_ERROR, data: e})
    console.error(e)
  }
}
