import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'
import {fetchRiadkyRequest} from "../../uctovnictvo/dp/actions";

export const fetchOpravneniaRequest = () => ({
  type: TYPES.FETCH_OPRAVNENIA_REQUEST
})

export const fetchAnalyzyRequest = () => ({
  type: TYPES.FETCH_ANALYZY_REQUEST
})

export const fetchVyluceneRequest = () => ({
  type: TYPES.FETCH_VYLUCENE_REQUEST
})

export const fetchPrehladRequest = () => ({
  type: TYPES.FETCH_PREHLAD_REQUEST
})

export const createVyluceneRequest = (data) => ({
  type: TYPES.CREATE_VYLUCENE_REQUEST,
  data
})

export const updateVyluceneRequest = (data) => ({
  type: TYPES.UPDATE_VYLUCENE_REQUEST,
  data
})

export const deleteVyluceneRequest = (data) => ({
  type: TYPES.DELETE_VYLUCENE_REQUEST,
  data
})

export function* fetchOpravnenia(action) {
  const url = Routing.generate('anm_opravnenia')

  try {
    const opravnenia = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_OPRAVNENIA_SUCCESS, data: opravnenia})

  } catch (e) {
    yield put({type: TYPES.FETCH_OPRAVNENIA_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchAnalyzy(action) {

  const url = Routing.generate('anm_analyzy_get')

  try {
    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_ANALYZY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_ANALYZY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchVylucene(action) {

  const url = Routing.generate('anm_vylucene_get')

  try {
    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_VYLUCENE_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_VYLUCENE_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchPrehlad(action) {

  const url = Routing.generate('anm_prehlad_get')

  try {
    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_PREHLAD_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_PREHLAD_ERROR, data: e})
    console.error(e)
  }
}

export function* createVylucene(action) {
  const url = Routing.generate('anm_vylucene_create')
  const data = action.data

  try {
    const vylucene = yield call(Api.post, url, data)

    yield put({type: TYPES.CREATE_VYLUCENE_SUCCESS, data: vylucene})

    yield put(fetchRiadkyRequest(data.hlavny))

  } catch (e) {
    yield put({type: TYPES.CREATE_VYLUCENE_ERROR, data: e})

    yield put(Notifications.error({
      title: 'Vylúčiť merač sa nepodarilo :(',
      message: `Počas spracovania nastala chyba.
                Skúste o niekoľko minúť ešte raz, priípadne kontaktujte vývojára.`,
      autoDismiss: 12
    }))

    console.error(e)
  }
}

export function* updateVylucene(action) {
  const url = Routing.generate('anm_vylucene_update')
  const data = action.data
  const id = data.id

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({type: TYPES.UPDATE_VYLUCENE_SUCCESS, data: update})

    yield put(fetchPrehladRequest())

  } catch (e) {
    yield put({type: TYPES.UPDATE_VYLUCENE_ERROR, data: e})
    console.error(e)
  }
}

export function* deleteVylucene(action) {
  const url = Routing.generate('anm_vylucene_delete')
  let data = action.data
  const id = data.id

  try {
    yield call(Api.delete, `${url}/${id}`)

    yield put({type: TYPES.DELETE_VYLUCENE_SUCCESS, id: id})

    yield put(fetchAnalyzyRequest())
    yield put(fetchPrehladRequest())

  } catch (e) {
    yield put({type: TYPES.DELETE_VYLUCENE_ERROR, data: e})
  }
}
