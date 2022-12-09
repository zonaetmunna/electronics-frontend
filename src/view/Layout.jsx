import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../routes/routes';
import Footer from './components/common/footer/Footer';
import Navbar from './components/common/header/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  );
};

export default Layout;