import { CATEGORY_ACTION_TYPES } from './category-action.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categoriesArray) =>
   createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
