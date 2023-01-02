import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadProductsdata from '../../../../redux/thunk/products/fetachProduct';
import Products from '../../../components/main/products/Products';
import Sidebar from '../../../components/main/sidebar/Sidebar';


const Home = () => {
  const products = useSelector(state => state.products.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsdata())
  }, [dispatch]);
  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 p-5' >
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-5'>
          <Sidebar />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 p-5'>
          <Products products={products}  />
        </div>
      </div>
    </div>
  );
};

export default Home;