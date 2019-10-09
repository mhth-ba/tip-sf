import * as TYPES from '../../../services/ActionTypes'

const initState = { // Efektivnost.DPP_Objednavka

  slovnaft: {
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0
  },

  ppc_hv: { // horuca voda
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0
  },

  ppc_para: { // paroplynovy cyklus
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0
  },

  wunder: { // wunderground teplota predpoved pocasia
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0
  },

  aladin : { // SHMU model aladin teplota predpoved pocasia
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0
  },

  teplota : { // priemerna teplota (wunderground a aladin)
    h0: 0, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, h7: 0,
    h8: 0, h9: 0, h10: 0, h11: 0, h12: 0, h13: 0, h14: 0, h15: 0,
    h16: 0, h17: 0, h18: 0, h19: 0, h20: 0, h21: 0, h22: 0, h23: 0
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_OBJEDNAVKA_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_OBJEDNAVKA_SUCCESS:
      return {...state, loading: false,
        slovnaft: action.data['objednavka'].find(x => x['zdroj'].id === 8),
        ppc_hv: action.data['objednavka'].find(x => x['zdroj'].id === 6),
        ppc_para: action.data['objednavka'].find(x => x['zdroj'].id === 7),
        wunder: action.data['objednavka'].find(x => x['zdroj'].id === 91),
        aladin: action.data['objednavka'].find(x => x['zdroj'].id === 92),
        teplota: action.data['objednavka'].find(x => x['zdroj'].id === 93)
      }

    default:
      return state
  }
}