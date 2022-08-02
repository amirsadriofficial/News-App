/**
 * @format
 */

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Layout from '../../containers/layout/Layout';
import Header from './Header';
import PopularPostsSlider from '../../components/popular-posts-slider/PopularPostsSlider';
import {PopularPoliticsData} from '../../utils/home-posts/PopularPostsData';
// import styles from './styles/Home.style';

const PopularPoliticsSlider = () => {
  return <PopularPostsSlider data={PopularPoliticsData} />;
};
// const PopularPoliticsSlider = () => {
//   return <PopularPostsSlider data={PopularPoliticsData} />;
// };
// const PopularPoliticsSlider = () => {
//   return <PopularPostsSlider data={PopularPoliticsData} />;
// };
// const PopularPoliticsSlider = () => {
//   return <PopularPostsSlider data={PopularPoliticsData} />;
// };
// const PopularPoliticsSlider = () => {
//   return <PopularPostsSlider data={PopularPoliticsData} />;
// };
// const PopularPoliticsSlider = () => {
//   return <PopularPostsSlider data={PopularPoliticsData} />;
// };
// const PopularPoliticsSlider = () => {
//   return <PopularPostsSlider data={PopularPoliticsData} />;
// };

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
        <Tab.Screen name="Sport" component={PopularPoliticsSlider} />
        <Tab.Screen name="Scientific" component={PopularPoliticsSlider} />
        <Tab.Screen name="Technology" component={PopularPoliticsSlider} />
        <Tab.Screen name="Economical" component={PopularPoliticsSlider} />
        <Tab.Screen name="Social" component={PopularPoliticsSlider} />
        <Tab.Screen name="Educational" component={PopularPoliticsSlider} />
      </Tab.Navigator>
      {/* <StatusBar /> */}
    </Layout>
  );
};

export default Home;
