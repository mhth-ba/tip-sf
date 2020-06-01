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
  fetchVarianty,
  fetchPoznamky,
  fetchOcakavanaDodavkaTepla,
  fetchNormativneMnozstvo,
  fetchNakupTepla,
  fetchSkutocneNaklady,
  fetchOcakavaneNaklady,
  fetchOcakavaneNakladyVarianty,
  fetchVypocetBuniek,

  processUploadedFile,

  createHlavny,
  createVariant,
  createPristup,

  updateHlavny,
  updateVariant,
  updatePristup,
  updatePoznamky,
  updateNormativneMnozstvo,
  updateNakupTepla,
  updateSkutocneNaklady,
  updateOcakavaneNaklady,
  updateOcakavaneNakladyVarianty,

  deleteVariant,
  deletePristup
} from './actions'

function* mySaga() {
  yield all([
    // FETCH
    takeLatest(TYPES.FETCH_OPRAVNENIA_REQUEST, fetchOpravnenia),
    takeLatest(TYPES.FETCH_PRISTUPY_REQUEST, fetchPristupy),
    takeLatest(TYPES.FETCH_VYBER_POLOZKY_REQUEST, fetchVyberPolozky),
    takeLatest(TYPES.FETCH_MOZNOSTI_REQUEST, fetchMoznosti),
    takeLatest(TYPES.FETCH_AKTIVITA_REQUEST, fetchAktivita),

    takeLatest(TYPES.LOAD_MAIN_ENTRY_REQUEST, loadMainEntry),

    takeLatest(TYPES.FETCH_HLAVNY_REQUEST, fetchHlavny),
    takeLatest(TYPES.FETCH_VARIANTY_REQUEST, fetchVarianty),
    takeLatest(TYPES.FETCH_POZNAMKY_REQUEST, fetchPoznamky),
    takeLatest(TYPES.FETCH_OCAKAVANA_DODAVKA_TEPLA_REQUEST, fetchOcakavanaDodavkaTepla),
    takeLatest(TYPES.FETCH_NORMATIVNE_MNOZSTVO_REQUEST, fetchNormativneMnozstvo),
    takeLatest(TYPES.FETCH_NAKUP_TEPLA_REQUEST, fetchNakupTepla),
    takeLatest(TYPES.FETCH_SKUTOCNE_NAKLADY_REQUEST, fetchSkutocneNaklady),
    takeLatest(TYPES.FETCH_OCAKAVANE_NAKLADY_REQUEST, fetchOcakavaneNaklady),
    takeLatest(TYPES.FETCH_OCAKAVANE_NAKLADY_VARIANTY_REQUEST, fetchOcakavaneNakladyVarianty),
    takeLatest(TYPES.FETCH_VYPOCET_BUNIEK_REQUEST, fetchVypocetBuniek),

    takeLatest(TYPES.PROCESS_UPLOADED_FILE_REQUEST, processUploadedFile),

    // CREATE
    takeEvery(TYPES.CREATE_HLAVNY_REQUEST, createHlavny),
    takeEvery(TYPES.CREATE_VARIANT_REQUEST, createVariant),
    takeEvery(TYPES.CREATE_PRISTUP_REQUEST, createPristup),

    // UPDATE
    takeEvery(TYPES.UPDATE_HLAVNY_REQUEST, updateHlavny),
    takeEvery(TYPES.UPDATE_VARIANT_REQUEST, updateVariant),
    takeEvery(TYPES.UPDATE_PRISTUP_REQUEST, updatePristup),
    takeEvery(TYPES.UPDATE_POZNAMKY_REQUEST, updatePoznamky),
    takeEvery(TYPES.UPDATE_NORMATIVNE_MNOZSTVO_REQUEST, updateNormativneMnozstvo),
    takeEvery(TYPES.UPDATE_NAKUP_TEPLA_REQUEST, updateNakupTepla),
    takeEvery(TYPES.UPDATE_SKUTOCNE_NAKLADY_REQUEST, updateSkutocneNaklady),
    takeEvery(TYPES.UPDATE_OCAKAVANE_NAKLADY_REQUEST, updateOcakavaneNaklady),
    takeEvery(TYPES.UPDATE_OCAKAVANE_NAKLADY_VARIANTY_REQUEST, updateOcakavaneNakladyVarianty),

    // DELETE
    takeEvery(TYPES.DELETE_VARIANT_REQUEST, deleteVariant),
    takeEvery(TYPES.DELETE_PRISTUP_REQUEST, deletePristup)
  ])
}

export default mySaga
