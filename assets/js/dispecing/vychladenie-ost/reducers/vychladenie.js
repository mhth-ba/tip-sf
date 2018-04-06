import * as TYPES from '../actions/ActionTypes'

const initState = {
    obdobia: [],
    mesiac: {
        tabulka: [],
        prehlad: [],
        graf: []
    },
    loading: false,
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case TYPES.FETCH_ZOZNAM_OBDOBI_REQUEST:
            return {...state, loading: true}
        case TYPES.FETCH_ZOZNAM_OBDOBI_SUCCESS:
            return {...state, loading: false, obdobia: action.data}
        case TYPES.FETCH_ZOZNAM_OBDOBI_ERROR:
            return {...state, loading: false, error: action.data}
        case TYPES.FETCH_VYCHLADENIE_PREHLAD_REQUEST:
            return {...state, loading: true}
        case TYPES.FETCH_VYCHLADENIE_PREHLAD_SUCCESS:
            return {...state, loading: false, mesiac: action.data}
        case TYPES.FETCH_VYCHLADENIE_PREHLAD_ERROR:
            return {...state, loading: false, error: action.data}
        default:
            return state
    }
}