import * as TYPES from '../../../services/ActionTypes'

const initState = {
  files: [],

  loading: false,
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
        platne: false
      }
    })
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SUBORY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SUBORY_SUCCESS:
      return {...state, loading: false, files: action.data}
    case TYPES.FETCH_SUBORY_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.DELETE_SUBOR_SUCCESS:
      return {...state, deleting: false,
        files: updateObjectInArray(state.files, action)
      }

    default:
      return state
  }
}