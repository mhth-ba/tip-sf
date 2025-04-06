import * as TYPES from '../../../services/ActionTypes'

const initState = {

  zaznamy: [
    /*{
      id: 10000,                // ID hlavneho zaznamu evidencie
      datum: {
        timestamp: null         // datum vytvorenia zaznamu v databaze
      },
      vytvoril: {
        fullname: null          // cele meno pouzivatela
      },
      upravil: {
        fullname: null          // cele meno uzivatela
      },

      /!*************** POUZIVATELSKE DATA ***************!/
      zistene: {
        timestamp: null,        // datum a cas zistenia
      },
      ost: {
        cislo: 111,
        adresa: ''
      },
      predmet: {                // pôvod zistenia
        id: null,
        nazov: ''
      },
      zakaznik: {               // kontakt, nahlasujuci subjekt...
        meno: '',
        adresa: '',
        telefon: '',
        email: ''
      },
      udalost: {                // vybrat zo zoznamu...
        id: null,
        nazov: ''
      },
      vplyv_uk: {
        id: 1,                  // 1/2/3
        popis: '...'            // ok/obmedzena/prerusena
      },
      vplyv_tuv: {
        id: 1,                  // 1/2/3
        popis: '...'            // ok/obmedzena/prerusena
      },
      vplyv_na_dodavku: false,  // ano/nie
      zavinenie: false,         // ano/nie
      typ: {
        id: 10000,
        kategoria: 3,
        popis: 'Výmena meračov'
      },
      poznamka: 'Poznámka technika ...',
    }*/
  ],

  loading: false,
  updating: false,
  error: null,

  initialized: false, // identifikacia prveho nacitania
}

export default (state = initState, action) => {
  switch (action.type) {

    case TYPES.FETCH_HLAVNE_ZAZNAMY_EVIDENCIE_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_HLAVNE_ZAZNAMY_EVIDENCIE_SUCCESS:
      return {...state, loading: false, zaznamy: action.data}

    case TYPES.FETCH_HLAVNE_ZAZNAMY_EVIDENCIE_ERROR:
      return {...state, loading: false, error: action.data}

    case TYPES.UPDATE_HLAVNY_REQUEST:
      return {...state, updating: true}

    case TYPES.UPDATE_HLAVNY_SUCCESS:
      return {...state, ...action.data, updating: false}

    case TYPES.UPDATE_HLAVNY_ERROR:
      return {...state, error: action.data, updating: false}

    default:
      return state
  }
}
