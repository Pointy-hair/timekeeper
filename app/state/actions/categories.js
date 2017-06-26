
//------------------------------------------------------------
//	CONSTANTS
//------------------------------------------------------------
export const ADD_CATEGORY    = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
//------------------------------------------------------------
//	ACTIONS
//------------------------------------------------------------

export const CategoriesActions = () => {
  const addCategory = category => {
    return {
      type: ADD_CATEGORY,
      payload: category
    };
  }
  const removeCategory = category => {
    return {
      type: REMOVE_CATEGORY,
      payload: category
    };
  }
  return {
    addCategory,
    removeCategory
  };
}
