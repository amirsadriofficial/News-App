import React from 'react';
import {Text} from 'react-native';
import Footer from '../../containers/footer/Footer';

const Explore = ({navigation}: any) => {
  return (
    <>
      <Text>This is Explore page</Text>
      <Footer navigation={navigation} />
    </>
  );
};

export default Explore;
