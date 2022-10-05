import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
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

const CheckoutItem = ({ cartItem }) => {
   const { imageUrl, name, quantity, price } = cartItem;
   const { addItemToCart, removeItemFromCart, clearItemFromCart } =
      useContext(CartContext);

   /**
    * @remark
    * We use click handlers like this because it's easier to maintain and won't need to
    * search through the jsx code to change them, and secondly we can optimise the code later using this
    *
    */
   const addProductToCart = () => addItemToCart(cartItem);
   const removeProductFromCart = () => removeItemFromCart(cartItem);
   const removeProductRowFromCart = () => clearItemFromCart(cartItem);

   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
         </ImageContainer>
         <Name>{name}</Name>
         <Quantity>
            <Arrow onClick={removeProductFromCart}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addProductToCart}>&#10095;</Arrow>
         </Quantity>

         <Price>{quantity * price}</Price>
         <RemoveButton onClick={removeProductRowFromCart}>
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
