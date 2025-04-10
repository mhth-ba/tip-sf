import * as TYPES from '../../../services/ActionTypes'

const initState = {
  entries: [],
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ZOZNAM_DISPECEROV_REQUEST:
      return { ...state, loading: true }

    case TYPES.FETCH_ZOZNAM_DISPECEROV_SUCCESS:
      return { ...state, loading: false, entries: action.data }

    case TYPES.FETCH_ZOZNAM_DISPECEROV_ERROR:
      return { ...state, loading: false, error: action.data }

    default:
      return state
  }
}
