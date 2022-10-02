import './cart-item.styles.scss';
import { PropTypes } from 'prop-types';

const CartItem = ({ cartItem }) => {
   const { name, quantity, price, imageUrl } = cartItem;

   return (
      <div className='cart-item-container'>
         <img src={imageUrl} alt={`${name}`} />
         <div className='item-details'>
            <span className='name'>{name}</span>
            <span>
               {quantity} x ${price}
            </span>
         </div>
      </div>
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
