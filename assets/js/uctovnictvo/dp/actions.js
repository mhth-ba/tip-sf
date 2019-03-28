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

export const toggleFilter = (filter) => ({
  type: TYPES.TOGGLE_FILTER,
  filter
})

export const fetchVyberPolozkyRequest = () => ({
  type: TYPES.FETCH_VYBER_POLOZKY_REQUEST
})

export const fetchAktivitaRequest = (id) => ({
  type: TYPES.FETCH_AKTIVITA_REQUEST,
  id
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

export const fetchRiadkyRequest = (id) => ({
  type: TYPES.FETCH_RIADKY_REQUEST,
  id
})

export const processUploadedFileRequest = (data) => ({
  type: TYPES.PROCESS_UPLOADED_FILE_REQUEST,
  data
})

export const createHlavnyRequest = (data) => ({
  type: TYPES.CREATE_HLAVNY_REQUEST,
  data
})

export const createDokladRequest = (data) => ({
  type: TYPES.CREATE_DOKLAD_REQUEST,
  data
})

export const updateHlavnyRequest = (data) => ({
  type: TYPES.UPDATE_HLAVNY_REQUEST,
  data
})

export const updateDokladRequest = (data) => ({
  type: TYPES.UPDATE_DOKLAD_REQUEST,
  data
})

export const deleteDokladRequest = (data) => ({
  type: TYPES.DELETE_DOKLAD_REQUEST,
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

export function* fetchAktivita(action) {
  let url
  const id = action.id

  if (id === undefined) {
    // ID nie je definované, načítať aktivitu vo všetkých záznamoch
    url = Routing.generate('dp_aktivita_get')
  } else {
    // ID je definované, načítať aktivitu iba v hlavnom zázname
    url = Routing.generate('dp_aktivita_hlavny_get')
    url = `${url}/${id}`
  }

  try {
    const udaje = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_AKTIVITA_SUCCESS, data: udaje})
  } catch (e) {
    yield put({type: TYPES.FETCH_AKTIVITA_ERROR, data: e})
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

    yield put(fetchAktivitaRequest(id))
    yield put(fetchMoznostiRequest(id))
    //yield put(fetchZnakyDaneRequest())
    yield put(fetchVstupRequest(id))
    yield put(fetchVystupRequest(id))
    //yield put(fetchSumarizaciaRequest(id))
    yield put(fetchRiadkyRequest(id))

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

export function* fetchRiadky(action) {
  const url = Routing.generate('dp_riadky_get')
  const id = action.id

  try {
    const udaje = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_RIADKY_SUCCESS, data: udaje})

  } catch (e) {
    yield put({type: TYPES.FETCH_RIADKY_ERROR, data: e})
    console.error(e)
  }
}

export function* processUploadedFile(action) {
  const url = Routing.generate('dp_upload')
  const data = action.data

  try {
    const udaje = yield call(Api.post, url, data)

    yield put({type: TYPES.PROCESS_UPLOADED_FILE_SUCCESS, data: udaje})

    if (data.uploadtype !== 3) {
      yield put(Notifications.success({
        title: 'Spracovanie súboru dokončené',
        message: 'Údaje zo súboru boli úspešne uložené do databázy'
      }))

      yield put(fetchVyberPolozkyRequest())
      yield put(fetchAktivitaRequest())
      yield put(loadMainEntryRequest(data))
    }

  } catch (e) {
    yield put({type: TYPES.PROCESS_UPLOADED_FILE_ERROR, data: e})

    yield put(Notifications.error({
      title: 'Spracovanie súboru neúspešné',
      message: `Počas spracovania nastala chyba. Skúste chvíľu počkať
                a nahrať súbor znovu neskôr alebo kontaktujte vývojára.`,
      autoDismiss: 12
    }))

    console.error(e)
  }
}

export function* createHlavny(action) {
  const url = Routing.generate('dp_hlavny_create')
  const data = action.data

  try {
    yield put(Notifications.info({
      message: 'Prebieha tvorba hlavného záznamu'
    }))

    const hlavny = yield call(Api.post, url, data)

    yield put({type: TYPES.CREATE_HLAVNY_SUCCESS, data: hlavny})

    yield put(Notifications.success({
      title: 'Vytváranie hlavného záznamu dokončené',
      message: 'Nový hlavný záznam sa podarilo úspešne vytvoriť'
    }))

    yield put(fetchVyberPolozkyRequest())
    yield put(loadMainEntryRequest(hlavny))

  } catch (e) {

    yield put({type: TYPES.CREATE_HLAVNY_ERROR, data: e})

    yield put(Notifications.error({
      title: 'Vytváranie hlavného záznamu neúspešné',
      message: `Počas vytvárania hlavného záznamu nastala neočakávaná chyba. Skúste program zavrieť,
                znovu otvoriť a vytvoriť hlavný záznam znovu. V prípade potreby kontaktuje vývojára.`,
      autoDismiss: 12
    }))

    console.error(e)
  }
}

export function* createDoklad(action) {
  const url = Routing.generate('dp_doklad_create')
  const data = action.data

  try {
    const doklad = yield call(Api.post, url, data)

    if (data.zaradenie === 1) {
      yield put({type: TYPES.CREATE_DOKLAD_VSTUP_SUCCESS, data: doklad})
    } else if (data.zaradenie === 2) {
      yield put({type: TYPES.CREATE_DOKLAD_VYSTUP_SUCCESS, data: doklad})
    }

    yield put(fetchRiadkyRequest(data.hlavny))

  } catch (e) {
    yield put({type: TYPES.CREATE_DOKLAD_ERROR, data: e})

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
    yield put(fetchRiadkyRequest(id))

  } catch (e) {
    yield put({type: TYPES.UPDATE_HLAVNY_ERROR, data: e})
    console.error(e)
  }
}

export function* updateDoklad(action) {
  let url
  let data = action.data
  const id = data.id
  const zaradenie = data.zaradenie
  const hlavny = data.hlavny

  delete data.zaradenie
  delete data.hlavny

  try {
    let update

    if (zaradenie === 1) {
      url = Routing.generate('dp_doklad_vstup_update')
      update = yield call(Api.patch, `${url}/${id}`, data)

      yield put({type: TYPES.UPDATE_DOKLAD_VSTUP_SUCCESS, data: update})

    } else if (zaradenie === 2) {
      url = Routing.generate('dp_doklad_vystup_update')
      update = yield call(Api.patch, `${url}/${id}`, data)

      yield put({type: TYPES.UPDATE_DOKLAD_VYSTUP_SUCCESS, data: update})
    }

    yield put(fetchRiadkyRequest(hlavny))

  } catch (e) {
    yield put({type: TYPES.UPDATE_DOKLAD_ERROR, data: e})

    console.error(e)
  }
}

export function* deleteDoklad(action) {
  let url
  let data = action.data
  const id = data.id
  const zaradenie = data.zaradenie
  const hlavny = data.hlavny

  try {
    if (zaradenie === 1) {
      url = Routing.generate('dp_doklad_vstup_delete')
      yield call(Api.delete, `${url}/${id}`)

      yield put({type: TYPES.DELETE_DOKLAD_VSTUP_SUCCESS, id: id})

    } else if (zaradenie === 2) {
      url = Routing.generate('dp_doklad_vystup_delete')
      yield call(Api.delete, `${url}/${id}`)

      yield put({type: TYPES.DELETE_DOKLAD_VYSTUP_SUCCESS, id: id})
    }

    yield put(fetchRiadkyRequest(hlavny))

  } catch (e) {
    yield put({type: TYPES.DELETE_DOKLAD_ERROR, data: e})
  }
}