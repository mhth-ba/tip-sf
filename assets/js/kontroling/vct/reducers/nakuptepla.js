import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.VCT_NakupTepla

  dnt: {                 // dodavka nakupeneho tepla (kWh)
    ppc: 0,
    slovnaft: 0,
    cw: 0,
    spolu: 0
  },
  rp: {                  // regulacny prikon (kW)
    ppc: 0,
    slovnaft: 0,
    cw: 0,
    spolu: 0
  },
  vzc: {                 // variabilna zlozka ceny (€/kWh)
    ppc: 0,
    slovnaft: 0,
    cw: 0,
    spolu: 0
  },
  fzc: {                 // fixna zlozka ceny (€/kW)
    ppc: 0,
    slovnaft: 0,
    cw: 0,
    spolu: 0
  },
  pjc: {                 // priemerna jednotkova cena (€/kWh)
    ppc: 0,
    slovnaft: 0,
    cw: 0,
    spolu: 0
  },
  vn: {                  // variabilne naklady (€)
    ppc: 0,
    slovnaft: 0,
    cw: 0,
    spolu: 0
  },
  fn: {                  // fixne naklady (€)
    ppc: 0,
    slovnaft: 0,
    cw: 0,
    spolu: 0
  },
  nnts: {                // naklady na nakupovane teplo spolu (sumar) (€)
    ppc: 0,
    slovnaft: 0,
    cw: 0,
    spolu: 0
  },

  loading: false,
  updating: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_NAKUP_TEPLA_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_NAKUP_TEPLA_SUCCESS:
      return {...state, loading: false,

        dnt: {
          ...state.dnt,
          ...action.data.find(x => x['polozka'].id === 601)
        },
        rp: {
          ...state.rp,
          ...action.data.find(x => x['polozka'].id === 602)
        },
        vzc: {
          ...state.vzc,
          ...action.data.find(x => x['polozka'].id === 603)
        },
        fzc: {
          ...state.fzc,
          ...action.data.find(x => x['polozka'].id === 604)
        },
      }

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        dnt: {
          ...state.dnt,
          spolu: action.data['bunky'].find(x => x.id === 'NT_ONNT_DNT_SPOLU').hodnota
        },

        rp: {
          ...state.rp,
          spolu: action.data['bunky'].find(x => x.id === 'NT_ONNT_RP_SPOLU').hodnota
        },
        
        vzc: {
          ...state.vzc,
          spolu: action.data['bunky'].find(x => x.id === 'NT_ONNT_VZC_SPOLU').hodnota
        },

        fzc: {
          ...state.fzc,
          spolu: action.data['bunky'].find(x => x.id === 'NT_ONNT_FZC_SPOLU').hodnota
        },

        pjc: {
          ...state.pjc,
          ppc: action.data['bunky'].find(x => x.id === 'NT_ONNT_PJC_PPC').hodnota,
          slovnaft: action.data['bunky'].find(x => x.id === 'NT_ONNT_PJC_SLO').hodnota,
          cw: action.data['bunky'].find(x => x.id === 'NT_ONNT_PJC_CW').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'NT_ONNT_PJC_SPOLU').hodnota
        },
        
        vn: {
          ...state.vn,
          ppc: action.data['bunky'].find(x => x.id === 'NT_ONNT_VN_PPC').hodnota,
          slovnaft: action.data['bunky'].find(x => x.id === 'NT_ONNT_VN_SLO').hodnota,
          cw: action.data['bunky'].find(x => x.id === 'NT_ONNT_VN_CW').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'NT_ONNT_VN_SPOLU').hodnota
        },

        fn: {
          ...state.fn,
          ppc: action.data['bunky'].find(x => x.id === 'NT_ONNT_FN_PPC').hodnota,
          slovnaft: action.data['bunky'].find(x => x.id === 'NT_ONNT_FN_SLO').hodnota,
          cw: action.data['bunky'].find(x => x.id === 'NT_ONNT_FN_CW').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'NT_ONNT_FN_SPOLU').hodnota
        },

        nnts: {
          ...state.nnts,
          ppc: action.data['bunky'].find(x => x.id === 'NT_ONNT_NNTS_PPC').hodnota,
          slovnaft: action.data['bunky'].find(x => x.id === 'NT_ONNT_NNTS_SLO').hodnota,
          cw: action.data['bunky'].find(x => x.id === 'NT_ONNT_NNTS_CW').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'NT_ONNT_NNTS_SPOLU').hodnota
        }
      }

    case TYPES.UPDATE_NAKUP_TEPLA_SUCCESS:
      return {...state, ...action.data}

    case TYPES.UPDATE_NAKUP_TEPLA_ERROR:
      return {...state, error: action.data}

    default:
      return state
  }
}