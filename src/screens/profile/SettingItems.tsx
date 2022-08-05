/**
 * @format
 */

import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles/SettingItems.style';

const SettingItems = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <View style={styles.titleSection}>
          <AntDesign name="user" size={30} color="#1DA1F2" />
          <Text style={styles.title}>Personal Data</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#1DA1F2" />
      </View>
      <View style={styles.item}>
        <View style={styles.titleSection}>
          <Ionicons name="settings-outline" size={30} color="#1DA1F2" />
          <Text style={styles.title}>Setting</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#1DA1F2" />
      </View>
      <View style={styles.item}>
        <View style={styles.titleSection}>
          <AntDesign name="download" size={30} color="#1DA1F2" />
          <Text style={styles.title}>Downloads</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#1DA1F2" />
      </View>
      <View style={styles.item}>
        <View style={styles.titleSection}>
          <Feather name="help-circle" size={32} color="#1DA1F2" />
          <Text style={styles.title}>Help</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#1DA1F2" />
      </View>
      <View style={styles.item}>
        <View style={styles.titleSection}>
          <AntDesign name="infocirlceo" size={30} color="#1DA1F2" />
          <Text style={styles.title}>About</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#1DA1F2" />
      </View>
      <View style={styles.item}>
        <View style={styles.titleSection}>
          <AntDesign name="logout" size={30} color="#1DA1F2" />
          <Text style={styles.title}>Log out</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="#1DA1F2" />
      </View>
    </SafeAreaView>
  );
};

export default SettingItems;
