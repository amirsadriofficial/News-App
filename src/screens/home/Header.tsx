/**
 * @format
 */

import React from 'react';
import {Text, Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/Header.style';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerProfile}>
        <Image
          style={styles.headerAvatar}
          source={require('./../../assets/avatar/profile.jpg')}
        />
        <View style={styles.headerText}>
          <Text style={styles.headerName}>Amir Sadri</Text>
          <Text style={styles.headerUsername}>@amirsadri</Text>
        </View>
      </View>
      <View style={styles.headerNotification}>
        <Ionicons name="notifications-outline" size={25} color="#000" />
      </View>
    </View>
  );
};

export default Header;
