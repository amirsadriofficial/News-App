// /**
//  * @format
//  */

import React from 'react';
import Footer from './../footer/Footer';

type LayoutProps = {
  children: any;
  navigation: any;
};

const Layout = ({navigation, children}: LayoutProps) => {
  return (
    <>
      {children}
      <Footer navigation={navigation} />
    </>
  );
};

export default Layout;
