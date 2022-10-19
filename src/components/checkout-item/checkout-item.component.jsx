import { PropTypes } from 'prop-types';
import {
   CheckoutItemContainer,
   ImageContainer,
   Name,
   Quantity,
   Price,
   Arrow,
   Value,
   RemoveButton,
} from './checkout-item.styles';
import {
   addItemToCart,
   removeItemFromCart,
   clearItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector, useDispatch } from 'react-redux';

const CheckoutItem = ({ cartItem }) => {
   const dispatch = useDispatch();
   const { imageUrl, name, quantity, price } = cartItem;
   const cartItems = useSelector(selectCartItems);

   /**
    * @remark
    * We use click handlers like this because it's easier to maintain and won't need to
    * search through the jsx code to change them, and secondly we can optimise the code later using this
    *
    */
   const addProductToCartHandler = () =>
      dispatch(addItemToCart(cartItems, cartItem));
   const removeProductFromCartHandler = () =>
      dispatch(removeItemFromCart(cartItems, cartItem));
   const removeProductRowFromCartHandler = () =>
      dispatch(clearItemFromCart(cartItems, cartItem));

   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
         </ImageContainer>
         <Name>{name}</Name>
         <Quantity>
            <Arrow onClick={removeProductFromCartHandler}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addProductToCartHandler}>&#10095;</Arrow>
         </Quantity>

         <Price>{quantity * price}</Price>
         <RemoveButton onClick={removeProductRowFromCartHandler}>
            &#10005;
         </RemoveButton>
      </CheckoutItemContainer>
   );
};

CheckoutItem.propTypes = {
   cartItem: PropTypes.shape({
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
   }),
};
export default CheckoutItem;
