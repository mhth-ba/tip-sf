import * as TYPES from '../../../services/ActionTypes'

const initState = {

  data: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_AKTIVITA_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_AKTIVITA_SUCCESS:
      return {...state, loading: false,
        data: action.data
      }
    case TYPES.FETCH_AKTIVITA_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}