import * as TYPES from '../../../services/ActionTypes'

const initState = {
  // Store the records in an array named "hlavicka"
  // Each record contains the fields you specified:
  hlavicka: [
    /*
      {
        id: 1,
        dispecer_1: '',
        dispecer_2: '',
        poruchovka_1: '',
        poruchovka_2: '',
        teplota_letisko: 0,
        teplota_tpv: 0,
        teplota_tpz: 0,
        doplnovanie_tpv: 0,
        doplnovanie_tpz: 0
      }
    */
  ],

  loading: false,
  updating: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    // Request to fetch "hlavicka"
    case TYPES.FETCH_HLAVICKA_REQUEST:
      return {
        ...state,
        loading: true
      }

    // Successfully fetched data for "hlavicka"
    case TYPES.FETCH_HLAVICKA_SUCCESS:
      return {
        ...state,
        loading: false,
        // If your backend returns an array, you can map it directly:
        // e.g. action.data might be an array of objects
        hlavicka: action.data
      }

    // Error while fetching
    case TYPES.FETCH_HLAVICKA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data
      }

    default:
      return state
  }
}
