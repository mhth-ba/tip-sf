import * as types from '../../services/ActionTypes'
import reducer from './todos'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });

    it('should handle ADD_TODO', () => {
        expect(reducer([], {
            type: types.ADD_TODO,
            id: 0,
            text: 'Run the tests'
        })).toEqual([
            {
                id: 0,
                text: 'Run the tests',
                completed: false
            }
        ]);

        expect(reducer(
            [
                {
                    id: 0,
                    text: 'Run the tests',
                    completed: false,
                }
            ],
            {
                type: types.ADD_TODO,
                id: 1,
                text: 'Use Redux'
            })
        ).toEqual([
            {
                id: 0,
                text: 'Run the tests',
                completed: false
            },
            {
                id: 1,
                text: 'Use Redux',
                completed: false
            }
        ]);
    });
});