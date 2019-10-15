import * as TYPES from '../../../services/ActionTypes'

const initState = {
  
  udt_v: {
    plan: 0,
    skut: 0,
    roz: 0,
    per: 0
  },
  str_v: {
    plan: 0,
    skut: 0,
    roz: 0,
    per: 0
  },
  cdt_v: {
    plan: 0,
    skut: 0,
    roz: 0,
    per: 0
  },
  
  udt_z: {
    plan: 0,
    skut: 0,
    roz: 0,
    per: 0
  },
  str_z: {
    plan: 0,
    skut: 0,
    roz: 0,
    per: 0
  },
  cdt_z: {
    plan: 0,
    skut: 0,
    roz: 0,
    per: 0
  },
  
  udt_b: {
    plan: 0,
    skut: 0,
    roz: 0,
    per: 0
  },
  str_b: {
    plan: 0,
    skut: 0,
    roz: 0,
    per: 0
  },
  cdt_b: {
    plan: 0,
    skut: 0,
    roz: 0,
    per: 0
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        udt_v: {
          plan: action.data['bunky'].find(x => x.id === 'SDT_PP_V_UDT_P').hodnota,
          skut: action.data['bunky'].find(x => x.id === 'SDT_UDT_SPK_V_KWH').hodnota,
          roz: action.data['bunky'].find(x => x.id === 'SDT_PP_V_UDT_R').hodnota,
          per: action.data['bunky'].find(x => x.id === 'SDT_PP_V_UDT').hodnota
        },
        
        str_v: {
          plan: action.data['bunky'].find(x => x.id === 'SDT_PP_V_STR_P').hodnota,
          skut: action.data['bunky'].find(x => x.id === 'SDT_UDT_STR_V').hodnota,
          roz: action.data['bunky'].find(x => x.id === 'SDT_PP_V_STR_R').hodnota,
          per: action.data['bunky'].find(x => x.id === 'SDT_PP_V_STR').hodnota
        },

        cdt_v: {
          plan: action.data['bunky'].find(x => x.id === 'SDT_PP_V_CDT_P').hodnota,
          skut: action.data['bunky'].find(x => x.id === 'SDT_UDT_CD_V').hodnota,
          roz: action.data['bunky'].find(x => x.id === 'SDT_PP_V_CDT_R').hodnota,
          per: action.data['bunky'].find(x => x.id === 'SDT_PP_V_CDT').hodnota
        },

        udt_z: {
          plan: action.data['bunky'].find(x => x.id === 'SDT_PP_Z_UDT_P').hodnota,
          skut: action.data['bunky'].find(x => x.id === 'SDT_UDT_SPK_Z_KWH').hodnota,
          roz: action.data['bunky'].find(x => x.id === 'SDT_PP_Z_UDT_R').hodnota,
          per: action.data['bunky'].find(x => x.id === 'SDT_PP_Z_UDT').hodnota
        },

        cdt_z: {
          plan: action.data['bunky'].find(x => x.id === 'SDT_PP_Z_CDT_P').hodnota,
          skut: action.data['bunky'].find(x => x.id === 'SDT_UDT_CD_Z').hodnota,
          roz: action.data['bunky'].find(x => x.id === 'SDT_PP_Z_CDT_R').hodnota,
          per: action.data['bunky'].find(x => x.id === 'SDT_PP_Z_CDT').hodnota
        },

        str_z: {
          plan: action.data['bunky'].find(x => x.id === 'SDT_PP_Z_STR_P').hodnota,
          skut: action.data['bunky'].find(x => x.id === 'SDT_UDT_STR_Z').hodnota,
          roz: action.data['bunky'].find(x => x.id === 'SDT_PP_Z_STR_R').hodnota,
          per: action.data['bunky'].find(x => x.id === 'SDT_PP_Z_STR').hodnota
        },

        udt_b: {
          plan: action.data['bunky'].find(x => x.id === 'SDT_PP_B_UDT_P').hodnota,
          skut: action.data['bunky'].find(x => x.id === 'SDT_UDT_SPK_B_KWH').hodnota,
          roz: action.data['bunky'].find(x => x.id === 'SDT_PP_B_UDT_R').hodnota,
          per: action.data['bunky'].find(x => x.id === 'SDT_PP_B_UDT').hodnota
        },

        str_b: {
          plan: action.data['bunky'].find(x => x.id === 'SDT_PP_B_STR_P').hodnota,
          skut: action.data['bunky'].find(x => x.id === 'SDT_UDT_STR_B').hodnota,
          roz: action.data['bunky'].find(x => x.id === 'SDT_PP_B_STR_R').hodnota,
          per: action.data['bunky'].find(x => x.id === 'SDT_PP_B_STR').hodnota
        },

        cdt_b: {
          plan: action.data['bunky'].find(x => x.id === 'SDT_PP_B_CDT_P').hodnota,
          skut: action.data['bunky'].find(x => x.id === 'SDT_UDT_CD_B').hodnota,
          roz: action.data['bunky'].find(x => x.id === 'SDT_PP_B_CDT_R').hodnota,
          per: action.data['bunky'].find(x => x.id === 'SDT_PP_B_CDT').hodnota
        }
        
      }
    default:
      return state
  }
}
