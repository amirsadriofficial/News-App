/**
 * @format
 */

import React from 'react';
import Header from './../header/Header';
import Footer from './../footer/Footer';

type LayoutProps = {
  children: any;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
