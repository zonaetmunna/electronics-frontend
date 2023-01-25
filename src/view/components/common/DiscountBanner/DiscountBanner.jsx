import React from 'react';

const DiscountBanner = () => {
  return (
    <div className='flex justify-around items-center px-2 py-5'>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <h5 className='text-2xl font-semibold'>Get 20% Off Discount Coupon</h5>
          <p className='text-base font-light'>by Subscribe our Newsletter</p>
        </div>
        <div className=''>
          <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get the Coupon</button>
        </div>
      </div>
    </div>
      
    
  );
};

export default DiscountBanner;