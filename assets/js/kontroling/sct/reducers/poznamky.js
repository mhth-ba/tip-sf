import * as TYPES from '../../../services/ActionTypes'

const initState = {

  sdt: {                // karta skutocna dodavka tepla
    id: null,
    poznamka: null
  },

  fzp: {                // karta fakturovany zemny plyn
    id: null,
    poznamka: null
  },

  pb: {                 // karta palivovy bonus
    id: null,
    poznamka: null
  },

  nt: {                 // karta nakupovane teplo
    id: null,
    poznamka: null
  },

  snte: {               // karta spolocne naklady na teplo a elektrinu
    id: null,
    poznamka: null
  },

  ct: {                 // karta cena tepla
    id: null,
    poznamka: null
  },

  loading: false,
  updating: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_POZNAMKY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_POZNAMKY_SUCCESS:
      return {...state, loading: false,
        sdt: action.data.find(x => x['karta'].id === 201),
        fzp: action.data.find(x => x['karta'].id === 202),
        pb: action.data.find(x => x['karta'].id === 203),
        nt: action.data.find(x => x['karta'].id === 204),
        snte: action.data.find(x => x['karta'].id === 205),
        ct: action.data.find(x => x['karta'].id === 206)
      }

    case TYPES.UPDATE_POZNAMKY_REQUEST:
      return {...state, updating: true}
    case TYPES.UPDATE_POZNAMKY_SUCCESS:
      return {...state, updating: false, ...action.data}

    case TYPES.FETCH_POZNAMKY_ERROR:
      return {...state, ...action.data}
    default:
      return state
  }
}