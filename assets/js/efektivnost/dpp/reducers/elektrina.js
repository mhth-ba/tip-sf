import * as TYPES from '../../../services/ActionTypes'

const initState = { // Efektivnost.DPP_Elektrina

  tpv: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  tpz: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  srv: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_ELEKTRINA_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_ELEKTRINA_SUCCESS:
      return {...state, loading: false,
        tpv: action.data['elektrina'].find(x => x['zdroj'].id === 1),
        tpz: action.data['elektrina'].find(x => x['zdroj'].id === 3),
        srv: action.data['elektrina'].find(x => x['zdroj'].id === 10)
      }

    default:
      return state
  }
}