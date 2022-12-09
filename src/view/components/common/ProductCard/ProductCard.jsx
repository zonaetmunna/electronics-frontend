import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="#">
        {/* <img class="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" /> */}
      </Link>
      <div className="px-5 pb-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          
          {/* rating */}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;