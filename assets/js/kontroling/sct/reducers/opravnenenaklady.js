import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_VypocetBuniek (stored procedure)

  tpv: {
    nm: 0,       // normativne mnozstvo
    jc: 0,       // jednotkova cena
    nn: 0,       // normativne naklady
    sfn: 0,      // skutocne fakturovane naklady
    pb: 0,       // palivovy bonus
    eonzp: 0     // ekonomicky opravnene naklady na zemny plyn
  },

  vhj: {
    nm: 0,       // normativne mnozstvo
    jc: 0,       // jednotkova cena
    nn: 0,       // normativne naklady
    sfn: 0,      // skutocne fakturovane naklady
    pb: 0,       // palivovy bonus
    eonzp: 0     // ekonomicky opravnene naklady na zemny plyn
  },

  tpz: {
    nm: 0,       // normativne mnozstvo
    jc: 0,       // jednotkova cena
    nn: 0,       // normativne naklady
    sfn: 0,      // skutocne fakturovane naklady
    pb: 0,       // palivovy bonus
    eonzp: 0     // ekonomicky opravnene naklady na zemny plyn
  },

  pk: [{         // plynove kotolne
    id: 1,
    kotolna: "PK1",
    nmzp_mwh: 0,
    jczp: 0,
    nn: 0,
    sfn: 0,
    pb: 0,
    eon: 0
  }],

  sumar: {
    nm: 0,       // normativne mnozstvo
    nn: 0,       // normativne naklady
    sfn: 0,      // skutocne fakturovane naklady
    pb: 0,       // palivovy bonus
    eonzp: 0     // ekonomicky opravnene naklady na zemny plyn
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_OPRAVNENE_NAKLADY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_OPRAVNENE_NAKLADY_SUCCESS:
      return {...state, loading: false,
        pk: [...action.data['kotolne']]
      }
    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        tpv: {
          nm: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPV_NM').hodnota,
          jc: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPV_JC').hodnota,
          nn: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPV_NN').hodnota,
          sfn: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPV_SFN').hodnota,
          pb: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPV_PB').hodnota,
          eonzp: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPV').hodnota
        },

        vhj: {
          nm: action.data['bunky'].find(x => x.id === 'PB_EONNZP_VHJ_NM').hodnota,
          jc: action.data['bunky'].find(x => x.id === 'PB_EONNZP_VHJ_JC').hodnota,
          nn: action.data['bunky'].find(x => x.id === 'PB_EONNZP_VHJ_NN').hodnota,
          sfn: action.data['bunky'].find(x => x.id === 'PB_EONNZP_VHJ_SFN').hodnota,
          pb: action.data['bunky'].find(x => x.id === 'PB_EONNZP_VHJ_PB').hodnota,
          eonzp: action.data['bunky'].find(x => x.id === 'PB_EONNZP_VHJ').hodnota
        },

        tpz: {
          nm: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPZ_NM').hodnota,
          jc: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPZ_JC').hodnota,
          nn: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPZ_NN').hodnota,
          sfn: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPZ_SFN').hodnota,
          pb: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPZ_PB').hodnota,
          eonzp: action.data['bunky'].find(x => x.id === 'PB_EONNZP_TPZ').hodnota
        },

        sumar: {
          nm: action.data['bunky'].find(x => x.id === 'PB_EONNZP_NM_SPOLU').hodnota,
          nn: action.data['bunky'].find(x => x.id === 'PB_EONNZP_NN_SPOLU').hodnota,
          sfn: action.data['bunky'].find(x => x.id === 'PB_EONNZP_SFN_SPOLU').hodnota,
          pb: action.data['bunky'].find(x => x.id === 'PB_EONNZP_PB_SPOLU').hodnota,
          eonzp: action.data['bunky'].find(x => x.id === 'PB_EONNZP_SPOLU').hodnota
        }
      }
    default:
      return state
  }
}