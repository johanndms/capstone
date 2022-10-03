import { useContext } from 'react';
import './cart-dropdown.styles.scss';
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
      <div className='cart-dropdown-container'>
         {cartItems.length > 0 && (
            <div className='cart-items'>
               {cartItems.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
               ))}
            </div>
         )}
         {!cartItems.length && (
            <div className='empty-message'>Your cart is empty!</div>
         )}
         <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
      </div>
   );
};

export default CardDropdown;
