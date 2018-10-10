import * as TYPES from '../../../services/ActionTypes'

const initState = { // Dispecing.SCZTV_Vykon
  plan: [],
  termis: [],
  termis_ost: [],
  zdroje: [],
  ost: [],
  komunikacia: [],
  teplota: [],
  extremy_vykon: [],
  extremy_teplota: [],
  extremy_komunikacia: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SCZT_VYCHOD_VYKON_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SCZT_VYCHOD_VYKON_SUCCESS:
      return {...state, loading: false,
        plan: action.data['plan'],
        termis: action.data['termis'],
        termis_ost: action.data['termis_ost'],
        zdroje: action.data['zdroje'],
        ost: action.data['ost'],
        komunikacia: action.data['komunikacia'],
        teplota: action.data['teplota'],
        extremy_vykon: action.data['extremy_vykon'],
        extremy_teplota: action.data['extremy_teplota'],
        extremy_komunikacia: action.data['extremy_komunikacia']
      }
    case TYPES.FETCH_SCZT_VYCHOD_VYKON_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}