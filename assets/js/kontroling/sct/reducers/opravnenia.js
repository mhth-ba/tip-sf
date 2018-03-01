import * as TYPES from '../../../services/ActionTypes'

const initState = {
    sct: false,   // ROLE_SCT
    admin: false, // ROLE_SCT_ADMIN
    kont: false,  // ROLE_SCT_KONT
    mng: false,   // ROLE_SCT_MNG
    loading: false,
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case TYPES.FETCH_OPRAVNENIA_REQUEST:
            return {...state, loading: true}
        case TYPES.FETCH_OPRAVNENIA_SUCCESS:
            const roles = {}

            if (action.data.includes('ROLE_SCT') || action.data.includes('ROLE_ADMIN')) {
                roles.sct = true
                roles.admin = true
                roles.kont = true
                roles.mng = true
            } else if (action.data.includes('ROLE_SCT_ADMIN')) {
                roles.admin = true
                roles.kont = true
                roles.mng = true
            } else if (action.data.includes('ROLE_SCT_KONT')) {
                roles.kont = true
                roles.mng = true
            } else if (action.data.includes('ROLE_SCT_MNG')) {
                roles.mng = true
            }

            return {...state, loading: false, ...roles}
        case TYPES. FETCH_OPRAVNENIA_ERROR:
            return {...state, loading: false, error: action.data}
        default:
            return state
    }
}