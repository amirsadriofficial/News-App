/**
 * @format
 */

import React from 'react';
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
import styles from './styles/SavedPost.style';
import SavedPostData from '../../utils/saved-posts/SavedPostData';

const SavedPost = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {SavedPostData.map(post => (
          <View style={styles.postContainer}>
            <Image source={post.image} style={styles.image} />
            <View style={styles.descriptionContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{post.title}</Text>
                <View>
                  <Octicons name="tag" size={15} color="#999" />
                  <Text style={styles.tags}>{post.tags}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Feather name="more-vertical" size={25} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

export default SavedPost;
