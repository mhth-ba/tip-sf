import * as TYPES from '../../../services/ActionTypes'

const initState = {
  udaje_vsetky: [],
  udaje_hlavny: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_AUDIT_LOG_REQUEST:
      return { ...state, loading: true }
    case TYPES.FETCH_AUDIT_LOG_SUCCESS:
      return { ...state, loading: false, ...action.data }
    case TYPES.FETCH_AUDIT_LOG_ERROR:
      return { ...state, loading: false, error: action.data }
    default:
      return state
  }
}
