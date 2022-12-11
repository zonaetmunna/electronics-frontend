import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../../components/main/ProductCard/ProductCard';

const Cart = () => {
  const cart = useSelector(state => state.product.cart);
  console.log(cart);
  return (
    <div>
      {cart.sort((a, b) => a.cartPosition - b.cartPosition).map(product => <ProductCard key={product._id} product={product}/>)}
    </div>
  );
};

export default Cart;