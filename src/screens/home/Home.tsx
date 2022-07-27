/**
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import Header from './Header';
import Footer from '../../containers/footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Text>This is Home page</Text>
      <Footer />
    </>
  );
};

export default Home;
