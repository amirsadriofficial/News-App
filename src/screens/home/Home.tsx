/**
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import Layout from '../../containers/layout/Layout';
import Header from './Header';

const Home = ({navigation}: any) => {
  return (
    <Layout navigation={navigation}>
      <Header />
      <Text>This is Home page</Text>
    </Layout>
  );
};

export default Home;
