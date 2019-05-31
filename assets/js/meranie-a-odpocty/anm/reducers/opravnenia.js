import * as TYPES from '../../../services/ActionTypes'

const initState = {
  anm: false,   // ROLE_ANM
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_OPRAVNENIA_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_OPRAVNENIA_SUCCESS:
      const roles = {}

      if (action.data.includes('ROLE_ANM') || action.data.includes('ROLE_ADMIN')) {
        roles.anm = true
      } else {
        roles.anm = false
      }

      return {...state, loading: false, ...roles}
    case TYPES. FETCH_OPRAVNENIA_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}