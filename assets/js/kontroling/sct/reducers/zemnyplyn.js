import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_ZemnyPlyn

  tpv: {
    januar: {
      objem_m3: 0,  // objem fakturovaneho zemneho plynu v m3
      objem_mwh: 0, // fakturovany zemny plyn v MWh
      sopo: 0,      // sadzba za odobraty plyn        | ceny za sluzby obchodnika
      fmso: 0,      // fixna mesacna sadzba           | ceny za sluzby obchodnika
      sopp: 0,      // sadzba za odobraty plyn        | ceny za sluzby prepravy
      fmsp: 0,      // fixna mesacna sadzba           | ceny za sluby prepravy
      sopd: 0,      // sadzba za odobraty plyn        | ceny za sluzby distribucie
      fmsd: 0,      // fixna mesacna sadzba           | ceny za sluzby distribucie
      vsd: 0,       // rocna sadzba za vykon/kapacitu | ceny za sluzby distribucie
      dan_mwh: 0,   // spotrebna dan [MWh]
      dan_eur: 0,   // spotrebna dan [€]
      pdm: 0,       // prekrocenie dohodnutych mnozstiev
      naklady: 0    // naklady spolu
    },
    februar: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    marec: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    april: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    maj: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    jun: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    jul: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    august: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    september: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    oktober: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    november: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    december: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    spolu: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    cena: { objem_m3: 0, objem_mwh: 0 } // priemerná cena
  },

  tpz: {
    januar: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    februar: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    marec: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    april: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    maj: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    jun: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    jul: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    august: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    september: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    oktober: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    november: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    december: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    spolu: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    cena: { objem_m3: 0, objem_mwh: 0 } // priemerná cena
  },

  vhj: {
    januar: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    februar: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    marec: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    april: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    maj: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    jun: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    jul: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    august: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    september: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    oktober: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    november: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    december: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    spolu: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    cena: { objem_m3: 0, objem_mwh: 0 } // priemerná cena
  },

  vyrobne: {
    januar: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    februar: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    marec: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    april: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    maj: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    jun: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    jul: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    august: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    september: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    oktober: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    november: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    december: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    spolu: { objem_m3: 0, objem_mwh: 0, sopo: 0, fmso: 0, sopp: 0, fmsp: 0, sopd: 0, fmsd: 0, vsd: 0, dan_mwh: 0, dan_eur: 0, pdm: 0, naklady: 0 },
    cena: { objem_m3: 0, objem_mwh: 0 } // priemerná cena
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_ZEMNY_PLYN_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_ZEMNY_PLYN_SUCCESS:
      return {...state, loading: false,

        tpv: {
          ...state.tpv,
          januar: { ...state.tpv.januar, ...action.data['vychod'].find(x => x['mesiac'] === 1) },
          februar: { ...state.tpv.februar, ...action.data['vychod'].find(x => x['mesiac'] === 2) },
          marec: { ...state.tpv.marec, ...action.data['vychod'].find(x => x['mesiac'] === 3) },
          april: { ...state.tpv.april, ...action.data['vychod'].find(x => x['mesiac'] === 4) },
          maj: { ...state.tpv.maj, ...action.data['vychod'].find(x => x['mesiac'] === 5) },
          jun: { ...state.tpv.jun, ...action.data['vychod'].find(x => x['mesiac'] === 6) },
          jul: { ...state.tpv.jul, ...action.data['vychod'].find(x => x['mesiac'] === 7) },
          august: { ...state.tpv.august, ...action.data['vychod'].find(x => x['mesiac'] === 8) },
          september: { ...state.tpv.september, ...action.data['vychod'].find(x => x['mesiac'] === 9) },
          oktober: { ...state.tpv.oktober, ...action.data['vychod'].find(x => x['mesiac'] === 10) },
          november: { ...state.tpv.november, ...action.data['vychod'].find(x => x['mesiac'] === 11) },
          december: { ...state.tpv.december, ...action.data['vychod'].find(x => x['mesiac'] === 12) }
        },
        
        tpz: {
          ...state.tpz,
          januar: { ...state.tpz.januar, ...action.data['zapad'].find(x => x['mesiac'] === 1) },
          februar: { ...state.tpz.februar, ...action.data['zapad'].find(x => x['mesiac'] === 2) },
          marec: { ...state.tpz.marec, ...action.data['zapad'].find(x => x['mesiac'] === 3) },
          april: { ...state.tpz.april, ...action.data['zapad'].find(x => x['mesiac'] === 4) },
          maj: { ...state.tpz.maj, ...action.data['zapad'].find(x => x['mesiac'] === 5) },
          jun: { ...state.tpz.jun, ...action.data['zapad'].find(x => x['mesiac'] === 6) },
          jul: { ...state.tpz.jul, ...action.data['zapad'].find(x => x['mesiac'] === 7) },
          august: { ...state.tpz.august, ...action.data['zapad'].find(x => x['mesiac'] === 8) },
          september: { ...state.tpz.september, ...action.data['zapad'].find(x => x['mesiac'] === 9) },
          oktober: { ...state.tpz.oktober, ...action.data['zapad'].find(x => x['mesiac'] === 10) },
          november: { ...state.tpz.november, ...action.data['zapad'].find(x => x['mesiac'] === 11) },
          december: { ...state.tpz.december, ...action.data['zapad'].find(x => x['mesiac'] === 12) }
        },
        
        vhj: {
          ...state.vhj,
          januar: { ...state.vhj.januar, ...action.data['juh'].find(x => x['mesiac'] === 1) },
          februar: { ...state.vhj.februar, ...action.data['juh'].find(x => x['mesiac'] === 2) },
          marec: { ...state.vhj.marec, ...action.data['juh'].find(x => x['mesiac'] === 3) },
          april: { ...state.vhj.april, ...action.data['juh'].find(x => x['mesiac'] === 4) },
          maj: { ...state.vhj.maj, ...action.data['juh'].find(x => x['mesiac'] === 5) },
          jun: { ...state.vhj.jun, ...action.data['juh'].find(x => x['mesiac'] === 6) },
          jul: { ...state.vhj.jul, ...action.data['juh'].find(x => x['mesiac'] === 7) },
          august: { ...state.vhj.august, ...action.data['juh'].find(x => x['mesiac'] === 8) },
          september: { ...state.vhj.september, ...action.data['juh'].find(x => x['mesiac'] === 9) },
          oktober: { ...state.vhj.oktober, ...action.data['juh'].find(x => x['mesiac'] === 10) },
          november: { ...state.vhj.november, ...action.data['juh'].find(x => x['mesiac'] === 11) },
          december: { ...state.vhj.december, ...action.data['juh'].find(x => x['mesiac'] === 12) }
        }
      }

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,
        
        tpv: {
          ...state.tpv,
          januar: {
            ...state.tpv.januar,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_JAN_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_JAN_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_JAN_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_JAN_NS').hodnota
          },
          februar: {
            ...state.tpv.februar,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_FEB_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_FEB_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_FEB_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_FEB_NS').hodnota
          },
          marec: {
            ...state.tpv.marec,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_MAR_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_MAR_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_MAR_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_MAR_NS').hodnota
          },
          april: {
            ...state.tpv.april,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_APR_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_APR_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_APR_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_APR_NS').hodnota
          },
          maj: {
            ...state.tpv.maj,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_MAJ_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_MAJ_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_MAJ_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_MAJ_NS').hodnota
          },
          jun: {
            ...state.tpv.jun,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_JUN_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_JUN_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_JUN_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_JUN_NS').hodnota
          },
          jul: {
            ...state.tpv.jul,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_JUL_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_JUL_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_JUL_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_JUL_NS').hodnota
          },
          august: {
            ...state.tpv.august,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_AUG_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_AUG_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_AUG_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_AUG_NS').hodnota
          },
          september: {
            ...state.tpv.september,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_SEP_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_SEP_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_SEP_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_SEP_NS').hodnota
          },
          oktober: {
            ...state.tpv.oktober,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_OKT_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_OKT_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_OKT_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_OKT_NS').hodnota
          },
          november: {
            ...state.tpv.november,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_NOV_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_NOV_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_NOV_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_NOV_NS').hodnota
          },
          december: {
            ...state.tpv.december,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_DEC_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_DEC_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_DEC_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_DEC_NS').hodnota
          },
          spolu: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPV_DEC_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPV_DEC_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPV_DEC_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPV_SPO_NS').hodnota
          },
          cena: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_TPV_PC_EUR_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_TPV_PC_EUR_MWH').hodnota 
          }
        },

        tpz: {
          ...state.tpz,
          januar: {
            ...state.tpz.januar,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JAN_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JAN_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JAN_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JAN_NS').hodnota
          },
          februar: {
            ...state.tpz.februar,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_FEB_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_FEB_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_FEB_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_FEB_NS').hodnota
          },
          marec: {
            ...state.tpz.marec,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_MAR_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_MAR_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_MAR_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_MAR_NS').hodnota
          },
          april: {
            ...state.tpz.april,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_APR_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_APR_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_APR_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_APR_NS').hodnota
          },
          maj: {
            ...state.tpz.maj,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_MAJ_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_MAJ_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_MAJ_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_MAJ_NS').hodnota
          },
          jun: {
            ...state.tpz.jun,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JUN_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JUN_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JUN_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JUN_NS').hodnota
          },
          jul: {
            ...state.tpz.jul,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JUL_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JUL_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JUL_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_JUL_NS').hodnota
          },
          august: {
            ...state.tpz.august,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_AUG_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_AUG_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_AUG_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_AUG_NS').hodnota
          },
          september: {
            ...state.tpz.september,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SEP_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SEP_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SEP_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SEP_NS').hodnota
          },
          oktober: {
            ...state.tpz.oktober,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_OKT_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_OKT_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_OKT_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_OKT_NS').hodnota
          },
          november: {
            ...state.tpz.november,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_NOV_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_NOV_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_NOV_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_NOV_NS').hodnota
          },
          december: {
            ...state.tpz.december,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_DEC_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_DEC_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_DEC_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_DEC_NS').hodnota
          },
          spolu: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_TPZ_DEC_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_DEC_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_DEC_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_TPZ_SPO_NS').hodnota
          },
          cena: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_TPZ_PC_EUR_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_TPZ_PC_EUR_MWH').hodnota
          }
        },

        vhj: {
          ...state.vhj,
          januar: {
            ...state.vhj.januar,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JAN_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JAN_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JAN_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JAN_NS').hodnota
          },
          februar: {
            ...state.vhj.februar,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_FEB_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_FEB_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_FEB_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_FEB_NS').hodnota
          },
          marec: {
            ...state.vhj.marec,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_MAR_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_MAR_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_MAR_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_MAR_NS').hodnota
          },
          april: {
            ...state.vhj.april,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_APR_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_APR_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_APR_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_APR_NS').hodnota
          },
          maj: {
            ...state.vhj.maj,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_MAJ_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_MAJ_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_MAJ_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_MAJ_NS').hodnota
          },
          jun: {
            ...state.vhj.jun,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JUN_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JUN_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JUN_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JUN_NS').hodnota
          },
          jul: {
            ...state.vhj.jul,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JUL_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JUL_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JUL_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_JUL_NS').hodnota
          },
          august: {
            ...state.vhj.august,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_AUG_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_AUG_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_AUG_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_AUG_NS').hodnota
          },
          september: {
            ...state.vhj.september,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SEP_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SEP_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SEP_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SEP_NS').hodnota
          },
          oktober: {
            ...state.vhj.oktober,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_OKT_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_OKT_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_OKT_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_OKT_NS').hodnota
          },
          november: {
            ...state.vhj.november,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_NOV_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_NOV_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_NOV_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_NOV_NS').hodnota
          },
          december: {
            ...state.vhj.december,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_DEC_SOPO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_DEC_SOPP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_DEC_SOPD').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_DEC_NS').hodnota
          },
          spolu: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VHJ_DEC_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_DEC_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_DEC_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VHJ_SPO_NS').hodnota
          },
          cena: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VHJ_PC_EUR_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VHJ_PC_EUR_MWH').hodnota
          }
        },

        vyrobne: {
          januar: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_JAN_NS').hodnota
          },
          februar: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_FEB_NS').hodnota
          },
          marec: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAR_NS').hodnota
          },
          april: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_APR_NS').hodnota
          },
          maj: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_MAJ_NS').hodnota
          },
          jun: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUN_NS').hodnota
          },
          jul: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_JUL_NS').hodnota
          },
          august: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_AUG_NS').hodnota
          },
          september: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_SEP_NS').hodnota
          },
          oktober: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_OKT_NS').hodnota
          },
          november: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_NOV_NS').hodnota
          },
          december: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_DEC_NS').hodnota
          },
          spolu: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_OBJ_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_OBJ_MWH').hodnota,
            sopo: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_SOPO').hodnota,
            fmso: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_FMSO').hodnota,
            sopp: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_SOPP').hodnota,
            fmsp: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_FMSP').hodnota,
            sopd: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_SOPD').hodnota,
            fmsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_FMSD').hodnota,
            vsd: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_VSD').hodnota,
            dan_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_DAN_MWH').hodnota,
            dan_eur: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_DAN_EUR').hodnota,
            pdm: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_PDM').hodnota,
            naklady: action.data['bunky'].find(x => x.id === 'FZP_VYR_SPO_NS').hodnota
          },
          cena: {
            objem_m3: action.data['bunky'].find(x => x.id === 'FZP_VYR_PC_EUR_M3').hodnota,
            objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_VYR_PC_EUR_MWH').hodnota
          }
        }
      }

    case TYPES.UPDATE_ZEMNY_PLYN_SUCCESS:
      return {...state,
        [action.table]: {
          ...state[action.table],
          ...action.data
        }
      }

    case TYPES.UPDATE_ZEMNY_PLYN_ERROR:
      return {...state, error: action.data}

    default:
      return state
  }
}