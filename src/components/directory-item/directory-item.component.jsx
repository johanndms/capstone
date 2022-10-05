import {
   BackgroundImage,
   DirectoryBodyContainer,
   DirectoryItemContainer,
} from './directory-item.styles';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * This function build and return one category item using the title and imageUrl. The user should be able to click on the category and redirected to that specific
 * route/page
 * @param category
 * @returns JSX for one category item
 */
const DirectoryItem = ({ category }) => {
   const { title, imageUrl } = category;

   return (
      <DirectoryItemContainer>
         <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
         <DirectoryBodyContainer>
            <Link to={`/shop/${title}`}>
               <h2>{title}</h2>
            </Link>
            <p>Shop now</p>
         </DirectoryBodyContainer>
      </DirectoryItemContainer>
   );
};

DirectoryItem.propTypes = {
   category: PropTypes.shape({
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
   }),
};

export default DirectoryItem;
