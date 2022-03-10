// Used by ProductList component.. end goal = store data retrieved for products by Apollo in this global state
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// Works like "UPDATE_PRODUCTS" 
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// We want to be able to select a category from state by the "UPDATE_CATEGORIES" action and display products for that category from list created from "UPDATE_PRODUCTS" action
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';
