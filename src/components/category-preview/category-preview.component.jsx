import { PropTypes } from 'prop-types';
import {
   CategoryPreviewContainer,
   Title,
   Preview,
} from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
   return (
      <CategoryPreviewContainer>
         <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
         </h2>
         <Preview key={title}>
            {products.slice(0, 4).map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </Preview>
      </CategoryPreviewContainer>
   );
};

export default CategoryPreview;

CategoryPreview.propTypes = {
   title: PropTypes.string,
   products: PropTypes.array,
};
