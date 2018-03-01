import * as TYPES from '../../../services/ActionTypes'

const initState = {
    id: null, // id hlavneho zaznamu
    datum: {
        timestamp: null // datum vytvorenia
    },
    nazov: null,
    rok: null,
    stav: {
        stav: null
    },
    poznamka: null,
    vytvoril: {
        fullname: null // cele meno uzivatela
    },
    upload: { // povodny nazov uploadnuteho suboru
        dt: null, // dodane teplo
        sn: null, // skutocne naklady
    },
    loading: false,
    error: null,
    initialized: false // identifikacia prveho nacitania
}

export default (state = initState, action) => {
    switch (action.type) {
        case TYPES.LOAD_MAIN_ENTRY_REQUEST:
            return {...state, loading: true}
        case TYPES.LOAD_MAIN_ENTRY_SUCCESS:
            return {...state, loading: false, initialized: true, ...action.data}
        case TYPES.LOAD_MAIN_ENTRY_ERROR:
            return {...state, loading: false, error: action.data}
        case TYPES.UPDATE_HLAVNY_SUCCESS:
            return {...state, ...action.data}
        case TYPES.UPDATE_HLAVNY_ERROR:
            return {...state, error: action.data}
        default:
            return state
    }
}
