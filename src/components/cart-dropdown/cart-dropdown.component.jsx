import { useContext } from 'react';
import {
   CartDropdownContainer,
   EmptyMessage,
   CartItems,
} from './cart-dropdown.styles';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

const CardDropdown = () => {
   const { cartItems, setIsCartOpen } = useContext(CartContext);
   const navigate = useNavigate();

   const goToCheckoutHandler = () => {
      setIsCartOpen(false);
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
