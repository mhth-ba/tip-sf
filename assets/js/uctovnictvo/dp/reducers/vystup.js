import * as TYPES from '../../../services/ActionTypes'

const initState = { // Uctovnictvo.DP_Vystup_Z
  zmenene: [], // zmena znamienka
  povodne: [], // bez zmeny znamienka

  loading: false,
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_VYSTUP_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_VYSTUP_SUCCESS:
      return {...state, loading: false,
        zmenene: action.data['zmenene'],
        povodne: action.data['povodne']
      }
    case TYPES.FETCH_VYSTUP_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.CREATE_DOKLAD_VYSTUP_SUCCESS:
      return {...state,
        zmenene: [...state.zmenene, action.data['zmenene']],
        povodne: [...state.povodne, action.data['povodne']]
      }

    default:
      return state
  }
}
