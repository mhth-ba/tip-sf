import * as TYPES from '../../../services/ActionTypes'

const initState = {
  id: null, // id hlavneho zaznamu
  datum: {
    timestamp: null // datum vytvorenia
  },
  zmenene: {
    timestamp: null, // datum zmeny
  },
  nazov: null,
  rok: null,
  stav: {
    stav: null
  },
  nct_dodavka: {
    id: null,
    nazov: '',
    rok: null
  },
  nct_cena: {
    id: null,
    nazov: '',
    rok: null
  },
  poznamka: 'Poznámky k hlavnému záznamu...',
  vytvoril: {
    fullname: null // cele meno uzivatela
  },
  upravil: {
    fullname: null // cele meno uzivatela
  },
  upload: { // povodny nazov uploadnuteho suboru
    dt: null, // dodane teplo
    sn: null, // skutocne naklady
    do: null  // danove odpisy
  },

  loading: false,
  updating: false,
  error: null,

  initialized: false, // identifikacia prveho nacitania
  all_data_loaded: false // pre potreby zakliknutia upravy hodnôt
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.LOAD_MAIN_ENTRY_REQUEST:
      return {...state, loading: true}

    case TYPES.LOAD_MAIN_ENTRY_SUCCESS:
      return {...state, loading: false, initialized: true, ...action.data}

    case TYPES.LOAD_MAIN_ENTRY_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state, all_data_loaded: true}

    case TYPES.FETCH_HLAVNY_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_HLAVNY_SUCCESS:
      return {...state, loading: false, ...action.data}

    case TYPES.FETCH_HLAVNY_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.UPDATE_HLAVNY_REQUEST:
      return {...state, updating: true}

    case TYPES.UPDATE_HLAVNY_SUCCESS:
      return {...state, ...action.data, updating: false}

    case TYPES.UPDATE_HLAVNY_ERROR:
      return {...state, error: action.data, updating: false}

    default:
      return state
  }
}
