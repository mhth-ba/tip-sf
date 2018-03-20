import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from './ActionTypes'
import Api from '../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../Components/Routing'

export const toggleHighlightEditable = (toggle) => ({
    type: TYPES.TOGGLE_HIGHLIGHT_EDITABLE,
    toggle
})

export const fetchOpravneniaRequest = () => ({
    type: TYPES.FETCH_OPRAVNENIA_REQUEST
})

export const fetchSpravaRequest = () => ({
    type: TYPES.FETCH_SPRAVA_REQUEST
})

export const loadMainEntryRequest = (id) => ({
    type: TYPES.LOAD_MAIN_ENTRY_REQUEST,
    id
})

export const fetchDodavkaTeplaRequest = (id) => ({
    type: TYPES.FETCH_DODAVKA_TEPLA_REQUEST,
    id
})

export const fetchVyrobaElektrinyRequest = (id) => ({
    type: TYPES.FETCH_VYROBA_ELEKTRINY_REQUEST,
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

export function* fetchOpravnenia(action) {
    const url = Routing.generate('sct_opravnenia')

    try {
        const opravnenia = yield call(Api.fetch, url)

        yield put({type: TYPES.FETCH_OPRAVNENIA_SUCCESS, data: opravnenia})

    } catch (e) {
        yield put({type: TYPES.FETCH_OPRAVNENIA_ERROR, data: e})
        console.log(e)
    }
}

export function* fetchSprava(action) {
    const url = Routing.generate('sct_cena-tepla_list')

    try {
        yield call(delay, 1000)
        const polozky = yield call(Api.fetch, url)

        yield put({type: TYPES.FETCH_SPRAVA_SUCCESS, data: polozky})

    } catch (e) {
        yield put({type: TYPES.FETCH_SPRAVA_ERROR, data: e})
        console.log(e)
    }
}

export function* loadMainEntry(action) {
    const url = Routing.generate('sct_cena-tepla_get')
    const id = action.id

    try {
        const udaje = yield call(Api.fetch, `${url}/${id}`)

        yield put({type: TYPES.LOAD_MAIN_ENTRY_SUCCESS, data: udaje})
        yield put(fetchDodavkaTeplaRequest(id))
        yield put(fetchVyrobaElektrinyRequest(id))

        if (udaje.upload.dt === null) {
            yield put(Notifications.warning({
                title: 'Nenahraný súbor',
                message: 'Excel súbor obsahujúci skutočnú dodávku tepla zatiaľ nebol nahratý',
                autoDismiss: 10
            }))
        }

        if (udaje.upload.sn === null) {
            yield put(Notifications.warning({
                title: 'Nenahraný súbor',
                message: 'Excel súbor obsahujúci skutočné náklady na teplo a elektrinu zatiaľ nebol nahratý',
                autoDismiss: 10
            }))
        }

    } catch (e) {
        yield put({type: TYPES.LOAD_MAIN_ENTRY_ERROR, data: e})
        console.log(e)
    }
}

export function* fetchDodavkaTepla(action) {
    const url = Routing.generate('sct_dodane-teplo_get')
    const id = action.id

    try {
        const polozky = yield call(Api.fetch, `${url}/${id}`)

        yield put({type: TYPES.FETCH_DODAVKA_TEPLA_SUCCESS, data: polozky})

    } catch (e) {
        yield put({type: TYPES.FETCH_DODAVKA_TEPLA_ERROR, data: e})
        console.log(e)
    }
}

export function* fetchVyrobaElektriny(action) {
    const url = Routing.generate('sct_vyroba-elektriny_get')
    const id = action.id

    try {
        const polozky = yield call(Api.fetch, `${url}/${id}`)

        yield put({type: TYPES.FETCH_VYROBA_ELEKTRINY_SUCCESS, data: polozky})

    } catch (e) {
        yield put({type: TYPES.FETCH_VYROBA_ELEKTRINY_ERROR, data: e})
        console.log(e)
    }
}

export function* processUploadedFile(action) {
    const url = Routing.generate('sct_upload')
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

        yield put(fetchSpravaRequest())
        yield put(loadMainEntryRequest(data.id))

    } catch (e) {
        yield put({type: TYPES.PROCESS_UPLOADED_FILE_ERROR, data: e})

        yield put(Notifications.error({
            title: 'Spracovanie neúspešné',
            message: `Počas spracovania nastala chyba. Skúste chvíľu počkať
                      a nahrať súbor znovu neskôr alebo kontaktujte vývojára.`,
            autoDismiss: 12
        }))

        console.log(e)
    }
}

export function* updateHlavny(action) {
    const url = Routing.generate('sct_cena-tepla_update')
    const data = action.data
    const id = data.id

    try {
        const update = yield call(Api.patch, `${url}/${id}`, data)

        yield put({type: TYPES.UPDATE_HLAVNY_SUCCESS, data: update})
        yield put(fetchSpravaRequest())

    } catch (e) {
        yield put({type: TYPES.UPDATE_HLAVNY_ERROR, data: e})
        console.log(e)
    }
}