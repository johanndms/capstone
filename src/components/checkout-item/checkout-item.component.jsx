import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { PropTypes } from 'prop-types';
import './checkout-item.styles.scss';

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
      <div className='checkout-item-container'>
         <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
         </div>
         <div className='name'>{name}</div>
         <div className='quantity'>
            <span className='arrow' onClick={removeProductFromCart}>
               &#10094;
            </span>
            <div className='value'>{quantity}</div>
            <span className='arrow' onClick={addProductToCart}>
               &#10095;
            </span>
         </div>

         <div className='price'>{quantity * price}</div>
         <div className='remove-button' onClick={removeProductRowFromCart}>
            &#10005;
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
