import * as TYPES from '../../../services/ActionTypes'

const initState = {

  vct: false,       // ROLE_VCT
  admin: false,     // ROLE_VCT_ADMIN
  kont: false,      // ROLE_VCT_KONT
  mng: false,       // ROLE_VCT_MNG
  vyr: false,       // ROLE_VCT_VYR

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

      if (action.data.includes('ROLE_VCT') || action.data.includes('ROLE_ADMIN')) {
        roles.vct = true
        roles.admin = true
        roles.kont = true
        roles.mng = true
        roles.vyr = true
      } else if (action.data.includes('ROLE_VCT_ADMIN')) {
        roles.vct = false
        roles.admin = true
        roles.kont = true
        roles.mng = true
        roles.vyr = true
      } else if (action.data.includes('ROLE_VCT_KONT')) {
        roles.vct = false
        roles.admin = false
        roles.kont = true
        roles.mng = true
        roles.vyr = true
      } else if (action.data.includes('ROLE_VCT_MNG')) {
        roles.vct = false
        roles.admin = false
        roles.kont = false
        roles.mng = true
        roles.vyr = true
      }

      return {...state, loading: false, initialized: true, ...roles}
    default:
      return state
  }
}