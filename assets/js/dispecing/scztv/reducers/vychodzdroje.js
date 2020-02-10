import * as TYPES from '../../../services/ActionTypes'

const initState = { // Dispecing.SCZTV_Zdroje
  ppc_vykon_10min: [],
  tpv_vykon_10min: [],
  slovnaft_vykon_10min: [],
  vhj_vykon_10min: [],
  vonkajsia_teplota_10min: [],
  ventil_tuv_10min: [],
  ventil_uk_10min: [],
  max: 0,

  ppc_tv_sk_10min: [],
  ppc_tv_pr_10min: [],
  tpv_tv_sk_10min: [],
  tpv_tv_pr_10min: [],
  slovnaft_tv_sk_10min: [],
  slovnaft_tv_pr_10min: [],
  vhj_tv_sk_10min: [],
  vhj_tv_pr_10min: [],

  ppc_dt_sk_10min: [],
  ppc_dt_pr_10min: [],
  tpv_dt_sk_10min: [],
  tpv_dt_pr_10min: [],
  slovnaft_dt_sk_10min: [],
  slovnaft_dt_pr_10min: [],
  vhj_dt_sk_10min: [],
  vhj_dt_pr_10min: [],

  ppc_p_sk_10min: [],
  ppc_p_pr_10min: [],
  tpv_p_sk_10min: [],
  tpv_p_pr_10min: [],
  slovnaft_p_sk_10min: [],
  slovnaft_p_pr_10min: [],
  vhj_p_sk_10min: [],
  vhj_p_pr_10min: [],

  ppc_vykon_1h: [],
  tpv_vykon_1h: [],
  slovnaft_vykon_1h: [],
  vhj_vykon_1h: [],
  vonkajsia_teplota_1h: [],

  parametre: [],
  vonkajsia_teplota_priemer_10min: [],
  vonkajsia_teplota_priemer_1hod: [],

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SCZT_VYCHOD_ZDROJE_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SCZT_VYCHOD_ZDROJE_SUCCESS:
      return {...state, loading: false, ...action.data}
    case TYPES.FETCH_SCZT_VYCHOD_ZDROJE_ERROR:
      return {...state, loading: false, error: action.data}
    case TYPES.UPDATE_PARAMETRE:
      return {...state, parametre: action.data}
    case TYPES.UPDATE_VONKAJSIA_TEPLOTA_PRIEMER:
      return {...state,
        vonkajsia_teplota_priemer_10min: action.data.mm,
        vonkajsia_teplota_priemer_1hod: action.data.hh,
      }
    default:
      return state
  }
}