import * as TYPES from '../../../services/ActionTypes'

const initialState = {
  mode: 'calendar',  // 'calendar' | 'filter'
  filters: {
    dateFrom: null,
    dateTo: null,
    ost: [],
    vplyvNaDodavku: [],
    vyvod: [],
    stav: []
  },
  results: {
    prevadzka: [],
    dispecing: [],
    loading: false,
    error: null
  }
}

const filterView = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_VIEW_MODE:
      return {
        ...state,
        mode: action.mode
      }

    case TYPES.SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterName]: action.value
        }
      }

    case TYPES.CLEAR_FILTERS:
      return {
        ...state,
        filters: initialState.filters,
        results: initialState.results
      }

    case TYPES.FETCH_FILTERED_DATA_REQUEST:
      return {
        ...state,
        results: {
          ...state.results,
          loading: true,
          error: null
        }
      }

    case TYPES.FETCH_FILTERED_DATA_SUCCESS:
      return {
        ...state,
        results: {
          prevadzka: action.data.prevadzka || [],
          dispecing: action.data.dispecing || [],
          loading: false,
          error: null
        }
      }

    case TYPES.FETCH_FILTERED_DATA_ERROR:
      return {
        ...state,
        results: {
          ...state.results,
          loading: false,
          error: action.error
        }
      }

    default:
      return state
  }
}

export default filterView