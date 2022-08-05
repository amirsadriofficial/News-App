/**
 * @format
 */

import React from 'react';
import {Text, View, Image} from 'react-native';
import Layout from '../../containers/layout/Layout';
import SavedPostData from '../../utils/saved-posts/SavedPostData';

const SinglePost = ({route, navigation}: any) => {
  const {id} = route.params;
  const post = SavedPostData.filter(obj => obj.id === id);
  return (
    <Layout navigation={navigation}>
      <View>
        <Image source={post[0].image} />
        <Text>{post[0].title}</Text>
      </View>
    </Layout>
  );
};

export default SinglePost;
