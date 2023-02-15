import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { router } from './routes/routes';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
        
      </Provider>
      
    </>
  );
}

export default App;
