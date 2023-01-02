import { ADD_TO_CART, CLEAR_CART, LOAD_PRODUCT, REMOVE_TO_CART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
  products: []
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  switch (action.type) {
    // products load
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    // products cart
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        }
      };
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        
      };
    case REMOVE_TO_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    
    case CLEAR_CART:
      return state;
  
    default:
      return state;
  }
    

};

export default productReducer;