import * as TYPES from '../../../services/ActionTypes'

const initState = { // Dispecing.SCZTV_Zariadenia
  datum: [],
  ppc: [],
  k5: [],
  k6: [],
  slovnaft: [],
  hk3: [],
  hk4: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SCZT_VYCHOD_ZARIADENIA_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SCZT_VYCHOD_ZARIADENIA_SUCCESS:
      return {...state, loading: false,
        datum: action.data['datum'],
        ppc: action.data['ppc'],
        k5: action.data['k5'],
        k6: action.data['k6'],
        slovnaft: action.data['slovnaft'],
        hk3: action.data['hk3'],
        hk4: action.data['hk4'],
      }
    case TYPES.FETCH_SCZT_VYCHOD_ZARIADENIA_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}