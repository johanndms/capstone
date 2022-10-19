import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
import { useSelector, useDispatch } from 'react-redux';
import {
   selectCartIsOpen,
   selectCartCount,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
   const dispatch = useDispatch();
   const isCartOpen = useSelector(selectCartIsOpen);
   const cartCount = useSelector(selectCartCount);

   const toggleCartOpen = () => {
      dispatch(setIsCartOpen(!isCartOpen));
   };

   return (
      <CartIconContainer onClick={toggleCartOpen}>
         <ShoppingIcon />
         <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
   );
};

export default CartIcon;
