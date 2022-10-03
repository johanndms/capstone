import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
   return (
      <div className='category-preview-container'>
         <h2>
            <Link className='title' to={title}>
               {title.toUpperCase()}
            </Link>
         </h2>
         <div key={title} className='preview'>
            {products.slice(0, 4).map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </div>
   );
};

export default CategoryPreview;

CategoryPreview.propTypes = {
   title: PropTypes.string,
   products: PropTypes.array,
};
