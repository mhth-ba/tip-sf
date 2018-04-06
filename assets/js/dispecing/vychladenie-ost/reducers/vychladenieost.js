import * as TYPES from '../actions/ActionTypes'

const initState = {
    data: {
        ost: null,
        odberatel: null,
        adresa: null,
        tabulka: [],
        graf: []
    },
    loading: false,
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case TYPES.FETCH_VYCHLADENIE_OST_REQUEST:
            return {...state, loading: true}
        case TYPES.FETCH_VYCHLADENIE_OST_SUCCESS:
            return {...state, loading: false, data: action.data}
        case TYPES.FETCH_VYCHLADENIE_OST_ERROR:
            return {...state, loading: false, error: action.data}
        default:
            return state
    }
}