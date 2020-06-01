import * as TYPES from '../../../services/ActionTypes'

const initState = {
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.PROCESS_UPLOADED_FILE_REQUEST:
      return {...state, loading: true}
    case TYPES.PROCESS_UPLOADED_FILE_SUCCESS:
      return {...state, loading: false}
    case TYPES.PROCESS_UPLOADED_FILE_ERROR:
      return {...state, error: action.data, loading: false}
    default:
      return state
  }
}