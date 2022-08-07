/**
 * @format
 */

import React, {useState, useEffect} from 'react';
import PopularPostsSlider from '../../components/popular-posts-slider/PopularPostsSlider';
import NewPostsSlider from '../../components/new-posts-slider/NewPostsSlider';
import {PopularSportsData} from '../../utils/home-posts/PopularPostsData';

const PopularSocialSlider = () => {
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

export default PopularSocialSlider;
