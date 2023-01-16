import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({products}) => {
  console.log(products);

  return (
    <div className='grid grid-cols-4 gap-2'>
      {products.map(product=><ProductCard key={product._id} product={product} />)}
    </div>
  );
};

export default Products;