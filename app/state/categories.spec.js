import { CategoriesActions, categories, ADD_CATEGORY, REMOVE_CATEGORY } from './categories.state';
import { INITIAL_DATA } from '../utils';

describe('categories state actions', () => {

	const state = INITIAL_DATA.categories;

	it('should initialize state', () => {
		expect(categories(state, {}).length).toBe(3);
		expect(categories(state, {})).toEqual(state);
	});

	it('should add category', () => {
		const newState = categories(state, { type: ADD_CATEGORY, payload: 'new'});
		expect(newState.length).toBe(4);
		expect(newState[3]).toEqual('new');
	});

	it('should remove category', () => {
		const newState = categories(state, { type: REMOVE_CATEGORY, payload: 'Lunch'});
		expect(newState.length).toBe(2);
		expect(newState[0]).toEqual('Overhead');
	})
})
