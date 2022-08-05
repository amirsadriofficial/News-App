/**
 * @format
 */

import React from 'react';
import {View, SafeAreaView, Text, Image, ScrollView} from 'react-native';
import styles from './styles/SavedPost.style';
import SavedPostData from '../../utils/saved-posts/SavedPostData';

const SavedPost = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {SavedPostData.map(post => (
          <View style={styles.postContainer}>
            <Image source={post.image} style={styles.image} />
            <Text style={styles.title}>{post.title}</Text>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default SavedPost;
