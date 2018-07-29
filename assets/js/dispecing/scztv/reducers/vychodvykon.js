import * as TYPES from '../../../services/ActionTypes'

const initState = { // Dispecing.SCZTV_Vykon
  plan: [],
  zdroje: [],
  ost: [],
  komunikacia: [],
  teplota: [],
  max: 0,

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
        zdroje: action.data['zdroje'],
        ost: action.data['ost'],
        komunikacia: action.data['komunikacia'],
        teplota: action.data['teplota'],
        max: action.data['max']
      }
    case TYPES.FETCH_SCZT_VYCHOD_VYKON_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}