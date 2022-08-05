/**
 * @format
 */

import React from 'react';
import {Text, View, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SavedPostData from '../../utils/saved-posts/SavedPostData';
import styles from './styles/SinglePost.style';

const SinglePost = ({route, navigation}: any) => {
  const {id} = route.params;
  const post = SavedPostData.filter(obj => obj.id === id);
  return (
    <View>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={30} color="#1DA1F2" />
        <View style={styles.rightHeader}>
          <Octicons
            name="share-android"
            size={30}
            color="#1DA1F2"
            style={styles.shareIcon}
          />
          <FontAwesome name="bookmark-o" size={30} color="#1DA1F2" />
        </View>
      </View>
      <Image source={post[0].image} style={styles.image} />
      <Text>{post[0].title}</Text>
    </View>
  );
};

export default SinglePost;
