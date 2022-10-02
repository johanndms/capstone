import { useContext } from 'react';
import './product-card.styles.scss';
import Button from '../button/button.component';
import { PropTypes } from 'prop-types';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
   const { name, imageUrl, price } = product;
   const { addItemToCart } = useContext(CartContext);

   const addProductToCart = () => addItemToCart(product);

   return (
      <div className='product-card-container'>
         <img src={imageUrl} alt={`${name}`} />
         <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
         </div>
         <Button buttonType='inverted' onClick={addProductToCart}>
            Add to Cart
         </Button>
      </div>
   );
};

export default ProductCard;

ProductCard.propTypes = {
   product: PropTypes.shape({
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      price: PropTypes.number,
   }),
};
