import { CART_ACTION_TYPES } from './cart-action.types';
import { createAction } from '../../utils/reducer/reducer.utils';

const addProductToCart = (cartItems, productToAdd) => {
   if (cartItems.some((cartItem) => cartItem.id === productToAdd.id)) {
      return cartItems.map((cartItem) =>
         cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
      );
   } else {
      return [...cartItems, { ...productToAdd, quantity: 1 }];
   }
};

const removeCartItem = (cartItems, cartItemToRemove) => {
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
};

// Here do do an inplicit return - DON'T forget to do a return if you have {}
export const setIsCartOpen = (boolean) =>
   createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
   const newCartItems = addProductToCart(cartItems, productToAdd);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
   const newCartItems = removeCartItem(cartItems, cartItemToRemove);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
   const newCartItems = clearCartItem(cartItems, cartItemToClear);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
