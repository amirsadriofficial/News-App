/**
 * @format
 */

import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Layout from '../../containers/layout/Layout';
import Header from './Header';
import PopularPostsSlider from '../../components/popular-posts-slider/PopularPostsSlider';
import NewPostsSlider from '../../components/new-posts-slider/NewPostsSlider';
import {
  PopularPoliticsData,
  PopularSportsData,
  PopularScientificData,
  PopularTechnologyData,
  PopularEconomicalData,
  PopularSocialData,
  PopularEducationalData,
} from '../../utils/home-posts/PopularPostsData';
// import styles from './styles/Home.style';

const PopularPoliticsSlider = () => {
  const [news, setNews] = useState();
  const getNews = () => {
    return fetch(
      'https://newsapi.org/v2/everything?q=bitcoin&pageSize=10&apiKey=e35894b53c8d424387c2406d36370027',
    )
      .then(response => response.json())
      .then(response => {
        setNews(response.articles);
      });
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <PopularPostsSlider data={news} />
      <NewPostsSlider data={PopularSportsData} />
    </>
  );
};
const PopularSportSlider = () => {
  return (
    <>
      <PopularPostsSlider data={PopularPoliticsData} />
      <NewPostsSlider data={PopularSportsData} />
    </>
  );
};
const PopularScientificSlider = () => {
  return (
    <>
      <PopularPostsSlider data={PopularPoliticsData} />
      <NewPostsSlider data={PopularScientificData} />
    </>
  );
};
const PopularTechnologySlider = () => {
  return (
    <>
      <PopularPostsSlider data={PopularPoliticsData} />
      <NewPostsSlider data={PopularTechnologyData} />
    </>
  );
};
const PopularEconomicalSlider = () => {
  return (
    <>
      <PopularPostsSlider data={PopularPoliticsData} />
      <NewPostsSlider data={PopularEconomicalData} />
    </>
  );
};
const PopularSocialSlider = () => {
  return (
    <>
      <PopularPostsSlider data={PopularPoliticsData} />
      <NewPostsSlider data={PopularSocialData} />
    </>
  );
};
const PopularEducationalSlider = () => {
  return (
    <>
      <PopularPostsSlider data={PopularPoliticsData} />
      <NewPostsSlider data={PopularEducationalData} />
    </>
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
