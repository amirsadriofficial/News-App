/**
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles/ScreenPosts.style';
// import SavedPostData from '../../utils/saved-posts/SavedPostData';

const ScreenPosts = ({subject, navigation}: any) => {
  const [news, setNews] = useState();
  const getNews = () => {
    return fetch(
      `https://newsapi.org/v2/everything?q=${subject}&pageSize=100&apiKey=e35894b53c8d424387c2406d36370027`,
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
    <ScrollView>
      {news !== undefined ? (
        <SafeAreaView style={styles.container}>
          {news.map(item => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Single Post', {
                  id: item.id,
                })
              }>
              <View style={styles.postContainer}>
                <Image
                  source={{
                    uri: item.urlToImage,
                  }}
                  style={styles.image}
                />
                <View style={styles.descriptionContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.tagsContainer}>
                      <Octicons name="tag" size={15} color="#999" />
                      <Text style={styles.tags}>{item.tags}</Text>
                    </View>
                  </View>
                  <Feather
                    name="more-vertical"
                    size={25}
                    color="#000"
                    style={styles.moreIcon}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </SafeAreaView>
      ) : (
        <Spinner
          visible={news !== undefined ? false : true}
          textContent={'Loading...'}
          textStyle={styles.spinnerText}
        />
      )}
    </ScrollView>
  );
};

export default ScreenPosts;
