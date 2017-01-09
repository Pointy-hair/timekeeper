export const LOCAL_STORAGE_KEY = 'timeline';

export const INITIAL_DATA = {
	categories: ['Lunch', 'Overhead', 'Work'],
	entries: { },
	currentEntry: '2016-12-25'
};

export const saveToLocaStorage = (data) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
export const loadFromLocaStorage = () => {
	let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || INITIAL_DATA;
	return data;
}
