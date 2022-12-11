import React from 'react';
import { BsCart3, BsHeart,BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="bg-neutral-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className='container flex items-center justify-around'>
        <div>
          <h4 className=' text-lime-800'>Electronics</h4>
          <p className='/'>For all updated products</p>
        </div>
        <div >
          <div className='flex justify-between align-center border border-2 border-red-500'>
            <input type="text" name="" className='text-sm text-gray-900 border border-0' />
            <span><BsSearch /></span>
          </div>
          
        </div>
        <div className='flex justify-around align-center'>
          <div className='px-2'>
            <Link to='/cart'>
              <span><BsCart3 /></span>
              <span><p>cart</p></span>
            </Link>
            
          </div>
          <div className='px-2'>
            <Link to="/wishlist">
              <span><BsHeart/></span>
              <span><p>wishlist</p></span>
            </Link>
            
          </div>
          <div className='px-2'>
            <Link to="/about"><p>about</p></Link>
            
          </div>
          <div>
            <Link to="/account">
              <span><VscAccount /></span>
              <span>account</span>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;