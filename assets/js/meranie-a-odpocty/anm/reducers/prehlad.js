import * as TYPES from '../../../services/ActionTypes'

const initState = { // Meranie.ANM_PrehladKategoria, ANM_PrehladPoznamka
  kategorie: [],
  poznamky: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_PREHLAD_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_PREHLAD_SUCCESS:
      return {...state, loading: false,
        kategorie: action.data['kategorie'],
        poznamky: action.data['poznamky']
      }
    case TYPES.FETCH_PREHLAD_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}