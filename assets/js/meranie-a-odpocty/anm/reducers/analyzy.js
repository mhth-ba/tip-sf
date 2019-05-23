import * as TYPES from '../../../services/ActionTypes'

const initState = { // Meranie.ANM_Analyzy
  polozky: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ANALYZY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_ANALYZY_SUCCESS:
      return {...state, loading: false,
        polozky: action.data['analyzy']
      }
    case TYPES.FETCH_ANALYZY_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}