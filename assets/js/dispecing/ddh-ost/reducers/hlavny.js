import * as TYPES from '../../../services/ActionTypes'

const initState = {
  id: null, // id hlavneho zaznamu
  datum: null,
  dispecer_1: null,
  dispecer_2: null,
  poruchovka_1: null,
  poruchovka_2: null,
  poruchovka_3: null,
  poruchovka_4: null,
  teplota_letisko: null,
  teplota_tpv: null,
  teplota_tpz: null,
  doplnovanie_tpv: null,
  doplnovanie_tpz: null,

  loading: false,
  uploading: false,
  error: null,
  initialized: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.LOAD_OSTHLAVNY_REQUEST:
      return { ...state, loading: true }

    case TYPES.LOAD_OSTHLAVNY_SUCCESS:
      return { ...state, loading: false, initialized: true, ...action.data }

    case TYPES.LOAD_OSTHLAVNY_ERROR:
      return { ...state, loading: false, error: action.data }

    case TYPES.UPDATE_OSTHLAVNY_REQUEST:
      return { ...state, loading: true }

    case TYPES.UPDATE_OSTHLAVNY_SUCCESS:
      return { ...state, loading: false, ...action.data }

    case TYPES.UPDATE_OSTHLAVNY_ERROR:
      return { ...state, loading: false, error: action.data }

    case TYPES.UPDATE_OSTHLAVNY_FORMFIELD:
      return { ...state, [action.field]: action.value }

    default:
      return state
  }
}
