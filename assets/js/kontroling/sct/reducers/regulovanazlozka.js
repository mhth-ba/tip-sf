import * as TYPES from '../../../services/ActionTypes'

const initState = { // Kontroling.SCT_RegulovanaZlozka

  prikon: 0,            // regulacny prikon
  do_limitu: 0,         // RZFN do 21000 kW
  nad_limit: 0,         // RZFN na kazdy dalsi kW nad 21000 (konstanta)
  kdkwnl: 0,            // RZFN na kazdy dalsi kW nad 21000 (vypocet)
  rzfn: 0,              // regulovana zlozka fixnych nakladov
  zaklad: 0,            // zakladna vyska za 1 kW regulacneho prikonu
  priplatok: 0,         // priplatok
  pz: 0,                // primerany zisk
  rzfnapz: 0,           // regulovana zlozka fixnych nakladov a primerany zisk spolu
  fnpz: 0,              // fixne naklady a primerany zisk spolu

  loading: false,
  updating: false,
  error: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.FETCH_REGULOVANA_ZLOZKA_REQUEST:
      return {...state, loading: true}

    case TYPES.FETCH_REGULOVANA_ZLOZKA_SUCCESS:
      return {...state, loading: false,
        ...action.data
      }

    case TYPES.FETCH_VYPOCET_BUNIEK_SUCCESS:
      return {...state,

        fnpz: action.data['bunky'].find(x => x.id === 'SNTE_FNPZ').hodnota,
      }

    case TYPES.UPDATE_REGULOVANA_ZLOZKA_SUCCESS:
      return {...state, ...action.data}

    case TYPES.FETCH_REGULOVANA_ZLOZKA_ERROR:
      return {...state, error: action.data}

    case TYPES.UPDATE_REGULOVANA_ZLOZKA_ERROR:
      return {...state, error: action.data}

    default:
      return state
  }
}