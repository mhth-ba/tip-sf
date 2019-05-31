import * as TYPES from '../../../services/ActionTypes'

const initState = { // Meranie.ANM_Analyzy
  polozky: [],

  loading: false,
  error: null
}

function removeObjectFromArray(array, action) {

  const index = array.findIndex(
    x => x.device === action.mp && x.kategoria === action.kategoria
  )

  return array.filter( (item, ix) => ix !== index )
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_ANALYZY_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_ANALYZY_SUCCESS:
      return {...state, loading: false,
        polozky: action.data['analyzy']
      }
    case TYPES.FETCH_ANALYZY_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.CREATE_VYLUCENE_SUCCESS:
      return {...state,
        polozky: removeObjectFromArray(state.polozky, action.data)
      }

    default:
      return state
  }
}