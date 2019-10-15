import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_NormativneMnozstvo

  // hodnota  - zadavanie
  // ucinnost - zadavanie
  // mnozstvo - vypocet

  tpv: {
    vtsek: {  // vystup tepla zo sekundaru
      ucinnost: 0
    },
    vtost: {  // vystup tepla z  OST
      mnozstvo: 0,
      ucinnost: 0
    },
    vtpri: {  // vystup tepla z primaru
      mnozstvo: 0,
      ucinnost: 0
    },
    tvtpv: 0, // teplo na vystupe z tpv
    tvz: {    // teplo na vystupe zo zdroja
      mnozstvo: 0,
      ucinnost: 0
    },
    vzp: {    // vyhrevnost zemneho plynu
      hodnota: 0,
      polozka: {
        jednotka: '',
        desatiny: 0
      }
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

  vhj: {
    tvz: {    // teplo na vystupe zo zdroja
      mnozstvo: 0,
      ucinnost: 0
    },
    tvtvo: 0, // teplo vyrobene z mazutu (ŤVO = tazky vykurovaci olej)
    vzp: {    // vyhrevnost zemneho plynu
      hodnota: 0,
      polozka: {
        jednotka: '',
        desatiny: 0
      }
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

  tpz: {
    vtsek: {  // vystup tepla zo sekundaru
      ucinnost: 0
    },
    vtost: {  // vystup tepla z  OST
      mnozstvo: 0,
      ucinnost: 0
    },
    vtpri: {  // vystup tepla z primaru
      mnozstvo: 0,
      ucinnost: 0
    },
    tvtpz: 0, // teplo na vystupe z tpz
    tvz: {    // teplo na vystupe zo zdroja
      mnozstvo: 0,
      ucinnost: 0
    },
    vzp: {    // vyhrevnost zemneho plynu
      hodnota: 0,
      polozka: {
        jednotka: '',
        desatiny: 0
      }
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

  pk_bez_primaru: [{
    id: 4001,
    kotolna: 'PK1',
    z_teplo: 0,
    z_ucinnost: 0,
    vzp: 0,
    pstv: 0,
    nmzp_mwh: 0,
    nmzp_m3: 0
  }],

  pk_s_primarom: [{
    id: 4021,
    kotolna: 'PK2',
    p_teplo: 0,
    p_ucinnost: 0,
    z_teplo: 0,
    z_ucinnost: 0,
    vzp: 0,
    pstv: 0,
    nmzp_mwh: 0,
    nmzp_m3: 0
  }],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_NORMATIVNE_MNOZSTVO_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_NORMATIVNE_MNOZSTVO_SUCCESS:
      return {...state, loading: false,

        tpv: {
          ...state.tpv,
          vtsek: {
            ...state.tpv.vtsek,
            ...action.data['vychod'].find(x => x['polozka'].id === 511)
          },
          vtost: {
            ...state.tpv.vtost,
            ...action.data['vychod'].find(x => x['polozka'].id === 512)
          },
          vtpri: {
            ...state.tpv.vtpri,
            ...action.data['vychod'].find(x => x['polozka'].id === 513)
          },
          tvz: {
            ...state.tpv.tvz,
            ...action.data['vychod'].find(x => x['polozka'].id === 520)
          },
          vzp: {
            ...state.tpv.vzp,
            ...action.data['vychod'].find(x => x['polozka'].id === 523)
          },
          pstv: {
            ...state.tpv.pstv,
            ...action.data['vychod'].find(x => x['polozka'].id === 524)
          }
        },

        vhj: {
          ...state.vhj,
          tvz: {
            ...state.vhj.tvz,
            ...action.data['juh'].find(x => x['polozka'].id === 520)
          },
          tvtvo: {
            ...state.vhj.tvtvo,
            ...action.data['juh'].find(x => x['polozka'].id === 521)
          },
          vzp: {
            ...state.vhj.vzp,
            ...action.data['juh'].find(x => x['polozka'].id === 523)
          },
          pstv: {
            ...state.vhj.pstv,
            ...action.data['juh'].find(x => x['polozka'].id === 524)
          }
        },
        
        tpz: {
          ...state.tpz,
          vtsek: {
            ...state.tpz.vtsek,
            ...action.data['zapad'].find(x => x['polozka'].id === 511)
          },
          vtost: {
            ...state.tpz.vtost,
            ...action.data['zapad'].find(x => x['polozka'].id === 512)
          },
          vtpri: {
            ...state.tpz.vtpri,
            ...action.data['zapad'].find(x => x['polozka'].id === 513)
          },
          tvz: {
            ...state.tpz.tvz,
            ...action.data['zapad'].find(x => x['polozka'].id === 520)
          },
          vzp: {
            ...state.tpz.vzp,
            ...action.data['zapad'].find(x => x['polozka'].id === 523)
          },
          pstv: {
            ...state.tpz.pstv,
            ...action.data['zapad'].find(x => x['polozka'].id === 524)
          }
        },

        pk_bez_primaru: [...action.data['kotolne'].filter(x => x.primar === 0)],

        pk_s_primarom: [...action.data['kotolne'].filter(x => x.primar === 1)]
      }

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        tpv: {
          ...state.tpv,
          vtost: {
            ...state.tpv.vtost,
            mnozstvo: action.data['bunky'].find(x => x.id === 'PB_NMZPTPV_VTO_M').hodnota
          },
          vtpri: {
            ...state.tpv.vtpri,
            mnozstvo: action.data['bunky'].find(x => x.id === 'PB_NMZPTPV_VTP_M').hodnota
          },
          tvtpv: action.data['bunky'].find(x => x.id === 'PB_NMZPTPV_TVTPV_M').hodnota,
          tvz: {
            ...state.tpv.tvz,
            mnozstvo: action.data['bunky'].find(x => x.id === 'PB_NMZPTPV_TVZ_M').hodnota
          },
          nmzp: {
            mwh: action.data['bunky'].find(x => x.id === 'PB_NMZPTPV_MWH').hodnota,
            m3: action.data['bunky'].find(x => x.id === 'PB_NMZPTPV_M3').hodnota
          }
        },

        vhj: {
          ...state.vhj,
          tvz: {
            ...state.vhj.tvz,
            mnozstvo: action.data['bunky'].find(x => x.id === 'PB_NMZPVHJ_TVZ_M').hodnota
          },
          nmzp: {
            mwh: action.data['bunky'].find(x => x.id === 'PB_NMZPVHJ_MWH').hodnota,
            m3: action.data['bunky'].find(x => x.id === 'PB_NMZPVHJ_M3').hodnota
          }
        },

        tpz: {
          ...state.tpz,
          vtost: {
            ...state.tpz.vtost,
            mnozstvo: action.data['bunky'].find(x => x.id === 'PB_NMZPTPZ_VTO_M').hodnota
          },
          vtpri: {
            ...state.tpz.vtpri,
            mnozstvo: action.data['bunky'].find(x => x.id === 'PB_NMZPTPZ_VTP_M').hodnota
          },
          tvtpz: action.data['bunky'].find(x => x.id === 'PB_NMZPTPZ_TVTPZ_M').hodnota,
          tvz: {
            ...state.tpz.tvz,
            mnozstvo: action.data['bunky'].find(x => x.id === 'PB_NMZPTPZ_TVZ_M').hodnota
          },
          nmzp: {
            mwh: action.data['bunky'].find(x => x.id === 'PB_NMZPTPZ_MWH').hodnota,
            m3: action.data['bunky'].find(x => x.id === 'PB_NMZPTPZ_M3').hodnota
          }
        }
      }

    case TYPES.UPDATE_NORMATIVNE_MNOZSTVO_SUCCESS:
      return {...state, [action.table]: {
          ...state[action.table],
          ...action.data
        }
      }

    case TYPES.UPDATE_NORMATIVNE_MNOZSTVO_ERROR:
      return {...state, error: action.data}

    default:
      return state
  }
}