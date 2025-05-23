import * as TYPES from '../../../services/ActionTypes'

const initState = {
  id: null,      // ID záznamu
  datum: null,   // dátum a čas vytvorenia hlavného záznamu
  zmenene: null, // dátum a čas zmeny hlavného záznamu
  druh: null,    // druh priznania (riadne, opravné, dodatočné)
  predchadzajuci: null, // priznanie v predošlom období na zohľadnenie nadmerného odpočtu
  posledny: null,  // v prípade dodatočného ID posledného podaného priznania
  obdobie: null, // zdaňovacie obdobie
  zistene: null, // dátum zistenia skutočnosti na podanie dodatočného daňového priznania
  podane: null,  // dátum podania daňového priznania

  vytvoril: {
    fullname: null // celé meno používateľa
  },
  upravil: {
    fullname: null // celé meno používateľa
  },

  upload: {        // pôvodný názov uploadnutého súboru
    alr: null,     // predbežné hlásenie hlásenie - S_ALR
    ddokl: null,   // daňové doklady - ZFC_DDOKL
    prilohy: null, // ostatné prílohy
  },

  poznamka: null,
  zamknute: null,

  loading: false,
  creating: false,
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

    case TYPES.CREATE_HLAVNY_REQUEST:
      return {...state, creating: true}
    case TYPES.CREATE_HLAVNY_SUCCESS:
      return {...state, creating: false}
    case TYPES.CREATE_HLAVNY_ERROR:
      return {...state, error: action.data, creating: false}

    case TYPES.UPDATE_HLAVNY_REQUEST:
      return {...state, updating: true}
    case TYPES.UPDATE_HLAVNY_SUCCESS:
      return {...state, ...action.data, updating: false}
    case TYPES.UPDATE_HLAVNY_ERROR:
      return {...state, error: action.data, updating: false}

    case TYPES.PROCESS_UPLOADED_FILE_SUCCESS:
      if (action.data.upload.id === 3) {
        return {...state, upload: {
            ...state.upload,
            prilohy: [...state.upload.prilohy, action.data]
          }
        }
      } else return state

    default:
      return state
  }
}
