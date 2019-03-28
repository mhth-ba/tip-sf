import * as TYPES from '../../../services/ActionTypes'

const initState = {
  druh: [],
  predchadzajuci: [],
  suvisiace: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOZNOSTI_SUCCESS:
      return {...state,
        druh: action.data['druh'],
        predchadzajuci: action.data['predchadzajuci'],
        suvisiace: action.data['suvisiace']
      }
    default:
      return state
  }
}