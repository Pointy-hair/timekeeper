export const LOCAL_STORAGE_KEY = 'timeline-dad8c';

export const INITIAL_DATA = {
	// categories: ['Lunch', 'Overhead', 'Work'],
	entries: {
        byId: {},
        allIds: []
    },
	currentEntry: '',
    nextId: 1
};

export const saveToLocaStorage = (data) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
export const loadFromLocaStorage = () => {
	let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || INITIAL_DATA;
	return data;
}
