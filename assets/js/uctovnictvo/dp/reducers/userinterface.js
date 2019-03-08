import * as TYPES from '../../../services/ActionTypes'

const initState = {
  // pohľad na doklady vstupnej a vystupnej DPH (zmena znamienka)
  // 1 = zmenené, 0 = pôvodné
  pohlad: '1',

  // filter dokladov podľa typu
  // 1 = všetky, 2 = import zmenené, 3 = vytvorené, 4 = vytvorené a zmenené
  filter: '1'
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_TAB:
      return {...state, pohlad: action.tab}
    case TYPES.TOGGLE_FILTER:
      return {...state, filter: action.filter}
    default:
      return state
  }
}