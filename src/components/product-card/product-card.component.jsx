import {
   ProductCardContainer,
   Footer,
   Name,
   Price,
} from './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PropTypes } from 'prop-types';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector, useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
   const dispatch = useDispatch();
   const { name, imageUrl, price } = product;
   const cartItems = useSelector(selectCartItems);

   const addProductToCartHandler = () =>
      dispatch(addItemToCart(cartItems, product));

   return (
      <ProductCardContainer>
         <img src={imageUrl} alt={`${name}`} />
         <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
         </Footer>
         <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={addProductToCartHandler}>
            Add to Cart
         </Button>
      </ProductCardContainer>
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
