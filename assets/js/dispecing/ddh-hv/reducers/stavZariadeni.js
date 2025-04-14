import * as TYPES from '../../../services/ActionTypes'

const initialState = {
  devices: [],
  loading: false,
  error: null
}

export const stavZariadeni = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_STAV_ZARIADENI_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case TYPES.FETCH_STAV_ZARIADENI_SUCCESS:
      return {
        ...state,
        devices: action.data,
        loading: false,
        error: null
      }

    case TYPES.FETCH_STAV_ZARIADENI_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}

export default stavZariadeni
