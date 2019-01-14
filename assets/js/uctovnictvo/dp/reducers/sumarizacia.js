import * as TYPES from '../../../services/ActionTypes'

const initState = { // Uctovnictvo.DP_Sumarizacia
  polozky: [],

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_SUMARIZACIA_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SUMARIZACIA_SUCCESS:
      return {...state, loading: false, polozky: action.data}
    case TYPES.FETCH_SUMARIZACIA_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
