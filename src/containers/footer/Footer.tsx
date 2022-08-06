/**
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles/Footer.style';

type ItemProps = {
  navigation: any;
  title: string;
  children: React.ReactNode;
};

const Item = ({navigation, title, children}: ItemProps) => {
  const route = useRoute();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(title)}>
      <View style={styles.items}>
        {children}
        <Text style={route.name === title ? styles.active : null}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Footer = ({navigation}: any) => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.footer}>
      <Item navigation={navigation} title="Home">
        {route.name === 'Home' ? (
          <Ionicons name="home" size={30} color="#000" />
        ) : (
          <Ionicons name="home-outline" size={30} color="#000" />
        )}
      </Item>
      <Item navigation={navigation} title="Explore">
        {route.name === 'Explore' ? (
          <Ionicons name="md-search" size={30} color="#000" />
        ) : (
          <Ionicons name="search-outline" size={30} color="#000" />
        )}
      </Item>
      <Item navigation={navigation} title="Saved">
        {route.name === 'Saved' ? (
          <FontAwesome name="bookmark" size={30} color="#000" />
        ) : (
          <FontAwesome name="bookmark-o" size={30} color="#000" />
        )}
      </Item>
      <Item navigation={navigation} title="Profile">
        {route.name === 'Profile' ? (
          <FontAwesome name="user" size={30} color="#000" />
        ) : (
          <FontAwesome name="user-o" size={30} color="#000" />
        )}
      </Item>
    </SafeAreaView>
  );
};

export default Footer;
