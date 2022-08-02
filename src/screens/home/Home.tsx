/**
 * @format
 */

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Layout from '../../containers/layout/Layout';
import Header from './Header';
import PopularPostsSlider from '../../components/popular-posts-slider/PopularPostsSlider';
import {
  PopularPoliticsData,
  PopularSportsData,
} from '../../utils/home-posts/PopularPostsData';
// import styles from './styles/Home.style';

const PopularPoliticsSlider = () => {
  return <PopularPostsSlider data={PopularPoliticsData} />;
};
const PopularSportSlider = () => {
  return <PopularPostsSlider data={PopularSportsData} />;
};
const PopularScientificSlider = () => {
  return <PopularPostsSlider data={PopularPoliticsData} />;
};
const PopularTechnologySlider = () => {
  return <PopularPostsSlider data={PopularPoliticsData} />;
};
const PopularEconomicalSlider = () => {
  return <PopularPostsSlider data={PopularPoliticsData} />;
};
const PopularSocialSlider = () => {
  return <PopularPostsSlider data={PopularPoliticsData} />;
};
const PopularEducationalSlider = () => {
  return <PopularPostsSlider data={PopularPoliticsData} />;
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
