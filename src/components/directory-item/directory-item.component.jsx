import './directory-item.styles.scss';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * This function build and return one category item using the title and imageUrl. The user should be able to click on the category and redirected to that specific
 * route/page
 * @param category
 * @returns JSX for one category item
 */
const CategoryItem = ({ category }) => {
   const { title, imageUrl } = category;

   return (
      <div className='directory-item-container'>
         <div
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }}></div>
         <div className='directory-body-container'>
            <Link to={`/shop/${title}`}>
               <h2>{title}</h2>
            </Link>
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
