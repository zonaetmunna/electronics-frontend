import React from 'react';
import { BsCart3, BsHeart,BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { FcAbout } from 'react-icons/fc';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const user = false;
  return (
    <div className="py-3 px-3">
      <div className='flex items-center justify-between'>
        {/* logo link */}
        <div className='text-black font-bold'>
          <Link to="/">Electronics</Link>   
        </div>
        {/* search input filed */}
        <div >
          <div className='inset-y-0 bg-white border-gray-600 border-b-4 rounded flex items-center'>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-black border-none bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
          </div>    
        </div>
        <div className='flex justify-around align-center'>
          {/* wishlist */}
          <div className='mx-2'>
            <Link to="/wishlist">
              <span><BsHeart size={20}/></span>
            </Link>    
          </div>
          {/* cart */}
          <div className='mx-2'>
            <Link to='/cart'>
              <span><BsCart3 size={20}/></span>
            </Link> 
          </div>
          <div className='mx-2'>
            <Link to="/about"><FcAbout size={20}/></Link>
          </div>
          {/* dashboard link */}
          <div className='mx-2'>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          {!user ? <div>
            <Link to="/account">
              <span><VscAccount size={20}/></span>
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