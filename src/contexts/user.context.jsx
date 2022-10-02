import { createContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import {
   onAuthStateChangedListener,
   createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// The actual value of user we will acess
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null);
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
