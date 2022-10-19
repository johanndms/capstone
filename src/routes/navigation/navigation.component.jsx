import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { ReactComponent as SiteLogo } from '../../assets/crown.svg';
import { signUserOut } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
   NavigationContainer,
   LogoContainer,
   NavLinksContainer,
   NavLink,
} from './navigation.styles';
import { selectCartIsOpen } from '../../store/cart/cart.selector';

/**
 * Main site Navigation stack with an Outlet to render each of the Routes/Pages
 *
 * @returns
 */
const Navigation = () => {
   const currentUser = useSelector(selectCurrentUser);
   const isCartOpen = useSelector(selectCartIsOpen);

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
