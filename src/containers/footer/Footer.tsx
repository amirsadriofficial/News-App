/**
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Footer = () => {
  return (
    <SafeAreaView>
      <Octicons name="home" size={50} color="#000" />
      <Feather name="search" size={50} color="#000" />
      <Ionicons name="notifications-outline" size={50} color="#000" />
      <FontAwesome name="bookmark-o" size={50} color="#000" />
      <AntDesign name="user" size={50} color="#000" />
    </SafeAreaView>
  );
};

export default Footer;
