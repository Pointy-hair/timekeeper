import { CategoriesActions, categories, ADD_CATEGORY, REMOVE_CATEGORY } from './categories.state';


describe('categories state actions', () => {
	it('should initialize state', () => {
		expect(categories(undefined, {}).length).toBe(3);
		expect(categories(undefined, {})).toEqual([{category: 'red'}, {category: 'blue'}, {category: 'yellow'}]);
	});

	it('should add category', () => {
		const newState = categories(undefined, { type: ADD_CATEGORY, payload: { category: 'new'}});
		expect(newState.length).toBe(4);
		expect(newState[3]).toEqual({ category: 'new' });
	});

	it('should remove category', () => {
		const newState = categories(undefined, { type: REMOVE_CATEGORY, payload: 'red'});
		expect(newState.length).toBe(2);
		expect(newState[0]).toEqual({ category: 'blue' });
	})
})
