import reducer from './dodavkatepla'

describe('DodavkaTepla Reducer', () => {
    it('should return a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' })
        expect(result).toBeDefined()
    })


})