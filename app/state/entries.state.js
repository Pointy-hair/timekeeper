import { loadFromLocaStorage } from '../utils';
import { concat, keys, sortBy, identity, dec, inc } from 'ramda'
import { relativeEntry } from './stateHelpers'
//------------------------------------------------------------
//	CONSTANTS
//------------------------------------------------------------

export const LOAD_ENTRIES   = 'LOAD_ENTRIES';
export const ADD_ENTRIES    = 'ADD_ENTRIES';
export const PREVIOUS_ENTRY = 'PREVIOUS_ENTRY';
export const NEXT_ENTRY     = 'NEXT_ENTRY';

//------------------------------------------------------------
//	ACTIONS
//------------------------------------------------------------

export const EntriesActions = () => {

    const addEntries = (entryData) => {
        return {
            type: ADD_ENTRIES,
            payload: {
                entryData
            }
        };
    }

    const previousEntry = () => {
        return {
            type: PREVIOUS_ENTRY,
        };
    }
    const nextEntry = () => {
        return {
            type: NEXT_ENTRY,
        };
    }
    const loadEntries = () => {
        return {
            type: LOAD_ENTRIES
        };
    }

    return {
        addEntries,
        previousEntry,
        nextEntry,
        loadEntries,
    };
}

//------------------------------------------------------------
//	REDUCERS
//------------------------------------------------------------

export const entries = (state = loadFromLocaStorage().entries, {type, payload}) => {
    switch (type) {
        case ADD_ENTRIES:
            let newEntry = {};
            newEntry[payload.currentEntry] = payload.entryData;
            return Object.assign({}, state, newEntry);
        case PREVIOUS_ENTRY:
            return relativeEntry(payload.currentEntry, dec, state);
        case NEXT_ENTRY:
            return relativeEntry(payload.currentEntry, inc, state);
        default:
            return state;
    }
}
