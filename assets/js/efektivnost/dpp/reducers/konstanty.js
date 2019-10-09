import * as TYPES from '../../../services/ActionTypes'

const initState = { // Efektivnost.DPP_Konstanty
  vykon_max_tpv: 0,
  vykon_max_tpz: 0,
  krivka_vychod: 0,
  krivka_zapad: 0,
  vyhrevnost_zp: 0,
  ucinnost_tpv: 0,
  ucinnost_vhj: 0,
  ucinnost_tpz: 0,
  dmm_tpv: 0,
  dmm_vhj: 0,
  dmm_tpz: 0,
  dmm_limit: 0,
  ppc_min: 0,
  ppc_max: 0,
  slovnaft_min: 0,
  slovnaft_max: 0,
  ppc_para: 0,
  ppc_zmluva: 0,
  ppc_hv: 0,

  updating: {
    vykon_max_tpv: false,
    vykon_max_tpz: false,
    krivka_vychod: false,
    krivka_zapad: false,
    vyhrevnost_zp: false,
    ucinnost_tpv: false,
    ucinnost_vhj: false,
    ucinnost_tpz: false,
    dmm_tpv: false,
    dmm_vhj: false,
    dmm_tpz: false,
    dmm_limit: false,
    ppc_min: false,
    ppc_max: false,
    slovnaft_min: false,
    slovnaft_max: false,
    ppc_para: false,
    ppc_zmluva: false
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_KONSTANTY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_KONSTANTY_SUCCESS:
      return {...state, loading: false, ...action.data[0]}
    case TYPES.UPDATE_KONSTANTY_REQUEST:
      return {...state, updating: {
        ...state.updating,
        [action.data.field]: true
      }}
    case TYPES.UPDATE_KONSTANTY_SUCCESS:
      return {...state, ...action.data, updating: {
        ...state.updating,
        [action.field]: false
      }}
    case TYPES.UPDATE_KONSTANTY_ERROR:
      return {...state, error: action.data}
    default:
      return state
  }
}