import * as actions from './ActionsTodo'
import * as types from './ActionTypes'

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const text = 'Finish docs';
        const expectedAction = {
            id: 0,
            type: types.ADD_TODO,
            text
        };
        expect(actions.addTodo(text)).toEqual(expectedAction);
    });

    it('should set a visibility filter', () => {
        const filter = 'SHOW_ALL';
        const expectedAction = {
            type: types.SET_VISIBILITY_FILTER,
            filter
        };
        expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
    });

    it('should toggle a todo', () => {
        const id = 1;
        const expectedAction = {
            type: types.TOGGLE_TODO,
            id
        };
        expect(actions.toggleTodo(id)).toEqual(expectedAction);
    });
});