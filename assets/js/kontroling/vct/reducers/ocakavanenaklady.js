import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.VCT_OcakavaneNaklady

  skutocnost: {
    ntvz: {
      id: 0,
      zadane: 0
    },
    nekpz: {
      id: 0,
      zadane: 0
    },
    ntfz: {
      id: 0,
      zadane: 0
    },
    nauz: {
      id: 0,
      zadane: 0
    },
    ohnm: {
      id: 0,
      zadane: 0
    },
    oosz: {
      id: 0,
      zadane: 0
    }
  },

  forecast: { // forecast 1-12 (100%)
    tvo: {
      id: 0,
      hodnota: 0
    },
    ee: {
      id: 0,
      hodnota: 0
    },
    voda: {
      id: 0,
      hodnota: 0
    },
    th: {
      id: 0,
      hodnota: 0
    },
    nekpz: {
      id: 0,
      hodnota: 0
    },
    pm: {
      id: 0,
      hodnota: 0
    },
    dane: {
      id: 0,
      hodnota: 0
    },
    naj: {
      id: 0,
      hodnota: 0
    },
    rzpp: {
      id: 0,
      hodnota: 0
    },
    nauz: {
      id: 0,
      hodnota: 0
    },
    ohnm: {
      id: 0,
      hodnota: 0
    },
    oosz: {
      id: 0,
      hodnota: 0
    },
    ous: {
      id: 0,
      hodnota: 0
    },
    uiu: {
      id: 0,
      hodnota: 0
    }
  },

  zp: {                 // zemny plyn
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,   // plan - skutocnost
    porovnanie_pv: 0    // plan - variant (prave zvoleny)
  },
  tvo: {                 // tazky vykurovaci olej
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  ntvz: {                 // nakupovane teplo - variabilna zlozka
    plan: 0,
    skutocnost: {
      id: 0,
      zadane: 0
    },
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  ee: {                 // elektricka energia
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  voda: {                 // voda
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  th: {                 // technologicke hmoty
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  nekpz: {                 // nakup emisnych kvot a poplatky za znecistenie
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  vnct: {                 // variabilne naklady v cene tepla
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  dmt: {                 // dodane mnozstvo tepla
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  vzct: {                 // variabilna zlozka ceny tepla bez dph
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  ntfz: {                 // nakupovane teplo - fixna zlozka
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  pm: {                 // poistenie majetku
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  dane: {                 // dane
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  naj: {                 // najomne
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  rzpp: {                 // revizie, zakonne prehliadky a poplatky
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  nauz: {                 // naklady na audit uctovnej zavierky
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  ohnm: {                 // odpisy hmotneho a nehmotneho majetku
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  oosz: {                 // odpisy a opravy spolocnych zariadeni
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  ous: {                 // opravy a udrziavanie spolu
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  uiu: {                 // uroky z investicneho uveru
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  rzfn: {                 // regulovana zlozka fixnych nakladov
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_pv: 0
  },
  pz: {                 // primerany zisk
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_pv: 0
  },
  fnpz: {                 // fixne naklady a primerany zisk v cene tepla
    plan: 0,
    skutocnost: 0,
    forecast: 0,
    porovnanie_ps: 0,
    porovnanie_pv: 0
  },
  rp: {                 // regulacny prikon
    plan: 0,
    skutocnost: 0,
    forecast: 0
  },
  fzct: {                 // fixna zlozka ceny tepla bez dph
    plan: 0,
    skutocnost: 0,
    forecast: 0
  },

  varianty: [],

  loading: false,
  updating: false,
  error: null
}

function removeObjectFromArray(array, action) {
  const index = array.findIndex(x => x.id === action.id)

  return array.filter( (item, ix) => ix !== index )
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SKUTOCNE_NAKLADY_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_SKUTOCNE_NAKLADY_SUCCESS:
      return {...state, loading: false,
        skutocnost: {
          ntvz: action.data.find(x => x.ucet.id === 115),
          nekpz: action.data.find(x => x.ucet.id === 117),
          ntfz: action.data.find(x => x.ucet.id === 116),
          nauz: action.data.find(x => x.ucet.id === 113),
          ohnm: action.data.find(x => x.ucet.id === 101),
          oosz: action.data.find(x => x.ucet.id === 102)
        }
      }

    case TYPES.FETCH_OCAKAVANE_NAKLADY_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_OCAKAVANE_NAKLADY_SUCCESS:
      return {...state, loading: false,
        forecast: {
          tvo: action.data.find(x => x.ucet.id === 2),
          ee: action.data.find(x => x.ucet.id === 3),
          voda: action.data.find(x => x.ucet.id === 4),
          th: action.data.find(x => x.ucet.id === 5),
          nekpz: action.data.find(x => x.ucet.id === 117),
          pm: action.data.find(x => x.ucet.id === 7),
          dane: action.data.find(x => x.ucet.id === 8),
          naj: action.data.find(x => x.ucet.id === 9),
          rzpp: action.data.find(x => x.ucet.id === 10),
          nauz: action.data.find(x => x.ucet.id === 113),
          ohnm: action.data.find(x => x.ucet.id === 101),
          oosz: action.data.find(x => x.ucet.id === 102),
          ous: action.data.find(x => x.ucet.id === 11),
          uiu: action.data.find(x => x.ucet.id === 12)
        }
      }

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      const data = action.data['bunky']
      return {...state,
        zp: {
          plan: data.find(x => x.id === 'SNTE_ONTE_ZP_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_ZP_S').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_ZP_F').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_ZP_PS').hodnota
        },
        tvo: {
          plan: data.find(x => x.id === 'SNTE_ONTE_TVO_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_TVO_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_TVO_PS').hodnota
        },
        ntvz: {
          plan: data.find(x => x.id === 'SNTE_ONTE_NTVZ_P').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_NTVZ_F').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_NTVZ_PS').hodnota
        },
        ee: {
          plan: data.find(x => x.id === 'SNTE_ONTE_EE_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_EE_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_EE_PS').hodnota
        },
        voda: {
          plan: data.find(x => x.id === 'SNTE_ONTE_VODA_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_VODA_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_VODA_PS').hodnota
        },
        th: {
          plan: data.find(x => x.id === 'SNTE_ONTE_TH_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_TH_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_TH_PS').hodnota
        },
        nekpz: {
          plan: data.find(x => x.id === 'SNTE_ONTE_NEKPZ_P').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_NEKPZ_PS').hodnota
        },
        vnct: {
          plan: data.find(x => x.id === 'SNTE_ONTE_VNCT_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_VNCT_S').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_VNCT_F').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_VNCT_PS').hodnota
        },
        dmt: {
          plan: data.find(x => x.id === 'SNTE_ONTE_DMT_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_DMT_S').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_DMT_F').hodnota
        },
        vzct: {
          plan: data.find(x => x.id === 'SNTE_ONTE_VZCT_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_VZCT_S').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_VZCT_F').hodnota
        },
        ntfz: {
          plan: data.find(x => x.id === 'SNTE_ONTE_NTFZ_P').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_NTFZ_F').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_NTFZ_PS').hodnota
        },
        pm: {
          plan: data.find(x => x.id === 'SNTE_ONTE_PM_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_PM_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_PM_PS').hodnota
        },
        dane: {
          plan: data.find(x => x.id === 'SNTE_ONTE_DANE_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_DANE_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_DANE_PS').hodnota
        },
        naj: {
          plan: data.find(x => x.id === 'SNTE_ONTE_NAJ_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_NAJ_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_NAJ_PS').hodnota
        },
        rzpp: {
          plan: data.find(x => x.id === 'SNTE_ONTE_RZPP_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_RZPP_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_RZPP_PS').hodnota
        },
        nauz: {
          plan: data.find(x => x.id === 'SNTE_ONTE_NAUZ_P').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_NAUZ_PS').hodnota
        },
        ohnm: {
          plan: data.find(x => x.id === 'SNTE_ONTE_OHNM_P').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_OHNM_PS').hodnota
        },
        oosz: {
          plan: data.find(x => x.id === 'SNTE_ONTE_OOSZ_P').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_OOSZ_PS').hodnota
        },
        ous: {
          plan: data.find(x => x.id === 'SNTE_ONTE_OUS_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_OUS_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_OUS_PS').hodnota
        },
        uiu: {
          plan: data.find(x => x.id === 'SNTE_ONTE_UIU_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_UIU_S').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_UIU_PS').hodnota
        },
        rzfn: {
          plan: data.find(x => x.id === 'SNTE_ONTE_RZFN_P').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_RZFN_F').hodnota
        },
        pz: {
          plan: data.find(x => x.id === 'SNTE_ONTE_PZ_P').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_PZ_F').hodnota
        },
        fnpz: {
          plan: data.find(x => x.id === 'SNTE_ONTE_FNPZ_P').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_FNPZ_F').hodnota,
          porovnanie_ps: data.find(x => x.id === 'SNTE_ONTE_FNPZ_PS').hodnota
        },
        rp: {
          plan: data.find(x => x.id === 'SNTE_ONTE_RP_P').hodnota,
          skutocnost: data.find(x => x.id === 'SNTE_ONTE_RP_S').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_RP_S').hodnota
        },
        fzct: {
          plan: data.find(x => x.id === 'SNTE_ONTE_FZCT_P').hodnota,
          forecast: data.find(x => x.id === 'SNTE_ONTE_FZCT_F').hodnota
        },

        varianty: action.data['varianty']['FON']
      }

    case TYPES.UPDATE_SKUTOCNE_NAKLADY_REQUEST:
      return {...state, updating: true}

    case TYPES.UPDATE_SKUTOCNE_NAKLADY_SUCCESS:
      return {...state, updating: false,
        [action.table]: {
          ...state[action.table],
          ...action.data
        }
      }

    case TYPES.UPDATE_OCAKAVANE_NAKLADY_REQUEST:
      return {...state, updating: true}

    case TYPES.UPDATE_OCAKAVANE_NAKLADY_SUCCESS:
      return {...state, updating: false,
        [action.table]: {
          ...state[action.table],
          ...action.data
        }
      }

    case TYPES.FETCH_OCAKAVANE_NAKLADY_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.UPDATE_OCAKAVANE_NAKLADY_ERROR:
      return {...state, updating: false, error: action.data}

    case TYPES.DELETE_VARIANT_SUCCESS:
      return {...state,
        varianty: removeObjectFromArray(state.varianty, action)
      }

    default:
      return state
  }
}