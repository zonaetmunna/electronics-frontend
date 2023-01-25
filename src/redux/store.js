import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import cartCounter from "./middleware/cartCounter";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk))
  
);

export let persistor = persistStore(store)

export default store;