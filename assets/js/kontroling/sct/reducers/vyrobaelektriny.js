import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_Elektrina

  veez: {               // vyroba elektrickej energie na zdroji
    tpv: 0,
    tpz: 0,
    bat: 0
  },

  dszse: {              // dodavka do siete ZSE
    tpv: 0,
    tpz: 0,
    bat: 0
  },

  dree: {               // dodavka regulacnej elektrickej energie
    tpv: 0,
    tpz: 0,
    bat: 0
  },

  vsee: {               // vlastna spotreba elektrickej energie
    tpv: 0,
    tpz: 0,
    bat: 0
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_VYROBA_ELEKTRINY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_VYROBA_ELEKTRINY_SUCCESS:
      return {...state, loading: false,
        veez: action.data.find(x => x['polozka'].id === 10),
        dszse: action.data.find(x => x['polozka'].id === 11),
        dree: action.data.find(x => x['polozka'].id === 12),
        vsee: action.data.find(x => x['polozka'].id === 13)
      }
    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,
        veez: {
          ...state.veez,
          bat: action.data['bunky'].find(x => x.id === 'SDT_VEE_VEEZ_BAT').hodnota
        },
        dszse: {
          ...state.dszse,
          bat: action.data['bunky'].find(x => x.id === 'SDT_VEE_DSZSE_BAT').hodnota
        },
        dree: {
          ...state.dree,
          bat: action.data['bunky'].find(x => x.id === 'SDT_VEE_DREE_BAT').hodnota
        },
        vsee: {
          ...state.vsee,
          bat: action.data['bunky'].find(x => x.id === 'SDT_VEE_VSEE_BAT').hodnota
        }
      }
    case TYPES.UPDATE_VYROBA_ELEKTRINY_SUCCESS:
      return {...state,
        [action.key]: {
          ...state[action.key],
          ...action.data
        }
      }
    case TYPES.UPDATE_VYROBA_ELEKTRINY_ERROR:
      return {...state, error: action.data}
    default:
      return state
  }
}