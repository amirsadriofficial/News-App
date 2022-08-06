/**
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles/Footer.style';

const Footer = ({navigation}: any) => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.items}>
          <Octicons name="home" size={30} color="#000" />
          <Text>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
        <View style={styles.items}>
          <Feather name="search" size={30} color="#000" />
          <Text>Explore</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Saved')}>
        <View style={styles.items}>
          <FontAwesome name="bookmark-o" size={30} color="#000" />
          <Text>Saved</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.items}>
          <AntDesign name="user" size={30} color="#000" />
          <Text style={route.name === 'Profile' ? styles.active : null}>
            Profile
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Footer;
