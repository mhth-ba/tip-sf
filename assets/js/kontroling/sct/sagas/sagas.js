import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../../services/ActionTypes'
import {
    fetchOpravnenia,
    fetchSprava,
    loadMainEntry,
    fetchDodavkaTepla,
    processUploadedFile,
    updateHlavny
} from '../../../services/ActionsCenaTepla'

/*export function* helloSaga() {
    console.log('Hello sagas!')
}*/

function* mySaga() {
    yield all([
        takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
        takeLatest(TYPES.FETCH_SPRAVA_REQUEST, fetchSprava),
        takeLatest(TYPES.LOAD_MAIN_ENTRY_REQUEST, loadMainEntry),
        takeLatest(TYPES.FETCH_DODAVKA_TEPLA_REQUEST, fetchDodavkaTepla),
        takeLatest(TYPES.PROCESS_UPLOADED_FILE_REQUEST, processUploadedFile),
        takeLatest(TYPES.UPDATE_HLAVNY_REQUEST, updateHlavny)
    ])
}

// single entry point to start all Sagas at once
/*export default function* rootSaga () {
    yield all([
        helloSaga(),
        mySaga()
    ])
}*/

export default mySaga
