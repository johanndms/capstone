import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signUserOut } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
   NavigationContainer,
   LogoContainer,
   NavLinksContainer,
   NavLink,
} from './navigation.styles';

/**
 * Main site Navigation stack with an Outlet to render each of the Routes/Pages
 *
 * @returns
 */
const Navigation = () => {
   const { currentUser } = useContext(UserContext);
   const { isCartOpen } = useContext(CartContext);

   return (
      <React.Fragment>
         <NavigationContainer>
            <LogoContainer to='/'>
               <SiteLogo className='logo' />
            </LogoContainer>
            <NavLinksContainer>
               <NavLink to='/shop/'>Shop</NavLink>
               <NavLink to='/hats/'>Hats</NavLink>
               {currentUser ? (
                  <NavLink as='span' onClick={signUserOut}>
                     Sign Out
                  </NavLink>
               ) : (
                  <NavLink to='/auth/'>Sign In</NavLink>
               )}
               <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <CardDropdown />}
         </NavigationContainer>
         <Outlet />
      </React.Fragment>
   );
};

export default Navigation;
