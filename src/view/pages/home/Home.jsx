import React from 'react';
import Filter from '../../components/common/filter/Filter';
import ProductCard from '../../components/common/ProductCard/ProductCard';
import Sidebar from '../../components/common/sidebar/Sidebar';


const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5' >
        <div className=''>
          <Sidebar />
        </div>
        <div className=''>
          <p>sidebar</p>
          <ProductCard/>
        </div>
      </div>

      
    </div>
  );
};

export default Home;