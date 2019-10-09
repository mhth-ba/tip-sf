import * as TYPES from '../../../services/ActionTypes'

const initState = {

  id: null, // id hlavneho zaznamu
  vytvoril: {
    fullname: null
  },
  den: null,
  upload: {    // povodny nazov uploadnuteho suboru
    dpp: {
      id: null,
      original: ''
    }    // denny plan prevadzky
  },

  loading: false,
  uploading: false,
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

    case TYPES.PROCESS_UPLOADED_FILE_REQUEST:
      return {...state, uploading: true}

    case TYPES.PROCESS_UPLOADED_FILE_SUCCESS:
      return {...state, uploading: false}

    case TYPES.PROCESS_UPLOADED_FILE_ERROR:
      return {...state, uploading: false}

    default:
      return state
  }
}