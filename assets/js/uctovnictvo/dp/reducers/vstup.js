import * as TYPES from '../../../services/ActionTypes'

const initState = { // Uctovnictvo.DP_Vstup_Z
  zmenene: [],
  povodne: [],

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_VSTUP_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_VSTUP_SUCCESS:
      return {...state, loading: false,
        zmenene: action.data['zmenene'],
        povodne: action.data['povodne']
      }
    case TYPES.FETCH_VSTUP_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
