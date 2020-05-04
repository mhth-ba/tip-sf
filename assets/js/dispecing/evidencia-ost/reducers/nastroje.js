import * as TYPES from '../../../services/ActionTypes'

const initState = {
  highlightEditable: false, // upravovatelnost hodnoty
  historia: false           // historia (dennik) zmien hodnoty polozky pouzivatelmi
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_HIGHLIGHT_EDITABLE:
      return {...state, highlightEditable: action.toggle}
    case TYPES.TOGGLE_HISTORIA:
      return {...state, historia: action.toggle}
    default:
      return state
  }
}