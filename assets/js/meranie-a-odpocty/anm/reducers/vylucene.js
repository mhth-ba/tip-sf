import * as TYPES from '../../../services/ActionTypes'

const initState = { // Meranie.ANM_Vylucene__V
  polozky: [],

  loading: false,
  deleting: false,
  error: null
}

function updateObjectInArray(array, action, zmenene) {

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

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_VYLUCENE_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_VYLUCENE_SUCCESS:
      return {...state, loading: false,
        polozky: action.data['vylucene']
      }
    case TYPES.FETCH_VYLUCENE_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.CREATE_VYLUCENE_SUCCESS:
      return {...state,
        polozky: [...state.polozky, action.data]
      }

    case TYPES.DELETE_VYLUCENE_REQUEST:
      return {...state, deleting: true}
    case TYPES.DELETE_VYLUCENE_SUCCESS:
      return {...state,
        polozky: removeObjectFromArray(state.polozky, action),
        deleting: false
      }
    case TYPES.DELETE_VYLUCENE_ERROR:
      return {...state, deleting: false}

    default:
      return state
  }
}