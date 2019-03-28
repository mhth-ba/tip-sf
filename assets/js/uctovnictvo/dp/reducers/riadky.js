import * as TYPES from '../../../services/ActionTypes'

const initState = { // Uctovnictvo.DP_Riadky
  polozky_s: [], // sucasny
  polozky_p: [], // predchadzajuci (nadmerny odpocet)
  polozky_w: [], // posledny podany (dodatocne priznanie)

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_RIADKY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_RIADKY_SUCCESS:
      return {...state, loading: false,
        polozky_s: action.data['sucasny'],
        polozky_p: action.data['predchadzajuci'],
        polozky_w: action.data['posledny']
      }
    case TYPES.FETCH_RIADKY_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
