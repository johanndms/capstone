import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { PropTypes } from 'prop-types';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
   const { imageUrl, name, quantity, price } = cartItem;
   const { addItemToCart, removeItemFromCart, removeRowFromCart } =
      useContext(CartContext);

   const addProductToCart = () => addItemToCart(cartItem);
   const removeProductFromCart = () => removeItemFromCart(cartItem);
   const removeProductRowFromCart = () => removeRowFromCart(cartItem);

   return (
      <div className='checkout-item-container'>
         <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
         </div>
         <div className='name'>{name}</div>
         <div className='quantity'>
            <span className='arrow' onClick={removeProductFromCart}>
               &lang;
            </span>
            <div className='value'>{quantity}</div>
            <span className='arrow' onClick={addProductToCart}>
               &rang;
            </span>
         </div>

         <div className='price'>{quantity * price}</div>
         <div className='remove-button' onClick={removeProductRowFromCart}>
            &times;
         </div>
      </div>
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
