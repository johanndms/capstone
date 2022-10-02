import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
   const { cartItems, cartTotal } = useContext(CartContext);

   return (
      <div className='checkout-container'>
         <div className='checkout-header'>
            <div className='header-block'>Product</div>
            <div className='header-block'>Description</div>
            <div className='header-block'>Quantity</div>
            <div className='header-block'>Price</div>
            <div className='header-block'>Remove</div>
         </div>
         {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         ))}
         {cartItems.length > 0 && (
            <div className='total'>Total: ${cartTotal}</div>
         )}
         {!cartItems.length && <p>Your cart is empty</p>}
      </div>
   );
};

export default Checkout;
