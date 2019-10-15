import * as TYPES from '../../../services/ActionTypes'

const initState = {
  stav: [],
  prepojenie: [],
  pouzivatelia: [],
  role: [],

  loading: false,
  initialized: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOZNOSTI_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_MOZNOSTI_SUCCESS:
      return {...state, loading: false, initialized: true, ...action.data}
    case TYPES.FETCH_MOZNOSTI_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}