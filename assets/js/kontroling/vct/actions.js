import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import * as TYPES from '../../services/ActionTypes'
import Api from '../../services/Api'
import Notifications from 'react-notification-system-redux'

import Routing from '../../Components/Routing'

export const toggleHighlightEditable = (toggle) => ({
  type: TYPES.TOGGLE_HIGHLIGHT_EDITABLE,
  toggle
})

export const toggleHistoria = (toggle) => ({
  type: TYPES.TOGGLE_HISTORIA,
  toggle
})

export const highlightCells = (data) => ({
  type: TYPES.HIGHLIGHT_CELLS,
  data
})

export const setDecimalScale = (scale) => ({
  type: TYPES.SET_DECIMAL_SCALE,
  scale
})

export const fetchOpravneniaRequest = () => ({
  type: TYPES.FETCH_OPRAVNENIA_REQUEST
})

export const fetchPristupyRequest = () => ({
  type: TYPES.FETCH_PRISTUPY_REQUEST
})

export const fetchMoznostiRequest = () => ({
  type: TYPES.FETCH_MOZNOSTI_REQUEST
})

export const fetchAktivitaRequest = () => ({
  type: TYPES.FETCH_AKTIVITA_REQUEST
})

export const fetchVyberPolozkyRequest = () => ({
  type: TYPES.FETCH_VYBER_POLOZKY_REQUEST
})

export const loadMainEntryRequest = (data) => ({
  type: TYPES.LOAD_MAIN_ENTRY_REQUEST,
  data
})

export const fetchHlavnyRequest = (id) => ({
  type: TYPES.FETCH_HLAVNY_REQUEST,
  id
})

export const fetchVariantyRequest = (id) => ({
  type: TYPES.FETCH_VARIANTY_REQUEST,
  id
})

export const fetchPoznamkyRequest = (id) => ({
  type: TYPES.FETCH_POZNAMKY_REQUEST,
  id
})

export const fetchOcakavanaDodavkaTeplaRequest = (id) => ({
  type: TYPES.FETCH_OCAKAVANA_DODAVKA_TEPLA_REQUEST,
  id
})

export const fetchNormativneMnozstvoRequest = (id) => ({
  type: TYPES.FETCH_NORMATIVNE_MNOZSTVO_REQUEST,
  id
})

export const fetchNakupTeplaRequest = (id) => ({
  type: TYPES.FETCH_NAKUP_TEPLA_REQUEST,
  id
})

export const fetchSkutocneNakladyRequest = (id) => ({
  type: TYPES.FETCH_SKUTOCNE_NAKLADY_REQUEST,
  id
})

export const fetchOcakavaneNakladyRequest = (id) => ({
  type: TYPES.FETCH_OCAKAVANE_NAKLADY_REQUEST,
  id
})

export const fetchOcakavaneNakladyVariantyRequest = (id) => ({
  type: TYPES.FETCH_OCAKAVANE_NAKLADY_VARIANTY_REQUEST,
  id
})

export const fetchVypocetBuniekRequest = (id) => ({
  type: TYPES.FETCH_VYPOCET_BUNIEK_REQUEST,
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

export const createVariantRequest = (data) => ({
  type: TYPES.CREATE_VARIANT_REQUEST,
  data
})

export const createPristupRequest = (data) => ({
  type: TYPES.CREATE_PRISTUP_REQUEST,
  data
})

export const updateHlavnyRequest = (data) => ({
  type: TYPES.UPDATE_HLAVNY_REQUEST,
  data
})

export const updateVariantRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_VARIANT_REQUEST,
  data, table, hlavny
})

export const updatePristupRequest = (data) => ({
  type: TYPES.UPDATE_PRISTUP_REQUEST,
  data
})

export const updatePoznamkyRequest = (data) => ({
  type: TYPES.UPDATE_POZNAMKY_REQUEST,
  data
})

export const updateNormativneMnozstvoRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_NORMATIVNE_MNOZSTVO_REQUEST,
  data, table, hlavny
})

export const updateNakupTeplaRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_NAKUP_TEPLA_REQUEST,
  data, table, hlavny
})

export const updateSkutocneNakladyRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_SKUTOCNE_NAKLADY_REQUEST,
  data, table, hlavny
})

export const updateOcakavaneNakladyRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_OCAKAVANE_NAKLADY_REQUEST,
  data, table, hlavny
})

export const updateOcakavaneNakladyVariantyRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_OCAKAVANE_NAKLADY_VARIANTY_REQUEST,
  data, table, hlavny
})

export const deleteVariantRequest = (data) => ({
  type: TYPES.DELETE_VARIANT_REQUEST,
  data
})

export const deletePristupRequest = (data) => ({
  type: TYPES.DELETE_PRISTUP_REQUEST,
  data
})

export function* fetchOpravnenia() {
  const url = Routing.generate('vct_opravnenia')

  try {
    const opravnenia = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_OPRAVNENIA_SUCCESS, data: opravnenia})

  } catch (e) {
    yield put({type: TYPES.FETCH_OPRAVNENIA_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchPristupy() {
  const url = Routing.generate('vct_pristupy')

  try {
    const pristupy = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_PRISTUPY_SUCCESS, data: pristupy})

  } catch (e) {
    yield put({type: TYPES.FETCH_PRISTUPY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchMoznosti() {
  const url = Routing.generate('vct_moznosti')

  try {
    const moznosti = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_MOZNOSTI_SUCCESS, data: moznosti})

  } catch (e) {
    yield put({type: TYPES.FETCH_MOZNOSTI_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchAktivita() {
  const url = Routing.generate('vct_aktivita')

  try {
    const aktivita = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_AKTIVITA_SUCCESS, data: aktivita})

  } catch (e) {
    yield put({type: TYPES.FETCH_AKTIVITA_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchVyberPolozky() {
  const url = Routing.generate('vct_hlavny_list')

  try {
    //yield call(delay, 5000)
    const polozky = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_VYBER_POLOZKY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_VYBER_POLOZKY_ERROR, data: e})
    console.error(e)
  }
}

export function* loadMainEntry(action) {
  const url = Routing.generate('vct_hlavny_get')
  const data = action.data

  const id = data.id
  const roles = data.roles

  try {
    const udaje = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.LOAD_MAIN_ENTRY_SUCCESS, data: udaje})

    yield [
      put(fetchVariantyRequest(id)),
      put(fetchPoznamkyRequest(id)),
      // put(fetchSuboryRequest(id)),
      // put(fetchKonstantyVCTRequest(id)),
      put(fetchOcakavanaDodavkaTeplaRequest(id)),
      // put(fetchVyrobaElektrinyRequest(id)),
      // put(fetchDelenieNakladovRequest(id)),
      // put(fetchKotolneRequest(id)),
      // put(fetchZemnyPlynRequest(id)),
      // put(fetchZemnyPlynKlucovanieRequest(id)),
      put(fetchNormativneMnozstvoRequest(id)),
      // put(fetchOpravneneNakladyRequest(id)),
      put(fetchNakupTeplaRequest(id)),
      put(fetchSkutocneNakladyRequest(id)),
      put(fetchOcakavaneNakladyRequest(id)),
      put(fetchOcakavaneNakladyVariantyRequest(id)),
      // put(fetchRegulovanaZlozkaRequest(id)),
      put(fetchVypocetBuniekRequest(id))
    ]

    yield call(delay, 2000)

    if (udaje.upload.odt === null) {
      yield put(Notifications.error({
        title: 'Chýba súbor s očakávanou dodávkou tepla',
        message: 'XML súbor obsahujúci očakávanú dodávku tepla zatiaľ nebol nahratý',
        autoDismiss: 10
      }))
    }

    //yield call(delay, 7000)

  } catch (e) {
    yield put({type: TYPES.LOAD_MAIN_ENTRY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchHlavny(action) {
  const url = Routing.generate('vct_hlavny_get')
  const id = action.id

  try {
    const hlavny = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_HLAVNY_SUCCESS, data: hlavny})

  } catch (e) {
    yield put({type: TYPES.FETCH_HLAVNY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchVarianty(action) {
  const url = Routing.generate('vct_varianty_get')
  const id = action.id

  try {
    const varianty = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_VARIANTY_SUCCESS, data: varianty})

  } catch (e) {
    yield put({type: TYPES.FETCH_VARIANTY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchPoznamky(action) {
  const url = Routing.generate('vct_poznamky_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_POZNAMKY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_POZNAMKY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchOcakavanaDodavkaTepla(action) {
  const url = Routing.generate('vct_ocakavana-dodavka_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_OCAKAVANA_DODAVKA_TEPLA_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_OCAKAVANA_DODAVKA_TEPLA_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchNormativneMnozstvo(action) {
  const url = Routing.generate('vct_normativne-mnozstvo_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_NORMATIVNE_MNOZSTVO_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_NORMATIVNE_MNOZSTVO_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchNakupTepla(action) {
  const url = Routing.generate('vct_nakup-tepla_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_NAKUP_TEPLA_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_NAKUP_TEPLA_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchSkutocneNaklady(action) {
  const url = Routing.generate('vct_skutocne-naklady_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_SKUTOCNE_NAKLADY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SKUTOCNE_NAKLADY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchOcakavaneNaklady(action) {
  const url = Routing.generate('vct_ocakavane-naklady_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_OCAKAVANE_NAKLADY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_OCAKAVANE_NAKLADY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchOcakavaneNakladyVarianty(action) {
  const url = Routing.generate('vct_ocakavane-naklady-varianty_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_OCAKAVANE_NAKLADY_VARIANTY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_OCAKAVANE_NAKLADY_VARIANTY_ERROR, data: e})
    console.error(e)
  }
}

// ---------------------------------------------------------------------
//         NEXT   F E T C H   REQUEST HERE
// ---------------------------------------------------------------------

export function* fetchVypocetBuniek(action) {
  const url = Routing.generate('vct_vypocet-buniek_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_VYPOCET_BUNIEK_ERROR, data: e})
    console.error(e)
  }
}

export function* processUploadedFile(action) {
  const url = Routing.generate('vct_upload')
  const data = action.data

  // ocakavana dodavka tepla
  if (data.uploadtype > 1) {

    try {
      yield call(delay, 1000)

      yield put(Notifications.info({
        message: 'Prebieha spracovanie súboru'
      }))

      yield call(delay, 1000)

      const udaje = yield call(Api.post, url, data)

      yield put({type: TYPES.PROCESS_UPLOADED_FILE_SUCCESS, data: udaje})

      yield put(Notifications.success({
        title: 'Spracovanie dokončené',
        message: 'Údaje zo súboru boli úspešne uložené do databázy'
      }))

      //yield put(loadMainEntryRequest(data))
      yield [
        put(fetchVyberPolozkyRequest()),
        put(fetchHlavnyRequest(data.id)),
        put(fetchOcakavanaDodavkaTeplaRequest(data.id)),
        // put(fetchSkutocneNakladyRequest(data.id)),
        put(fetchVypocetBuniekRequest(data.id)),
         put(fetchAktivitaRequest())
      ]

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

  // ostatne subory (ulozisko)
  if (data.uploadtype === 1) {

    try {
      const udaje = yield call(Api.post, url, data)

      yield put({type: TYPES.PROCESS_UPLOADED_FILE_SUCCESS, data: udaje})

      yield [
        //put(fetchSuboryRequest(data.id)),
        put(fetchAktivitaRequest())
      ]

    } catch (e) {
      yield put({type: TYPES.PROCESS_UPLOADED_FILE_ERROR, data: e})
      console.error(e)
    }
  }
}

// ---------------------------------------------------------------------
//         NEXT   P R O C E S S   REQUEST HERE
// ---------------------------------------------------------------------

export function* createHlavny(action) {
  const url = Routing.generate('vct_hlavny_post')
  const data = action.data

  try {
    yield put(Notifications.info({
      message: 'Prebieha tvorba hlavného záznamu'
    }))

    yield call(delay, 1000)

    const hlavny = yield call(Api.post, url, data)

    yield put({type: TYPES.CREATE_HLAVNY_SUCCESS, data: hlavny})

    yield put(Notifications.success({
      title: 'Vytvorenie hlavného záznamu dokončené',
      message: `Nový hlavný záznam sa podarilo úspešne vytvoriť. 
                Teraz chvíľu, prosím, počkajte. Prebehne jeho otvorenie.`
    }))

    yield call(delay, 1000)

    yield put(fetchVyberPolozkyRequest())
    yield put(loadMainEntryRequest(hlavny))

  } catch (e) {

    yield put({type: TYPES.CREATE_HLAVNY_ERROR, data: e})

    yield put(Notifications.error({
      title: 'Vytvorenie hlavného záznamu neúspešné',
      message: `Počas vytvárania hlavného záznamu nastala neočakávaná chyba.
                Skontrolujte zadaný rok a skúste znovu. V prípade potreby kontaktujte vývojára.`,
      autoDismiss: 20
    }))

    console.error(e)
  }
}

export function* createVariant(action) {
  const url = Routing.generate('vct_variant_post')
  const data = action.data
  const id = data.hlavny

  try {
    const variant = yield call(Api.post, url, data)

    yield put({type: TYPES.CREATE_VARIANT_SUCCESS, data: variant})

    yield [
      put(fetchOcakavanaDodavkaTeplaRequest(id)),
      put(fetchNormativneMnozstvoRequest(id)),
      put(fetchNakupTeplaRequest(id)),
      put(fetchSkutocneNakladyRequest(id)),
      put(fetchOcakavaneNakladyRequest(id)),
      put(fetchOcakavaneNakladyVariantyRequest(id)),
      put(fetchVypocetBuniekRequest(id))
    ]

  } catch (e) {
    yield put({type: TYPES.CREATE_VARIANT_ERROR, data: e})
    console.error(e)
  }
}

export function* createPristup(action) {
  const url = Routing.generate('vct_pristup_post')
  const data = action.data

  try {
    const pristup = yield call(Api.post, url, data)

    yield put({type: TYPES.CREATE_PRISTUP_SUCCESS, data: pristup})

    yield [
      //put(fetchMoznostiRequest()),
      //put(fetchOpravneniaRequest())
    ]

  } catch (e) {
    yield put({type: TYPES.CREATE_PRISTUP_ERROR, data: e})
    console.error(e)
  }
}

export function* updateHlavny(action) {
  const url = Routing.generate('vct_hlavny_update')
  const data = action.data
  const id = data.id

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    if (data.nct || data.sct) {
      yield put(fetchVypocetBuniekRequest(id))
    }

    if (data.stav === '1') {
      yield put(Notifications.success({
        title: 'Ukladanie údajov',
        message: `Uloženie vypočítaných údajov do databázy a zamknutie proti prepísaniu`
      }))
    }

    yield put({type: TYPES.UPDATE_HLAVNY_SUCCESS, data: update})
    yield put(fetchVyberPolozkyRequest())

  } catch (e) {
    yield put({type: TYPES.UPDATE_HLAVNY_ERROR, data: e})
    console.error(e)
  }
}

export function* updateVariant(action) {
  const url = Routing.generate('vct_variant_update')
  const data = action.data
  const id = data.id

  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_VARIANT_SUCCESS,
      data: update
    })

    yield [
      put(fetchOcakavanaDodavkaTeplaRequest(hlavny)),
      put(fetchNormativneMnozstvoRequest(hlavny)),
      put(fetchNakupTeplaRequest(hlavny)),
      put(fetchSkutocneNakladyRequest(hlavny)),
      put(fetchOcakavaneNakladyRequest(hlavny)),
      put(fetchOcakavaneNakladyVariantyRequest(hlavny)),
      put(fetchVypocetBuniekRequest(hlavny)),
      put(fetchAktivitaRequest())
    ]

  } catch (e) {
    yield put({types: TYPES.UPDATE_VARIANT_ERROR, data: e})
    console.error(e)
  }
}

export function* updatePristup(action) {
  const url = Routing.generate('vct_pristup_update')
  const data = action.data
  const id = data.id

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_PRISTUP_SUCCESS,
      data: update
    })

  } catch (e) {
    yield put({type: TYPES.UPDATE_PRISTUP_ERROR, data: e})
    console.error(e)
  }
}

export function* updatePoznamky(action) {
  const url = Routing.generate('vct_poznamky_update')
  const data = action.data
  const id = data.id
  const key = data.key

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_POZNAMKY_SUCCESS,
      data: {
        [key]: update
      }
    })

  } catch (e) {
    yield put({type: TYPES.UPDATE_POZNAMKY_ERROR, data: e})
    console.error(e)
  }
}

export function* updateNormativneMnozstvo(action) {
  const url = Routing.generate('vct_normativne-mnozstvo_update')
  const data = action.data
  const id = data.id
  const key = data.key

  const table = action.table
  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_NORMATIVNE_MNOZSTVO_SUCCESS,
      data: {
        [key]: update
      },
      table
    })

    yield put(fetchVypocetBuniekRequest(hlavny))
    yield put(fetchAktivitaRequest())

  } catch (e) {
    yield put({type: TYPES.UPDATE_NORMATIVNE_MNOZSTVO_ERROR, data: e})
    console.error(e)
  }
}

export function* updateNakupTepla(action) {
  const url = Routing.generate('vct_nakup-tepla_update')
  const data = action.data
  const id = data.id
  const key = data.key

  const table = action.table
  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_NAKUP_TEPLA_SUCCESS,
      data: {
        [key]: update
      },
      table
    })

    yield put(fetchVypocetBuniekRequest(hlavny))
    yield put(fetchAktivitaRequest())

  } catch (e) {
    yield put({type: TYPES.UPDATE_NAKUP_TEPLA_ERROR, data: e})
    console.error(e)
  }
}

export function* updateSkutocneNaklady(action) {
  const url = Routing.generate('vct_skutocne-naklady_update')
  const data = action.data
  const id = data.id
  const key = data.key

  const table = action.table
  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_SKUTOCNE_NAKLADY_SUCCESS,
      data: {
        [key]: update
      },
      table
    })

    yield put(fetchVypocetBuniekRequest(hlavny))
    yield put(fetchAktivitaRequest())

  } catch (e) {
    yield put({type: TYPES.UPDATE_SKUTOCNE_NAKLADY_ERROR, data: e})
    console.error(e)
  }
}

export function* updateOcakavaneNaklady(action) {
  const url = Routing.generate('vct_ocakavane-naklady_update')
  const data = action.data
  const id = data.id
  const key = data.key

  const table = action.table
  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_OCAKAVANE_NAKLADY_SUCCESS,
      data: {
        [key]: update
      },
      table
    })

    yield put(fetchVypocetBuniekRequest(hlavny))
    yield put(fetchAktivitaRequest())

  } catch (e) {
    yield put({type: TYPES.UPDATE_OCAKAVANE_NAKLADY_ERROR, data: e})
    console.error(e)
  }
}

export function* updateOcakavaneNakladyVarianty(action) {
  const url = Routing.generate('vct_ocakavane-naklady-varianty_update')
  const data = action.data
  const id = data.id

  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_OCAKAVANE_NAKLADY_VARIANTY_SUCCESS,
      data: update,
      id: id
    })

    yield put(fetchVypocetBuniekRequest(hlavny))
    yield put(fetchAktivitaRequest())

  } catch (e) {
    yield put({type: TYPES.UPDATE_OCAKAVANE_NAKLADY_VARIANTY_ERROR, data: e})
    console.error(e)
  }
}

// ---------------------------------------------------------------------
//         NEXT   U P D A T E   REQUEST HERE
// ---------------------------------------------------------------------

export function* deleteVariant(action) {
  const url = Routing.generate('vct_variant_delete')
  const data = action.data
  const id = data.id
  const hlavny = data.hlavny

  try {
    yield call(Api.delete, `${url}/${id}`)

    yield put({type: TYPES.DELETE_VARIANT_SUCCESS, id: id})

    yield [
      put(fetchOcakavanaDodavkaTeplaRequest(hlavny)),
      put(fetchNormativneMnozstvoRequest(hlavny)),
      put(fetchNakupTeplaRequest(hlavny)),
      put(fetchSkutocneNakladyRequest(hlavny)),
      put(fetchOcakavaneNakladyRequest(hlavny)),
      put(fetchOcakavaneNakladyVariantyRequest(hlavny)),
      put(fetchVypocetBuniekRequest(hlavny))
    ]

  } catch (e) {
    yield put({type: TYPES.DELETE_VARIANT_ERROR, data: e})
    console.error(e)
  }
}

export function* deletePristup(action) {
  const url = Routing.generate('vct_pristup_delete')
  const data = action.data
  const id = data.id

  try {
    yield call(Api.delete, `${url}/${id}`)

    yield put({type: TYPES.DELETE_PRISTUP_SUCCESS, id: id})

  } catch (e) {
    yield put({type: TYPES.DELETE_PRISTUP_ERROR, data: e})
    console.error(e)
  }
}