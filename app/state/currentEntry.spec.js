import { INITIAL_DATA } from '../utils';
import { CurrentEntryActions, currentEntry} from './currentEntry.state';

describe('currentEntry state actions', () => {
	it('should initialize state', () => {
		expect(currentEntry('2016-12-25', { type: 'blah' })).toBe('2016-12-25');
	})
	it('should set current state', () => {
		expect(currentEntry('2016-01-01', CurrentEntryActions().setCurrentEntry('2016-12-25'))).toBe('2016-12-25');
	})
})
