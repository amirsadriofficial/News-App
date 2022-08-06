/**
 * @format
 */

import React, {Children} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles/Footer.style';

type ItemProps = {
  navigation: any;
  title: string;
  children: React.ReactNode;
};

const Item = ({navigation, title, children}: ItemProps) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(title)}>
      <View style={styles.items}>
        {children}
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Footer = ({navigation}: any) => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.footer}>
      <Item navigation={navigation} title="Home">
        <Octicons name="home" size={30} color="#000" />
      </Item>
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
