import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import cartCounter from "./middleware/cartCounter";
import thunk from "redux-thunk";


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk))
  
);

export default store;