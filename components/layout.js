import React from 'react'
import Header from './header'
import Footer from './Footer';
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';


const Layout = ({ children, data }) => {
  return (
    <div className='fluid'>
      <Header />
      <CssBaseline />
      <main>{children}</main>
      <Footer />
    </div>
  );
};


export default Layout;
