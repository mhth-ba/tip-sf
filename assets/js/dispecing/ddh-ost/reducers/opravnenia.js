import * as TYPES from '../../../services/ActionTypes'

const initState = {
  editor: false, // ROLE_DDH_DISPEC
  admin: false, // ROLE_DDH
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_OPRAVNENIA_REQUEST:
      return { ...state, loading: true }
    case TYPES.FETCH_OPRAVNENIA_SUCCESS:
      const roles = {}

      // User has editor permissions if they have ROLE_DDH_DISPEC, ROLE_DDH, or ROLE_ADMIN
      if (action.data.includes('ROLE_DDH_DISPEC') || action.data.includes('ROLE_DDH') || action.data.includes('ROLE_ADMIN')) {
        roles.editor = true
      }

      // User has admin permissions if they have ROLE_DDH or ROLE_ADMIN
      if (action.data.includes('ROLE_DDH') || action.data.includes('ROLE_ADMIN')) {
        roles.admin = true
      }

      return { ...state, loading: false, ...roles }
    case TYPES.FETCH_OPRAVNENIA_ERROR:
      return { ...state, loading: false, error: action.data }
    default:
      return state
  }
}
