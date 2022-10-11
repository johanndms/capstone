import { createContext, useEffect, useReducer } from 'react';
import { PropTypes } from 'prop-types';
import {
   onAuthStateChangedListener,
   createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

import { createAction } from '../utils/reducer/reducer.utils';

// The actual value of user we will acess
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
});

// Define the default Actions for the user reducer
export const USER_ACTION_TYPES = {
   SET_CURRENT_USER: 'SET_CURRENT_USER',
};

// Define the Actions for the user reducer
const userReducer = (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
         return {
            ...state,
            currentUser: payload,
         };
      default:
         throw new Error('Invalid action: ' + type);
   }
};

// Define the INITIAL_STATE of the currentUser
const INITIAL_STATE = {
   currentUser: null,
};

export const UserProvider = ({ children }) => {
   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

   const setCurrentUser = (user) => {
      dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
   };

   const value = { currentUser, setCurrentUser };

   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         setCurrentUser(user);
         if (user) {
            createUserDocumentFromAuth(user);
         }
      });
      return unsubscribe;
   }, []);

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
   children: PropTypes.node,
};
