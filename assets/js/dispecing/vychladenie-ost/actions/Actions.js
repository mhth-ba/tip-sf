import { call, put } from 'redux-saga/effects'
import * as TYPES from './ActionTypes'
import Api from '../../../services/Api'

import Routing from '../../../Components/Routing'

export const fetchZoznamObdobiRequest = () => ({
    type: TYPES.FETCH_ZOZNAM_OBDOBI_REQUEST
})

export const fetchVychladeniePrehladRequest = (data) => ({
    type: TYPES.FETCH_VYCHLADENIE_PREHLAD_REQUEST,
    data
})

export const fetchVychladenieOSTRequest = (data) => ({
    type: TYPES.FETCH_VYCHLADENIE_OST_REQUEST,
    data
})

export function* fetchZoznamObdobi(action) {
    const url = Routing.generate('vco_zoznam_get')

    const polozky = yield call(Api.fetch, url)

    try {
        yield put({type: TYPES.FETCH_ZOZNAM_OBDOBI_SUCCESS, data: polozky})

        // načíta prvú položku zo zoznamu období
        const data = Object.values(polozky).reverse()[0][0]
        yield put(fetchVychladeniePrehladRequest(data))

    } catch (e) {
        yield put({type: TYPES.FETCH_ZOZNAM_OBDOBI_ERROR, data: e})
        console.log(e)
    }
}

export function* fetchVychladeniePrehlad(action) {
    const url = Routing.generate('vco_vychladenie-prehlad_get')
    const data = action.data

    const polozky = yield call(Api.post, url, data)

    try {
        yield put({type: TYPES.FETCH_VYCHLADENIE_PREHLAD_SUCCESS, data: polozky})

    } catch (e) {
        yield put({type: TYPES.FETCH_VYCHLADENIE_PREHLAD_ERROR, data: e})
        console.log(e)
    }
}

export function* fetchVychladenieOST(action) {
    const url = Routing.generate('vco_vychladenie-ost_get')
    const data = action.data

    const polozky = yield call(Api.post, url, data)

    try {
        yield put({type: TYPES.FETCH_VYCHLADENIE_OST_SUCCESS, data: polozky})

    } catch (e) {
        yield put({type: TYPES.FETCH_VYCHLADENIE_OST_ERROR, data: e})
        console.log(e)
    }
}