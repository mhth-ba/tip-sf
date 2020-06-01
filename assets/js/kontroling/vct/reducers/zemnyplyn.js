import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.VCT_ZemnyPlyn_SP

  spotreba: {
    skutocnost: [],
    plan: []
  },

  cena: {
    skutocnost: [{
      zdroj: 1,
      mwh: 0,
      celkove: 0,
      cena: 0
    }, {
      zdroj: 3,
      mwh: 0,
      celkove: 0,
      cena: 0
    }],
    ocakavana: [{
      zdroj: 1,
      cena: 0
    }, {
      zdroj: 3,
      cena: 0
    }]
  },

  varianty: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_ZEMNY_PLYN_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_ZEMNY_PLYN_SUCCESS:
      return {...state, loading: false}

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,
        spotreba: {
          skutocnost: action.data['plyn']['spotreba']['skutocnost'],
          plan: action.data['plyn']['spotreba']['plan']
        },
        cena: {
          skutocnost: action.data['plyn']['cena']['skutocnost'],
          ocakavana: action.data['plyn']['cena']['ocakavana']
        },
        varianty: action.data['plyn']['spotreba']['varianty']
      }

    case TYPES.UPDATE_ZEMNY_PLYN_SUCCESS:
      return {...state,
        [action.table]: {
          ...state[action.table],
          ...action.data
        }
      }

    case TYPES.UPDATE_ZEMNY_PLYN_ERROR:
      return {...state, error: action.data}

    default:
      return state
  }
}