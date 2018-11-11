import * as TYPES from '../../../services/ActionTypes'

const initState = { // Dispecing.SCZTV_Zdroje
  ppc: [],
  tpv: [],
  slovnaft: [],
  vhj: [],
  teplota: [],
  max: 0,

  ppc_1h: [],
  tpv_1h: [],
  slovnaft_1h: [],
  vhj_1h: [],
  teplota_1h: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SCZT_VYCHOD_ZDROJE_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SCZT_VYCHOD_ZDROJE_SUCCESS:
      return {...state, loading: false,
        ppc: action.data['ppc'],
        tpv: action.data['tpv'],
        slovnaft: action.data['slovnaft'],
        vhj: action.data['vhj'],
        teplota: action.data['teplota'],
        max: action.data['max'],

        ppc_1h: action.data['ppc_1h'],
        tpv_1h: action.data['tpv_1h'],
        slovnaft_1h: action.data['slovnaft_1h'],
        vhj_1h: action.data['vhj_1h'],
        teplota_1h: action.data['teplota_1h']
      }
    case TYPES.FETCH_SCZT_VYCHOD_ZDROJE_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}