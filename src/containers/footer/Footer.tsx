/**
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Footer = () => {
  return (
    <View>
      <Feather name="home" size={50} color="#ccc" />
      <Feather name="search" size={50} color="#ccc" />
    </View>
  );
};

export default Footer;
