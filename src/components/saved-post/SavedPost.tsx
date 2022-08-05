/**
 * @format
 */

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles/SavedPost.style';
import SavedPostData from '../../utils/saved-posts/SavedPostData';

const SavedPost = () => {
  return (
    <ScrollView>
      {SavedPostData.map(post => (
        <View style={styles.container}>
          <Image source={post.image} style={styles.image} />
          <Text>{post.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default SavedPost;
