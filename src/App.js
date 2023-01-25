import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import store, { persistor } from './redux/store';
import routes from './routes/routes';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={routes} />
        </PersistGate>
        
      </Provider>
      
    </>
  );
}

export default App;
