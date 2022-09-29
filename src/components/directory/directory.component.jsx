import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";
import { PropTypes } from "prop-types";

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
      <div className="categories-container">
         {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
         ))}
      </div>
   );
};

Directory.propTypes = {
   categories: PropTypes.array.isRequired,
};

export default Directory;
