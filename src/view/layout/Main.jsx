import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/main/footer/Footer';
import Navbar from '../components/main/header/Navbar';
import NavSeconed from '../components/main/header/NavSeconed';

const Main = () => {
  return (
    <>
      <Navbar />
      <NavSeconed/>
      <Outlet/>
      <Footer />
      
    </>
  );
};

export default Main;