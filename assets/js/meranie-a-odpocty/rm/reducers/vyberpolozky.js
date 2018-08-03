import * as TYPES from '../../../services/ActionTypes'

const initState = {
  polozky: [],
  datum: null,
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SPRAVA_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SPRAVA_SUCCESS:
      return {...state, loading: false, polozky: action.data}
    case TYPES.FETCH_SPRAVA_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}