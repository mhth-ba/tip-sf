import * as TYPES from '../../../services/ActionTypes'

const initState = {
  // pohlad na doklady vstupnej a vystupnej DPH
  // 1 = zmenene, 0 = povodne
  pohlad: '1'
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_TAB:
      return {...state, pohlad: action.tab}
    default:
      return state
  }
}