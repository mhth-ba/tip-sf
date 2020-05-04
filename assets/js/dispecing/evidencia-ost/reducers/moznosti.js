import * as TYPES from '../../../services/ActionTypes'

const initState = {
  ost: [],     // cislo ost + adresa
  predmet: [], // predmet/pôvod zistenia/pôvod informacie - pred tym "typ poruchy"
  kontakt: [], // kontakt na subjekt, ktory poruchu nahlasil
  udalost: [],
  riesitel: [], // postupene na
  typ_poruchy: [], // manipulacia, armatura, vodovod, napajanie, horucovod, vymennik, regulacia, RIS, pohon, cerpadlo, zaplavenie

  pouzivatelia: [],
  role: [],

  loading: false,
  initialized: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_MOZNOSTI_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_MOZNOSTI_SUCCESS:
      return {...state, loading: false, initialized: true, ...action.data}
    case TYPES.FETCH_MOZNOSTI_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}