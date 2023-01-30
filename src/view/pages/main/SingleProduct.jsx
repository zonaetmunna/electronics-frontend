import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, removeToCart } from '../../../redux/actions/productAction';
import { loadProductData } from '../../../redux/thunk/products/fetachProduct';


const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  useEffect(() => {
    dispatch(loadProductData(id))
  }, [id,dispatch]);

  

  console.log(product.singleProduct);


  return (
    <div className='flex justify-around items-center'>
      <div>
        <img src={product?.image} alt="" />
      </div>
      <div>
        <h4>{product?.model}</h4>
        <div className='mx-2 my-2'>
          <h1 className='mx-2 my-2'>Key Fetaure</h1>
          {/* {product.keyFeature.map((feature) => <div>
            <li className='mx-2 ps-2 my-2'>{feature}</li>
          </div>)} */}
        </div>
        <div>
          <div className='flex justify-center items-center'>
                <button onClick={() => dispatch(addToCart(product))}>+</button>
                <p>{product?.quantity}</p>
                <button
                  onClick={() => {
                    if (product?.quantity > 1) {
                      dispatch(removeToCart(product?._id));
                    } 
                  }}
                >-</button>
              </div>
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;