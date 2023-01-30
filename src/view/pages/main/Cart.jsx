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
        <hr className='bg-yellow-500' />
      </div>
      <div>
        {/* {cart.sort((a, b) => a.cartPosition - b.cartPosition).map(product => <ProductCard key={product._id} product={product}/>)} */}
        <div className="flex flex-col">
          <div className="">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow border-b border-gray-200 sm:rounded-lg">
                <table className="divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        product model
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        price
                      </th>
                      
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="">remove</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cart.sort((a, b) => a.cartPosition - b.cartPosition).map(product => (
                      <tr key={product._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src={product.image} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.model}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{product.price}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{product.quantty}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Total</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div
                            className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            remove
                          </div>
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        <div>
          <input type="number" />
          <button>Apply</button>
        </div>
      </div>
      <div>
        <div>
          <button>Conitue shopping</button>
          <button>Update Cart</button>
        </div>
      </div>
      <div>
        <div>
          <h4>SubTotal</h4>
          <h4>365</h4>
        </div>
        <hr />
        <div>
          <h4>Shipping</h4>
          <div className='flex justify-around items-center'>
            <input type="checkbox" name="" id="" />
            <span>Free Shipping</span>
            <span>+$000</span>
          </div>
          <div className='flex justify-around items-center'>
            <input type="checkbox" name="" id="" />
            <span>Flat Rate</span>
            <span>+$000</span>
          </div>
          <div className='flex justify-around items-center'>
            <input type="checkbox" name="" id="" />
            <span>Loacl Delevery</span>
            <span>+$000</span>
          </div>
        </div>
        <div>
          <h4>Calculate Shipping</h4>
          <div>
            {/* drropdown button */}
            <button>sleect country</button>
            <input type="text" name="" id="" placeholder='post code' />
          </div>
        </div>
        <div className='flex justify-around items-center'>
          <h4>Total</h4>
          <h4>$365</h4>
        </div>
        <div>
          <button>Procced to Checkout</button>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;