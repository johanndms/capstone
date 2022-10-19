import {
   CartDropdownContainer,
   EmptyMessage,
   CartItems,
} from './cart-dropdown.styles';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CardDropdown = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   const navigate = useNavigate();

   const goToCheckoutHandler = () => {
      dispatch(setIsCartOpen(false));
      navigate('/checkout');
   };

   return (
      <CartDropdownContainer>
         {cartItems.length > 0 && (
            <CartItems>
               {cartItems.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
               ))}
            </CartItems>
         )}

         {!cartItems.length && <EmptyMessage>Your cart is empty!</EmptyMessage>}
         <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
      </CartDropdownContainer>
   );
};

export default CardDropdown;
