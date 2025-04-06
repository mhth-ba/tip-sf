import * as TYPES from '../../../services/ActionTypes'

const initState = {

  deo: false,   // ROLE_DEO
  write: false, // ROLE_DEO_WRITE
  read: false,  // ROLE_DEO_READ

  loading: false,
  initialized: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_OPRAVNENIA_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_OPRAVNENIA_SUCCESS:
      const roles = {}

      if (action.data.includes('ROLE_DEO') || action.data.includes('ROLE_ADMIN')) {
        roles.deo = true
        roles.write = true
        roles.read = true
      } else if (action.data.includes('ROLE_DEO_WRITE')) {
        roles.deo = false
        roles.write = true
        roles.read = true
      } else if (action.data.includes('ROLE_DEO_READ')) {
        roles.deo = false
        roles.write = false
        roles.read = true
      }

      return {...state, loading: false, initialized: true, ...roles}
    case TYPES. FETCH_OPRAVNENIA_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}