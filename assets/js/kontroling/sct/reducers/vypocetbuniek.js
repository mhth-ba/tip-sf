import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_VypocetBuniek (stored procedure)

  bunky: [], // jednotlive hodnoty buniek s identifikatormi

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_VYPOCET_BUNIEK_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state, loading: false,
        //bunky: action.data['bunky'],
      }
    case TYPES.FETCH_VYPOCET_BUNIEK_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
