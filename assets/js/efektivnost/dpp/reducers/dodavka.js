import * as TYPES from '../../../services/ActionTypes'

const initState = { // Efektivnost.DPP_Dodavka

  vykon_v: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  slovnaft: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  ppc: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  tpv: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  vhj: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  vykon_z: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  cogen_west: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  k6: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0,
    spolu: 0
  },

  hk: {
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

    case TYPES.FETCH_DODAVKA_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_DODAVKA_SUCCESS:
      return {...state, loading: false,

        vykon_v: action.data['dodavka'].find(x => x['zdroj'].id === 20),
        slovnaft: action.data['dodavka'].find(x => x['zdroj'].id === 8),
        ppc: action.data['dodavka'].find(x => x['zdroj'].id === 6),
        tpv: action.data['dodavka'].find(x => x['zdroj'].id === 1),
        vhj: action.data['dodavka'].find(x => x['zdroj'].id === 2),
        vykon_z: action.data['dodavka'].find(x => x['zdroj'].id === 21),
        cogen_west: action.data['dodavka'].find(x => x['zdroj'].id === 9),
        k6: action.data['dodavka'].find(x => x['zdroj'].id === 4),
        hk: action.data['dodavka'].find(x => x['zdroj'].id === 5)

      }

    default:
      return state
  }
}