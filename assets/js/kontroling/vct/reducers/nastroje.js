import * as TYPES from '../../../services/ActionTypes'

const initState = {
  highlightEditable: false,
  historia: false,
  vypocty: false,

  // pocet desatinnych miest
  decimal_fdt: 0,    // forecast dodavky tepla
  decimal_zpv: 0,    // zemny plyn - vychod
  decimal_zpz: 0,    // zemny plyn - zapad
  decimal_nmv: 0,    // normativne mnozstvo - vychod
  decimal_nmz: 0,    // normativne mnozstvo - zapad
  decimal_nt: 0,     // nakup tepla
  decimal_onte: 0,   // ocakavane naklady na teplo a elektrinu
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_HIGHLIGHT_EDITABLE:
      return {...state, highlightEditable: action.toggle}
    case TYPES.TOGGLE_HISTORIA:
      return {...state, historia: action.toggle}
    case TYPES.TOGGLE_VYPOCTY:
      return {...state, vypocty: action.toggle}
    case TYPES.SET_DECIMAL_SCALE:
      return {...state, ...action.scale}
    default:
      return state
  }
}