/**
 * @format
 */

import React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ScreenPosts from '../../components/screen-posts/ScreenPosts';
import styles from './styles/SingleCategory.style';

const SingleCategory = ({route, navigation}: any) => {
  const {category} = route.params;
  const subject = category.toLowerCase();

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="#1DA1F2" />
          </TouchableOpacity>
          <Text style={styles.title}>{category}</Text>
        </View>
        <ScreenPosts navigation={navigation} subject={subject} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SingleCategory;
