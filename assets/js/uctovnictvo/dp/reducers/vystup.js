import * as TYPES from '../../../services/ActionTypes'

const initState = { // Uctovnictvo.DP_Vystup_Z
  zmenene: [], // zmena znamienka
  povodne: [], // bez zmeny znamienka

  loading: false,
  error: null,
}

function updateObjectInArray(array, action, zmenene) {

  // ak editujeme pohľad "zmenené", id týchto položiek sa začína číslom 99
  // skutočné ID záznamu v databáze je však bez úvodných dvoch cifier 99, preto ich treba odstrániť
  // v prípade, že editujeme pohľad "pôvodné", neupravujeme nič
  if (zmenene === 1) {
    action.id = Number('99' + String(action.id))
  }

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

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_VYSTUP_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_VYSTUP_SUCCESS:
      return {...state, loading: false,
        zmenene: action.data['zmenene'],
        povodne: action.data['povodne']
      }
    case TYPES.FETCH_VYSTUP_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.CREATE_DOKLAD_VYSTUP_SUCCESS:
      return {...state,
        zmenene: [...state.zmenene, action.data['zmenene']],
        povodne: [...state.povodne, action.data['povodne']]
      }

    case TYPES.UPDATE_DOKLAD_VYSTUP_SUCCESS:
      return {...state,
        zmenene: updateObjectInArray(state.zmenene, action, 1),
        povodne: updateObjectInArray(state.zmenene, action, 0)
      }

    default:
      return state
  }
}
