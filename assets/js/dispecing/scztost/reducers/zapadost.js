import * as TYPES from '../../../services/ActionTypes'

const initState = { // Dispecing.SCZTZ_Vykon
  vlastne_vykon: [],        // 133
  cudzie_vykon: [],         // 134
  vlastne_prenos: [],       // 143
  cudzie_prenos: [],        // 144
  pocasie_skutocnost: [],   // 5
  pocasie_termis: [],       // -

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SCZT_OST_ZAPAD_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SCZT_OST_ZAPAD_SUCCESS:
      return {...state, loading: false,
        vlastne_vykon: action.data['vlastne_vykon'],
        cudzie_vykon: action.data['cudzie_vykon'],
        vlastne_prenos: action.data['vlastne_prenos'],
        cudzie_prenos: action.data['cudzie_prenos'],
        pocasie_skutocnost: action.data['pocasie_skutocnost'],
        pocasie_termis: action.data['pocasie_termis']
      }
    case TYPES.FETCH_SCZT_OST_ZAPAD_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}