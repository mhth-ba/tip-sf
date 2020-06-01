import * as TYPES from '../../../services/ActionTypes'

const initState = {

  varianty: [],

  loading: false,
  creating: false,
  updating: false,
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

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_VARIANTY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_VARIANTY_SUCCESS:
      return {...state, loading: false, varianty: action.data}
    case TYPES.FETCH_VARIANTY_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.CREATE_VARIANT_REQUEST:
      return {...state, creating: true}
    case TYPES.CREATE_VARIANT_SUCCESS:
      return {...state, creating: false,
        varianty: [
          ...state.varianty,
          action.data
        ]
      }
    case TYPES.CREATE_VARIANT_ERROR:
      return {...state, creating: false, error: action.data}

    case TYPES.UPDATE_VARIANT_REQUEST:
      return {...state, updating: true}
    case TYPES.UPDATE_VARIANT_SUCCESS:
      return {...state, updating: false, varianty: updateObjectInArray(state.varianty, action)}
    case TYPES.UPDATE_VARIANT_ERROR:
      return {...state, updating: false, error: action.data}

    case TYPES.DELETE_VARIANT_REQUEST:
      return {...state, deleting: true}
    case TYPES.DELETE_VARIANT_SUCCESS:
      return {...state, deleting: false,
        varianty: removeObjectFromArray(state.varianty, action)
      }
    case TYPES.DELETE_VARIANT_ERROR:
      return {...state, deleting: false, error: action.data}

    default:
      return state
  }
}
