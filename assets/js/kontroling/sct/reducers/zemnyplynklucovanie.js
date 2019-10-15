import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_ZemnyPlynKlucovanie

  kvet_tpv: {           // KVET na TpV
    suma: 0,        // fakturovane naklady (user input)
    kfn: 0          // klucovane fakturovane naklady (vypocet)
  },

  bez_kvet_tpv: {       // bez KVET na TpV
    suma: 0,
    kfn: 0
  },

  kvet_tpz: {           // KVET na TpZ
    suma: 0,
    kfn: 0
  },

  bez_kvet_tpz: {       // bez KVET na TpZ
    suma: 0,
    kfn: 0
  },

  vhj: {
    fn: 0,              // fakturovane naklady (link)
    kfn: 0              // klucovane fakturovane naklady (vypocet)
  },

  pk: {
    fn: 0,
    kfn: 0
  },

  kfn_spolu: {           // zemny plyn klucovane fakturovane naklady spolu
    fn: 0,
    kfn: 0
  },

  bat_spolu: {          // sumar bat (vyrobne + kotolne)
    objem_m3: 0,
    objem_mwh: 0,
    nbsd: 0,
    sd: 0,
    pdm: 0,
    cn: 0
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_ZEMNY_PLYN_KLUCOVANIE_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_ZEMNY_PLYN_KLUCOVANIE_SUCCESS:
      return {...state, loading: false,
        kvet_tpv: action.data.find(x => x['polozka'].id === 401),
        bez_kvet_tpv: action.data.find(x => x['polozka'].id === 402),
        kvet_tpz: action.data.find(x => x['polozka'].id === 403),
        bez_kvet_tpz: action.data.find(x => x['polozka'].id === 404)
      }

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,
        kvet_tpv: {
          ...state.kvet_tpv,
          kfn: action.data['bunky'].find(x => x.id === 'FZP_KFN_KVET_TPV_K').hodnota
        },
        bez_kvet_tpv: {
          ...state.bez_kvet_tpv,
          kfn: action.data['bunky'].find(x => x.id === 'FZP_KFN_BKVET_TPV_K').hodnota
        },
        kvet_tpz: {
          ...state.kvet_tpz,
          kfn: action.data['bunky'].find(x => x.id === 'FZP_KFN_KVET_TPZ_K').hodnota
        },
        bez_kvet_tpz: {
          ...state.bez_kvet_tpz,
          kfn: action.data['bunky'].find(x => x.id === 'FZP_KFN_BKVET_TPZ_K').hodnota
        },
        vhj: {
          fn: action.data['bunky'].find(x => x.id === 'FZP_KFN_VHJ_F').hodnota,
          kfn: action.data['bunky'].find(x => x.id === 'FZP_KFN_VHJ_K').hodnota
        },
        pk: {
          fn: action.data['bunky'].find(x => x.id === 'FZP_KFN_PK_F').hodnota,
          kfn: action.data['bunky'].find(x => x.id === 'FZP_KFN_PK_K').hodnota
        },
        kfn_spolu: {
          fn: action.data['bunky'].find(x => x.id === 'FZP_KFN_SPOLU_F').hodnota,
          kfn: action.data['bunky'].find(x => x.id === 'FZP_KFN_SPOLU_K').hodnota
        },
        bat_spolu: {
          objem_m3: action.data['bunky'].find(x => x.id === 'FZP_SB_M3').hodnota,
          objem_mwh: action.data['bunky'].find(x => x.id === 'FZP_SB_MWH').hodnota,
          nbsd: action.data['bunky'].find(x => x.id === 'FZP_SB_NBSD').hodnota,
          sd: action.data['bunky'].find(x => x.id === 'FZP_SB_SD').hodnota,
          pdm: action.data['bunky'].find(x => x.id === 'FZP_SB_PDM').hodnota,
          cn: action.data['bunky'].find(x => x.id === 'FZP_SB_CN').hodnota
        }
      }

    case TYPES.UPDATE_ZEMNY_PLYN_KLUCOVANIE_SUCCESS:
      return {...state,
        [action.key]: {
          ...state[action.key],
          ...action.data
        }
      }

    case TYPES.UPDATE_ZEMNY_PLYN_KLUCOVANIE_ERROR:
      return {...state, error: action.data}

    default:
      return state
  }
}