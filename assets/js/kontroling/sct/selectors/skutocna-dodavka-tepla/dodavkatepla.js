import { createSelector } from 'reselect/es'
import * as CONSTANTS from '../../../../constants'

const gj = CONSTANTS.METRICS_GJ

// p = plan | s = skutocnost | r = rozdiel

// skutocna dodavka tepla (z excelu)
const dodavkatepla = (state) => state

// planovana dodavka tepla podla ODG (z excelu) + konstanty
const state = (state) => state

export const bat = createSelector(
  dodavkatepla,
  dt => ({
    // ZDROJE
    tpv: { // teplaren vychod
      kwh: dt.tpv,
      gj: dt.tpv * gj
    },
    vhj: { // vyhrevna juh
      kwh: dt.vhj,
      gj: dt.vhj * gj
    },
    tpz: { // teplaren zapad
      kwh: dt.tpz,
      gj: dt.tpz * gj
    },
    pk: { // (p)lynove (k)otolne
      ...dt.pk,
      b_kwh: dt.pk.v_kwh + dt.pk.z_kwh,
      b_kw: dt.pk.v_kw + dt.pk.z_kw,
      b_gj: (dt.pk.v_kwh + dt.pk.z_kwh) * gj
    },

    vlastne: { // vlastne zdroje SUM
      kwh: dt.tpv + dt.vhj + dt.tpz + dt.pk.v_kwh + dt.pk.z_kwh,
      gj: (dt.tpv + dt.vhj + dt.tpz + dt.pk.v_kwh + dt.pk.z_kwh) * gj
    },

    // DODAVATELIA
    ppc: { // paroplynovy cyklus
      kwh: dt.ppc,
      gj: dt.ppc * gj
    },
    slovnaft: {
      kwh: dt.slovnaft,
      gj: dt.slovnaft * gj
    },
    cw: { // cogen west
      kwh: dt.cw,
      gj: dt.cw * gj
    },

    externe: { // externe zdroje SUM
      kwh: dt.ppc + dt.slovnaft + dt.cw,
      gj: (dt.ppc + dt.slovnaft + dt.cw) * gj
    },

    // CASTI SUSTAVY
    zdroj: {
      ...dt.zdroj,
      b_kwh: dt.zdroj.v_kwh + dt.zdroj.z_kwh,
      b_kw: dt.zdroj.v_kw + dt.zdroj.z_kw
    },
    primar: {
      ...dt.primar,
      b_kwh: dt.primar.v_kwh + dt.primar.z_kwh,
      b_kw: dt.primar.v_kw + dt.primar.z_kw
    },
    ost: { // odovzdavacia stanica tepla
      ...dt.ost,
      b_kwh: dt.ost.v_kwh + dt.ost.z_kwh,
      b_kw: dt.ost.v_kw + dt.ost.z_kw
    },
    sekundar: {
      ...dt.sekundar,
      b_kwh: dt.sekundar.v_kwh + dt.sekundar.z_kwh,
      b_kw: dt.sekundar.v_kw + dt.sekundar.z_kw
    },

    // SUMARE
    sbk: { // (s)polu [ (b)ez plynovych (k)otolni ]
      v_kwh: dt.zdroj.v_kwh + dt.primar.v_kwh + dt.ost.v_kwh + dt.sekundar.v_kwh,
      v_kw: dt.zdroj.v_kw + dt.primar.v_kw + dt.ost.v_kw + dt.sekundar.v_kw,
      z_kwh: dt.zdroj.z_kwh + dt.primar.z_kwh + dt.ost.z_kwh + dt.sekundar.z_kwh,
      z_kw: dt.zdroj.z_kw + dt.primar.z_kw + dt.ost.z_kw + dt.sekundar.z_kw
    },

    svk: { // (s)polu [ (v)ratane plynovych (k)otolni ]
      v_kwh: dt.zdroj.v_kwh + dt.primar.v_kwh + dt.ost.v_kwh + dt.sekundar.v_kwh + dt.pk.v_kwh,
      v_kw: dt.zdroj.v_kw + dt.primar.v_kw + dt.ost.v_kw + dt.sekundar.v_kw + dt.pk.v_kw,
      z_kwh: dt.zdroj.z_kwh + dt.primar.z_kwh + dt.ost.z_kwh + dt.sekundar.z_kwh + dt.pk.z_kwh,
      z_kw: dt.zdroj.z_kw + dt.primar.z_kw + dt.ost.z_kw + dt.sekundar.z_kw + dt.pk.z_kw
    }
  })
)

export const sumare = createSelector(
  dodavkatepla,
  bat,
  (dt, bat) => ({
    sbk: { // (s)polu [ (b)ez plynovych (k)otolni ]
      ...bat.sbk,
      b_kwh: bat.zdroj.b_kwh + bat.primar.b_kwh + bat.ost.b_kwh + bat.sekundar.b_kwh,
      b_kw: bat.zdroj.b_kw + bat.primar.b_kw + bat.ost.b_kw + bat.sekundar.b_kw
    },
    svk: { // (s)polu [ (v)ratane plynovych (k)otolni ]
      ...bat.svk,
      b_kwh: bat.zdroj.b_kwh + bat.primar.b_kwh + bat.ost.b_kwh + bat.sekundar.b_kwh + bat.pk.b_kwh,
      b_kw: bat.zdroj.b_kw + bat.primar.b_kw + bat.ost.b_kw + bat.sekundar.b_kw + bat.pk.b_kw
    },
    straty: {
      v_kwh: (dt.tpv + dt.vhj + dt.ppc + dt.slovnaft) - (bat.sbk.v_kwh),
      z_kwh: (dt.tpz + dt.cw) - (bat.sbk.z_kwh),
      b_kwh: (dt.tpv + dt.vhj + dt.ppc + dt.slovnaft) - (bat.sbk.v_kwh)
           + (dt.tpz + dt.cw) - (bat.sbk.z_kwh)
    },
    cd: { // (c)elkova (d)odavka tepla
      v_kwh: ( bat.svk.v_kwh ) + ( (dt.tpv + dt.vhj + dt.ppc + dt.slovnaft) - (bat.sbk.v_kwh) ),
      z_kwh: ( bat.svk.z_kwh ) + ( (dt.tpz + dt.cw) - (bat.sbk.z_kwh) ),
      b_kwh: ( (bat.svk.v_kwh) + ((dt.tpv + dt.vhj + dt.ppc + dt.slovnaft) - (bat.sbk.v_kwh)) )
           + ( (bat.svk.z_kwh) + ((dt.tpz + dt.cw) - (bat.sbk.z_kwh)) )
    },
    spolu: { // (c)elkova (v)yroba [ vlastne + externe zdroje ]
      kwh: bat.vlastne.kwh + bat.externe.kwh,
      gj: bat.vlastne.gj + bat.externe.gj
    }
  })
)

export const plan = createSelector(
  state,
  s => ({
    p_svk: { // (s)polu (v)ratane plynovych (k)otolni = planovana uzitocna dodavka tepla
      v_kwh: s.p.zdroj.v_kwh + s.p.primar.v_kwh + s.p.ost.v_kwh + s.p.sekundar.v_kwh + s.p.pk.v_kwh,
      z_kwh: s.p.zdroj.z_kwh + s.p.primar.z_kwh + s.p.ost.z_kwh + s.p.sekundar.z_kwh + s.p.pk.z_kwh,
      b_kwh: s.p.zdroj.v_kwh + s.p.primar.v_kwh + s.p.ost.v_kwh + s.p.sekundar.v_kwh + s.p.pk.v_kwh
           + s.p.zdroj.z_kwh + s.p.primar.z_kwh + s.p.ost.z_kwh + s.p.sekundar.z_kwh + s.p.pk.z_kwh
    },
    p_cd: { // planovana (c)elkova (d)odavka tepla (so stratami)
      // Z + ((P + ((OST + (S / 0,94)) / 0,985)) / 0,92)
      // (z)droje | (P)rimar | (O)ST | (S)ekundar
      v_kwh: s.p.zdroj.v_kwh + ( ( (s.p.primar.v_kwh + ( (s.p.ost.v_kwh + (s.p.sekundar.v_kwh
          / (1 - s.k.nsvos * 0.01) ) ) / (1 - s.k.nsvpo * 0.01) ) ) / (1 - s.k.nsvzp * 0.01) ) )
          + s.p.pk.v_kwh,
      z_kwh: s.p.zdroj.z_kwh + ( ( (s.p.primar.z_kwh + ( (s.p.ost.z_kwh + (s.p.sekundar.z_kwh
          / (1 - s.k.nszos * 0.01) ) ) / (1 - s.k.nszpo * 0.01) ) ) / (1 - s.k.nszzp * 0.01) ) )
          + s.p.pk.z_kwh,
      b_kwh: ( s.p.zdroj.v_kwh + ( ( (s.p.primar.v_kwh + ( (s.p.ost.v_kwh + (s.p.sekundar.v_kwh
          / (1 - s.k.nsvos * 0.01) ) ) / (1 - s.k.nsvpo * 0.01) ) ) / (1 - s.k.nsvzp * 0.01) ) ) )
           + ( s.p.zdroj.z_kwh + ( ( (s.p.primar.z_kwh + ( (s.p.ost.z_kwh + (s.p.sekundar.z_kwh
          / (1 - s.k.nszos * 0.01) ) ) / (1 - s.k.nszpo * 0.01) ) ) / (1 - s.k.nszzp * 0.01) ) ) )
          + s.p.pk.v_kwh + s.p.pk.z_kwh
    }
  })
)

export const plan_straty = createSelector(
  state,
  plan,
  (s, plan) => ({
    p_straty: { // planovane straty
      v_kwh: plan.p_cd.v_kwh - plan.p_svk.v_kwh,
      z_kwh: plan.p_cd.z_kwh - plan.p_svk.z_kwh,
      b_kwh: plan.p_cd.b_kwh - plan.p_svk.b_kwh
    }
  })
)

export const rozdiel = createSelector(
  state,
  sumare,
  plan,
  plan_straty,
  (s, sumare, plan, plan_straty) => ({
    r_svk: { // (r)ozdiel (spolu vratane kotolni) [ skutocnost - plan ]
      v_kwh: sumare.svk.v_kwh - plan.p_svk.v_kwh,
      z_kwh: sumare.svk.z_kwh - plan.p_svk.z_kwh,
      b_kwh: sumare.svk.b_kwh - plan.p_svk.b_kwh
    },
    r_cd: { // (r)ozdiel (celkova dodavka)
      v_kwh: sumare.cd.v_kwh - plan.p_cd.v_kwh,
      z_kwh: sumare.cd.z_kwh - plan.p_cd.z_kwh,
      b_kwh: sumare.cd.b_kwh - plan.p_cd.b_kwh
    }
  })
)

export const rozdiel_straty = createSelector(
  state,
  rozdiel,
  (s, rozdiel) => ({
    r_straty: { // (r)ozdiel (straty) [ skutocnost - plan ]
      v_kwh: rozdiel.r_cd.v_kwh - rozdiel.r_svk.v_kwh,
      z_kwh: rozdiel.r_cd.z_kwh - rozdiel.r_svk.z_kwh,
      b_kwh: rozdiel.r_cd.b_kwh - rozdiel.r_svk.b_kwh
    }
  })
)

export const plnenie = createSelector(
  state,
  sumare,
  plan,
  plan_straty,
  (s, sumare, plan, plan_straty) => ({
    pl_svk: {
      v_kwh: ( sumare.svk.v_kwh / plan.p_svk.v_kwh ) * 100,
      z_kwh: ( sumare.svk.z_kwh / plan.p_svk.z_kwh ) * 100,
      b_kwh: ( sumare.svk.b_kwh / plan.p_svk.b_kwh ) * 100
    },
    pl_straty: {
      v_kwh: ( sumare.straty.v_kwh / plan_straty.p_straty.v_kwh ) * 100,
      z_kwh: ( sumare.straty.z_kwh / plan_straty.p_straty.z_kwh ) * 100,
      b_kwh: ( sumare.straty.b_kwh / plan_straty.p_straty.b_kwh ) * 100
    },
    pl_cd: {
      v_kwh: ( sumare.cd.v_kwh / plan.p_cd.v_kwh ) * 100,
      z_kwh: ( sumare.cd.z_kwh / plan.p_cd.z_kwh ) * 100,
      b_kwh: ( sumare.cd.b_kwh / plan.p_cd.b_kwh ) * 100
    }
  })
)