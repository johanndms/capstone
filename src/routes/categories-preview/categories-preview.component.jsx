import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
   const categoriesMap = useSelector(selectCategoriesMap);

   return (
      <div>
         {Object.keys(categoriesMap).map((title) => (
            <CategoryPreview
               key={title}
               title={title}
               products={categoriesMap[title]}
            />
         ))}
      </div>
   );
};

export default CategoriesPreview;
