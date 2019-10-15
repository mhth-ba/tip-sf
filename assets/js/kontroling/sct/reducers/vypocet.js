import * as TYPES from '../../../services/ActionTypes'

const initState = {

  // (u)zitocna (d)odavka (t)epla
  // (zdr)oj (pri)mar (ost) (sek)undar (p)lynove (k)otolne
  // (s)polu (b)ez (k)otolni | (s)polu (v)ratane (k)otolni
  // (str)aty (cel)kova dodavka
  udt_zdr_v_kwh: '', udt_zdr_v_kw: '', udt_zdr_z_kwh: '', udt_zdr_z_kw: '', udt_zdr_b_kwh: '', udt_zdr_b_kw: '',
  udt_pri_v_kwh: '', udt_pri_v_kw: '', udt_pri_z_kwh: '', udt_pri_z_kw: '', udt_pri_b_kwh: '', udt_pri_b_kw: '',
  udt_ost_v_kwh: '', udt_ost_v_kw: '', udt_ost_z_kwh: '', udt_ost_z_kw: '', udt_ost_b_kwh: '', udt_ost_b_kw: '',
  udt_sek_v_kwh: '', udt_sek_v_kw: '', udt_sek_z_kwh: '', udt_sek_z_kw: '', udt_sek_b_kwh: '', udt_sek_b_kw: '',
  udt_bpk_v_kwh: '', udt_bpk_v_kw: '', udt_bpk_z_kwh: '', udt_bpk_z_kw: '', udt_bpk_b_kwh: '', udt_bpk_b_kw: '',
  udt_pk_v_kwh: '', udt_pk_v_kw: '', udt_pk_z_kwh: '', udt_pk_z_kw: '', udt_pk_b_kwh: '', udt_pk_b_kw: '',
  udt_spk_v_kwh: '', udt_spk_v_kw: '', udt_spk_z_kwh: '', udt_spk_z_kw: '', udt_spk_b_kwh: '', udt_spk_b_kw: '',
  udt_str_v_kwh: '', udt_str_z_kwh: '', udt_str_b_kwh: '',
  udt_cel_v_kwh: '', udt_cel_z_kwh: '', udt_cel_b_kwh: '',

  // (p)orovnanie s (p)lanom
  // (v)ychod | (z)apad | (b)at
  // (u)zitocna (d)odavka (t)epla | (s)traty | (c)elkova (d)odavka (t)epla
  // (p)lan | (s)kutocnost | (r)ozdiel
  pp_v_udt_p: '', pp_v_udt_s: '', pp_v_udt_r: '',
  pp_v_s_p: '', pp_v_s_s: '', pp_v_s_r: '',
  pp_v_cdt_p: '', pp_v_cdt_s: '', pp_v_cdt_r: '',
  pp_z_udt_p: '', pp_z_udt_s: '', pp_z_udt_r: '',
  pp_z_s_p: '', pp_z_s_s: '', pp_z_s_r: '',
  pp_z_cdt_p: '', pp_z_cdt_s: '', pp_z_cdt_r: '',
  pp_b_udt_p: '', pp_b_udt_s: '', pp_b_udt_r: '',
  pp_b_s_p: '', pp_b_s_s: '', pp_b_s_r: '',
  pp_b_cdt_p: '', pp_b_cdt_s: '', pp_b_cdt_r: '',

  // (v)yroba (t)epla (p)odla (z)drojov
  vtpz_tpv_kwh: '', vtpz_tpv_gj: '', // teplaren vychod
  vtpz_vhj_kwh: '', vtpz_vhj_gj: '', // vyhrevna juh
  vtpz_tpz_kwh: '', vtpz_tpz_gj: '', // teplaren zapad
  vtpz_pk_kwh: '', vtpz_pk_gj: '',   // plynove kotolne
  vtpz_vz_kwh: '', vtpz_vz_gj: '',   // vlastne zdroje (subtotal)
  vtpz_ppc_kwh: '', vtpz_ppc_gj: '', // ppc
  vtpz_slo_kwh: '', vtpz_slo_gj: '', // slovnaft
  vtpz_cw_kwh: '', vtpz_cw_gj: '',   // cogen west
  vtpz_ez_kwh: '', vtpz_ez_gj: '',   // externe zdroje
  vtpz_s_kwh: '', vtpz_s_gj: '',     // spolu (vlastne + externe)

  // (v)yroba (e)lektrickej (e)nergie
  vee_veez_tpv: '', vee_veez_tpz: '', vee_veez_bat: '',
  vee_dszse_tpv: '', vee_dszse_tpz: '', vee_dszse_bat: '',
  vee_dree_tpv: '', vee_dree_tpz: '', vee_dree_bat: '',
  vee_vsee_tpv: '', vee_vsee_tpz: '', vee_vsee_bat: '',

  // (d)elenie (n)akladov podla (e)nergetickej (m)etody
  dnem_vtdt_tpv: '', dnem_vtdt_tpz: '', dnem_vtdt_k: '',
  dnem_tsve_tpv: '', dnem_tsve_tpz: '', dnem_tsve_k: '',

  // (f)akturovany (z)emny (p)lyn | (k)onstanty
  // (j)ednotkova (c)ena (z)emneho (p)lynu | (s)adzba za (o)dobraty (p)lyn
  // ceny za sluzby (o)bchodnika / (p)repravy / (d)istribucie
  fzp_k_jczpsopov: '',
  fzp_k_jczpsoppv: '',
  fzp_k_jczpsopdv: '',

  // fakturovany zemny plyn | tpv/tpz/vhj | jan...dec, spolu, priemerna cena
  // teplaren vychod
  
  fzp_v_jan_m3: '', fzp_v_jan_mwh: '',
  fzp_v_jan_sopo: '', fzp_v_jan_fmso: '', fzp_v_jan_sopp: '', fzp_v_jan_fmsp: '', fzp_v_jan_sopd: '', fzp_v_jan_fmsd: '',
  fzp_v_jan_vsd: '', fzp_v_jan_dan_mwh: '', fzp_v_jan_dan_e: '', fzp_v_jan_pdm: '', fzp_v_jan_ns: '',

  fzp_v_feb_m3: '', fzp_v_feb_mwh: '',
  fzp_v_feb_sopo: '', fzp_v_feb_fmso: '', fzp_v_feb_sopp: '', fzp_v_feb_fmsp: '', fzp_v_feb_sopd: '', fzp_v_feb_fmsd: '',
  fzp_v_feb_vsd: '', fzp_v_feb_dan_mwh: '', fzp_v_feb_dan_e: '', fzp_v_feb_pdm: '', fzp_v_feb_ns: '',

  fzp_v_mar_m3: '', fzp_v_mar_mwh: '',
  fzp_v_mar_sopo: '', fzp_v_mar_fmso: '', fzp_v_mar_sopp: '', fzp_v_mar_fmsp: '', fzp_v_mar_sopd: '', fzp_v_mar_fmsd: '',
  fzp_v_mar_vsd: '', fzp_v_mar_dan_mwh: '', fzp_v_mar_dan_e: '', fzp_v_mar_pdm: '', fzp_v_mar_ns: '',

  fzp_v_apr_m3: '', fzp_v_apr_mwh: '',
  fzp_v_apr_sopo: '', fzp_v_apr_fmso: '', fzp_v_apr_sopp: '', fzp_v_apr_fmsp: '', fzp_v_apr_sopd: '', fzp_v_apr_fmsd: '',
  fzp_v_apr_vsd: '', fzp_v_apr_dan_mwh: '', fzp_v_apr_dan_e: '', fzp_v_apr_pdm: '', fzp_v_apr_ns: '',

  fzp_v_maj_m3: '', fzp_v_maj_mwh: '',
  fzp_v_maj_sopo: '', fzp_v_maj_fmso: '', fzp_v_maj_sopp: '', fzp_v_maj_fmsp: '', fzp_v_maj_sopd: '', fzp_v_maj_fmsd: '',
  fzp_v_maj_vsd: '', fzp_v_maj_dan_mwh: '', fzp_v_maj_dan_e: '', fzp_v_maj_pdm: '', fzp_v_maj_ns: '',

  fzp_v_jun_m3: '', fzp_v_jun_mwh: '',
  fzp_v_jun_sopo: '', fzp_v_jun_fmso: '', fzp_v_jun_sopp: '', fzp_v_jun_fmsp: '', fzp_v_jun_sopd: '', fzp_v_jun_fmsd: '',
  fzp_v_jun_vsd: '', fzp_v_jun_dan_mwh: '', fzp_v_jun_dan_e: '', fzp_v_jun_pdm: '', fzp_v_jun_ns: '',

  fzp_v_jul_m3: '', fzp_v_jul_mwh: '',
  fzp_v_jul_sopo: '', fzp_v_jul_fmso: '', fzp_v_jul_sopp: '', fzp_v_jul_fmsp: '', fzp_v_jul_sopd: '', fzp_v_jul_fmsd: '',
  fzp_v_jul_vsd: '', fzp_v_jul_dan_mwh: '', fzp_v_jul_dan_e: '', fzp_v_jul_pdm: '', fzp_v_jul_ns: '',

  fzp_v_aug_m3: '', fzp_v_aug_mwh: '',
  fzp_v_aug_sopo: '', fzp_v_aug_fmso: '', fzp_v_aug_sopp: '', fzp_v_aug_fmsp: '', fzp_v_aug_sopd: '', fzp_v_aug_fmsd: '',
  fzp_v_aug_vsd: '', fzp_v_aug_dan_mwh: '', fzp_v_aug_dan_e: '', fzp_v_aug_pdm: '', fzp_v_aug_ns: '',

  fzp_v_sep_m3: '', fzp_v_sep_mwh: '',
  fzp_v_sep_sopo: '', fzp_v_sep_fmso: '', fzp_v_sep_sopp: '', fzp_v_sep_fmsp: '', fzp_v_sep_sopd: '', fzp_v_sep_fmsd: '',
  fzp_v_sep_vsd: '', fzp_v_sep_dan_mwh: '', fzp_v_sep_dan_e: '', fzp_v_sep_pdm: '', fzp_v_sep_ns: '',

  fzp_v_okt_m3: '', fzp_v_okt_mwh: '',
  fzp_v_okt_sopo: '', fzp_v_okt_fmso: '', fzp_v_okt_sopp: '', fzp_v_okt_fmsp: '', fzp_v_okt_sopd: '', fzp_v_okt_fmsd: '',
  fzp_v_okt_vsd: '', fzp_v_okt_dan_mwh: '', fzp_v_okt_dan_e: '', fzp_v_okt_pdm: '', fzp_v_okt_ns: '',

  fzp_v_nov_m3: '', fzp_v_nov_mwh: '',
  fzp_v_nov_sopo: '', fzp_v_nov_fmso: '', fzp_v_nov_sopp: '', fzp_v_nov_fmsp: '', fzp_v_nov_sopd: '', fzp_v_nov_fmsd: '',
  fzp_v_nov_vsd: '', fzp_v_nov_dan_mwh: '', fzp_v_nov_dan_e: '', fzp_v_nov_pdm: '', fzp_v_nov_ns: '',

  fzp_v_dec_m3: '', fzp_v_dec_mwh: '',
  fzp_v_dec_sopo: '', fzp_v_dec_fmso: '', fzp_v_dec_sopp: '', fzp_v_dec_fmsp: '', fzp_v_dec_sopd: '', fzp_v_dec_fmsd: '',
  fzp_v_dec_vsd: '', fzp_v_dec_dan_mwh: '', fzp_v_dec_dan_e: '', fzp_v_dec_pdm: '', fzp_v_dec_ns: '',

  fzp_v_spo_m3: '', fzp_v_spo_mwh: '',
  fzp_v_spo_sopo: '', fzp_v_spo_fmso: '', fzp_v_spo_sopp: '', fzp_v_spo_fmsp: '', fzp_v_spo_sopd: '', fzp_v_spo_fmsd: '',
  fzp_v_spo_vsd: '', fzp_v_spo_dan_mwh: '', fzp_v_spo_dan_e: '', fzp_v_spo_pdm: '', fzp_v_spo_ns: '',
  
  fzp_v_pc_m3: '', fzp_v_pc_mwh: '',
  
  // teplaren zapad

  fzp_z_jan_m3: '', fzp_z_jan_mwh: '',
  fzp_z_jan_sopo: '', fzp_z_jan_fmso: '', fzp_z_jan_sopp: '', fzp_z_jan_fmsp: '', fzp_z_jan_sopd: '', fzp_z_jan_fmsd: '',
  fzp_z_jan_vsd: '', fzp_z_jan_dan_mwh: '', fzp_z_jan_dan_e: '', fzp_z_jan_pdm: '', fzp_z_jan_ns: '',

  fzp_z_feb_m3: '', fzp_z_feb_mwh: '',
  fzp_z_feb_sopo: '', fzp_z_feb_fmso: '', fzp_z_feb_sopp: '', fzp_z_feb_fmsp: '', fzp_z_feb_sopd: '', fzp_z_feb_fmsd: '',
  fzp_z_feb_vsd: '', fzp_z_feb_dan_mwh: '', fzp_z_feb_dan_e: '', fzp_z_feb_pdm: '', fzp_z_feb_ns: '',

  fzp_z_mar_m3: '', fzp_z_mar_mwh: '',
  fzp_z_mar_sopo: '', fzp_z_mar_fmso: '', fzp_z_mar_sopp: '', fzp_z_mar_fmsp: '', fzp_z_mar_sopd: '', fzp_z_mar_fmsd: '',
  fzp_z_mar_vsd: '', fzp_z_mar_dan_mwh: '', fzp_z_mar_dan_e: '', fzp_z_mar_pdm: '', fzp_z_mar_ns: '',

  fzp_z_apr_m3: '', fzp_z_apr_mwh: '',
  fzp_z_apr_sopo: '', fzp_z_apr_fmso: '', fzp_z_apr_sopp: '', fzp_z_apr_fmsp: '', fzp_z_apr_sopd: '', fzp_z_apr_fmsd: '',
  fzp_z_apr_vsd: '', fzp_z_apr_dan_mwh: '', fzp_z_apr_dan_e: '', fzp_z_apr_pdm: '', fzp_z_apr_ns: '',

  fzp_z_maj_m3: '', fzp_z_maj_mwh: '',
  fzp_z_maj_sopo: '', fzp_z_maj_fmso: '', fzp_z_maj_sopp: '', fzp_z_maj_fmsp: '', fzp_z_maj_sopd: '', fzp_z_maj_fmsd: '',
  fzp_z_maj_vsd: '', fzp_z_maj_dan_mwh: '', fzp_z_maj_dan_e: '', fzp_z_maj_pdm: '', fzp_z_maj_ns: '',

  fzp_z_jun_m3: '', fzp_z_jun_mwh: '',
  fzp_z_jun_sopo: '', fzp_z_jun_fmso: '', fzp_z_jun_sopp: '', fzp_z_jun_fmsp: '', fzp_z_jun_sopd: '', fzp_z_jun_fmsd: '',
  fzp_z_jun_vsd: '', fzp_z_jun_dan_mwh: '', fzp_z_jun_dan_e: '', fzp_z_jun_pdm: '', fzp_z_jun_ns: '',

  fzp_z_jul_m3: '', fzp_z_jul_mwh: '',
  fzp_z_jul_sopo: '', fzp_z_jul_fmso: '', fzp_z_jul_sopp: '', fzp_z_jul_fmsp: '', fzp_z_jul_sopd: '', fzp_z_jul_fmsd: '',
  fzp_z_jul_vsd: '', fzp_z_jul_dan_mwh: '', fzp_z_jul_dan_e: '', fzp_z_jul_pdm: '', fzp_z_jul_ns: '',

  fzp_z_aug_m3: '', fzp_z_aug_mwh: '',
  fzp_z_aug_sopo: '', fzp_z_aug_fmso: '', fzp_z_aug_sopp: '', fzp_z_aug_fmsp: '', fzp_z_aug_sopd: '', fzp_z_aug_fmsd: '',
  fzp_z_aug_vsd: '', fzp_z_aug_dan_mwh: '', fzp_z_aug_dan_e: '', fzp_z_aug_pdm: '', fzp_z_aug_ns: '',

  fzp_z_sep_m3: '', fzp_z_sep_mwh: '',
  fzp_z_sep_sopo: '', fzp_z_sep_fmso: '', fzp_z_sep_sopp: '', fzp_z_sep_fmsp: '', fzp_z_sep_sopd: '', fzp_z_sep_fmsd: '',
  fzp_z_sep_vsd: '', fzp_z_sep_dan_mwh: '', fzp_z_sep_dan_e: '', fzp_z_sep_pdm: '', fzp_z_sep_ns: '',

  fzp_z_okt_m3: '', fzp_z_okt_mwh: '',
  fzp_z_okt_sopo: '', fzp_z_okt_fmso: '', fzp_z_okt_sopp: '', fzp_z_okt_fmsp: '', fzp_z_okt_sopd: '', fzp_z_okt_fmsd: '',
  fzp_z_okt_vsd: '', fzp_z_okt_dan_mwh: '', fzp_z_okt_dan_e: '', fzp_z_okt_pdm: '', fzp_z_okt_ns: '',

  fzp_z_nov_m3: '', fzp_z_nov_mwh: '',
  fzp_z_nov_sopo: '', fzp_z_nov_fmso: '', fzp_z_nov_sopp: '', fzp_z_nov_fmsp: '', fzp_z_nov_sopd: '', fzp_z_nov_fmsd: '',
  fzp_z_nov_vsd: '', fzp_z_nov_dan_mwh: '', fzp_z_nov_dan_e: '', fzp_z_nov_pdm: '', fzp_z_nov_ns: '',

  fzp_z_dec_m3: '', fzp_z_dec_mwh: '',
  fzp_z_dec_sopo: '', fzp_z_dec_fmso: '', fzp_z_dec_sopp: '', fzp_z_dec_fmsp: '', fzp_z_dec_sopd: '', fzp_z_dec_fmsd: '',
  fzp_z_dec_vsd: '', fzp_z_dec_dan_mwh: '', fzp_z_dec_dan_e: '', fzp_z_dec_pdm: '', fzp_z_dec_ns: '',

  fzp_z_spo_m3: '', fzp_z_spo_mwh: '',
  fzp_z_spo_sopo: '', fzp_z_spo_fmso: '', fzp_z_spo_sopp: '', fzp_z_spo_fmsp: '', fzp_z_spo_sopd: '', fzp_z_spo_fmsd: '',
  fzp_z_spo_vsd: '', fzp_z_spo_dan_mwh: '', fzp_z_spo_dan_e: '', fzp_z_spo_pdm: '', fzp_z_spo_ns: '',

  fzp_z_pc_m3: '', fzp_z_pc_mwh: '',
  
  // vyhrevna juh

  fzp_j_jan_m3: '', fzp_j_jan_mwh: '',
  fzp_j_jan_sopo: '', fzp_j_jan_fmso: '', fzp_j_jan_sopp: '', fzp_j_jan_fmsp: '', fzp_j_jan_sopd: '', fzp_j_jan_fmsd: '',
  fzp_j_jan_vsd: '', fzp_j_jan_dan_mwh: '', fzp_j_jan_dan_e: '', fzp_j_jan_pdm: '', fzp_j_jan_ns: '',

  fzp_j_feb_m3: '', fzp_j_feb_mwh: '',
  fzp_j_feb_sopo: '', fzp_j_feb_fmso: '', fzp_j_feb_sopp: '', fzp_j_feb_fmsp: '', fzp_j_feb_sopd: '', fzp_j_feb_fmsd: '',
  fzp_j_feb_vsd: '', fzp_j_feb_dan_mwh: '', fzp_j_feb_dan_e: '', fzp_j_feb_pdm: '', fzp_j_feb_ns: '',

  fzp_j_mar_m3: '', fzp_j_mar_mwh: '',
  fzp_j_mar_sopo: '', fzp_j_mar_fmso: '', fzp_j_mar_sopp: '', fzp_j_mar_fmsp: '', fzp_j_mar_sopd: '', fzp_j_mar_fmsd: '',
  fzp_j_mar_vsd: '', fzp_j_mar_dan_mwh: '', fzp_j_mar_dan_e: '', fzp_j_mar_pdm: '', fzp_j_mar_ns: '',

  fzp_j_apr_m3: '', fzp_j_apr_mwh: '',
  fzp_j_apr_sopo: '', fzp_j_apr_fmso: '', fzp_j_apr_sopp: '', fzp_j_apr_fmsp: '', fzp_j_apr_sopd: '', fzp_j_apr_fmsd: '',
  fzp_j_apr_vsd: '', fzp_j_apr_dan_mwh: '', fzp_j_apr_dan_e: '', fzp_j_apr_pdm: '', fzp_j_apr_ns: '',

  fzp_j_maj_m3: '', fzp_j_maj_mwh: '',
  fzp_j_maj_sopo: '', fzp_j_maj_fmso: '', fzp_j_maj_sopp: '', fzp_j_maj_fmsp: '', fzp_j_maj_sopd: '', fzp_j_maj_fmsd: '',
  fzp_j_maj_vsd: '', fzp_j_maj_dan_mwh: '', fzp_j_maj_dan_e: '', fzp_j_maj_pdm: '', fzp_j_maj_ns: '',

  fzp_j_jun_m3: '', fzp_j_jun_mwh: '',
  fzp_j_jun_sopo: '', fzp_j_jun_fmso: '', fzp_j_jun_sopp: '', fzp_j_jun_fmsp: '', fzp_j_jun_sopd: '', fzp_j_jun_fmsd: '',
  fzp_j_jun_vsd: '', fzp_j_jun_dan_mwh: '', fzp_j_jun_dan_e: '', fzp_j_jun_pdm: '', fzp_j_jun_ns: '',

  fzp_j_jul_m3: '', fzp_j_jul_mwh: '',
  fzp_j_jul_sopo: '', fzp_j_jul_fmso: '', fzp_j_jul_sopp: '', fzp_j_jul_fmsp: '', fzp_j_jul_sopd: '', fzp_j_jul_fmsd: '',
  fzp_j_jul_vsd: '', fzp_j_jul_dan_mwh: '', fzp_j_jul_dan_e: '', fzp_j_jul_pdm: '', fzp_j_jul_ns: '',

  fzp_j_aug_m3: '', fzp_j_aug_mwh: '',
  fzp_j_aug_sopo: '', fzp_j_aug_fmso: '', fzp_j_aug_sopp: '', fzp_j_aug_fmsp: '', fzp_j_aug_sopd: '', fzp_j_aug_fmsd: '',
  fzp_j_aug_vsd: '', fzp_j_aug_dan_mwh: '', fzp_j_aug_dan_e: '', fzp_j_aug_pdm: '', fzp_j_aug_ns: '',

  fzp_j_sep_m3: '', fzp_j_sep_mwh: '',
  fzp_j_sep_sopo: '', fzp_j_sep_fmso: '', fzp_j_sep_sopp: '', fzp_j_sep_fmsp: '', fzp_j_sep_sopd: '', fzp_j_sep_fmsd: '',
  fzp_j_sep_vsd: '', fzp_j_sep_dan_mwh: '', fzp_j_sep_dan_e: '', fzp_j_sep_pdm: '', fzp_j_sep_ns: '',

  fzp_j_okt_m3: '', fzp_j_okt_mwh: '',
  fzp_j_okt_sopo: '', fzp_j_okt_fmso: '', fzp_j_okt_sopp: '', fzp_j_okt_fmsp: '', fzp_j_okt_sopd: '', fzp_j_okt_fmsd: '',
  fzp_j_okt_vsd: '', fzp_j_okt_dan_mwh: '', fzp_j_okt_dan_e: '', fzp_j_okt_pdm: '', fzp_j_okt_ns: '',

  fzp_j_nov_m3: '', fzp_j_nov_mwh: '',
  fzp_j_nov_sopo: '', fzp_j_nov_fmso: '', fzp_j_nov_sopp: '', fzp_j_nov_fmsp: '', fzp_j_nov_sopd: '', fzp_j_nov_fmsd: '',
  fzp_j_nov_vsd: '', fzp_j_nov_dan_mwh: '', fzp_j_nov_dan_e: '', fzp_j_nov_pdm: '', fzp_j_nov_ns: '',

  fzp_j_dec_m3: '', fzp_j_dec_mwh: '',
  fzp_j_dec_sopo: '', fzp_j_dec_fmso: '', fzp_j_dec_sopp: '', fzp_j_dec_fmsp: '', fzp_j_dec_sopd: '', fzp_j_dec_fmsd: '',
  fzp_j_dec_vsd: '', fzp_j_dec_dan_mwh: '', fzp_j_dec_dan_e: '', fzp_j_dec_pdm: '', fzp_j_dec_ns: '',

  fzp_j_spo_m3: '', fzp_j_spo_mwh: '',
  fzp_j_spo_sopo: '', fzp_j_spo_fmso: '', fzp_j_spo_sopp: '', fzp_j_spo_fmsp: '', fzp_j_spo_sopd: '', fzp_j_spo_fmsd: '',
  fzp_j_spo_vsd: '', fzp_j_spo_dan_mwh: '', fzp_j_spo_dan_e: '', fzp_j_spo_pdm: '', fzp_j_spo_ns: '',

  fzp_j_pc_m3: '', fzp_j_pc_mwh: '',

  // vyrobne spolu (tpv + tpz + vhj)

  fzp_vyr_spo_m3: '', fzp_vyr_spo_mwh: '',
  fzp_vyr_spo_sopo: '', fzp_vyr_spo_fmso: '', fzp_vyr_spo_sopp: '', fzp_vyr_spo_fmsp: '',
  fzp_vyr_spo_sopd: '', fzp_vyr_spo_fmsd: '', fzp_vyr_spo_vsd: '', fzp_vyr_spo_dan_e: '',
  fzp_vyr_spo_pdm: '', fzp_vyr_spo_ns: '',

  // plynove kotolne

  fzp_pk_spo_m3: '', fzp_pk_spo_mwh: '', fzp_pk_spo_nbsd: '', fzp_pk_spo_sd: '', fzp_pk_spo_pdm: '', fzp_pk_spo_cnsd: '',

  // klucovane fakturovane naklady na zemny plyn

  fzp_kfn_kvet_tpv_suma: '', fzp_kfn_kvet_tpv_kfn: '',
  fzp_kfn_bez_kvet_tpv_suma: '', fzp_kfn_bez_kvet_tpv_kfn: '',
  fzp_kfn_kvet_tpz_suma: '', fzp_kfn_kvet_tpz_kfn: '',
  fzp_kfn_bez_kvet_tpz_suma: '', fzp_kfn_bez_kvet_tpz_kfn: '',
  fzp_kfn_vhj_fn: '', fzp_kfn_vhj_kfn: '',
  fzp_kfn_pk_fn: '', fzp_kfn_pk_kfn: '',
  fzp_kfn_spolu_fn: '', fzp_kfn_spolu_kfn: '',

  // palivovy bonus || normativne mnozstvo zemneho plynu
  // || tpv/vhj/tpz | vystup tepla zo sekundaru ...

  // _m = mnozstvo, _u = ucinnost, _h = hodnota (zadavanie)
  pb_nmzp_v_vtsek_m: '', pb_nmzp_v_vtsek_u: '',
  pb_nmzp_v_vtost_m: '', pb_nmzp_v_vtost_u: '',
  pb_nmzp_v_vtpri_m: '', pb_nmzp_v_vtpri_u: '',
  pb_nmzp_v_tvtpv: '',
  pb_nmzp_v_tvvhj: '',
  pb_nmzp_v_ntslo: '',
  pb_nmzp_v_ntppc: '',
  pb_nmzp_v_tvz_m: '', pb_nmzp_v_tvz_u: '',
  pb_nmzp_v_zpvz: '',
  pb_nmzp_v_vzp: '',
  pb_nmzp_v_pstv: '',
  pb_nmzp_v_mwh: '', pb_nmzp_v_m3: '',

  pb_nmzp_j_tvz_m: '', pb_nmzp_j_tvz_u: '',
  pb_nmzp_j_tvtvo_m: '',
  pb_nmzp_j_tpvz: '',
  pb_nmzp_j_vzp: '',
  pb_nmzp_j_pstv: '',
  pb_nmzp_j_mwh: '', pb_nmzp_j_m3: '',

  pb_nmzp_z_vtsek_m: '', pb_nmzp_z_vtsek_u: '',
  pb_nmzp_z_vtost_m: '', pb_nmzp_z_vtost_u: '',
  pb_nmzp_z_vtpri_m: '', pb_nmzp_z_vtpri_u: '',
  pb_nmzp_z_tvtpz: '',
  pb_nmzp_z_ntcw: '',
  pb_nmzp_z_tvz_m: '', pb_nmzp_z_tvz_u: '',
  pb_nmzp_z_tpvz: '',
  pb_nmzp_z_vzp: '',
  pb_nmzp_z_pstv: '',
  pb_nmzp_z_mwh: '', pb_nmzp_z_m3: '',
  
  // palivovy bonus || ekonomicky opravnene naklady na nakup zemneho plynu
  pb_eonnzp_v_nm: '', pb_eonnzp_v_jc: '', pb_eonnzp_v_nn: '',
  pb_eonnzp_v_sfn: '', pb_eonnzp_v_pb: '', pb_eonnzp_v: '',

  pb_eonnzp_j_nm: '', pb_eonnzp_j_jc: '', pb_eonnzp_j_nn: '',
  pb_eonnzp_j_sfn: '', pb_eonnzp_j_pb: '', pb_eonnzp_j: '',

  pb_eonnzp_z_nm: '', pb_eonnzp_z_jc: '', pb_eonnzp_z_nn: '',
  pb_eonnzp_z_sfn: '', pb_eonnzp_z_pb: '', pb_eonnzp_z: '',

  pb_kpb: '',
  
  // nakupovane teplo || naklady na nakup tepla
  nt_nnt_dnt_ppc: '', nt_nnt_dnt_slo: '', nt_nnt_dnt_cw: '', nt_nnt_dnt_spolu: '',
  nt_nnt_rp_ppc: '', nt_nnt_rp_slo: '', nt_nnt_rp_cw: '', nt_nnt_rp_spolu: '',
  nt_nnt_vzc_ppc: '', nt_nnt_vzc_slo: '', nt_nnt_vzc_cw: '', nt_nnt_vzc_spolu: '',
  nt_nnt_fzc_ppc: '', nt_nnt_fzc_slo: '', nt_nnt_fzc_cw: '', nt_nnt_fzc_spolu: '',
  nt_nnt_pjc_ppc: '', nt_nnt_pjc_slo: '', nt_nnt_pjc_cw: '', nt_nnt_pjc_spolu: '',
  nt_nnt_vn_ppc: '', nt_nnt_vn_slo: '', nt_nnt_vn_cw: '', nt_nnt_vn_spolu: '',
  nt_nnt_fn_ppc: '', nt_nnt_fn_slo: '', nt_nnt_fn_cw: '', nt_nnt_fn_spolu: '',
  nt_nnt_nnts_ppc: '', nt_nnt_nnts_slo: '', nt_nnt_nnts_cw: '', nt_nnt_nnts_spolu: '',

  // spolocne naklady na teplo a elektrinu || skutocne naklady
  snte_sn_fn: '',

  // spolocne naklady na teplo a elektrinu || regulovana zlozka fixnych nakladov a primerany zisk
  snte_rzfn_rp: '', snte_rzfn_dl: '', snte_rzfn_nl: '', snte_rzfn_kdkwnl: '',
  snte_rzfn_rzfn: '', snte_rzfn_zaklad: '', snte_rzfn_priplatok: '', snte_rzfn_pz: '',
  snte_rzfn_rzfnapz: '', snte_rzfn_fnpz: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.HIGHLIGHT_CELLS:
      return {...state, ...action.data}
    default:
      return state
  }
}
