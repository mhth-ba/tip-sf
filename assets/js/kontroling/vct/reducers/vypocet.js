import * as TYPES from '../../../services/ActionTypes'

const initState = {

  // (f)orecast (d)odavky (t)epla
  // (v)ychod (z)apad (b)at
  // (p)lan | (s)kutocnost | plan 1-12 na cely (r)ok | (f)orecast
  fdt_v_p_kwh: '', fdt_v_p_kw: '', fdt_v_s_kwh: '', fdt_v_s_kw: '',
  fdt_v_r_kwh: '', fdt_v_r_kw: '', fdt_v_f_kwh: '', fdt_v_f_kw: '',
  fdt_z_p_kwh: '', fdt_z_p_kw: '', fdt_z_s_kwh: '', fdt_z_s_kw: '',
  fdt_z_r_kwh: '', fdt_z_r_kw: '', fdt_z_f_kwh: '', fdt_z_f_kw: '',
  fdt_b_p_kwh: '', fdt_b_p_kw: '', fdt_b_s_kwh: '', fdt_b_s_kw: '',
  fdt_b_r_kwh: '', fdt_b_r_kw: '', fdt_b_f_kwh: '', fdt_b_f_kw: '',
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.HIGHLIGHT_CELLS:
      return {...state, ...action.data}
    default:
      return state
  }
}
