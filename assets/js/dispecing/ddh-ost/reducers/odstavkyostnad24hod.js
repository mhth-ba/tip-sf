import * as TYPES from '../../../services/ActionTypes'

const initState = {
  entries: [],
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ODSTAVKY_OST_NAD_24_HOD_REQUEST:
      return { ...state, loading: true, error: null }

    case TYPES.FETCH_ODSTAVKY_OST_NAD_24_HOD_SUCCESS:
      return { ...state, loading: false, entries: action.data, error: null }

    case TYPES.FETCH_ODSTAVKY_OST_NAD_24_HOD_ERROR:
      return { ...state, loading: false, error: action.data }

    // Since we're using existing update endpoints for both sources,
    // we need to handle updates to entries from both sources here
    case TYPES.UPDATE_PRACE_NA_OST_PREVADZKA_SUCCESS:
      // Only update if this entry is in our list
      if (state.entries.some(entry => entry.id === action.data.id && entry.source === 'prevadzka')) {
        return {
          ...state,
          entries: state.entries.map(entry =>
            entry.id === action.data.id && entry.source === 'prevadzka'
              ? { ...action.data, source: 'prevadzka' }
              : entry
          )
        }
      }
      return state

    case TYPES.UPDATE_PRACE_NA_OST_DISPECING_SUCCESS:
      // Only update if this entry is in our list
      if (state.entries.some(entry => entry.id === action.data.id && entry.source === 'dispecing')) {
        return {
          ...state,
          entries: state.entries.map(entry =>
            entry.id === action.data.id && entry.source === 'dispecing'
              ? { ...action.data, source: 'dispecing' }
              : entry
          )
        }
      }
      return state

    default:
      return state
  }
}
