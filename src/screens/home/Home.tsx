/**
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Layout from '../../containers/layout/Layout';
import Header from './Header';
import PopularCarousel from './PopularCarousel';

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
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {width: 115},
        }}>
        <Tab.Screen name="Politics" component={PopularCarousel} />
        <Tab.Screen name="Sport" component={StatutScreen} />
        <Tab.Screen name="Scientific" component={CallScreen} />
        <Tab.Screen name="Technology" component={ChatScreen} />
        <Tab.Screen name="Economical" component={CallScreen} />
        <Tab.Screen name="Social" component={CallScreen} />
        <Tab.Screen name="Educational" component={CallScreen} />
      </Tab.Navigator>
      <StatusBar />
    </Layout>
  );
};

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

export default Home;
