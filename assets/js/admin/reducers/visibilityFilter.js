import * as types from '../../services/ActionTypes'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter