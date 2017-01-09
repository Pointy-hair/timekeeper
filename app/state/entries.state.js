import { loadFromLocaStorage } from '../utils';
//------------------------------------------------------------
//	CONSTANTS
//------------------------------------------------------------

export const LOAD_ENTRIES = 'LOAD_ENTRIES';
export const ADD_ENTRIES  = 'ADD_ENTRIES';

//------------------------------------------------------------
//	ACTIONS
//------------------------------------------------------------

export const EntriesActions = () => {
	const loadEntries = () => {
		return { type: LOAD_ENTRIES };
	}

	const addEntries = (currentEntry, entryData) => {
		return { type: ADD_ENTRIES, payload: { currentEntry, entryData } };
	}

	return {
		loadEntries,
		addEntries
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
		default:
			return state;
	}
}
