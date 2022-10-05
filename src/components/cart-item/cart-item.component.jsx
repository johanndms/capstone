import { CartItemContainer, ItemDetails, Name } from './cart-item.styles';
import { PropTypes } from 'prop-types';

const CartItem = ({ cartItem }) => {
   const { name, quantity, price, imageUrl } = cartItem;

   return (
      <CartItemContainer>
         <img src={imageUrl} alt={`${name}`} />
         <ItemDetails>
            <Name>{name}</Name>
            <span>
               {quantity} x ${price}
            </span>
         </ItemDetails>
      </CartItemContainer>
   );
};

export default CartItem;

CartItem.propTypes = {
   cartItem: PropTypes.shape({
      name: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      imageUrl: PropTypes.string,
   }),
};
