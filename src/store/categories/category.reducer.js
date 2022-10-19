import { CATEGORY_ACTION_TYPES } from './category-action.types';

// Define the INITIAL_STATE of the categoryMap
const INITIAL_STATE = {
   categories: [], // Important to set this as [] instead of null else we will have issues where .map etc is pointing to null
};

// Define the Actions for the categoryMap reducer
export const categoryReducer = (state = INITIAL_STATE, action) => {
   const { type, payload } = action;

   switch (type) {
      case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
         return {
            ...state,
            categories: payload,
         };
      default:
         return state;
   }
};
