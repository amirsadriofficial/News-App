/**
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Footer.style'

const Footer = () => {
  return (
    <SafeAreaView style={styles.footer}>
      <View style={styles.footer}>
        <Octicons name="home" size={50} color="#000" />
        <Text>Home</Text>
      </View>
      <View style={styles.footer}>
        <Feather name="search" size={50} color="#000" />
        <Text>Search</Text>
      </View>
      <View style={styles.footer}>
        <FontAwesome name="bookmark-o" size={50} color="#000" />
        <Text>Saved</Text>
      </View>
      <View style={styles.footer}>
        <Ionicons name="notifications-outline" size={50} color="#000" />
        <Text>Notifications</Text>
      </View>
      <View style={styles.footer}>
        <AntDesign name="user" size={50} color="#000" />
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Footer;
