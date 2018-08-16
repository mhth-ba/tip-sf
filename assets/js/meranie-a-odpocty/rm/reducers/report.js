import * as TYPES from '../../../services/ActionTypes'

const initState = { // Meranie.ReportMeracov
  spolu: 0,

  procop: 0,
  radio: 0,
  rucne: 0,
  bvs: 0,
  odberatelske: 0,

  gj: 0,
  mwh: 0,
  voda: 0,

  vychod: 0,
  zapad: 0,

  vychod_gj: 0,
  vychod_mwh: 0,
  vychod_voda: 0,

  zapad_gj: 0,
  zapad_mwh: 0,
  zapad_voda: 0,

  procop_vychod_gj: 0,
  procop_vychod_mwh: 0,
  procop_vychod_voda: 0,

  procop_zapad_gj: 0,
  procop_zapad_mwh: 0,
  procop_zapad_voda: 0,

  radio_vychod_gj: 0,
  radio_vychod_mwh: 0,
  radio_vychod_voda: 0,

  radio_zapad_gj: 0,
  radio_zapad_mwh: 0,
  radio_zapad_voda: 0,

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_REPORT_MERACOV_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_REPORT_MERACOV_SUCCESS:
      return {...state, loading: false,
        spolu: action.data[0]['pocet'],

        procop: action.data[1]['pocet'],
        radio: action.data[2]['pocet'],
        rucne: action.data[3]['pocet'],
        bvs: action.data[4]['pocet'],
        odberatelske: action.data[5]['pocet'],

        gj: action.data[6]['pocet'],
        mwh: action.data[7]['pocet'],
        voda: action.data[8]['pocet'],

        vychod: action.data[9]['pocet'],
        zapad: action.data[10]['pocet'],

        vychod_gj: action.data[11]['pocet'],
        vychod_mwh: action.data[12]['pocet'],
        vychod_voda: action.data[13]['pocet'],

        zapad_gj: action.data[14]['pocet'],
        zapad_mwh: action.data[15]['pocet'],
        zapad_voda: action.data[16]['pocet'],

        procop_vychod_gj: action.data[17]['pocet'],
        procop_vychod_mwh: action.data[18]['pocet'],
        procop_vychod_voda: action.data[19]['pocet'],

        procop_zapad_gj: action.data[20]['pocet'],
        procop_zapad_mwh: action.data[21]['pocet'],
        procop_zapad_voda: action.data[22]['pocet'],

        radio_vychod_gj: action.data[23]['pocet'],
        radio_vychod_mwh: action.data[24]['pocet'],
        radio_vychod_voda: action.data[25]['pocet'],

        radio_zapad_gj: action.data[26]['pocet'],
        radio_zapad_mwh: action.data[27]['pocet'],
        radio_zapad_voda: action.data[28]['pocet'],
      }
    case TYPES.FETCH_SCZT_VYCHOD_VYKON_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}