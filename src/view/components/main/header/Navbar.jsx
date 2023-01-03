import React from 'react';
import { BsCart3, BsHeart,BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { FcAbout } from 'react-icons/fc';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const user = false;
  return (
    <div className="mx-auto max-w-7xl bg-slate-700 px-2 sm:px-6 lg:px-8">
      <div className='relative flex h-16 items-center justify-around'>
        <div>
          <Link to="/"><h4 className='text-lime-800'>Electronics</h4></Link>
          
        </div>
        <div >
          <div className='inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div>
          
        </div>
        <div className='flex justify-around align-center'>
          <div className='px-2'>
            <Link to='/cart'>
              <span><BsCart3 /></span>
            </Link>
            
          </div>
          <div className='px-2'>
            <Link to="/wishlist">
              <span><BsHeart /></span>
            </Link>
            
          </div>
          <div className='px-2'>
            <Link to="/about"><FcAbout /></Link>
            
          </div>
          {user ? <div>
            <Link to="/account">
              <span><VscAccount /></span>
            </Link>
          </div> :
            <div>
              <Link to="/login">Login</Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;