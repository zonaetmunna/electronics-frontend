import React, { useEffect, useState } from 'react';
import Products from '../../../components/main/products/Products';
import Sidebar from '../../../components/main/sidebar/Sidebar';


const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:5000/api/products';
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
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