import * as TYPES from '../../../services/ActionTypes'

const initState = {

  kotolne: [],   // Kontroling.SCT_Kotolna
  parametre: [], // Kontroling.SCT_KotolnaParametre
  udaje: [],     // Kontroling.SCT_KotolnaUdaje
  platnost: [],  // Kontroling.SCT_KotolnaPlatnost

  zps: {         // naklady na (z)emny (p)lyn - (s)umar
    m3: 0,       // mnozstvo zemneho plynu v m3
    mwh: 0,      // mnozstvo zemneho plynu v MWh
    nbsd: 0,     // naklady bez spotrebnej dane
    sd: 0,       // spotrebna dan
    pdm: 0,      // prekrocenie dohodnnutych mnozstiev
    cn: 0        // celkove naklady so spotrebnou danou
  },

  loading: false,
  creating: false,
  deleting: false,
  error: null
}

function updateObjectInArray(array, action) {
  const index = array.findIndex(x => x.id === action.id)

  return array.map(
    (item, ix) => {
      if (ix !== index) {
        // this is not the item we care about - keep it as-is
        return item
      }

      // otherwise, this is the one we want - return an updated value
      return {
          ...item,
          ...action.data
      }
    })
}

function removeObjectFromArray(array, action) {
  const index = array.findIndex(x => x.id === action.id)

  return array.filter( (item, ix) => ix !== index )
}

function removeObjectsFromArray(array, action) {
  return array.filter( (item, ix) => item.kotolna.id !== action.id )
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_KOTOLNE_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_KOTOLNE_SUCCESS:
      return {...state, loading: false,
        kotolne: action.data['kotolne'],
        parametre: action.data['parametre'],
        udaje: action.data['udaje'],
        platnost: action.data['platnost']
      }
    case TYPES.FETCH_KOTOLNE_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,
        zps: {
          m3: action.data['bunky'].find(x => x.id === 'FZP_PK_SPOLU_M3').hodnota,
          mwh: action.data['bunky'].find(x => x.id === 'FZP_PK_SPOLU_MWH').hodnota,
          nbsd: action.data['bunky'].find(x => x.id === 'FZP_PK_SPOLU_NBSD').hodnota,
          sd: action.data['bunky'].find(x => x.id === 'FZP_PK_SPOLU_SD').hodnota,
          pdm: action.data['bunky'].find(x => x.id === 'FZP_PK_SPOLU_PDM').hodnota,
          cn: action.data['bunky'].find(x => x.id === 'FZP_PK_SPOLU_CN').hodnota
        }
      }

    case TYPES.CREATE_KOTOLNA_REQUEST:
      return {...state, creating: true}

    case TYPES.CREATE_KOTOLNA_SUCCESS:
      return {...state, creating: false,
        kotolne: [...state.kotolne, action.data.kotolna],
        parametre: [...state.parametre, ...action.data.parametre],
        udaje: [...state.udaje, action.data.udaje],
        platnost: [...state.platnost, action.data.platnost]
      }

    case TYPES.CREATE_KOTOLNA_ERROR:
      return {...state, creating: false}

    case TYPES.UPDATE_KOTOLNA_SUCCESS:
      return {...state, kotolne: updateObjectInArray(state.kotolne, action)}

    case TYPES.UPDATE_PARAMETER_KOTOLNE_SUCCESS:
      return {...state, parametre: updateObjectInArray(state.parametre, action)}

    case TYPES.UPDATE_UDAJ_KOTOLNE_SUCCESS:
      return {...state, udaje: updateObjectInArray(state.udaje, action)}

    case TYPES.DELETE_KOTOLNA_REQUEST:
      return {...state, deleting: true}

    case TYPES.DELETE_KOTOLNA_SUCCESS:
      return {...state, deleting: false,
        kotolne: removeObjectFromArray(state.kotolne, action),
        parametre: removeObjectsFromArray(state.parametre, action),
        udaje: removeObjectsFromArray(state.udaje, action),
        platnost: removeObjectFromArray(state.platnost, action)
      }

    case TYPES.DELETE_KOTOLNA_ERROR:
      return {...state, deleting: false, error: action.data}

    default:
      return state
  }
}