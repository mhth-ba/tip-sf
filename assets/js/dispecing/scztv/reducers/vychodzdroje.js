import * as TYPES from '../../../services/ActionTypes'

const initState = { // Dispecing.SCZTV_Zdroje
  ppc_vykon_10min: [],
  tpv_vykon_10min: [],
  slovnaft_vykon_10min: [],
  vhj_vykon_10min: [],
  vonkajsia_teplota_10min: [],
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

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SCZT_VYCHOD_ZDROJE_REQUEST:
      return {...state, loading: true}
    case TYPES.FETCH_SCZT_VYCHOD_ZDROJE_SUCCESS:
      return {...state, loading: false,
        ppc_vykon_10min: action.data['ppc_vykon_10min'],
        tpv_vykon_10min: action.data['tpv_vykon_10min'],
        slovnaft_vykon_10min: action.data['slovnaft_vykon_10min'],
        vhj_vykon_10min: action.data['vhj_vykon_10min'],
        vonkajsia_teplota_10min: action.data['vonkajsia_teplota_10min'],
        max: action.data['max'],

        ppc_tv_sk_10min: action.data['ppc_tv_sk_10min'],
        ppc_tv_pr_10min: action.data['ppc_tv_pr_10min'],
        tpv_tv_sk_10min: action.data['tpv_tv_sk_10min'],
        tpv_tv_pr_10min: action.data['tpv_tv_pr_10min'],
        slovnaft_tv_sk_10min: action.data['slovnaft_tv_sk_10min'],
        slovnaft_tv_pr_10min: action.data['slovnaft_tv_pr_10min'],
        vhj_tv_sk_10min: action.data['vhj_tv_sk_10min'],
        vhj_tv_pr_10min: action.data['vhj_tv_pr_10min'],

        ppc_dt_sk_10min: action.data['ppc_dt_sk_10min'],
        ppc_dt_pr_10min: action.data['ppc_dt_pr_10min'],
        tpv_dt_sk_10min: action.data['tpv_dt_sk_10min'],
        tpv_dt_pr_10min: action.data['tpv_dt_pr_10min'],
        slovnaft_dt_sk_10min: action.data['slovnaft_dt_sk_10min'],
        slovnaft_dt_pr_10min: action.data['slovnaft_dt_pr_10min'],
        vhj_dt_sk_10min: action.data['vhj_dt_sk_10min'],
        vhj_dt_pr_10min: action.data['vhj_dt_pr_10min'],

        ppc_p_sk_10min: action.data['ppc_p_sk_10min'],
        ppc_p_pr_10min: action.data['ppc_p_pr_10min'],
        tpv_p_sk_10min: action.data['tpv_p_sk_10min'],
        tpv_p_pr_10min: action.data['tpv_p_pr_10min'],
        slovnaft_p_sk_10min: action.data['slovnaft_p_sk_10min'],
        slovnaft_p_pr_10min: action.data['slovnaft_p_pr_10min'],
        vhj_p_sk_10min: action.data['vhj_p_sk_10min'],
        vhj_p_pr_10min: action.data['vhj_p_pr_10min'],

        ppc_vykon_1h: action.data['ppc_vykon_1h'],
        tpv_vykon_1h: action.data['tpv_vykon_1h'],
        slovnaft_vykon_1h: action.data['slovnaft_vykon_1h'],
        vhj_vykon_1h: action.data['vhj_vykon_1h'],
        vonkajsia_teplota_1h: action.data['vonkajsia_teplota_1h']
      }
    case TYPES.FETCH_SCZT_VYCHOD_ZDROJE_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}