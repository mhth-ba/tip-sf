import * as TYPES from '../../../services/ActionTypes'

const initState = {
  // Store file attachments by entry ID and source
  byEntryId: {},
  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.LOAD_OSTHLAVNY_REQUEST:
      // Clear cached attachments when changing days, but preserve poznamky attachments
      const preservedPoznamkyAttachments = {}
      Object.keys(state.byEntryId).forEach(key => {
        if (key.endsWith('-poznamky')) {
          preservedPoznamkyAttachments[key] = state.byEntryId[key]
        }
      })
      return {
        ...state,
        byEntryId: preservedPoznamkyAttachments // Keep poznamky attachments when loading a new day
      }

    case TYPES.FETCH_PRILOHY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case TYPES.FETCH_PRILOHY_SUCCESS:
      // Use a composite key that includes both entryId and source
      const compositeKey = `${action.entryId}-${action.source}`
      return {
        ...state,
        loading: false,
        byEntryId: {
          ...state.byEntryId,
          [compositeKey]: action.data
        }
      }

    case TYPES.FETCH_PRILOHY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data
      }

    case TYPES.UPLOAD_PRILOHA_SUCCESS:
      const newPriloha = action.data
      const entryId = newPriloha.entry_id
      // Determine source from sekcia: 1 = prevadzka, 2 = dispecing, 3 = poznamky
      let source
      if (newPriloha.sekcia === 2) {
        source = 'dispecing'
      } else if (newPriloha.sekcia === 3) {
        source = 'poznamky'
      } else {
        source = 'prevadzka'
      }
      const compositeEntryKey = `${entryId}-${source}`
      const currentEntryPrilohy = state.byEntryId[compositeEntryKey] || []

      return {
        ...state,
        byEntryId: {
          ...state.byEntryId,
          [compositeEntryKey]: [...currentEntryPrilohy, newPriloha]
        }
      }

    case TYPES.DELETE_PRILOHA_SUCCESS:
      // We need to find which entry this priloha belonged to
      const deletedId = action.id
      const updatedByEntryId = { ...state.byEntryId }

      // Look through all entries to find and remove the deleted priloha
      Object.keys(updatedByEntryId).forEach(key => {
        updatedByEntryId[key] = updatedByEntryId[key].filter(priloha => priloha.id !== deletedId)
      })

      return {
        ...state,
        byEntryId: updatedByEntryId
      }

    default:
      return state
  }
}
