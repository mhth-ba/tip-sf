import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.VCT_NormativneMnozstvo

  // hodnota  - zadavanie
  // ucinnost - zadavanie
  // mnozstvo - vypocet

  vychod: {
    forecast: 0, // forecast teplo vychodna sustava
    ntppc: { // nakup tepla PPC
      hodnota: 0
    },
    ntslovnaft: { // nakup tepla Slovnaft
      hodnota: 0
    },
    tvz: {    // teplo na vystupe zo zdroja
      mnozstvo: 0,
      ucinnost: 0
    },
    pstv: {   // pomer spalovacieho tepla a vyhrevnosti
      hodnota: 0,
      polozka: {
        jednotka: '',
        desatiny: 0
      }
    },
    nmzp: {   // normativne mnozstvo zemneho plynu
      mwh: 0, // v MWh
      m3: 0   // v m3
    }
  },

  zapad: {
    forecast: 0, // forecast teplo zapadna sustava
    ntcw: { // nakup tepla cogen west
      hodnota: 0,
    },
    tvz: {    // teplo na vystupe zo zdroja
      mnozstvo: 0,
      ucinnost: 0
    },
    pstv: {   // pomer spalovacieho tepla a vyhrevnosti
      hodnota: 0,
      polozka: {
        jednotka: '',
        desatiny: 0
      }
    },
    nmzp: {   // normativne mnozstvo zemneho plynu
      mwh: 0, // v MWh
      m3: 0   // v m3
    }
  },

  varianty: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  
  const data = action.data
  
  switch (action.type) {

    case TYPES.FETCH_NORMATIVNE_MNOZSTVO_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_NORMATIVNE_MNOZSTVO_SUCCESS:
      return {...state, loading: false,

        vychod: {
          ...state.vychod,
          ntppc: {
            ...state.vychod.ntppc,
            ...data['vychod'].find(x => x['polozka'].id === 518)
          },
          ntslovnaft: {
            ...state.vychod.ntslovnaft,
            ...data['vychod'].find(x => x['polozka'].id === 517)
          },
          tvz: {
            ...state.vychod.tvz,
            ...data['vychod'].find(x => x['polozka'].id === 520)
          },
          pstv: {
            ...state.vychod.pstv,
            ...data['vychod'].find(x => x['polozka'].id === 524)
          }
        },

        zapad: {
          ...state.zapad,
          ntcw: {
            ...state.zapad.ntcw,
            ...data['zapad'].find(x => x['polozka'].id === 519)
          },
          tvz: {
            ...state.zapad.tvz,
            ...data['zapad'].find(x => x['polozka'].id === 520)
          },
          pstv: {
            ...state.zapad.pstv,
            ...data['zapad'].find(x => x['polozka'].id === 524)
          }
        },
      }

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        vychod: {
          ...state.vychod,
          tvz: {
            ...state.vychod.tvz,
            mnozstvo: data['bunky'].find(x => x.id === 'ZP_NMZPV_TVZ_M').hodnota
          },
          nmzp: {
            mwh: data['bunky'].find(x => x.id === 'ZP_NMZPV_MWH').hodnota
          }
        },

        zapad: {
          ...state.zapad,
          tvz: {
            ...state.zapad.tvz,
            mnozstvo: data['bunky'].find(x => x.id === 'ZP_NMZPZ_TVZ_M').hodnota
          },
          nmzp: {
            mwh: data['bunky'].find(x => x.id === 'ZP_NMZPZ_MWH').hodnota
          }
        },

        varianty: data['varianty']['FNM']
      }

    case TYPES.UPDATE_NORMATIVNE_MNOZSTVO_SUCCESS:
      return {...state, [action.table]: {
          ...state[action.table],
          ...data
        }
      }

    case TYPES.UPDATE_NORMATIVNE_MNOZSTVO_ERROR:
      return {...state, error: data}

    default:
      return state
  }
}