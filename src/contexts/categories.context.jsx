import { createContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
//import PRODUCTS from '../data/shop-data.json';
//import SHOP_DATA from '../data/shop-data.js';
//import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
   categoriesMap: {},
   setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
   /**
    * @remarks
    * This is a temporary useEffect to add new collection->document->items to the firestore DB;
    *
    */
   // useEffect(() => {
   //    addCollectionAndDocuments('categories', SHOP_DATA, 'title');
   // }, []);
   //const [products, setProducts] = useState(PRODUCTS);

   const [categoriesMap, setCategoriesMap] = useState({});
   const value = { categoriesMap, setCategoriesMap };

   useEffect(() => {
      const getCategories = async () => {
         const dbCategoriesMap = await getCategoriesAndDocuments('categories');
         console.log(dbCategoriesMap);
         setCategoriesMap(dbCategoriesMap);
      };
      getCategories();
   }, []);

   return (
      <CategoriesContext.Provider value={value}>
         {children}
      </CategoriesContext.Provider>
   );
};

CategoriesProvider.propTypes = {
   children: PropTypes.node,
};
