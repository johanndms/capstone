import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import {
   onAuthStateChangedListener,
   createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.action';

const Hats = () => {
   return <h1>I'm the hat's page</h1>;
};

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
         if (user) {
            createUserDocumentFromAuth(user);
         }
         dispatch(setCurrentUser(user));
      });
      return unsubscribe;
   }, []);

   return (
      <Routes>
         <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />{' '}
            {/* this will render the Home with / */}
            <Route path='shop/*' element={<Shop />} />
            <Route path='hats' element={<Hats />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='checkout' element={<Checkout />} />
         </Route>
      </Routes>
   );
};

export default App;
