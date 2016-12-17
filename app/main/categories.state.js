
//------------------------------------------------------------
//	CONSTANTS
//------------------------------------------------------------
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
//------------------------------------------------------------
//	ACTIONS
//------------------------------------------------------------

export const CategoriesActions = () => {
	const getCategories = categories => {
		return {type: GET_CATEGORIES, payload: categories};
	}
	const addCategory = category => {
		return {type: ADD_CATEGORY, payload: category};
	}
	const removeCategory = category => {
		return {type: REMOVE_CATEGORY, payload: category};
	}
	return {
		getCategories,
		addCategory,
		removeCategory
	};
}

//------------------------------------------------------------
//	REDUCERS
//------------------------------------------------------------

export const INITIAL_CATEGORIES = [
	{
		category: 'red'
	}, {
		category: 'blue'
	}, {
		category: 'yellow'
	}
];

export const categories = (state = INITIAL_CATEGORIES, {type, payload}) => {
	switch (type) {
		case GET_CATEGORIES:
			return payload || state;
			break;
		case ADD_CATEGORY:
			return state.concat([payload]);
			break;
		case REMOVE_CATEGORY:
			return state.filter(d => {
				return d.category !== payload;
			});
			break;
		default:
			return state;
	}
}
