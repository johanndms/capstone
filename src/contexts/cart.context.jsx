import { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

/**
 * Check if the requested product to add to cart is already in the cartItems array.
 * If so then increment the quantity, else add the product to the cart and set the quantity to 1.
 *
 * @param cartItems
 * @param productToAdd
 * @return cartItems - new cartItems array
 */
const addProductToCart = (cartItems, productToAdd) => {
   /**
    * Check if we already have this product to add in the cartItems.
    *
    */
   if (cartItems.some((cartItem) => cartItem.id === productToAdd.id)) {
      /**
       * We have a match so let's map through the cartItems and again check if we have a match,
       * and if so the update the quantity and return (add to new array) a new cartItem with updated
       * quantity, else just return the cartItem (add to new array)
       *
       */
      return cartItems.map((cartItem) =>
         cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
      );
   } else {
      /**
       * if we didn't get a match it means we have a new product to add to the cartItems, so
       * we will return a new array with all the current cartItems plus the product to add and
       *  add the quantity field with value 1
       *
       */
      return [...cartItems, { ...productToAdd, quantity: 1 }];
   }
};

const removeCartItem = (cartItems, cartItemToRemove) => {
   /**
    * Check if we have this product to remove in the cartItems and if so remove it
    *
    */
   if (cartItems.some((cartItem) => cartItem.id === cartItemToRemove.id)) {
      return cartItems
         .map((cartItem) =>
            cartItem.id === cartItemToRemove.id
               ? { ...cartItem, quantity: cartItem.quantity - 1 }
               : cartItem,
         )
         .filter((cartItem) => cartItem.quantity > 0);
   } else {
      return cartItems;
   }
};

const clearCartItem = (cartItems, cartItemToClear) => {
   const newCartItems = [...cartItems];
   newCartItems.splice(
      newCartItems.findIndex((cartItem) => cartItem.id === cartItemToClear.id),
      1,
   );
   return newCartItems;
   // could also do the following - this filter would return all the items except the one to clear.
   // return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
   cartItems: [],
   cartCount: 0,
   cartTotal: 0,
   isCartOpen: false,
   addItemToCart: () => null,
   removeItemFromCart: () => null,
   clearItemFromCart: () => null,
   setIsCartOpen: () => null,
   setCartCount: () => null,
});

export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState([]);
   const [cartCount, setCartCount] = useState(0);
   const [cartTotal, setCartTotal] = useState(0);
   const [isCartOpen, setIsCartOpen] = useState(false);

   const addItemToCart = (productToAdd) => {
      const newCartItems = addProductToCart(cartItems, productToAdd);
      setCartItems(newCartItems);
   };

   const removeItemFromCart = (cartItemToRemove) => {
      const newCartItems = removeCartItem(cartItems, cartItemToRemove);
      setCartItems(newCartItems);
   };

   const clearItemFromCart = (cartItemToClear) => {
      const newCartItems = clearCartItem(cartItems, cartItemToClear);
      setCartItems(newCartItems);
   };

   const value = {
      cartItems,
      cartCount,
      cartTotal,
      isCartOpen,
      addItemToCart,
      removeItemFromCart,
      clearItemFromCart,
      setIsCartOpen,
      setCartCount,
   };

   /**
    * Monitor the cartItems array for add or delete from the cart and if any changes update the total item count.
    */
   useEffect(() => {
      const totalItems = cartItems.reduce((cartTotal, cartItem) => {
         return cartTotal + cartItem.quantity;
      }, 0);
      setCartCount(totalItems);
   }, [cartItems]);

   /** It's good practice to keep one task per useEffect even though the dependancy is the same!! */
   useEffect(() => {
      const totalPrice = cartItems
         .map((cartItem) => cartItem.quantity * cartItem.price)
         .reduce((prev, curr) => prev + curr, 0);

      setCartTotal(totalPrice);
   }, [cartItems]);

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
   children: PropTypes.node,
};
