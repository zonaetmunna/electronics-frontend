import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  filers:filterReducer
});

export default rootReducer;