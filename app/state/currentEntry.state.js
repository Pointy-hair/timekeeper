import { loadFromLocaStorage } from '../utils';
//------------------------------------------------------------
//	CONSTANTS
//------------------------------------------------------------

export const SET_CURRENT_ENTRY = 'SET_CURRENT_ENTRY';

//------------------------------------------------------------
//	ACTIONS
//------------------------------------------------------------

export const CurrentEntryActions = () => {
	const setCurrentEntry = (currentEntry) => {
		return { type: SET_CURRENT_ENTRY, payload: currentEntry };
	}
	return {
		setCurrentEntry
	};
}

//------------------------------------------------------------
//	REDUCERS
//------------------------------------------------------------

export const currentEntry = (state = loadFromLocaStorage().currentEntry, {type, payload}) => {
	switch (type) {
		case SET_CURRENT_ENTRY:
			return payload || state;
		default:
			return state;
	}
}
