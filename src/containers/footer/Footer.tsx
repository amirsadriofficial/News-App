/**
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Footer.style'

const Footer = () => {
  return (
    <SafeAreaView style={styles.footer}>
      <View style={styles.footerItems}>
        <Octicons name="home" size={30} color="#000" />
        <Text>Home</Text>
      </View>
      <View style={styles.footerItems}>
        <Feather name="search" size={30} color="#000" />
        <Text>Search</Text>
      </View>
      <View style={styles.footerItems}>
        <FontAwesome name="bookmark-o" size={30} color="#000" />
        <Text>Saved</Text>
      </View>
      <View style={styles.footerItems}>
        <AntDesign name="user" size={30} color="#000" />
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Footer;
