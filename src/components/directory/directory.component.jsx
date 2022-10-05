import { DirectoryContainer } from './directory.styles';
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
      <DirectoryContainer>
         {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
         ))}
      </DirectoryContainer>
   );
};

Directory.propTypes = {
   categories: PropTypes.array.isRequired,
};

export default Directory;
