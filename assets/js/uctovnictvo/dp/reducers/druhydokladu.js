import * as TYPES from '../../../services/ActionTypes'

const initState = {
  zoznam: [], // druhy dokladu k jednotlivym znakom dane

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_DRUHY_DOKLADU_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_DRUHY_DOKLADU_SUCCESS:
      return {...state, loading: false,
        zoznam: action.data['zoznam']
      }
    case TYPES.FETCH_DRUHY_DOKLADU_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
