/**
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
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
