import * as TYPES from '../../../services/ActionTypes'

const initStateZmenaZdroje = {
  currentSourceType: 'TpV', // Default selected source
  entries: {
    TpZ: [],
    CW: [],
    TpV: [],
    VhJ: [],
    Slovnaft: [],
    OLO: [],
    PPC: []
  },
  loading: false,
  error: null
}

export const zmenaZdroje = (state = initStateZmenaZdroje, action) => {
  switch (action.type) {
    case TYPES.FETCH_ZMENA_NA_ZDROJ_REQUEST:
      return {
        ...state,
        currentSourceType: action.sourceType,
        loading: true,
        error: null
      }

    case TYPES.FETCH_ZMENA_NA_ZDROJ_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: {
          ...state.entries,
          [action.sourceType]: action.data
        }
      }

    case TYPES.FETCH_ZMENA_NA_ZDROJ_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case TYPES.CREATE_ZMENA_NA_ZDROJ_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case TYPES.CREATE_ZMENA_NA_ZDROJ_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: {
          ...state.entries,
          [action.sourceType]: [...state.entries[action.sourceType], action.data]
        }
      }

    case TYPES.CREATE_ZMENA_NA_ZDROJ_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case TYPES.UPDATE_ZMENA_NA_ZDROJ_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case TYPES.UPDATE_ZMENA_NA_ZDROJ_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: {
          ...state.entries,
          [action.sourceType]: state.entries[action.sourceType].map(entry =>
            entry.id === action.data.id ? action.data : entry
          )
        }
      }

    case TYPES.UPDATE_ZMENA_NA_ZDROJ_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case TYPES.DELETE_ZMENA_NA_ZDROJ_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case TYPES.DELETE_ZMENA_NA_ZDROJ_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: {
          ...state.entries,
          [action.sourceType]: state.entries[action.sourceType].filter(entry => entry.id !== action.id)
        }
      }

    case TYPES.DELETE_ZMENA_NA_ZDROJ_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}

export default zmenaZdroje
