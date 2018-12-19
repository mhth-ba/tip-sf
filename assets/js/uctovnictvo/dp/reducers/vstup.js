import * as TYPES from '../../../services/ActionTypes'

const initState = { // Uctovnictvo.DP_Vstup
  polozky: [],

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_VSTUP_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_VSTUP_SUCCESS:
      return {...state, loading: false, polozky: action.data}
    case TYPES.FETCH_VSTUP_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
