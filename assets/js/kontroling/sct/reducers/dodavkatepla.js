import * as TYPES from '../../../services/ActionTypes'

const initState = {
    dodane: { // Kontroling.SCT_DodaneTeplo
        tpv: 0,
        vhj: 0,
        tpz: 0,
        pk: {
            v_kwh: 0,
            v_kw: 0,
            z_kwh: 0,
            z_kw: 0
        },
        ppc: 0,
        slovnaft: 0,
        cw: 0,
        zdroj: {
            v_kwh: 0,
            v_kw: 0,
            z_kwh: 0,
            z_kw: 0
        },
        primar: {
            v_kwh: 0,
            v_kw: 0,
            z_kwh: 0,
            z_kw: 0
        },
        ost: {
            v_kwh: 0,
            v_kw: 0,
            z_kwh: 0,
            z_kw: 0
        },
        sekundar: {
            v_kwh: 0,
            v_kw: 0,
            z_kwh: 0,
            z_kw: 0
        }
    },
    elektrina : { // Kontroling.SCT_Elektrina
        veez: {
            tpv: 0,
            tpz: 0
        },
        dszse: {
            tpv: 0,
            tpz: 0
        },
        dree: {
            tpv: 0,
            tpz: 0
        },
        vsee: {
            tpv: 0,
            tpz: 0
        }
    },
    loading: false,
    error: null
}

export const poznamkaUpdate = (val) => ({ type: TYPES.POZNAMKA_UPDATE, payload: val })

export default (state = initState, action) => {
    switch (action.type) {
        case TYPES.UDT_ADD:
            return {...state, dodane: state.dodane.concat(action.payload)}
        case TYPES.POZNAMKA_UPDATE:
            return {...state, poznamka: action.payload}
        case TYPES.FETCH_DODAVKA_TEPLA_REQUEST:
            return {...state, loading: true}
        case TYPES.FETCH_DODAVKA_TEPLA_SUCCESS:
            return {...state, loading: false, dodane: {
                tpv: action.data[0].v_kwh,
                vhj: action.data[1].v_kwh,
                tpz: action.data[2].z_kwh,
                pk: action.data[3],
                ppc: action.data[4].v_kwh,
                slovnaft: action.data[5].v_kwh,
                cw: action.data[6].z_kwh,
                zdroj: action.data[7],
                primar: action.data[8],
                ost: action.data[9],
                sekundar: action.data[10]
            }}
        case TYPES.FETCH_VYROBA_ELEKTRINY_REQUEST:
            return {...state, loading: true}
        case TYPES.FETCH_VYROBA_ELEKTRINY_SUCCESS:
            return {...state, loading: false, elektrina: {
                veez: action.data[0],
                dszse: action.data[1],
                dree: action.data[2],
                vsee: action.data[3]
            }}
        default:
            return state
    }
}
