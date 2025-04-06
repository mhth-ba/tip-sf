import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchOpravnenia,
  fetchMoznosti,
  fetchAktivita,

  fetchHlavneZaznamyEvidencie,

  createHlavnyZaznamEvidencie,

  updateHlavny,

  deleteHlavnyZaznamEvidencie,
} from './actions'

function* mySaga() {
  yield all([

    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_MOZNOSTI_REQUEST, fetchMoznosti),
    takeLatest(TYPES.FETCH_AKTIVITA_REQUEST, fetchAktivita),

    takeLatest(TYPES.FETCH_HLAVNE_ZAZNAMY_EVIDENCIE_REQUEST, fetchHlavneZaznamyEvidencie),

    takeEvery(TYPES.CREATE_HLAVNY_ZAZNAM_EVIDENCIE_REQUEST, createHlavnyZaznamEvidencie),

    takeEvery(TYPES.UPDATE_HLAVNY_REQUEST, updateHlavny),

    takeEvery(TYPES.DELETE_HLAVNY_ZAZNAM_EVIDENCIE_REQUEST, deleteHlavnyZaznamEvidencie)
  ])
}

export default mySaga
