import * as TYPES from '../../../services/ActionTypes'

const initState = {
  id: null, // id zaznamu
  hlavny: null, // v pripade opravneho/dodatocneho - id riadneho dan. priznania
  druh: null, // druh dan. priznania (riadne, opravne, dodatocne)
  datum: null, // datum podania dan. priznania

  loading: false,
  updating: false,
  error: null,
  initialized: false // identifikacia prveho nacitania
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.LOAD_MAIN_ENTRY_REQUEST:
      return {...state, loading: true}
    case TYPES.LOAD_MAIN_ENTRY_SUCCESS:
      return {...state, loading: false, initialized: true, ...action.data}
    case TYPES.LOAD_MAIN_ENTRY_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.UPDATE_HLAVNY_REQUEST:
      return {...state, updating: true}
    case TYPES.UPDATE_HLAVNY_SUCCESS:
      return {...state, ...action.data, updating: false}
    case TYPES.UPDATE_HLAVNY_ERROR:
      return {...state, error: action.data, updating: false}

    default:
      return state
  }
}
