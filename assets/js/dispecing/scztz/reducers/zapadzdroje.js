import * as TYPES from '../../../services/ActionTypes'

const initState = { // Dispecing.SCZTZ_Zdroje
  tpz: [],
  cw: [],
  teplota: [],
  max: 0,

  tpz_1h: [],
  cw_1h: [],
  teplota_1h: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SCZT_ZAPAD_ZDROJE_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SCZT_ZAPAD_ZDROJE_SUCCESS:
      return {...state, loading: false,
        tpz: action.data['tpz'],
        cw: action.data['cw'],
        teplota: action.data['teplota'],
        max: action.data['max'],

        tpz_1h: action.data['tpz_1h'],
        cw_1h: action.data['cw_1h'],
        teplota_1h: action.data['teplota_1h']
      }
    case TYPES.FETCH_SCZT_ZAPAD_ZDROJE_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}