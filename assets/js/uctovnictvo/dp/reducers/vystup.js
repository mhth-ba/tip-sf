import * as TYPES from '../../../services/ActionTypes'

const initState = { // Uctovnictvo.DP_Vystup_Z
  zmenene: [],
  povodne: [],

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_VYSTUP_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_VYSTUP_SUCCESS:
      return {...state, loading: false,
        zmenene: action.data['zmenene'],
        povodne: action.data['povodne']
      }
    case TYPES.FETCH_VYSTUP_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
