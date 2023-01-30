import React from 'react';

const DiscountBanner = () => {
  return (
    <div className='flex justify-around items-center mx-2 my-5 px-2 py-2 bg-orange-200'>
      <div>
        <img src="https://live.staticflickr.com/65535/52521844202_dd853335c9_o.jpg" alt="leptop" />
      </div>
      <div>
        <div className='py-2'>
          <h5 className='text-2xl font-semibold py-2'>Get 20% Off Discount Coupon</h5>
          <p className='text-base font-light py-2'>by Subscribe our Newsletter</p>
        </div>
        <div className='flex justify-center items-center'>
          <input type="search" id="default-search" className="p-4 pl-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Email" required />
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2">Get the Coupon</button>
        </div>
      </div>
    </div>
      
    
  );
};

export default DiscountBanner;