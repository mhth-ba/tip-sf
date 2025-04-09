import * as TYPES from '../../../services/ActionTypes'

const initState = {
  entries: [],
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_PRACE_NA_OST_PREVADZKA_REQUEST:
      return { ...state, loading: true }

    case TYPES.FETCH_PRACE_NA_OST_PREVADZKA_SUCCESS:
      return { ...state, loading: false, entries: action.data }

    case TYPES.FETCH_PRACE_NA_OST_PREVADZKA_ERROR:
      return { ...state, loading: false, error: action.data }

    case TYPES.CREATE_PRACE_NA_OST_PREVADZKA_REQUEST:
      return { ...state, loading: true }

    case TYPES.CREATE_PRACE_NA_OST_PREVADZKA_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: [...state.entries, action.data]
      }

    case TYPES.CREATE_PRACE_NA_OST_PREVADZKA_ERROR:
      return { ...state, loading: false, error: action.data }

    case TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_REQUEST:
      return { ...state, loading: true }

    case TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: state.entries.map(entry => (entry.id === action.data.id ? action.data : entry))
      }

    case TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_ERROR:
      return { ...state, loading: false, error: action.data }

    case TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_FORMFIELD:
      const newEntries = state.entries.map((entry, i) => {
        if (i === action.index) {
          return { ...entry, [action.field]: action.value }
        }
        return entry
      })
      return { ...state, entries: newEntries }

    default:
      return state
  }
}
