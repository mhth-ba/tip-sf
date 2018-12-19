import * as TYPES from '../../../services/ActionTypes'

const initState = {
  vstup: [], // znaky dane - vstup
  vystup: [], // znaky dane - vystup

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_ZNAKY_DANE_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_ZNAKY_DANE_SUCCESS:
      return {...state, loading: false,
        vstup: action.data['vstup'],
        vystup: action.data['vystup']
      }
    case TYPES.FETCH_ZNAKY_DANE_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
