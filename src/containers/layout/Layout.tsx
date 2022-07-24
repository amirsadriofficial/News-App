/**
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import Header from './../header/Header';
import Footer from './../footer/Footer';

// type LayoutProps = {
//   children: any;
// };

const Layout = () => {
  return (
    <>
      <Header />
      <Text>This is Layout section</Text>
      <Footer />
    </>
  );
};

export default Layout;
