import * as TYPES from '../../../services/ActionTypes'

const initState = {

  zp: {                 // zemny plyn
    nnv: 0,
    spolu: 0
  },

  tvo: {                // tazky vykurovaci olej
    nnv: 0,
    spolu: 0
  },

  ntvz: {               // nakupovane teplo (variabilna zlozka)
    nnv: 0,
    spolu: 0
  },

  ee: {
    nnv: 0,             // naklady na vyrobu
    pri: 0,             // primar
    ost: 0,             // OST
    sek: 0,             // sekundar
    spolu: 0
  },

  voda: {
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  th: {                 // technologicke hmoty
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  nekpz: {              // nakup emisnych kvot a poplatky za znecistenie
    nnv: 0,
    spolu: 0
  },

  vnct: {               // variabilne naklady v cene tepla
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  omt: 0,               // objednane mnozstvo tepla

  vzct: 0,              // variabilna zlozka ceny tepla bez DPH (€/kWh)

  // ------------------------------------------------------------------------

  ntfz: {               // nakupovane teplo (fixna zlozka)
    nnv: 0,
    spolu: 0
  },

  pm: {                 // poistenie majetku
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },
  
  dane: {
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  najomne: {
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  rzpp: {               // revizie, zakonne prehliadky a poplatky
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  nauz: {               // naklady na audit uctovnej zavierky
    nnv: 0,
    spolu: 0
  },

  odm: {                // odpisy HaNM (dlhodoby majetok)
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  oosz: {               // odpisy a opravy spolocnych zariadeni
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  ous: {                // opravy a udrziavanie spolu
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  uiu: {                // uroky z investicneho uveru
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },

  rzfn: {               // regulovana zlozka fixnych nakladov
    nnv: 0,
    spolu: 0
  },

  pz: {                 // primerany zisk
    nnv: 0,
    spolu: 0
  },

  fnpz: {               // fixne naklady a primerany zisk v cene tepla
    nnv: 0,
    pri: 0,
    ost: 0,
    sek: 0,
    spolu: 0
  },
  
  rp: 0,                // regulacny prikon

  fzct: 0,              // fixna zlozka ceny tepla bez DPH (€/kW)

  cpctkwh: 0,           // celkova priemerna cena tepla (€/kWh)
  cpctgj: 0,            // celkova priemerna cena tepla (€/GJ)

  pzusct: {             // porovnanie zložiek ÚRSO schválenou cenou tepla
    vz: {
      urso: 0,
      dobropis: 0
    },
    fz: {
      urso: 0,
      dobropis: 0
    },
    cp: {
      urso: 0,
      dobropis: 0
    }
  },

  loading: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        zp: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_VZ_ZP_NNV').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_VZ_ZP_SPOLU').hodnota
        },

        tvo: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_VZ_TVO_NNV').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_VZ_TVO_SPOLU').hodnota
        },

        ntvz: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_VZ_NT_NNV').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_VZ_NT_SPOLU').hodnota
        },

        ee: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_VZ_EE_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_VZ_EE_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_VZ_EE_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_VZ_EE_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_VZ_EE_SPOLU').hodnota
        },

        voda: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_VZ_VODA_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_VZ_VODA_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_VZ_VODA_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_VZ_VODA_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_VZ_VODA_SPOLU').hodnota
        },

        th: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_VZ_TH_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_VZ_TH_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_VZ_TH_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_VZ_TH_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_VZ_TH_SPOLU').hodnota
        },

        nekpz: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_VZ_NEKPZ_NNV').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_VZ_NEKPZ_SPOLU').hodnota
        },

        vnct: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_VZ_VNCT_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_VZ_VNCT_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_VZ_VNCT_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_VZ_VNCT_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_VZ_VNCT_SPOLU').hodnota
        },

        omt: action.data['bunky'].find(x => x.id === 'CT_VZ_OMT').hodnota,

        vzct: action.data['bunky'].find(x => x.id === 'CT_VZ_VZCT').hodnota,

        ntfz: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_NT_NNV').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_NT_SPOLU').hodnota
        },

        pm: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_PM_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_FZ_PM_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_FZ_PM_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_FZ_PM_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_PM_SPOLU').hodnota
        },

        dane: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_DANE_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_FZ_DANE_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_FZ_DANE_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_FZ_DANE_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_DANE_SPOLU').hodnota
        },

        najomne: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_NAJ_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_FZ_NAJ_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_FZ_NAJ_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_FZ_NAJ_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_NAJ_SPOLU').hodnota
        },

        rzpp: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_RZPP_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_FZ_RZPP_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_FZ_RZPP_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_FZ_RZPP_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_RZPP_SPOLU').hodnota
        },

        nauz: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_NAUZ_NNV').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_NAUZ_SPOLU').hodnota
        },

        odm: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_ODM_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_FZ_ODM_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_FZ_ODM_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_FZ_ODM_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_ODM_SPOLU').hodnota
        },

        oosz: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_OOSZ_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_FZ_OOSZ_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_FZ_OOSZ_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_FZ_OOSZ_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_OOSZ_SPOLU').hodnota
        },

        ous: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_OUS_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_FZ_OUS_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_FZ_OUS_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_FZ_OUS_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_OUS_SPOLU').hodnota
        },

        uiu: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_UIU_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_FZ_UIU_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_FZ_UIU_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_FZ_UIU_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_UIU_SPOLU').hodnota
        },

        rzfn: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_RZFN_NNV').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_RZFN_SPOLU').hodnota
        },

        pz: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_PZ_NNV').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_PZ_SPOLU').hodnota
        },

        fnpz: {
          nnv: action.data['bunky'].find(x => x.id === 'CT_FZ_FNPZ_NNV').hodnota,
          pri: action.data['bunky'].find(x => x.id === 'CT_FZ_FNPZ_PRI').hodnota,
          ost: action.data['bunky'].find(x => x.id === 'CT_FZ_FNPZ_OST').hodnota,
          sek: action.data['bunky'].find(x => x.id === 'CT_FZ_FNPZ_SEK').hodnota,
          spolu: action.data['bunky'].find(x => x.id === 'CT_FZ_FNPZ_SPOLU').hodnota
        },

        rp: action.data['bunky'].find(x => x.id === 'CT_FZ_RP').hodnota,

        fzct: action.data['bunky'].find(x => x.id === 'CT_FZ_FZCT').hodnota,

        cpctkwh: action.data['bunky'].find(x => x.id === 'CT_CPCT_KWH').hodnota,
        cpctgj: action.data['bunky'].find(x => x.id === 'CT_CPCT_GJ').hodnota,

        pzusct: {
          vz: {
            urso: action.data['bunky'].find(x => x.id === 'CT_PZUSCT_VZ_U').hodnota,
            dobropis: action.data['bunky'].find(x => x.id === 'CT_PZUSCT_VZ_D').hodnota
          },
          fz: {
            urso: action.data['bunky'].find(x => x.id === 'CT_PZUSCT_FZ_U').hodnota,
            dobropis: action.data['bunky'].find(x => x.id === 'CT_PZUSCT_FZ_D').hodnota
          },
          cp: {
            urso: action.data['bunky'].find(x => x.id === 'CT_PZUSCT_CP_U').hodnota,
            dobropis: action.data['bunky'].find(x => x.id === 'CT_PZUSCT_CP_D').hodnota
          }
        }
      }

    default:
      return state
  }
}