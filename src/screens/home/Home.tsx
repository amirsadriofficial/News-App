/**
 * @format
 */

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Layout from '../../containers/layout/Layout';
import Header from './Header';
import PopularPoliticsSlider from './PopularPoliticsSlider';
import PopularSportSlider from './PopularSportSlider';
import PopularScientificSlider from './PopularScientificSlider';
import PopularTechnologySlider from './PopularTechnologySlider';
import PopularEconomicalSlider from './PopularEconomicalSlider';
import PopularSocialSlider from './PopularSocialSlider';
import PopularEducationalSlider from './PopularEducationalSlider';

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
        <Tab.Screen name="Politics" component={PopularPoliticsSlider} />
        <Tab.Screen name="Sport" component={PopularSportSlider} />
        <Tab.Screen name="Scientific" component={PopularScientificSlider} />
        <Tab.Screen name="Technology" component={PopularTechnologySlider} />
        <Tab.Screen name="Economical" component={PopularEconomicalSlider} />
        <Tab.Screen name="Social" component={PopularSocialSlider} />
        <Tab.Screen name="Educational" component={PopularEducationalSlider} />
      </Tab.Navigator>
    </Layout>
  );
};

export default Home;
