import React from 'react';
import { FaShippingFast,FaRProject } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { GrSecure } from 'react-icons/gr';

const MiddleBanner = () => {
  return (
    <div>
      <div className='flex justify-around items-center border border-blue-500 rounded shadow-lg  bg-gray-500 h-auto'>
        {/* shipping */}
        <div className='flex justify-around items-center px-2 py-2'>
          <div>
            <FaShippingFast size={30} className="text-yellow-500"/>
          </div>
          <div className='mx-4'>
            <h4 className='text-lg font-semibold text-sky-200'>Free Shipping</h4>
            <p className='text-sm text-sky-100'>When ordering over $100</p>
          </div>
        </div>
        {/* return */}
        <div className='flex justify-around items-center'>
          <div>
            <IoIosAddCircle size={30} className="text-yellow-500" />
          </div>
          <div>
            <h4 className='text-lg font-semibold text-sky-200'>Free Return</h4>
            <p className='text-sm text-sky-100'>Get Return within 30 days</p>
          </div>
        </div>
        {/* payment */}
        <div className='flex justify-around items-center'>
          <div>
            <GrSecure size={30} className="text-yellow-500" />
          </div>
          <div>
            <h4 className='text-lg font-semibold text-sky-200'>Secure Payment</h4>
            <p className='text-sm text-sky-100'>100% Secure Online Payment</p>
          </div>
        </div>
        {/*  */}
        <div className='flex justify-around items-center'>
          <div>
            <FaRProject size={30} className="text-yellow-500"/>
          </div>
          <div>
            <h4 className='text-lg font-semibold text-sky-200'>Best Quality</h4>
            <p className='text-sm text-sky-100'>Original Product Guarenteed</p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default MiddleBanner;