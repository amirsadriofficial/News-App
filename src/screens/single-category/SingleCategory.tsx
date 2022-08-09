/**
 * @format
 */

import React from 'react';
import {Text, SafeAreaView, ScrollView, View} from 'react-native';
// import ScreenPosts from '../../components/screen-posts/ScreenPosts';
import styles from './styles/SingleCategory.style';

const SingleCategory = ({route}: any) => {
  const {category} = route.params;

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>{category}</Text>
        </View>
        {/* <ScreenPosts navigation={navigation} /> */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default SingleCategory;
