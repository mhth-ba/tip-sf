import * as TYPES from '../../../services/ActionTypes'

const initState = {
  upload_vsetky: [],
  udaje_vsetky: [],

  upload_hlavny: [],
  udaje_hlavny: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_AKTIVITA_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_AKTIVITA_SUCCESS:
      return {...state, loading: false, ...action.data}
    case TYPES.FETCH_AKTIVITA_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}
