import { relativeEntry } from './stateHelpers'
import { identity, inc, dec } from 'ramda'
describe('state helpers', () => {
    const state = {
        '2017-03-01': {},
        '2017-03-05': {},
        '2017-03-03': {},
    };

    it('should get the relative entry', () => {
        expect(relativeEntry('2017-03-03', identity, state)).toBe('2017-03-03')
        expect(relativeEntry('2017-03-03', inc, state)).toBe('2017-03-05')
        expect(relativeEntry('2017-03-03', dec, state)).toBe('2017-03-01')
    })
})
