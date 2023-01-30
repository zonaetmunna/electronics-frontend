import React from 'react';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FcCopyright } from 'react-icons/fc';


const FooterSeconed = () => {
  return (
    <div className='bg-gray-700 text-center flex justify-around items-center px-2 py-5'>
      <div className='flex justify-center items-center'>
        <div className='mx-2'>
          <BsFacebook size={25} className='text-blue-500'/>
        </div>
        <div className='mx-2'>
          <BsInstagram size={25} className='text-blue-500' />
        </div>
        <div className='mx-2'>
          <BsYoutube size={25} className='text-blue-500' />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <span><FcCopyright size={25} /> </span> <span className='mx-2'>2022QuomodosoftAll rights reserved</span>
      </div>
      
      <div >
        
      </div>
    </div>
  );
};

export default FooterSeconed;