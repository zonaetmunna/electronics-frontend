import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadProductsdata from '../../../../redux/thunk/products/fetachProduct';
import Slider from '../../../components/common/slider/Slider';
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
      <div className="py-20">
        <Slider />
      </div>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 p-5' >
        <div className='grid grid-cols-4'>
          <Sidebar />
        </div>
        <div className='grid grid-cols-8'>
          <Products products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;