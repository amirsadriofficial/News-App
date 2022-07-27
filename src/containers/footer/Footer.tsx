/**
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Footer = () => {
  return (
    <View>
      <Feather name="home" size={50} color="#000" />
      <Feather name="search" size={50} color="#000" />
    </View>
  );
};

export default Footer;
