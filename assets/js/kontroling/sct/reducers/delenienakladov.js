import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_Klucovanie

  vtdt: {               // vyuzitelne teplo na dodavku tepla
    tpv: 0,
    tpz: 0,
    klucovanie: 0
  },

  tsve: {               // teplo spotrebovane na vyrobu elektriny
    tpv: 0,
    tpz: 0,
    klucovanie: 0
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_DELENIE_NAKLADOV_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_DELENIE_NAKLADOV_SUCCESS:
      return {...state, loading: false,
        vtdt: action.data.find(x => x['polozka'].id === 20),
        tsve: action.data.find(x => x['polozka'].id === 21)
      }
    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,
        vtdt: {
          ...state.vtdt,
          klucovanie: action.data['bunky'].find(x => x.id === 'SDT_DNEM_VTDT_K').hodnota
        },
        tsve: {
          ...state.tsve,
          klucovanie: action.data['bunky'].find(x => x.id === 'SDT_DNEM_TSVE_K').hodnota
        },
      }
    case TYPES.UPDATE_DELENIE_NAKLADOV_SUCCESS:
      return {...state,
        [action.key]: {
          ...state[action.key],
          ...action.data
        }
      }
    case TYPES.UPDATE_DELENIE_NAKLADOV_ERROR:
      return {...state, error: action.data}
    default:
      return state
  }
}