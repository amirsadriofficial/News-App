/**
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Layout from '../../containers/layout/Layout';
import Header from './Header';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChatScreen</Text>
    </View>
  );
};
const StatutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StatutScreen</Text>
    </View>
  );
};
const CallScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CallScreen</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const Home = ({navigation}: any) => {
  return (
    <Layout navigation={navigation}>
      <Header />
      <Text>This is Home page</Text>
        <Tab.Navigator>
          <Tab.Screen name="Chats" component={ChatScreen} />
          <Tab.Screen name="Status" component={StatutScreen} />
          <Tab.Screen name="Calls" component={CallScreen} />
        </Tab.Navigator>
        <StatusBar />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
