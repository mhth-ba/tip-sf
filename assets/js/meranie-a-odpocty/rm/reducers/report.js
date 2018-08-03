import * as TYPES from '../../../services/ActionTypes'

const initState = { // Meranie.ReportMeracov
  polozky: [],

  datum: 0,

  data: {
    spolu: 0,

    procop: 0,
    radio: 0,
    rucne: 0,

    teplo: 0,
    gj: 0,
    mwh: 0,
    voda: 0,

    vychod: 0,
    zapad: 0,

    sposob_odpoctu: {
      procop: {
        vychod : {
          teplo: {
            spolu: 0,
            gj: 0,
            mwh: 0
          },
          voda: 0
        },
        zapad: {
          teplo: {
            spolu: 0,
            gj: 0,
            mwh: 0
          },
          voda: 0
        }
      },
      radio: {
        vychod : {
          teplo: {
            spolu: 0,
            gj: 0,
            mwh: 0
          },
          voda: 0
        },
        zapad: {
          teplo: {
            spolu: 0,
            gj: 0,
            mwh: 0
          },
          voda: 0
        }
      }
    },

    merna_jednotka: {
      teplo: {
        gj: {
          vychod: 0,
          zapad: 0
        },
        mwh: {
          vychod: 0,
          zapad: 0
        }
      },
      voda: {
        vychod: 0,
        zapad: 0
      }
    }
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_REPORT_MERACOV_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_REPORT_MERACOV_SUCCESS:
      return {...state, loading: false,
        spolu: action.data['spolu']
      }
    case TYPES.FETCH_SCZT_VYCHOD_VYKON_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}