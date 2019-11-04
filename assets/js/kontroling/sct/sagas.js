import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all, call } from 'redux-saga/effects'

import * as TYPES from '../../services/ActionTypes'
import {
  fetchOpravnenia,
  fetchPristupy,
  fetchVyberPolozky,
  fetchMoznosti,
  fetchAktivita,

  loadMainEntry,

  fetchHlavny,
  fetchPoznamky,
  fetchSubory,
  fetchKonstantySCT,
  fetchDodavkaTepla,
  fetchVyrobaElektriny,
  fetchDelenieNakladov,
  fetchKotolne,
  fetchZemnyPlyn,
  fetchZemnyPlynKlucovanie,
  fetchNormativneMnozstvo,
  fetchOpravneneNaklady,
  fetchNakupTepla,
  fetchSkutocneNaklady,
  fetchRegulovanaZlozka,

  fetchVypocetBuniek,

  processUploadedFile,

  createHlavny,
  createPristup,
  createKotolna,

  updateHlavny,
  updatePristup,
  updatePoznamky,
  updateKonstanty,
  updateVyrobaElektriny,
  updateDelenieNakladov,
  updateKotolna,
  updateParameterKotolne,
  updateUdajKotolne,
  updateZemnyPlyn,
  updateZemnyPlynKlucovanie,
  updateNormativneMnozstvo,
  updateNakupTepla,
  updateSkutocneNaklady,
  updateRegulovanaZlozka,

  deletePristup,
  deleteKotolna,
  deleteSubor
} from './actions'

/*export function* helloSaga() {
    console.log('Hello sagas!')
}*/

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_PRISTUPY_REQUEST, fetchPristupy),
    takeLatest(TYPES.FETCH_VYBER_POLOZKY_REQUEST, fetchVyberPolozky),
    takeLatest(TYPES.FETCH_MOZNOSTI_REQUEST, fetchMoznosti),
    takeLatest(TYPES.FETCH_AKTIVITA_REQUEST, fetchAktivita),

    takeLatest(TYPES.LOAD_MAIN_ENTRY_REQUEST, loadMainEntry),

    takeLatest(TYPES.FETCH_HLAVNY_REQUEST, fetchHlavny),
    takeLatest(TYPES.FETCH_POZNAMKY_REQUEST, fetchPoznamky),
    takeLatest(TYPES.FETCH_SUBORY_REQUEST, fetchSubory),
    takeLatest(TYPES.FETCH_KONSTANTY_SCT_REQUEST, fetchKonstantySCT),
    takeLatest(TYPES.FETCH_DODAVKA_TEPLA_REQUEST, fetchDodavkaTepla),
    takeLatest(TYPES.FETCH_VYROBA_ELEKTRINY_REQUEST, fetchVyrobaElektriny),
    takeLatest(TYPES.FETCH_DELENIE_NAKLADOV_REQUEST, fetchDelenieNakladov),
    takeLatest(TYPES.FETCH_KOTOLNE_REQUEST, fetchKotolne),
    takeLatest(TYPES.FETCH_ZEMNY_PLYN_REQUEST, fetchZemnyPlyn),
    takeLatest(TYPES.FETCH_ZEMNY_PLYN_KLUCOVANIE_REQUEST, fetchZemnyPlynKlucovanie),
    takeLatest(TYPES.FETCH_NORMATIVNE_MNOZSTVO_REQUEST, fetchNormativneMnozstvo),
    takeLatest(TYPES.FETCH_OPRAVNENE_NAKLADY_REQUEST, fetchOpravneneNaklady),
    takeLatest(TYPES.FETCH_NAKUP_TEPLA_REQUEST, fetchNakupTepla),
    takeLatest(TYPES.FETCH_SKUTOCNE_NAKLADY_REQUEST, fetchSkutocneNaklady),
    takeLatest(TYPES.FETCH_REGULOVANA_ZLOZKA_REQUEST, fetchRegulovanaZlozka),

    takeLatest(TYPES.FETCH_VYPOCET_BUNIEK_REQUEST, fetchVypocetBuniek),

    takeLatest(TYPES.PROCESS_UPLOADED_FILE_REQUEST, processUploadedFile),

    takeEvery(TYPES.CREATE_HLAVNY_REQUEST, createHlavny),
    takeEvery(TYPES.CREATE_PRISTUP_REQUEST, createPristup),
    takeEvery(TYPES.CREATE_KOTOLNA_REQUEST, createKotolna),

    takeEvery(TYPES.UPDATE_HLAVNY_REQUEST, updateHlavny),
    takeEvery(TYPES.UPDATE_PRISTUP_REQUEST, updatePristup),
    takeEvery(TYPES.UPDATE_POZNAMKY_REQUEST, updatePoznamky),
    takeEvery(TYPES.UPDATE_KONSTANTY_REQUEST, updateKonstanty),
    takeEvery(TYPES.UPDATE_VYROBA_ELEKTRINY_REQUEST, updateVyrobaElektriny),
    takeEvery(TYPES.UPDATE_DELENIE_NAKLADOV_REQUEST, updateDelenieNakladov),
    takeEvery(TYPES.UPDATE_KOTOLNA_REQUEST, updateKotolna),
    takeEvery(TYPES.UPDATE_PARAMETER_KOTOLNE_REQUEST, updateParameterKotolne),
    takeEvery(TYPES.UPDATE_UDAJ_KOTOLNE_REQUEST, updateUdajKotolne),
    takeEvery(TYPES.UPDATE_ZEMNY_PLYN_REQUEST, updateZemnyPlyn),
    takeEvery(TYPES.UPDATE_ZEMNY_PLYN_KLUCOVANIE_REQUEST, updateZemnyPlynKlucovanie),
    takeEvery(TYPES.UPDATE_NORMATIVNE_MNOZSTVO_REQUEST, updateNormativneMnozstvo),
    takeEvery(TYPES.UPDATE_NAKUP_TEPLA_REQUEST, updateNakupTepla),
    takeEvery(TYPES.UPDATE_SKUTOCNE_NAKLADY_REQUEST, updateSkutocneNaklady),
    takeEvery(TYPES.UPDATE_REGULOVANA_ZLOZKA_REQUEST, updateRegulovanaZlozka),

    takeEvery(TYPES.DELETE_PRISTUP_REQUEST, deletePristup),
    takeEvery(TYPES.DELETE_KOTOLNA_REQUEST, deleteKotolna),
    takeEvery(TYPES.DELETE_SUBOR_REQUEST, deleteSubor)
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
