import * as TYPES from '../../../services/ActionTypes'

const initState = { // Uctovnictvo.DP_Riadky
  riadky: [], // riadky danoveho priznania

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_RIADKY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_RIADKY_SUCCESS:
      return {...state, loading: false,
        riadky: action.data['riadky'],
      }
    case TYPES.FETCH_RIADKY_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
