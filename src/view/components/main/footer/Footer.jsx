import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-700 grid grid-cols-12 p-3 gap-2 justify-center items-center'>
      <div className='col-span-3 text-center'>
        <h4 className='text-white font-bold text-lg'>About us</h4>
        <p className='text-teal-500'>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
      </div>
      <div className='col-span-3 text-center'>
        <h4 className='text-white font-bold text-lg'>Fetaure</h4>
        <p className='text-teal-500'>About us</p>
        <p className='text-teal-500'>Terms condiotion</p>
         <p className='text-teal-500'>Best Products</p>
      </div>
      <div className='col-span-3 text-center'>
        <h4 className='text-white font-bold text-lg'>General links</h4>
        <p className='text-teal-500'>Blogs</p>
        <p className='text-teal-500'>Tracking Order</p>
        <p className='text-teal-500'>Become Seller</p>
        
      </div>
      <div className='text-center'>
        <h4 className='text-white font-bold text-lg'>Helpful</h4>
        <p className='text-teal-500'>Faq</p>
        <p className='text-teal-500'>Support</p>
      </div>
      
    </div>
  );
};

export default Footer;