/**
 * @format
 */

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Picture from './../../assets/posts/1.png';
import styles from './styles/SavedPost.style';

const SavedPost = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Picture} style={styles.image} />
        <Text>Hello</Text>
      </View>
    </ScrollView>
  );
};

export default SavedPost;
