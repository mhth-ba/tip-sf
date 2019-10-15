import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_Konstanty

  nsvzp: 0, // (n)ormovane (s)traty na stupni (v)ychodnej sustavy medzi (z)drojom a (p)rimarom,
  nsvpo: 0, // (n)ormovane (s)traty na stupni (v)ychodnej sustavy medzi (p)rimarom a (O)ST
  nsvos: 0, // (n)ormovane (s)traty na stupni (v)ychodnej sustavy medzi (O)ST a (s)ekundarom

  nszzp: 0, // (n)ormovane (s)traty na stupni (z)apadnej sustavy medzi zdrojom a (p)rimarom
  nszpo: 0, // (n)ormovane (s)traty na stupni (z)apadnej sustavy medzi primarom a (O)ST
  nszos: 0, // (n)ormovane (s)traty na stupni (z)apadnej sustavy medzi (O)ST a (s)ekundarom

  jczpsopov: { id: null, hodnota: 0 }, // (j)ednotkova (c)ena (z)emneho (p)lynu SOPo na MWh pre TpV
  jczpsoppv: { id: null, hodnota: 0 }, // (j)ednotkova (c)ena (z)emneho (p)lynu SOPp na MWh pre TpV
  jczpsopdv: { id: null, hodnota: 0 }, // (j)ednotkova (c)ena (z)emneho (p)lynu SOPd na MWh pre TpV

  jczpsopoz: { id: null, hodnota: 0 }, // (j)ednotkova (c)ena (z)emneho (p)lynu SOPo na MWh pre TpZ
  jczpsoppz: { id: null, hodnota: 0 }, // (j)ednotkova (c)ena (z)emneho (p)lynu SOPp na MWh pre TpZ
  jczpsopdz: { id: null, hodnota: 0 }, // (j)ednotkova (c)ena (z)emneho (p)lynu SOPd na MWh pre TpZ

  jczpsopoj: { id: null, hodnota: 0 }, // (j)ednotkova (c)ena (z)emneho (p)lynu SOPo na MWh pre VhJ
  jczpsoppj: { id: null, hodnota: 0 }, // (j)ednotkova (c)ena (z)emneho (p)lynu SOPp na MWh pre VhJ
  jczpsopdj: { id: null, hodnota: 0 }, // (j)ednotkova (c)ena (z)emneho (p)lynu SOPd na MWh pre VhJ

  kpb: 0, // (k)oeficient (p)alivoveho (b)onusu

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_KONSTANTY_NCT_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_KONSTANTY_NCT_SUCCESS:
      return {...state,  loading: false,
        nsvzp: action.data.find(x => x['polozka'].id === 501).hodnota,
        nsvpo: action.data.find(x => x['polozka'].id === 502).hodnota,
        nsvos: action.data.find(x => x['polozka'].id === 503).hodnota,
        nszzp: action.data.find(x => x['polozka'].id === 504).hodnota,
        nszpo: action.data.find(x => x['polozka'].id === 505).hodnota,
        nszos: action.data.find(x => x['polozka'].id === 506).hodnota
      }
    case TYPES.FETCH_KONSTANTY_NCT_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.FETCH_KONSTANTY_SCT_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_KONSTANTY_SCT_SUCCESS:
      return {...state,  loading: false,
        jczpsopov: action.data.find(x => x['polozka'].id === 901),
        jczpsoppv: action.data.find(x => x['polozka'].id === 902),
        jczpsopdv: action.data.find(x => x['polozka'].id === 903),

        jczpsopoz: action.data.find(x => x['polozka'].id === 904),
        jczpsoppz: action.data.find(x => x['polozka'].id === 905),
        jczpsopdz: action.data.find(x => x['polozka'].id === 906),

        jczpsopoj: action.data.find(x => x['polozka'].id === 907),
        jczpsoppj: action.data.find(x => x['polozka'].id === 908),
        jczpsopdj: action.data.find(x => x['polozka'].id === 909),

        kpb: action.data.find(x => x['polozka'].id === 101),
      }
    case TYPES.FETCH_KONSTANTY_SCT_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.UPDATE_KONSTANTY_SUCCESS:
      return {...state, ...action.data}
    case TYPES.UPDATE_KONSTANTY_ERROR:
      return {...state, error: action.data}

    default:
      return state
  }
}