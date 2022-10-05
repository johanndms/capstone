import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import {
   CheckoutContainer,
   CheckoutHeader,
   HeaderBlock,
   Total,
} from './checkout.styles';

const Checkout = () => {
   const { cartItems, cartTotal } = useContext(CartContext);

   return (
      <CheckoutContainer>
         <CheckoutHeader>
            <HeaderBlock>Product</HeaderBlock>
            <HeaderBlock>Description</HeaderBlock>
            <HeaderBlock>Quantity</HeaderBlock>
            <HeaderBlock>Price</HeaderBlock>
            <HeaderBlock>Remove</HeaderBlock>
         </CheckoutHeader>
         {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         ))}
         {cartItems.length > 0 && <Total>Total: ${cartTotal}</Total>}
         {!cartItems.length && <p>Your cart is empty</p>}
      </CheckoutContainer>
   );
};

export default Checkout;
