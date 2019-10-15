import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_SkutocneNaklady

  zp: {                 // zemny plyn
    polozky: [],
    sumar: {
      tpv_p: 0,         // tpv - v plnej vyske
      tpv_k: 0,         // tpv - klucovane
      tpz_p: 0,         // tpz - v plnej vyske
      tpz_k: 0,         // tpz - klucovane
      vhj: 0,
      pk: 0,            // plynove kotolne
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,       // rezijne naklady
      spolu: 0
    }
  },

  tvo: {                // tazky vykurovaci olej
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  ntvz: {               // nakupovane teplo variabilna zlozka
    tpv_p: 0,
    tpz_p: 0,
    spolu: 0
  },

  vnpm: {               // variabilne naklady na priamy material
    tpv_p: 0,
    tpv_k: 0,
    tpz_p: 0,
    tpz_k: 0,
    vhj: 0,
    pk: 0,
    primar: 0,
    ost: 0,
    sekundar: 0,
    rezijne: 0,
    spolu: 0
  },

  ee: {                 // elektricka energia
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  voda: {               // voda
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  th: {                 // technologicke hmoty
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  nek : {               // nakupene emisne kvoty
    tpv_p: 0,
    tpv_k: 0,
    tpz_p: 0,
    tpz_k: 0,
    vhj: 0,
    spolu: 0
  },

  nekpz: {              // nakup emisnych kvot a poplatky za znecistenie
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  ovn: {                // ostatne variabilne naklady
    tpv_p: 0,
    tpv_k: 0,
    tpz_p: 0,
    tpz_k: 0,
    vhj: 0,
    pk: 0,
    primar: 0,
    ost: 0,
    sekundar: 0,
    rezijne: 0,
    spolu: 0
  },

  vn: {                // variabilne naklady
    tpv_p: 0,
    tpv_k: 0,
    tpz_p: 0,
    tpz_k: 0,
    vhj: 0,
    pk: 0,
    primar: 0,
    ost: 0,
    sekundar: 0,
    rezijne: 0,
    spolu: 0
  },

  ntfz: {               // nakupovane teplo fixna zlozka
    tpv_p: 0,
    tpz_p: 0,
    spolu: 0
  },

  pm: {                 // poistenie majetku
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  dane: {               // dane
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  najomne: {            // najomne
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  rzpp: {               // revizie, zakonne prehliadky a poplatky
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  nauz: {               // naklady na audit uctovnej zavierky
    rezijne: 0,
    spolu: 0
  },

  odm: {                // odpisy DM suvisiaceho s vyrobou a rozvodom tepla
    tpv_p: 0,
    tpv_k: 0,
    tpz_p: 0,
    tpz_k: 0,
    vhj: 0,
    pk: 0,
    primar: 0,
    ost: 0,
    sekundar: 0,
    rezijne: 0,
    spolu: 0
  },

  oosz: {               // odpisy spolocnych zariadeni suvisiacich s vyrobou a rozvodom tepla
    tpv_p: 0,
    tpv_k: 0,
    tpz_p: 0,
    tpz_k: 0,
    vhj: 0,
    pk: 0,
    primar: 0,
    ost: 0,
    sekundar: 0,
    rezijne: 0,
    spolu: 0
  },

  ous: {                // opravy a udrziavanie spolu
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  uiu: {                // uroky z investicneho uveru
    polozky: [],
    sumar: {
      tpv_p: 0,
      tpv_k: 0,
      tpz_p: 0,
      tpz_k: 0,
      vhj: 0,
      pk: 0,
      primar: 0,
      ost: 0,
      sekundar: 0,
      rezijne: 0,
      spolu: 0
    }
  },

  rzfn: {               // regulovana zlozka fixnych nakladov
    spolu: 0
  },

  fn: {                 // fixne naklady
    tpv_p: 0,
    tpv_k: 0,
    tpz_p: 0,
    tpz_k: 0,
    vhj: 0,
    pk: 0,
    primar: 0,
    ost: 0,
    sekundar: 0,
    rezijne: 0,
    spolu: 0
  },

  loading: false,
  updating: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SKUTOCNE_NAKLADY_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_SKUTOCNE_NAKLADY_SUCCESS:
      return {...state, loading: false,

        zp: {
          ...state.zp,
          polozky: action.data.filter(x => x['ucet'].id === 1)
        },
        tvo: {
          ...state.tvo,
          polozky: action.data.filter(x => x['ucet'].id === 2)
        },
        ee: {
          ...state.ee,
          polozky: action.data.filter(x => x['ucet'].id === 3)
        },
        voda: {
          ...state.voda,
          polozky: action.data.filter(x => x['ucet'].id === 4)
        },
        th: {
          ...state.th,
          polozky: action.data.filter(x => x['ucet'].id === 5)
        },
        nek: {
          ...state.nek,
          ...action.data.find(x => x['ucet'].id === 117)
        },
        nekpz: {
          ...state.nekpz,
          polozky: action.data.filter(x => x['ucet'].id === 6)
        },
        pm: {
          ...state.pm,
          polozky: action.data.filter(x => x['ucet'].id === 7)
        },
        dane: {
          ...state.dane,
          polozky: action.data.filter(x => x['ucet'].id === 8)
        },
        najomne: {
          ...state.najomne,
          polozky: action.data.filter(x => x['ucet'].id === 9)
        },
        rzpp: {
          ...state.rzpp,
          polozky: action.data.filter(x => x['ucet'].id === 10)
        },
        nauz: {
          ...state.nauz,
          ...action.data.find(x => x['ucet'].id === 113)
        },
        odm: {
          ...state.odm,
          ...action.data.find(x => x['ucet'].id === 101)
        },
        oosz: {
          ...state.oosz,
          ...action.data.find(x => x['ucet'].id === 102)
        },
        ous: {
          ...state.ous,
          polozky: action.data.filter(x => x['ucet'].id === 11)
        },
        uiu: {
          ...state.uiu,
          polozky: action.data.filter(x => x['ucet'].id === 12)
        },
      }

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        zp: {
          ...state.zp,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_ZP_SPOLU').hodnota
          }
        },
        tvo: {
          ...state.tvo,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_TVO_SPOLU').hodnota
          }
        },
        ntvz: {
          tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_NTVZ_TPV_P').hodnota,
          tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_NTVZ_TPZ_P').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_NTVZ_SPOLU').hodnota
        },
        vnpm: {
          tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_TPV_P').hodnota,
          tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_TPV_K').hodnota,
          tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_TPZ_P').hodnota,
          tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_TPZ_K').hodnota,
          vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_VHJ').hodnota,
          pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_PK').hodnota,
          primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_OST').hodnota,
          sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_SEK').hodnota,
          rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_REZ').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_VNPM_SPOLU').hodnota
        },
        ee: {
          ...state.ee,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_EE_SPOLU').hodnota
          }
        },
        voda: {
          ...state.voda,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_VODA_SPOLU').hodnota
          }
        },
        th: {
          ...state.th,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_TH_SPOLU').hodnota
          }
        },
        nekpz: {
          ...state.nekpz,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_NEKPZ_SPOLU').hodnota
          }
        },
        ovn: {
          tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_TPV_P').hodnota,
          tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_TPV_K').hodnota,
          tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_TPZ_P').hodnota,
          tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_TPZ_K').hodnota,
          vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_VHJ').hodnota,
          pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_PK').hodnota,
          primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_OST').hodnota,
          sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_SEK').hodnota,
          rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_REZ').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_OVN_SPOLU').hodnota
        },
        vn: {
          tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_TPV_P').hodnota,
          tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_TPV_K').hodnota,
          tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_TPZ_P').hodnota,
          tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_TPZ_K').hodnota,
          vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_VHJ').hodnota,
          pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_PK').hodnota,
          primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_OST').hodnota,
          sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_SEK').hodnota,
          rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_REZ').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_VN_SPOLU').hodnota
        },
        ntfz: {
          tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_NTFZ_TPV_P').hodnota,
          tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_NTFZ_TPZ_P').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_NTFZ_SPOLU').hodnota
        },
        pm: {
          ...state.pm,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_PM_SPOLU').hodnota
          }
        },
        dane: {
          ...state.dane,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_DANE_SPOLU').hodnota
          }
        },
        najomne: {
          ...state.najomne,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_NAJ_SPOLU').hodnota
          }
        },
        rzpp: {
          ...state.rzpp,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZPP_SPOLU').hodnota
          }
        },
        ous: {
          ...state.ous,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_OUS_SPOLU').hodnota
          }
        },
        uiu: {
          ...state.uiu,
          sumar: {
            tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_TPV_P').hodnota,
            tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_TPV_K').hodnota,
            tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_TPZ_P').hodnota,
            tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_TPZ_K').hodnota,
            vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_VHJ').hodnota,
            pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_PK').hodnota,
            primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_PRI').hodnota,
            ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_OST').hodnota,
            sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_SEK').hodnota,
            rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_REZ').hodnota,
            spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_UIU_SPOLU').hodnota
          }
        },
        rzfn: {
          spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_RZFN_SPOLU').hodnota
        },
        fn: {
          tpv_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_TPV_P').hodnota,
          tpv_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_TPV_K').hodnota,
          tpz_p: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_TPZ_P').hodnota,
          tpz_k: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_TPZ_K').hodnota,
          vhj: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_VHJ').hodnota,
          pk: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_PK').hodnota,
          primar: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_OST').hodnota,
          sekundar: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_SEK').hodnota,
          rezijne: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_REZ').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'SNTE_SN_FN_SPOLU').hodnota
        }
      }

      /*SNTE_SN_ZP_TPV_P
      SNTE_SN_ZP_TPV_K
      SNTE_SN_ZP_TPZ_P
      SNTE_SN_ZP_TPZ_K
      SNTE_SN_ZP_VHJ
      SNTE_SN_ZP_PK
      SNTE_SN_ZP_PRI
      SNTE_SN_ZP_OST
      SNTE_SN_ZP_SEK
      SNTE_SN_ZP_REZ
      SNTE_SN_ZP_SPOLU
      SNTE_SN_TVO_TPV_P
      SNTE_SN_TVO_TPV_K
      SNTE_SN_TVO_TPZ_P
      SNTE_SN_TVO_TPZ_K
      SNTE_SN_TVO_VHJ
      SNTE_SN_TVO_PK
      SNTE_SN_TVO_PRI
      SNTE_SN_TVO_OST
      SNTE_SN_TVO_SEK
      SNTE_SN_TVO_REZ
      SNTE_SN_TVO_SPOLU
      SNTE_SN_NTVZ_TPV_P
      SNTE_SN_NTVZ_TPZ_P
      SNTE_SN_NTVZ_SPOLU
      SNTE_SN_VNPM_TPV_P
      SNTE_SN_VNPM_TPV_K
      SNTE_SN_VNPM_TPZ_P
      SNTE_SN_VNPM_TPZ_K
      SNTE_SN_VNPM_VHJ
      SNTE_SN_VNPM_PK
      SNTE_SN_VNPM_PRI
      SNTE_SN_VNPM_OST
      SNTE_SN_VNPM_SEK
      SNTE_SN_VNPM_REZ
      SNTE_SN_VNPM_SPOLU
      SNTE_SN_EE_TPV_P
      SNTE_SN_EE_TPV_K
      SNTE_SN_EE_TPZ_P
      SNTE_SN_EE_TPZ_K
      SNTE_SN_EE_VHJ
      SNTE_SN_EE_PK
      SNTE_SN_EE_PRI
      SNTE_SN_EE_OST
      SNTE_SN_EE_SEK
      SNTE_SN_EE_REZ
      SNTE_SN_EE_SPOLU
      SNTE_SN_VODA_TPV_P
      SNTE_SN_VODA_TPV_K
      SNTE_SN_VODA_TPZ_P
      SNTE_SN_VODA_TPZ_K
      SNTE_SN_VODA_VHJ
      SNTE_SN_VODA_PK
      SNTE_SN_VODA_PRI
      SNTE_SN_VODA_OST
      SNTE_SN_VODA_SEK
      SNTE_SN_VODA_REZ
      SNTE_SN_VODA_SPOLU
      SNTE_SN_TH_TPV_P
      SNTE_SN_TH_TPV_K
      SNTE_SN_TH_TPZ_P
      SNTE_SN_TH_TPZ_K
      SNTE_SN_TH_VHJ
      SNTE_SN_TH_PK
      SNTE_SN_TH_PRI
      SNTE_SN_TH_OST
      SNTE_SN_TH_SEK
      SNTE_SN_TH_REZ
      SNTE_SN_TH_SPOLU
      SNTE_SN_NEKPZ_TPV_P
      SNTE_SN_NEKPZ_TPV_K
      SNTE_SN_NEKPZ_TPZ_P
      SNTE_SN_NEKPZ_TPZ_K
      SNTE_SN_NEKPZ_VHJ
      SNTE_SN_NEKPZ_PK
      SNTE_SN_NEKPZ_PRI
      SNTE_SN_NEKPZ_OST
      SNTE_SN_NEKPZ_SEK
      SNTE_SN_NEKPZ_REZ
      SNTE_SN_NEKPZ_SPOLU
      SNTE_SN_OVN_TPV_P
      SNTE_SN_OVN_TPV_K
      SNTE_SN_OVN_TPZ_P
      SNTE_SN_OVN_TPZ_K
      SNTE_SN_OVN_VHJ
      SNTE_SN_OVN_PK
      SNTE_SN_OVN_PRI
      SNTE_SN_OVN_OST
      SNTE_SN_OVN_SEK
      SNTE_SN_OVN_REZ
      SNTE_SN_OVN_SPOLU
      SNTE_SN_VN_TPV_P
      SNTE_SN_VN_TPV_K
      SNTE_SN_VN_TPZ_P
      SNTE_SN_VN_TPZ_K
      SNTE_SN_VN_VHJ
      SNTE_SN_VN_PK
      SNTE_SN_VN_PRI
      SNTE_SN_VN_OST
      SNTE_SN_VN_SEK
      SNTE_SN_VN_REZ
      SNTE_SN_VN_SPOLU
      SNTE_SN_NTFZ_TPV_P
      SNTE_SN_NTFZ_TPZ_P
      SNTE_SN_NTFZ_SPOLU
      SNTE_SN_PM_TPV_P
      SNTE_SN_PM_TPV_K
      SNTE_SN_PM_TPZ_P
      SNTE_SN_PM_TPZ_K
      SNTE_SN_PM_VHJ
      SNTE_SN_PM_PK
      SNTE_SN_PM_PRI
      SNTE_SN_PM_OST
      SNTE_SN_PM_SEK
      SNTE_SN_PM_REZ
      SNTE_SN_PM_SPOLU
      SNTE_SN_DANE_TPV_P
      SNTE_SN_DANE_TPV_K
      SNTE_SN_DANE_TPZ_P
      SNTE_SN_DANE_TPZ_K
      SNTE_SN_DANE_VHJ
      SNTE_SN_DANE_PK
      SNTE_SN_DANE_PRI
      SNTE_SN_DANE_OST
      SNTE_SN_DANE_SEK
      SNTE_SN_DANE_REZ
      SNTE_SN_DANE_SPOLU
      SNTE_SN_NAJ_TPV_P
      SNTE_SN_NAJ_TPV_K
      SNTE_SN_NAJ_TPZ_P
      SNTE_SN_NAJ_TPZ_K
      SNTE_SN_NAJ_VHJ
      SNTE_SN_NAJ_PK
      SNTE_SN_NAJ_PRI
      SNTE_SN_NAJ_OST
      SNTE_SN_NAJ_SEK
      SNTE_SN_NAJ_REZ
      SNTE_SN_NAJ_SPOLU
      SNTE_SN_RZPP_TPV_P
      SNTE_SN_RZPP_TPV_K
      SNTE_SN_RZPP_TPZ_P
      SNTE_SN_RZPP_TPZ_K
      SNTE_SN_RZPP_VHJ
      SNTE_SN_RZPP_PK
      SNTE_SN_RZPP_PRI
      SNTE_SN_RZPP_OST
      SNTE_SN_RZPP_SEK
      SNTE_SN_RZPP_REZ
      SNTE_SN_RZPP_SPOLU
      SNTE_SN_OUS_TPV_P
      SNTE_SN_OUS_TPV_K
      SNTE_SN_OUS_TPZ_P
      SNTE_SN_OUS_TPZ_K
      SNTE_SN_OUS_VHJ
      SNTE_SN_OUS_PK
      SNTE_SN_OUS_PRI
      SNTE_SN_OUS_OST
      SNTE_SN_OUS_SEK
      SNTE_SN_OUS_REZ
      SNTE_SN_OUS_SPOLU
      SNTE_SN_UIU_TPV_P
      SNTE_SN_UIU_TPV_K
      SNTE_SN_UIU_TPZ_P
      SNTE_SN_UIU_TPZ_K
      SNTE_SN_UIU_VHJ
      SNTE_SN_UIU_PK
      SNTE_SN_UIU_PRI
      SNTE_SN_UIU_OST
      SNTE_SN_UIU_SEK
      SNTE_SN_UIU_REZ
      SNTE_SN_UIU_SPOLU*/

    case TYPES.UPDATE_SKUTOCNE_NAKLADY_SUCCESS:
      return {...state, ...action.data}

    case TYPES.FETCH_SKUTOCNE_NAKLADY_ERROR:
      return {...state, error: action.data}

    case TYPES.UPDATE_SKUTOCNE_NAKLADY_ERROR:
      return {...state, error: action.data}

    default:
      return state
  }
}