import * as TYPES from '../../../services/ActionTypes'

const initState = {
  id: null,      // ID záznamu
  datum: null,   // dátum a čas vytvorenia hlavného záznamu
  zmenene: null, // dátum a čas zmeny hlavného záznamu
  druh: null,    // druh priznania (riadne, opravné, dodatočné)
  predchadzajuci: null, // priznanie v predošlom období na zohľadnenie nadmerného odpočtu
  riadne: null,  // v prípade opravného/dodatočného - ID riadneho priznania
  obdobie: null, // zdaňovacie obdobie
  podane: null,  // dátum podania daňového priznania

  vytvoril: {
    fullname: null // celé meno používateľa
  },
  upravil: {
    fullname: null // celé meno používateľa
  },

  upload: {      // pôvodný názov uploadnutého súboru
    alr: null,   // predbežné hlásenie hlásenie - S_ALR
    ddokl: null, // daňové doklady - ZFC_DDOKL
  },

  poznamka: null,

  loading: false,
  updating: false,
  error: null,
  initialized: false // identifikácia prvého načítania
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.LOAD_MAIN_ENTRY_REQUEST:
      return {...state, loading: true}
    case TYPES.LOAD_MAIN_ENTRY_SUCCESS:
      return {...state, loading: false, initialized: true, ...action.data}
    case TYPES.LOAD_MAIN_ENTRY_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.UPDATE_HLAVNY_REQUEST:
      return {...state, updating: true}
    case TYPES.UPDATE_HLAVNY_SUCCESS:
      return {...state, ...action.data, updating: false}
    case TYPES.UPDATE_HLAVNY_ERROR:
      return {...state, error: action.data, updating: false}

    default:
      return state
  }
}
