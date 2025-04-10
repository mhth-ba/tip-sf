import * as TYPES from '../../../services/ActionTypes'

const initState = {
  entries: [],
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_PRACE_NA_OST_PREVADZKA_REQUEST:
      return { ...state, loading: true, error: null }

    case TYPES.FETCH_PRACE_NA_OST_PREVADZKA_SUCCESS:
      return { ...state, loading: false, entries: action.data, error: null }

    case TYPES.FETCH_PRACE_NA_OST_PREVADZKA_ERROR:
      return { ...state, loading: false, error: action.data }

    case TYPES.CREATE_PRACE_NA_OST_PREVADZKA_REQUEST:
      return { ...state, loading: true, error: null }

    case TYPES.CREATE_PRACE_NA_OST_PREVADZKA_SUCCESS:
      // Add the new entry to the list
      return {
        ...state,
        loading: false,
        entries: [...state.entries, action.data],
        error: null
      }

    case TYPES.CREATE_PRACE_NA_OST_PREVADZKA_ERROR:
      return { ...state, loading: false, error: action.data }

    case TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_REQUEST:
      return { ...state, loading: true, error: null }

    case TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: state.entries.map(entry => (entry.id === action.data.id ? action.data : entry)),
        error: null
      }

    case TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_ERROR:
      return { ...state, loading: false, error: action.data }

    // Add handlers for delete actions
    case TYPES.DELETE_PRACE_NA_OST_PREVADZKA_REQUEST:
      return { ...state, loading: true, error: null }

    case TYPES.DELETE_PRACE_NA_OST_PREVADZKA_SUCCESS:
      // Remove the deleted entry from the list
      return {
        ...state,
        loading: false,
        entries: state.entries.filter(entry => entry.id !== action.id),
        error: null
      }

    case TYPES.DELETE_PRACE_NA_OST_PREVADZKA_ERROR:
      return { ...state, loading: false, error: action.data }

    default:
      return state
  }
}
