import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
   CheckoutContainer,
   CheckoutHeader,
   HeaderBlock,
   Total,
} from './checkout.styles';
import {
   selectCartItems,
   selectCartTotal,
} from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

const Checkout = () => {
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);

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
