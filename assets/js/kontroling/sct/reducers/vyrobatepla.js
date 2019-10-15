import * as TYPES from '../../../services/ActionTypes'

const initState = {

  tpv: {                // teplaren vychod
    kwh: 0,
    gj: 0
  },
  
  vhj: {                // vyhrevna juh
    kwh: 0,
    gj: 0
  },
  
  tpz: {                // teplaren zapad
    kwh: 0,
    gj: 0
  },

  pk: {                 // plynove kotolne
    kwh: 0,
    gj: 0
  },

  vlastne: {            // vlastne zdroje
    kwh: 0,
    gj: 0
  },

  ppc: {                // paroplynovy cyklus
    kwh: 0,
    gj: 0
  },
  
  slovnaft: {
    kwh: 0,
    gj: 0
  },
  
  cw: {                 // cogen west
    kwh: 0,
    gj: 0
  },
  
  externe: {            // externe zdroje
    kwh: 0,
    gj: 0
  },
  
  spolu: {              // vlastne + externe
    kwh: 0,
    gj: 0
  },
  
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        tpv: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_TPV_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_TPV_GJ').hodnota
        },

        vhj: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_VHJ_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_VHJ_GJ').hodnota
        },

        tpz: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_TPZ_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_TPZ_GJ').hodnota
        },

        pk: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_PK_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_PK_GJ').hodnota
        },

        vlastne: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_VZ_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_VZ_GJ').hodnota
        },

        ppc: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_PPC_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_PPC_GJ').hodnota
        },

        slovnaft: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_SLO_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_SLO_GJ').hodnota
        },

        cw: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_CW_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_CW_GJ').hodnota
        },

        externe: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_EZ_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_EZ_GJ').hodnota
        },

        spolu: {
          kwh: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_SPOLU_KWH').hodnota,
          gj: action.data['bunky'].find(x => x.id === 'SDT_VTPZ_SPOLU_GJ').hodnota
        }
        
      }

    default:
      return state
  }
}
