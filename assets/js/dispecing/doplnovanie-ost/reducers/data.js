import * as TYPES from '../../../services/ActionTypes'

const initState = {

  doplnovanie_odpustanie: [
    /*{
      id: 10000,                // ID zaznamu
      kategoria: {
        id: 511,
        kategoria: 'Doplňovanie OST BAT východ'
      },
      datum: {
        timestamp: null         // den doplnovania/odpustania
      },
      hodnota: 5                // vypocitana hodnota doplnovania/odpustania v m3
    }*/
  ],

  rok: 2020,
  mesiac: 1,

  loading: false,
  updating: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.SET_ROK:
      return {...state, rok: action.rok}

    case TYPES.SET_MESIAC:
      return {...state, mesiac: action.mesiac}

    case TYPES.FETCH_DOPLNOVANIE_ODPUSTANIE_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_DOPLNOVANIE_ODPUSTANIE_SUCCESS:
      return {...state, loading: false, doplnovanie_odpustanie: action.data[0]}

    case TYPES.FETCH_DOPLNOVANIE_ODPUSTANIE_ERROR:
      return {...state, loading: false, error: action.data}

    default:
      return state
  }
}
