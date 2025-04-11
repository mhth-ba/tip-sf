import * as TYPES from '../../../services/ActionTypes'

const initState = {
  id: null,
  ost_hlavny_id: null,
  dispecer_1: null,
  dispecer_2: null,

  // Data from OST_Hlavny for read-only display
  ost_data: {
    poruchovka_1: null,
    poruchovka_2: null,
    teplota_letisko: null,
    teplota_tpv: null,
    teplota_tpz: null,
    doplnovanie_tpv: null,
    doplnovanie_tpz: null
  },

  loading: false,
  error: null,
  initialized: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.LOAD_HVHLAVNY_REQUEST:
      return { ...state, loading: true }

    case TYPES.LOAD_HVHLAVNY_SUCCESS:
      return {
        ...state,
        loading: false,
        initialized: true,
        ...action.data
      }

    case TYPES.LOAD_HVHLAVNY_ERROR:
      return { ...state, loading: false, error: action.data }

    case TYPES.UPDATE_HVHLAVNY_REQUEST:
      return { ...state, loading: true }

    case TYPES.UPDATE_HVHLAVNY_SUCCESS:
      return { ...state, loading: false, ...action.data }

    case TYPES.UPDATE_HVHLAVNY_ERROR:
      return { ...state, loading: false, error: action.data }

    case TYPES.UPDATE_HVHLAVNY_FORMFIELD:
      return { ...state, [action.field]: action.value }

    default:
      return state
  }
}
