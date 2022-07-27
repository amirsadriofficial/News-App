/**
 * @format
 */

import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './Header.style';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerAvatar}
        source={require('./../../assets/avatar/profile.jpg')}
      />
      <View style={styles.headerText}>
        <Text style={styles.headerName}>Amir Sadri</Text>
        <Text style={styles.headerUsername}>@amirsadri</Text>
      </View>
    </View>
  );
};

export default Header;
