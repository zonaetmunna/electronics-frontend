import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/main/ProductCard/ProductCard';


const Cart = () => {
  const cart = useSelector(state => state.products.cart);
  console.log(cart);
  return (
    <div>
      <div className='text-center px-5 py-5'>
        <h5 className='font-bold text-lg'>Your Cart Products</h5>
        <hr className='bg-yellow-500'/>
      </div>
      <div>
        {cart.sort((a, b) => a.cartPosition - b.cartPosition).map(product => <ProductCard key={product._id} product={product}/>)}
      </div>
      
    </div>
  );
};

export default Cart;