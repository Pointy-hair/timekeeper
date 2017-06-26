import { INITIAL_DATA } from '../utils';
import { EntriesActions, entries } from './entries.state';

describe('entries state actions', () => {
  const state = INITIAL_DATA.entries;

  it('should load entries', () => {
    // Object.freeze(state);
    const action = EntriesActions().loadEntries();
    expect(entries(state, action)).toEqual(state);
  });

})
