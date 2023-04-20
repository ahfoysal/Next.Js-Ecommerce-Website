import React from 'react'
import Header from './header'
import TopMenu from './topMenu'
import Footer from './Footer';
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';


const Layout = ({ children, data }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className='fluid'>
    
      <Header />
       <CssBaseline />
      {/* <TopMenu /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};


export default Layout;
