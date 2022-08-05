/**
 * @format
 */

import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles/SettingItems.style';

type ItemProps = {
  children: React.ReactNode;
  title: string;
};

const Item = ({children, title}: ItemProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.titleSection}>
          {children}
          <Text style={styles.title}>{title}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#1DA1F2" />
      </View>
    </TouchableOpacity>
  );
};

const SettingItems = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Item title="Personal Data">
        <AntDesign name="user" size={30} color="#282828" />
      </Item>
      <Item title="Setting">
        <Ionicons name="settings-outline" size={30} color="#282828" />
      </Item>
      <Item title="Downloads">
        <AntDesign name="download" size={30} color="#282828" />
      </Item>
      <Item title="Help">
        <Feather name="help-circle" size={32} color="#282828" />
      </Item>
      <Item title="About">
        <AntDesign name="infocirlceo" size={30} color="#282828" />
      </Item>
      <Item title="Log OUt">
        <AntDesign name="logout" size={30} color="#282828" />
      </Item>
    </SafeAreaView>
  );
};

export default SettingItems;
