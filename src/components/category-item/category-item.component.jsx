import './category-item.styles.scss';
import { PropTypes } from 'prop-types';

/**
 * This function build and return one category item using the title and imageUrl. The user should be able to click on the category and redirected to that specific
 * route/page
 * @param category
 * @returns JSX for one category item
 */
const CategoryItem = ({ category }) => {
   const { title, imageUrl } = category;

   return (
      <div className='category-container'>
         <div
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }}
         ></div>
         <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop now</p>
         </div>
      </div>
   );
};

CategoryItem.propTypes = {
   category: PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
   }),
};

export default CategoryItem;
