import React from 'react'
import Header from './header'
import Footer from './Footer';
import { CssBaseline } from '@mui/material';
import SideBar from './header/sideBar';


const Layout = ({ children, data }) => {
  return (
    <div className='fluid'>
     <CssBaseline />
      <Header />
      <SideBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};


export default Layout;
