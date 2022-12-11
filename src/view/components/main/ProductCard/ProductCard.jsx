import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { addToCart } from '../../../../redux/actions/productAction';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
 
  const handleClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div>
        <img className="p-8 rounded-t-lg" src={product.image} alt="computer parts" />
      </div>
      <div className="px-5 pb-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.model}</h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          
          {/* rating */}

        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
          <button onClick={() => dispatch(addToCart(product))} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
          <button onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">more</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;