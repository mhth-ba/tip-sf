import * as TYPES from '../../../services/ActionTypes'

const initState = {

  odt: {                // karta ocakavana dodavka tepla
    id: null,
    poznamka: 'Poznámky ku karte ...'
  },

  zp: {                 // karta zemny plyn
    id: null,
    poznamka: 'Poznámky ku karte ...'
  },

  nt: {                 // karta nakupovane teplo
    id: null,
    poznamka: 'Poznámky ku karte ...'
  },

  sn: {                 // karta spolocne naklady na teplo a elektrinu
    id: null,
    poznamka: 'Poznámky ku karte ...'
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
        odt: action.data.find(x => x['karta'].id === 201),
        zp: action.data.find(x => x['karta'].id === 202),
        nt: action.data.find(x => x['karta'].id === 204),
        sn: action.data.find(x => x['karta'].id === 208)
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