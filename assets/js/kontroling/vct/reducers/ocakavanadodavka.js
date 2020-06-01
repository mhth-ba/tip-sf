import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.VCT_OcakavanaDodavka

  vychod: {
    p_kwh: 0,
    p_kw: 0,
    s_kwh: 0,
    s_kw: 0,
    px_kwh: 0,
    px_kw: 0,
    r_kwh: 0,
    r_kw: 0,
    f_kwh: 0,
    f_kw: 0
  },

  zapad: {
    p_kwh: 0,
    p_kw: 0,
    s_kwh: 0,
    s_kw: 0,
    px_kwh: 0,
    px_kw: 0,
    r_kwh: 0,
    r_kw: 0,
    f_kwh: 0,
    f_kw: 0
  },

  bat: {
    p_kwh: 0,
    p_kw: 0,
    s_kwh: 0,
    s_kw: 0,
    px_kwh: 0,
    px_kw: 0,
    r_kwh: 0,
    r_kw: 0,
    f_kwh: 0,
    f_kw: 0
  },

  varianty: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_OCAKAVANA_DODAVKA_TEPLA_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_OCAKAVANA_DODAVKA_TEPLA_SUCCESS:
      return {...state, loading: false,

        vychod: {
          ...state.vychod,
          ...action.data.find(x => x['zdroj'].id === 15)
        },

        zapad: {
          ...state.zapad,
          ...action.data.find(x => x['zdroj'].id === 16)
        }
      }
    case TYPES.FETCH_OCAKAVANA_DODAVKA_TEPLA_ERROR:
      return {...state, loading: false, error: action.data}
    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        vychod: {
          ...state.vychod,
          f_kwh: action.data['bunky'].find(x => x.id === 'ODT_FDT_V_F_KWH').hodnota,
          f_kw: action.data['bunky'].find(x => x.id === 'ODT_FDT_V_F_KW').hodnota
        },

        zapad: {
          ...state.zapad,
          f_kwh: action.data['bunky'].find(x => x.id === 'ODT_FDT_Z_F_KWH').hodnota,
          f_kw: action.data['bunky'].find(x => x.id === 'ODT_FDT_Z_F_KW').hodnota
        },

        bat: {
          ...state.bat,
          p_kwh: action.data['bunky'].find(x => x.id === 'ODT_FDT_B_P_KWH').hodnota,
          p_kw: action.data['bunky'].find(x => x.id === 'ODT_FDT_B_P_KW').hodnota,
          s_kwh: action.data['bunky'].find(x => x.id === 'ODT_FDT_B_S_KWH').hodnota,
          s_kw: action.data['bunky'].find(x => x.id === 'ODT_FDT_B_S_KW').hodnota,
          r_kwh: action.data['bunky'].find(x => x.id === 'ODT_FDT_B_R_KWH').hodnota,
          r_kw: action.data['bunky'].find(x => x.id === 'ODT_FDT_B_R_KW').hodnota,
          f_kwh: action.data['bunky'].find(x => x.id === 'ODT_FDT_B_F_KWH').hodnota,
          f_kw: action.data['bunky'].find(x => x.id === 'ODT_FDT_B_F_KW').hodnota
        },

        varianty: action.data['varianty']['FDT']
      }
    case TYPES.UPDATE_VARIANT_SUCCESS:
      // TODO aktualizovat hodnotu percenta
      return {...state, varianty: [...state.varianty]}
    default:
      return state
  }
}
