import { USER_ACTION_TYPES } from './user-action.types';

// Define the INITIAL_STATE of the currentUser
const INITIAL_STATE = {
   currentUser: null,
};

// Define the Actions for the user reducer
export const userReducer = (state = INITIAL_STATE, action) => {
   const { type, payload } = action;

   switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
         return {
            ...state,
            currentUser: payload,
         };
      default:
         return state;
   }
};
