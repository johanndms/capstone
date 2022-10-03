import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';
import { PropTypes } from 'prop-types';

/**
 * This function will build and return the JSX for the home page where
 * all categories are displayed.
 *
 * @param [{categories}]
 * @returns
 */
const Directory = (props) => {
   const { categories } = props;

   return (
      <div className='directory-container'>
         {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
         ))}
      </div>
   );
};

Directory.propTypes = {
   categories: PropTypes.array.isRequired,
};

export default Directory;
