import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_DodaneTeplo

  tpv: 0,
  vhj: 0,
  tpz: 0,

  ppc: 0,               // paroplynovy cyklus
  slovnaft: 0,
  cw: 0,                // cogen west

  pk: {                 // plynove kotolne
    v_kwh: 0,
    v_kw: 0,
    z_kwh: 0,
    z_kw: 0,
    b_kwh: 0,
    b_kw: 0
  },

  zdroj: {
    v_kwh: 0,
    v_kw: 0,
    z_kwh: 0,
    z_kw: 0,
    b_kwh: 0,
    b_kw: 0
  },

  primar: {
    v_kwh: 0,
    v_kw: 0,
    z_kwh: 0,
    z_kw: 0,
    b_kwh: 0,
    b_kw: 0
  },

  ost: {
    v_kwh: 0,
    v_kw: 0,
    z_kwh: 0,
    z_kw: 0,
    b_kwh: 0,
    b_kw: 0
  },

  sekundar: {
    v_kwh: 0,
    v_kw: 0,
    z_kwh: 0,
    z_kw: 0,
    b_kwh: 0,
    b_kw: 0
  },

  bpk: {                // spolu (bez plynovych kotolni)
    v_kwh: 0,
    v_kw: 0,
    z_kwh: 0,
    z_kw: 0,
    b_kwh: 0,
    b_kw: 0
  },

  spk: {                // spolu (vratane plynovych kotolni)
    v_kwh: 0,
    v_kw: 0,
    z_kwh: 0,
    z_kw: 0,
    b_kwh: 0,
    b_kw: 0
  },

  straty: {
    v_kwh: 0,
    z_kwh: 0,
    b_kwh: 0,
  },

  cd: {                 // celkova dodavka tepla
    v_kwh: 0,
    z_kwh: 0,
    b_kwh: 0,
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_DODAVKA_TEPLA_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_DODAVKA_TEPLA_SUCCESS:
      return {...state, loading: false,

        tpv: action.data.find(x => x['zdroj'].id === 1).v_kwh,
        vhj: action.data.find(x => x['zdroj'].id === 2).v_kwh,
        tpz: action.data.find(x => x['zdroj'].id === 3).z_kwh,

        ppc: action.data.find(x => x['zdroj'].id === 5).v_kwh,
        slovnaft: action.data.find(x => x['zdroj'].id === 6).v_kwh,
        cw: action.data.find(x => x['zdroj'].id === 7).z_kwh,

        pk: {
          ...state.pk,
          ...action.data.find(x => x['zdroj'].id === 4)
        },

        zdroj: {
          ...state.zdroj,
          ...action.data.find(x => x['zdroj'].id === 11)
        },
        primar: {
          ...state.primar,
          ...action.data.find(x => x['zdroj'].id === 12)
        },
        ost: {
          ...state.ost,
          ...action.data.find(x => x['zdroj'].id === 13)
        },
        sekundar: {
          ...state.sekundar,
          ...action.data.find(x => x['zdroj'].id === 14)
        }
      }
    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        zdroj: {
          ...state.zdroj,
          b_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_Z_B_KWH').hodnota,
          b_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_Z_B_KW').hodnota
        },

        primar: {
          ...state.primar,
          b_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_P_B_KWH').hodnota,
          b_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_P_B_KW').hodnota
        },

        ost: {
          ...state.ost,
          b_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_O_B_KWH').hodnota,
          b_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_O_B_KW').hodnota
        },

        sekundar: {
          ...state.sekundar,
          b_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_S_B_KWH').hodnota,
          b_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_S_B_KW').hodnota
        },

        bpk: {
          v_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_BPK_V_KWH').hodnota,
          v_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_BPK_V_KW').hodnota,
          z_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_BPK_Z_KWH').hodnota,
          z_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_BPK_Z_KW').hodnota,
          b_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_BPK_B_KWH').hodnota,
          b_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_BPK_B_KW').hodnota
        },

        spk: {
          v_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_SPK_V_KWH').hodnota,
          v_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_SPK_V_KW').hodnota,
          z_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_SPK_Z_KWH').hodnota,
          z_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_SPK_Z_KW').hodnota,
          b_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_SPK_B_KWH').hodnota,
          b_kw: action.data['bunky'].find(x => x.id === 'SDT_UDT_SPK_B_KW').hodnota
        },

        straty: {
          v_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_STR_V').hodnota,
          z_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_STR_Z').hodnota,
          b_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_STR_B').hodnota
        },

        cd: {
          v_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_CD_V').hodnota,
          z_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_CD_Z').hodnota,
          b_kwh: action.data['bunky'].find(x => x.id === 'SDT_UDT_CD_B').hodnota
        }
      }
    default:
      return state
  }
}
