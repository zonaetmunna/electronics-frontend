import { ADD_TO_CART, REMOVE_TO_CART } from "../actionTypes/actionTypes"

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data
  }
};

export const removeToCart = (id) => {
  return {
    
    type: REMOVE_TO_CART,
    payload: id
  }
};