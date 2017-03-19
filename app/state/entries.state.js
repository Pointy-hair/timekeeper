import { loadFromLocaStorage } from '../utils';
import { concat, keys, sortBy, identity, dec, inc } from 'ramda'
import { relativeEntry } from './stateHelpers'
//------------------------------------------------------------
//	CONSTANTS
//------------------------------------------------------------

export const LOAD_ENTRIES = 'LOAD_ENTRIES';
export const ADD_ENTRIES = 'ADD_ENTRIES';
export const PREVIOUS_ENTRY = 'PREVIOUS_ENTRY';

//------------------------------------------------------------
//	ACTIONS
//------------------------------------------------------------

export const EntriesActions = () => {
    const loadEntries = () => {
        return {
            type: LOAD_ENTRIES
        };
    }

    const addEntries = (currentEntry, entryData) => {
        return {
            type: ADD_ENTRIES,
            payload: {
                currentEntry,
                entryData
            }
        };
    }

    const previousEntry = () => {
        return {
            type: PREVIOUS_ENTRY,
            payload: {
                currentEntry
            }
        };
    }

    return {
        loadEntries,
        addEntries,
        previousEntry
    };
}

//------------------------------------------------------------
//	REDUCERS
//------------------------------------------------------------

export const entries = (state = loadFromLocaStorage().entries, {type, payload}) => {
    switch (type) {
        case LOAD_ENTRIES:
            return payload || state;
        case ADD_ENTRIES:
            let newEntry = {};
            newEntry[payload.currentEntry] = payload.entryData;
            return Object.assign({}, state, newEntry);
        case PREVIOUS_ENTRY:
        //   return getNthFromEntries(dec(currentEntryIndex(payload.currentEntry, state)), state);
            return relativeEntry(payload.currentEntry, dec, state)
        default:
            return state;
    }
}
