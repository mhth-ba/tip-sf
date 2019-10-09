import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const fetchOpravneniaRequest = () => ({
  type: TYPES.FETCH_OPRAVNENIA_REQUEST
})

export const fetchVyberPolozkyRequest = () => ({
  type: TYPES.FETCH_VYBER_POLOZKY_REQUEST
})

export const loadMainEntryRequest = (id) => ({
  type: TYPES.LOAD_MAIN_ENTRY_REQUEST,
  id
})

export const fetchKonstantyRequest = (id) => ({
  type: TYPES.FETCH_KONSTANTY_REQUEST,
  id
})

export const fetchObjednavkaRequest = (id) => ({
  type: TYPES.FETCH_OBJEDNAVKA_REQUEST,
  id
})

export const fetchDodavkaRequest = (id) => ({
  type: TYPES.FETCH_DODAVKA_REQUEST,
  id
})

export const fetchElektrinaRequest = (id) => ({
  type: TYPES.FETCH_ELEKTRINA_REQUEST,
  id
})

export const processUploadedFileRequest = (data) => ({
  type: TYPES.PROCESS_UPLOADED_FILE_REQUEST,
  data
})

export const updateKonstantyRequest = (data) => ({
  type: TYPES.UPDATE_KONSTANTY_REQUEST,
  data
})

export const updateObjednavkaRequest = (data) => ({
  type: TYPES.UPDATE_OBJEDNAVKA_REQUEST,
  data
})

export const updateDodavkaRequest = (data) => ({
  type: TYPES.UPDATE_DODAVKA_REQUEST,
  data
})

export const updateElektrinaRequest = (data) => ({
  type: TYPES.UPDATE_ELEKTRINA_REQUEST,
  data
})

export function* fetchOpravnenia(action) {
  const url = Routing.generate('dpp_opravnenia')

  try {
    const opravnenia = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_OPRAVNENIA_SUCCESS, data: opravnenia})

  } catch (e) {
    yield put({type: TYPES.FETCH_OPRAVNENIA_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchVyberPolozky(action) {
  const url = Routing.generate('dpp_denny-plan-prevadzky_list')

  try {
    //yield call(delay, 1000)
    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_VYBER_POLOZKY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_VYBER_POLOZKY_ERROR, data: e})
    console.log(e)
  }
}

export function* loadMainEntry(action) {
  const url = Routing.generate('dpp_denny-plan-prevadzky_get')
  const id = action.id

  try {
    const udaje = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.LOAD_MAIN_ENTRY_SUCCESS, data: udaje})
    yield put(fetchKonstantyRequest(id))
    yield put(fetchObjednavkaRequest(id))
    yield put(fetchDodavkaRequest(id))
    yield put(fetchElektrinaRequest(id))

  } catch (e) {
    yield put({type: TYPES.LOAD_MAIN_ENTRY_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchKonstanty(action) {
  const url = Routing.generate('dpp_konstanty_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_KONSTANTY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_KONSTANTY_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchObjednavka(action) {
  const url = Routing.generate('dpp_objednavka_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_OBJEDNAVKA_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_OBJEDNAVKA_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchDodavka(action) {
  const url = Routing.generate('dpp_dodavka_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_DODAVKA_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_DODAVKA_ERROR, data: e})
    console.log(e)
  }
}

export function* fetchElektrina(action) {
  const url = Routing.generate('dpp_elektrina_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_ELEKTRINA_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_ELEKTRINA_ERROR, data: e})
    console.log(e)
  }
}

export function* processUploadedFile(action) {
  const url = Routing.generate('dpp_upload')
  const data = action.data

  try {
    yield put(Notifications.info({
      message: 'Prebieha spracovanie súboru',
      autoDismiss: 5
    }))

    const udaje = yield call(Api.post, url, data)

    yield put({type: TYPES.PROCESS_UPLOADED_FILE_SUCCESS, data: udaje})

    yield put(Notifications.success({
      title: 'Spracovanie dokončené',
      message: 'Údaje zo súboru boli úspešne uložené do databázy'
    }))

    yield put(fetchVyberPolozkyRequest())
    yield put(loadMainEntryRequest(udaje.hlavny.id))

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

export function* updateKonstanty(action) {
  const url = Routing.generate('dpp_konstanty_update')
  const data = action.data
  const id = data.id // ID of entry in SQL
  const field = data.field /// id of html element == name of column in sql == name of entry in redux state

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_KONSTANTY_SUCCESS,
      data: update,
      field
    })

  } catch (e) {
    yield put({type: TYPES.UPDATE_KONSTANTY_ERROR, data: e})
    console.log(e)
  }
}

export function* updateObjednavka(action) {
  const url = Routing.generate('dpp_objednavka_update')
  const data = action.data
  const id = data.id
  const field = data.field
  const zdroj = data.zdroj
  const hodina = data.hodina

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_OBJEDNAVKA_SUCCESS,
      //data: update,
      data: {
        /*[zdroj]: {
          [hodina]: update[hodina]
        }*/
        [zdroj]: update
      },
      field
    })

  } catch (e) {
    yield put({type: TYPES.UPDATE_OBJEDNAVKA_ERROR, data: e})
    console.log(e)
  }
}

export function* updateDodavka(action) {
  const url = Routing.generate('dpp_dodavka_update')
  const data = action.data
  const id = data.id
  const field = data.field
  const zdroj = data.zdroj
  const hodina = data.hodina

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_DODAVKA_SUCCESS,
      data: {
        [zdroj]: update
      },
      field
    })

  } catch (e) {
    yield put({type: TYPES.UPDATE_DODAVKA_ERROR, data: e})
    console.log(e)
  }
}

export function* updateElektrina(action) {
  const url = Routing.generate('dpp_elektrina_update')
  const data = action.data
  const id = data.id
  const field = data.field
  const zdroj = data.zdroj
  const hodina = data.hodina

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_ELEKTRINA_SUCCESS,
      data: {
        [zdroj]: update
      },
      field
    })

  } catch (e) {
    yield put({type: TYPES.UPDATE_ELEKTRINA_ERROR, data: e})
    console.log(e)
  }
}