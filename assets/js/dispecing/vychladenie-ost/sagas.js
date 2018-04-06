import { takeLatest, all } from 'redux-saga/effects'

import * as TYPES from './actions/ActionTypes'
import {
    fetchZoznamObdobi,
    fetchVychladeniePrehlad,
    fetchVychladenieOST
} from './actions/Actions'

function* mySaga() {
    yield all([
        takeLatest(TYPES.FETCH_ZOZNAM_OBDOBI_REQUEST, fetchZoznamObdobi),
        takeLatest(TYPES.FETCH_VYCHLADENIE_PREHLAD_REQUEST, fetchVychladeniePrehlad),
        takeLatest(TYPES.FETCH_VYCHLADENIE_OST_REQUEST, fetchVychladenieOST)
    ])
}

export default mySaga
