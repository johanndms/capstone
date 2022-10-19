import { createSelector } from 'reselect';

// Get the categories array from the state object.
const selectCategoryReducer = (state) => state.categories;

// Create a memoized object called selectedCategories.
export const selectedCategories = createSelector(
   [selectCategoryReducer],
   (categoriesSlice) => categoriesSlice.categories,
);

// Now use the memoized object to create a new selector that will reduce only if the selectedCategories object has been changed.
export const selectCategoriesMap = createSelector(
   [selectedCategories],
   (categories) =>
      categories.reduce((acc, category) => {
         const { title, items } = category;
         acc[title.toLowerCase()] = items;
         return acc;
      }, {}),
);
