import * as TYPES from '../../../services/ActionTypes'

const initState = {
  creating: false
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.CREATE_DOKLAD_REQUEST:
      return {...state, creating: true}

    case TYPES.CREATE_DOKLAD_VSTUP_SUCCESS:
      return {...state, creating: false}
    case TYPES.CREATE_DOKLAD_VYSTUP_SUCCESS:
      return {...state, creating: false}

    case TYPES.CREATE_DOKLAD_ERROR:
      return {...state, creating: false}

    default:
      return state
  }
}