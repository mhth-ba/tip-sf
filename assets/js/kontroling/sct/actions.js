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

export const toggleVypocty = (toggle) => ({
  type: TYPES.TOGGLE_VYPOCTY,
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

export const fetchPoznamkyRequest = (id) => ({
  type: TYPES.FETCH_POZNAMKY_REQUEST,
  id
})

export const fetchKonstantySCTRequest = (id) => ({
  type: TYPES.FETCH_KONSTANTY_SCT_REQUEST,
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

export const fetchDelenieNakladovRequest = (id) => ({
  type: TYPES.FETCH_DELENIE_NAKLADOV_REQUEST,
  id
})

export const fetchKotolneRequest = (id) => ({
  type: TYPES.FETCH_KOTOLNE_REQUEST,
  id
})

export const fetchZemnyPlynRequest = (id) => ({
  type: TYPES.FETCH_ZEMNY_PLYN_REQUEST,
  id
})

export const fetchZemnyPlynKlucovanieRequest = (id) => ({
  type: TYPES.FETCH_ZEMNY_PLYN_KLUCOVANIE_REQUEST,
  id
})

export const fetchNormativneMnozstvoRequest = (id) => ({
  type: TYPES.FETCH_NORMATIVNE_MNOZSTVO_REQUEST,
  id
})

export const fetchOpravneneNakladyRequest = (id) => ({
  type: TYPES.FETCH_OPRAVNENE_NAKLADY_REQUEST,
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

export const fetchRegulovanaZlozkaRequest = (id) => ({
  type: TYPES.FETCH_REGULOVANA_ZLOZKA_REQUEST,
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

export const createPristupRequest = (data) => ({
  type: TYPES.CREATE_PRISTUP_REQUEST,
  data
})

export const createKotolnaRequest = (data) => ({
  type: TYPES.CREATE_KOTOLNA_REQUEST,
  data
})

export const updateHlavnyRequest = (data) => ({
  type: TYPES.UPDATE_HLAVNY_REQUEST,
  data
})

export const updatePristupRequest = (data) => ({
  type: TYPES.UPDATE_PRISTUP_REQUEST,
  data
})

export const updatePoznamkyRequest = (data) => ({
  type: TYPES.UPDATE_POZNAMKY_REQUEST,
  data
})

export const updateKonstantyRequest = (data) => ({
  type: TYPES.UPDATE_KONSTANTY_REQUEST,
  data
})

export const updateVyrobaElektrinyRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_VYROBA_ELEKTRINY_REQUEST,
  data, table, hlavny
})

export const updateDelenieNakladovRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_DELENIE_NAKLADOV_REQUEST,
  data, table, hlavny
})

export const updateKotolnaRequest = (data) => ({
  type: TYPES.UPDATE_KOTOLNA_REQUEST,
  data
})

export const updateParameterKotolneRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_PARAMETER_KOTOLNE_REQUEST,
  data, table, hlavny
})

export const updateUdajKotolneRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_UDAJ_KOTOLNE_REQUEST,
  data, table, hlavny
})

export const updateZemnyPlynRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_ZEMNY_PLYN_REQUEST,
  data, table, hlavny
})

export const updateZemnyPlynKlucovanieRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_ZEMNY_PLYN_KLUCOVANIE_REQUEST,
  data, table, hlavny
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

export const updateRegulovanaZlozkaRequest = (data, table, hlavny) => ({
  type: TYPES.UPDATE_REGULOVANA_ZLOZKA_REQUEST,
  data, table, hlavny
})

export const deletePristupRequest = (data) => ({
  type: TYPES.DELETE_PRISTUP_REQUEST,
  data
})

export const deleteKotolnaRequest = (data) => ({
  type: TYPES.DELETE_KOTOLNA_REQUEST,
  data
})

export function* fetchOpravnenia() {
  const url = Routing.generate('sct_opravnenia')

  try {
    const opravnenia = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_OPRAVNENIA_SUCCESS, data: opravnenia})

  } catch (e) {
    yield put({type: TYPES.FETCH_OPRAVNENIA_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchPristupy() {
  const url = Routing.generate('sct_pristupy_get')

  try {
    const pristupy = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_PRISTUPY_SUCCESS, data: pristupy})

  } catch (e) {
    yield put({type: TYPES.FETCH_PRISTUPY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchMoznosti() {
  const url = Routing.generate('sct_moznosti')

  try {
    const moznosti = yield call(Api.fetch, url)

    yield put({type: TYPES.FETCH_MOZNOSTI_SUCCESS, data: moznosti})

  } catch (e) {
    yield put({type: TYPES.FETCH_MOZNOSTI_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchVyberPolozky() {
  const url = Routing.generate('sct_hlavny_list')

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
  const url = Routing.generate('sct_hlavny_get')
  const data = action.data

  const id = data.id

  try {
    const udaje = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.LOAD_MAIN_ENTRY_SUCCESS, data: udaje})

    yield [
      put(fetchPoznamkyRequest(id)),
      put(fetchKonstantySCTRequest(id)),
      put(fetchDodavkaTeplaRequest(id)),
      put(fetchVyrobaElektrinyRequest(id)),
      put(fetchDelenieNakladovRequest(id)),
      put(fetchKotolneRequest(id)),
      put(fetchZemnyPlynRequest(id)),
      put(fetchZemnyPlynKlucovanieRequest(id)),
      put(fetchNormativneMnozstvoRequest(id)),
      put(fetchOpravneneNakladyRequest(id)),
      put(fetchNakupTeplaRequest(id)),
      put(fetchSkutocneNakladyRequest(id)),
      put(fetchRegulovanaZlozkaRequest(id)),

      put(fetchVypocetBuniekRequest(id))
    ]

    // ak je nastavene prepojenie na NCT, nacitat suvisiace data
    // pouzije sa ID hlavneho zaznamu pripojeneho NCT
    /*if (nct_dodavka !== null) {
      yield put(fetchPlanDodavkyTeplaRequest(nct_dodavka))
      yield put(fetchKonstantyNCTRequest(nct_dodavka))
    }*/

    yield call(delay, 2000)

    if (udaje.upload.dt === null) {
      yield put(Notifications.error({
        title: 'Chýba súbor s dodávkou tepla',
        message: 'XML súbor obsahujúci skutočnú dodávku tepla zatiaľ nebol nahratý',
        autoDismiss: 10
      }))
    }

    yield call(delay, 7000)

    if (udaje.upload.sn === null) {
      yield put(Notifications.error({
        title: 'Chýba súbor so spoločnými nákladmi',
        message: 'XML súbor obsahujúci skutočné spoločné náklady na teplo a elektrinu zatiaľ nebol nahratý',
        autoDismiss: 10
      }))
    }

    yield call(delay, 7000)

    if (udaje.upload.do === null) {
      yield put(Notifications.error({
        title: 'Chýba súbor s daňovými odpismi',
        message: 'XML súbor obsahujúci daňové odpisy zatiaľ nebol nahratý',
        autoDismiss: 10
      }))
    }

  } catch (e) {
    yield put({type: TYPES.LOAD_MAIN_ENTRY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchHlavny(action) {
  const url = Routing.generate('sct_hlavny_get')
  const id = action.id

  try {
    const hlavny = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_HLAVNY_SUCCESS, data: hlavny})

  } catch (e) {
    yield put({type: TYPES.FETCH_HLAVNY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchPoznamky(action) {
  const url = Routing.generate('sct_poznamky_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_POZNAMKY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_POZNAMKY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchKonstantySCT(action) {
  const url = Routing.generate('sct_konstanty_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_KONSTANTY_SCT_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_KONSTANTY_SCT_ERROR, data: e})
    console.error(e)
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
    console.error(e)
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
    console.error(e)
  }
}

export function* fetchDelenieNakladov(action) {
  const url = Routing.generate('sct_delenie-nakladov_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_DELENIE_NAKLADOV_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_DELENIE_NAKLADOV_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchKotolne(action) {
  const url = Routing.generate('sct_kotolne_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_KOTOLNE_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_KOTOLNE_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchZemnyPlyn(action) {
  const url = Routing.generate('sct_zemny-plyn_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_ZEMNY_PLYN_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_ZEMNY_PLYN_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchZemnyPlynKlucovanie(action) {
  const url = Routing.generate('sct_zemny-plyn-klucovanie_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_ZEMNY_PLYN_KLUCOVANIE_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_ZEMNY_PLYN_KLUCOVANIE_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchNormativneMnozstvo(action) {
  const url = Routing.generate('sct_normativne-mnozstvo_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_NORMATIVNE_MNOZSTVO_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_NORMATIVNE_MNOZSTVO_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchOpravneneNaklady(action) {
  const url = Routing.generate('sct_opravnene-naklady_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_OPRAVNENE_NAKLADY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_OPRAVNENE_NAKLADY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchNakupTepla(action) {
  const url = Routing.generate('sct_nakup-tepla_get')
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
  const url = Routing.generate('sct_skutocne-naklady_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_SKUTOCNE_NAKLADY_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_SKUTOCNE_NAKLADY_ERROR, data: e})
    console.error(e)
  }
}

export function* fetchRegulovanaZlozka(action) {
  const url = Routing.generate('sct_regulovana-zlozka_get')
  const id = action.id

  try {
    const polozky = yield call(Api.fetch, `${url}/${id}`)

    yield put({type: TYPES.FETCH_REGULOVANA_ZLOZKA_SUCCESS, data: polozky})

  } catch (e) {
    yield put({type: TYPES.FETCH_REGULOVANA_ZLOZKA_ERROR, data: e})
    console.error(e)
  }
}

// ---------------------------------------------------------------------
//         NEXT   F E T C H   REQUEST HERE
// ---------------------------------------------------------------------


export function* fetchVypocetBuniek(action) {
  const url = Routing.generate('sct_vypocet-buniek_get')
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
  const url = Routing.generate('sct_upload')
  const data = action.data

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
      put(fetchDodavkaTeplaRequest(data.id)),
      put(fetchSkutocneNakladyRequest(data.id)),
      put(fetchVypocetBuniekRequest(data.id))
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

// ---------------------------------------------------------------------
//         NEXT   P R O C E S S   REQUEST HERE
// ---------------------------------------------------------------------

export function* createHlavny(action) {
  const url = Routing.generate('sct_hlavny_post')
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

export function* createPristup(action) {
  const url = Routing.generate('sct_pristup_post')
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

export function* createKotolna(action) {
  const url = Routing.generate('sct_kotolne_post')
  const data = action.data

  try {
    const kotolna = yield call(Api.post, url, data)

    yield put({type: TYPES.CREATE_KOTOLNA_SUCCESS, data: kotolna})

    yield put(Notifications.success({
      title: 'Vytváranie kotolne dokončené',
      message: 'Novú kotolňu sa podarilo úspešne vytvoriť'
    }))

  } catch (e) {

    yield put({type: TYPES.CREATE_KOTOLNA_ERROR, data: e})

    yield put(Notifications.error({
      title: 'Vytváranie kotolne neúspešné',
      message: `Počas vytvárania kotolne nastala neočakávaná chyba. Skúste program zavrieť,
                znovu otvoriť a vytvoriť kotolňu znovu. V prípade potreby kontaktuje vývojára.`,
      autoDismiss: 12
    }))

    console.error(e)
  }
}

// ---------------------------------------------------------------------
//         NEXT   C R E A T E   REQUEST HERE
// ---------------------------------------------------------------------

export function* updateHlavny(action) {
  const url = Routing.generate('sct_hlavny_update')
  const data = action.data
  const id = data.id

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    if (data.nct_dodavka || data.nct_cena) {
      yield put(fetchVypocetBuniekRequest(id))
    }

    yield put({type: TYPES.UPDATE_HLAVNY_SUCCESS, data: update})
    yield put(fetchVyberPolozkyRequest())

  } catch (e) {
    yield put({type: TYPES.UPDATE_HLAVNY_ERROR, data: e})
    console.error(e)
  }
}

export function* updatePristup(action) {
  const url = Routing.generate('sct_pristup_update')
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
  const url = Routing.generate('sct_poznamky_update')
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

export function* updateKonstanty(action) {
  const url = Routing.generate('sct_konstanty_update')
  const data = action.data
  const id = data.id
  const key = data.key

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_KONSTANTY_SUCCESS,
      data: {
        [key]: update
      }
    })

  } catch (e) {
    yield put({type: TYPES.UPDATE_KONSTANTY_ERROR, data: e})
    console.error(e)
  }
}

export function* updateVyrobaElektriny(action) {
  const url = Routing.generate('sct_vyroba-elektriny_update')
  const data = action.data
  const id = data.id
  const key = data.key

  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_VYROBA_ELEKTRINY_SUCCESS,
      data: update,
      key: key
    })

    yield put(fetchVypocetBuniekRequest(hlavny))

  } catch (e) {
    yield put({type: TYPES.UPDATE_VYROBA_ELEKTRINY_ERROR, data: e})
    console.error(e)
  }
}

export function* updateDelenieNakladov(action) {
  const url = Routing.generate('sct_delenie-nakladov_update')
  const data = action.data
  const id = data.id
  const key = data.key

  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_DELENIE_NAKLADOV_SUCCESS,
      data: update,
      key: key
    })

    yield put(fetchVypocetBuniekRequest(hlavny))

  } catch (e) {
    yield put({type: TYPES.UPDATE_DELENIE_NAKLADOV_ERROR, data: e})
    console.error(e)
  }
}

export function* updateKotolna(action) {
  const url = Routing.generate('sct_kotolna_update')
  const data = action.data
  const id = data.id

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_KOTOLNA_SUCCESS,
      data: update,
      id: id
    })

  } catch(e) {
    yield put({type: TYPES.UPDATE_KOTOLNA_ERROR, data: e})
    console.error(e)
  }
}

export function* updateParameterKotolne(action) {
  const url = Routing.generate('sct_parameter-kotolne_update')
  const data = action.data
  const id = data.id

  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_PARAMETER_KOTOLNE_SUCCESS,
      data: update,
      id: id
    })

    yield [
      put(fetchNormativneMnozstvoRequest(hlavny)),
      put(fetchOpravneneNakladyRequest(hlavny)),
      put(fetchVypocetBuniekRequest(hlavny))
    ]

  } catch(e) {
    yield put({type: TYPES.UPDATE_PARAMETER_KOTOLNE_ERROR, data: e})
    console.error(e)
  }
}

export function* updateUdajKotolne(action) {
  const url = Routing.generate('sct_udaj-kotolne_update')
  const data = action.data
  const id = data.id

  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_UDAJ_KOTOLNE_SUCCESS,
      data: update,
      id: id
    })

    yield put(fetchVypocetBuniekRequest(hlavny))

  } catch (e) {
    yield put({type: TYPES.UPDATE_UDAJ_KOTOLNE_ERROR, data: e})
    console.error(e)
  }
}

export function* updateZemnyPlyn(action) {
  const url = Routing.generate('sct_zemny-plyn_update')
  const data = action.data
  const id = data.id
  const key = data.key

  const table = action.table
  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_ZEMNY_PLYN_SUCCESS,
      data: {
        [key]: update
      },
      table
    })

    yield put(fetchVypocetBuniekRequest(hlavny))

  } catch (e) {
    yield put({type: TYPES.UPDATE_ZEMNY_PLYN_ERROR, data: e})
    console.error(e)
  }
}

export function* updateZemnyPlynKlucovanie(action) {
  const url = Routing.generate('sct_zemny-plyn-klucovanie_update')
  const data = action.data
  const id = data.id
  const key = data.key

  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_ZEMNY_PLYN_KLUCOVANIE_SUCCESS,
      data: update,
      key: key
    })

    yield put(fetchVypocetBuniekRequest(hlavny))

  } catch (e) {
    yield put({type: TYPES.UPDATE_ZEMNY_PLYN_KLUCOVANIE_ERROR, data: e})
    console.error(e)
  }
}

export function* updateNormativneMnozstvo(action) {
  const url = Routing.generate('sct_normativne-mnozstvo_update')
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

  } catch (e) {
    yield put({type: TYPES.UPDATE_NORMATIVNE_MNOZSTVO_ERROR, data: e})
    console.error(e)
  }
}

export function* updateNakupTepla(action) {
  const url = Routing.generate('sct_nakup-tepla_update')
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

  } catch (e) {
    yield put({type: TYPES.UPDATE_NAKUP_TEPLA_ERROR, data: e})
    console.error(e)
  }
}

export function* updateSkutocneNaklady(action) {
  const url = Routing.generate('sct_skutocne-naklady_update')
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

    yield put(fetchSkutocneNakladyRequest(hlavny))
    yield put(fetchVypocetBuniekRequest(hlavny))

  } catch (e) {
    yield put({type: TYPES.UPDATE_SKUTOCNE_NAKLADY_ERROR, data: e})
    console.error(e)
  }
}

export function* updateRegulovanaZlozka(action) {
  const url = Routing.generate('sct_regulovana-zlozka_update')
  const data = action.data
  const id = data.id
  const key = data.key

  const table = action.table
  const hlavny = action.hlavny

  try {
    const update = yield call(Api.patch, `${url}/${id}`, data)

    yield put({
      type: TYPES.UPDATE_REGULOVANA_ZLOZKA_SUCCESS,
      data: {
        [key]: update
      },
      table
    })

    yield put(fetchRegulovanaZlozkaRequest(hlavny))
    yield put(fetchVypocetBuniekRequest(hlavny))

  } catch (e) {
    yield put({type: TYPES.UPDATE_REGULOVANA_ZLOZKA_ERROR, data: e})
    console.error(e)
  }
}

// ---------------------------------------------------------------------
//         NEXT   U P D A T E   REQUEST HERE
// ---------------------------------------------------------------------

export function* deletePristup(action) {
  const url = Routing.generate('sct_pristup_delete')
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

export function* deleteKotolna(action) {
  const url = Routing.generate('sct_kotolna_delete')
  const data = action.data
  const id = data.id
  const nazov = data.nazov

  try {
    yield call(Api.delete, `${url}/${id}`)

    yield put({
      type: TYPES.DELETE_KOTOLNA_SUCCESS,
      id: id
    })

    yield put(Notifications.success({
      title: 'Odstránenie kotolne dokončené',
      message: `Kotolňa ${nazov} bola odstránená`
    }))

  } catch(e) {

    yield put({type: TYPES.DELETE_KOTOLNA_ERROR, data: e})

    yield put(Notifications.error({
      title: 'Odstránenie kotolne neúspešné',
      message: `Kotolňu sa nepodarilo odstrániť. V prípade potreby kontaktuje vývojára.`,
      autoDismiss: 12
    }))

    console.error(e)
  }
}

// ---------------------------------------------------------------------
//         NEXT   D E L E T E   REQUEST HERE
// ---------------------------------------------------------------------