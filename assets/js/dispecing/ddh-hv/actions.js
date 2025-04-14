import { delay } from 'redux-saga'
import { call, put, all, select } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'
import moment from 'moment'

import Routing from '../../Components/Routing'

export const fetchOpravneniaRequest = () => ({
  type: TYPES.FETCH_OPRAVNENIA_REQUEST
})

export const fetchZoznamDispecerovRequest = () => ({
  type: TYPES.FETCH_ZOZNAM_DISPECEROV_REQUEST
})

export const fetchAuditlogRequest = id => ({
  type: TYPES.FETCH_AUDIT_LOG_REQUEST,
  id
})

export const fetchAuditlogByDateRequest = date => ({
  type: TYPES.FETCH_AUDIT_LOG_BY_DATE_REQUEST,
  date
})

export const fetchDenneDispecerskeHlasenieHVRequest = date => ({
  type: TYPES.LOAD_HVHLAVNY_REQUEST,
  date
})

export const updateHVHlavnyRequest = data => ({
  type: TYPES.UPDATE_HVHLAVNY_REQUEST,
  data
})

export const updateHVHlavnyFormField = (field, value) => ({
  type: TYPES.UPDATE_HVHLAVNY_FORMFIELD,
  field,
  value
})

export const fetchZmenaNaHVRequest = (hvType, hlavnyId) => ({
  type: TYPES.FETCH_ZMENA_NA_HV_REQUEST,
  hvType,
  hlavnyId
})

export const createZmenaNaHVRequest = (hvType, hlavnyId) => ({
  type: TYPES.CREATE_ZMENA_NA_HV_REQUEST,
  hvType,
  hlavnyId
})

export const updateZmenaNaHVRequest = (hvType, data, rollbackCallback) => ({
  type: TYPES.UPDATE_ZMENA_NA_HV_REQUEST,
  hvType,
  data,
  rollbackCallback
})

export const deleteZmenaNaHVRequest = (hvType, id) => ({
  type: TYPES.DELETE_ZMENA_NA_HV_REQUEST,
  hvType,
  id
})

export const fetchStavZariadeniRequest = date => ({
  type: TYPES.FETCH_STAV_ZARIADENI_REQUEST,
  date
})

export const fetchZmenaNaZdrojRequest = (sourceType, hlavnyId) => ({
  type: TYPES.FETCH_ZMENA_NA_ZDROJ_REQUEST,
  sourceType,
  hlavnyId
})

export const createZmenaNaZdrojRequest = (sourceType, hlavnyId) => ({
  type: TYPES.CREATE_ZMENA_NA_ZDROJ_REQUEST,
  sourceType,
  hlavnyId
})

export const updateZmenaNaZdrojRequest = (sourceType, data, rollbackCallback) => ({
  type: TYPES.UPDATE_ZMENA_NA_ZDROJ_REQUEST,
  sourceType,
  data,
  rollbackCallback
})

export const deleteZmenaNaZdrojRequest = (sourceType, id) => ({
  type: TYPES.DELETE_ZMENA_NA_ZDROJ_REQUEST,
  sourceType,
  id
})

function* refreshStavZariadeni() {
  const state = yield select(state => state)
  if (state.hlavny && state.hlavny.ost_data && state.hlavny.ost_data.datum) {
    const date = moment.unix(state.hlavny.ost_data.datum).format('YYYY-MM-DD')
    yield put(fetchStavZariadeniRequest(date))
  }
}

export function* fetchOpravnenia() {
  const url = Routing.generate('ddh_hv_opravnenia')

  try {
    const opravnenia = yield call(Api.fetch, url)

    yield put({ type: TYPES.FETCH_OPRAVNENIA_SUCCESS, data: opravnenia })
  } catch (e) {
    yield put({ type: TYPES.FETCH_OPRAVNENIA_ERROR, data: e })
    console.error(e)
  }
}

export function* fetchZoznamDispecerov() {
  const url = Routing.generate('ddh_hv_dispeceri_list')
  try {
    const data = yield call(Api.fetch, url)
    yield put({ type: TYPES.FETCH_ZOZNAM_DISPECEROV_SUCCESS, data })
  } catch (e) {
    yield put({ type: TYPES.FETCH_ZOZNAM_DISPECEROV_ERROR, data: e })
    console.error(e)
  }
}

export function* fetchAuditlog(action) {
  let url

  if (action.id) {
    // Fetch audit log for a specific date
    url = Routing.generate('ddh_hv_aktivita_hlavny_get', { id: action.id })
  } else {
    // Fetch all audit logs
    url = Routing.generate('ddh_hv_aktivita_get')
  }

  try {
    const data = yield call(Api.fetch, url)
    yield put({
      type: TYPES.FETCH_AUDIT_LOG_SUCCESS,
      data
    })
  } catch (e) {
    yield put({
      type: TYPES.FETCH_AUDIT_LOG_ERROR,
      data: e
    })
    console.error(e)
  }
}

export function* fetchAuditlogByDate(action) {
  const url = Routing.generate('ddh_hv_aktivita_by_date_get', { date: action.date })

  try {
    const data = yield call(Api.fetch, url)
    yield put({
      type: TYPES.FETCH_AUDIT_LOG_SUCCESS,
      data
    })
  } catch (e) {
    yield put({
      type: TYPES.FETCH_AUDIT_LOG_ERROR,
      data: e
    })
    console.error(e)
  }
}

export function* fetchDenneDispecerskeHlasenieHV(action) {
  const url = Routing.generate('ddh_hv_hlavicka_get', { date: action.date })

  try {
    const polozky = yield call(Api.fetch, url)

    yield put({ type: TYPES.LOAD_HVHLAVNY_SUCCESS, data: polozky })
  } catch (e) {
    yield put({ type: TYPES.LOAD_HVHLAVNY_ERROR, data: e })
    console.error(e)
  }
}

export function* updateHVHlavny(action) {
  const url = Routing.generate('ddh_hv_hlavicka_update', { id: action.data.id })
  const data = action.data

  try {
    const update = yield call(Api.patch, url, data)

    yield put({ type: TYPES.UPDATE_HVHLAVNY_SUCCESS, data: update })

    yield put(
      Notifications.success({
        message: 'Úspešne uložené',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({ type: TYPES.UPDATE_HVHLAVNY_ERROR, data: e })
    console.error(e)
  }
}

export function* fetchZmenaNaHV(action) {
  const { hvType, hlavnyId } = action
  const apiMapping = {
    Zapad: 'zapad',
    Vychod: 'vychod'
  }

  const apiEndpoint = apiMapping[hvType]
  const url = Routing.generate(`ddh_hv_zmena_na_hv_${apiEndpoint}_list`, { hlavnyId })

  try {
    const data = yield call(Api.fetch, url)
    yield put({
      type: TYPES.FETCH_ZMENA_NA_HV_SUCCESS,
      hvType,
      data
    })
  } catch (e) {
    yield put({
      type: TYPES.FETCH_ZMENA_NA_HV_ERROR,
      hvType,
      error: e
    })
    console.error(e)
  }
}

export function* createZmenaNaHV(action) {
  const { hvType, hlavnyId } = action
  const apiMapping = {
    Zapad: 'zapad',
    Vychod: 'vychod'
  }

  const apiEndpoint = apiMapping[hvType]
  const url = Routing.generate(`ddh_hv_zmena_na_hv_${apiEndpoint}_create`)

  try {
    const data = yield call(Api.post, url, { hlavny_id: hlavnyId })
    yield put({
      type: TYPES.CREATE_ZMENA_NA_HV_SUCCESS,
      hvType,
      data
    })
    yield put(
      Notifications.success({
        message: `Záznam pre ${hvType === 'Zapad' ? 'HV Západ' : 'HV Východ'} bol vytvorený`,
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({
      type: TYPES.CREATE_ZMENA_NA_HV_ERROR,
      hvType,
      error: e
    })
    yield put(
      Notifications.error({
        message: 'Chyba pri vytváraní záznamu',
        autoDismiss: 5
      })
    )
    console.error(e)
  }
}

export function* updateZmenaNaHV(action) {
  const { hvType, data, rollbackCallback } = action
  const apiMapping = {
    Zapad: 'zapad',
    Vychod: 'vychod'
  }

  const apiEndpoint = apiMapping[hvType]
  const url = Routing.generate(`ddh_hv_zmena_na_hv_${apiEndpoint}_update`, { id: data.id })

  try {
    const response = yield call(Api.patch, url, data)
    yield put({
      type: TYPES.UPDATE_ZMENA_NA_HV_SUCCESS,
      hvType,
      data: response
    })
    yield* refreshStavZariadeni()
    yield put(
      Notifications.success({
        message: 'Úspešne uložené',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({
      type: TYPES.UPDATE_ZMENA_NA_HV_ERROR,
      hvType,
      error: e
    })

    // Execute rollback callback if provided
    if (rollbackCallback && typeof rollbackCallback === 'function') {
      rollbackCallback()
    }

    yield put(
      Notifications.error({
        message: 'Chyba pri ukladaní',
        autoDismiss: 5
      })
    )
    console.error(e)
  }
}

export function* deleteZmenaNaHV(action) {
  const { hvType, id } = action
  const apiMapping = {
    Zapad: 'zapad',
    Vychod: 'vychod'
  }

  const apiEndpoint = apiMapping[hvType]
  const url = Routing.generate(`ddh_hv_zmena_na_hv_${apiEndpoint}_delete`, { id })

  try {
    yield call(Api.delete, url)
    yield put({
      type: TYPES.DELETE_ZMENA_NA_HV_SUCCESS,
      hvType,
      id
    })
    yield* refreshStavZariadeni()
    yield put(
      Notifications.success({
        message: 'Záznam bol úspešne vymazaný',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({
      type: TYPES.DELETE_ZMENA_NA_HV_ERROR,
      hvType,
      error: e
    })
    yield put(
      Notifications.error({
        message: 'Chyba pri mazaní záznamu',
        autoDismiss: 5
      })
    )
    console.error(e)
  }
}

export function* fetchZmenaNaZdroj(action) {
  const { sourceType, hlavnyId } = action
  const url = Routing.generate('ddh_hv_zmena_na_zdroj_list', {
    sourceType,
    hlavnyId
  })

  try {
    const data = yield call(Api.fetch, url)
    yield put({
      type: TYPES.FETCH_ZMENA_NA_ZDROJ_SUCCESS,
      sourceType,
      data
    })
  } catch (e) {
    yield put({
      type: TYPES.FETCH_ZMENA_NA_ZDROJ_ERROR,
      sourceType,
      error: e
    })
    console.error(e)
  }
}

export function* createZmenaNaZdroj(action) {
  const { sourceType, hlavnyId } = action
  const url = Routing.generate('ddh_hv_zmena_na_zdroj_create', { sourceType })

  try {
    const data = yield call(Api.post, url, { hlavny_id: hlavnyId })
    yield put({
      type: TYPES.CREATE_ZMENA_NA_ZDROJ_SUCCESS,
      sourceType,
      data
    })
    yield put(
      Notifications.success({
        message: `Záznam pre zdroj bol vytvorený`,
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({
      type: TYPES.CREATE_ZMENA_NA_ZDROJ_ERROR,
      sourceType,
      error: e
    })
    yield put(
      Notifications.error({
        message: 'Chyba pri vytváraní záznamu',
        autoDismiss: 5
      })
    )
    console.error(e)
  }
}

export function* updateZmenaNaZdroj(action) {
  const { sourceType, data, rollbackCallback } = action
  const url = Routing.generate('ddh_hv_zmena_na_zdroj_update', {
    sourceType,
    id: data.id
  })

  try {
    const response = yield call(Api.patch, url, data)
    yield put({
      type: TYPES.UPDATE_ZMENA_NA_ZDROJ_SUCCESS,
      sourceType,
      data: response
    })
    yield* refreshStavZariadeni()
    yield put(
      Notifications.success({
        message: 'Úspešne uložené',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({
      type: TYPES.UPDATE_ZMENA_NA_ZDROJ_ERROR,
      sourceType,
      error: e
    })

    // Execute rollback callback if provided
    if (rollbackCallback && typeof rollbackCallback === 'function') {
      rollbackCallback()
    }

    yield put(
      Notifications.error({
        message: 'Chyba pri ukladaní',
        autoDismiss: 5
      })
    )
    console.error(e)
  }
}

export function* deleteZmenaNaZdroj(action) {
  const { sourceType, id } = action
  const url = Routing.generate('ddh_hv_zmena_na_zdroj_delete', {
    sourceType,
    id
  })

  try {
    yield call(Api.delete, url)
    yield put({
      type: TYPES.DELETE_ZMENA_NA_ZDROJ_SUCCESS,
      sourceType,
      id
    })
    yield* refreshStavZariadeni()
    yield put(
      Notifications.success({
        message: 'Záznam bol úspešne vymazaný',
        autoDismiss: 5
      })
    )
  } catch (e) {
    yield put({
      type: TYPES.DELETE_ZMENA_NA_ZDROJ_ERROR,
      sourceType,
      error: e
    })
    yield put(
      Notifications.error({
        message: 'Chyba pri mazaní záznamu',
        autoDismiss: 5
      })
    )
    console.error(e)
  }
}

export function* fetchStavZariadeni(action) {
  const { date } = action
  const url = Routing.generate('ddh_hv_stav_zariadeni_get', { date })

  try {
    const data = yield call(Api.fetch, url)
    yield put({
      type: TYPES.FETCH_STAV_ZARIADENI_SUCCESS,
      data
    })
  } catch (e) {
    yield put({
      type: TYPES.FETCH_STAV_ZARIADENI_ERROR,
      error: e
    })
    console.error(e)
  }
}
