import { ADD_PRODUCT, ADD_TO_CART, CLEAR_CART, DELETE_PRODUCT, LOAD_PRODUCT, REMOVE_TO_CART } from "../actionTypes/actionTypes"

// product cart action
// add to cart
export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data
  }
};
// remoe form cart
export const removeToCart = (id) => {
  return {
    type: REMOVE_TO_CART,
    payload: id
  }
};
// clear cart
export const clearCart = () => {
  return {
    type: CLEAR_CART,
    
  }
};

// product fetching action
// product load action
export const loadProduct = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data
  }
};

// product add action
export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data
  }
};

// product delete action
export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
};