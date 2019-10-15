import { createSelector } from 'reselect/es'

// fakturovany zemny plyn
// udaje plynovych kotolni
const state = (state) => state

// zp = zemny plyn | k = konstanty
export const sop = createSelector(
  state,
  s => ({
    tpv: {
      januar: {
        ...s.zp.tpv.januar,
        // MWh × jednotkova cena zemneho plynu platna pre SOPo/SOPp/SOPd na jednu MWh
        sopo: s.zp.tpv.januar.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.januar.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.januar.objem_mwh * s.k.jczpsopdv.hodnota
      },
      februar: {
        ...s.zp.tpv.februar,
        sopo: s.zp.tpv.februar.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.februar.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.februar.objem_mwh * s.k.jczpsopdv.hodnota
      },
      marec: {
        ...s.zp.tpv.marec,
        sopo: s.zp.tpv.marec.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.marec.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.marec.objem_mwh * s.k.jczpsopdv.hodnota
      },
      april: {
        ...s.zp.tpv.april,
        sopo: s.zp.tpv.april.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.april.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.april.objem_mwh * s.k.jczpsopdv.hodnota
      },
      maj: {
        ...s.zp.tpv.maj,
        sopo: s.zp.tpv.maj.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.maj.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.maj.objem_mwh * s.k.jczpsopdv.hodnota
      },
      jun: {
        ...s.zp.tpv.jun,
        sopo: s.zp.tpv.jun.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.jun.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.jun.objem_mwh * s.k.jczpsopdv.hodnota
      },
      jul: {
        ...s.zp.tpv.jul,
        sopo: s.zp.tpv.jul.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.jul.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.jul.objem_mwh * s.k.jczpsopdv.hodnota
      },
      august: {
        ...s.zp.tpv.august,
        sopo: s.zp.tpv.august.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.august.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.august.objem_mwh * s.k.jczpsopdv.hodnota
      },
      september: {
        ...s.zp.tpv.september,
        sopo: s.zp.tpv.september.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.september.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.september.objem_mwh * s.k.jczpsopdv.hodnota
      },
      oktober: {
        ...s.zp.tpv.oktober,
        sopo: s.zp.tpv.oktober.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.oktober.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.oktober.objem_mwh * s.k.jczpsopdv.hodnota
      },
      november: {
        ...s.zp.tpv.november,
        sopo: s.zp.tpv.november.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.november.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.november.objem_mwh * s.k.jczpsopdv.hodnota
      },
      december: {
        ...s.zp.tpv.december,
        sopo: s.zp.tpv.december.objem_mwh * s.k.jczpsopov.hodnota,
        sopp: s.zp.tpv.december.objem_mwh * s.k.jczpsoppv.hodnota,
        sopd: s.zp.tpv.december.objem_mwh * s.k.jczpsopdv.hodnota
      }
    },

    tpz: {
      januar: {
        ...s.zp.tpz.januar,
        // MWh × jednotkova cena zemneho plynu platna pre SOPo/SOPp/SOPd na jednu MWh
        sopo: s.zp.tpz.januar.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.januar.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.januar.objem_mwh * s.k.jczpsopdz.hodnota
      },
      februar: {
        ...s.zp.tpz.februar,
        sopo: s.zp.tpz.februar.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.februar.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.februar.objem_mwh * s.k.jczpsopdz.hodnota
      },
      marec: {
        ...s.zp.tpz.marec,
        sopo: s.zp.tpz.marec.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.marec.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.marec.objem_mwh * s.k.jczpsopdz.hodnota
      },
      april: {
        ...s.zp.tpz.april,
        sopo: s.zp.tpz.april.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.april.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.april.objem_mwh * s.k.jczpsopdz.hodnota
      },
      maj: {
        ...s.zp.tpz.maj,
        sopo: s.zp.tpz.maj.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.maj.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.maj.objem_mwh * s.k.jczpsopdz.hodnota
      },
      jun: {
        ...s.zp.tpz.jun,
        sopo: s.zp.tpz.jun.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.jun.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.jun.objem_mwh * s.k.jczpsopdz.hodnota
      },
      jul: {
        ...s.zp.tpz.jul,
        sopo: s.zp.tpz.jul.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.jul.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.jul.objem_mwh * s.k.jczpsopdz.hodnota
      },
      august: {
        ...s.zp.tpz.august,
        sopo: s.zp.tpz.august.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.august.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.august.objem_mwh * s.k.jczpsopdz.hodnota
      },
      september: {
        ...s.zp.tpz.september,
        sopo: s.zp.tpz.september.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.september.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.september.objem_mwh * s.k.jczpsopdz.hodnota
      },
      oktober: {
        ...s.zp.tpz.oktober,
        sopo: s.zp.tpz.oktober.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.oktober.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.oktober.objem_mwh * s.k.jczpsopdz.hodnota
      },
      november: {
        ...s.zp.tpz.november,
        sopo: s.zp.tpz.november.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.november.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.november.objem_mwh * s.k.jczpsopdz.hodnota
      },
      december: {
        ...s.zp.tpz.december,
        sopo: s.zp.tpz.december.objem_mwh * s.k.jczpsopoz.hodnota,
        sopp: s.zp.tpz.december.objem_mwh * s.k.jczpsoppz.hodnota,
        sopd: s.zp.tpz.december.objem_mwh * s.k.jczpsopdz.hodnota
      }
    },
    
    vhj: {
      januar: {
        ...s.zp.vhj.januar,
        // MWh × jednotkova cena zemneho plynu platna pre SOPo/SOPp/SOPd na jednu MWh
        sopo: s.zp.vhj.januar.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.januar.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.januar.objem_mwh * s.k.jczpsopdj.hodnota
      },
      februar: {
        ...s.zp.vhj.februar,
        sopo: s.zp.vhj.februar.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.februar.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.februar.objem_mwh * s.k.jczpsopdj.hodnota
      },
      marec: {
        ...s.zp.vhj.marec,
        sopo: s.zp.vhj.marec.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.marec.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.marec.objem_mwh * s.k.jczpsopdj.hodnota
      },
      april: {
        ...s.zp.vhj.april,
        sopo: s.zp.vhj.april.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.april.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.april.objem_mwh * s.k.jczpsopdj.hodnota
      },
      maj: {
        ...s.zp.vhj.maj,
        sopo: s.zp.vhj.maj.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.maj.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.maj.objem_mwh * s.k.jczpsopdj.hodnota
      },
      jun: {
        ...s.zp.vhj.jun,
        sopo: s.zp.vhj.jun.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.jun.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.jun.objem_mwh * s.k.jczpsopdj.hodnota
      },
      jul: {
        ...s.zp.vhj.jul,
        sopo: s.zp.vhj.jul.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.jul.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.jul.objem_mwh * s.k.jczpsopdj.hodnota
      },
      august: {
        ...s.zp.vhj.august,
        sopo: s.zp.vhj.august.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.august.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.august.objem_mwh * s.k.jczpsopdj.hodnota
      },
      september: {
        ...s.zp.vhj.september,
        sopo: s.zp.vhj.september.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.september.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.september.objem_mwh * s.k.jczpsopdj.hodnota
      },
      oktober: {
        ...s.zp.vhj.oktober,
        sopo: s.zp.vhj.oktober.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.oktober.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.oktober.objem_mwh * s.k.jczpsopdj.hodnota
      },
      november: {
        ...s.zp.vhj.november,
        sopo: s.zp.vhj.november.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.november.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.november.objem_mwh * s.k.jczpsopdj.hodnota
      },
      december: {
        ...s.zp.vhj.december,
        sopo: s.zp.vhj.december.objem_mwh * s.k.jczpsopoj.hodnota,
        sopp: s.zp.vhj.december.objem_mwh * s.k.jczpsoppj.hodnota,
        sopd: s.zp.vhj.december.objem_mwh * s.k.jczpsopdj.hodnota
      }
    },

    konstanty: {
      ...s.k
    }
  })
)

export const naklady = createSelector(
  state,
  sop,
  (s, sop) => ({
    tpv: {
      januar: {
        ...sop.tpv.januar,
        naklady: sop.tpv.januar.sopo + sop.tpv.januar.fmso + sop.tpv.januar.sopp + sop.tpv.januar.fmsp
               + sop.tpv.januar.sopd + sop.tpv.januar.fmsd + sop.tpv.januar.vsd + sop.tpv.januar.dan_eur
               + sop.tpv.januar.pdm
      },
      februar: {
        ...sop.tpv.februar,
        naklady: sop.tpv.februar.sopo + sop.tpv.februar.fmso + sop.tpv.februar.sopp + sop.tpv.februar.fmsp
        + sop.tpv.februar.sopd + sop.tpv.februar.fmsd + sop.tpv.februar.vsd + sop.tpv.februar.dan_eur
        + sop.tpv.februar.pdm
      },
      marec: {
        ...sop.tpv.marec,
        naklady: sop.tpv.marec.sopo + sop.tpv.marec.fmso + sop.tpv.marec.sopp + sop.tpv.marec.fmsp
        + sop.tpv.marec.sopd + sop.tpv.marec.fmsd + sop.tpv.marec.vsd + sop.tpv.marec.dan_eur
        + sop.tpv.marec.pdm
      },
      april: {
        ...sop.tpv.april,
        naklady: sop.tpv.april.sopo + sop.tpv.april.fmso + sop.tpv.april.sopp + sop.tpv.april.fmsp
        + sop.tpv.april.sopd + sop.tpv.april.fmsd + sop.tpv.april.vsd + sop.tpv.april.dan_eur
        + sop.tpv.april.pdm
      },
      maj: {
        ...sop.tpv.maj,
        naklady: sop.tpv.maj.sopo + sop.tpv.maj.fmso + sop.tpv.maj.sopp + sop.tpv.maj.fmsp
        + sop.tpv.maj.sopd + sop.tpv.maj.fmsd + sop.tpv.maj.vsd + sop.tpv.maj.dan_eur
        + sop.tpv.maj.pdm
      },
      jun: {
        ...sop.tpv.jun,
        naklady: sop.tpv.jun.sopo + sop.tpv.jun.fmso + sop.tpv.jun.sopp + sop.tpv.jun.fmsp
        + sop.tpv.jun.sopd + sop.tpv.jun.fmsd + sop.tpv.jun.vsd + sop.tpv.jun.dan_eur
        + sop.tpv.jun.pdm
      },
      jul: {
        ...sop.tpv.jul,
        naklady: sop.tpv.jul.sopo + sop.tpv.jul.fmso + sop.tpv.jul.sopp + sop.tpv.jul.fmsp
        + sop.tpv.jul.sopd + sop.tpv.jul.fmsd + sop.tpv.jul.vsd + sop.tpv.jul.dan_eur
        + sop.tpv.jul.pdm
      },
      august: {
        ...sop.tpv.august,
        naklady: sop.tpv.august.sopo + sop.tpv.august.fmso + sop.tpv.august.sopp + sop.tpv.august.fmsp
        + sop.tpv.august.sopd + sop.tpv.august.fmsd + sop.tpv.august.vsd + sop.tpv.august.dan_eur
        + sop.tpv.august.pdm
      },
      september: {
        ...sop.tpv.september,
        naklady: sop.tpv.september.sopo + sop.tpv.september.fmso + sop.tpv.september.sopp + sop.tpv.september.fmsp
        + sop.tpv.september.sopd + sop.tpv.september.fmsd + sop.tpv.september.vsd + sop.tpv.september.dan_eur
        + sop.tpv.september.pdm
      },
      oktober: {
        ...sop.tpv.oktober,
        naklady: sop.tpv.oktober.sopo + sop.tpv.oktober.fmso + sop.tpv.oktober.sopp + sop.tpv.oktober.fmsp
        + sop.tpv.oktober.sopd + sop.tpv.oktober.fmsd + sop.tpv.oktober.vsd + sop.tpv.oktober.dan_eur
        + sop.tpv.oktober.pdm
      },
      november: {
        ...sop.tpv.november,
        naklady: sop.tpv.november.sopo + sop.tpv.november.fmso + sop.tpv.november.sopp + sop.tpv.november.fmsp
        + sop.tpv.november.sopd + sop.tpv.november.fmsd + sop.tpv.november.vsd + sop.tpv.november.dan_eur
        + sop.tpv.november.pdm
      },
      december: {
        ...sop.tpv.december,
        naklady: sop.tpv.december.sopo + sop.tpv.december.fmso + sop.tpv.december.sopp + sop.tpv.december.fmsp
        + sop.tpv.december.sopd + sop.tpv.december.fmsd + sop.tpv.december.vsd + sop.tpv.december.dan_eur
        + sop.tpv.december.pdm
      }
    },
    
    tpz: {
      januar: {
        ...sop.tpz.januar,
        naklady: sop.tpz.januar.sopo + sop.tpz.januar.fmso + sop.tpz.januar.sopp + sop.tpz.januar.fmsp
        + sop.tpz.januar.sopd + sop.tpz.januar.fmsd + sop.tpz.januar.vsd + sop.tpz.januar.dan_eur
        + sop.tpz.januar.pdm
      },
      februar: {
        ...sop.tpz.februar,
        naklady: sop.tpz.februar.sopo + sop.tpz.februar.fmso + sop.tpz.februar.sopp + sop.tpz.februar.fmsp
        + sop.tpz.februar.sopd + sop.tpz.februar.fmsd + sop.tpz.februar.vsd + sop.tpz.februar.dan_eur
        + sop.tpz.februar.pdm
      },
      marec: {
        ...sop.tpz.marec,
        naklady: sop.tpz.marec.sopo + sop.tpz.marec.fmso + sop.tpz.marec.sopp + sop.tpz.marec.fmsp
        + sop.tpz.marec.sopd + sop.tpz.marec.fmsd + sop.tpz.marec.vsd + sop.tpz.marec.dan_eur
        + sop.tpz.marec.pdm
      },
      april: {
        ...sop.tpz.april,
        naklady: sop.tpz.april.sopo + sop.tpz.april.fmso + sop.tpz.april.sopp + sop.tpz.april.fmsp
        + sop.tpz.april.sopd + sop.tpz.april.fmsd + sop.tpz.april.vsd + sop.tpz.april.dan_eur
        + sop.tpz.april.pdm
      },
      maj: {
        ...sop.tpz.maj,
        naklady: sop.tpz.maj.sopo + sop.tpz.maj.fmso + sop.tpz.maj.sopp + sop.tpz.maj.fmsp
        + sop.tpz.maj.sopd + sop.tpz.maj.fmsd + sop.tpz.maj.vsd + sop.tpz.maj.dan_eur
        + sop.tpz.maj.pdm
      },
      jun: {
        ...sop.tpz.jun,
        naklady: sop.tpz.jun.sopo + sop.tpz.jun.fmso + sop.tpz.jun.sopp + sop.tpz.jun.fmsp
        + sop.tpz.jun.sopd + sop.tpz.jun.fmsd + sop.tpz.jun.vsd + sop.tpz.jun.dan_eur
        + sop.tpz.jun.pdm
      },
      jul: {
        ...sop.tpz.jul,
        naklady: sop.tpz.jul.sopo + sop.tpz.jul.fmso + sop.tpz.jul.sopp + sop.tpz.jul.fmsp
        + sop.tpz.jul.sopd + sop.tpz.jul.fmsd + sop.tpz.jul.vsd + sop.tpz.jul.dan_eur
        + sop.tpz.jul.pdm
      },
      august: {
        ...sop.tpz.august,
        naklady: sop.tpz.august.sopo + sop.tpz.august.fmso + sop.tpz.august.sopp + sop.tpz.august.fmsp
        + sop.tpz.august.sopd + sop.tpz.august.fmsd + sop.tpz.august.vsd + sop.tpz.august.dan_eur
        + sop.tpz.august.pdm
      },
      september: {
        ...sop.tpz.september,
        naklady: sop.tpz.september.sopo + sop.tpz.september.fmso + sop.tpz.september.sopp + sop.tpz.september.fmsp
        + sop.tpz.september.sopd + sop.tpz.september.fmsd + sop.tpz.september.vsd + sop.tpz.september.dan_eur
        + sop.tpz.september.pdm
      },
      oktober: {
        ...sop.tpz.oktober,
        naklady: sop.tpz.oktober.sopo + sop.tpz.oktober.fmso + sop.tpz.oktober.sopp + sop.tpz.oktober.fmsp
        + sop.tpz.oktober.sopd + sop.tpz.oktober.fmsd + sop.tpz.oktober.vsd + sop.tpz.oktober.dan_eur
        + sop.tpz.oktober.pdm
      },
      november: {
        ...sop.tpz.november,
        naklady: sop.tpz.november.sopo + sop.tpz.november.fmso + sop.tpz.november.sopp + sop.tpz.november.fmsp
        + sop.tpz.november.sopd + sop.tpz.november.fmsd + sop.tpz.november.vsd + sop.tpz.november.dan_eur
        + sop.tpz.november.pdm
      },
      december: {
        ...sop.tpz.december,
        naklady: sop.tpz.december.sopo + sop.tpz.december.fmso + sop.tpz.december.sopp + sop.tpz.december.fmsp
        + sop.tpz.december.sopd + sop.tpz.december.fmsd + sop.tpz.december.vsd + sop.tpz.december.dan_eur
        + sop.tpz.december.pdm
      }
    },
    
    vhj: {
      januar: {
        ...sop.vhj.januar,
        naklady: sop.vhj.januar.sopo + sop.vhj.januar.fmso + sop.vhj.januar.sopp + sop.vhj.januar.fmsp
        + sop.vhj.januar.sopd + sop.vhj.januar.fmsd + sop.vhj.januar.vsd + sop.vhj.januar.dan_eur
        + sop.vhj.januar.pdm
      },
      februar: {
        ...sop.vhj.februar,
        naklady: sop.vhj.februar.sopo + sop.vhj.februar.fmso + sop.vhj.februar.sopp + sop.vhj.februar.fmsp
        + sop.vhj.februar.sopd + sop.vhj.februar.fmsd + sop.vhj.februar.vsd + sop.vhj.februar.dan_eur
        + sop.vhj.februar.pdm
      },
      marec: {
        ...sop.vhj.marec,
        naklady: sop.vhj.marec.sopo + sop.vhj.marec.fmso + sop.vhj.marec.sopp + sop.vhj.marec.fmsp
        + sop.vhj.marec.sopd + sop.vhj.marec.fmsd + sop.vhj.marec.vsd + sop.vhj.marec.dan_eur
        + sop.vhj.marec.pdm
      },
      april: {
        ...sop.vhj.april,
        naklady: sop.vhj.april.sopo + sop.vhj.april.fmso + sop.vhj.april.sopp + sop.vhj.april.fmsp
        + sop.vhj.april.sopd + sop.vhj.april.fmsd + sop.vhj.april.vsd + sop.vhj.april.dan_eur
        + sop.vhj.april.pdm
      },
      maj: {
        ...sop.vhj.maj,
        naklady: sop.vhj.maj.sopo + sop.vhj.maj.fmso + sop.vhj.maj.sopp + sop.vhj.maj.fmsp
        + sop.vhj.maj.sopd + sop.vhj.maj.fmsd + sop.vhj.maj.vsd + sop.vhj.maj.dan_eur
        + sop.vhj.maj.pdm
      },
      jun: {
        ...sop.vhj.jun,
        naklady: sop.vhj.jun.sopo + sop.vhj.jun.fmso + sop.vhj.jun.sopp + sop.vhj.jun.fmsp
        + sop.vhj.jun.sopd + sop.vhj.jun.fmsd + sop.vhj.jun.vsd + sop.vhj.jun.dan_eur
        + sop.vhj.jun.pdm
      },
      jul: {
        ...sop.vhj.jul,
        naklady: sop.vhj.jul.sopo + sop.vhj.jul.fmso + sop.vhj.jul.sopp + sop.vhj.jul.fmsp
        + sop.vhj.jul.sopd + sop.vhj.jul.fmsd + sop.vhj.jul.vsd + sop.vhj.jul.dan_eur
        + sop.vhj.jul.pdm
      },
      august: {
        ...sop.vhj.august,
        naklady: sop.vhj.august.sopo + sop.vhj.august.fmso + sop.vhj.august.sopp + sop.vhj.august.fmsp
        + sop.vhj.august.sopd + sop.vhj.august.fmsd + sop.vhj.august.vsd + sop.vhj.august.dan_eur
        + sop.vhj.august.pdm
      },
      september: {
        ...sop.vhj.september,
        naklady: sop.vhj.september.sopo + sop.vhj.september.fmso + sop.vhj.september.sopp + sop.vhj.september.fmsp
        + sop.vhj.september.sopd + sop.vhj.september.fmsd + sop.vhj.september.vsd + sop.vhj.september.dan_eur
        + sop.vhj.september.pdm
      },
      oktober: {
        ...sop.vhj.oktober,
        naklady: sop.vhj.oktober.sopo + sop.vhj.oktober.fmso + sop.vhj.oktober.sopp + sop.vhj.oktober.fmsp
        + sop.vhj.oktober.sopd + sop.vhj.oktober.fmsd + sop.vhj.oktober.vsd + sop.vhj.oktober.dan_eur
        + sop.vhj.oktober.pdm
      },
      november: {
        ...sop.vhj.november,
        naklady: sop.vhj.november.sopo + sop.vhj.november.fmso + sop.vhj.november.sopp + sop.vhj.november.fmsp
        + sop.vhj.november.sopd + sop.vhj.november.fmsd + sop.vhj.november.vsd + sop.vhj.november.dan_eur
        + sop.vhj.november.pdm
      },
      december: {
        ...sop.vhj.december,
        naklady: sop.vhj.december.sopo + sop.vhj.december.fmso + sop.vhj.december.sopp + sop.vhj.december.fmsp
        + sop.vhj.december.sopd + sop.vhj.december.fmsd + sop.vhj.december.vsd + sop.vhj.december.dan_eur
        + sop.vhj.december.pdm
      }
    }
  })
)

export const spolu = createSelector(
  state,
  naklady,
  (s, nkl) => ({
    tpv: {
      ...nkl.tpv,
      spolu: {
        objem_m3: nkl.tpv.januar.objem_m3 + nkl.tpv.februar.objem_m3 + nkl.tpv.marec.objem_m3
                + nkl.tpv.april.objem_m3 + nkl.tpv.maj.objem_m3 + nkl.tpv.jun.objem_m3
                + nkl.tpv.jul.objem_m3 + nkl.tpv.august.objem_m3 + nkl.tpv.september.objem_m3
                + nkl.tpv.oktober.objem_m3 + nkl.tpv.november.objem_m3 + nkl.tpv.december.objem_m3,

        objem_mwh: nkl.tpv.januar.objem_mwh + nkl.tpv.februar.objem_mwh + nkl.tpv.marec.objem_mwh
                + nkl.tpv.april.objem_mwh + nkl.tpv.maj.objem_mwh + nkl.tpv.jun.objem_mwh
                + nkl.tpv.jul.objem_mwh + nkl.tpv.august.objem_mwh + nkl.tpv.september.objem_mwh
                + nkl.tpv.oktober.objem_mwh + nkl.tpv.november.objem_mwh + nkl.tpv.december.objem_mwh,

        sopo: nkl.tpv.januar.sopo + nkl.tpv.februar.sopo + nkl.tpv.marec.sopo + nkl.tpv.april.sopo
            + nkl.tpv.maj.sopo + nkl.tpv.jun.sopo + nkl.tpv.jul.sopo + nkl.tpv.august.sopo
            + nkl.tpv.september.sopo + nkl.tpv.oktober.sopo + nkl.tpv.november.sopo + nkl.tpv.december.sopo,

        fmso: nkl.tpv.januar.fmso + nkl.tpv.februar.fmso + nkl.tpv.marec.fmso + nkl.tpv.april.fmso
            + nkl.tpv.maj.fmso + nkl.tpv.jun.fmso + nkl.tpv.jul.fmso + nkl.tpv.august.fmso
            + nkl.tpv.september.fmso + nkl.tpv.oktober.fmso + nkl.tpv.november.fmso + nkl.tpv.december.fmso,

        sopp: nkl.tpv.januar.sopp + nkl.tpv.februar.sopp + nkl.tpv.marec.sopp + nkl.tpv.april.sopp
            + nkl.tpv.maj.sopp + nkl.tpv.jun.sopp + nkl.tpv.jul.sopp + nkl.tpv.august.sopp
            + nkl.tpv.september.sopp + nkl.tpv.oktober.sopp + nkl.tpv.november.sopp + nkl.tpv.december.sopp,

        fmsp: nkl.tpv.januar.fmsp + nkl.tpv.februar.fmsp + nkl.tpv.marec.fmsp + nkl.tpv.april.fmsp
            + nkl.tpv.maj.fmsp + nkl.tpv.jun.fmsp + nkl.tpv.jul.fmsp + nkl.tpv.august.fmsp
            + nkl.tpv.september.fmsp + nkl.tpv.oktober.fmsp + nkl.tpv.november.fmsp + nkl.tpv.december.fmsp,

        sopd: nkl.tpv.januar.sopd + nkl.tpv.februar.sopd + nkl.tpv.marec.sopd + nkl.tpv.april.sopd
            + nkl.tpv.maj.sopd + nkl.tpv.jun.sopd + nkl.tpv.jul.sopd + nkl.tpv.august.sopd
            + nkl.tpv.september.sopd + nkl.tpv.oktober.sopd + nkl.tpv.november.sopd + nkl.tpv.december.sopd,

        fmsd: nkl.tpv.januar.fmsd + nkl.tpv.februar.fmsd + nkl.tpv.marec.fmsd + nkl.tpv.april.fmsd
            + nkl.tpv.maj.fmsd + nkl.tpv.jun.fmsd + nkl.tpv.jul.fmsd + nkl.tpv.august.fmsd
            + nkl.tpv.september.fmsd + nkl.tpv.oktober.fmsd + nkl.tpv.november.fmsd + nkl.tpv.december.fmsd,

        vsd: nkl.tpv.januar.vsd + nkl.tpv.februar.vsd + nkl.tpv.marec.vsd + nkl.tpv.april.vsd
            + nkl.tpv.maj.vsd + nkl.tpv.jun.vsd + nkl.tpv.jul.vsd + nkl.tpv.august.vsd
            + nkl.tpv.september.vsd + nkl.tpv.oktober.vsd + nkl.tpv.november.vsd + nkl.tpv.december.vsd,

        dan_mwh: nkl.tpv.januar.dan_mwh + nkl.tpv.februar.dan_mwh + nkl.tpv.marec.dan_mwh + nkl.tpv.april.dan_mwh
            + nkl.tpv.maj.dan_mwh + nkl.tpv.jun.dan_mwh + nkl.tpv.jul.dan_mwh + nkl.tpv.august.dan_mwh
            + nkl.tpv.september.dan_mwh + nkl.tpv.oktober.dan_mwh + nkl.tpv.november.dan_mwh + nkl.tpv.december.dan_mwh,

        dan_eur: nkl.tpv.januar.dan_eur + nkl.tpv.februar.dan_eur + nkl.tpv.marec.dan_eur
               + nkl.tpv.april.dan_eur + nkl.tpv.maj.dan_eur + nkl.tpv.jun.dan_eur
               + nkl.tpv.jul.dan_eur + nkl.tpv.august.dan_eur + nkl.tpv.september.dan_eur
               + nkl.tpv.oktober.dan_eur + nkl.tpv.november.dan_eur + nkl.tpv.december.dan_eur,

        pdm: nkl.tpv.januar.pdm + nkl.tpv.februar.pdm + nkl.tpv.marec.pdm + nkl.tpv.april.pdm
           + nkl.tpv.maj.pdm + nkl.tpv.jun.pdm + nkl.tpv.jul.pdm + nkl.tpv.august.pdm
           + nkl.tpv.september.pdm + nkl.tpv.oktober.pdm + nkl.tpv.november.pdm + nkl.tpv.december.pdm,

        naklady: nkl.tpv.januar.naklady + nkl.tpv.februar.naklady + nkl.tpv.marec.naklady
               + nkl.tpv.april.naklady + nkl.tpv.maj.naklady + nkl.tpv.jun.naklady
               + nkl.tpv.jul.naklady + nkl.tpv.august.naklady + nkl.tpv.september.naklady
               + nkl.tpv.oktober.naklady + nkl.tpv.november.naklady + nkl.tpv.december.naklady
      }
    },
    
    tpz: {
      ...nkl.tpz,
      spolu: {
        objem_m3: nkl.tpz.januar.objem_m3 + nkl.tpz.februar.objem_m3 + nkl.tpz.marec.objem_m3
        + nkl.tpz.april.objem_m3 + nkl.tpz.maj.objem_m3 + nkl.tpz.jun.objem_m3
        + nkl.tpz.jul.objem_m3 + nkl.tpz.august.objem_m3 + nkl.tpz.september.objem_m3
        + nkl.tpz.oktober.objem_m3 + nkl.tpz.november.objem_m3 + nkl.tpz.december.objem_m3,

        objem_mwh: nkl.tpz.januar.objem_mwh + nkl.tpz.februar.objem_mwh + nkl.tpz.marec.objem_mwh
        + nkl.tpz.april.objem_mwh + nkl.tpz.maj.objem_mwh + nkl.tpz.jun.objem_mwh
        + nkl.tpz.jul.objem_mwh + nkl.tpz.august.objem_mwh + nkl.tpz.september.objem_mwh
        + nkl.tpz.oktober.objem_mwh + nkl.tpz.november.objem_mwh + nkl.tpz.december.objem_mwh,

        sopo: nkl.tpz.januar.sopo + nkl.tpz.februar.sopo + nkl.tpz.marec.sopo + nkl.tpz.april.sopo
        + nkl.tpz.maj.sopo + nkl.tpz.jun.sopo + nkl.tpz.jul.sopo + nkl.tpz.august.sopo
        + nkl.tpz.september.sopo + nkl.tpz.oktober.sopo + nkl.tpz.november.sopo + nkl.tpz.december.sopo,

        fmso: nkl.tpz.januar.fmso + nkl.tpz.februar.fmso + nkl.tpz.marec.fmso + nkl.tpz.april.fmso
        + nkl.tpz.maj.fmso + nkl.tpz.jun.fmso + nkl.tpz.jul.fmso + nkl.tpz.august.fmso
        + nkl.tpz.september.fmso + nkl.tpz.oktober.fmso + nkl.tpz.november.fmso + nkl.tpz.december.fmso,

        sopp: nkl.tpz.januar.sopp + nkl.tpz.februar.sopp + nkl.tpz.marec.sopp + nkl.tpz.april.sopp
        + nkl.tpz.maj.sopp + nkl.tpz.jun.sopp + nkl.tpz.jul.sopp + nkl.tpz.august.sopp
        + nkl.tpz.september.sopp + nkl.tpz.oktober.sopp + nkl.tpz.november.sopp + nkl.tpz.december.sopp,

        fmsp: nkl.tpz.januar.fmsp + nkl.tpz.februar.fmsp + nkl.tpz.marec.fmsp + nkl.tpz.april.fmsp
        + nkl.tpz.maj.fmsp + nkl.tpz.jun.fmsp + nkl.tpz.jul.fmsp + nkl.tpz.august.fmsp
        + nkl.tpz.september.fmsp + nkl.tpz.oktober.fmsp + nkl.tpz.november.fmsp + nkl.tpz.december.fmsp,

        sopd: nkl.tpz.januar.sopd + nkl.tpz.februar.sopd + nkl.tpz.marec.sopd + nkl.tpz.april.sopd
        + nkl.tpz.maj.sopd + nkl.tpz.jun.sopd + nkl.tpz.jul.sopd + nkl.tpz.august.sopd
        + nkl.tpz.september.sopd + nkl.tpz.oktober.sopd + nkl.tpz.november.sopd + nkl.tpz.december.sopd,

        fmsd: nkl.tpz.januar.fmsd + nkl.tpz.februar.fmsd + nkl.tpz.marec.fmsd + nkl.tpz.april.fmsd
        + nkl.tpz.maj.fmsd + nkl.tpz.jun.fmsd + nkl.tpz.jul.fmsd + nkl.tpz.august.fmsd
        + nkl.tpz.september.fmsd + nkl.tpz.oktober.fmsd + nkl.tpz.november.fmsd + nkl.tpz.december.fmsd,

        vsd: nkl.tpz.januar.vsd + nkl.tpz.februar.vsd + nkl.tpz.marec.vsd + nkl.tpz.april.vsd
        + nkl.tpz.maj.vsd + nkl.tpz.jun.vsd + nkl.tpz.jul.vsd + nkl.tpz.august.vsd
        + nkl.tpz.september.vsd + nkl.tpz.oktober.vsd + nkl.tpz.november.vsd + nkl.tpz.december.vsd,

        dan_mwh: nkl.tpz.januar.dan_mwh + nkl.tpz.februar.dan_mwh + nkl.tpz.marec.dan_mwh + nkl.tpz.april.dan_mwh
        + nkl.tpz.maj.dan_mwh + nkl.tpz.jun.dan_mwh + nkl.tpz.jul.dan_mwh + nkl.tpz.august.dan_mwh
        + nkl.tpz.september.dan_mwh + nkl.tpz.oktober.dan_mwh + nkl.tpz.november.dan_mwh + nkl.tpz.december.dan_mwh,

        dan_eur: nkl.tpz.januar.dan_eur + nkl.tpz.februar.dan_eur + nkl.tpz.marec.dan_eur
        + nkl.tpz.april.dan_eur + nkl.tpz.maj.dan_eur + nkl.tpz.jun.dan_eur
        + nkl.tpz.jul.dan_eur + nkl.tpz.august.dan_eur + nkl.tpz.september.dan_eur
        + nkl.tpz.oktober.dan_eur + nkl.tpz.november.dan_eur + nkl.tpz.december.dan_eur,

        pdm: nkl.tpz.januar.pdm + nkl.tpz.februar.pdm + nkl.tpz.marec.pdm + nkl.tpz.april.pdm
        + nkl.tpz.maj.pdm + nkl.tpz.jun.pdm + nkl.tpz.jul.pdm + nkl.tpz.august.pdm
        + nkl.tpz.september.pdm + nkl.tpz.oktober.pdm + nkl.tpz.november.pdm + nkl.tpz.december.pdm,

        naklady: nkl.tpz.januar.naklady + nkl.tpz.februar.naklady + nkl.tpz.marec.naklady
        + nkl.tpz.april.naklady + nkl.tpz.maj.naklady + nkl.tpz.jun.naklady
        + nkl.tpz.jul.naklady + nkl.tpz.august.naklady + nkl.tpz.september.naklady
        + nkl.tpz.oktober.naklady + nkl.tpz.november.naklady + nkl.tpz.december.naklady
      }
    },
    
    vhj: {
      ...nkl.vhj,
      spolu: {
        objem_m3: nkl.vhj.januar.objem_m3 + nkl.vhj.februar.objem_m3 + nkl.vhj.marec.objem_m3
        + nkl.vhj.april.objem_m3 + nkl.vhj.maj.objem_m3 + nkl.vhj.jun.objem_m3
        + nkl.vhj.jul.objem_m3 + nkl.vhj.august.objem_m3 + nkl.vhj.september.objem_m3
        + nkl.vhj.oktober.objem_m3 + nkl.vhj.november.objem_m3 + nkl.vhj.december.objem_m3,

        objem_mwh: nkl.vhj.januar.objem_mwh + nkl.vhj.februar.objem_mwh + nkl.vhj.marec.objem_mwh
        + nkl.vhj.april.objem_mwh + nkl.vhj.maj.objem_mwh + nkl.vhj.jun.objem_mwh
        + nkl.vhj.jul.objem_mwh + nkl.vhj.august.objem_mwh + nkl.vhj.september.objem_mwh
        + nkl.vhj.oktober.objem_mwh + nkl.vhj.november.objem_mwh + nkl.vhj.december.objem_mwh,

        sopo: nkl.vhj.januar.sopo + nkl.vhj.februar.sopo + nkl.vhj.marec.sopo + nkl.vhj.april.sopo
        + nkl.vhj.maj.sopo + nkl.vhj.jun.sopo + nkl.vhj.jul.sopo + nkl.vhj.august.sopo
        + nkl.vhj.september.sopo + nkl.vhj.oktober.sopo + nkl.vhj.november.sopo + nkl.vhj.december.sopo,

        fmso: nkl.vhj.januar.fmso + nkl.vhj.februar.fmso + nkl.vhj.marec.fmso + nkl.vhj.april.fmso
        + nkl.vhj.maj.fmso + nkl.vhj.jun.fmso + nkl.vhj.jul.fmso + nkl.vhj.august.fmso
        + nkl.vhj.september.fmso + nkl.vhj.oktober.fmso + nkl.vhj.november.fmso + nkl.vhj.december.fmso,

        sopp: nkl.vhj.januar.sopp + nkl.vhj.februar.sopp + nkl.vhj.marec.sopp + nkl.vhj.april.sopp
        + nkl.vhj.maj.sopp + nkl.vhj.jun.sopp + nkl.vhj.jul.sopp + nkl.vhj.august.sopp
        + nkl.vhj.september.sopp + nkl.vhj.oktober.sopp + nkl.vhj.november.sopp + nkl.vhj.december.sopp,

        fmsp: nkl.vhj.januar.fmsp + nkl.vhj.februar.fmsp + nkl.vhj.marec.fmsp + nkl.vhj.april.fmsp
        + nkl.vhj.maj.fmsp + nkl.vhj.jun.fmsp + nkl.vhj.jul.fmsp + nkl.vhj.august.fmsp
        + nkl.vhj.september.fmsp + nkl.vhj.oktober.fmsp + nkl.vhj.november.fmsp + nkl.vhj.december.fmsp,

        sopd: nkl.vhj.januar.sopd + nkl.vhj.februar.sopd + nkl.vhj.marec.sopd + nkl.vhj.april.sopd
        + nkl.vhj.maj.sopd + nkl.vhj.jun.sopd + nkl.vhj.jul.sopd + nkl.vhj.august.sopd
        + nkl.vhj.september.sopd + nkl.vhj.oktober.sopd + nkl.vhj.november.sopd + nkl.vhj.december.sopd,

        fmsd: nkl.vhj.januar.fmsd + nkl.vhj.februar.fmsd + nkl.vhj.marec.fmsd + nkl.vhj.april.fmsd
        + nkl.vhj.maj.fmsd + nkl.vhj.jun.fmsd + nkl.vhj.jul.fmsd + nkl.vhj.august.fmsd
        + nkl.vhj.september.fmsd + nkl.vhj.oktober.fmsd + nkl.vhj.november.fmsd + nkl.vhj.december.fmsd,

        vsd: nkl.vhj.januar.vsd + nkl.vhj.februar.vsd + nkl.vhj.marec.vsd + nkl.vhj.april.vsd
        + nkl.vhj.maj.vsd + nkl.vhj.jun.vsd + nkl.vhj.jul.vsd + nkl.vhj.august.vsd
        + nkl.vhj.september.vsd + nkl.vhj.oktober.vsd + nkl.vhj.november.vsd + nkl.vhj.december.vsd,

        dan_mwh: nkl.vhj.januar.dan_mwh + nkl.vhj.februar.dan_mwh + nkl.vhj.marec.dan_mwh + nkl.vhj.april.dan_mwh
        + nkl.vhj.maj.dan_mwh + nkl.vhj.jun.dan_mwh + nkl.vhj.jul.dan_mwh + nkl.vhj.august.dan_mwh
        + nkl.vhj.september.dan_mwh + nkl.vhj.oktober.dan_mwh + nkl.vhj.november.dan_mwh + nkl.vhj.december.dan_mwh,

        dan_eur: nkl.vhj.januar.dan_eur + nkl.vhj.februar.dan_eur + nkl.vhj.marec.dan_eur
        + nkl.vhj.april.dan_eur + nkl.vhj.maj.dan_eur + nkl.vhj.jun.dan_eur
        + nkl.vhj.jul.dan_eur + nkl.vhj.august.dan_eur + nkl.vhj.september.dan_eur
        + nkl.vhj.oktober.dan_eur + nkl.vhj.november.dan_eur + nkl.vhj.december.dan_eur,

        pdm: nkl.vhj.januar.pdm + nkl.vhj.februar.pdm + nkl.vhj.marec.pdm + nkl.vhj.april.pdm
        + nkl.vhj.maj.pdm + nkl.vhj.jun.pdm + nkl.vhj.jul.pdm + nkl.vhj.august.pdm
        + nkl.vhj.september.pdm + nkl.vhj.oktober.pdm + nkl.vhj.november.pdm + nkl.vhj.december.pdm,

        naklady: nkl.vhj.januar.naklady + nkl.vhj.februar.naklady + nkl.vhj.marec.naklady
        + nkl.vhj.april.naklady + nkl.vhj.maj.naklady + nkl.vhj.jun.naklady
        + nkl.vhj.jul.naklady + nkl.vhj.august.naklady + nkl.vhj.september.naklady
        + nkl.vhj.oktober.naklady + nkl.vhj.november.naklady + nkl.vhj.december.naklady
      }
    }
  })
)

export const cena = createSelector(
  state,
  spolu,
  (s, sp) => ({
    tpv: {
      ...sp.tpv,
      cena: {
        m3: (sp.tpv.spolu.naklady - sp.tpv.spolu.pdm) / sp.tpv.spolu.objem_m3,
        mwh: (sp.tpv.spolu.naklady - sp.tpv.spolu.pdm) / sp.tpv.spolu.objem_mwh
      }
    },
    
    tpz: {
      ...sp.tpz,
      cena: {
        m3: (sp.tpz.spolu.naklady - sp.tpz.spolu.pdm) / sp.tpz.spolu.objem_m3,
        mwh: (sp.tpz.spolu.naklady - sp.tpz.spolu.pdm) / sp.tpz.spolu.objem_mwh
      }
    },
    
    vhj: {
      ...sp.vhj,
      cena: {
        m3: (sp.vhj.spolu.naklady - sp.vhj.spolu.pdm) / sp.vhj.spolu.objem_m3,
        mwh: (sp.vhj.spolu.naklady - sp.vhj.spolu.pdm) / sp.vhj.spolu.objem_mwh
      }
    }
  })
)

export const vyrobne = createSelector(
  state,
  cena,
  (s, ce) => ({
    tpv: {
      ...ce.tpv
    },

    tpz: {
      ...ce.tpz
    },

    vhj: {
      ...ce.vhj
    },

    // vyrobne spolu (tpv + tpz + vhj)
    vyr: {
      januar: {
        objem_m3: ce.tpv.januar.objem_m3 + ce.tpz.januar.objem_m3 + ce.vhj.januar.objem_m3,
        objem_mwh: ce.tpv.januar.objem_mwh + ce.tpz.januar.objem_mwh + ce.vhj.januar.objem_mwh,
        sopo: ce.tpv.januar.sopo + ce.tpz.januar.sopo + ce.vhj.januar.sopo,
        fmso: ce.tpv.januar.fmso + ce.tpz.januar.fmso + ce.vhj.januar.fmso,
        sopp: ce.tpv.januar.sopp + ce.tpz.januar.sopp + ce.vhj.januar.sopp,
        fmsp: ce.tpv.januar.fmsp + ce.tpz.januar.fmsp + ce.vhj.januar.fmsp,
        sopd: ce.tpv.januar.sopd + ce.tpz.januar.sopd + ce.vhj.januar.sopd,
        fmsd: ce.tpv.januar.fmsd + ce.tpz.januar.fmsd + ce.vhj.januar.fmsd,
        vsd: ce.tpv.januar.vsd + ce.tpz.januar.vsd + ce.vhj.januar.vsd,
        dan_mwh: ce.tpv.januar.dan_mwh + ce.tpz.januar.dan_mwh + ce.vhj.januar.dan_mwh,
        dan_eur: ce.tpv.januar.dan_eur + ce.tpz.januar.dan_eur + ce.vhj.januar.dan_eur,
        pdm: ce.tpv.januar.pdm + ce.tpz.januar.pdm + ce.vhj.januar.pdm,
        naklady: ce.tpv.januar.naklady + ce.tpz.januar.naklady + ce.vhj.januar.naklady
      },
      februar: {
        objem_m3: ce.tpv.februar.objem_m3 + ce.tpz.februar.objem_m3 + ce.vhj.februar.objem_m3,
        objem_mwh: ce.tpv.februar.objem_mwh + ce.tpz.februar.objem_mwh + ce.vhj.februar.objem_mwh,
        sopo: ce.tpv.februar.sopo + ce.tpz.februar.sopo + ce.vhj.februar.sopo,
        fmso: ce.tpv.februar.fmso + ce.tpz.februar.fmso + ce.vhj.februar.fmso,
        sopp: ce.tpv.februar.sopp + ce.tpz.februar.sopp + ce.vhj.februar.sopp,
        fmsp: ce.tpv.februar.fmsp + ce.tpz.februar.fmsp + ce.vhj.februar.fmsp,
        sopd: ce.tpv.februar.sopd + ce.tpz.februar.sopd + ce.vhj.februar.sopd,
        fmsd: ce.tpv.februar.fmsd + ce.tpz.februar.fmsd + ce.vhj.februar.fmsd,
        vsd: ce.tpv.februar.vsd + ce.tpz.februar.vsd + ce.vhj.februar.vsd,
        dan_mwh: ce.tpv.februar.dan_mwh + ce.tpz.februar.dan_mwh + ce.vhj.februar.dan_mwh,
        dan_eur: ce.tpv.februar.dan_eur + ce.tpz.februar.dan_eur + ce.vhj.februar.dan_eur,
        pdm: ce.tpv.februar.pdm + ce.tpz.februar.pdm + ce.vhj.februar.pdm,
        naklady: ce.tpv.februar.naklady + ce.tpz.februar.naklady + ce.vhj.februar.naklady
      },
      marec: {
        objem_m3: ce.tpv.marec.objem_m3 + ce.tpz.marec.objem_m3 + ce.vhj.marec.objem_m3,
        objem_mwh: ce.tpv.marec.objem_mwh + ce.tpz.marec.objem_mwh + ce.vhj.marec.objem_mwh,
        sopo: ce.tpv.marec.sopo + ce.tpz.marec.sopo + ce.vhj.marec.sopo,
        fmso: ce.tpv.marec.fmso + ce.tpz.marec.fmso + ce.vhj.marec.fmso,
        sopp: ce.tpv.marec.sopp + ce.tpz.marec.sopp + ce.vhj.marec.sopp,
        fmsp: ce.tpv.marec.fmsp + ce.tpz.marec.fmsp + ce.vhj.marec.fmsp,
        sopd: ce.tpv.marec.sopd + ce.tpz.marec.sopd + ce.vhj.marec.sopd,
        fmsd: ce.tpv.marec.fmsd + ce.tpz.marec.fmsd + ce.vhj.marec.fmsd,
        vsd: ce.tpv.marec.vsd + ce.tpz.marec.vsd + ce.vhj.marec.vsd,
        dan_mwh: ce.tpv.marec.dan_mwh + ce.tpz.marec.dan_mwh + ce.vhj.marec.dan_mwh,
        dan_eur: ce.tpv.marec.dan_eur + ce.tpz.marec.dan_eur + ce.vhj.marec.dan_eur,
        pdm: ce.tpv.marec.pdm + ce.tpz.marec.pdm + ce.vhj.marec.pdm,
        naklady: ce.tpv.marec.naklady + ce.tpz.marec.naklady + ce.vhj.marec.naklady
      },
      april: {
        objem_m3: ce.tpv.april.objem_m3 + ce.tpz.april.objem_m3 + ce.vhj.april.objem_m3,
        objem_mwh: ce.tpv.april.objem_mwh + ce.tpz.april.objem_mwh + ce.vhj.april.objem_mwh,
        sopo: ce.tpv.april.sopo + ce.tpz.april.sopo + ce.vhj.april.sopo,
        fmso: ce.tpv.april.fmso + ce.tpz.april.fmso + ce.vhj.april.fmso,
        sopp: ce.tpv.april.sopp + ce.tpz.april.sopp + ce.vhj.april.sopp,
        fmsp: ce.tpv.april.fmsp + ce.tpz.april.fmsp + ce.vhj.april.fmsp,
        sopd: ce.tpv.april.sopd + ce.tpz.april.sopd + ce.vhj.april.sopd,
        fmsd: ce.tpv.april.fmsd + ce.tpz.april.fmsd + ce.vhj.april.fmsd,
        vsd: ce.tpv.april.vsd + ce.tpz.april.vsd + ce.vhj.april.vsd,
        dan_mwh: ce.tpv.april.dan_mwh + ce.tpz.april.dan_mwh + ce.vhj.april.dan_mwh,
        dan_eur: ce.tpv.april.dan_eur + ce.tpz.april.dan_eur + ce.vhj.april.dan_eur,
        pdm: ce.tpv.april.pdm + ce.tpz.april.pdm + ce.vhj.april.pdm,
        naklady: ce.tpv.april.naklady + ce.tpz.april.naklady + ce.vhj.april.naklady
      },
      maj: {
        objem_m3: ce.tpv.maj.objem_m3 + ce.tpz.maj.objem_m3 + ce.vhj.maj.objem_m3,
        objem_mwh: ce.tpv.maj.objem_mwh + ce.tpz.maj.objem_mwh + ce.vhj.maj.objem_mwh,
        sopo: ce.tpv.maj.sopo + ce.tpz.maj.sopo + ce.vhj.maj.sopo,
        fmso: ce.tpv.maj.fmso + ce.tpz.maj.fmso + ce.vhj.maj.fmso,
        sopp: ce.tpv.maj.sopp + ce.tpz.maj.sopp + ce.vhj.maj.sopp,
        fmsp: ce.tpv.maj.fmsp + ce.tpz.maj.fmsp + ce.vhj.maj.fmsp,
        sopd: ce.tpv.maj.sopd + ce.tpz.maj.sopd + ce.vhj.maj.sopd,
        fmsd: ce.tpv.maj.fmsd + ce.tpz.maj.fmsd + ce.vhj.maj.fmsd,
        vsd: ce.tpv.maj.vsd + ce.tpz.maj.vsd + ce.vhj.maj.vsd,
        dan_mwh: ce.tpv.maj.dan_mwh + ce.tpz.maj.dan_mwh + ce.vhj.maj.dan_mwh,
        dan_eur: ce.tpv.maj.dan_eur + ce.tpz.maj.dan_eur + ce.vhj.maj.dan_eur,
        pdm: ce.tpv.maj.pdm + ce.tpz.maj.pdm + ce.vhj.maj.pdm,
        naklady: ce.tpv.maj.naklady + ce.tpz.maj.naklady + ce.vhj.maj.naklady
      },
      jun: {
        objem_m3: ce.tpv.jun.objem_m3 + ce.tpz.jun.objem_m3 + ce.vhj.jun.objem_m3,
        objem_mwh: ce.tpv.jun.objem_mwh + ce.tpz.jun.objem_mwh + ce.vhj.jun.objem_mwh,
        sopo: ce.tpv.jun.sopo + ce.tpz.jun.sopo + ce.vhj.jun.sopo,
        fmso: ce.tpv.jun.fmso + ce.tpz.jun.fmso + ce.vhj.jun.fmso,
        sopp: ce.tpv.jun.sopp + ce.tpz.jun.sopp + ce.vhj.jun.sopp,
        fmsp: ce.tpv.jun.fmsp + ce.tpz.jun.fmsp + ce.vhj.jun.fmsp,
        sopd: ce.tpv.jun.sopd + ce.tpz.jun.sopd + ce.vhj.jun.sopd,
        fmsd: ce.tpv.jun.fmsd + ce.tpz.jun.fmsd + ce.vhj.jun.fmsd,
        vsd: ce.tpv.jun.vsd + ce.tpz.jun.vsd + ce.vhj.jun.vsd,
        dan_mwh: ce.tpv.jun.dan_mwh + ce.tpz.jun.dan_mwh + ce.vhj.jun.dan_mwh,
        dan_eur: ce.tpv.jun.dan_eur + ce.tpz.jun.dan_eur + ce.vhj.jun.dan_eur,
        pdm: ce.tpv.jun.pdm + ce.tpz.jun.pdm + ce.vhj.jun.pdm,
        naklady: ce.tpv.jun.naklady + ce.tpz.jun.naklady + ce.vhj.jun.naklady
      },
      jul: {
        objem_m3: ce.tpv.jul.objem_m3 + ce.tpz.jul.objem_m3 + ce.vhj.jul.objem_m3,
        objem_mwh: ce.tpv.jul.objem_mwh + ce.tpz.jul.objem_mwh + ce.vhj.jul.objem_mwh,
        sopo: ce.tpv.jul.sopo + ce.tpz.jul.sopo + ce.vhj.jul.sopo,
        fmso: ce.tpv.jul.fmso + ce.tpz.jul.fmso + ce.vhj.jul.fmso,
        sopp: ce.tpv.jul.sopp + ce.tpz.jul.sopp + ce.vhj.jul.sopp,
        fmsp: ce.tpv.jul.fmsp + ce.tpz.jul.fmsp + ce.vhj.jul.fmsp,
        sopd: ce.tpv.jul.sopd + ce.tpz.jul.sopd + ce.vhj.jul.sopd,
        fmsd: ce.tpv.jul.fmsd + ce.tpz.jul.fmsd + ce.vhj.jul.fmsd,
        vsd: ce.tpv.jul.vsd + ce.tpz.jul.vsd + ce.vhj.jul.vsd,
        dan_mwh: ce.tpv.jul.dan_mwh + ce.tpz.jul.dan_mwh + ce.vhj.jul.dan_mwh,
        dan_eur: ce.tpv.jul.dan_eur + ce.tpz.jul.dan_eur + ce.vhj.jul.dan_eur,
        pdm: ce.tpv.jul.pdm + ce.tpz.jul.pdm + ce.vhj.jul.pdm,
        naklady: ce.tpv.jul.naklady + ce.tpz.jul.naklady + ce.vhj.jul.naklady
      },
      august: {
        objem_m3: ce.tpv.august.objem_m3 + ce.tpz.august.objem_m3 + ce.vhj.august.objem_m3,
        objem_mwh: ce.tpv.august.objem_mwh + ce.tpz.august.objem_mwh + ce.vhj.august.objem_mwh,
        sopo: ce.tpv.august.sopo + ce.tpz.august.sopo + ce.vhj.august.sopo,
        fmso: ce.tpv.august.fmso + ce.tpz.august.fmso + ce.vhj.august.fmso,
        sopp: ce.tpv.august.sopp + ce.tpz.august.sopp + ce.vhj.august.sopp,
        fmsp: ce.tpv.august.fmsp + ce.tpz.august.fmsp + ce.vhj.august.fmsp,
        sopd: ce.tpv.august.sopd + ce.tpz.august.sopd + ce.vhj.august.sopd,
        fmsd: ce.tpv.august.fmsd + ce.tpz.august.fmsd + ce.vhj.august.fmsd,
        vsd: ce.tpv.august.vsd + ce.tpz.august.vsd + ce.vhj.august.vsd,
        dan_mwh: ce.tpv.august.dan_mwh + ce.tpz.august.dan_mwh + ce.vhj.august.dan_mwh,
        dan_eur: ce.tpv.august.dan_eur + ce.tpz.august.dan_eur + ce.vhj.august.dan_eur,
        pdm: ce.tpv.august.pdm + ce.tpz.august.pdm + ce.vhj.august.pdm,
        naklady: ce.tpv.august.naklady + ce.tpz.august.naklady + ce.vhj.august.naklady
      },
      september: {
        objem_m3: ce.tpv.september.objem_m3 + ce.tpz.september.objem_m3 + ce.vhj.september.objem_m3,
        objem_mwh: ce.tpv.september.objem_mwh + ce.tpz.september.objem_mwh + ce.vhj.september.objem_mwh,
        sopo: ce.tpv.september.sopo + ce.tpz.september.sopo + ce.vhj.september.sopo,
        fmso: ce.tpv.september.fmso + ce.tpz.september.fmso + ce.vhj.september.fmso,
        sopp: ce.tpv.september.sopp + ce.tpz.september.sopp + ce.vhj.september.sopp,
        fmsp: ce.tpv.september.fmsp + ce.tpz.september.fmsp + ce.vhj.september.fmsp,
        sopd: ce.tpv.september.sopd + ce.tpz.september.sopd + ce.vhj.september.sopd,
        fmsd: ce.tpv.september.fmsd + ce.tpz.september.fmsd + ce.vhj.september.fmsd,
        vsd: ce.tpv.september.vsd + ce.tpz.september.vsd + ce.vhj.september.vsd,
        dan_mwh: ce.tpv.september.dan_mwh + ce.tpz.september.dan_mwh + ce.vhj.september.dan_mwh,
        dan_eur: ce.tpv.september.dan_eur + ce.tpz.september.dan_eur + ce.vhj.september.dan_eur,
        pdm: ce.tpv.september.pdm + ce.tpz.september.pdm + ce.vhj.september.pdm,
        naklady: ce.tpv.september.naklady + ce.tpz.september.naklady + ce.vhj.september.naklady
      },
      oktober: {
        objem_m3: ce.tpv.oktober.objem_m3 + ce.tpz.oktober.objem_m3 + ce.vhj.oktober.objem_m3,
        objem_mwh: ce.tpv.oktober.objem_mwh + ce.tpz.oktober.objem_mwh + ce.vhj.oktober.objem_mwh,
        sopo: ce.tpv.oktober.sopo + ce.tpz.oktober.sopo + ce.vhj.oktober.sopo,
        fmso: ce.tpv.oktober.fmso + ce.tpz.oktober.fmso + ce.vhj.oktober.fmso,
        sopp: ce.tpv.oktober.sopp + ce.tpz.oktober.sopp + ce.vhj.oktober.sopp,
        fmsp: ce.tpv.oktober.fmsp + ce.tpz.oktober.fmsp + ce.vhj.oktober.fmsp,
        sopd: ce.tpv.oktober.sopd + ce.tpz.oktober.sopd + ce.vhj.oktober.sopd,
        fmsd: ce.tpv.oktober.fmsd + ce.tpz.oktober.fmsd + ce.vhj.oktober.fmsd,
        vsd: ce.tpv.oktober.vsd + ce.tpz.oktober.vsd + ce.vhj.oktober.vsd,
        dan_mwh: ce.tpv.oktober.dan_mwh + ce.tpz.oktober.dan_mwh + ce.vhj.oktober.dan_mwh,
        dan_eur: ce.tpv.oktober.dan_eur + ce.tpz.oktober.dan_eur + ce.vhj.oktober.dan_eur,
        pdm: ce.tpv.oktober.pdm + ce.tpz.oktober.pdm + ce.vhj.oktober.pdm,
        naklady: ce.tpv.oktober.naklady + ce.tpz.oktober.naklady + ce.vhj.oktober.naklady
      },
      november: {
        objem_m3: ce.tpv.november.objem_m3 + ce.tpz.november.objem_m3 + ce.vhj.november.objem_m3,
        objem_mwh: ce.tpv.november.objem_mwh + ce.tpz.november.objem_mwh + ce.vhj.november.objem_mwh,
        sopo: ce.tpv.november.sopo + ce.tpz.november.sopo + ce.vhj.november.sopo,
        fmso: ce.tpv.november.fmso + ce.tpz.november.fmso + ce.vhj.november.fmso,
        sopp: ce.tpv.november.sopp + ce.tpz.november.sopp + ce.vhj.november.sopp,
        fmsp: ce.tpv.november.fmsp + ce.tpz.november.fmsp + ce.vhj.november.fmsp,
        sopd: ce.tpv.november.sopd + ce.tpz.november.sopd + ce.vhj.november.sopd,
        fmsd: ce.tpv.november.fmsd + ce.tpz.november.fmsd + ce.vhj.november.fmsd,
        vsd: ce.tpv.november.vsd + ce.tpz.november.vsd + ce.vhj.november.vsd,
        dan_mwh: ce.tpv.november.dan_mwh + ce.tpz.november.dan_mwh + ce.vhj.november.dan_mwh,
        dan_eur: ce.tpv.november.dan_eur + ce.tpz.november.dan_eur + ce.vhj.november.dan_eur,
        pdm: ce.tpv.november.pdm + ce.tpz.november.pdm + ce.vhj.november.pdm,
        naklady: ce.tpv.november.naklady + ce.tpz.november.naklady + ce.vhj.november.naklady
      },
      december: {
        objem_m3: ce.tpv.december.objem_m3 + ce.tpz.december.objem_m3 + ce.vhj.december.objem_m3,
        objem_mwh: ce.tpv.december.objem_mwh + ce.tpz.december.objem_mwh + ce.vhj.december.objem_mwh,
        sopo: ce.tpv.december.sopo + ce.tpz.december.sopo + ce.vhj.december.sopo,
        fmso: ce.tpv.december.fmso + ce.tpz.december.fmso + ce.vhj.december.fmso,
        sopp: ce.tpv.december.sopp + ce.tpz.december.sopp + ce.vhj.december.sopp,
        fmsp: ce.tpv.december.fmsp + ce.tpz.december.fmsp + ce.vhj.december.fmsp,
        sopd: ce.tpv.december.sopd + ce.tpz.december.sopd + ce.vhj.december.sopd,
        fmsd: ce.tpv.december.fmsd + ce.tpz.december.fmsd + ce.vhj.december.fmsd,
        vsd: ce.tpv.december.vsd + ce.tpz.december.vsd + ce.vhj.december.vsd,
        dan_mwh: ce.tpv.december.dan_mwh + ce.tpz.december.dan_mwh + ce.vhj.december.dan_mwh,
        dan_eur: ce.tpv.december.dan_eur + ce.tpz.december.dan_eur + ce.vhj.december.dan_eur,
        pdm: ce.tpv.december.pdm + ce.tpz.december.pdm + ce.vhj.december.pdm,
        naklady: ce.tpv.december.naklady + ce.tpz.december.naklady + ce.vhj.december.naklady
      },
      spolu: {
        objem_m3: ce.tpv.spolu.objem_m3 + ce.tpz.spolu.objem_m3 + ce.vhj.spolu.objem_m3,
        objem_mwh: ce.tpv.spolu.objem_mwh + ce.tpz.spolu.objem_mwh + ce.vhj.spolu.objem_mwh,
        sopo: ce.tpv.spolu.sopo + ce.tpz.spolu.sopo + ce.vhj.spolu.sopo,
        fmso: ce.tpv.spolu.fmso + ce.tpz.spolu.fmso + ce.vhj.spolu.fmso,
        sopp: ce.tpv.spolu.sopp + ce.tpz.spolu.sopp + ce.vhj.spolu.sopp,
        fmsp: ce.tpv.spolu.fmsp + ce.tpz.spolu.fmsp + ce.vhj.spolu.fmsp,
        sopd: ce.tpv.spolu.sopd + ce.tpz.spolu.sopd + ce.vhj.spolu.sopd,
        fmsd: ce.tpv.spolu.fmsd + ce.tpz.spolu.fmsd + ce.vhj.spolu.fmsd,
        vsd: ce.tpv.spolu.vsd + ce.tpz.spolu.vsd + ce.vhj.spolu.vsd,
        dan_mwh: ce.tpv.spolu.dan_mwh + ce.tpz.spolu.dan_mwh + ce.vhj.spolu.dan_mwh,
        dan_eur: ce.tpv.spolu.dan_eur + ce.tpz.spolu.dan_eur + ce.vhj.spolu.dan_eur,
        pdm: ce.tpv.spolu.pdm + ce.tpz.spolu.pdm + ce.vhj.spolu.pdm,
        naklady: ce.tpv.spolu.naklady + ce.tpz.spolu.naklady + ce.vhj.spolu.naklady
      }
    }
  })
)

export const vyr_cena = createSelector(
  state,
  vyrobne,
  (s, vyr) => ({
    tpv: {
      ...vyr.tpv
    },

    tpz: {
      ...vyr.tpz
    },

    vhj: {
      ...vyr.vhj
    },

    vyr: {
      ...vyr.vyr,
      cena: {
        m3: (vyr.vyr.spolu.naklady - vyr.vyr.spolu.pdm) / vyr.vyr.spolu.objem_m3,
        mwh: (vyr.vyr.spolu.naklady - vyr.vyr.spolu.pdm) / vyr.vyr.spolu.objem_mwh
      }
    }
  })
)

export const kotolne = createSelector(
  state,
  s => (s.map(
    item => ({
      ...item,
      cnsd: item.nbsd + item.sd + item.pdm
    })
  ))
)

export const pk_spolu = createSelector(
  state,
  kotolne,
  (s, kot) => ({
    m3: kot.reduce((acc, item) => acc + item.m3, 0),
    mwh: kot.reduce((acc, item) => acc + item.mwh, 0),
    nbsd: kot.reduce((acc, item) => acc + item.nbsd, 0),
    sd: kot.reduce((acc, item) => acc + item.sd, 0),
    pdm: kot.reduce((acc, item) => acc + item.pdm, 0),
    cnsd: kot.reduce((acc, item) => acc + item.cnsd, 0)
  })
)

export const bat = createSelector(
  state,
  s => ({
    m3: s.v.vyr.spolu.objem_m3 + s.k.m3,
    mwh: s.v.vyr.spolu.objem_mwh + s.k.mwh,
    nbsd: s.v.vyr.spolu.sopo + s.v.vyr.spolu.fmso
        + s.v.vyr.spolu.sopp + s.v.vyr.spolu.fmsp
        + s.v.vyr.spolu.sopd + s.v.vyr.spolu.fmsd
        + s.v.vyr.spolu.vsd + s.k.nbsd,
    sd: s.v.vyr.spolu.dan_eur + s.k.sd,
    pdm: s.v.vyr.spolu.pdm + s.k.pdm,
    cnsd: s.v.vyr.spolu.naklady + s.k.cnsd
  })
)