import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadProductsdata from '../../../redux/thunk/products/fetachProduct';
import Slider from '../../components/common/slider/Slider';
import Sidebar from '../../components/main/sidebar/Sidebar';
import Products from '../../components/main/products/Products';
import MiddleBanner from '../../components/main/home/MiddleBanner';
import DiscountBanner from '../../components/common/DiscountBanner/DiscountBanner';



const Home = () => {
  const products = useSelector(state => state.products.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsdata())
  }, [dispatch]);

  return (
    <div className='px-2'>
      <div className="">
        <Slider products={products}/>
      </div>
      <div className='grid grid-cols-12 p-3 gap-2' >
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <div className='col-span-10 rounded-lg'>
          <div>
            <h3 className='text-center text-yellow-500 my-2'>ALL Products</h3>
          </div>
          <div>
            <Products products={products} />
          </div>
          
        </div>
      </div>
      {/* middle banner */}
      <div>
        <MiddleBanner />
      </div>
      <div>
        <DiscountBanner/>
      </div>

      
    </div>
  );
};

export default Home;
//