import * as TYPES from '../../../services/ActionTypes'

const initStateZmenaHV = {
  currentHVType: 'Zapad', // Default HV type
  entries: {
    Zapad: [],
    Vychod: []
  },
  loading: false,
  error: null
}

export const zmenaHV = (state = initStateZmenaHV, action) => {
  switch (action.type) {
    case TYPES.FETCH_ZMENA_NA_HV_REQUEST:
      return {
        ...state,
        currentHVType: action.hvType,
        loading: true,
        error: null
      }

    case TYPES.FETCH_ZMENA_NA_HV_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: {
          ...state.entries,
          [action.hvType]: action.data
        }
      }

    case TYPES.FETCH_ZMENA_NA_HV_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case TYPES.CREATE_ZMENA_NA_HV_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case TYPES.CREATE_ZMENA_NA_HV_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: {
          ...state.entries,
          [action.hvType]: [...state.entries[action.hvType], action.data]
        }
      }

    case TYPES.CREATE_ZMENA_NA_HV_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case TYPES.UPDATE_ZMENA_NA_HV_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case TYPES.UPDATE_ZMENA_NA_HV_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: {
          ...state.entries,
          [action.hvType]: state.entries[action.hvType].map(entry =>
            entry.id === action.data.id ? action.data : entry
          )
        }
      }

    case TYPES.UPDATE_ZMENA_NA_HV_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case TYPES.DELETE_ZMENA_NA_HV_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case TYPES.DELETE_ZMENA_NA_HV_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: {
          ...state.entries,
          [action.hvType]: state.entries[action.hvType].filter(entry => entry.id !== action.id)
        }
      }

    case TYPES.DELETE_ZMENA_NA_HV_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}

export default zmenaHV
