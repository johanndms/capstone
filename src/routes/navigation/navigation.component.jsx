import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import './navigation.styles.scss';
import { signUserOut } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component';

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
         <div className='navigation'>
            <Link className='logo-container' to='/'>
               <div>
                  <SiteLogo className='logo' />
               </div>
            </Link>
            <div className='nav-links-container'>
               <Link className='nav-link' to='/shop/'>
                  Shop
               </Link>
               <Link className='nav-link' to='/hats/'>
                  Hats
               </Link>
               {currentUser ? (
                  <span className='nav-link' onClick={signUserOut}>
                     Sign Out
                  </span>
               ) : (
                  <Link className='nav-link' to='/auth/'>
                     Sign In
                  </Link>
               )}
               <CartIcon />
            </div>
            {isCartOpen && <CardDropdown />}
         </div>
         <Outlet />
      </React.Fragment>
   );
};

export default Navigation;
