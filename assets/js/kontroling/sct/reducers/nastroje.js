import * as TYPES from '../../../services/ActionTypes'

const initState = {
  highlightEditable: false,
  vypocty: false,

  // pocet desatinnych miest
  decimal_udt: 0,    // uzitocna dodavka tepla
  decimal_pp: 0,     // porovnanie s planom
  decimal_vtpz: 0,   // vyroba tepla podla zdrojov
  decimal_vtpk: 2,   // vyroba tepla plynovymi kotolnami
  decimal_vee: 2,    // vyroba elektrickej energie
  decimal_dnem: 2,   // delenie nakladov podla energetickej metody
  decimal_fzpk: 4,   // fakturovany zemny plyn | konstanty
  decimal_fzptpv: 3, // fakturovany zemny plyn | TpV
  decimal_fzptpz: 3, // fakturovany zemny plyn | TpZ
  decimal_fzpvhj: 3, // fakturovany zemny plyn | VhJ
  decimal_fzpvyr: 3, // fakturovany zemny plyn | vyrobne
  decimal_fzppk: 3,  // fakturovany zemny plyn | plynove kotolne
  decimal_fzpkn: 1,  // fakturovany zemny plyn | klucovane naklady
  decimal_fzpbat: 1, // fakturovany zemny plyn | BAT
  decimal_pbnmzptpv: 0,  // palivovy bonus | normativne mnozstvo | TpV
  decimal_pbnmzpvhj: 0,  // palivovy bonus | normativne mnozstvo | VhJ
  decimal_pbnmzptpz: 0,  // palivovy bonus | normativne mnozstvo | TpZ
  decimal_pbnmzppkbp: 0, // palivovy bonus | normativne mnozstvo | PK bez primaru
  decimal_pbnmzppksp: 0, // palivovy bonus | normativne mnozstvo | PK s primarom
  decimal_pbeonnzp: 0,   // palivovy bonus | ekonomicky opravnene naklady na nakup zemneho plynu
  decimal_ntnnt: 0,  // nakupovane teplo | naklady na nakup tepla
  decimal_sntesn: 0,   // spolocne naklady na teplo a elektrinu | skutocne naklady
  decimal_snterzfn: 0, // spolocne naklady na teplo a elektrinu | regulovana zlozka fixnych nakladov
  decimal_ctvz: 0,  // cena tepla | variabilna zlozka
  decimal_ctfz: 0   // cena tepla | fixna zlozka
}

export default (state = initState, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_HIGHLIGHT_EDITABLE:
      return {...state, highlightEditable: action.toggle}
    case TYPES.TOGGLE_VYPOCTY:
      return {...state, vypocty: action.toggle}
    case TYPES.SET_DECIMAL_SCALE:
      return {...state, ...action.scale}
    default:
      return state
  }
}