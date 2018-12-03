import * as TYPES from '../../services/ActionTypes'

const initState = {
  projekty: [],
  terminy: [],
  ciastkove: [],
  zmenove: [],

  ulohy: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_PROJEKTY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_PROJEKTY_SUCCESS:
      return {...state, loading: false,
        projekty: action.data['projekty'],
        terminy: action.data['terminy'],
        ciastkove: action.data['ciastkove'],
        zmenove: action.data['zmenove'],

        ulohy: action.data['ulohy']
      }
    case TYPES.FETCH_PROJEKTY_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}